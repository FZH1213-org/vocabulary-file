const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'result');

// 获取所有学习版文件
const files = fs.readdirSync(resultDir)
  .filter(f => f.endsWith('_学习版.html'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/^(\d+)/)?.[1] || '0');
    const numB = parseInt(b.match(/^(\d+)/)?.[1] || '0');
    return numA - numB;
  });

console.log('开始提取所有故事的词汇...\n');

// 用于存储所有词汇及其首次出现的故事编号
const vocabMap = new Map(); // key: word, value: {chinese, firstStory, count}

// 按顺序处理每个故事
files.forEach(file => {
  const match = file.match(/^(\d+)_(.+)_学习版\.html$/);
  if (!match) return;

  const storyNum = parseInt(match[1]);
  const storyName = match[2];

  const filePath = path.join(resultDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // 提取所有词汇
  const vocabMatches = content.matchAll(/<span class="w"[^>]*>([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g);

  let newVocabCount = 0;
  let repeatVocabCount = 0;

  for (const vocabMatch of vocabMatches) {
    const word = vocabMatch[1];
    const chinese = vocabMatch[2];
    const wordLower = word.toLowerCase();

    if (vocabMap.has(wordLower)) {
      // 词汇已存在，增加计数
      const existing = vocabMap.get(wordLower);
      existing.count++;
      repeatVocabCount++;
    } else {
      // 新词汇，添加到map
      vocabMap.set(wordLower, {
        word: word,
        chinese: chinese,
        firstStory: storyNum,
        firstStoryName: storyName,
        count: 1
      });
      newVocabCount++;
    }
  }

  console.log(`故事${storyNum}: 新词汇${newVocabCount}个, 重复词汇${repeatVocabCount}个`);
});

console.log(`\n总计提取到 ${vocabMap.size} 个不重复词汇\n`);

// 按首次出现的故事编号排序
const sortedVocab = Array.from(vocabMap.values()).sort((a, b) => {
  return a.firstStory - b.firstStory;
});

// 生成CSV文件
const csvPath = path.join(__dirname, '..', 'statistics', '所有故事词汇汇总_按首次出现排序.csv');

let csvContent = '﻿'; // UTF-8 BOM
csvContent += '所有故事词汇汇总（按首次出现的故事顺序排列）\n\n';
csvContent += '序号,词汇,中文释义,首次出现故事编号,首次出现故事名称,出现总次数\n';

sortedVocab.forEach((vocab, index) => {
  csvContent += `${index + 1},"${vocab.word}","${vocab.chinese}",${vocab.firstStory},"${vocab.firstStoryName}",${vocab.count}\n`;
});

csvContent += '\n统计信息\n';
csvContent += `总词汇数,${sortedVocab.length}个\n`;
csvContent += `生成时间,${new Date().toLocaleString('zh-CN')}\n`;

fs.writeFileSync(csvPath, csvContent, 'utf-8');
console.log(`CSV文件已生成: ${csvPath}`);

// 生成HTML文件（更易读）
const htmlPath = path.join(__dirname, '..', 'statistics', '所有故事词汇汇总_按首次出现排序.html');

let htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>所有故事词汇汇总</title>
<style>
  body { font-family: "Microsoft YaHei", Arial, sans-serif; margin: 20px; }
  h1 { color: #333; text-align: center; }
  .summary { background: #f0f0f0; padding: 15px; margin: 20px 0; border-radius: 5px; }
  table { width: 100%; border-collapse: collapse; margin-top: 20px; }
  th { background: #4472C4; color: white; padding: 10px; text-align: center; position: sticky; top: 0; }
  td { border: 1px solid #ddd; padding: 8px; text-align: center; }
  tr:nth-child(even) { background: #f9f9f9; }
  tr:hover { background: #f5f5f5; }
  .word { font-weight: bold; color: #4472C4; }
</style>
</head>
<body>
<h1>所有故事词汇汇总</h1>

<div class="summary">
  <strong>统计信息：</strong><br>
  总词汇数：<strong>${sortedVocab.length}</strong> 个<br>
  生成时间：${new Date().toLocaleString('zh-CN')}
</div>

<table>
<tr>
  <th>序号</th>
  <th>词汇</th>
  <th>中文释义</th>
  <th>首次出现故事</th>
  <th>故事名称</th>
  <th>出现总次数</th>
</tr>`;

sortedVocab.forEach((vocab, index) => {
  htmlContent += `
<tr>
  <td>${index + 1}</td>
  <td class="word">${vocab.word}</td>
  <td>${vocab.chinese}</td>
  <td>${vocab.firstStory}</td>
  <td style="text-align: left;">${vocab.firstStoryName}</td>
  <td>${vocab.count}</td>
</tr>`;
});

htmlContent += `
</table>
<p style="text-align: center; color: #999; margin-top: 20px;">
词汇按首次出现的故事顺序排列（故事1-100）
</p>
</body>
</html>`;

fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
console.log(`HTML文件已生成: ${htmlPath}`);

// 统计每个故事首次出现的词汇数量
const storyVocabCount = new Map();
sortedVocab.forEach(vocab => {
  const story = vocab.firstStory;
  storyVocabCount.set(story, (storyVocabCount.get(story) || 0) + 1);
});

console.log('\n每个故事首次出现的词汇数量:');
for (let i = 1; i <= 100; i++) {
  const count = storyVocabCount.get(i) || 0;
  if (count > 0) {
    console.log(`  故事${i}: ${count}个新词汇`);
  }
}