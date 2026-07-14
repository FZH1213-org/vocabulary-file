#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量将学习版文件转换为复习版
处理故事11-20的学习版_扩充文件
"""

import os
import re

def convert_learning_to_review(input_file, output_file):
    """
    将学习版文件转换为复习版
    """
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. 修改标题：学习版（扩充版）→ 复习版（扩充版）
    content = content.replace('学习版（扩充版）', '复习版（扩充版）')
    content = re.sub(r'<title>(.*?)· 学习版（扩充版）', r'<title>\1· 复习版（扩充版）', content)

    # 2. 修改步骤
    content = content.replace('Step 1：在语境中认识单词', 'Step 2：看单词回忆中文释义')

    # 3. 修改元数据：提取字数和词汇数，重新组织
    meta_pattern = r'<div class="meta">本篇约 (\d+) 字 · 融入 (\d+) 个重点词汇 · 点击📢可朗读发音</div>'
    meta_match = re.search(meta_pattern, content)
    if meta_match:
        word_count = meta_match.group(1)
        vocab_count = meta_match.group(2)
        new_meta = f'<div class="meta">点击词汇显示/隐藏中文释义</div>'
        content = re.sub(meta_pattern, new_meta, content)

    # 4. 修改CSS变量
    # 替换CSS变量名和颜色值
    content = content.replace('--pill: #E1BEE7;', '--pill-review: #C8E6C9;')
    content = content.replace('--accent: #9C27B0;', '--accent: #4CAF50;')
    content = content.replace('--bg-soft: #F3E5F5;', '--bg-soft: #E8F5E9;')

    # 替换CSS中的变量引用
    content = content.replace('var(--pill)', 'var(--pill-review)')

    # 5. 修改词汇标注
    # 匹配模式：<span class="w">word(中文)📢</span>
    # 替换为：<span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
    def replace_vocab(match):
        full_text = match.group(1)
        # 提取单词和中文释义
        vocab_match = re.match(r'([^(]+)\(([^)]+)\)', full_text)
        if vocab_match:
            word = vocab_match.group(1)
            chinese = vocab_match.group(2)
            return f'<span class="r" onclick="toggle(this)">{word}(<span class="h">{chinese}</span>)</span>'
        return match.group(0)

    content = re.sub(r'<span class="w">([^<]+)📢</span>', replace_vocab, content)

    # 6. 添加CSS样式用于隐藏中文释义
    # 在<style>标签内添加样式
    style_pattern = r'(<style>.*?)(\.w \{.*?\})'
    style_match = re.search(style_pattern, content, re.DOTALL)
    if style_match:
        # 找到.w样式块的位置
        old_w_style = style_match.group(2)
        # 创建新的样式块
        new_style = '''
  .r {
    background-color: #C8E6C9;
    border-radius: 999px;
    padding: 0.12em 0.55em;
    margin: 0 1px;
    white-space: nowrap;
    color: #333;
    font-weight: 600;
    cursor: pointer;
  }
  .r .h {
    display: none;
  }
  .r.show .h {
    display: inline;
  }'''
        content = content.replace(old_w_style, new_style)

    # 7. 在</body>前添加JavaScript函数
    if '</body>' in content:
        script = '''  <script>
  function toggle(el) {
    el.classList.toggle('show');
  }
  </script>
'''
        content = content.replace('</body>', script + '</body>')

    # 保存文件
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'已转换: {input_file} → {output_file}')

def main():
    """
    主函数：批量处理故事11-20的学习版文件
    """
    base_dir = os.path.dirname(os.path.abspath(__file__))
    result_dir = os.path.join(base_dir, '..', 'result')

    # 故事11-20的文件列表
    files = [
        ('11_凤临天下_逆袭重生_学习版_扩充.html', '11_凤临天下_逆袭重生_复习版_扩充.html'),
        ('12_错爱成瘾_虐心情缘_学习版_扩充.html', '12_错爱成瘾_虐心情缘_复习版_扩充.html'),
        ('13_明争暗斗_升职之路_学习版_扩充.html', '13_明争暗斗_升职之路_复习版_扩充.html'),
        ('14_那年夏天_暗恋心事_学习版_扩充.html', '14_那年夏天_暗恋心事_复习版_扩充.html'),
        ('15_假戏真做_契约情缘_学习版_扩充.html', '15_假戏真做_契约情缘_复习版_扩充.html'),
        ('16_千金归来_重生复仇_学习版_扩充.html', '16_千金归来_重生复仇_复习版_扩充.html'),
        ('17_追妻火葬场_悔婚之后_学习版_扩充.html', '17_追妻火葬场_悔婚之后_复习版_扩充.html'),
        ('18_办公室恋情_禁忌之爱_学习版_扩充.html', '18_办公室恋情_禁忌之爱_复习版_扩充.html'),
        ('19_误会重重_破冰之旅_学习版_扩充.html', '19_误会重重_破冰之旅_复习版_扩充.html'),
        ('20_跨越千年_穿越情缘_学习版_扩充.html', '20_跨越千年_穿越情缘_复习版_扩充.html'),
    ]

    print('开始批量转换故事11-20的学习版为复习版...')
    print('-' * 60)

    success_count = 0
    for input_name, output_name in files:
        input_path = os.path.join(result_dir, input_name)
        output_path = os.path.join(result_dir, output_name)

        if os.path.exists(input_path):
            try:
                convert_learning_to_review(input_path, output_path)
                success_count += 1
            except Exception as e:
                print(f'错误: 处理 {input_name} 时出错: {e}')
        else:
            print(f'警告: 文件不存在 - {input_path}')

    print('-' * 60)
    print(f'转换完成！成功转换 {success_count} 个文件。')

if __name__ == '__main__':
    main()