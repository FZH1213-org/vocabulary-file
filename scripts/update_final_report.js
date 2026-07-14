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

let report = '词汇数量统计汇总报告\n';
report += '=' .repeat(80) + '\n\n';
report += '序号\t故事名称\t\t\t\t\t融入词汇数量\n';
report += '-'.repeat(80) + '\n';

let totalVocab = 0;

files.forEach(file => {
  const filePath = path.join(resultDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // 提取序号
  const match = file.match(/^(\d+)_(.+)_学习版\.html$/);
  const num = match[1];
  const storyName = match[2];

  // 统计实际的词汇数量
  const actualMatches = content.match(/class="w"[^>]*>/g) || [];
  const actual = actualMatches.length;

  totalVocab += actual;

  const name = storyName.length > 40 ? storyName.substring(0, 40) + '...' : storyName;
  report += `${num}\t${name.padEnd(45, '　')}\t${actual}\n`;
});

report += '-'.repeat(80) + '\n';
report += `\n总计: ${files.length} 个故事\n`;
report += `词汇总数: ${totalVocab} 个\n`;
report += `平均每个故事: ${(totalVocab / files.length).toFixed(1)} 个词汇\n`;

const reportPath = path.join(__dirname, '..', '词汇数量统计汇总.txt');
fs.writeFileSync(reportPath, report, 'utf-8');

console.log('汇总报告已更新！');
console.log(`总故事数: ${files.length}`);
console.log(`词汇总数: ${totalVocab}`);
console.log(`平均每故事: ${(totalVocab / files.length).toFixed(1)} 个`);