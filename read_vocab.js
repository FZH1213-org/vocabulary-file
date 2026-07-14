const XLSX = require('xlsx');
const path = require('path');

// 读取xls文件
const filePath = path.join(__dirname, 'demo/考研英语词汇乱序版.xls');
const workbook = XLSX.readFile(filePath);

// 获取第一个工作表
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// 获取范围
const range = XLSX.utils.decode_range(worksheet['!ref']);
const totalRows = range.e.r - range.s.r + 1;

console.log('工作表名称:', sheetName);
console.log('总行数:', totalRows);

// 获取实际使用的列数
let maxCol = 0;
for (let c = range.s.c; c <= range.e.c; c++) {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: c });
    const cell = worksheet[cellAddress];
    if (cell && cell.v !== undefined && cell.v !== null && cell.v !== '') {
        maxCol = c + 1;
    }
}
console.log('实际使用的列数:', maxCol);

// 读取前5行的原始数据
console.log('\n前5行原始数据:');
for (let r = 0; r < 5; r++) {
    const rowData = [];
    for (let c = 0; c < 3; c++) {
        const cellAddress = XLSX.utils.encode_cell({ r: r, c: c });
        const cell = worksheet[cellAddress];
        rowData.push(cell ? String(cell.v) : '');
    }
    console.log(`行${r + 1}:`, rowData);
}

// 使用自定义列名读取数据
const headers = ['单词', '音标', '中文释义'];
const data = XLSX.utils.sheet_to_json(worksheet, {
    header: headers,
    defval: ''
});

// 移除可能的空行
const validData = data.filter(row => {
    const word = row['单词'];
    return word !== undefined && word !== null && String(word).trim() !== '';
});

console.log('\n========== 统计结果 ==========');
console.log('总词汇量:', validData.length);

// 前20个单词
console.log('\n前20个单词:');
for (let i = 0; i < Math.min(20, validData.length); i++) {
    const row = validData[i];
    console.log(`${i + 1}. 单词: ${row['单词']}, 音标: ${row['音标']}, 释义: ${row['中文释义']}`);
}

// 输出所有单词列表（用于验证）
console.log('\n========== 单词列表(前100个) ==========');
const words = validData.map(row => row['单词']);
console.log(words.slice(0, 100).join('\n'));