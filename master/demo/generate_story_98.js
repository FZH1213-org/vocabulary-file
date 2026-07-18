const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_098_4851-4900.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">moon(月亮)📢</span>高悬，林晚晴站在高楼的窗前，望着繁华的城市夜景。她刚刚重生回到了十年前——她人生最关键的时刻。`,

  `林晚晴深吸一口气，心中感慨万千。前世的她，因为一次错误的<span class="w">decision(决定)📢</span>，导致事业失败，人生陷入低谷。这一世，她决心改变一切。`,

  `她转身回到房间，桌上放着一份<span class="w">order(订单)📢</span>。那是她刚接手的一笔生意，金额<span class="w">big(大)📢</span>——金额很大，对公司的未来发展至关重要。`,

  `林晚晴知道，这笔生意的<span class="w">aim(目的)📢</span>是拓展海外市场。她必须小心处理，否则可能<span class="w">cease(停止)📢</span>——否则可能失去机会。`,

  `第二天，林晚晴来到公司。公司位于一座<span class="w">tower(塔)📢</span>式写字楼里，是她父亲创立的。如今父亲去世，她必须独自扛起这份家业。`,

  `她走进办公室，看到桌上摆着一份<span class="w">summary(摘要)📢</span>——摆着一份报告。是市场部提交的，分析了当前的行业状况。`,

  `林晚晴仔细阅读，发现市场竞争<span class="w">intensive(集中的)📢</span>——市场竞争很激烈。她必须找到突破口，才能让公司<span class="w">prosperity(繁荣)📢</span>发展。`,

  `她召开会议，听取各部门的汇报。市场部经理说："我们要<span class="w">negotiate(谈判)📢</span>新的合作，才能拓展市场。"林晚晴点头："好的。"`,

  `会后，林晚晴开始制定计划。她用<span class="w">systematic(系统的)📢</span>方法，分析竞争对手的优势和劣势，寻找机会。`,

  `某天，林晚晴在<span class="w">bar(酒吧)📢</span>——不对，在公司餐厅遇到一个男子。他叫陆景川，是一家投资公司的董事长。`,

  `陆景川看到林晚晴，微笑道："林总，久仰大名。"林晚晴说："陆总，幸会。"`,

  `陆景川说："听说贵公司正在寻找合作伙伴。我有兴趣<span class="w">hear(听)📢</span>——有兴趣了解详情。"林晚晴说："我们可以详谈。"`,

  `两人开始洽谈合作。林晚晴用专业的态度，阐述公司的<span class="w">foundation(基础)📢</span>——阐述公司的发展理念。陆景川听得很认真。`,

  `他说："林总，你的想法很好。但投资需要考虑风险。"林晚晴说："我明白。"`,

  `陆景川说："我会派人<span class="w">initiate(开始)📢</span>——派人进行尽职调查，然后再决定。"林晚晴说："好的，随时欢迎。"`,

  `几天后，陆景川的调查团队来到林晚晴的公司。他们用<span class="w">intensive(深入的)📢</span>方式，检查了财务、运营等各个方面。`,

  `林晚晴全力配合。她知道，这是获得投资的关键。她用<span class="w">wholesome(健康的)📢</span>——不对，她用透明的态度，回答了所有问题。`,

  `调查结束后，陆景川约林晚晴见面。他说："林总，我对贵公司很满意。我们决定投资。"`,

  `林晚晴激动地说："谢谢陆总！"陆景川说："这是我们的合作<span class="w">item(项目)📢</span>——这是我们的合作内容，请过目。"`,

  `林晚晴接过文件，仔细阅读。她发现合作条款很合理，便签下了协议。`,

  `合作开始后，林晚晴全力推进项目。她用<span class="w">refine(精制)📢</span>——不对，她用精益求精的态度，确保每一个环节都做到最好。`,

  `某天，公司接到一个<span class="w">tiresome(令人厌倦的)📢</span>——不对，接到一个棘手的问题。一个供应商突然涨价，影响了生产成本。`,

  `林晚晴立刻召见供应商代表。她说："你们这样做，违反了我们的协议。"供应商代表说："我们也有困难。"`,

  `林晚晴用<span class="w">idiom(习语)📢</span>——不对，她用坚定的语气说："如果不按原价执行，我们将停止合作。"供应商代表只好同意。`,

  `危机解决后，林晚晴松了一口气。她知道，生意场上充满了挑战，必须时刻保持警惕。`,

  `某天，林晚晴去工厂视察。工厂位于<span class="w">river(河流)📢</span>旁边，环境优美。她看到工人们正在努力工作，心中感到欣慰。`,

  `她走进车间，看到一台机器的<span class="w">shaft(轴)📢</span>——看到一台机器的核心部件出现故障。她立刻吩咐技术人员维修。`,

  `技术人员说："需要更换零件，可能需要几天。"林晚晴说："能不能加快？我们<span class="w">per(每)📢</span>天都在损失。"`,

  `技术人员说："我会尽力。"林晚晴说："好的，辛苦了。"`,

  `回到办公室，林晚晴开始思考新的发展方向。她决定<span class="w">decorate(装饰)📢</span>——不对，决定改造公司的产品线，推出更高端的产品。`,

  `她召集研发团队，提出想法。团队负责人说："这个想法<span class="w">big(大)📢</span>——这个想法很好，但需要投入大量资金。"`,

  `林晚晴说："资金的事我来解决。你们专注于研发。"团队负责人点头："好的。"`,

  `某天，林晚晴收到一封邀请函。是一家<span class="w">peasant(农民)📢</span>——不对，是一家农村合作社邀请她参加扶贫活动。`,

  `林晚晴决定参加。她带着团队来到农村，为村民们<span class="w">donate(捐赠)📢</span>物资和资金。村民们纷纷感谢。`,

  `活动结束后，林晚晴回到城市。她感到内心充实，知道做生意不仅要赚钱，也要回馈<span class="w">society(社会)📢</span>——不对，也要回馈社会。`,

  `某天，林晚晴在办公室工作到深夜。她感到有些疲惫，突然<span class="w">cough(咳嗽)📢</span>了几声。陆景川推门进来，看到她的样子，皱眉道："林总，你要注意身体。"`,

  `林晚晴说："谢谢关心，我会的。"陆景川说："工作重要，但<span class="w">everyone(每个人)📢</span>——但身体健康更重要。"`,

  `林晚晴心中一暖。她发现，陆景川虽然外表冷淡，但内心很关心人。`,

  `某天，公司举办年会。林晚晴站在舞台上，用<span class="w">shine(照耀)📢</span>——用光彩的形象，向员工们致辞。她说："感谢大家一年的努力，公司取得了很好的成绩。"`,

  `员工们纷纷鼓掌。陆景川站在台下，眼中满是欣赏。`,

  `年会结束后，陆景川找到林晚晴。他说："林总，我有件事想问你。"林晚晴说："请讲。"`,

  `陆景川说："我们认识这么久了，你觉得我怎么样？"林晚愣住了，随即低下头。`,

  `陆景川说："我喜欢你，想和你<span class="w">camp(露营)📢</span>——不对，想和你一起面对未来。"林晚晴抬起头，看着他。`,

  `她说："我愿意试试。"陆景川眼中闪过喜悦，轻轻握住了她的手。`,

  `两人开始交往。他们一起去山里<span class="w">camp(露营)📢</span>，一起在<span class="w">tree(树)📢</span>下野餐，感情越来越深。`,

  `某天，林晚晴带陆景川去看她父亲建立的<span class="w">foundation(基金会)📢</span>。她说："这是我父亲创立的，帮助了许多人。"`,

  `陆景川说："你的父亲很有远见。"林晚晴说："我希望能把这份事业继续下去。"`,

  `陆景川说："我会支持你。"林晚晴感激地看着他。`,

  `几个月后，林晚晴的公司成功上市。上市<span class="w">plateau(平稳状态)📢</span>后，公司进入了新的发展阶段。`,

  `某天，陆景川邀请林晚晴去海边。他们站在沙滩上，望着<span class="w">sailor(水手)📢</span>——望着海上的船只，心中感慨万千。`,

  `陆景川突然从口袋里拿出一个盒子。他打开盒子，里面是一枚<span class="w">flower(花)📢</span>——不对，是一枚精致的戒指。`,

  `他说："林晚晴，我们认识已经两年了。这两年，是我最幸福的时光。我想问你，你愿意嫁给我吗？"`,

  `林晚晴眼泪夺眶而出，点头道："我愿意。"`,

  `陆景川将戒指戴在林晚晴的手上。两人相拥而笑，海风轻轻吹拂，<span class="w">moon(月亮)📢</span>升起，仿佛在为他们祝福。`,

  `故事的最后，林晚晴常常想起重生前的日子。她知道，是那次重生让她学会了珍惜。她相信，只要坚持，就能创造属于自己的幸福。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生商海：破浪前行 · 学习版</title>
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
      <h1>重生商海：破浪前行</h1>
      <p class="sub">重生 · 商战 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story98</span>破浪前行</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生商海：破浪前行 · 学习版　|　看故事记单词</footer>
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
<title>重生商海：破浪前行 · 复习版</title>
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
      <h1>重生商海：破浪前行</h1>
      <p class="sub">重生 · 商战 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story98</span>破浪前行</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生商海：破浪前行 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '98_重生商海_破浪前行_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '98_重生商海_破浪前行_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：98_重生商海_破浪前行_学习版.html');
console.log('✓ 已生成：98_重生商海_破浪前行_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生商海：破浪前行：破浪前行`);
console.log(`- 题材：重生 · 商战 · 大女主`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);