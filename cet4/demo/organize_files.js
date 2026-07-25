const fs = require('fs');
const path = require('path');

// 结果目录
const resultDir = 'cet4/result';

// 获取所有学习版HTML文件作为基础
const files = fs.readdirSync(resultDir);
const studyHtmlFiles = files.filter(f =>
    f.endsWith('_学习版.html') && !f.includes('temp')
).sort();

console.log(`找到 ${studyHtmlFiles.length} 个故事需要整理\n`);

// 保留在根目录的文件
const keepFiles = new Set([
    'CET4全部词汇汇总.xlsx',
    '词汇汇总.xlsx',
    'CET4词汇学习表_完整版.html'
]);

// 处理每个故事
studyHtmlFiles.forEach((studyHtml, index) => {
    // 提取故事基础名称（去掉版本后缀）
    // 格式: 01_重生商女_豪门弃女逆袭记_学习版.html
    const baseMatch = studyHtml.match(/^(\d+_.+?)_学习版\.html$/);
    if (!baseMatch) {
        console.log(`无法解析: ${studyHtml}`);
        return;
    }

    const baseName = baseMatch[1]; // 01_重生商女_豪门弃女逆袭记
    console.log(`[${index + 1}/${studyHtmlFiles.length}] ${baseName}`);

    // 创建文件夹
    const folderPath = path.join(resultDir, baseName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`  ✓ 创建文件夹: ${baseName}`);
    }

    // 需要移动的文件列表
    const relatedFiles = [
        `${baseName}_复习版.html`,
        `${baseName}_复习版.pdf`,
        `${baseName}_学习版.html`,
        `${baseName}_学习版.pdf`,
        `${baseName}_学习版.xlsx`,
        `${baseName}_学习版_词汇表.html`
    ];

    // 移动文件
    let movedCount = 0;
    relatedFiles.forEach(filename => {
        const srcPath = path.join(resultDir, filename);
        const destPath = path.join(folderPath, filename);

        if (fs.existsSync(srcPath)) {
            // 移动文件
            fs.renameSync(srcPath, destPath);
            console.log(`  ✓ 移动: ${filename}`);
            movedCount++;
        }
    });

    console.log(`  已移动 ${movedCount} 个文件\n`);
});

console.log(`\n========== 整理完成 ==========`);

// 统计剩余文件
const remainingFiles = fs.readdirSync(resultDir).filter(f => {
    const fullPath = path.join(resultDir, f);
    return fs.statSync(fullPath).isFile() && !keepFiles.has(f);
});

console.log(`\n保留在根目录的文件:`);
keepFiles.forEach(f => {
    const filePath = path.join(resultDir, f);
    if (fs.existsSync(filePath)) {
        console.log(`  ✓ ${f}`);
    }
});

if (remainingFiles.length > 0) {
    console.log(`\n警告: 根目录还有 ${remainingFiles.length} 个未分类文件`);
}

// 统计文件夹数量
const folders = fs.readdirSync(resultDir).filter(f => {
    const fullPath = path.join(resultDir, f);
    return fs.statSync(fullPath).isDirectory();
});

console.log(`\n创建文件夹: ${folders.length} 个`);
console.log(`故事整理: 完成！`);