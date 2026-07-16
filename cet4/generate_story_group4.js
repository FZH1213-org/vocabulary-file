const fs = require('fs');
const path = require('path');

function w(word, chinese) {
  return `<span class="w">${word}(${chinese})📢</span>`;
}

// 第4组：悬疑霸总主题 - 严格使用50个词汇（group_004.json）
const storyContent = `<p>陈曦站在${w('cathedral', '大教堂')}前，手中的文件让她不得不${w('refuse', '拒绝')}签字。作为${w('firm', '公司')}的法律顾问，她必须${w('revise', '修正')}这份关于遗产继承的协议。文件${w('subject', '主题')}显示，继承人分配${w('rate', '比率')}存在严重问题。</p>

<p>她注意到文件${w('margin', '边缘')}的注释记录着关键线索——死者生前多次提到一个${w('tourist', '游客')}身份的神秘人物。这个${w('touch', '接触')}让她心跳加速，她意识到案件比想象中复杂。${w('ampere', '安培')}单位的符号出现在关键位置，这种加密方式她从未见过。</p>

<p>突然，一只${w('snake', '蛇')}从草丛中窜出。陈曦感受到周围${w('suspicion', '怀疑')}的目光投向她，仿佛她与此事有关。她${w('vex', '烦恼')}地皱眉，作为${w('employee', '雇员')}，她只是来执行任务。一个${w('league', '联盟')}组织的账户出现在死者${w('expense', '开支')}账单上，数额巨大。</p>

<p>回到办公室，她按${w('routine', '常规')}整理资料。门房${w('porter', '行李搬运工')}送来一封信，窗外${w('pigeon', '鸽子')}停在屋檐${w('brim', '边缘')}，仿佛在监视她。她想起父亲临终的遗言，那份${w('scholarship', '奖学金')}证书背后藏着秘密。</p>

<p>父亲曾是${w('lieutenant', '中尉')}，在${w('nitrogen', '氮')}实验室工作时发现了重大秘密。那段${w('hardship', '苦难')}的经历，让他被迫离开。${w('her', '她')}必须找出真相，这份${w('due', '到期的')}文件让她不得不加快进度。</p>

<p>她${w('rush', '冲')}向银行，额头渗出${w('sweat', '汗')}。${w('ninety', '九十')}岁高龄的老人穿着厚重的${w('overcoat', '大衣')}拦住她："这场${w('crisis', '危机')}是你父亲留下的${w('infinite', '无限的')}麻烦。"</p>

<p>老人${w('namely', '即')}是幕后老板："你必须${w('motivate', '激发')}自己的潜能，找出藏在${w('cage', '笼')}中的真相。"陈曦想起父亲曾说，那个秘密足以${w('bake', '烘焙')}出整个商业帝国的真相。她正是解开封印的${w('intermediate', '中间')}环节。</p>

<p>她${w('happy', '高兴')}不起来，虽然案件有进展，但${w('great', '重大')}的危险正在逼近。这个${w('holiday', '假期')}她不会休息。她必须用智慧${w('tie', '系紧')}命运的绳索，找出那个${w('want', '需要')}的答案。</p>

<p>${w('air', '空气')}中弥漫着危险气息。她想起父亲的${w('practice', '练习')}笔记，记录着如何应对各种危机。${w('frown', '皱眉')}的她，决定${w('join', '加入')}调查。${w('inspire', '启示')}告诉她，真相就在眼前。</p>

<p>旋转的${w('rotation', '旋转')}中，她似乎看到父亲的身影。他告诉她："这个${w('universe', '宇宙')}的真相，需要你亲手揭开。"${w('safe', '安全')}的彼岸，等待着勇敢者的到来。</p>`;

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
  const storyTitle = '豪门谜影';
  const storySubtitle = '身世真相';
  const vocabCount = countVocab(storyContent);

  console.log(`生成故事: ${storyTitle} - ${storySubtitle}`);
  console.log(`词汇数量: ${vocabCount} 个`);

  const resultDir = path.join(__dirname, 'result');
  if (!fs.existsSync(resultDir)) {
    fs.mkdirSync(resultDir, { recursive: true });
  }

  const learnHTML = generateLearnHTML(storyTitle, storySubtitle, storyContent, vocabCount);
  const learnFile = path.join(resultDir, `04_${storyTitle}_${storySubtitle}_学习版.html`);
  fs.writeFileSync(learnFile, learnHTML, 'utf-8');
  console.log(`✓ 学习版已生成`);

  const reviewContent = convertToReview(storyContent);
  const reviewHTML = generateReviewHTML(storyTitle, storySubtitle, reviewContent, vocabCount);
  const reviewFile = path.join(resultDir, `04_${storyTitle}_${storySubtitle}_复习版.html`);
  fs.writeFileSync(reviewFile, reviewHTML, 'utf-8');
  console.log(`✓ 复习版已生成`);

  console.log('\n故事生成完成！');
}

generateStory();