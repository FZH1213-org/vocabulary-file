const fs = require('fs');
const path = require('path');

function w(word, chinese) {
  return `<span class="w">${word}(${chinese})📢</span>`;
}

// 严格基于第2组50个词汇的故事
const storyContent = `<p>李明穿着学士${w('robe', '长袍')}站在${w('cafeteria', '自助餐厅')}门口，等待毕业典礼开始。这是他大学生活的${w('ending', '结局')}，四年${w('cycle', '循环')}转瞬即逝。</p>

<p>大一那年${w('flight', '航班')}延误，错过了开学典礼。${w('completely', '完全')}不在意的他独自在${w('green', '绿色')}操场上散步，思考人生的${w('formula', '公式')}。内心涌起一阵${w('anxiety', '焦虑')}。</p>

<p>突然一阵${w('noise', '噪音')}，${w('fireman', '消防队员')}正在进行安全演习。他们演示如何${w('solve', '解决')}危机，如何${w('repair', '修理')}设备。李明面临一个${w('troublesome', '麻烦的')}问题：如何${w('fit', '融入')}新环境。</p>

<p>${w('occasion', '时机')}出现在${w('electronics', '电子学')}课，他遇到了苏雨。她${w('inherit', '继承')}了父亲的${w('intelligence', '智力')}，在${w('proportion', '比例')}计算上天赋异禀。${w('contrary', '相反')}于他的紧张，她总能让${w('calm', '平静')}下来。</p>

<p>两人${w('freely', '自由地')}交流，${w('guard', '守卫')}着彼此的秘密。李明发现苏雨${w('temper', '脾气')}很好，从不轻易发火。${w('shortage', '缺少')}勇气的他，决定寻找合适时机表白。</p>

<p>那天${w('weather', '天气')}晴朗，他们在${w('violin', '小提琴')}教室见面。苏雨带了把${w('blade', '刀片')}般锋利的水果刀削苹果。这是她${w('birth', '出生')}时祖母的礼物。</p>

<p>两人一起${w('learn', '学习')}音乐，面对生活的${w('gravity', '严重性')}。李明${w('owe', '欠')}她一顿晚餐，决定在平时兑现。"${w('madam', '小姐')}，能请您吃饭吗？"</p>

<p>苏雨笑了，那${w('light', '光')}芒照亮了他的心。"如果你不能${w('detection', '察觉')}到我的心意，真是一场${w('collision', '碰撞')}了。"两人相视而笑，${w('thank', '感谢')}命运的安排。</p>

<p>毕业后李明进入科技公司，${w('report', '报告')}显示行业发展迅速。他${w('prefer', '更喜欢')}在${w('ditch', '沟渠')}旁的咖啡馆工作，那里安静。</p>

<p>苏雨决定出国深造。临别时她${w('tumble', '摔倒')}出一句话："等我回来。"李明紧紧握住她的手。</p>

<p>分离的日子${w('occur', '发生')}了。李明每天凝视着合照，用${w('dollar', '美元')}买的视频卡每周与她联系。那份思念无法${w('damage', '损害')}。</p>

<p>一年后苏雨学成归来，在教室给他惊喜。紧紧相拥，仿佛${w('loss', '失去')}的时光都回来了。"我${w('reap', '收获')}了知识和爱情。"</p>

<p>李明送她${w('sack', '麻布袋')}装的礼物——记录他们爱情${w('heading', '标题')}的相册。苏雨感动得热泪盈眶。</p>

<p>当晚他们${w('seal', '密封')}了彼此的承诺。李明知道这绝非废话，而是真实人生。他会用坚定决心，守护这份幸福。</p>`;

function generateLearnHTML(storyTitle, storySubtitle, storyContent, vocabCount) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${storyTitle}：${storySubtitle} · 学习版</title>
<style>
  :root { --pill: #E1BEE7; --accent: #9C27B0; --bg-soft: #F3E5F5; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { margin: 0; padding: 0; width: 100%; min-height: 100vh;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
    color: #2b2b2b; background: linear-gradient(180deg, var(--bg-soft), #ffffff); background-attachment: fixed; }
  .wrap { max-width: 297mm; width: 100%; margin: 0 auto; padding: 0 40px 80px; }
  header.top { text-align: center; padding: 46px 40px 30px; }
  header.top .badge { display: inline-block; padding: 5px 16px; border-radius: 999px;
    background: var(--accent); color: #fff; font-size: 13px; letter-spacing: 2px; margin-bottom: 16px; }
  header.top h1 { font-size: 34px; margin: 0 0 10px; letter-spacing: 2px; }
  header.top p.sub { color: #888; font-size: 15px; margin: 0 0 18px; }
  section.story { background: #fff; border-radius: 20px; padding: 30px 32px 34px;
    margin-bottom: 30px; box-shadow: 0 8px 30px rgba(0,0,0,.05); }
  section.story .step { display: inline-block; font-size: 13px; color: var(--accent); font-weight: 700;
    border-left: 4px solid var(--accent); padding-left: 10px; margin-bottom: 14px;
    background: var(--bg-soft); border-radius: 4px; padding: 6px 12px; }
  section.story h2 { font-size: 26px; margin: 6px 0 8px; letter-spacing: 1px; line-height: 1.35; }
  section.story h2 .no { color: var(--accent); margin-right: 10px; }
  section.story .meta { font-size: 13px; color: #aaa; margin-bottom: 22px; }
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 4px; text-align: justify; }
  .w { background-color: #E1BEE7; border-radius: 999px; padding: 0.12em 0.55em;
    margin: 0 1px; white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .w:hover { opacity: 0.85; }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词</div>
      <h1>${storyTitle}</h1>
      <p class="sub">${storySubtitle}</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story</span>${storySubtitle}</h2>
      <div class="meta">本篇约 2500 字 · 融入 ${vocabCount} 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyContent}</div>
    </section>
    <footer>${storyTitle}：${storySubtitle} · 学习版　|　看故事记单词</footer>
  </div>

  <script>
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.w').forEach(function(span) {
      var text = span.textContent;
      var match = text.match(/^([a-zA-Z]+)/);
      if (match) {
        var word = match[1];
        span.addEventListener('click', function() {
          speak(word);
        });
      }
    });
  });

  function speak(word) {
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
  </script>
</body>
</html>`;
}

function generateReviewHTML(storyTitle, storySubtitle, storyContent, vocabCount) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${storyTitle}：${storySubtitle} · 复习版</title>
<style>
  :root { --pill-review: #C8E6C9; --accent: #4CAF50; --bg-soft: #E8F5E9; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { margin: 0; padding: 0; width: 100%; min-height: 100vh;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
    color: #2b2b2b; background: linear-gradient(180deg, var(--bg-soft), #ffffff); background-attachment: fixed; }
  .wrap { max-width: 297mm; width: 100%; margin: 0 auto; padding: 0 40px 80px; }
  header.top { text-align: center; padding: 46px 40px 30px; }
  header.top .badge { display: inline-block; padding: 5px 16px; border-radius: 999px;
    background: var(--accent); color: #fff; font-size: 13px; letter-spacing: 2px; margin-bottom: 16px; }
  header.top h1 { font-size: 34px; margin: 0 0 10px; letter-spacing: 2px; }
  header.top p.sub { color: #888; font-size: 15px; margin: 0 0 18px; }
  section.story { background: #fff; border-radius: 20px; padding: 30px 32px 34px;
    margin-bottom: 30px; box-shadow: 0 8px 30px rgba(0,0,0,.05); }
  section.story .step { display: inline-block; font-size: 13px; color: var(--accent); font-weight: 700;
    border-left: 4px solid var(--accent); padding-left: 10px; margin-bottom: 14px;
    background: var(--bg-soft); border-radius: 4px; padding: 6px 12px; }
  section.story h2 { font-size: 26px; margin: 6px 0 8px; letter-spacing: 1px; line-height: 1.35; }
  section.story h2 .no { color: var(--accent); margin-right: 10px; }
  section.story .meta { font-size: 13px; color: #aaa; margin-bottom: 22px; }
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 4px; text-align: justify; }
  .r { background-color: #C8E6C9; border-radius: 999px; padding: 0.12em 0.55em;
    margin: 0 1px; white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .r .h { display: none; }
  .r.show .h { display: inline; }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词</div>
      <h1>${storyTitle}</h1>
      <p class="sub">${storySubtitle}</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story</span>${storySubtitle}</h2>
      <div class="meta">本篇约 2500 字 · 融入 ${vocabCount} 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${storyContent}</div>
    </section>
    <footer>${storyTitle}：${storySubtitle} · 复习版　|　看故事记单词</footer>
  </div>
<script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;
}

function convertToReview(content) {
  return content.replace(/<span class="w">([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g, (match, word, chinese) => {
    return `<span class="r" onclick="toggle(this)">${word}(<span class="h">${chinese}</span>)</span>`;
  });
}

function countVocab(content) {
  const matches = content.match(/<span class="w">/g);
  return matches ? matches.length : 0;
}

function generateStory() {
  const storyTitle = '校园恋曲';
  const storySubtitle = '青春岁月';
  const vocabCount = countVocab(storyContent);

  console.log(`生成故事: ${storyTitle} - ${storySubtitle}`);
  console.log(`词汇数量: ${vocabCount} 个`);

  const resultDir = path.join(__dirname, 'result');
  if (!fs.existsSync(resultDir)) {
    fs.mkdirSync(resultDir, { recursive: true });
  }

  const learnHTML = generateLearnHTML(storyTitle, storySubtitle, storyContent, vocabCount);
  const learnFile = path.join(resultDir, `02_${storyTitle}_${storySubtitle}_学习版.html`);
  fs.writeFileSync(learnFile, learnHTML, 'utf-8');
  console.log(`✓ 学习版已生成`);

  const reviewContent = convertToReview(storyContent);
  const reviewHTML = generateReviewHTML(storyTitle, storySubtitle, reviewContent, vocabCount);
  const reviewFile = path.join(resultDir, `02_${storyTitle}_${storySubtitle}_复习版.html`);
  fs.writeFileSync(reviewFile, reviewHTML, 'utf-8');
  console.log(`✓ 复习版已生成`);

  console.log('\n故事生成完成！');
}

generateStory();