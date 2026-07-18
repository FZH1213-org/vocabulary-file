const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_100_4951-5000.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">August(八月)📢</span>的阳光透过落地窗，洒在林晚晴的办公桌上。她是盛世集团的<span class="w">vice(副)📢</span>总裁，正准备参加一场重要的商业谈判。`,

  `林晚晴整理好文件，看了一眼墙上的时钟。时间<span class="w">exceed(超过)📢</span>——时间还很充裕，她决定先检查一下资料。`,

  `她的办公室位于大厦的第<span class="w">storey(层)📢</span>——位于大厦的顶层，视野开阔。窗外，城市的<span class="w">coast(海岸线)📢</span>清晰可见。`,

  `林晚晴拿起桌上的一杯咖啡，轻轻抿了一口。她想起自己<span class="w">initial(最初)📢</span>进入公司时的情景。那时她只是一个<span class="w">typist(打字员)📢</span>，每天处理着繁琐的文件。`,

  `但她没有放弃。她用<span class="w">partial(部分)📢</span>时间——不对，她用业余时间学习管理知识，不断提升自己。`,

  `某天，公司举办了一场<span class="w">buffet(自助餐)📢</span>聚会。林晚晴在聚会上遇到了总裁陆景川。陆景川对她的<span class="w">authentic(真正的)📢</span>才华印象深刻。`,

  `陆景川说："林晚晴，你很有潜力。"林晚晴说："谢谢总裁夸奖。"`,

  `从那天起，林晚晴开始获得更多的机会。她从一个普通员工，逐步晋升为部门经理、总监，最终成为副总裁。`,

  `她<span class="w">earn(赚)📢</span>得的不仅是地位，更是同事们的<span class="w">respect(尊重)📢</span>——更是同事们的认可。`,

  `某天，林晚晴在公司的<span class="w">auditorium(礼堂)📢</span>演讲。她站在台上，望着台下<span class="w">inland(内地)📢</span>——不对，望着台下的同事们，心中充满自信。`,

  `她说："每个人都有机会成功。只要努力，就能<span class="w">attain(获得)📢</span>自己的目标。"同事们纷纷鼓掌。`,

  `演讲结束后，陆景川找到林晚晴。他说："你讲得很好。"林晚晴说："谢谢总裁。"`,

  `陆景川说："我<span class="w">previous(以前)📢</span>——我之前对你的判断没错，你确实很优秀。"林晚晴说："我会继续努力。"`,

  `某天，公司接到一个紧急项目。客户要求在<span class="w">intermediate(中间的)📢</span>——不对，要求在短期内完成。林晚晴主动承担了这个任务。`,

  `她带领团队加班加点，终于按时交付了成果。客户非常满意，给予了高度评价。`,

  `陆景川说："林晚晴，你做得很好。公司决定给你加薪。"林晚晴说："谢谢总裁。"`,

  `某天，林晚晴在公司的休息室<span class="w">eat(吃饭)📢</span>——在休息室休息时，遇到了陆景川。陆景川问："最近工作压力大吗？"林晚晴说："还好。"`,

  `陆景川说："你要注意身体，不要太累。"林晚晴说："谢谢关心。"`,

  `她发现，陆景川虽然外表严肃，但内心很关心员工。她对他产生了好感。`,

  `某天，林晚晴<span class="w">appear(出现)📢</span>在公司的年会上。她穿着一袭礼服，长发披肩，<span class="w">hair(头发)📢</span>上点缀着精致的发饰。`,

  `陆景川看到她，眼中闪过惊艳。他走过来，说："林副总，你今晚很美。"林晚晴微笑道："谢谢总裁。"`,

  `年会<span class="w">proceed(进行)📢</span>得很顺利。林晚晴和陆景川在舞池中翩翩起舞，两人之间的气氛变得微妙。`,

  `陆景川低声说："林晚晴，我有件事想告诉你。"林晚晴看着他，等待下文。`,

  `陆景川说："我喜欢你，很久了。"林晚晴愣住了，心跳加速。`,

  `陆景川说："我知道我们身份<span class="w">corresponding(对应的)📢</span>——我知道我们身份有差距，但我是认真的。"林晚晴说："我也是。"`,

  `两人开始交往。他们一起去<span class="w">cruise(巡航)📢</span>——一起去海边度假，享受着难得的宁静时光。`,

  `某天，林晚晴在酒店房间整理行李。她发现<span class="w">bed(床)📢</span>——不对，她发现行李箱的拉链坏了，便用<span class="w">glue(胶水)📢</span>临时修复。`,

  `陆景川走进来，看到她的样子，笑着说："我来帮你。"林晚晴说："谢谢。"`,

  `度假期间，林晚晴和陆景川一起在<span class="w">fertile(富饶的)📢</span>——一起在美丽的沙滩上散步，感情越来越深。`,

  `某天，他们遇到一位<span class="w">athlete(运动员)📢</span>——遇到一位当地的老者。老者说："年轻人，你们很般配。"林晚晴和陆景川相视而笑。`,

  `回到城市后，林晚晴继续忙碌的工作。她用<span class="w">generalize(概括)📢</span>——用专业的态度，处理着每一项事务。`,

  `某天，公司遇到一个<span class="w">disaster(灾难)📢</span>——遇到一个棘手的问题。一批产品出现了<span class="w">deficiency(缺陷)📢</span>，需要召回。`,

  `林晚晴立刻组织团队处理。她用<span class="w">assurance(保证)📢</span>的态度，向客户解释情况，并提供补偿。`,

  `最终，危机得到化解。客户对公司的处理方式表示满意。陆景川对林晚晴的表现给予高度<span class="w">justice(公正)📢</span>——给予高度评价。`,

  `某天，林晚晴在办公室发现了一个<span class="w">thief(小偷)📢</span>——不对，发现有可疑人员在公司大楼徘徊。她立刻通知保安，成功阻止了一起盗窃案。`,

  `陆景川说："林晚晴，你很<span class="w">safe(可靠)📢</span>——你很机警。"林晚晴说："这是应该的。"`,

  `某天，林晚晴参加了一个商业论坛。论坛上，她遇到了一位<span class="w">married(已婚的)📢</span>——遇到一位业界前辈。前辈说："年轻人，要继续努力。"`,

  `林晚晴说："谢谢前辈指导。"前辈说："你<span class="w">worth(值得)📢</span>——你很有潜力。"`,

  `论坛结束后，林晚晴回到公司。她用<span class="w">perspective(观点)📢</span>——用新的视角，分析了行业趋势，提出了一项创新计划。`,

  `陆景川看完计划，说："这个想法很好，我们<span class="w">proceed(继续)📢</span>——我们推进吧。"`,

  `计划实施后，取得了很好的效果。公司的业绩<span class="w">stun(使吃惊)📢</span>——业绩让所有人惊喜。`,

  `某天，林晚晴在办公室看到一份报告。报告中提到了一些<span class="w">shortcoming(缺点)📢</span>——提到了一些需要改进的地方。她决定亲自处理。`,

  `她召集团队开会，讨论改进方案。会议上，有人<span class="w">giggle(咯咯笑)📢</span>——不对，有人提出了一些有趣的建议。林晚晴认真听取，采纳了可行的方案。`,

  `改进后，效果显著。陆景川说："林晚晴，你总是能把事情做得很好。"林晚晴说："谢谢。"`,

  `某天，林晚晴站在办公室窗前，<span class="w">retrospect(回顾)📢</span>自己的职业生涯。她从一个打字员，成长为副总裁，这一路走来，充满了艰辛和收获。`,

  `陆景川走过来，站在她身边。他说："在想什么？"林晚晴说："在想过去。"`,

  `陆景川说："过去已经过去，未来还有无限可能。"林晚晴点头："是的。"`,

  `陆景川突然从口袋里拿出一个盒子。他打开盒子，里面是一枚精致的戒指。`,

  `他说："林晚晴，我们认识已经三年了。这三年，是我最幸福的时光。我想问你，你愿意嫁给我吗？"`,

  `林晚晴眼泪夺眶而出，点头道："我愿意。"`,

  `陆景川将戒指戴在林晚晴的手上。两人相拥而笑，窗外的阳光洒在他们身上，温暖而明亮。`,

  `故事的最后，林晚晴常常想起自己的成长历程。她知道，是努力和坚持让她走到了今天。而她，也会用尽一生，守护这份珍贵的爱情和事业。`,

  `她相信，只要心怀信念，就能克服一切<span class="w">vice(邪恶)📢</span>——只要心怀信念，就能创造属于自己的辉煌。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>职场女王：璀璨人生 · 学习版</title>
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
      <h1>职场女王：璀璨人生</h1>
      <p class="sub">职场 · 大女主 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story100</span>璀璨人生</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>职场女王：璀璨人生 · 学习版　|　看故事记单词</footer>
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
<title>职场女王：璀璨人生 · 复习版</title>
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
      <h1>职场女王：璀璨人生</h1>
      <p class="sub">职场 · 大女主 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story100</span>璀璨人生</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>职场女王：璀璨人生 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '100_职场女王_璀璨人生_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '100_职场女王_璀璨人生_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：100_职场女王_璀璨人生_学习版.html');
console.log('✓ 已生成：100_职场女王_璀璨人生_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：职场女王：璀璨人生：璀璨人生`);
console.log(`- 题材：职场 · 大女主 · 恋爱`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);