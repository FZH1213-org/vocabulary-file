#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
词汇汇总脚本
从100个学习版HTML文件中提取词汇，生成Excel和JSON汇总表
"""

import os
import re
import json
import time
from collections import defaultdict
from pathlib import Path
import pandas as pd
from bs4 import BeautifulSoup
import requests

# 项目路径
PROJECT_ROOT = Path(__file__).parent.parent
RESULT_DIR = PROJECT_ROOT / 'result'
OUTPUT_DIR = PROJECT_ROOT / 'statistics'
CACHE_FILE = PROJECT_ROOT / 'scripts' / 'vocab_cache.json'

# 输出文件
OUTPUT_EXCEL = OUTPUT_DIR / '词汇汇总表_扩充版.xlsx'
OUTPUT_JSON = OUTPUT_DIR / '词汇汇总表_扩充版.json'

def load_cache():
    """加载缓存"""
    if CACHE_FILE.exists():
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def save_cache(cache):
    """保存缓存"""
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

def get_phonetic_and_pos(word, cache):
    """从API获取音标和词性"""
    # 先检查缓存
    if word in cache:
        return cache[word].get('phonetic', ''), cache[word].get('pos', '')

    try:
        # 使用Free Dictionary API
        url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
        response = requests.get(url, timeout=5)

        if response.status_code == 200:
            data = response.json()
            if data and len(data) > 0:
                entry = data[0]
                phonetic = entry.get('phonetic', '')

                # 获取词性
                pos_list = []
                if 'meanings' in entry and len(entry['meanings']) > 0:
                    for meaning in entry['meanings']:
                        pos = meaning.get('partOfSpeech', '')
                        if pos and pos not in pos_list:
                            pos_list.append(pos)

                pos = ', '.join(pos_list) if pos_list else ''

                # 保存到缓存
                cache[word] = {
                    'phonetic': phonetic,
                    'pos': pos
                }

                return phonetic, pos
    except Exception as e:
        print(f"获取 {word} 失败: {e}")

    return '', ''

def extract_vocab_from_html(file_path):
    """从HTML文件中提取词汇"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # 提取所有词汇标注
    # 格式: <span class="w">word(中文)📢</span>
    vocab_list = []
    vocab_sentences = {}  # 记录每个词汇的例句

    # 查找所有包含词汇的span
    vocab_spans = soup.find_all('span', class_='w')

    for span in vocab_spans:
        text = span.get_text().strip()
        # 解析: word(中文)📢
        match = re.match(r'([a-zA-Z\-]+)\(([^)]+)\)', text)
        if match:
            word = match.group(1).lower()  # 转小写
            meaning = match.group(2)

            # 获取包含该词汇的句子
            parent = span.parent
            if parent:
                sentence = parent.get_text().strip()
                # 清理句子中的📢符号和多余空格
                sentence = sentence.replace('📢', '').strip()
                # 只保留前150个字符作为例句
                if len(sentence) > 150:
                    # 尝试截取到句号
                    end_pos = sentence[:150].rfind('.')
                    if end_pos > 50:
                        sentence = sentence[:end_pos+1]

                vocab_sentences[word] = sentence

            vocab_list.append({
                'word': word,
                'meaning': meaning
            })

    return vocab_list, vocab_sentences

def get_story_number(filename):
    """从文件名提取故事序号"""
    match = re.match(r'^(\d+)_', filename)
    if match:
        return int(match.group(1))
    return 0

def main():
    print("开始词汇汇总任务...")

    # 加载缓存
    cache = load_cache()
    print(f"已加载缓存，包含 {len(cache)} 个词汇")

    # 获取所有学习版HTML文件并按序号排序
    html_files = sorted(
        [f for f in RESULT_DIR.glob('*_学习版.html')],
        key=lambda x: get_story_number(x.name)
    )

    print(f"找到 {len(html_files)} 个学习版HTML文件")

    # 统计数据结构
    vocab_stats = defaultdict(lambda: {
        'count': 0,
        'first_story': 0,
        'meaning': '',
        'sentence': ''
    })

    # 遍历所有文件
    for idx, html_file in enumerate(html_files, 1):
        story_num = get_story_number(html_file.name)
        print(f"处理 [{idx}/100]: {html_file.name} (故事 {story_num})")

        vocab_list, vocab_sentences = extract_vocab_from_html(html_file)

        for vocab in vocab_list:
            word = vocab['word']
            meaning = vocab['meaning']

            vocab_stats[word]['count'] += 1

            # 记录首次出现的故事
            if vocab_stats[word]['first_story'] == 0:
                vocab_stats[word]['first_story'] = story_num
                vocab_stats[word]['meaning'] = meaning
                vocab_stats[word]['sentence'] = vocab_sentences.get(word, '')

    print(f"\n共提取到 {len(vocab_stats)} 个不同词汇")

    # 按首次出现故事排序
    sorted_vocabs = sorted(
        vocab_stats.items(),
        key=lambda x: (x[1]['first_story'], x[0])
    )

    # 构建输出数据
    output_data = []
    print("\n获取音标和词性...")

    for idx, (word, stats) in enumerate(sorted_vocabs, 1):
        print(f"处理词汇 [{idx}/{len(sorted_vocabs)}]: {word}")

        # 获取音标和词性
        phonetic, pos = get_phonetic_and_pos(word, cache)

        # 每获取50个词汇保存一次缓存
        if idx % 50 == 0:
            save_cache(cache)
            print(f"  已保存缓存 ({idx} 个词汇)")

        output_data.append({
            '序号': idx,
            '单词': word,
            '音标': phonetic,
            '词性（中文）': pos,
            '中文释义': stats['meaning'],
            '出现次数': stats['count'],
            '首次出现故事': stats['first_story'],
            '例句': stats['sentence']
        })

        # 添加小延迟避免API限流
        time.sleep(0.1)

    # 保存缓存
    save_cache(cache)
    print(f"\n缓存已保存，共 {len(cache)} 个词汇")

    # 创建DataFrame
    df = pd.DataFrame(output_data)

    # 保存为Excel
    print(f"\n保存Excel到: {OUTPUT_EXCEL}")
    df.to_excel(OUTPUT_EXCEL, index=False, engine='openpyxl')

    # 保存为JSON
    print(f"保存JSON到: {OUTPUT_JSON}")
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print("\n" + "="*60)
    print("词汇汇总完成!")
    print(f"总词汇数: {len(output_data)}")
    print(f"输出文件:")
    print(f"  - {OUTPUT_EXCEL}")
    print(f"  - {OUTPUT_JSON}")
    print("="*60)

if __name__ == '__main__':
    main()