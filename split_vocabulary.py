#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
随机打乱CET6词汇表并按每50个拆分到JSON文件
"""

import pandas as pd
import json
import random
import os
from pathlib import Path

def main():
    # 文件路径
    input_file = 'cet6/demo/大学英语六级词汇完整-正序版.xls'
    output_dir = 'cet6/demo/split_json'

    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)

    # 读取Excel文件
    print(f"正在读取文件: {input_file}")
    df = pd.read_excel(input_file)

    print(f"总词汇数: {len(df)}")
    print(f"列名: {df.columns.tolist()}")
    print(f"\n前5行数据:")
    print(df.head())

    # 转换为字典列表
    words_list = df.to_dict('records')

    # 随机打乱顺序
    print("\n正在随机打乱顺序...")
    random.shuffle(words_list)

    # 按每50个拆分
    chunk_size = 50
    total_words = len(words_list)
    num_chunks = (total_words + chunk_size - 1) // chunk_size

    print(f"拆分成 {num_chunks} 个文件，每个最多 {chunk_size} 个词汇")

    # 保存到JSON文件
    for i in range(num_chunks):
        start_idx = i * chunk_size
        end_idx = min((i + 1) * chunk_size, total_words)
        chunk = words_list[start_idx:end_idx]

        # 生成文件名
        output_file = os.path.join(output_dir, f'cet6_words_{i+1:03d}.json')

        # 保存JSON文件
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(chunk, f, ensure_ascii=False, indent=2)

        print(f"已保存: {output_file} ({len(chunk)} 个词汇)")

    print(f"\n完成！共生成 {num_chunks} 个JSON文件")
    print(f"输出目录: {output_dir}")

if __name__ == '__main__':
    main()