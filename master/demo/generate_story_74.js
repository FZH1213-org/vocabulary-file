const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_074_3651-3700.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `回到<span class="w">home(家)📢</span>的那一刻，苏婉清知道自己重生了。前世的她，被人陷害入狱，家破人亡。如今，她有机会改变一切，让那些人付出代价。`,

  `苏婉清站在<span class="w">town(城镇)📢</span>的街头，看着熟悉的景象。她记得，前世她曾在这里<span class="w">work(工作)📢</span>，过着平凡的生活。直到那场阴谋，改变了她的命运。`,

  `她决定先回到公司。前世，她是这家公司的翻译，负责<span class="w">translate(翻译)📢</span>重要文件。她记得，自己的<span class="w">pronunciation(发音)📢</span>和翻译能力得到了同事的认可。`,

  `苏婉清走进公司，看到熟悉的<span class="w">branch(分部)📢</span>办公室。她找到上级，<span class="w">assert(断言)📢</span>自己想要重新开始。上级看着她，有些惊讶，但<span class="w">soon(很快)📢</span>同意了她的请求。`,

  `回到岗位后，苏婉清开始梳理前世的记忆。她记得，那场阴谋的<span class="w">nucleus(核心)📢</span>是一份重要合同。有人篡改了合同内容，导致公司损失惨重，而她被诬陷为内鬼。`,

  `她决定找出真相。首先，她需要找到那份合同的<span class="w">outline(大纲)📢</span>，了解具体细节。她查阅公司档案，找到了相关文件。文件显示，合同涉及一个大项目的<span class="w">base(基础)📢</span>建设。`,

  `苏婉清仔细研究文件，发现了一些<span class="w">faulty(有错误的)📢</span>条款。她意识到，这些条款被人故意修改。她需要找出是谁做的。`,

  `她开始暗中调查。她发现，公司内部有一个<span class="w">sly(狡猾的)📢</span>的人，经常暗中搞小动作。这个人叫李明，曾是她的同事。前世，正是他陷害了她。`,

  `苏婉清决定用<span class="w">prudent(谨慎的)📢</span>的方式对付李明。她知道，直接揭穿他会让自己陷入危险。她需要找到确凿的证据。`,

  `某天，苏婉清在办公室加班。她看到李明鬼鬼祟祟地走进档案室。她悄悄跟上，看到他正在<span class="w">grope(摸索)📢</span>文件柜。`,

  `苏婉清拿出手机，拍下了他的行为。她知道，这些照片可以作为证据。但她还需要更多证据，才能让他无法辩驳。`,

  `她开始调查李明的背景。她发现，他曾因贪污被<span class="w">detain(拘留)📢</span>过。这个信息让她更加确定，李明就是幕后黑手。`,

  `苏婉清继续收集证据。她查阅公司的财务记录，发现李明经常<span class="w">subscribe(订阅)📢</span>一些昂贵的杂志，花费不菲。她怀疑，这些钱可能来自不正当渠道。`,

  `某天，苏婉清在茶水间遇到李明。李明露出<span class="w">neat(整洁的)📢</span>的微笑，问她:"苏小姐，最近工作如何?"苏婉清平静回应:"还不错。"`,

  `李明似乎想从她口中套话。苏婉清知道他的企图，决定反将一军。她故意提到公司的某个项目，观察李明的反应。李明眼中闪过一丝慌乱，但很快恢复平静。`,

  `苏婉清心中有了底。她决定加快行动，<span class="w">prevent(防止)📢</span>李明再次作案。她向公司提出建议，加强文件管理<span class="w">priority(优先权)📢</span>，防止被篡改。`,

  `公司采纳了她的建议，开始改革管理制度。李明看到变化，心中不安。他开始暗中<span class="w">diffuse(散布)📢</span>谣言，说苏婉清有问题。`,

  `苏婉清早有准备。她用<span class="w">fax(传真)📢</span>将收集的证据发送给公司高层。证据清晰<span class="w">intelligible(易懂的)📢</span>，让高层震惊。`,

  `高层立刻展开调查。他们发现，李明确实篡改了合同，还涉嫌贪污。他们决定<span class="w">detain(拘留)📢</span>李明，等待警方处理。`,

  `李明被带走时，怒视苏婉清。他喊道:"你<span class="w">used(习惯)📢</span>了什么手段?"苏婉清淡淡回应:"真相总会大白。"`,

  `案件处理后，苏婉清的名誉得到恢复。公司高层对她的表现十分满意，决定提升她为翻译部门的主管。`,

  `苏婉清接受任命，开始新的工作。她发现，公司还有一些<span class="w">drawback(缺点)📢</span>需要改进。她提出建议，将翻译部门与其他部门<span class="w">integrate(整合)📢</span>，提高效率。`,

  `高层同意了她的方案。苏婉清开始制定详细的计划，她希望公司能成为行业的<span class="w">majority(大多数)📢</span>领先者。`,

  `某天，苏婉清在街上散步。她看到一座古老的<span class="w">temple(寺庙)📢</span>，想起前世的事。她走进寺庙，点燃一炷香，感谢上天给她的重生机会。`,

  `她知道，自己的复仇只是开始。她还要帮助更多被冤枉的人，让正义得以伸张。`,

  `某天，苏婉清接到一个电话。电话那头是一位陌生人，自称是她的<span class="w">me(我)📢</span>——不对，是她的老朋友。朋友说:"听说你升职了，恭喜。"`,

  `苏婉清感激地回应:"谢谢。"朋友继续说:"如果你需要帮助，随时联系<span class="w">me(我)📢</span>。"苏婉清心中一暖。`,

  `某天，苏婉清在办公室处理文件。她看到一份关于<span class="w">soccer(足球)📢</span>比赛的合同，需要翻译。她用流利的英语完成任务，得到客户的好评。`,

  `客户称赞道:"苏小姐真是<span class="w">versatile(多才多艺的)📢</span>。"苏婉清谦虚回应:"这是我应该做的。"`,

  `某天，苏婉清在街上看到一个穿着<span class="w">glove(手套)📢</span>的老人在乞讨。她心中一阵酸楚，走上前给予帮助。老人感激地说:"谢谢你的善良。"`,

  `苏婉清微笑道:"愿您早日康复。"她知道，善良是人生最重要的<span class="w">morality(美德)📢</span>。`,

  `某天，苏婉清在办公室看到同事们在讨论一个<span class="w">adverb(副词)📢</span>的用法。她加入讨论，用专业的知识解决了问题。同事们对她佩服不已。`,

  `某天，苏婉清在公司食堂用餐。她看到餐桌上放着一<span class="w">jug(壶)📢</span>水，旁边有几包<span class="w">powder(粉末)📢</span>调料。她拿起调料，发现是过期的。`,

  `她立刻向食堂反映。食堂负责人感谢她的提醒，承诺会改进。苏婉清心中感到满足，她知道自己做到了<span class="w">tolerant(宽容)📢</span>且负责任。`,

  `某天，苏婉清在图书馆查阅资料。她在一本<span class="w">directory(名录)📢</span>中找到了前世的仇人名单。她决定，逐一清算。`,

  `她发现，其中一人已经<span class="w">resign(辞职)📢</span>，离开了行业。另一人则在其他公司任职。苏婉清决定，先对付还在行业里的人。`,

  `她开始调查这些人。她发现，他们大多有不正当行为，有的甚至涉嫌犯罪。她将证据收集起来，准备交给警方。`,

  `某天，苏婉清在街上看到一辆车冲向人群。她反应迅速，大喊:"快<span class="w">stop(停下)📢</span>!"人群及时躲避，避免了伤亡。`,

  `司机下车，解释刹车失灵。苏婉清检查车辆，发现刹车确实有问题。她提醒司机尽快维修，<span class="w">prevent(防止)📢</span>意外再次发生。`,

  `某天，苏婉清在公园散步。她看到园丁正在<span class="w">weed(除草)📢</span>，整理花圃。她走上前，与园丁交谈。园丁说:"这些杂草会影响花朵生长。"`,

  `苏婉清点点头，心中有所感悟。她觉得，人生也需要不断清除"杂草"，才能茁壮成长。`,

  `某天，苏婉清接到通知，说她曾帮助过的一位老人要见她。她赶去老人家中，发现老人是位退休法官。`,

  `法官说:"我听说过你的故事，你用<span class="w">consensus(共识)📢</span>的方式伸张正义，值得敬佩。"苏婉清谦虚回应:"我只是做了该做的事。"`,

  `法官继续说:"如果你愿意，我可以教你更多法律知识。"苏婉清感激地接受了。`,

  `<span class="w">thereafter(此后)📢</span>，苏婉清开始学习法律。她希望用法律武器，帮助更多被冤枉的人。`,

  `某天，苏婉清在法庭上旁听。她看到被告被指控<span class="w">kidnap(绑架)📢</span>，但证据不足。她主动提供线索，帮助法庭查明真相。`,

  `法官感谢她的协助。苏婉清说:"正义需要每个人的努力。"`,

  `某天，苏婉清在公司看到一份合同，涉及一项新技术。她用专业知识<span class="w">signify(表示)📢</span>合同存在问题。公司采纳她的建议，避免了损失。`,

  `某天，苏婉清在街上看到一场冲突。一名男子手持<span class="w">bullet(子弹)📢</span>——不对，是持枪威胁路人。她立刻报警，警察及时赶到，制服了男子。`,

  `警察称赞她的勇敢。苏婉清说:"我只是做了应该做的。"`,

  `某天，苏婉清在办公室收到一封信。信中写道:"愿我们能<span class="w">extend(延伸)📢</span>合作，共创未来。"她看着信，心中充满希望。`,

  `她知道，自己的努力没有白费。她决定继续前行，用智慧和勇气，创造更美好的未来。`,

  `某天，苏婉清在公司会议上发言。她用坚定的语气<span class="w">assert(主张)📢</span>，公司应该<span class="w">abolish(废除)📢</span>陈旧的管理模式，推行新方案。高层同意了她的建议。`,

  `某天，苏婉清在街上看到一群人在讨论如何<span class="w">overthrow(推翻)📢</span>某种不公。她加入讨论，提出建设性的意见。大家对她刮目相看。`,

  `故事的最后，苏婉清常常对年轻人说:"人生没有捷径，只有脚踏实地。遇到困难不要放弃，勇敢面对，才能<span class="w">reinforce(加强)📢</span>自己的内心。"`,

  `她相信，重生给了她第二次机会，她要珍惜这个机会，用行动证明——正义终将战胜邪恶。她望着窗外的天空，微笑着，那里有希望，有未来，还有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生复仇：正义之剑 · 学习版</title>
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
      <h1>重生复仇：正义之剑</h1>
      <p class="sub">重生 · 复仇 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story74</span>正义归来</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生复仇：正义之剑 · 学习版　|　看故事记单词</footer>
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
<title>重生复仇：正义之剑 · 复习版</title>
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
      <h1>重生复仇：正义之剑</h1>
      <p class="sub">重生 · 复仇 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story74</span>正义归来</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生复仇：正义之剑 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '74_重生复仇_正义之剑_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '74_重生复仇_正义之剑_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：74_重生复仇_正义之剑_学习版.html');
console.log('✓ 已生成：74_重生复仇_正义之剑_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生复仇：正义之剑：正义归来`);
console.log(`- 题材：重生 · 复仇 · 大女主`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);