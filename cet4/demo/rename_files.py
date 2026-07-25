import os
import re
import json

# 读取标题映射
with open('cet4/demo/title_mapping.json', 'r', encoding='utf-8') as f:
    mapping_data = json.load(f)
    title_mapping = mapping_data['titleMapping']

# 工作目录
result_dir = 'cet4/result'

# 获取所有html文件
html_files = [f for f in os.listdir(result_dir) if f.endswith('.html') and f != 'temp.html']

print(f"找到 {len(html_files)} 个文件需要处理")

# 处理每个文件
for old_filename in sorted(html_files):
    # 提取编号和版本
    match = re.match(r'(\d+)_(.+)_(复习版|学习版)\.html', old_filename)
    if not match:
        print(f"跳过无法匹配的文件: {old_filename}")
        continue

    num, old_title, version = match.groups()
    mapping_key = f"{num}_{old_title}"

    # 查找新的标题
    if mapping_key not in title_mapping:
        print(f"未找到映射: {mapping_key}")
        continue

    new_title = title_mapping[mapping_key]

    # 读取文件内容
    filepath = os.path.join(result_dir, old_filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 替换title标签中的标题
    # 旧格式: <title>重生商女：逆袭之路 · 复习版</title>
    # 新格式: <title>重生商女：豪门弃女逆袭记 · 复习版</title>
    version_text = '复习版' if version == '复习版' else '学习版'
    content = re.sub(
        r'<title>.+? · ' + version_text + '</title>',
        f'<title>{new_title} · {version_text}</title>',
        content
    )

    # 替换h1标签中的标题
    content = re.sub(
        r'<h1>.+?</h1>',
        f'<h1>{new_title}</h1>',
        content
    )

    # 构造新文件名
    # 新格式: 01_重生商女_豪门弃女逆袭记_复习版.html
    new_filename = f"{num}_{new_title.replace('：', '_')}_{version}.html"
    new_filepath = os.path.join(result_dir, new_filename)

    # 写入新文件
    with open(new_filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    # 删除旧文件（如果文件名不同）
    if old_filename != new_filename:
        os.remove(filepath)
        print(f"已重命名: {old_filename} -> {new_filename}")
    else:
        print(f"已更新: {old_filename}")

print("\n所有文件处理完成！")