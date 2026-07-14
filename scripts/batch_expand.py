#!/usr/bin/env python3
"""
故事扩充自动化脚本
用于批量扩充剩余的90个故事
"""

import os
import re
import json
from pathlib import Path

# 配置
BASE_DIR = Path(__file__).parent.parent
RESULT_DIR = BASE_DIR / "result"
VOCAB_FILE = BASE_DIR / "demo" / "考研英语词汇乱序版.xls"

# 扩充模板（词汇池）
VOCAB_POOL = {
    "商业管理": [
        "strategy", "revenue", "budget", "allocate", "executive", "financial",
        "investment", "acquisition", "merger", "partnership", "negotiate",
        "contract", "proposal", "venture", "enterprise", "corporation",
        "management", "administration", "operation", "efficiency", "productivity"
    ],
    "动作行为": [
        "analyze", "implement", "evaluate", "negotiate", "coordinate",
        "organize", "establish", "develop", "expand", "transform",
        "overcome", "achieve", "demonstrate", "illustrate", "emphasize",
        "investigate", "examine", "identify", "resolve", "execute"
    ],
    "情感心理": [
        "confidence", "anxiety", "passion", "ambition", "determination",
        "emotion", "affection", "anticipation", "nervous", "courage",
        "hesitation", "excitement", "satisfaction", "frustration", "hope"
    ],
    "形容词副词": [
        "comprehensive", "crucial", "effective", "potential", "significant",
        "remarkable", "extraordinary", "magnificent", "spectacular", "elegant",
        "rigorous", "intense", "gradual", "eventual", "ultimate"
    ]
}

# 扩充策略映射
EXPANSION_STRATEGIES = {
    "大女主": {
        "重点词汇": ["商业管理", "能力提升", "成长蜕变"],
        "情节侧重": ["商业布局", "能力展示", "逆袭过程"]
    },
    "霸总": {
        "重点词汇": ["商业管理", "情感变化", "决策风格"],
        "情节侧重": ["商业帝国", "个人魅力", "情感纠葛"]
    },
    "职场": {
        "重点词汇": ["职场技能", "人际关系", "职业发展"],
        "情节侧重": ["工作挑战", "团队协作", "职业晋升"]
    },
    "校园": {
        "重点词汇": ["学习生活", "青春情感", "成长蜕变"],
        "情节侧重": ["校园环境", "青春互动", "学业成长"]
    },
    "恋爱": {
        "重点词汇": ["情感表达", "互动细节", "关系发展"],
        "情节侧重": ["相遇相识", "情感升温", "甜蜜互动"]
    }
}

def extract_vocab_from_html(html_file):
    """从HTML文件中提取词汇列表"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 提取词汇
    pattern = r'<span class="w">([a-zA-Z]+)\('
    vocab_list = re.findall(pattern, content)
    return list(set(vocab_list))

def get_story_theme(story_name):
    """根据故事名称判断主题"""
    if any(keyword in story_name for keyword in ["女王", "重生", "逆袭", "商业"]):
        return "大女主"
    elif any(keyword in story_name for keyword in ["总裁", "霸总", "契约", "豪门"]):
        return "霸总"
    elif any(keyword in story_name for keyword in ["职场", "升职", "公司"]):
        return "职场"
    elif any(keyword in story_name for keyword in ["校园", "学长", "社团", "青春"]):
        return "校园"
    elif any(keyword in story_name for keyword in ["恋爱", "告白", "心动", "暗恋"]):
        return "恋爱"
    else:
        return "大女主"  # 默认

def generate_expansion_prompt(story_num, story_file, theme):
    """生成扩充提示词"""
    vocab_count = len(extract_vocab_from_html(story_file))
    target_vocab = 150
    new_vocab = target_vocab - vocab_count

    strategy = EXPANSION_STRATEGIES.get(theme, EXPANSION_STRATEGIES["大女主"])

    prompt = f"""请扩充故事{story_num}，按照以下要求：

**读取原版：**
- 文件：{story_file}

**扩充目标：**
- 字数：原版约900字 → 扩充版约3000字
- 词汇：原版约{vocab_count}个 → 扩充版约{target_vocab}个
- 新增词汇：约{new_vocab}个考研词汇

**扩充方向：**
1. {strategy['情节侧重'][0]}
2. {strategy['情节侧重'][1]}
3. {strategy['情节侧重'][2]}

**词汇重点：**
- {strategy['重点词汇'][0]}类词汇
- {strategy['重点词汇'][1]}类词汇
- {strategy['重点词汇'][2]}类词汇

**输出格式：**
生成完整的HTML文件内容，学习版格式。
词汇标注格式：<span class="w">word(中文)📢</span>

请将扩充后的完整HTML内容写入文件：
{story_file.replace('学习版.html', '学习版_扩充.html')}
"""
    return prompt

def generate_review_prompt(learn_file):
    """生成复习版转换提示词"""
    prompt = f"""请基于学习版创建复习版：

**读取文件：** {learn_file}

**转换要求：**
1. 标题改为：复习版（扩充版）
2. 步骤改为：Step 2：看单词回忆中文释义
3. 元数据改为：点击词汇显示/隐藏中文释义
4. CSS变量改为：
   - --pill-review: #C8E6C9
   - --accent: #4CAF50
   - --bg-soft: #E8F5E9
5. 词汇标注改为：
   - 类名：r（不是w）
   - 格式：<span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
   - 删除📢符号
6. 在</body>前添加：
   <script> function toggle(el) {{ el.classList.toggle('show'); }} </script>

**输出文件：** {learn_file.replace('学习版_扩充.html', '复习版_扩充.html')}
"""
    return prompt

def main():
    """主函数"""
    print("=" * 60)
    print("故事扩充自动化脚本")
    print("=" * 60)

    # 获取所有学习版文件
    learn_files = sorted(RESULT_DIR.glob("*_学习版.html"))

    # 过滤已扩充的文件
    all_stories = []
    for f in learn_files:
        expanded_file = f.parent / f.name.replace('学习版.html', '学习版_扩充.html')
        if not expanded_file.exists():
            all_stories.append(f)

    print(f"\n找到 {len(all_stories)} 个待扩充故事")

    # 统计
    total_vocab = 0
    story_info = []

    for i, story_file in enumerate(all_stories, 1):
        vocab_list = extract_vocab_from_html(story_file)
        story_name = story_file.stem.replace('_学习版', '')
        theme = get_story_theme(story_name)

        info = {
            "编号": i,
            "文件": str(story_file),
            "名称": story_name,
            "主题": theme,
            "原版词汇": len(vocab_list),
            "目标词汇": 150,
            "扩充提示词": generate_expansion_prompt(i, story_file, theme)
        }

        story_info.append(info)
        total_vocab += len(vocab_list)

        print(f"{i:3d}. {story_name:30s} | 词汇: {len(vocab_list):3d}个 | 主题: {theme}")

    print("\n" + "=" * 60)
    print(f"总计: {len(all_stories)} 个故事")
    print(f"原版总词汇: {total_vocab} 个")
    print(f"预估扩充后: {len(all_stories) * 150} 个词汇")
    print("=" * 60)

    # 保存故事信息到JSON
    info_file = BASE_DIR / "scripts" / "story_info.json"
    with open(info_file, 'w', encoding='utf-8') as f:
        json.dump(story_info, f, ensure_ascii=False, indent=2)

    print(f"\n故事信息已保存至: {info_file}")
    print("\n提示：使用以下命令批量处理")
    print("  - 学习版扩充：使用Agent工具并行处理")
    print("  - 复习版生成：使用Agent工具批量转换")

if __name__ == "__main__":
    main()