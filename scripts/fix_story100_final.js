const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'result');

console.log('修复故事100的复习版...\n');

const num = '100';
const storyName = '甜蜜告白_心动季节';

const learningFile = `${num}_${storyName}_学习版.html`;
const reviewFile = `${num}_${storyName}_复习版.html`;

const learningPath = path.join(resultDir, learningFile);
const reviewPath = path.join(resultDir, reviewFile);

const learningContent = fs.readFileSync(learningPath, 'utf-8');
const reviewContent = fs.readFileSync(reviewPath, 'utf-8');

// 提取学习版的CSS和故事内容部分
const learningStyleMatch = learningContent.match(/<style>([\s\S]*?)<\/style>/);
const learningStyle = learningStyleMatch ? learningStyleMatch[1] : '';

// 提取复习版的CSS
const reviewStyleMatch = reviewContent.match(/<style>([\s\S]*?)<\/style>/);
const reviewStyle = reviewStyleMatch ? reviewStyleMatch[1] : '';

// 提取学习版的故事内容（从<div class="text">到</div>之前）
const learningTextMatch = learningContent.match(/<div class="text">([\s\S]*?)<\/div>\s*<\/section>/);
const learningText = learningTextMatch ? learningTextMatch[1] : '';

console.log('从学习版提取故事内容...');

// 将学习版的词汇标记转换为复习版格式
// <span class="w">word(中文)📢</span> => <span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
let reviewText = learningText.replace(/<span class="w"[^>]*>([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g, (match, word, chinese) => {
  return `<span class="r" onclick="toggle(this)">${word}(<span class="h">${chinese}</span>)</span>`;
});

console.log('转换词汇标记格式...');

// 统计词汇数量
const vocabCount = (reviewText.match(/class="r"[^>]*>/g) || []).length;
console.log(`词汇数量: ${vocabCount}个\n`);

// 生成新的复习版HTML
const newReviewContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>甜蜜告白：心动季节 · 学习版</title>
<style>
${reviewStyle}
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词 · 复习版（扩充版）</div>
      <h1>甜蜜告白</h1>
      <p class="sub">告白 · 爱情 · 青春</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story100</span>心动季节</h2>
      <div class="meta">本篇约 3200 字 · 融入 ${vocabCount} 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewText}</div>
    </section>
    <footer>甜蜜告白：心动季节 · 学习版　|　看故事记单词</footer>
  </div>

  <script>
  function toggle(element) {
    element.classList.toggle('show');
  }
  </script>

</body>
</html>`;

// 写回文件
fs.writeFileSync(reviewPath, newReviewContent, 'utf-8');

console.log(`修复完成！复习版现在有 ${vocabCount} 个词汇`);