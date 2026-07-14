#!/usr/bin/env node
/**
 * 批量转换故事31-40：学习版 → 复习版
 * 转换规则：
 * 1. 标题：学习版 → 复习版
 * 2. 步骤：Step 1 → Step 2：看单词回忆中文释义
 * 3. CSS：紫色系 → 绿色系
 * 4. 词汇标注：.w → .r，添加toggle函数，隐藏中文
 * 5. 删除📢符号
 */

const fs = require('fs');
const path = require('path');

// 绿色系CSS样式
const GREEN_CSS = `
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
`;

// JavaScript toggle函数
const TOGGLE_JS = `
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
`;

function convertFile(inputPath, outputPath) {
    let content = fs.readFileSync(inputPath, 'utf-8');

    // 1. 替换标题：学习版 → 复习版
    content = content.replace(/学习版（扩充版）/g, '复习版（扩充版）');
    content = content.replace(/学习版/g, '复习版');

    // 2. 替换步骤文本
    content = content.replace(
        /Step 1：在语境中认识单词/g,
        'Step 2：看单词回忆中文释义'
    );

    // 3. 替换CSS样式
    content = content.replace(
        /<style>[\s\S]*?<\/style>/,
        `<style>${GREEN_CSS}</style>`
    );

    // 4. 替换词汇标注：删除📢，转换格式
    content = content.replace(
        /<span class="w">([^<(]+)\(([^)]+)\)📢<\/span>/g,
        '<span class="r" onclick="toggle(this)">$1(<span class="h">$2</span>)</span>'
    );

    // 5. 在</body>前添加JavaScript函数
    if (content.includes('</body>')) {
        content = content.replace('</body>', TOGGLE_JS + '</body>');
    }

    // 6. 保存文件
    fs.writeFileSync(outputPath, content, 'utf-8');
    return true;
}

function main() {
    const baseDir = path.join(__dirname, '..');
    const resultDir = path.join(baseDir, 'result');

    // 文件列表（31-40）
    const files = [
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
    ];

    let successCount = 0;

    files.forEach(fileBase => {
        const inputFile = path.join(resultDir, `${fileBase}_学习版_扩充.html`);
        const outputFile = path.join(resultDir, `${fileBase}_复习版_扩充.html`);

        if (fs.existsSync(inputFile)) {
            try {
                convertFile(inputFile, outputFile);
                console.log(`✓ 转换成功: ${fileBase}`);
                successCount++;
            } catch (e) {
                console.error(`✗ 转换失败: ${fileBase} - ${e.message}`);
            }
        } else {
            console.log(`- 文件不存在，跳过: ${fileBase}`);
        }
    });

    console.log(`\n转换完成！成功转换 ${successCount} 个文件`);
}

main();