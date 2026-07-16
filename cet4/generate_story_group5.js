const fs = require('fs');
const path = require('path');

function w(word, chinese) {
  return `<span class="w">${word}(${chinese})📢</span>`;
}

// 第5组：修仙玄幻主题 - 严格使用50个词汇（group_005.json）
const storyContent = `<p>林风站在${w('camp', '营地')}前，望着${w('waterfall', '瀑布')}飞流直下。作为修仙家族的后代，他${w('handsome', '英俊的')}外表下藏着不凡的资质。今日，他即将踏上修仙之路。</p>

<p>族中${w('corporation', '公司')}${w('office', '办公室')}的长老告诉他，家族面临危机。${w('doubtful', '可疑的')}势力正通过${w('underground', '地下')}渠道渗透修仙界。他必须${w('obtain', '获得')}传说中的神器才能拯救家族。</p>

<p>他取出祖传${w('log', '原木')}符，上面刻着神秘咒文。${w('original', '原始的')}文字记录着通往仙界的${w('canal', '运河')}。他${w('forget', '忘记')}了恐惧，内心涌起${w('love', '爱')}与责任。</p>

<p>${w('following', '下列的')}长辈指引，他来到${w('cable', '缆绳')}横悬的峡谷。对岸的${w('tutor', '导师')}已经等候多时。${w('professional', '专业的')}修仙者给他上了第一课——如何${w('equip', '装备')}法器。</p>

<p>${w('charming', '迷人的')}师姐送他一把${w('scissors', '剪刀')}，这不是普通的剪刀，而是能剪断${w('horizontal', '水平的')}空间屏障的法器。她${w('insist', '坚持')}${w('prescribe', '规定')}他必须在七日内掌握使用方法。</p>

<p>修炼${w('grade', '等级')}从这里开始，每当夜深，${w('owl', '猫头鹰')}的叫声都会提醒他${w('repetition', '重复')}练习的重要性。</p>

<p>一日，他在${w('waggon', '四轮运货马车')}旁遇到一个${w('horse', '马')}背上的老者。老者${w('appeal', '呼吁')}他加入对抗邪恶势力的阵营，并承诺给予${w('supplement', '补品')}——一种能提升修为的丹药。</p>

<p>${w('accidental', '意外的')}相遇改变了他的命运。老者告诉他，修仙界${w('civilization', '文明')}中，修仙者必须${w('virtue', '美德')}兼备。${w('just', '正义的')}之心才能驾驭力量。</p>

<p>他继续前行，${w('regular', '经常的')}打坐冥想。${w('opinion', '意见')}分歧的同门告诉他，修仙之路${w('probability', '可能性')}渺茫。但他选择相信自己的道路。</p>

<p>经过漫长的跋涉，他终于找到传说中的洞穴。洞穴深处，${w('tide', '潮汐')}般的灵气扑面而来。他${w('sew', '缝合')}破损的法器，感受到${w('decent', '得体的')}宁静，空气中没有${w('rot', '腐烂')}的气息。</p>

<p>古卷${w('of', '属于')}上古修仙者，用${w('English', '英语')}${w('indicate', '表明')}了修炼方法。他需要${w('counter', '计算器')}来测量灵气浓度。${w('contemporary', '同时代的')}修仙者已经不再使用这种方法，但他坚守传统。</p>

<p>${w('their', '他们的')}质疑没有动摇他的决心。${w('dam', '水坝')}旁，他学习如何控制水流般的灵气。${w('shampoo', '洗发')}般的清洁仪式后，他感觉能量在体内涌动。</p>

<p>${w('billion', '十亿')}年的传承，在这一刻得到了延续。他明白，修仙之路需要耐心和毅力。</p>`;

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
  const storyTitle = '修仙传说';
  const storySubtitle = '仙路初启';
  const vocabCount = countVocab(storyContent);

  console.log(`生成故事: ${storyTitle} - ${storySubtitle}`);
  console.log(`词汇数量: ${vocabCount} 个`);

  const resultDir = path.join(__dirname, 'result');
  if (!fs.existsSync(resultDir)) {
    fs.mkdirSync(resultDir, { recursive: true });
  }

  const learnHTML = generateLearnHTML(storyTitle, storySubtitle, storyContent, vocabCount);
  const learnFile = path.join(resultDir, `05_${storyTitle}_${storySubtitle}_学习版.html`);
  fs.writeFileSync(learnFile, learnHTML, 'utf-8');
  console.log(`✓ 学习版已生成`);

  const reviewContent = convertToReview(storyContent);
  const reviewHTML = generateReviewHTML(storyTitle, storySubtitle, reviewContent, vocabCount);
  const reviewFile = path.join(resultDir, `05_${storyTitle}_${storySubtitle}_复习版.html`);
  fs.writeFileSync(reviewFile, reviewHTML, 'utf-8');
  console.log(`✓ 复习版已生成`);

  console.log('\n故事生成完成！');
}

generateStory();