const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const resultDir = path.join(__dirname, 'result');

// 获取所有学习版 HTML 文件
const files = fs.readdirSync(resultDir)
    .filter(file => file.endsWith('_学习版.html'));

console.log(`找到 ${files.length} 个学习版 HTML 文件`);

// 正则匹配词汇: <span class="w">word(中文)📢</span>
const wordRegex = /<span class="w">([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g;

let totalWords = 0;

for (const file of files) {
    const htmlPath = path.join(resultDir, file);
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // 提取词汇
    const words = [];
    let match;
    const seen = new Set();

    while ((match = wordRegex.exec(htmlContent)) !== null) {
        const word = match[1];
        const chinese = match[2];
        const key = `${word}|${chinese}`;

        // 去重
        if (!seen.has(key)) {
            seen.add(key);
            words.push({ word, chinese });
        }
    }

    if (words.length === 0) {
        console.log(`警告: ${file} 没有找到词汇`);
        continue;
    }

    // 生成 Excel 文件名: 01_职场女王_从实习生到总监_学习版.html -> 01_职场女王_从实习生到总监.xlsx
    const excelName = file.replace('_学习版.html', '.xlsx');
    const excelPath = path.join(resultDir, excelName);

    // 创建工作簿
    const wb = XLSX.utils.book_new();

    // 准备数据
    const data = [
        ['序号', '单词', '中文含义'],
        ...words.map((w, i) => [i + 1, w.word, w.chinese])
    ];

    // 创建工作表
    const ws = XLSX.utils.aoa_to_sheet(data);

    // 设置列宽
    ws['!cols'] = [
        { wch: 8 },   // 序号
        { wch: 20 },  // 单词
        { wch: 30 }   // 中文含义
    ];

    // 添加工作表到工作簿
    XLSX.utils.book_append_sheet(wb, ws, '词汇表');

    // 写入文件
    XLSX.writeFile(wb, excelPath);

    totalWords += words.length;
    console.log(`${file} -> ${excelName} (${words.length} 个词汇)`);
}

console.log(`\n完成! 共处理 ${files.length} 个文件, 总计 ${totalWords} 个词汇`);