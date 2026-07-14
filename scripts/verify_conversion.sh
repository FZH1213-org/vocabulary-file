#!/bin/bash
# 验证31-40复习版转换结果

echo "=== 验证故事31-40复习版转换 ==="
echo ""

for i in {31..40}; do
    file=$(ls E:/FZH/vocabulary-file/vocabulary-file/result/${i}_*复习版_扩充.html 2>/dev/null | head -1)
    if [ -f "$file" ]; then
        name=$(basename "$file")
        
        # 检查各项转换要求
        has_review=$(grep -c "复习版" "$file" || echo 0)
        has_step2=$(grep -c "Step 2：看单词回忆中文释义" "$file" || echo 0)
        has_green=$(grep -c "#4CAF50" "$file" || echo 0)
        has_toggle=$(grep -c "onclick=\"toggle(this)\"" "$file" || echo 0)
        has_ad_icon=$(grep -c "📢" "$file" || echo 0)
        
        echo "✓ $name"
        echo "  - 标题包含'复习版': $has_review 处"
        echo "  - 步骤文本正确: $has_step2 处"
        echo "  - 绿色系CSS: $has_green 处"
        echo "  - toggle函数: $has_toggle 处"
        echo "  - 📢符号: $has_ad_icon 处 (应为0)"
        echo ""
    else
        echo "✗ 故事${i}文件不存在"
    fi
done
