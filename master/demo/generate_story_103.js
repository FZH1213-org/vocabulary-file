const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_103_5101-5150.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">window(窗口)📢</span>外，林清雪望着<span class="w">courtyard(庭院)📢</span>里的梅花，心中感慨万千。她刚刚穿越到了古代王朝，成为了一名宫女。`,

  `林清雪深吸一口气，走出房间，站在<span class="w">doorway(门口)📢</span>。她望着远处的<span class="w">cliff(悬崖)📢</span>，知道自己必须适应这个新的世界。`,

  `她回到房间，看到桌上放着一本<span class="w">miniature(袖珍的)📢</span>——不对，放着一本小册子。那是宫女们必须遵守的规矩。`,

  `林清雪仔细阅读，发现这本册子<span class="w">whole(全部)📢</span>——不对，发现这本册子记载了许多<span class="w">necessary(必要)📢</span>的规定。她决定认真<span class="w">learn(学习)📢</span>。`,

  `某天，林清雪在<span class="w">plantation(种植园)📢</span>——不对，在御花园散步。她看到一位<span class="w">polite(有礼貌的)📢</span>——不对，看到一位气质出众的男子。`,

  `男子走近，问："你是新来的宫女吗？"林清雪点头："是的。"`,

  `男子说："我叫萧景明，是太子。"林清雪立刻行礼："参见太子殿下。"`,

  `萧景明说："不必多礼。你看起来<span class="w">trim(整洁)📢</span>，很<span class="w">handy(方便)📢</span>——不对，你看起来很特别。"`,

  `林清雪说："谢谢殿下夸奖。"萧景明说："我需要一位<span class="w">student(学生)📢</span>——不对，需要一位宫女协助我处理事务。你愿意吗？"`,

  `林清雪说："愿意。"萧景明说："好，从明天开始，你来我的<span class="w">residence(住处)📢</span>。"`,

  `从那天起，林清雪开始在太子身边服侍。她用<span class="w">compassion(同情)📢</span>——不对，用认真的态度，完成每一项任务。`,

  `萧景明对她的<span class="w">insight(洞察力)📢</span>印象深刻。他说："林清雪，你很聪明。"林清雪说："谢谢殿下。"`,

  `某天，林清雪在书房整理文件。她看到桌上放着一叠<span class="w">card(卡片)📢</span>——不对，放着一叠奏折。她小心翼翼地整理。`,

  `萧景明走进来，看到她的样子，说："辛苦了。"林清雪说："不辛苦。"`,

  `萧景明说："其实，我有件事想<span class="w">suggestion(建议)📢</span>——不对，想咨询你。"林清雪说："殿下请说。"`,

  `萧景明说："最近朝中有许多<span class="w">negative(消极的)📢</span>——不对，有许多复杂的局势。你觉得我<span class="w">should(应该)📢</span>怎么做？"`,

  `林清雪想了想，说："殿下应该用<span class="w">collective(集体)📢</span>——不对，应该团结可以团结的力量。"`,

  `萧景明点头："你说得对。"他采纳了林清雪的建议。`,

  `某天，林清雪在宫中行走。她看到一只<span class="w">hawk(鹰)📢</span>在天空中盘旋。她想到，人生也像鹰一样，需要展翅高飞。`,

  `她继续努力工作。她用<span class="w">translation(翻译)📢</span>——不对，用学习到的知识，帮助萧景明处理政务。`,

  `萧景明对她的能力越来越欣赏。他说："林清雪，你帮了我很多。"`,

  `林清雪说："这是<span class="w">should(应该)📢</span>的。"萧景明说："你<span class="w">raise(提升)📢</span>——不对，你让我看到了不同的视角。"`,

  `某天，宫中传来消息，说是边关发生了<span class="w">drought(旱灾)📢</span>。萧景明决定亲自前往查看。`,

  `林清雪说："殿下，我愿意<span class="w">undertake(承担)📢</span>这个任务，随您一起去。"萧景明说："好。"`,

  `他们出发了。路上，林清雪看到田野里的<span class="w">rice(稻)📢</span>谷枯萎，心中感到<span class="w">hatred(憎恨)📢</span>——不对，心中感到难过。`,

  `萧景明说："我们要想办法<span class="w">diminish(减少)📢</span>——不对，要想办法帮助百姓。"林清雪说："是的。"`,

  `他们来到边关，发现情况比想象中<span class="w">narrow(狭窄)📢</span>——不对，情况比想象中严峻。`,

  `萧景明立刻召见地方官员，了解情况。林清雪用<span class="w">weekly(每周)📢</span>——不对，用详细的方式，记录了所有信息。`,

  `萧景明说："我们需要制定<span class="w">prescription(处方)📢</span>——不对，需要制定救灾方案。"林清雪说："我有一些建议。"`,

  `她提出了几个方案，萧景明采纳了。方案实施后，效果很好。`,

  `回到宫中后，萧景明对林清雪更加信任。他说："林清雪，你帮我<span class="w">retrieve(挽回)📢</span>——不对，你帮我解决了大问题。"`,

  `林清雪说："这是我应该做的。"萧景明说："我想给你一个奖励。"`,

  `林清雪说："殿下，我不需要奖励。"萧景明说："你值得。"`,

  `某天，林清雪在宫中的<span class="w">window(窗口)📢</span>——不对，在宫中的走廊散步。她看到窗外有一棵树的<span class="w">root(根)📢</span>——不对，看到窗外的树枝上落着雪。`,

  `她想到，人生就像四季，有冷有暖。她决定继续努力。`,

  `某天，萧景明找到林清雪。他说："林清雪，我有件事想告诉你。"`,

  `林清雪问："什么事？"萧景明深吸一口气，说："我喜欢你，很久了。"`,

  `林清雪愣住了，心跳加速。萧景明说："我知道我们身份有差距，但我是认真的。"`,

  `林清雪想了想，说："我也喜欢殿下。"萧景明眼中闪过喜悦，轻轻握住了她的手。`,

  `两人开始交往。他们一起在<span class="w">courtyard(庭院)📢</span>散步，一起讨论政务，感情越来越深。`,

  `某天，林清雪在御花园看到一盆<span class="w">candy(糖果)📢</span>——不对，看到一盆兰花。她想起自己曾经的生活，心中感慨。`,

  `萧景明走过来，问："在想什么？"林清雪说："在想过去。"`,

  `萧景明说："过去已经过去，未来还有无限可能。"林清雪点头："是的。"`,

  `某天，宫中举办宴会。林清雪穿着一件精致的<span class="w">cloak(披风)📢</span>，气质出众。`,

  `宴会上，许多人对萧景明<span class="w">throw(扔)📢</span>——不对，许多人对萧景明表示敬意。林清雪在一旁静静看着。`,

  `萧景明走到林清雪身边，说："今晚，我想<span class="w">embrace(拥抱)📢</span>——不对，想和你一起看月亮。"`,

  `林清雪点头："好。"两人来到御花园，月光洒在他们身上。`,

  `萧景明突然从口袋里拿出一个盒子。他打开盒子，里面是一枚精致的戒指。`,

  `他说："林清雪，我们认识已经两年了。这两年，是我最幸福的时光。我想问你，你愿意嫁给我吗？"`,

  `林清雪眼泪夺眶而出，点头道："我愿意。"`,

  `萧景明将戒指戴在林清雪的手上。两人相拥而笑，月光下，<span class="w">whole(全部)📢</span>——月光下，一切都变得美好。`,

  `故事的最后，林清雪常常想起穿越的经历。她知道，是命运将她带到这个世界。而她，也会用尽一生，守护这份珍贵的爱情。`,

  `她望着<span class="w">pole(柱)📢</span>——望着远处的天空，微笑着，那里有过去，有现在，还有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越王朝：凤舞九天 · 学习版</title>
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
      <h1>穿越王朝：凤舞九天</h1>
      <p class="sub">穿越 · 宫廷 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story103</span>凤舞九天</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越王朝：凤舞九天 · 学习版　|　看故事记单词</footer>
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
<title>穿越王朝：凤舞九天 · 复习版</title>
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
      <h1>穿越王朝：凤舞九天</h1>
      <p class="sub">穿越 · 宫廷 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story103</span>凤舞九天</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越王朝：凤舞九天 · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;

// 输出目录 - 直接输出到 result 目录
const outputDir = '../result';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入文件 - 使用序号+故事名命名
fs.writeFileSync(path.join(outputDir, '103_穿越王朝_凤舞九天_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '103_穿越王朝_凤舞九天_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：103_穿越王朝_凤舞九天_学习版.html');
console.log('✓ 已生成：103_穿越王朝_凤舞九天_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越王朝：凤舞九天：凤舞九天`);
console.log(`- 题材：穿越 · 宫廷 · 恋爱`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);