const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// 结果目录
const resultDir = 'cet4/result';

// 获取所有Excel词汇表（排除汇总文件和临时文件）
const files = fs.readdirSync(resultDir);
const excelFiles = files.filter(f =>
    f.endsWith('_学习版.xlsx') &&
    !f.includes('汇总') &&
    !f.startsWith('~$')
).sort();

console.log(`找到 ${excelFiles.length} 个Excel文件需要汇总\n`);

// 汇总数据
const allVocabularies = [];
const storyStats = [];

let totalWords = 0;
let uniqueWords = new Set();

// 处理每个Excel文件
excelFiles.forEach((excelFile, index) => {
    console.log(`[${index + 1}/${excelFiles.length}] 读取: ${excelFile}`);

    const excelPath = path.join(resultDir, excelFile);

    // 读取Excel
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    // 提取故事名
    const storyMatch = excelFile.match(/^\d+_(.+?)_学习版\.xlsx$/);
    const storyName = storyMatch ? storyMatch[1] : excelFile;

    // 添加到汇总
    data.forEach(row => {
        allVocabularies.push({
            故事: storyName,
            序号: row['序号'],
            单词: row['单词'],
            中文释义: row['中文释义'],
            完整形式: row['完整形式']
        });

        uniqueWords.add(row['单词']);
        totalWords++;
    });

    // 统计
    storyStats.push({
        故事编号: (index + 1).toString().padStart(2, '0'),
        故事名称: storyName,
        词汇数量: data.length,
        文件名: excelFile
    });

    console.log(`  ✓ ${data.length} 个词汇`);
});

console.log(`\n========== 开始生成汇总文件 ==========`);

// 创建工作簿
const wb = XLSX.utils.book_new();

// Sheet 1: 全部词汇汇总
console.log('\n生成 Sheet 1: 全部词汇汇总');
const vocabData = [
    ['故事', '序号', '单词', '中文释义', '完整形式'],
    ...allVocabularies.map(v => [v.故事, v.序号, v.单词, v.中文释义, v.完整形式])
];
const vocabSheet = XLSX.utils.aoa_to_sheet(vocabData);
vocabSheet['!cols'] = [
    { wch: 30 },  // 故事
    { wch: 8 },   // 序号
    { wch: 20 },  // 单词
    { wch: 30 },  // 中文释义
    { wch: 40 }   // 完整形式
];
XLSX.utils.book_append_sheet(wb, vocabSheet, '全部词汇');

// Sheet 2: 故事统计
console.log('生成 Sheet 2: 故事统计');
const statsData = [
    ['故事编号', '故事名称', '词汇数量', '文件名'],
    ...storyStats.map(s => [s.故事编号, s.故事名称, s.词汇数量, s.文件名]),
    [],  // 空行
    ['总计', '', totalWords, ''],
    ['去重后', '', uniqueWords.size, '']
];
const statsSheet = XLSX.utils.aoa_to_sheet(statsData);
statsSheet['!cols'] = [
    { wch: 10 },  // 故事编号
    { wch: 40 },  // 故事名称
    { wch: 12 },  // 词汇数量
    { wch: 50 }   // 文件名
];
XLSX.utils.book_append_sheet(wb, statsSheet, '故事统计');

// Sheet 3: 词汇频率统计
console.log('生成 Sheet 3: 词汇频率统计');
const wordFrequency = {};
allVocabularies.forEach(v => {
    const word = v.单词;
    if (!wordFrequency[word]) {
        wordFrequency[word] = {
            单词: word,
            中文释义: v.中文释义,
            出现次数: 0,
            出现故事: []
        };
    }
    wordFrequency[word].出现次数++;
    if (!wordFrequency[word].出现故事.includes(v.故事)) {
        wordFrequency[word].出现故事.push(v.故事);
    }
});

// 按出现次数排序
const sortedWords = Object.values(wordFrequency)
    .sort((a, b) => b.出现次数 - a.出现次数)
    .slice(0, 100);  // 只取前100个高频词

const freqData = [
    ['序号', '单词', '中文释义', '出现次数', '出现故事数', '出现故事'],
    ...sortedWords.map((w, idx) => [
        idx + 1,
        w.单词,
        w.中文释义,
        w.出现次数,
        w.出现故事.length,
        w.出现故事.join('、')
    ])
];
const freqSheet = XLSX.utils.aoa_to_sheet(freqData);
freqSheet['!cols'] = [
    { wch: 8 },   // 序号
    { wch: 20 },  // 单词
    { wch: 30 },  // 中文释义
    { wch: 10 },  // 出现次数
    { wch: 12 },  // 出现故事数
    { wch: 100 }  // 出现故事
];
XLSX.utils.book_append_sheet(wb, freqSheet, '高频词汇Top100');

// Sheet 4: 按故事分类
console.log('生成 Sheet 4: 按故事分类');
const groupedByStory = {};
allVocabularies.forEach(v => {
    if (!groupedByStory[v.故事]) {
        groupedByStory[v.故事] = [];
    }
    groupedByStory[v.故事].push([v.故事, v.序号, v.单词, v.中文释义]);
});

const storyGroupData = [['故事', '序号', '单词', '中文释义']];
Object.keys(groupedByStory).sort().forEach(storyName => {
    storyGroupData.push([]);  // 空行分隔
    groupedByStory[storyName].forEach(row => {
        storyGroupData.push(row);
    });
});

const storyGroupSheet = XLSX.utils.aoa_to_sheet(storyGroupData);
storyGroupSheet['!cols'] = [
    { wch: 30 },  // 故事
    { wch: 8 },   // 序号
    { wch: 20 },  // 单词
    { wch: 30 }   // 中文释义
];
XLSX.utils.book_append_sheet(wb, storyGroupSheet, '按故事分类');

// 保存文件
const outputPath = path.join(resultDir, 'CET4全部词汇汇总.xlsx');
XLSX.writeFile(wb, outputPath);

console.log(`\n========== 汇总完成 ==========`);
console.log(`处理文件: ${excelFiles.length} 个`);
console.log(`总词汇数: ${totalWords} 个`);
console.log(`去重词汇: ${uniqueWords.size} 个`);
console.log(`输出文件: CET4全部词汇汇总.xlsx`);
console.log(`\n包含工作表:`);
console.log(`  1. 全部词汇 - 所有词汇明细`);
console.log(`  2. 故事统计 - 每个故事的词汇数量`);
console.log(`  3. 高频词汇Top100 - 出现次数最多的100个词`);
console.log(`  4. 按故事分类 - 按故事分组的词汇列表`);