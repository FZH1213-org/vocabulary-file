const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// 结果目录
const resultDir = 'cet4/result';

// 获取所有学习版HTML文件
const files = fs.readdirSync(resultDir);
const studyFiles = files.filter(f =>
    f.endsWith('_学习版.html') && !f.includes('temp')
).sort();

console.log(`找到 ${studyFiles.length} 个学习版文件需要处理\n`);

let totalVocabCount = 0;
const summary = [];

// 处理每个文件
studyFiles.forEach((htmlFile, index) => {
    console.log(`[${index + 1}/${studyFiles.length}] 处理: ${htmlFile}`);

    const htmlPath = path.join(resultDir, htmlFile);
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // 提取所有词汇
    // 格式: <span class="w">word(中文)📢</span>
    const vocabRegex = /<span class="w">([^<]+?)<\/span>/g;
    const vocabularies = [];
    let match;

    while ((match = vocabRegex.exec(htmlContent)) !== null) {
        const fullText = match[1];

        // 解析单词和释义
        // 格式: word(中文释义)📢
        const wordMatch = fullText.match(/^([^(]+)\(([^)]+)\)/);

        if (wordMatch) {
            const word = wordMatch[1].trim();
            const meaning = wordMatch[2].trim();

            // 避免重复
            if (!vocabularies.some(v => v.word === word)) {
                vocabularies.push({
                    序号: vocabularies.length + 1,
                    单词: word,
                    中文释义: meaning,
                    完整形式: fullText
                });
            }
        }
    }

    if (vocabularies.length > 0) {
        totalVocabCount += vocabularies.length;

        // 创建工作簿
        const wb = XLSX.utils.book_new();

        // 创建工作表数据
        const wsData = [
            ['序号', '单词', '中文释义', '完整形式'],
            ...vocabularies.map(v => [v.序号, v.单词, v.中文释义, v.完整形式])
        ];

        const ws = XLSX.utils.aoa_to_sheet(wsData);

        // 设置列宽
        ws['!cols'] = [
            { wch: 8 },   // 序号
            { wch: 20 },  // 单词
            { wch: 30 },  // 中文释义
            { wch: 40 }   // 完整形式
        ];

        XLSX.utils.book_append_sheet(wb, ws, '词汇表');

        // 生成Excel文件名
        const excelFile = htmlFile.replace('.html', '.xlsx');
        const excelPath = path.join(resultDir, excelFile);

        // 写入文件
        XLSX.writeFile(wb, excelPath);

        console.log(`  ✓ 提取 ${vocabularies.length} 个词汇 -> ${excelFile}`);

        // 记录汇总信息
        summary.push({
            文件名: htmlFile,
            词汇数量: vocabularies.length,
            Excel文件: excelFile
        });
    } else {
        console.log(`  ✗ 未找到词汇`);
    }
});

// 生成汇总报告
console.log(`\n========== 处理完成 ==========`)
console.log(`处理文件: ${studyFiles.length} 个`);
console.log(`生成Excel: ${summary.length} 个`);
console.log(`词汇总数: ${totalVocabCount} 个`);

// 保存汇总Excel
if (summary.length > 0) {
    const summaryWb = XLSX.utils.book_new();
    const summaryData = [
        ['序号', '文件名', '词汇数量', 'Excel文件'],
        ...summary.map((s, i) => [i + 1, s.文件名, s.词汇数量, s.Excel文件])
    ];

    const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
    summaryWs['!cols'] = [
        { wch: 8 },   // 序号
        { wch: 50 },  // 文件名
        { wch: 12 },  // 词汇数量
        { wch: 50 }   // Excel文件
    ];

    XLSX.utils.book_append_sheet(summaryWb, summaryWs, '汇总');
    XLSX.writeFile(summaryWb, path.join(resultDir, '词汇汇总.xlsx'));

    console.log(`\n汇总文件已生成: 词汇汇总.xlsx`);
}