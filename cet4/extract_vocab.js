const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// 读取XLS文件
const workbook = XLSX.readFile(path.join(__dirname, 'demo/大学英语四级词汇完整-正序版.xls'));
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// 转换为JSON
const data = XLSX.utils.sheet_to_json(worksheet);

console.log('总词汇数:', data.length);
console.log('前10个词汇:', data.slice(0, 10));

// 保存为JSON
fs.writeFileSync(
  path.join(__dirname, 'vocab_list.json'),
  JSON.stringify(data, null, 2)
);

console.log('词汇已保存到 cet4/vocab_list.json');