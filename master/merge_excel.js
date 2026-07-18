const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const resultDir = path.join(__dirname, 'result');

// 获取所有 Excel 文件
const files = fs.readdirSync(resultDir)
    .filter(file => file.endsWith('.xlsx'))
    .sort();

console.log(`找到 ${files.length} 个 Excel 文件`);

// 创建汇总工作簿
const summaryWb = XLSX.utils.book_new();

// 汇总数据
const allWords = [];

for (const file of files) {
    const excelPath = path.join(resultDir, file);

    try {
        const workbook = XLSX.readFile(excelPath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);

        // 提取故事名称
        const storyName = file.replace('.xlsx', '');

        // 添加故事名称列
        data.forEach(row => {
            allWords.push({
                '故事': storyName,
                '序号': row['序号'] || '',
                '单词': row['单词'] || row['word'] || '',
                '中文含义': row['中文含义'] || row['translation'] || row['chinese'] || ''
            });
        });

        console.log(`${file}: ${data.length} 个词汇`);
    } catch (err) {
        console.error(`处理失败: ${file}`, err.message);
    }
}

console.log(`\n总计 ${allWords.length} 个词汇`);

// 创建汇总表
const summaryData = [
    ['故事', '序号', '单词', '中文含义'],
    ...allWords.map(w => [w['故事'], w['序号'], w['单词'], w['中文含义']])
];

const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);

// 设置列宽
summaryWs['!cols'] = [
    { wch: 45 },  // 故事
    { wch: 8 },   // 序号
    { wch: 20 },  // 单词
    { wch: 30 }   // 中文含义
];

XLSX.utils.book_append_sheet(summaryWb, summaryWs, '词汇汇总');

// 保存汇总文件
const summaryPath = path.join(resultDir, '词汇汇总_全部故事.xlsx');
XLSX.writeFile(summaryWb, summaryPath);

console.log(`\n已保存到: 词汇汇总_全部故事.xlsx`);