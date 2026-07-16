import csv
import json

# 读取CSV文件
csv_file = r'E:\FZH\vocabulary-file\vocabulary-file\statistics\所有故事词汇汇总_按首次出现排序.csv'

vocabulary_data = []

with open(csv_file, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    header_found = False

    for row in reader:
        # 找到表头行
        if '序号' in str(row):
            header_found = True
            continue

        # 跳过非数据行
        if not header_found or len(row) < 6:
            continue

        # 跳过统计行
        if '统计' in str(row) or '总词汇' in str(row):
            continue

        try:
            vocab_id = int(row[0])
            word = row[1].strip('"')
            translation = row[2].strip('"')
            story_name = row[4].strip('"')
            count = int(row[5])

            vocabulary_data.append({
                'id': vocab_id,
                'word': word,
                'translation': translation,
                'storyName': story_name,
                'count': count
            })
        except (ValueError, IndexError) as e:
            continue

# 生成JavaScript数组字符串
js_array = '[\n'
for i, vocab in enumerate(vocabulary_data):
    js_array += f"            {{id: {vocab['id']}, word: \"{vocab['word']}\", translation: \"{vocab['translation']}\", storyName: \"{vocab['storyName']}\", count: {vocab['count}}}"
    if i < len(vocabulary_data) - 1:
        js_array += '},\n'
    else:
        js_array += '}\n'
js_array += '        ]'

print(f"读取到 {len(vocabulary_data)} 个词汇")
print(f"生成的JavaScript数组长度: {len(js_array)} 字符")

# 保存到文件供查看
with open(r'E:\FZH\vocabulary-file\vocabulary-file\statistics\vocabulary_data.js', 'w', encoding='utf-8') as f:
    f.write(f'const vocabularyData = {js_array};')

print("数据已保存到 vocabulary_data.js")