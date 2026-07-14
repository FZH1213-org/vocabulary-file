#!/usr/bin/env node
/**
 * 将CSV文件转换为Excel格式
 */

const fs = require('fs');
const path = require('path');

// 读取CSV文件
const csvPath = path.join(__dirname, '../statistics/词汇汇总表_扩充版.csv');
const outputPath = path.join(__dirname, '../statistics/词汇汇总表_扩充版.xlsx');

const content = fs.readFileSync(csvPath, 'utf-8');
const lines = content.trim().split('\n');

// 解析CSV数据
const data = lines.map(line => {
    // 处理制表符分隔的数据
    return line.split('\t');
});

console.log(`读取到 ${data.length} 行数据`);

// 生成HTML表格（Excel可以识别）
let html = `
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:x="urn:schemas-microsoft-com:office:excel"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="UTF-8">
<style>
table { border-collapse: collapse; }
td, th { border: 1px solid #000; padding: 5px; }
th { background-color: #4472C4; color: white; font-weight: bold; }
</style>
</head>
<body>
<table>
`;

data.forEach((row, idx) => {
    html += '<tr>';
    row.forEach(cell => {
        if (idx === 0) {
            html += `<th>${cell}</th>`;
        } else {
            html += `<td>${cell}</td>`;
        }
    });
    html += '</tr>\n';
});

html += `
</table>
</body>
</html>
`;

// 保存为.xls格式（Excel可以打开）
const xlsPath = path.join(__dirname, '../statistics/词汇汇总表_扩充版.xls');
fs.writeFileSync(xlsPath, html, 'utf-8');

console.log(`已生成Excel文件: ${xlsPath}`);
console.log('提示: 这是一个HTML格式的Excel文件，可以直接用Excel打开并保存为.xlsx格式');