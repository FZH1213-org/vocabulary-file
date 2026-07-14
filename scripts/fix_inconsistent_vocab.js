const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'result');

// 获取所有文件
const files = fs.readdirSync(resultDir).filter(f => f.endsWith('.html'));

console.log('检查词汇数量一致性...\n');

const inconsistent = [];

// 获取所有学习版文件
const learningFiles = files.filter(f => f.endsWith('_学习版.html')).sort((a, b) => {
  const numA = parseInt(a.match(/^(\d+)/)?.[1] || '0');
  const numB = parseInt(b.match(/^(\d+)/)?.[1] || '0');
  return numA - numB;
});

learningFiles.forEach(learningFile => {
  const match = learningFile.match(/^(\d+)_(.+)_学习版\.html$/);
  if (!match) return;

  const num = match[1];
  const storyName = match[2];

  // 统计学习版词汇
  const learningContent = fs.readFileSync(path.join(resultDir, learningFile), 'utf-8');
  const learningVocab = (learningContent.match(/class="w"[^>]*>/g) || []).length;

  // 统计复习版词汇
  const reviewFile = learningFile.replace('_学习版.html', '_复习版.html');
  const reviewPath = path.join(resultDir, reviewFile);

  if (fs.existsSync(reviewPath)) {
    const reviewContent = fs.readFileSync(reviewPath, 'utf-8');
    const reviewVocab = (reviewContent.match(/class="r"[^>]*>/g) || []).length;

    if (learningVocab !== reviewVocab) {
      inconsistent.push({
        num,
        storyName,
        learningFile,
        reviewFile,
        learningVocab,
        reviewVocab,
        diff: learningVocab - reviewVocab
      });

      console.log(`故事${num}: ${storyName}`);
      console.log(`  学习版: ${learningVocab}个`);
      console.log(`  复习版: ${reviewVocab}个`);
      console.log(`  差异: ${learningVocab - reviewVocab}个\n`);
    }
  }
});

if (inconsistent.length === 0) {
  console.log('所有故事的词汇数量都一致！');
} else {
  console.log(`\n发现 ${inconsistent.length} 个故事词汇数量不一致\n`);
  console.log('开始修复...\n');

  inconsistent.forEach(item => {
    console.log(`\n处理故事${item.num}: ${item.storyName}`);

    // 读取学习版文件，获取所有词汇
    const learningPath = path.join(resultDir, item.learningFile);
    const learningContent = fs.readFileSync(learningPath, 'utf-8');

    // 提取学习版中的所有词汇（带标记的）
    const vocabMatches = learningContent.matchAll(/<span class="w"[^>]*>([^<]+)\(([^)]+)\)📢<\/span>/g);
    const vocabList = [];
    for (const match of vocabMatches) {
      vocabList.push({
        word: match[1],
        chinese: match[2]
      });
    }

    console.log(`  学习版词汇数: ${item.learningVocab}`);
    console.log(`  复习版词汇数: ${item.reviewVocab}`);
    console.log(`  提取到词汇: ${vocabList.length}个`);

    // 读取复习版文件
    const reviewPath = path.join(resultDir, item.reviewFile);
    let reviewContent = fs.readFileSync(reviewPath, 'utf-8');

    // 先移除复习版中所有现有的词汇标记
    // 保留在vocabList中的词汇，删除不在列表中的词汇

    // 处理复习版中的词汇标记
    let fixedReview = reviewContent.replace(/<span class="r" onclick="toggle\(this\)">([a-zA-Z]+)\(<span class="h">([^<]+)<\/span>\)<\/span>/g, (fullMatch, word, chinese) => {
      // 检查这个词是否在学习版的词汇列表中
      const found = vocabList.find(v => v.word.toLowerCase() === word.toLowerCase());
      if (found) {
        return fullMatch; // 保留
      } else {
        return chinese; // 只保留中文
      }
    });

    // 更新词汇数量
    const newVocabCount = (fixedReview.match(/class="r"[^>]*>/g) || []).length;
    fixedReview = fixedReview.replace(
      /融入\s*\d+\s*个重点词汇/g,
      `融入 ${newVocabCount} 个重点词汇`
    );

    // 写回文件
    fs.writeFileSync(reviewPath, fixedReview, 'utf-8');

    console.log(`  修复后词汇数: ${newVocabCount}个`);
  });

  console.log('\n修复完成！');
}