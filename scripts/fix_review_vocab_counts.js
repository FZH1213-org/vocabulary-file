const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'result');

// 获取所有文件
const files = fs.readdirSync(resultDir).filter(f => f.endsWith('.html'));

// 先统计所有学习版的词汇数量
const vocabCounts = {};

files.forEach(file => {
  if (!file.includes('_学习版.html')) return;

  const filePath = path.join(resultDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // 提取故事编号
  const match = file.match(/^(\d+)_/);
  if (!match) return;
  const num = match[1];

  // 统计实际的词汇数量
  const actualMatches = content.match(/class="w"[^>]*>/g) || [];
  const actualCount = actualMatches.length;

  vocabCounts[num] = actualCount;
  console.log(`学习版 ${num}: ${actualCount}个词汇`);
});

console.log('\n开始修正复习版文件...\n');

// 修正所有复习版文件
let updatedCount = 0;

files.forEach(file => {
  if (!file.includes('_复习版.html')) return;

  const filePath = path.join(resultDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // 提取故事编号
  const match = file.match(/^(\d+)_/);
  if (!match) return;
  const num = match[1];

  // 获取对应的词汇数量
  const vocabCount = vocabCounts[num] || 0;

  // 替换词汇数量
  const oldPattern = /融入\s*\d+\s*个重点词汇/g;
  const newStatement = `融入 ${vocabCount} 个重点词汇`;
  content = content.replace(oldPattern, newStatement);

  // 写回文件
  fs.writeFileSync(filePath, content, 'utf-8');

  console.log(`✓ 修正复习版 ${num}: ${vocabCount}个词汇`);
  updatedCount++;
});

console.log(`\n完成！共修正 ${updatedCount} 个复习版文件`);