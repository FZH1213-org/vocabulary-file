const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_077_3801-3850.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">sunrise(日出)📢</span>时分，苏婉清睁开眼，发现自己身处一座<span class="w">enormous(巨大的)📢</span>宫殿。她本是现代的<span class="w">journalist(记者)📢</span>，一场意外让她穿越到了古代，成为了丞相府的千金。`,

  `苏婉清站在窗前，望着<span class="w">marble(大理石)📢</span>铺就的庭院。她知道，自己必须适应这个陌生的世界。前世的她曾报道过许多<span class="w">news(新闻)📢</span>，但从未想过会成为故事的主角。`,

  `某天，苏婉清在书房翻阅<span class="w">periodical(期刊)📢</span>——古书典籍。她发现一本记载宫廷秘闻的书籍，其中<span class="w">excerpt(摘录)📢</span>着许多权谋故事。她意识到，这个时代的生存法则与现代截然不同。`,

  `正当她专注阅读时，一位<span class="w">kind(仁慈)📢</span>的老妇人走进来。老妇人是她的贴身嬷嬷，<span class="w">describe(描述)📢</span>着府中的规矩。苏婉清认真聆听，心中暗自盘算如何在这个时代立足。`,

  `某日，苏婉清收到一封<span class="w">mail(邮件)📢</span>——家书。信中说，皇帝将她许配给了<span class="w">sovereign(君主)📢</span>——太子。她心中一惊，知道这意味着什么。她必须做好准备，面对即将到来的宫廷生活。`,

  `她开始研究宫廷的<span class="w">format(格式)📢</span>——规矩礼仪。她用现代的思维方式，<span class="w">tackle(处理)📢</span>这些复杂的礼仪。她发现，许多规矩虽然繁琐，但有规律可循。`,

  `某天，苏婉清在花园散步。她看到花苞正在<span class="w">bud(发芽)📢</span>，预示着春天的到来。她想到，自己的人生也如这花苞，即将绽放。`,

  `正当她沉思时，一位<span class="w">giant(巨人)📢</span>——身材高大的男子走近。他留着浓密的<span class="w">beard(胡须)📢</span>，看起来威严不凡。苏婉清认出，他就是太子萧云轩。`,

  `萧云轩看着她，眼中闪过一丝好奇。他问:"你就是苏婉清?"苏婉清<span class="w">separate(分开)📢</span>——冷静地回应:"正是。"两人开始交谈，萧云轩对她的见识感到惊讶。`,

  `萧云轩说:"你的谈吐与众不同。"苏婉清微笑道:"妾身读过<span class="w">those(那些)📢</span>书籍，略懂一二。"萧云轩点头，心中对她产生好感。`,

  `某天，苏婉清在府中听闻<span class="w">war(战争)📢</span>的消息。边境发生冲突，朝廷正在商议对策。她用现代的知识，分析局势，提出建议。丞相听后，大为赞赏。`,

  `丞相说:"你的见解很有<span class="w">fortune(财富)📢</span>——价值。"苏婉清谦虚回应:"父亲过奖了。"她知道，自己的知识在这个时代是<span class="w">beneficial(有益的)📢</span>优势。`,

  `某天，苏婉清在府中遇到一位<span class="w">consultant(顾问)📢</span>——谋士。谋士告诉她，宫廷中暗流涌动，需要小心应对。苏婉清感激他的提醒，决定更加谨慎。`,

  `她开始暗中收集情报，像现代的<span class="w">cop(警察)📢</span>一样，观察着周围的一切。她发现，府中有几个可疑的人物，似乎在<span class="w">manipulate(操控)📢</span>着什么。`,

  `苏婉清决定深入调查。她发现，有人试图在宫廷中制造<span class="w">explosive(爆炸性)📢</span>事件，陷害太子。她立刻将此事告知萧云轩。`,

  `萧云轩听后，眉头紧锁。他说:"这件事<span class="w">occur(发生)📢</span>得蹊跷，需要谨慎处理。"苏婉清点头，提出自己的计划。`,

  `两人开始合作，<span class="w">solve(解决)📢</span>这个危机。苏婉清用现代的调查方法，萧云轩用权力和资源，两人配合默契。`,

  `调查过程中，苏婉清发现一个<span class="w">slippery(滑头)📢</span>——狡猾的人物。此人暗中<span class="w">hound(追逐)📢</span>权力，不惜一切代价。苏婉清决定设下陷阱，引他现身。`,

  `某夜，苏婉清假装<span class="w">asleep(睡着)📢</span>。果然，那个人潜入她的房间，试图偷取机密文件。苏婉清立刻行动，将他<span class="w">corner(逼入困境)📢</span>。`,

  `萧云轩及时赶到，将人拿下。经过审问，得知此人受后宫妃嫔指使，意图陷害太子。萧云轩对苏婉清的表现印象深刻。`,

  `他说:"你的机智<span class="w">enable(使能够)📢</span>我们化解危机。"苏婉清回应:"殿下过奖，这是婉清应该做的。"`,

  `从此，苏婉清在萧云轩心中的地位提升。他开始将她视为知己，而非普通的妻子。`,

  `某天，苏婉清在府中突然感到身体不适。她担心是<span class="w">flu(流感)📢</span>，请来大夫诊治。大夫说只是劳累过度，需要休息。`,

  `萧云轩得知后，亲自前来探望。他带来一盒珍贵的<span class="w">cheese(奶酪)📢</span>，说:"听说你喜欢这个。"苏婉清心中一暖，感激他的体贴。`,

  `某天，苏婉清在花园看到一只<span class="w">toy(玩具)📢</span>——精致的香囊。她拿起香囊，闻到淡淡的香味。她想到，这个时代的人们也会用<span class="w">limited(有限的)📢</span>方式寻找快乐。`,

  `某日，苏婉清听到远处传来<span class="w">thunder(雷声)📢</span>。她走到窗前，看着雨云密布的天空。她知道，宫廷的风暴即将来临。`,

  `果然，几天后，皇帝驾崩。举国哀悼，举行隆重的<span class="w">funeral(葬礼)📢</span>。苏婉清参加葬礼，感受到权力的更迭带来的变化。`,

  `太子萧云轩登基为帝，苏婉清成为皇后。她知道，自己肩上的责任更重了。`,

  `某天，苏婉清在宫中处理政务。她用现代的管理理念，<span class="w">quantify(量化)📢</span>各项工作，提高效率。萧云轩对她的能力赞赏不已。`,

  `他说:"你的智慧是朕的<span class="w">fortune(财富)📢</span>。"苏婉清微笑回应:"陛下过奖，臣妾只是尽本分。"`,

  `某天，苏婉清在宫中接待<span class="w">fifty(五十)📢</span>位外国使节。她用流利的语言和优雅的礼仪，赢得使节们的尊敬。使节们称赞她是"<span class="w">healthy(健康)📢</span>而智慧的皇后"。`,

  `某天，苏婉清在御花园散步。她看到一群宫女在玩耍，脸上洋溢着<span class="w">spontaneous(自发)📢</span>的笑容。她心中感慨，无论哪个时代，人们都追求幸福。`,

  `某天，苏婉清接到消息，边境再次发生冲突。她立刻召集群臣，商议对策。有人主张出兵，有人主张和谈。苏婉清用现代的冲突解决理论，提出折中方案。`,

  `萧云轩听后，同意她的建议。他说:"皇后的见识让朕佩服。"苏婉清回应:"陛下英明，臣妾只是提供参考。"`,

  `方案实施后，效果显著。边境冲突得到缓解，两国关系改善。萧云轩对苏婉清更加信任。`,

  `某天，苏婉清在宫中听到一个消息。有人说她是"<span class="w">nobody(小人物)📢</span>"，不配为后。苏婉清不以为意，她知道，实力才是最好的证明。`,

  `她继续努力，用行动证明自己的价值。她参与政务，处理各种难题，赢得朝臣的认可。`,

  `某天，苏婉清在书房写日记。她记录着自己的经历，希望有朝一日能将这些故事带回现代。她知道，这一切都是<span class="w">fantasy(幻想)📢</span>，但也是真实的经历。`,

  `某天，苏婉清在宫中看到一只风筝在空中飞翔，如同在<span class="w">orbit(轨道)📢</span>中运行。她想到，自己的人生也如风筝，虽在天上，但线在手中。`,

  `某天，苏婉清在宫中接待一位<span class="w">journalist(记者)📢</span>——史官。史官记录着她的事迹，希望流传后世。苏婉清感慨，历史会如何评价她？`,

  `某天，苏婉清在御花园看到一只<span class="w">aeroplane(飞机)📢</span>——不对，是看到一只飞鸟。她想起现代的生活，心中有些怀念。但她知道，既然来到这里，就要好好生活。`,

  `某天，苏婉清在宫中举办宴会。她用<span class="w">beneficial(有益)📢</span>的方式，让宾客们尽兴而归。萧云轩看着她，眼中满是欣赏。`,

  `某天，苏婉清在处理政务时，突然想起前世的事。她意识到，自己已经不再是那个单纯的记者，而是这个时代的参与者。`,

  `她决定将自己的经历写成一本书，<span class="w">remind(提醒)📢</span>后人珍惜当下。她用<span class="w">kind(仁慈)📢</span>的心，记录着这个时代的故事。`,

  `某天，苏婉清在宫中听到一个消息。有人说她用<span class="w">ignorance(无知)📢</span>的方式处理政务，不懂得规矩。苏婉清不以为意，她知道，改变需要时间。`,

  `她继续用现代的知识，帮助萧云轩治理国家。她的建议总是能<span class="w">solve(解决)📢</span>问题，赢得信任。`,

  `某天，苏婉清在御花园散步。她看到一朵花开得正艳，想到自己的命运也是如此绚烂。她知道，这一切都是上天的恩赐。`,

  `某天，苏婉清在宫中接待一位<span class="w">consultant(顾问)📢</span>。顾问说:"皇后娘娘的智慧如同<span class="w">giant(巨人)📢</span>般卓越。"苏婉清微笑回应:"过奖了。"`,

  `某天，苏婉清在宫中看到一群孩子在玩耍。他们手中的<span class="w">toy(玩具)📢</span>让她想起自己的童年。她感慨，无论哪个时代，童年的快乐都是相同的。`,

  `某天，苏婉清在处理政务时，感到一阵疲惫。她意识到，权力虽好，但也伴随着<span class="w">loss(损失)📢</span>——失去自由。她决定找到平衡。`,

  `某天，苏婉清在御花园<span class="w">kneel(跪下)📢</span>——不对，是在御花园散步，看到萧云轩走来。萧云轩握住她的手，说:"无论发生什么，朕都会保护你。"`,

  `苏婉清心中一暖，轻声道:"臣妾知道。"两人相视而笑，空气中弥漫着甜蜜。`,

  `某天，苏婉清在宫中举办庆典。她用<span class="w">spontaneous(自发)📢</span>的创意，让庆典充满欢乐。宾客们纷纷称赞，这是一场难忘的盛会。`,

  `故事的最后，苏婉清常常对后辈说:"人生如同一场穿越，无论身在何处，都要用心生活。不要被<span class="w">limited(限制)📢</span>的思维束缚，勇敢追寻自己的价值。"`,

  `她相信，前世的经验让她学会了适应，穿越的机会让她找到了真正的自己。她望着窗外的天空，微笑着，那里有希望，有爱情，还有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越千年：凤临天下 · 学习版</title>
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
      <h1>穿越千年：凤临天下</h1>
      <p class="sub">穿越 · 古代言情 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story77</span>凤临天下</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越千年：凤临天下 · 学习版　|　看故事记单词</footer>
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
<title>穿越千年：凤临天下 · 复习版</title>
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
      <h1>穿越千年：凤临天下</h1>
      <p class="sub">穿越 · 古代言情 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story77</span>凤临天下</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越千年：凤临天下 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '77_穿越千年_凤临天下_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '77_穿越千年_凤临天下_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：77_穿越千年_凤临天下_学习版.html');
console.log('✓ 已生成：77_穿越千年_凤临天下_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越千年：凤临天下：凤临天下`);
console.log(`- 题材：穿越 · 古代言情 · 大女主`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);