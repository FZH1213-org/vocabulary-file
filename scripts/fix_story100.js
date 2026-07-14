const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'result');

console.log('检查词汇数量一致性...\n');

// 检查故事100
const num = '100';
const storyName = '甜蜜告白_心动季节';

const learningFile = `${num}_${storyName}_学习版.html`;
const reviewFile = `${num}_${storyName}_复习版.html`;

const learningPath = path.join(resultDir, learningFile);
const reviewPath = path.join(resultDir, reviewFile);

const learningContent = fs.readFileSync(learningPath, 'utf-8');
const reviewContent = fs.readFileSync(reviewPath, 'utf-8');

const learningVocab = (learningContent.match(/class="w"[^>]*>/g) || []).length;
const reviewVocab = (reviewContent.match(/class="r"[^>]*>/g) || []).length;

console.log(`故事${num}: ${storyName}`);
console.log(`  学习版词汇数: ${learningVocab}`);
console.log(`  复习版词汇数: ${reviewVocab}`);
console.log(`  差异: ${learningVocab - reviewVocab}个\n`);

if (learningVocab === reviewVocab) {
  console.log('词汇数量已经一致，无需修复！');
  process.exit(0);
}

console.log('开始修复...\n');

// 从学习版提取所有词汇
const vocabMatches = learningContent.matchAll(/<span class="w"[^>]*>([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g);
const vocabList = [];
for (const match of vocabMatches) {
  vocabList.push({
    word: match[1],
    chinese: match[2],
    wordLower: match[1].toLowerCase()
  });
}

console.log(`从学习版提取到 ${vocabList.length} 个词汇\n`);

// 在复习版中标记这些词汇
let fixedReview = reviewContent;

// 对每个词汇进行处理
vocabList.forEach(vocab => {
  // 在复习版中查找这个词（可能是纯文本形式，或者已经有标记）
  // 如果是纯文本 word(中文)，需要添加标记
  // 如果已经有标记但中文不对，需要修正

  const pattern1 = new RegExp(`<span class="r" onclick="toggle\\(this\\)">${vocab.word}\\(<span class="h">([^<]+)<\\/span>\\)<\\/span>`, 'g');
  const pattern2 = new RegExp(`\\b${vocab.word}\\(${vocab.chinese}\\)`, 'g');

  // 如果已经有正确的标记，跳过
  if (pattern1.test(fixedReview)) {
    return;
  }

  // 如果是纯文本形式 word(中文)，添加标记
  if (pattern2.test(fixedReview)) {
    fixedReview = fixedReview.replace(pattern2, `<span class="r" onclick="toggle(this)">${vocab.word}(<span class="h">${vocab.chinese}</span>)</span>`);
  }
});

// 统计修复后的词汇数量
const newVocabCount = (fixedReview.match(/class="r"[^>]*>/g) || []).length;

console.log(`修复后词汇数: ${newVocabCount}个`);

// 更新词汇数量
fixedReview = fixedReview.replace(
  /融入\s*\d+\s*个重点词汇/g,
  `融入 ${newVocabCount} 个重点词汇`
);

// 写回文件
fs.writeFileSync(reviewPath, fixedReview, 'utf-8');

console.log('\n修复完成！');