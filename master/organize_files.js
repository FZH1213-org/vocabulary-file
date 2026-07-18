const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const resultDir = path.join(__dirname, 'result');

// 获取所有 Excel 文件作为故事列表
const excelFiles = fs.readdirSync(resultDir)
    .filter(file => file.endsWith('.xlsx') && !file.includes('词汇汇总'))
    .sort();

console.log(`找到 ${excelFiles.length} 个故事`);

let movedCount = 0;

for (const excelFile of excelFiles) {
    // 提取故事名称（去掉.xlsx后缀）
    const storyName = excelFile.replace('.xlsx', '');

    // 创建文件夹路径
    const folderPath = path.join(resultDir, storyName);

    // 创建文件夹
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`创建文件夹: ${storyName}`);
    }

    // 需要移动的文件列表
    const filesToMove = [
        `${storyName}_学习版.html`,
        `${storyName}_复习版.html`,
        `${storyName}_学习版.pdf`,
        `${storyName}_复习版.pdf`,
        `${storyName}.xlsx`,
        `${storyName}_词汇表.html`
    ];

    // 移动文件
    for (const fileName of filesToMove) {
        const srcPath = path.join(resultDir, fileName);
        const destPath = path.join(folderPath, fileName);

        if (fs.existsSync(srcPath)) {
            try {
                // 移动文件
                fs.renameSync(srcPath, destPath);
                movedCount++;
                console.log(`  移动: ${fileName}`);
            } catch (err) {
                console.error(`  移动失败: ${fileName}`, err.message);
            }
        }
    }
}

console.log(`\n完成! 创建 ${excelFiles.length} 个文件夹, 移动 ${movedCount} 个文件`);