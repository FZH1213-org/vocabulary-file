const XLSX = require('xlsx');

const excelPath = 'cet4/result/CET4全部词汇汇总.xlsx';
const workbook = XLSX.readFile(excelPath);

// 查看所有工作表名称
console.log('工作表列表:', workbook.SheetNames);

// 读取第一个工作表
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// 获取前几行数据看看列名
const data = XLSX.utils.sheet_to_json(sheet, {header: 1});
console.log('\n前3行数据:');
for(let i = 0; i < 3 && i < data.length; i++) {
    console.log(`行${i}:`, data[i]);
}

// 读取为JSON看看
const jsonData = XLSX.utils.sheet_to_json(sheet);
console.log('\n第一行数据(JSON):', jsonData[0]);
console.log('\n总行数:', jsonData.length);

// 检查列名
if(jsonData.length > 0) {
    console.log('\n列名:', Object.keys(jsonData[0]));
}