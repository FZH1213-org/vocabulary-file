const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_015_701-750.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `林婉清睁开眼，发现自己躺在一张雕花木床上。<span class="w">room(房间)📢</span>里陈设古朴，透过<span class="w">shutter(百叶窗)📢</span>射进来的光线，她看清了四周。这是……古代？她的新<span class="w">life(人生)📢</span>从此开始。`,

  `她记得自己明明是在现代都市，作为企业高管，正在参加重要会议。怎么会突然来到这里？林婉清试图理清思绪，脑海中却浮现出另一个身份——林家大小姐，今年刚满十八岁，还是个<span class="w">virgin(处女)📢</span>。`,

  `"小姐，您醒了！"一个<span class="w">lad(男孩)📢</span>端着水盆进来。林婉清认出他是家中的小厮阿福。她突然意识到，自己竟然重生了！回到了三百年前的祖先身上，跨越了一个<span class="w">century(世纪)📢</span>。`,

  `更让她震惊的是，记忆中，这位林家大小姐三天后就要被嫁给一个年过半百的<span class="w">bachelor(单身汉)📢</span>——城中的富商王老爷。这是家族为了还债而做出的决定，也是对她命运的<span class="w">breach(违背)📢</span>。`,

  `林婉清深吸一口气。既然重生了，就绝不能重蹈覆辙。她要改变命运，让林家渡过难关，自己也要活出精彩的人生。她有着坚定的<span class="w">belief(信念)📢</span>。`,

  `她起身走到窗前，望着远处的<span class="w">meadow(草地)📢</span>，心中渐渐有了计划。作为现代高管，她有足够的商业头脑和策略，可以帮助家族走出困境。她<span class="w">prefer(更喜欢)📢</span>主动出击而非被动接受。`,

  `林婉清找到父亲林正，林家在城中经营着一家丝绸庄。林正见女儿突然来访，有些惊讶："婉清，有什么事吗？"<span class="w">introduce(介绍)📢</span>自己的计划之前，她需要先了解情况。`,

  `"父亲，女儿听说王家要<span class="w">buy(买)📢</span>下我们的丝绸庄，用来抵债。"林婉清开门见山。林正叹气："没办法，家中确实没有其他办法了。"债主们像<span class="w">invasion(入侵)📢</span>般接踵而至。`,

  `林婉清跪下："父亲，请给女儿三天时间。我有办法让丝绸庄重新盈利，还清债务。"林正皱眉："你一个女孩子，懂什么经营？"林婉清回答："我虽是女儿身，却有自己的<span class="w">principle(原则)📢</span>。"`,

  `"父亲，女儿读过不少书，对商业也有些了解。请父亲相信女儿。"林婉清眼神坚定。林正沉默良久，终于点头："好，就三天。"父亲在<span class="w">board(董事会)📢</span>上宣布了这个决定。`,

  `林婉清开始行动。她首先了解了丝绸庄的经营状况，发现最大的问题是产品质量参差不齐，且缺乏创新。她<span class="w">decide(决定)📢</span>从这两个方面入手，绝不<span class="w">skip(跳过)📢</span>任何细节。`,

  `她召集了丝绸庄的所有工匠，站在<span class="w">audience(听众)📢</span>面前，林婉清说："各位师傅，我有一些想法，希望大家支持。我们必须保持<span class="w">unity(团结)📢</span>。"`,

  `林婉清介绍了她的计划：改进织造工艺，开发新花样，提升产品质量。同时，她提出要建立严格的质检制度，确保每一匹丝绸都达到标准，不合格的产品立即<span class="w">pad(填充)📢</span>处理。`,

  `有工匠质疑："大小姐，这些都需要时间和成本，三天能行吗？"林婉清微笑："三天只是开始，只要有了好的开头，后续自然顺利。"她的回答既<span class="w">theoretical(理论性)📢</span>又实用。`,

  `她日夜操劳，监督生产，调整工艺。工匠们被她的热情感染，也开始全力以赴。三天后，第一批改良丝绸面世。产品在<span class="w">proportion(比例)📢</span>上都达到了优等标准。`,

  `林婉清带着丝绸样品去拜访城中的商户。她利用现代营销理念，向商户展示产品优势，并承诺长期合作优惠。不少商户被她说动，签订了<span class="w">agreement(协议)📢</span>。`,

  `消息传开，林家丝绸庄的生意开始好转。林正看到账本，惊讶得合不拢嘴："婉清，你……你真的做到了！"王老爷见状，气得摔碎了手中的<span class="w">horn(号角)📢</span>收藏品。`,

  `林婉清却没停下脚步。她知道，要让林家彻底摆脱困境，还需要更多努力。她开始研究市场，发现城中缺少一家高端定制店，这是个<span class="w">favorable(有利的)📢</span>机会。`,

  `她向林正提议开设分店，专门针对富商和官宦人家，提供定制服务。林正犹豫："这需要不少本钱，我们哪来的钱？"王老爷却想趁机<span class="w">interfere(干涉)📢</span>他们的计划。`,

  `林婉清已经有了计划："父亲，我可以去找<span class="w">neighbor(邻居)📢</span>们投资，以合伙的方式共同经营。"林正看着女儿，眼中满是惊讶和欣慰。`,

  `林婉清拜访了几位富裕的邻居，提出合作意向。她展示了详细的计划和收益预测，最终说服了两位邻居注资。合作协议上盖有官府的<span class="w">certificate(证书)📢</span>。`,

  `新店开张，林婉清亲自担任<span class="w">speaker(发言人)📢</span>，向客人介绍定制服务。她利用现代营销技巧，制造稀缺感，吸引了不少高端客户。人们<span class="w">often(经常)📢</span>来店里询问新品。`,

  `生意蒸蒸日上，林家不仅还清了债务，还成了城中首屈一指的丝绸商。王老爷见状，主动取消了婚约，还派人来求和。他不想在生意上继续<span class="w">lag(落后)📢</span>于人。`,

  `林婉清对王老爷的使者说："王老爷的好意心领了，但小女子已经有自己的人生规划，不想依靠他人。"使者愣住，没想到会被拒绝。这是林婉清获得的第一次<span class="w">recovery(恢复)📢</span>。`,

  `王老爷得知后，勃然大怒。他散布谣言，说林家丝绸庄的产品有质量问题，还联合其他商户打压林家。林婉清遭遇了重生以来的第一次<span class="w">setback(挫折)📢</span>。`,

  `她没有慌张，而是冷静分析局势。她知道，王老爷的行为已经违反了商业规则，也损害了整个行业的利益。她决定<span class="w">confront(面对)📢</span>这场危机。`,

  `林婉清联合其他诚信商户，向官府举报王老爷的不正当竞争行为。官府调查后，确认了王老爷的违法行为，勒令其停止相关行为。王老爷家族不得不<span class="w">emigrate(移民)📢</span>到他乡。`,

  `林家丝绸庄的名誉得以恢复，生意反而更好了。林正看着女儿，感慨道："你比我强多了，林家有你，真是幸事。"林婉清微笑道："这是我们应该<span class="w">get(得到)📢</span>的。"`,

  `林婉清心中却也明白，在这个时代，女性的地位依然有限。她要想真正掌控自己的命运，还需要更多的努力和智慧。她常常思考这个问题，连<span class="w">pronoun(代词)📢</span>的使用都体现着男女地位差异。`,

  `城中举办丝绸展览，各路商人云集。林婉清代表林家参展，她准备的丝绸品种繁多，设计新颖，吸引了大量买家。展览开幕式上还有盛大的<span class="w">procession(队伍)📢</span>游行。`,

  `展览上，林婉清遇到了一位年轻男子。他自称姓苏，来自京城，是苏家的皇商——专门为<span class="w">king(国王)📢</span>采购丝绸的商人。他对林家产品非常满意。`,

  `苏公子对林婉清的丝绸赞不绝口："林小姐，你们家的丝绸，质量上乘，花样也很别致。我很想和你们合作。"他说话的语气体现了商人的<span class="w">strength(力量)📢</span>。`,

  `林婉清心中一动。苏家是皇商，若能与之合作，林家的地位将大幅提升。她微笑道："苏公子，合作之事，我们可以详谈。"她注意到苏公子与自己有几分<span class="w">resemblance(相似)📢</span>的气质。`,

  `两人约定在茶楼见面。苏公子向林婉清展示了皇家的采购标准，林婉清则展示了林家产品的优势。经过一番谈判，双方达成了合作意向。她准备<span class="w">implement(实施)📢</span>新的生产计划。`,

  `签约仪式上，苏公子突然问："林小姐，您对商业的理解，似乎与一般商人不同。"林婉清笑了笑："或许是因为，我看待事物的角度不同吧。"她不想透露自己跨越时空的<span class="w">plural(复数)📢</span>人生。`,

  `合作后，林家丝绸庄的名气更大了。苏公子也常来拜访，两人渐渐熟悉，彼此产生了好感。他告诉她，城中正在开凿一条新的<span class="w">canal(运河)📢</span>，将促进商贸。`,

  `一天，苏公子对林婉清说："林小姐，我想向您<span class="w">teach(教授)📢</span>一些关于宫廷礼仪的知识，也许将来用得上。"林婉清点头，心中却想，或许这是苏公子的暗示。`,

  `果然，不久后，苏公子向林婉清表白。他说："林小姐，我对您早已倾心。不知您是否愿意，成为我苏家的媳妇？"林婉清心中清楚，这个时代的人对女性成功者很<span class="w">susceptible(易受影响的)📢</span>。`,

  `林婉清心中喜悦，但面上依然沉稳："苏公子，承蒙错爱。但小女子还需考虑。"苏公子笑道："好，我等您的答复。"他会尊重她用<span class="w">furnace(熔炉)📢</span>炼制丝绸的工匠精神。`,

  `林婉清回到家中，思考良久。她知道自己对苏公子也有感情，但若嫁入苏家，是否意味着要放弃自己一手建立的事业？她要做出最<span class="w">favorable(有利的)📢</span>选择。`,

  `她找到苏公子，坦诚地说："苏公子，我珍惜这段感情，但我也有自己的追求。若成婚，我希望您能支持我继续经营丝绸庄。"她的眼中闪着坚定的光芒。`,

  `苏公子愣了愣，随即大笑："林小姐，我喜欢的就是您这样的女子。若您婚后甘心做家庭主妇，反倒不是我想娶的人了。"他欣赏她不畏艰难的<span class="w">strength(力量)📢</span>。`,

  `林婉清惊喜地看着苏公子，心中满是感动。她终于明白，真正的爱情，是彼此尊重、相互支持。两人成婚后，林婉清继续经营丝绸庄，苏公子则全力支持。`,

  `夫妻二人配合默契，林家生意越做越大，甚至扩展到了京城。几年后，林婉清成为京城闻名的女商人。她的故事被写进书中，成了那个世纪的<span class="w">legend(传奇)📢</span>。`,

  `有人问她成功的秘诀，林婉清回答："原则很简单，就是坚持自己的信念，不被外界左右。同时，要懂得利用自己的优势，把握机会。"她站在丝绸庄的<span class="w">height(高度)📢</span>，俯瞰京城。`,

  `晚年时，林婉清常常坐在窗前，回忆这一生。从现代的高管，到古代的女商人，她经历了太多。但正是这段经历，让她明白：无论身处何时何地，真正重要的是内心的力量。`,

  `她将自己的一生写成回忆录，留给后代。书中写道："人生如同一场旅程，有时会遭遇风暴，有时会遇到彩虹。但无论怎样，都要勇敢前行，因为前方，总有新的风景在等待。"`,

  `林婉清的故事，流传了许久。后世的人们读到她的故事，都深受启发。她用自己的经历证明：命运或许可以重来，但真正改变命运的，永远是自己。`,

  `而她与苏公子的爱情，也成了人们茶余饭后的话题。两人相濡以沫，携手一生，在那个讲究门当户对的时代，演绎了一段动人的佳话。`,

  `最终，林婉清在家人的陪伴下，安详离世。她的一生，圆满而精彩。她的故事，也成了家族代代相传的宝藏，激励着每一代人勇敢追梦。`,

  `故事告诉我们：无论身处哪个时代，只要有坚定的信念和不懈的努力，就一定能创造属于自己的精彩人生。真正的幸福，源于内心的自由与坚持。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生之逆袭商女 · 学习版</title>
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
      <h1>重生之逆袭商女</h1>
      <p class="sub">重生 · 穿越 · 古代商战</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story15</span>跨越三百年改写命运</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生之逆袭商女 · 学习版　|　看故事记单词</footer>
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
<title>重生之逆袭商女 · 复习版</title>
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
      <h1>重生之逆袭商女</h1>
      <p class="sub">重生 · 穿越 · 古代商战</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story15</span>跨越三百年改写命运</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生之逆袭商女 · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;

// 输出目录
const outputDir = '../result';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入文件
fs.writeFileSync(path.join(outputDir, '15_重生之逆袭商女_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '15_重生之逆袭商女_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：15_重生之逆袭商女_学习版.html');
console.log('✓ 已生成：15_重生之逆袭商女_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生之逆袭商女：跨越三百年改写命运`);
console.log(`- 题材：重生 · 穿越 · 古代商战`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);