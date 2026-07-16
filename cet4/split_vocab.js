const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// 读取词汇表
const workbook = XLSX.readFile(path.join(__dirname, 'demo/大学英语四级词汇完整-正序版.xls'));
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

console.log(`总词汇数: ${data.length}`);

// Fisher-Yates 洗牌算法
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 随机打乱词汇
const shuffledVocab = shuffle(data);

// 按每50个一组拆分
const groupSize = 50;
const groups = [];
for (let i = 0; i < shuffledVocab.length; i += groupSize) {
  groups.push(shuffledVocab.slice(i, i + groupSize));
}

console.log(`拆分成 ${groups.length} 组`);

// 保存拆分结果
const outputDir = path.join(__dirname, 'vocab_groups');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 保存每一组到单独的JSON文件
groups.forEach((group, index) => {
  const groupNum = index + 1;
  const fileName = `group_${groupNum.toString().padStart(3, '0')}.json`;
  const filePath = path.join(outputDir, fileName);

  fs.writeFileSync(filePath, JSON.stringify(group, null, 2), 'utf-8');

  console.log(`组 ${groupNum}: ${group.length} 个词汇`);
});

// 创建一个汇总文件
const summary = {
  totalVocab: data.length,
  groupSize: groupSize,
  totalGroups: groups.length,
  groups: groups.map((group, index) => ({
    groupNum: index + 1,
    fileName: `group_${(index + 1).toString().padStart(3, '0')}.json`,
    vocabCount: group.length,
    words: group.map(v => v['单词'])
  }))
};

fs.writeFileSync(
  path.join(outputDir, 'summary.json'),
  JSON.stringify(summary, null, 2),
  'utf-8'
);

// 创建一个易读的文本版本
groups.forEach((group, index) => {
  const groupNum = index + 1;
  const fileName = `group_${groupNum.toString().padStart(3, '0')}.txt`;
  const filePath = path.join(outputDir, fileName);

  const content = group.map(v => {
    return `${v['序号']}\t${v['单词']}\t${v['音标']}\t${v['释义']}`;
  }).join('\n');

  const header = `词汇组 ${groupNum} (共 ${group.length} 个词汇)\n` +
                 `序号\t单词\t音标\t释义\n` +
                 `${'='.repeat(80)}\n`;

  fs.writeFileSync(filePath, header + content, 'utf-8');
});

console.log('\n拆分完成！');
console.log(`文件保存在: ${outputDir}`);
console.log('- JSON格式: group_001.json, group_002.json, ...');
console.log('- 文本格式: group_001.txt, group_002.txt, ...');
console.log('- 汇总文件: summary.json');