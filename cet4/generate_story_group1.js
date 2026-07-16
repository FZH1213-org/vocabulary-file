const fs = require('fs');
const path = require('path');

// 辅助函数：创建学习版词汇标记
function w(word, chinese) {
  return `<span class="w">${word}(${chinese})📢</span>`;
}

// 基于第1组词汇的完整故事（每个词汇只用一次）
const storyContent = `<p>林若雪站在废弃的${w('lumber', '木材')}加工厂前，${w('among', '在...中间')}这些破败的建筑中寻找着机会。她知道，这个看似${w('hopeless', '绝望的')}的地方，其实隐藏着巨大的商机。作为重生者，她清楚地记得，十年后这里将会${w('convert', '转变')}成一个繁华的商业中心，价值翻了几十倍。</p>

<p>她${w('stare', '凝视')}着手中的地图，脑海中不断${w('rotate', '旋转')}着各种计划。每往前走一${w('meter', '米')}，她都能从周围的痕迹中${w('infer', '推断')}出未来发展的方向。这不是一个${w('mistake', '错误')}的决定，而是她改变命运的${w('objective', '目标')}的起点。她${w('shall', '将')}用这辈子的智慧，弥补前世的遗憾。</p>

<p>回到狭小的${w('accommodation', '住所')}，虽然简陋，但${w('furniture', '家具')}摆放得井井有条。她知道自己必须${w('rapidly', '迅速')}行动。作为一名${w('inventor', '发明家')}的后代，她继承了家族${w('extensive', '广泛的')}人脉和聪明才智，这将成为她最大的资本。</p>

<p>她${w('begin', '开始')}制定详细的计划。第${w('number', '一')}，寻找${w('suitable', '合适的')}合作伙伴；第二，筹集启动资${w('fee', '费')}；第三，建立品牌形象。她的${w('uncle', '叔叔')}曾告诉她，商业是一场需要智慧的较量，要有大${w('scale', '规模')}的眼光和格局。</p>

<p>这天${w('weather', '天气')}很好，阳光透过窗户照在她脚${w('toe', '脚趾')}边的文件上。她试图${w('trace', '追踪')}父亲当年的足迹，找出那个让家族陷入${w('queer', '奇怪')}困境的幕后黑手。她${w('fond', '喜欢')}一边思考一边吃${w('cheese', '奶酪')}，这让她想起小时候在${w('railway', '铁路')}旁老家的快乐时光。</p>

<p>那片${w('huge', '巨大的')}${w('land', '土地')}曾经属于他们家，但因为一次${w('unfair', '不公平')}的商业纠纷而失去。她${w('inward', '内心')}发誓，一定要夺回属于自己的一切。父亲临终前说过的话至今萦绕在耳畔："不要让过去的失败成为你${w('mental', '精神')}上的负担，要相信自己${w('enable', '能够')}创造新的未来。"</p>

<p>她记得父亲曾经是${w('naval', '海军')}军官，退役后投身商海，却因为一次${w('intentional', '故意的')}陷害而失去一切。那些人以为她已经绝望，但${w('alive', '活着的')}她绝不会认输。这个${w('vacation', '假期')}，她将要完成自己的第一步计划。</p>

<p>夜深了，她${w('upward', '向上')}望着星空，强烈的${w('liable', '有责任的')}感让她无法入睡。她知道，自己已经${w('cast', '投掷')}出了命运的第一网，接下来就等待收获。这场人生的${w('plough', '耕作')}，她要用心经营，播下希望的种子。</p>

<p>几天后，她来到城市的另一端，这里有一家老旧的${w('gymnasium', '体育馆')}即将拍卖。在她记忆中，这里未来会成为高端商业区的核心地带。她计算着每一${w('liter', '升')}土地的价值，心中有了${w('solid', '可靠的')}把握。这不是${w('cheap', '便宜的')}投资，但回报将是巨大的。</p>

<p>拍卖会上，她以${w('pleasant', '愉快的')}心情观察着其他竞拍者。她知道他们都在打着自己的算盘，但没人能预料到未来的${w('flavour', '滋味')}。当拍卖锤落下时，她以合理的价格拿下了这块地皮，开始了她商业帝国的第一步。</p>`;

// 生成HTML函数（保持不变）
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
  const storyTitle = '重生商途';
  const storySubtitle = '命运重启';
  const vocabCount = countVocab(storyContent);

  console.log(`生成故事: ${storyTitle} - ${storySubtitle}`);
  console.log(`词汇数量: ${vocabCount} 个`);

  const resultDir = path.join(__dirname, 'result');
  if (!fs.existsSync(resultDir)) {
    fs.mkdirSync(resultDir, { recursive: true });
  }

  const learnHTML = generateLearnHTML(storyTitle, storySubtitle, storyContent, vocabCount);
  const learnFile = path.join(resultDir, `01_${storyTitle}_${storySubtitle}_学习版.html`);
  fs.writeFileSync(learnFile, learnHTML, 'utf-8');
  console.log(`✓ 学习版已生成`);

  const reviewContent = convertToReview(storyContent);
  const reviewHTML = generateReviewHTML(storyTitle, storySubtitle, reviewContent, vocabCount);
  const reviewFile = path.join(resultDir, `01_${storyTitle}_${storySubtitle}_复习版.html`);
  fs.writeFileSync(reviewFile, reviewHTML, 'utf-8');
  console.log(`✓ 复习版已生成`);

  console.log('\n故事生成完成！');
}

generateStory();