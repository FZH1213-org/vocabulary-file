#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
提取所有故事中的词汇，统计并生成Excel表格
"""

import os
import re
import json
from collections import OrderedDict
from bs4 import BeautifulSoup
import requests
import time

def extract_vocab_from_html(file_path):
    """从HTML文件中提取词汇信息"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # 提取词汇，格式: <span class="w">word(中文)📢</span>
    vocab_list = []
    text_divs = soup.find_all('div', class_='text')

    for text_div in text_divs:
        paragraphs = text_div.find_all('p')
        for p in paragraphs:
            # 获取完整句子
            full_text = p.get_text()

            # 查找所有词汇标记
            spans = p.find_all('span', class_='w')
            for span in spans:
                vocab_text = span.get_text()
                # 解析格式: word(中文)📢
                match = re.match(r'([a-zA-Z\-]+)\((.+?)\)📢', vocab_text)
                if match:
                    word = match.group(1).lower()
                    chinese = match.group(2)

                    # 提取例句（包含该单词的完整句子）
                    # 从完整文本中找到包含这个单词的句子
                    sentences = re.split(r'[。！？]', full_text)
                    example_sentence = ""
                    for sentence in sentences:
                        if word in sentence.lower() or vocab_text in sentence:
                            example_sentence = sentence.strip()
                            break

                    vocab_list.append({
                        'word': word,
                        'chinese': chinese,
                        'example': example_sentence
                    })

    return vocab_list

def get_phonetic_and_pos(word):
    """从有道词典API获取音标和词性"""
    url = f"https://dict.youdao.com/jsonapi?q={word}&le=en"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }

    try:
        response = requests.get(url, headers=headers, timeout=5)
        data = response.json()

        result = {
            'phonetic': '',
            'pos': ''
        }

        # 尝试从ec词库获取
        if 'ec' in data:
            ec_data = data['ec']
            if 'word' in ec_data and len(ec_data['word']) > 0:
                word_info = ec_data['word'][0]
                # 获取音标
                if 'ukphone' in word_info:
                    result['phonetic'] = f"/{word_info.get('ukphone', '')}/"
                elif 'phone' in word_info:
                    result['phonetic'] = f"/{word_info['phone']}/"

                # 获取词性
                if 'trs' in word_info and len(word_info['trs']) > 0:
                    pos_list = []
                    for tr in word_info['trs']:
                        if 'pos' in tr and tr['pos']:
                            pos_list.append(tr['pos'])
                    if pos_list:
                        result['pos'] = ','.join(set(pos_list))

        return result
    except Exception as e:
        print(f"Error getting phonetic for {word}: {e}")
        return {'phonetic': '', 'pos': ''}

def main():
    result_dir = 'result'
    output_dir = 'statistics'

    # 确保输出目录存在
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # 获取所有学习版HTML文件，按编号排序
    html_files = []
    for filename in os.listdir(result_dir):
        if filename.endswith('_学习版.html'):
            # 提取编号
            match = re.match(r'(\d+)_', filename)
            if match:
                number = int(match.group(1))
                html_files.append((number, filename))

    # 按编号排序
    html_files.sort(key=lambda x: x[0])

    print(f"找到 {len(html_files)} 个学习版文件")

    # 存储所有词汇
    all_vocab = OrderedDict()  # 使用OrderedDict保持插入顺序
    vocab_first_appear = {}  # 记录每个单词第一次出现的位置
    vocab_examples = {}  # 记录每个单词的例句

    # 处理每个文件
    position = 0
    for number, filename in html_files:
        file_path = os.path.join(result_dir, filename)
        print(f"处理文件: {filename}")

        vocab_list = extract_vocab_from_html(file_path)

        for vocab_info in vocab_list:
            word = vocab_info['word']
            chinese = vocab_info['chinese']
            example = vocab_info['example']

            if word not in all_vocab:
                all_vocab[word] = {
                    'word': word,
                    'chinese': chinese,
                    'count': 0,
                    'first_position': position,
                    'example': example
                }
                position += 1

            all_vocab[word]['count'] += 1

            # 如果没有例句，使用这个例句
            if word in all_vocab and not all_vocab[word]['example'] and example:
                all_vocab[word]['example'] = example

    print(f"\n共提取到 {len(all_vocab)} 个不同的词汇")

    # 获取音标和词性
    print("\n开始获取音标和词性信息...")
    total = len(all_vocab)
    for idx, (word, info) in enumerate(all_vocab.items(), 1):
        print(f"处理进度: {idx}/{total} - {word}")
        phonetic_pos = get_phonetic_and_pos(word)
        info['phonetic'] = phonetic_pos['phonetic']
        info['pos'] = phonetic_pos['pos']

        # 避免请求过于频繁
        time.sleep(0.1)

    # 生成Excel文件
    print("\n生成Excel文件...")
    try:
        import pandas as pd

        # 准备数据
        data = []
        for word, info in all_vocab.items():
            data.append({
                '单词': info['word'],
                '音标': info['phonetic'],
                '词性': info['pos'],
                '中文释义': info['chinese'],
                '出现次数': info['count'],
                '例句': info['example']
            })

        df = pd.DataFrame(data)

        # 保存为Excel
        output_file = os.path.join(output_dir, '词汇汇总表.xlsx')
        df.to_excel(output_file, index=False, engine='openpyxl')

        print(f"\n✅ 成功生成词汇汇总表: {output_file}")
        print(f"总共汇总了 {len(data)} 个词汇")

    except ImportError:
        print("\n未安装pandas，尝试使用openpyxl生成Excel...")
        try:
            from openpyxl import Workbook

            wb = Workbook()
            ws = wb.active
            ws.title = "词汇汇总"

            # 写入表头
            headers = ['单词', '音标', '词性', '中文释义', '出现次数', '例句']
            ws.append(headers)

            # 写入数据
            for word, info in all_vocab.items():
                ws.append([
                    info['word'],
                    info['phonetic'],
                    info['pos'],
                    info['chinese'],
                    info['count'],
                    info['example']
                ])

            output_file = os.path.join(output_dir, '词汇汇总表.xlsx')
            wb.save(output_file)

            print(f"\n✅ 成功生成词汇汇总表: {output_file}")
            print(f"总共汇总了 {len(all_vocab)} 个词汇")

        except ImportError:
            print("\n未安装openpyxl，生成JSON文件...")
            output_file = os.path.join(output_dir, '词汇汇总表.json')
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(list(all_vocab.values()), f, ensure_ascii=False, indent=2)
            print(f"已生成JSON文件: {output_file}")

if __name__ == '__main__':
    main()