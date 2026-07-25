"""
词汇Excel文件使用示例

本脚本演示如何读取和使用生成的词汇Excel文件
"""

import pandas as pd
import os

# 示例1: 读取单个词汇文件
def read_single_vocab(excel_path):
    """读取单个词汇Excel文件"""
    df = pd.read_excel(excel_path, sheet_name='词汇表')
    print(f"\n文件: {os.path.basename(excel_path)}")
    print(f"词汇数量: {len(df)}")
    print("\n前10个词汇:")
    print(df.head(10).to_string(index=False))
    return df

# 示例2: 读取汇总文件
def read_summary():
    """读取词汇汇总文件"""
    summary_path = 'cet4/result/词汇汇总.xlsx'
    df = pd.read_excel(summary_path, sheet_name='汇总')
    print("\n词汇汇总统计:")
    print(df.to_string(index=False))

    # 统计信息
    print(f"\n总文件数: {len(df)}")
    print(f"总词汇数: {df['词汇数量'].sum()}")
    print(f"平均词汇: {df['词汇数量'].mean():.1f}")
    print(f"最多词汇: {df['词汇数量'].max()}")
    print(f"最少词汇: {df['词汇数量'].min()}")

    return df

# 示例3: 查找包含特定单词的文件
def find_word(word, result_dir='cet4/result'):
    """查找包含特定单词的所有文件"""
    files = [f for f in os.listdir(result_dir)
             if f.endswith('_学习版.xlsx')]

    found_files = []
    for file in files:
        file_path = os.path.join(result_dir, file)
        df = pd.read_excel(file_path, sheet_name='词汇表')

        if word.lower() in df['单词'].str.lower().values:
            found_files.append({
                '文件': file,
                '单词': word
            })

    if found_files:
        print(f"\n找到 '{word}' 的文件:")
        for item in found_files:
            print(f"  - {item['文件']}")
    else:
        print(f"\n未找到单词 '{word}'")

    return found_files

# 示例4: 统计高频词汇
def count_word_frequency(result_dir='cet4/result'):
    """统计所有文件中的词汇频率"""
    all_words = []
    files = [f for f in os.listdir(result_dir)
             if f.endswith('_学习版.xlsx')]

    for file in files:
        file_path = os.path.join(result_dir, file)
        df = pd.read_excel(file_path, sheet_name='词汇表')
        all_words.extend(df['单词'].tolist())

    # 统计频率
    from collections import Counter
    word_freq = Counter(all_words)

    print("\n出现次数最多的前20个词汇:")
    for word, count in word_freq.most_common(20):
        print(f"  {word}: {count}次")

    return word_freq

# 主函数
if __name__ == '__main__':
    print("=" * 60)
    print("词汇Excel文件使用示例")
    print("=" * 60)

    # 示例1: 读取单个文件
    print("\n【示例1】读取单个词汇文件")
    vocab_file = 'cet4/result/01_重生商女_豪门弃女逆袭记_学习版.xlsx'
    if os.path.exists(vocab_file):
        df = read_single_vocab(vocab_file)

    # 示例2: 读取汇总
    print("\n【示例2】读取词汇汇总")
    summary = read_summary()

    # 示例3: 查找单词
    print("\n【示例3】查找特定单词")
    find_word('success')

    # 示例4: 统计高频词
    print("\n【示例4】统计高频词汇")
    count_word_frequency()

    print("\n" + "=" * 60)
    print("示例运行完成！")
    print("=" * 60)