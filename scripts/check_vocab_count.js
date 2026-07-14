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

console.log('序号\t故事名称\t\t\t\t\t声明的数量\t实际数量\t差异');
console.log('='.repeat(100));

let totalDeclared = 0;
let totalActual = 0;
let errorCount = 0;

files.forEach(file => {
  const filePath = path.join(resultDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // 提取序号
  const match = file.match(/^(\d+)_(.+)_学习版\.html$/);
  const num = match[1];
  const storyName = match[2].substring(0, 30);

  // 提取声明的词汇数量（从meta信息中）
  const declaredMatch = content.match(/融入\s*(\d+)\s*个重点词汇/);
  const declared = declaredMatch ? parseInt(declaredMatch[1]) : 0;

  // 统计实际的词汇数量（class="w"的标签）
  const actualMatches = content.match(/class="w"[^>]*>/g) || [];
  const actual = actualMatches.length;

  totalDeclared += declared;
  totalActual += actual;

  const diff = declared - actual;
  const status = diff !== 0 ? '❌' : '✓';

  if (diff !== 0) {
    console.log(`${num}\t${storyName.padEnd(35, '　')}\t${declared}\t\t${actual}\t\t${diff}\t${status}`);
    errorCount++;
  }
});

console.log('='.repeat(100));
console.log(`\n总计:`);
console.log(`  声明总数: ${totalDeclared}`);
console.log(`  实际总数: ${totalActual}`);
console.log(`  差异总数: ${totalDeclared - totalActual}`);
console.log(`  错误故事数: ${errorCount}/${files.length}`);