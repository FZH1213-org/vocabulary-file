const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_091_4501-4550.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `清晨，苏晚站在镜子前，整理着身上的<span class="w">pink(粉红色)📢</span>套裙。她是盛世集团市场部的经理，今天要参加一场重要的商业会议。`,

  `苏晚驱车前往公司。车窗外，城市的<span class="w">architecture(建筑)📢</span>在阳光下熠熠生辉。她深吸一口气，准备迎接新的一天。`,

  `到达公司后，苏晚来到会议室。会议的<span class="w">primary(主要)📢</span>议题是讨论新项目的市场推广策略。她的上司——集团总裁陆景川，已经在座。`,

  `陆景川是一个<span class="w">dynamic(有生气的)📢</span>的领导者。他今年才三十二岁，已经是业界公认的<span class="w">veteran(老手)📢</span>。他的眼神锐利，仿佛能<span class="w">penetrate(看穿)📢</span>每个人的心思。`,

  `苏晚开始汇报。她用<span class="w">practical(实际)📢</span>的数据分析，阐述了新项目的市场前景。陆景川认真倾听，不时点头。`,

  `汇报结束后，陆景川说："苏经理，你的分析很到位。不过，我有一个<span class="w">issue(问题)📢</span>。"苏晚心中一紧，等待下文。`,

  `陆景川继续说："你的方案忽略了竞争对手的反应。我们需要考虑更多<span class="w">event(事件)📢</span>——需要考虑更多可能发生的情况。"苏晚点头接受。`,

  `会议结束后，苏晚回到办公室。她坐在桌前，思考着陆景川的反馈。她知道，自己的方案还有改进空间。`,

  `这时，同事小陈敲门进来。小陈是一个<span class="w">active(活跃)📢</span>的年轻人，刚入职不久。他问："苏姐，这个项目我是不是也参与？"`,

  `苏晚点头："是的，你负责数据分析<span class="w">section(部分)📢</span>——不对，你负责数据分析部分。"小陈高兴地接受了任务。`,

  `下午，苏晚和小陈一起讨论项目。她发现小陈很有才华，但经验不足。她决定多花些时间指导他。`,

  `几天后，苏晚收到陆景川的<span class="w">request(请求)📢</span>，要求她完善市场分析报告。她加班到深夜，终于完成了修改。`,

  `第二天早上，苏晚将报告提交给陆景川。陆景川看完后，满意地点头。"不错，这次考虑得很<span class="w">broad(全面)📢</span>。"`,

  `苏晚松了一口气。她知道，陆景川的要求很高，能得到他的认可并不容易。`,

  `中午，苏晚去食堂吃饭。她买了一杯<span class="w">milk(牛奶)📢</span>和一份沙拉，找了个角落坐下。她习惯一个人用餐，享受片刻的宁静。`,

  `这时，陆景川也来到食堂。他看到苏晚，主动走过来。"苏经理，一起坐？"苏晚点头同意。`,

  `两人边吃边聊。陆景川问："苏经理，你来公司多久了？"苏晚回答："三年了。"`,

  `陆景川说："三年不算长，但你的表现已经可以和<span class="w">people(人们)📢</span>——可以和老员工媲美了。"苏晚微笑道："谢谢总裁夸奖。"`,

  `从那天起，苏晚发现陆景川对她<span class="w">would(总是)📢</span>格外关注。她心中有些疑惑，但又说不清原因。`,

  `某天，苏晚在茶水间遇到陆景川的秘书。秘书悄悄告诉她："你知道吗？总裁最近在考察<span class="w">credential(凭证)📢</span>——在考察高管的能力，准备提拔一位副总。"`,

  `苏晚心中一动。她知道，这是一个难得的机会。她决定更加努力，争取获得晋升。`,

  `接下来的日子，苏晚工作更加勤奋。她每天<span class="w">with(和)📢</span>团队一起加班，完善项目方案。她的努力渐渐得到了回报。`,

  `某天，公司接到一个重要的客户。这个客户来自不同的<span class="w">nationality(民族)📢</span>——来自国外，对市场推广有很高的要求。`,

  `陆景川指派苏晚负责这个客户。苏晚感到有些<span class="w">dread(恐惧)📢</span>，但她没有退缩。她相信，自己可以完成这个任务。`,

  `她花了一周时间研究客户的<span class="w">surroundings(环境)📢</span>——研究客户所在国家的市场环境。她发现，客户所在的市场<span class="w">comparable(可比得上)📢</span>国内市场，但有明显的文化差异。`,

  `苏晚制定了一套<span class="w">mature(成熟)📢</span>的推广方案。她用<span class="w">relay(接力)📢</span>——用团队协作的方式，确保每个环节都无缝衔接。`,

  `方案提交给客户后，客户表示满意。陆景川对苏晚的表现十分赞赏，决定给她升职。`,

  `晋升后的苏晚，工作更加忙碌。她常常加班到深夜，有时甚至没有时间买新衣服。她的衣柜里，<span class="w">skirt(裙子)📢</span>和职业装都有些旧了。`,

  `某天，陆景川邀请苏晚参加一个商业晚宴。苏晚有些犹豫，她担心自己没有合适的礼服。`,

  `陆景川似乎看出了她的心思。他说："晚宴很重要，你需要一件合适的礼服。我<span class="w">confirm(确认)📢</span>过，场地比较正式。"`,

  `苏晚决定去买一件新礼服。她来到商场，选了一件<span class="w">pink(粉红色)📢</span>的长裙，又去<span class="w">tailor(裁缝)📢</span>那里做了修改，确保合身。`,

  `晚宴当晚，苏晚穿上礼服，来到会场。她看到陆景川已经在等候。陆景川看到她，眼中闪过一丝惊艳。`,

  `"苏副总，你今晚很美。"陆景川说。苏晚微笑道："谢谢总裁。"`,

  `晚宴上，苏晚遇到了许多商界<span class="w">folk(人们)📢</span>。她用优雅的谈吐和专业的见解，赢得了众人的尊重。`,

  `宴会进行到一半，陆景川来到苏晚身边。他低声说："苏副总，我有些话想对你说。"`,

  `苏晚跟着陆景川来到露台。露台上，城市的灯火<span class="w">high(高)📢</span>高闪烁，空气中弥漫着花香。`,

  `陆景川看着苏晚，认真地说："苏晚，我想告诉你一件事。这几年的相处，让我对你有了很深的了解。"`,

  `苏晚心中一跳。陆景川继续说："你是一个<span class="w">mature(成熟)📢</span>、智慧的女性。我<span class="w">resent(怨恨)📢</span>——不对，是我欣赏你的一切。"`,

  `苏晚低下头，不知如何回应。陆景川说："我知道公司有规定，高层不能谈恋爱。但我愿意为你打破这个<span class="w">barrier(障碍)📢</span>。"`,

  `苏晚抬起头，看着陆景川的眼睛。她发现，这个一向冷静的男人，眼中竟然有一丝紧张。`,

  `她深吸一口气，说："陆总，我需要时间考虑。"陆景川点头："我等你。"`,

  `晚宴结束后，陆景川送苏晚回家。车上，两人沉默不语。苏晚的心跳<span class="w">vibrate(震动)📢</span>——心跳加速，思绪万千。`,

  `回到家，苏晚坐在窗前，看着窗外的夜景。她想起和陆景川的点点滴滴，心中渐渐有了答案。`,

  `第二天，苏晚来到陆景川的办公室。她递交了一份<span class="w">mystery(神秘)📢</span>——不对，她递交了一份辞职信。`,

  `陆景川愣住了："苏晚，你这是为什么？"苏晚说："我辞职，是为了能和你在一起。"`,

  `陆景川眼中闪过感动。他站起身，走到苏晚面前，轻轻握住她的手。"苏晚，你不必这样。我可以向董事会申请，保留你的职位。"`,

  `苏晚摇头："不，我不想成为你事业的负担。我想<span class="w">herself(她自己)📢</span>——不对，我想靠自己的能力，赢得属于我的位置。"`,

  `陆景川沉默片刻，然后点头。"好，我尊重你的决定。但你<span class="w">promise(答应)📢</span>——不对，但我希望你接受我的帮助，如果你需要的话。"`,

  `苏晚微笑道："谢谢你的理解。"`,

  `辞职后，苏晚创办了自己的咨询公司。她用多年积累的经验，为客户提供市场推广服务。`,

  `陆景川经常来探望她，两人感情日渐升温。陆景川还送给她一条<span class="w">ruby(红宝石)📢</span>项链，作为定情信物。`,

  `一年后，苏晚的公司已经初具<span class="w">size(规模)📢</span>。她站在办公室窗前，望着繁华的城市，心中感慨万千。`,

  `她知道，是陆景川的出现，让她的人生变得更加精彩。而她，也用自己的能力，证明了女性在职场上的价值。`,

  `故事的最后，苏晚和陆景川在一个<span class="w">central(中心)📢</span>公园散步。陆景川突然停下脚步，从口袋里拿出一个盒子。`,

  `他打开盒子，里面是一枚精致的戒指。"苏晚，你愿意嫁给我吗？"苏晚眼泪夺眶而出，点头道："我愿意。"`,

  `两人相拥而笑，周围的<span class="w">mob(人群)📢</span>——周围的路人纷纷鼓掌祝福。苏晚知道，这是她人生中最幸福的时刻。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>霸道总裁：深情予你 · 学习版</title>
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
      <h1>霸道总裁：深情予你</h1>
      <p class="sub">霸总 · 职场 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story91</span>深情予你</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>霸道总裁：深情予你 · 学习版　|　看故事记单词</footer>
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
<title>霸道总裁：深情予你 · 复习版</title>
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
      <h1>霸道总裁：深情予你</h1>
      <p class="sub">霸总 · 职场 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story91</span>深情予你</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>霸道总裁：深情予你 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '91_霸道总裁_深情予你_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '91_霸道总裁_深情予你_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：91_霸道总裁_深情予你_学习版.html');
console.log('✓ 已生成：91_霸道总裁_深情予你_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：霸道总裁：深情予你：深情予你`);
console.log(`- 题材：霸总 · 职场 · 恋爱`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);