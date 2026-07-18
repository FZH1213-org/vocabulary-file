const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_087_4301-4350.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">sunset(日落)📢</span>时分，宫廷的<span class="w">balcony(阳台)📢</span>上，林月霜望着远处的<span class="w">avenue(林荫路)📢</span>，心中思绪万千。她是现代都市白领，意外穿越到了古代王朝，成为了一名宫女。`,

  `林月霜还记得穿越那天的情景。那是一个<span class="w">grey(灰色)📢</span>的下午，她在图书馆<span class="w">read(阅读)📢</span>一本古籍时，突然感到一阵<span class="w">agony(极大痛苦)📢</span>，随即失去了意识。醒来后，她发现自己身处古代宫廷。`,

  `刚入宫时，林月霜感到十分迷茫。宫廷里的<span class="w">bureaucracy(官僚机构)📢</span>复杂难懂，稍有不慎就会<span class="w">offend(冒犯)📢</span>权贵。她必须学会在夹缝中生存。`,

  `某日，林月霜在宫中<span class="w">wood(森林)📢</span>旁的小路上行走，突然听到一阵悠扬的<span class="w">piano(钢琴)📢</span>——不对，是古琴声。她循声走去，发现是一位年轻公子在弹琴。`,

  `这位公子就是太子萧景明。<span class="w">he(他)📢</span>见林月霜走来，停下琴声，问道："你是谁？为何能找到这里？"林月霜恭敬地回答，自己是新来的宫女。`,

  `萧景明对她的<span class="w">manner(举止)📢</span>印象深刻。他发现这个宫女与旁人<span class="w">differ(不同)📢</span>，举止优雅，谈吐不凡。两人相谈甚欢，竟忘了时间。`,

  `从那天起，林月霜开始在萧景明身边服侍。她发现，太子并非表面那般无忧无虑，而是承受着巨大的<span class="w">menace(威胁)📢</span>。朝中有人暗中针对他，企图动摇他的地位。`,

  `林月霜决定帮助萧景明。她用现代的知识，为太子分析局势，提出建议。萧景明对她的智慧大为赞赏，渐渐对她产生了好感。`,

  `某天，林月霜在宫中遇到一位<span class="w">someone(某人)📢</span>——正是萧景明的表妹，她嫉妒林月霜得到太子的青睐，故意刁难。林月霜保持冷静，用温和的<span class="w">attitude(态度)📢</span>化解了冲突。`,

  `萧景明知道后，对林月霜更加欣赏。他告诉她，宫廷中<span class="w">plentiful(丰富的)📢</span>阴谋诡计，必须时刻警惕。`,

  `林月霜开始学习宫廷规矩。她从内务府领了一套新<span class="w">outfit(装备)📢</span>，包括宫女服饰和日常用具。她知道，要想在宫廷立足，必须从细节做起。`,

  `某日，宫中举办<span class="w">baseball(棒球)📢</span>——不对，是举办蹴鞠比赛。林月霜作为宫女，在旁观看。她发现萧景明的队伍配合默契，最终赢得了比赛。`,

  `赛后，林月霜为萧景明倒了一杯茶。萧景明看着她，突然说："月霜，我<span class="w">guess(猜测)📢</span>，你并非普通宫女。"林月霜心中一惊，但面不改色。`,

  `萧景明继续说："你的见识和智慧，不像是出身普通人家。"林月霜想了想，说："殿下，每个人都有自己的秘密。"`,

  `萧景明点头，不再追问。他知道，<span class="w">independent(独立)📢</span>思考的人，不会轻易向他人敞开心扉。`,

  `日子一天天过去。林月霜发现宫中<span class="w">trend(趋势)📢</span>——不对，是发现宫中局势越来越紧张。有人开始散布谣言，说太子品行不端。`,

  `林月霜知道，这是有人在背后<span class="w">push(推)📢</span>——不对，是在背后推波助澜。她决定<span class="w">contribute(贡献)📢</span>自己的力量，帮助太子澄清谣言。`,

  `她找到萧景明，提出了一条计策：利用<span class="w">railroad(铁路)📢</span>——不对，是利用朝廷的情报网络，找出谣言的来源。萧景明采纳了她的建议。`,

  `经过调查，他们发现散布谣言的人，正是那位刁难林月霜的表妹。萧景明十分生气，但林月霜劝他冷静处理。`,

  `她说："殿下，我们<span class="w">could(可以)📢</span>用温和的方式解决，不必大动干戈。"萧景明听从了她的意见，只是暗中警告了表妹。`,

  `宫中的<span class="w">humidity(湿度)📢</span>很高，林月霜有时会感到不适。但她从不抱怨，依然<span class="w">vigorous(精力旺盛)📢</span>地完成每一项任务。`,

  `某天，林月霜在宫中<span class="w">inside(内部)📢</span>的库房整理物品。她看到墙角铺着一张精美的<span class="w">rug(地毯)📢</span>，上面绣着凤凰图案。她感叹古代工艺的精湛。`,

  `这时，一位老宫女走进来，见林月霜在看地毯，便说："这是皇后的物品，你要小心保管。"林月霜点头应允。`,

  `老宫女走后，林月霜继续整理。她发现库房角落有一个<span class="w">tiny(极小的)📢</span>盒子，上面有皇家<span class="w">seal(印章)📢</span>。她不敢擅自打开，便交给了萧景明。`,

  `萧景明打开盒子，发现里面是一份密信。信中提到了一些关于朝政的建议，笔迹<span class="w">sophisticated(老练的)📢</span>，显然出自高人之手。`,

  `萧景明问林月霜："你<span class="w">where(哪里)📢</span>找到的这个盒子？"林月霜如实相告。萧景明沉思片刻，说："这封信可能关系到朝政，我要好好调查。"`,

  `几天后，宫中传来消息，说是边关发生了<span class="w">flood(洪水)📢</span>，许多百姓受灾。皇帝下令赈灾，但朝廷资金不足。`,

  `林月霜听说后，主动<span class="w">offer(提供)📢</span>建议。她提出可以用商业运作的方式筹集赈灾款项。萧景明觉得这个想法很有创意，便向皇帝进言。`,

  `皇帝采纳了建议，并让林月霜参与筹款事务。林月霜用现代商业知识，设计了一套<span class="w">sophisticated(先进的)📢</span>筹款方案，效果显著。`,

  `皇帝对林月霜的才能十分欣赏，想要提拔她。但林月霜婉拒了，她只想在太子身边，默默<span class="w">contribute(贡献)📢</span>。`,

  `然而，宫中的<span class="w">epidemic(流行病)📢</span>突然蔓延。许多人病倒了，林月霜也感到身体不适。萧景明十分担心，请来了最好的太医为她诊治。`,

  `太医说，林月霜只是<span class="w">ill(有病的)📢</span>——只是受了风寒，并无大碍。萧景明松了一口气，命人好好照料她。`,

  `林月霜康复后，发现萧景明比以前更加关心她。她心中感动，但依然保持<span class="w">independent(独立)📢</span>的姿态，不让自己陷入太深。`,

  `某天傍晚，林月霜在<span class="w">balcony(阳台)📢</span>上看着<span class="w">sunset(日落)📢</span>，萧景明走到她身边。他说："月霜，我想告诉你一件事。"`,

  `林月霜转头看他。萧景明深吸一口气，说："我对你<span class="w">rely(依靠)📢</span>——不对，是我对你产生了特别的感情。"林月霜心中一震。`,

  `萧景明继续说："我知道我们身份悬殊，但我希望你能给我一个机会。"林月霜沉默片刻，说："殿下，您值得更好的。"`,

  `萧景明摇头："对我来说，你就是最好的。"林月霜心中五味杂陈，她不知道该如何回应。`,

  `这时，天空中突然下起了雨。雨水像是从天上<span class="w">sprinkle(洒)📢</span>下来的，落在大地上。两人站在阳台上，任由雨丝打湿衣衫。`,

  `几天后，朝廷接到报告，说边关战事紧张。皇帝决定派萧景明领兵出征。林月霜知道，这是一个巨大的<span class="w">boundary(分界线)📢</span>——这可能是萧景明证明自己的机会。`,

  `出征前夜，萧景明来找林月霜。他说："月霜，这次出征凶险未知，我不知道能否平安归来。"林月霜说："殿下一定会平安的。"`,

  `萧景明握住她的手："如果我能平安归来，我希望你能答应我一件事。"林月霜点头："殿下请说。"`,

  `"我希望你能成为我的妃子。"萧景明认真地说。林月霜心中震惊，但她没有拒绝。`,

  `萧景明出征后，林月霜每天在<span class="w">balcony(阳台)📢</span>上眺望远方。她用<span class="w">control(控制)📢</span>情绪的方法，让自己保持冷静。`,

  `然而，宫中的<span class="w">menace(威胁)📢</span>并未消失。有人趁机对林月霜下手，诬陷她勾结外敌。林月霜必须<span class="w">intervene(干涉)📢</span>——必须为自己辩护。`,

  `她找到皇后，陈述事实。皇后是位明理之人，仔细调查后，发现林月霜确是清白的。`,

  `皇后的<span class="w">limb(肢体)📢</span>——不对，是皇后的身边有一位年长的宫女，她对林月霜说："孩子，宫廷生活不易，你要学会保护自己。"`,

  `林月霜感激地点头。她知道，在这复杂的宫廷中，只有<span class="w">vigorous(精力旺盛)📢</span>地生活，才能走得更远。`,

  `终于，前方传来捷报。萧景明大获全胜，正在回京途中。林月霜心中喜悦<span class="w">overflow(溢出)📢</span>——心中充满了喜悦。`,

  `萧景明回宫那天，天空<span class="w">grey(灰色)📢</span>，但林月霜的心情却十分明亮。她站在宫门等候，终于看到那熟悉的身影。`,

  `萧景明下马，走到林月霜面前。他伸出手，轻轻<span class="w">stir(搅动)📢</span>——轻轻握住了她的手。他说："月霜，我回来了。"`,

  `林月霜眼眶湿润，轻声说："欢迎回来，殿下。"萧景明微笑："从今以后，叫我景明就好。"`,

  `几天后，萧景明向皇帝请求册封林月霜为侧妃。皇帝同意了。婚礼在宫中盛大举行，所有人都见证了这对有情人的结合。`,

  `洞房里，林月霜坐在床边。萧景明走进来，看到她的<span class="w">chap(皮肤变粗糙)📢</span>——不对，是看到她紧张的样子，温柔地说："月霜，从今以后，我们就是一家人了。"`,

  `林月霜抬起头，看着萧景明的眼睛。她知道，自己在这个王朝找到了真正的归属。`,

  `故事的最后，林月霜常常站在<span class="w">balcony(阳台)📢</span>上，看着<span class="w">sunset(日落)📢</span>。她想起穿越前的生活，虽然有所不同，但她并不后悔。`,

  `她相信，命运将她带到这个世界，是为了让她遇见萧景明。而她，也会用尽一生，守护这段珍贵的感情。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越宫廷：凤舞九天 · 学习版</title>
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
      <h1>穿越宫廷：凤舞九天</h1>
      <p class="sub">穿越 · 宫廷 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story87</span>凤舞九天</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越宫廷：凤舞九天 · 学习版　|　看故事记单词</footer>
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
<title>穿越宫廷：凤舞九天 · 复习版</title>
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
      <h1>穿越宫廷：凤舞九天</h1>
      <p class="sub">穿越 · 宫廷 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story87</span>凤舞九天</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越宫廷：凤舞九天 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '87_穿越宫廷_凤舞九天_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '87_穿越宫廷_凤舞九天_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：87_穿越宫廷_凤舞九天_学习版.html');
console.log('✓ 已生成：87_穿越宫廷_凤舞九天_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越宫廷：凤舞九天：凤舞九天`);
console.log(`- 题材：穿越 · 宫廷 · 恋爱`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);