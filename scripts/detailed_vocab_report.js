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

console.log('所有故事词汇数量统计报告');
console.log('=' .repeat(80));
console.log('');

let data = [];

files.forEach(file => {
  const filePath = path.join(resultDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // 提取序号
  const match = file.match(/^(\d+)_(.+)_学习版\.html$/);
  const num = match[1];
  const storyName = match[2];

  // 提取声明的词汇数量
  const declaredMatch = content.match(/融入\s*(\d+)\s*个重点词汇/);
  const declared = declaredMatch ? parseInt(declaredMatch[1]) : 0;

  // 统计实际的词汇数量
  const actualMatches = content.match(/class="w"[^>]*>/g) || [];
  const actual = actualMatches.length;

  data.push({
    num,
    storyName,
    declared,
    actual,
    diff: declared - actual,
    correct: declared === actual
  });
});

// 按差异排序
console.log('一、按序号列出所有故事:');
console.log('-'.repeat(80));
console.log('序号\t故事名称\t\t\t\t\t声明数量\t实际数量\t状态');
console.log('-'.repeat(80));

data.forEach(d => {
  const status = d.correct ? '✓' : '❌';
  const name = d.storyName.length > 35 ? d.storyName.substring(0, 35) + '...' : d.storyName;
  console.log(`${d.num}\t${name.padEnd(40, '　')}\t${d.declared}\t\t${d.actual}\t\t${status}`);
});

console.log('-'.repeat(80));
console.log('');

// 统计信息
const correct = data.filter(d => d.correct).length;
const wrong = data.filter(d => !d.correct).length;
const totalDeclared = data.reduce((sum, d) => sum + d.declared, 0);
const totalActual = data.reduce((sum, d) => sum + d.actual, 0);

console.log('二、统计汇总:');
console.log('-'.repeat(80));
console.log(`总故事数: ${data.length}`);
console.log(`正确的数量: ${correct}`);
console.log(`错误的数量: ${wrong}`);
console.log(`声明的词汇总数: ${totalDeclared}`);
console.log(`实际的词汇总数: ${totalActual}`);
console.log(`差异总数: ${totalDeclared - totalActual}`);
console.log('');

// 列出差异最大的10个故事
console.log('三、差异最大的10个故事（按绝对值排序）:');
console.log('-'.repeat(80));
const sortedByDiff = [...data].sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff));
sortedByDiff.slice(0, 10).forEach((d, i) => {
  console.log(`${i+1}. 故事${d.num} ${d.storyName}`);
  console.log(`   声明: ${d.declared} 个, 实际: ${d.actual} 个, 差异: ${d.diff} 个`);
});
console.log('');

// 正确的故事
console.log('四、正确的3个故事:');
console.log('-'.repeat(80));
data.filter(d => d.correct).forEach(d => {
  console.log(`  故事${d.num}: ${d.storyName} (${d.actual}个词汇)`);
});