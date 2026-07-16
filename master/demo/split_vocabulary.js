const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// 读取 Excel 文件
const workbook = XLSX.readFile('master/demo/考研英语重点词汇.xls');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet, {header: 1});

console.log(`总词汇数: ${data.length}`);

// 输出目录
const outputDir = 'master/demo/vocabulary_split';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 每50个单词拆分
const chunkSize = 50;
let fileIndex = 1;

for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);

    // 转换为对象数组
    const vocabulary = chunk.map((row, idx) => ({
        index: i + idx + 1,
        word: row[0] || '',
        phonetic: row[1] || '',
        definition: row[2] || ''
    }));

    // 生成 JSON 文件名
    const startNum = i + 1;
    const endNum = Math.min(i + chunkSize, data.length);
    const fileName = `vocabulary_${fileIndex.toString().padStart(3, '0')}_${startNum}-${endNum}.json`;
    const filePath = path.join(outputDir, fileName);

    // 写入 JSON 文件
    const jsonData = {
        chunk: fileIndex,
        range: `${startNum}-${endNum}`,
        count: vocabulary.length,
        vocabulary: vocabulary
    };

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
    console.log(`✓ 已生成: ${fileName} (${vocabulary.length} 个单词)`);

    fileIndex++;
}

console.log(`\n完成！共生成 ${fileIndex - 1} 个 JSON 文件`);
console.log(`保存目录: ${outputDir}`);