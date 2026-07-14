const fs = require('fs');
const path = require('path');

// 统计所有故事的词汇数量
const resultDir = path.join(__dirname, '..', 'result');
const files = fs.readdirSync(resultDir)
  .filter(f => f.endsWith('_学习版.html'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/^(\d+)/)?.[1] || '0');
    const numB = parseInt(b.match(/^(\d+)/)?.[1] || '0');
    return numA - numB;
  });

console.log('开始统计所有故事的词汇数量...\n');

const storyData = [];
let totalVocab = 0;

files.forEach(file => {
  const filePath = path.join(resultDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // 提取序号和故事名
  const match = file.match(/^(\d+)_(.+)_学习版\.html$/);
  if (!match) return;

  const num = parseInt(match[1]);
  const storyName = match[2];

  // 统计学习版词汇数量
  const learningVocab = (content.match(/class="w"[^>]*>/g) || []).length;

  // 统计复习版词汇数量
  const reviewFile = path.join(resultDir, file.replace('_学习版.html', '_复习版.html'));
  let reviewVocab = 0;
  if (fs.existsSync(reviewFile)) {
    const reviewContent = fs.readFileSync(reviewFile, 'utf-8');
    reviewVocab = (reviewContent.match(/class="r"[^>]*>/g) || []).length;
  }

  totalVocab += learningVocab;

  storyData.push({
    序号: num,
    故事名称: storyName,
    学习版词汇数: learningVocab,
    复习版词汇数: reviewVocab,
    状态: learningVocab === reviewVocab ? '一致' : '不一致'
  });
});

console.log(`统计完成！`);
console.log(`总故事数: ${storyData.length}`);
console.log(`词汇总数: ${totalVocab}`);
console.log(`平均每故事: ${(totalVocab / storyData.length).toFixed(1)}个词汇\n`);

// 生成CSV格式（Excel可以完美打开）
const csvPath = path.join(__dirname, '..', 'statistics', '故事考研词汇统计_最终版.csv');

let csvContent = '﻿'; // UTF-8 BOM，确保Excel正确识别中文
csvContent += '故事考研词汇数量统计汇总\n\n';
csvContent += '序号,故事名称,学习版词汇数,复习版词汇数,状态\n';

storyData.forEach(row => {
  csvContent += `${row.序号},"${row.故事名称}",${row.学习版词汇数},${row.复习版词汇数},${row.状态}\n`;
});

csvContent += '\n汇总统计\n';
csvContent += `总故事数,${storyData.length}个\n`;
csvContent += `词汇总数,${totalVocab}个\n`;
csvContent += `平均每故事,${(totalVocab / storyData.length).toFixed(1)}个词汇\n`;

fs.writeFileSync(csvPath, csvContent, 'utf-8');
console.log(`CSV文件已生成: ${csvPath}`);

// 同时生成一个简化的HTML格式表格
const htmlPath = path.join(__dirname, '..', 'statistics', '故事考研词汇统计_最终版.html');

let htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>故事考研词汇数量统计汇总</title>
<style>
  body { font-family: "Microsoft YaHei", Arial, sans-serif; margin: 20px; }
  h1 { color: #333; text-align: center; }
  .summary { background: #f0f0f0; padding: 15px; margin: 20px 0; border-radius: 5px; }
  table { width: 100%; border-collapse: collapse; margin-top: 20px; }
  th { background: #4472C4; color: white; padding: 10px; text-align: center; }
  td { border: 1px solid #ddd; padding: 8px; text-align: center; }
  tr:nth-child(even) { background: #f9f9f9; }
  tr:hover { background: #f5f5f5; }
  .number { font-weight: bold; color: #4472C4; }
</style>
</head>
<body>
<h1>故事考研词汇数量统计汇总</h1>

<div class="summary">
  <strong>统计汇总：</strong><br>
  总故事数：<span class="number">${storyData.length}</span> 个<br>
  词汇总数：<span class="number">${totalVocab}</span> 个<br>
  平均每故事：<span class="number">${(totalVocab / storyData.length).toFixed(1)}</span> 个词汇
</div>

<table>
<tr>
  <th>序号</th>
  <th>故事名称</th>
  <th>学习版词汇数</th>
  <th>复习版词汇数</th>
  <th>状态</th>
</tr>`;

storyData.forEach(row => {
  const statusColor = row.状态 === '一致' ? 'green' : 'red';
  htmlContent += `
<tr>
  <td>${row.序号}</td>
  <td style="text-align: left;">${row.故事名称}</td>
  <td class="number">${row.学习版词汇数}</td>
  <td class="number">${row.复习版词汇数}</td>
  <td style="color: ${statusColor};">${row.状态}</td>
</tr>`;
});

htmlContent += `
</table>
<p style="text-align: center; color: #999; margin-top: 20px;">
生成时间：${new Date().toLocaleString('zh-CN')}
</p>
</body>
</html>`;

fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
console.log(`HTML文件已生成: ${htmlPath}`);

// 生成一个更简单的文本报告
const txtPath = path.join(__dirname, '..', 'statistics', '故事考研词汇统计_最终版.txt');

let txtContent = '故事考研词汇数量统计汇总\n';
txtContent += '=' .repeat(80) + '\n\n';

txtContent += '统计汇总：\n';
txtContent += `总故事数：${storyData.length} 个\n`;
txtContent += `词汇总数：${totalVocab} 个\n`;
txtContent += `平均每故事：${(totalVocab / storyData.length).toFixed(1)} 个词汇\n\n`;

txtContent += '详细列表：\n';
txtContent += '-' .repeat(80) + '\n';
txtContent += '序号\t故事名称\t\t\t\t\t学习版\t复习版\t状态\n';
txtContent += '-' .repeat(80) + '\n';

storyData.forEach(row => {
  const name = row.故事名称.length > 35 ? row.故事名称.substring(0, 35) + '...' : row.故事名称;
  txtContent += `${row.序号}\t${name.padEnd(40, '　')}\t${row.学习版词汇数}\t${row.复习版词汇数}\t${row.状态}\n`;
});

txtContent += '-' .repeat(80) + '\n';

fs.writeFileSync(txtPath, txtContent, 'utf-8');
console.log(`TXT文件已生成: ${txtPath}`);