const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'result');

// 获取所有学习版和复习版文件
const files = fs.readdirSync(resultDir)
  .filter(f => f.endsWith('.html'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/^(\d+)/)?.[1] || '0');
    const numB = parseInt(b.match(/^(\d+)/)?.[1] || '0');
    return numA - numB;
  });

const report = [];
let totalVocab = 0;

files.forEach(file => {
  const filePath = path.join(resultDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // 提取序号和故事名
  const match = file.match(/^(\d+)_(.+?)_(学习版|复习版)\.html$/);
  if (!match) return;

  const num = match[1];
  const storyName = match[2];
  const version = match[3];

  // 统计实际的词汇数量（class="w"的标签）
  const actualMatches = content.match(/class="w"[^>]*>/g) || [];
  const actualCount = actualMatches.length;

  // 替换声明数量为实际数量
  const oldPattern = /融入\s*\d+\s*个重点词汇/g;
  const newStatement = `融入 ${actualCount} 个重点词汇`;
  content = content.replace(oldPattern, newStatement);

  // 写回文件
  fs.writeFileSync(filePath, content, 'utf-8');

  // 记录到报告（只记录学习版，避免重复）
  if (version === '学习版') {
    report.push({
      序号: num,
      故事名称: storyName,
      融入词汇数量: actualCount
    });
    totalVocab += actualCount;
  }

  console.log(`✓ 已修正: ${file} - ${actualCount}个词汇`);
});

// 生成汇总报告
const reportPath = path.join(__dirname, '..', '词汇数量统计汇总.txt');
let reportContent = '词汇数量统计汇总报告\n';
reportContent += '=' .repeat(60) + '\n\n';
reportContent += '序号\t故事名称\t\t\t\t\t融入词汇数量\n';
reportContent += '-' .repeat(60) + '\n';

report.forEach(item => {
  const name = item['故事名称'].length > 35 ? item['故事名称'].substring(0, 35) + '...' : item['故事名称'];
  reportContent += `${item['序号']}\t${name.padEnd(40, '　')}\t${item['融入词汇数量']}\n`;
});

reportContent += '-' .repeat(60) + '\n';
reportContent += `\n总计: ${report.length} 个故事\n`;
reportContent += `词汇总数: ${totalVocab} 个\n`;
reportContent += `平均每个故事: ${(totalVocab / report.length).toFixed(1)} 个词汇\n`;

fs.writeFileSync(reportPath, reportContent, 'utf-8');

console.log('\n' + '='.repeat(60));
console.log('处理完成！');
console.log(`已修正 ${files.length} 个文件的词汇数量`);
console.log(`汇总报告已保存到: ${reportPath}`);