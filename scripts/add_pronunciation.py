#!/usr/bin/env python3
"""
为所有学习版HTML文件添加发音朗读功能
"""

import os
import re
from pathlib import Path

# 配置
BASE_DIR = Path(__file__).parent.parent
RESULT_DIR = BASE_DIR / "result"

def add_pronunciation_feature(html_file):
    """为学习版HTML添加发音功能"""

    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 添加CSS样式，让📢可点击
    additional_css = """
  .w::after {
    cursor: pointer;
    opacity: 0.7;
  }
  .w:hover::after {
    opacity: 1;
  }"""

    # 在</style>前添加CSS
    content = content.replace('</style>', additional_css + '\n</style>')

    # 添加JavaScript发音函数
    speech_script = """
  <script>
  // 发音功能
  document.addEventListener('DOMContentLoaded', function() {
    // 为所有词汇标注添加点击事件
    document.querySelectorAll('.w').forEach(function(span) {
      // 找到单词部分（括号前的英文）
      var text = span.textContent;
      var match = text.match(/^([a-zA-Z]+)/);
      if (match) {
        var word = match[1];
        span.style.cursor = 'pointer';
        span.title = '点击发音: ' + word;
        span.addEventListener('click', function() {
          speak(word);
        });
      }
    });
  });

  function speak(word) {
    // 取消之前的发音
    window.speechSynthesis.cancel();

    // 创建新的发音
    var utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;  // 稍慢一点，便于学习
    utterance.pitch = 1.0;

    // 播放发音
    window.speechSynthesis.speak(utterance);
  }
  </script>"""

    # 在</body>前添加脚本
    content = content.replace('</body>', speech_script + '\n</body>')

    # 写回文件
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(content)

    return True

def main():
    print("=" * 60)
    print("批量添加发音功能到学习版文件")
    print("=" * 60)

    # 获取所有学习版文件
    learn_files = sorted(RESULT_DIR.glob("*_学习版.html"))
    print(f"\n找到 {len(learn_files)} 个学习版文件")

    success_count = 0
    error_count = 0

    for i, html_file in enumerate(learn_files, 1):
        try:
            print(f"处理文件 {i}/{len(learn_files)}: {html_file.name}")
            add_pronunciation_feature(html_file)
            success_count += 1
        except Exception as e:
            print(f"  错误: {e}")
            error_count += 1

    print("\n" + "=" * 60)
    print(f"处理完成！")
    print(f"成功: {success_count} 个文件")
    print(f"失败: {error_count} 个文件")
    print("=" * 60)

if __name__ == "__main__":
    main()