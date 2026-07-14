#!/usr/bin/env node
/**
 * 批量将学习版文件转换为复习版
 * 处理故事11-20的学习版_扩充文件
 */

const fs = require('fs');
const path = require('path');

function convertLearningToReview(inputFile, outputFile) {
    let content = fs.readFileSync(inputFile, 'utf-8');

    // 1. 修改标题：学习版（扩充版）→ 复习版（扩充版）
    content = content.replace(/学习版（扩充版）/g, '复习版（扩充版）');

    // 2. 修改步骤
    content = content.replace(/Step 1：在语境中认识单词/g, 'Step 2：看单词回忆中文释义');

    // 3. 修改元数据
    content = content.replace(
        /本篇约 \d+ 字 · 融入 \d+ 个重点词汇 · 点击📢可朗读发音/g,
        '点击词汇显示/隐藏中文释义'
    );

    // 4. 修改CSS变量
    content = content.replace(/--pill: #E1BEE7;/g, '--pill-review: #C8E6C9;');
    content = content.replace(/--accent: #9C27B0;/g, '--accent: #4CAF50;');
    content = content.replace(/--bg-soft: #F3E5F5;/g, '--bg-soft: #E8F5E9;');
    content = content.replace(/var\(--pill\)/g, 'var(--pill-review)');

    // 5. 修改词汇标注
    // 匹配：<span class="w">word(中文)📢</span>
    // 替换为：<span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
    content = content.replace(
        /<span class="w">([^(]+)\(([^)]+)\)📢<\/span>/g,
        '<span class="r" onclick="toggle(this)">$1(<span class="h">$2</span>)</span>'
    );

    // 6. 替换CSS样式
    // 找到.w样式块并替换为.r样式
    const oldStyle = /\.w \{[^}]+\}/s;
    const newStyle = `.r {
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
  }`;

    content = content.replace(oldStyle, newStyle);

    // 7. 在</body>前添加JavaScript函数
    const scriptTag = `  <script>
  function toggle(el) {
    el.classList.toggle('show');
  }
  </script>
</body>`;

    content = content.replace('</body>', scriptTag);

    // 保存文件
    fs.writeFileSync(outputFile, content, 'utf-8');
    console.log(`已转换: ${path.basename(inputFile)} → ${path.basename(outputFile)}`);
}

function main() {
    const baseDir = __dirname;
    const resultDir = path.join(baseDir, '..', 'result');

    // 故事11-20的文件列表
    const files = [
        ['11_凤临天下_逆袭重生_学习版_扩充.html', '11_凤临天下_逆袭重生_复习版_扩充.html'],
        ['12_错爱成瘾_虐心情缘_学习版_扩充.html', '12_错爱成瘾_虐心情缘_复习版_扩充.html'],
        ['13_明争暗斗_升职之路_学习版_扩充.html', '13_明争暗斗_升职之路_复习版_扩充.html'],
        ['14_那年夏天_暗恋心事_学习版_扩充.html', '14_那年夏天_暗恋心事_复习版_扩充.html'],
        ['15_假戏真做_契约情缘_学习版_扩充.html', '15_假戏真做_契约情缘_复习版_扩充.html'],
        ['16_千金归来_重生复仇_学习版_扩充.html', '16_千金归来_重生复仇_复习版_扩充.html'],
        ['17_追妻火葬场_悔婚之后_学习版_扩充.html', '17_追妻火葬场_悔婚之后_复习版_扩充.html'],
        ['18_办公室恋情_禁忌之爱_学习版_扩充.html', '18_办公室恋情_禁忌之爱_复习版_扩充.html'],
        ['19_误会重重_破冰之旅_学习版_扩充.html', '19_误会重重_破冰之旅_复习版_扩充.html'],
        ['20_跨越千年_穿越情缘_学习版_扩充.html', '20_跨越千年_穿越情缘_复习版_扩充.html'],
    ];

    console.log('开始批量转换故事11-20的学习版为复习版...');
    console.log('-'.repeat(60));

    let successCount = 0;

    files.forEach(([inputName, outputName]) => {
        const inputPath = path.join(resultDir, inputName);
        const outputPath = path.join(resultDir, outputName);

        if (fs.existsSync(inputPath)) {
            try {
                convertLearningToReview(inputPath, outputPath);
                successCount++;
            } catch (error) {
                console.error(`错误: 处理 ${inputName} 时出错:`, error.message);
            }
        } else {
            console.log(`警告: 文件不存在 - ${inputPath}`);
        }
    });

    console.log('-'.repeat(60));
    console.log(`转换完成！成功转换 ${successCount} 个文件。`);
}

main();