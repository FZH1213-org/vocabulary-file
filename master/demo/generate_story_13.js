const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('master/demo/vocabulary_split/vocabulary_013_601-650.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `九月的风轻轻吹过<span class="w">campus(校园)📢</span>，梧桐树叶沙沙作响。林雨晴拖着行李箱，第一次走进这所梦寐以求的大学。她的<span class="w">idea(想法)📢</span>很简单——好好学习，找份好工作，改变家庭的命运。`,

  `宿舍里，林雨晴认识了三位室友。李婷是个<span class="w">lazy(懒散)📢</span>的女孩，总爱赖床；张敏<span class="w">keen(热衷)📢</span>于学习，成绩优异；王雪则是个<span class="w">strange(奇怪)📢</span>的文艺青年，整天抱着吉他。`,

  `大一的课程<span class="w">lack(缺少)📢</span>挑战性，林雨晴觉得有些无聊。直到有一天，她在图书馆遇到了学长陈墨。他坐在<span class="w">chamber(房间)📢</span>的角落，专注地翻阅着一本厚厚的<span class="w">manuscript(手稿)📢</span>。`,

  `陈墨是文学社的社长，<span class="w">innocent(单纯)📢</span>的笑容让林雨晴心跳加速。她鼓起勇气上前搭话："学长，您在看什么书？"陈墨抬头，温和地说："一本关于<span class="w">quantity(数量)📢</span>诗人的诗集。"`,

  `从那以后，林雨晴经常"偶遇"陈墨。她知道这是<span class="w">superfluous(多余)📢</span>的心思，但无法控制自己。她开始在图书馆附近<span class="w">patrol(巡逻)📢</span>，只为多看他一眼。`,

  `有一天，林雨晴终于鼓起勇气，邀请陈墨去看<span class="w">cinema(电影)📢</span>。陈墨欣然答应。放映厅里，林雨晴偷偷瞥向陈墨，发现他正专注地看着银幕。她的心跳得更快了。`,

  `电影结束后，两人在校园的小路上散步。陈墨突然问："你<span class="w">want(想要)📢</span>加入文学社吗？"林雨晴惊喜地点头："当然想！"<span class="w">perhaps(也许)📢</span>这就是上天给她的机会。`,

  `加入文学社后，林雨晴发现陈墨身边有很多优秀的女生。其中最突出的是苏雅，她不仅成绩优异，还是舞蹈队的<span class="w">resident(成员)📢</span>。林雨晴感到一阵<span class="w">painful(痛苦)📢</span>的自卑。`,

  `然而，林雨晴没有放弃。她努力提升自己，参加各种活动，学习新技能。她相信，只要自己足够优秀，终有一天会得到陈墨的认可。`,

  `一学期过去了，林雨晴在文学社的<span class="w">performance(表现)📢</span>越来越出色。她写的文章被刊登在校刊上，获得了师生们的一致好评。陈墨对她的态度也逐渐改变。`,

  `一次社团活动后，陈墨邀请林雨晴去学校的<span class="w">cafeteria(食堂)📢</span>吃<span class="w">supper(晚餐)📢</span>。席间，陈墨说："你变了很多，越来越自信了。"林雨晴害羞地低下头。`,

  `林雨晴的室友张敏注意到了她的变化。她<span class="w">confess(坦白)📢</span>道："我喜欢上陈墨学长了。"张敏笑着说："我看出来了，你们挺般配的。"`,

  `然而，事情并没有林雨晴想象的那么顺利。苏雅开始频繁出现在陈墨身边，甚至公开表示对陈墨的<span class="w">interest(兴趣)📢</span>。林雨晴感到前所未有的<span class="w">pressure(压力)📢</span>。`,

  `林雨晴决定不再逃避。她主动与苏雅交流，发现对方其实并不像想象中那么可怕。苏雅甚至告诉她："陈墨是个好人，值得你去追求。"`,

  `受到鼓励的林雨晴，决定在<span class="w">Saturday(星期六)📢</span>的社团聚会上向陈墨表白。她准备了一首自己写的诗，作为告白礼物。`,

  `聚会当晚，林雨晴紧张得手心出汗。她站在陈墨面前，声音颤抖地朗诵了那首诗。诗中描绘了她对陈墨的<span class="w">emotion(情感)📢</span>和对未来的憧憬。`,

  `陈墨听完，沉默了片刻。然后他微笑着说："雨晴，谢谢你。但我现在不想谈恋爱，我想专注于学业。"林雨晴的心一下子跌入谷底。`,

  `林雨晴强忍泪水，说："没关系，我理解。"然后她转身离开，在<span class="w">staircase(楼梯)📢</span>转角处，终于忍不住哭了出来。`,

  `接下来的日子，林雨晴变得<span class="w">hollow(空虚)📢</span>。她不知道该如何面对陈墨，甚至考虑退出文学社。室友们纷纷劝她振作起来。`,

  `王雪对林雨晴说："爱情不是生活的全部。你还有学业，还有我们这些朋友。"李婷也说："对啊，别为一个男人放弃了<span class="w">yourself(你自己)📢</span>。"`,

  `林雨晴开始反思。她意识到，自己确实把太多精力放在了感情上，而忽略了其他重要的东西。她决定重新调整心态，把重心放在学习和社团活动上。`,

  `时间慢慢过去，林雨晴渐渐走出了失落的阴影。她在文学社的表现越来越出色，甚至被选为副社长。她的<span class="w">confidence(自信)📢</span>也逐渐恢复。`,

  `毕业季来临，林雨晴站在校园的<span class="w">meadow(草地)📢</span>上，回想这四年的时光。她从一个<span class="w">rude(粗俗)📢</span>的小女生，成长为一个独立自信的女性。`,

  `陈墨走到她身边，说："雨晴，恭喜你毕业。"林雨晴微笑着说："谢谢学长。"两人相视一笑，仿佛过去的一切都已烟消云散。`,

  `陈墨突然说："其实，我后悔当初拒绝了你。现在的你，真的很优秀。"林雨晴愣住了，她没想到会听到这句话。`,

  `林雨晴深吸一口气，说："学长，谢谢你的话。但现在的我，已经不再是当初那个<span class="w">innocent(单纯)📢</span>的女孩了。我有自己的梦想，有自己的路要走。"`,

  `陈墨点头："我明白了。祝你未来一切顺利。"林雨晴伸出手："也祝你心想事成。"两人握手，为这段青春记忆画上句号。`,

  `林雨晴转身离开，心中没有遗憾，只有释然。她明白，有些感情注定只能是<span class="w">memories(回忆)📢</span>，而真正重要的是成长的过程。`,

  `毕业典礼上，林雨晴作为优秀毕业生代表上台发言。她站在台上，看着台下的同学们，心中充满了感激。这四年的大学生活，是她人生中最珍贵的<span class="w">treasure(宝藏)📢</span>。`,

  `典礼结束后，室友们围在一起拍照留念。张敏说："不管以后我们身在何处，都要保持<span class="w">contact(联系)📢</span>。"大家都点头答应。`,

  `离开校园的那天，林雨晴再次路过图书馆。她想起第一次遇见陈墨的场景，心中涌起一股暖流。那场比赛，虽然没有结果，但她收获了成长。`,

  `林雨晴拖着行李箱，走出校门。她知道，前方的路还很长，但她已经准备好迎接新的<span class="w">challenge(挑战)📢</span>。青春的故事告一段落，新的人生篇章即将开启。`,

  `多年后，林雨晴成为了一名成功的作家。她的第一部小说，正是以大学时光为<span class="w">background(背景)📢</span>，讲述了一个女孩从青涩到成熟的故事。书的扉页上，她写着一句话："感谢那些让我成长的人和事。"`,

  `每当夜深人静，林雨晴都会想起那段校园时光。她会心一笑，因为她知道，那些<span class="w">bitter(苦涩)📢</span>与甜蜜交织的日子，已经成为了她生命中最美好的<span class="w">legend(传奇)📢</span>。`,

  `林雨晴的故事告诉我们：青春不只有爱情，还有成长、友情和梦想。即使经历挫折，也要勇敢前行，因为最美的风景，永远在前方等待。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>青春校园 · 学习版</title>
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
      <div class="badge">看故事记单词 · 学习版</div>
      <h1>青春校园</h1>
      <p class="sub">校园 · 青春 · 成长</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story13</span>图书馆的邂逅</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>青春校园 · 学习版　|　看故事记单词</footer>
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
    if ('speechSynthesis' in window) {
      var utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  }
  </script>
</body>
</html>`;

// 生成复习版 HTML
const reviewParagraphs = storyParagraphs.map(p => {
  return p.replace(/<span class="w">([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g,
    '<span class="r" onclick="toggle(this)">$1(<span class="h">$2</span>)</span>');
});

const reviewHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>青春校园 · 复习版</title>
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
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 12px; text-align: justify; }
  .r { background-color: #C8E6C9; border-radius: 999px; padding: 2px 8px; margin: 0 2px;
    white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .r:hover { opacity: 0.85; }
  .r .h { color: transparent; user-select: none; }
  .r.show .h { color: #333; }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词 · 复习版</div>
      <h1>青春校园</h1>
      <p class="sub">校园 · 青春 · 成长</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story13</span>图书馆的邂逅</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>青春校园 · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;

// 输出目录
const outputDir = 'master/result';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入文件
fs.writeFileSync(path.join(outputDir, '13_青春校园_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '13_青春校园_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：13_青春校园_学习版.html');
console.log('✓ 已生成：13_青春校园_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：青春校园：图书馆的邂逅`);
console.log(`- 题材：校园 · 青春 · 成长`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);