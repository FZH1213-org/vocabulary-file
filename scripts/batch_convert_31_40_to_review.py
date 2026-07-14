#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量转换故事31-40：学习版 → 复习版
转换规则：
1. 标题：学习版 → 复习版
2. 步骤：Step 1 → Step 2：看单词回忆中文释义
3. CSS：紫色系 → 绿色系
4. 词汇标注：.w → .r，添加toggle函数，隐藏中文
5. 删除📢符号
"""

import os
import re

# 绿色系CSS样式
GREEN_CSS = """
:root{--pill:#C8E6C9;--accent:#4CAF50;--bg-soft:#E8F5E9}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;color:#2b2b2b;background:linear-gradient(180deg,var(--bg-soft),#fff);background-attachment:fixed}
.wrap{max-width:297mm;width:100%;margin:0 auto;padding:0 40px 80px}
header.top{text-align:center;padding:46px 40px 30px}
header.top .badge{display:inline-block;padding:5px 16px;border-radius:999px;background:var(--accent);color:#fff;font-size:13px;margin-bottom:16px}
header.top h1{font-size:34px;margin:0 0 10px}
header.top p.sub{color:#888;font-size:15px;margin:0 0 18px}
section.story{background:#fff;border-radius:20px;padding:30px 32px 34px;margin-bottom:30px;box-shadow:0 8px 30px rgba(0,0,0,.05)}
section.story .step{display:inline-block;font-size:13px;color:var(--accent);font-weight:700;border-left:4px solid var(--accent);padding-left:10px;margin-bottom:14px;background:var(--bg-soft);border-radius:4px;padding:6px 12px}
section.story h2{font-size:26px;margin:6px 0 8px}
section.story h2 .no{color:var(--accent);margin-right:10px}
section.story .meta{font-size:13px;color:#aaa;margin-bottom:22px}
section.story .text p{font-size:18px;line-height:2.4;margin:0 0 4px;text-align:justify}
.r{background-color:#C8E6C9;border-radius:999px;padding:.12em .55em;margin:0 1px;white-space:nowrap;color:#333;font-weight:600;cursor:pointer;position:relative}
.r .h{visibility:hidden;opacity:0;position:absolute;left:50%;bottom:100%;transform:translateX(-50%);background:#fff;padding:4px 12px;border-radius:6px;font-size:14px;font-weight:400;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.15);transition:opacity .2s;z-index:100;color:#333}
.r:hover .h{visibility:visible;opacity:1}
footer{text-align:center;color:#bbb;font-size:13px;margin-top:40px}
"""

# JavaScript toggle函数
TOGGLE_JS = """
<script>
function toggle(el) {
    var h = el.querySelector('.h');
    if (h.style.visibility === 'visible') {
        h.style.visibility = 'hidden';
        h.style.opacity = '0';
    } else {
        h.style.visibility = 'visible';
        h.style.opacity = '1';
    }
}
</script>
"""

def convert_file(input_path, output_path):
    """转换单个文件"""
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. 替换标题：学习版 → 复习版
    content = re.sub(r'学习版（扩充版）', '复习版（扩充版）', content)
    content = re.sub(r'学习版', '复习版', content)

    # 2. 替换步骤文本
    content = re.sub(
        r'Step 1：在语境中认识单词',
        'Step 2：看单词回忆中文释义',
        content
    )

    # 3. 替换CSS样式
    content = re.sub(
        r'<style>.*?</style>',
        f'<style>{GREEN_CSS}</style>',
        content,
        flags=re.DOTALL
    )

    # 4. 替换词汇标注：删除📢，转换格式
    # 匹配：<span class="w">word(中文)📢</span>
    # 替换为：<span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
    def replace_vocab(match):
        word_content = match.group(1)
        # 提取单词和中文
        vocab_match = re.match(r'([^(]+)\(([^)]+)\)', word_content)
        if vocab_match:
            word = vocab_match.group(1)
            chinese = vocab_match.group(2)
            return f'<span class="r" onclick="toggle(this)">{word}(<span class="h">{chinese}</span>)</span>'
        return match.group(0)

    content = re.sub(
        r'<span class="w">([^<]+)📢</span>',
        replace_vocab,
        content
    )

    # 5. 在</body>前添加JavaScript函数
    if '</body>' in content:
        content = content.replace('</body>', TOGGLE_JS + '</body>')

    # 6. 保存文件
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)

    return True

def main():
    # 源目录和目标目录
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    result_dir = os.path.join(base_dir, 'result')

    # 文件列表（31-40）
    files = [
        '31_凤凰涅槃_重生之女',
        '32_宠妻成瘾_甜蜜日常',
        '33_初入职场_菜鸟逆袭',
        '34_青春恋曲_校园情缘',
        '35_契约之恋_先婚后爱',
        '36_穿越王妃_权谋逆袭',
        '37_追妻千里_悔婚之后',
        '38_商场如战_尔虞我诈',
        '39_误打误撞_破镜重圆',
        '40_闪婚甜恋_意外之爱'
    ]

    success_count = 0
    for file_base in files:
        input_file = os.path.join(result_dir, f'{file_base}_学习版_扩充.html')
        output_file = os.path.join(result_dir, f'{file_base}_复习版_扩充.html')

        if os.path.exists(input_file):
            try:
                convert_file(input_file, output_file)
                print(f'✓ 转换成功: {file_base}')
                success_count += 1
            except Exception as e:
                print(f'✗ 转换失败: {file_base} - {str(e)}')
        else:
            print(f'- 文件不存在，跳过: {file_base}')

    print(f'\n转换完成！成功转换 {success_count} 个文件')

if __name__ == '__main__':
    main()