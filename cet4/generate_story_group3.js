const fs = require('fs');
const path = require('path');

function w(word, chinese) {
  return `<span class="w">${word}(${chinese})📢</span>`;
}

// 基于第3组50个词汇的故事（职场励志主题）
const storyContent = `<p>王芳${w('entry', '进入')}公司大楼，今天是她在新${w('classroom', '教室')}${w('beginning', '开始')}职业生涯的第一天。作为一名新${w('citizen', '公民')}，她对未来充满期待。</p>

<p>公司${w('introduce', '介绍')}了工作流程，王芳认真听讲。${w('weekday', '工作日')}的节奏很快，${w('intense', '强烈的')}竞争压力让她感到压力。但她知道，这是${w('phase', '阶段')}性的挑战。</p>

<p>${w('visitor', '访问者')}${w('find', '发现')}她的办公桌上摆着一碗${w('grape', '葡萄')}，那是同事送的欢迎礼物。${w('nevertheless', '然而')}，她${w('able', '能够')}感受到团队的热情。</p>

<p>第一周的工作${w('satisfactory', '满意的')}，但${w('also', '也')}出现了一些问题。${w('external', '外部的')}客户对方案提出质疑，要求${w('proof', '证明')}可行性。王芳面临${w('contest', '竞赛')}般的压力。</p>

<p>她开始${w('decide', '决定')}采取行动。首先，她${w('underline', '强调')}了方案的优势。其次，她用数据证明方案不会${w('exceed', '超过')}预算。最后，她寻求主管的${w('advice', '建议')}。</p>

<p>主管是个${w('hard', '严厉的')}人，经常${w('criticize', '批评')}下属。他对王芳说："如果你认为这是${w('unjust', '不公平的')}，可以用${w('different', '不同的')}方法证明自己。"</p>

<p>王芳${w('bore', '钻研')}了几个小时，终于找到解决方案。她${w('mute', '沉默')}地工作，没有抱怨${w('unpleasant', '讨厌的')}环境。${w('for', '为了')}证明自己，她付出了巨大努力。</p>

<p>${w('successive', '连续的')}加班让她身体出现问题，${w('illness', '疾病')}困扰着她。但她坚持工作，${w('doubtless', '无疑')}地完成了任务。</p>

<p>办公室角落的${w('drawer', '抽屉')}里，她发现了一些${w('wood', '木材')}制成的奖杯，那是前辈们留下的荣誉。她感受到传承的力量。</p>

<p>客户${w('video', '视频')}会议后，方案获得批准。王芳${w('innocent', '无辜的')}表情下藏着内心的喜悦。她用${w('puff', '吹捧')}的语气说："这不算什么。"</p>

<p>同事请她吃饭，点了一${w('bowl', '碗')}${w('cricket', '蟋蟀')}汤（这是当地特色菜）。饭后散步，${w('mile', '英里')}长的街道上，她讲述了自己的故事。</p>

<p>${w('except', '除...之外')}工作压力，她面临租房问题。${w('rent', '租金')}太高，她勉强维持生活。${w('harm', '伤害')}不大，但让她意识到城市生活的艰难。</p>

<p>${w('editor', '编辑')}看完报告，不敢相信这是新人的作品。他给王芳更多机会。</p>

<p>${w('religious', '宗教的')}节日期间，公司举办活动。王芳展现了自己的才华，${w('carbon', '碳')}排放数据分析是她的强项。</p>

<p>${w('heel', '脚后跟')}疼痛的她休息了一下。但是工作还要继续，她没有停下脚步。尽管办公室${w('in', '在')}角落，她${w('ugly', '丑陋的')}办公桌依然整洁有序。</p>
`;

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
  const storyTitle = '职场新秀';
  const storySubtitle = '初入职场';
  const vocabCount = countVocab(storyContent);

  console.log(`生成故事: ${storyTitle} - ${storySubtitle}`);
  console.log(`词汇数量: ${vocabCount} 个`);

  const resultDir = path.join(__dirname, 'result');
  if (!fs.existsSync(resultDir)) {
    fs.mkdirSync(resultDir, { recursive: true });
  }

  const learnHTML = generateLearnHTML(storyTitle, storySubtitle, storyContent, vocabCount);
  const learnFile = path.join(resultDir, `03_${storyTitle}_${storySubtitle}_学习版.html`);
  fs.writeFileSync(learnFile, learnHTML, 'utf-8');
  console.log(`✓ 学习版已生成`);

  const reviewContent = convertToReview(storyContent);
  const reviewHTML = generateReviewHTML(storyTitle, storySubtitle, reviewContent, vocabCount);
  const reviewFile = path.join(resultDir, `03_${storyTitle}_${storySubtitle}_复习版.html`);
  fs.writeFileSync(reviewFile, reviewHTML, 'utf-8');
  console.log(`✓ 复习版已生成`);

  console.log('\n故事生成完成！');
}

generateStory();