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

console.log('开始为每个故事生成词汇表...\n');

files.forEach(file => {
  const match = file.match(/^(\d+)_(.+)_学习版\.html$/);
  if (!match) return;

  const storyNum = parseInt(match[1]);
  const storyName = match[2];

  const filePath = path.join(resultDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // 提取所有词汇（包括重复的）
  const vocabMatches = content.matchAll(/<span class="w"[^>]*>([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g);

  // 统计每个词汇出现的次数
  const vocabMap = new Map(); // key: wordLower, value: {word, chinese, count}

  for (const vocabMatch of vocabMatches) {
    const word = vocabMatch[1];
    const chinese = vocabMatch[2];
    const wordLower = word.toLowerCase();

    if (vocabMap.has(wordLower)) {
      vocabMap.get(wordLower).count++;
    } else {
      vocabMap.set(wordLower, {
        word: word,
        chinese: chinese,
        count: 1
      });
    }
  }

  // 按字母顺序排序
  const sortedVocab = Array.from(vocabMap.values()).sort((a, b) => {
    return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
  });

  // 生成CSV文件
  const csvFileName = `${storyNum}_${storyName}_词汇表.csv`;
  const csvPath = path.join(resultDir, csvFileName);

  let csvContent = '﻿'; // UTF-8 BOM
  csvContent += `故事${storyNum}: ${storyName} - 词汇表\n\n`;
  csvContent += '序号,词汇,中文释义,出现次数\n';

  sortedVocab.forEach((vocab, index) => {
    csvContent += `${index + 1},"${vocab.word}","${vocab.chinese}",${vocab.count}\n`;
  });

  csvContent += '\n统计信息\n';
  csvContent += `词汇总数,${sortedVocab.length}个\n`;
  csvContent += `总出现次数,${sortedVocab.reduce((sum, v) => sum + v.count, 0)}次\n`;

  fs.writeFileSync(csvPath, csvContent, 'utf-8');

  console.log(`故事${storyNum}: ${storyName} - ${sortedVocab.length}个词汇`);
});

console.log('\n全部完成！已为所有故事生成词汇表CSV文件。');
console.log(`文件位置: ${resultDir}`);