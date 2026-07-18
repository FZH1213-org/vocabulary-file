const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_059_2901-2950.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `清晨的阳光洒进江南的古镇，林婉如站在<span class="w">flat(平坦的)📢</span>的庭院里，望着远处的<span class="w">panorama(全景)📢</span>，心中感慨万千。穿越到这个朝代已经三年了，她从一个现代的商科学生，蜕变成了江南最有名的女商人。`,

  `三年前，林婉如正在大学里<span class="w">study(学习)📢</span>金融知识。突然，一道奇异的光芒将她带到了三百年前的大燕王朝。她穿越成了林家的<span class="w">son(儿子)📢</span>——不，是被误认为是儿子，实际上她是女儿身，只是从小被当成男儿养大。`,

  `林家在江南经营丝绸生意，家境殷实。然而，林婉如的父亲去世后，生意逐渐衰落。她的<span class="w">intention(意图)📢</span>是要振兴家族产业，但她知道，这绝非易事。`,

  `林婉如决定<span class="w">embark(着手)📢</span>改革。她用现代的商业知识，重新规划了林家的生意。她发现，林家的丝绸在质量上不如竞争对手，价格却<span class="w">barely(仅仅)📢</span>便宜一点。这显然不符合市场需求。`,

  `她召集家里的<span class="w">leadership(领导)📢</span>层——几个资深的掌柜和账房，一起讨论改革方案。会上，林婉如提出了自己的<span class="w">target(目标)📢</span>：提高丝绸质量，降低成本，扩大市场份额。掌柜们听后，纷纷表示支持。`,

  `然而，改革并非一帆风顺。林婉如发现，家里的账目存在严重问题——有人贪污挪用公款。她必须找出<span class="w">wrong(错误的)📢</span>那个人，否则改革无法进行。她设计了一份详细的<span class="w">questionnaire(问卷)📢</span>，调查每个掌柜的工作情况，最终锁定了嫌疑人。`,

  `经过<span class="w">debate(辩论)📢</span>和对质，贪污的掌柜终于认罪。林婉如<span class="w">cite(引用)📢</span>了家族的规矩，将他逐出家门。此后，林家的财务状况逐渐好转，改革的步伐也加快了。`,

  `林婉如开始着手提高丝绸质量。她亲自前往江南各地，寻找最好的蚕丝原料。她走访了许多桑农，了解他们的种植技术。她还学习了传统的纺织工艺，亲自参与生产过程。`,

  `某天，林婉如在乡间考察时，看到一片桑田。田间的蚕农正在采摘新鲜的<span class="w">cabbage(卷心菜)📢</span>喂蚕。她走近询问，发现这种喂养方式能提高蚕丝的质量。她立刻决定引进这种技术。`,

  `回到家中，林婉如立刻开始试验。她让工人用新鲜的蔬菜喂养蚕，果然，蚕丝的质量有了明显提升。她<span class="w">cherish(珍爱)📢</span>这个发现，决定在全部桑田推广。`,

  `然而，竞争对手并不甘心让林家独大。江南的另一家丝绸商——赵家，开始对林家进行<span class="w">hostile(敌对的)📢</span>打压。赵家联合其他商人，压低丝绸价格，试图将林家挤出市场。`,

  `林婉如没有<span class="w">yield(屈服)📢</span>。她决定采取差异化战略——生产高端丝绸，避开价格战。她聘请了<span class="w">metropolitan(大都市)📢</span>来的织工，学习先进的纺织技术，生产出质量上乘的丝绸。`,

  `她还建立了自己的销售渠道。她派人前往京城和各大城市，开设丝绸铺子。她的<span class="w">intention(意图)📢</span>很明确——要把林家的丝绸卖到全国，甚至<span class="w">beyond(超出)📢</span>国境。`,

  `某天，林婉如在书房里处理账目。她的手指轻轻<span class="w">tremble(颤抖)📢</span>——她发现，自己的改革已经开始见成效，林家的生意正在逐步好转。她心中充满了喜悦。`,

  `然而，赵家并没有放弃。他们开始散布谣言，说林家的丝绸掺杂了劣质原料，甚至说林婉如使用<span class="w">cocaine(可卡因)📢</span>等禁药催熟蚕茧。这些谣言让林家的声誉受损，不少客户开始质疑。`,

  `林婉如感到<span class="w">disgust(厌恶)📢</span>——赵家的手段太卑鄙了。但她没有慌张，她知道，必须用事实说话。她邀请了官府和商会的代表，公开检验林家的丝绸。`,

  `检验结果证明，林家的丝绸质量上乘，没有任何问题。赵家的谣言被揭穿，反而损害了自己的声誉。林婉如趁机发表了一篇<span class="w">solemn(庄严的)📢</span>声明，澄清了所有谣言，还获得了官府的支持。`,

  `此后，林家的生意更加红火。林婉如用现代的管理理念，<span class="w">unify(统一)📢</span>了家族的各个部门，提高了工作效率。她还设立了<span class="w">allowance(津贴)📢</span>制度，激励员工更加努力。`,

  `某天，林婉如在街上遇到一位<span class="w">hungry(饥饿的)📢</span>乞丐。她心生怜悯，给了他一些银两。乞丐感激地说："谢谢公子，您是个好人。"林婉如苦笑——她虽然被当成男儿，但内心始终是个女子。`,

  `回到家中，林婉如开始思考自己的身份问题。她知道，在古代社会，女子的地位很低。但她不愿意被<span class="w">drag(拖)📢</span>着走进婚姻的牢笼。她想要自由，想要追求自己的事业。`,

  `<span class="w">paradox(悖论)📢</span>的是，林家的生意越成功，她被逼婚的压力就越大。家族中的长辈开始催促她成家，甚至有人<span class="w">crazy(疯狂地)📢</span>地为她物色对象。林婉如只能一拖再拖。`,

  `某天，林婉如在书房里<span class="w">clean(清洁的)📢</span>整理文件时，听到外面传来一阵喧哗声。她走出去看，发现是父亲的老友——陈伯伯来访。陈伯伯看到她，惊讶地说："婉如，你长这么大了！"`,

  `林婉如行礼："陈伯伯好。"陈伯伯笑着递给她一个<span class="w">token(标志)📢</span>——那是一块玉佩，上面刻着"林陈两家，世代交好"八个字。林婉如接过玉佩，心中一动——难道陈伯伯有<span class="w">intention(意图)📢</span>联姻？`,

  `果然，陈伯伯开门见山："婉如，我有个<span class="w">son(儿子)📢</span>叫陈景，今年二十有五，尚未成家。我想，咱们两家若是结亲，生意上也能互相扶持。"林婉如沉默片刻，说："陈伯伯，我想再考虑一下。"`,

  `陈伯伯走后，林婉如陷入沉思。她知道，联姻对家族生意有利，但她不想为了生意牺牲自己的幸福。她决定先了解陈景这个人。`,

  `几天后，林婉如以商谈生意为由，拜访了陈家。她见到陈景，发现他是个温文尔雅的男子，谈吐不凡。两人<span class="w">exchange(交换)📢</span>了商业上的看法，发现彼此很有默契。`,

  `陈景对林婉如说："林小姐，我听说您改革了林家的生意，成效<span class="w">striking(显著的)📢</span>。我很佩服。"林婉如谦虚地说："不过是<span class="w">any(任何)📢</span>一点努力而已。"`,

  `从那以后，林婉如和陈景开始频繁往来。他们一起讨论商业，一起参加<span class="w">debate(辩论)📢</span>会，一起游览江南的美景。渐渐地，林婉如发现自己对陈景有了好感。`,

  `某天，陈景带林婉如去看江南的一处<span class="w">pyramid(金字塔)📢</span>形的古塔。塔前有一片<span class="w">tropic(热带)📢</span>植物，与周围的景色形成鲜明对比。陈景说："这塔是古时候一位商人建的，他希望通过建塔，<span class="w">heal(治愈)📢</span>自己的心病。"`,

  `林婉如问："心病能通过建塔治愈吗？"陈景笑道："也许吧，但我想，真正的治愈，是找到心灵的归属。"他看着林婉如，眼神温柔。林婉如心中一暖，她明白，陈景是在暗示什么。`,

  `回到家中，林婉如开始认真考虑婚事。她知道，陈景是个值得信赖的人，和他在一起，自己或许能继续追求事业。她决定答应这门婚事。`,

  `<span class="w">most(大多数)📢</span>人对林婉如的决定表示支持。他们说，林家和陈家联姻，是两全其美的事情。林婉如也开始期待未来的生活。`,

  `婚礼那天，林婉如穿上红色的嫁衣，在众人的祝福声中，走向陈景。她<span class="w">step(步骤)📢</span>坚定，心中充满了幸福。她知道，自己不仅找到了爱情，也找到了事业的伙伴。`,

  `婚后，林婉如和陈景一起经营生意。他们<span class="w">chase(追逐)📢</span>着共同的梦想，将生意越做越大。他们的丝绸不仅销往全国各地，还出口到了海外。`,

  `某天，林婉如在书房里翻看账簿。她发现，林家的收入已经<span class="w">beyond(超出)📢</span>了她最初<span class="w">target(目标)📢</span>的十倍。她感慨万千——重生的机会，让她实现了前世无法企及的梦想。`,

  `她还发现，自己的婚姻生活非常幸福。陈景不仅是个好丈夫，也是个好伙伴。他们一起<span class="w">study(学习)📢</span>商业知识，一起面对挑战，一起分享成功。`,

  `某天，林婉如在街头看到一位<span class="w">verbal(口头的)📢</span>说书人，正在讲述一个商人致富的故事。故事中的商人<span class="w">smooth(平滑地)📢</span>应对各种困难，最终成就了一番事业。林婉如不禁微笑——这故事，仿佛就是在说她自己。`,

  `她想起前世，自己学习金融知识时，曾对老师说："我想做一个成功的商人。"老师说："记住，成功的商人，不仅要有商业头脑，还要有<span class="w">ideology(意识形态)📢</span>——要有社会责任感。"林婉如牢记这句话。`,

  `于是，她在经营生意的同时，也开始回馈社会。她资助<span class="w">front(前面)📢</span>线的士兵，捐助贫困的学生，还修建了几座桥梁和道路。她的善举，赢得了百姓的称赞。`,

  `某天，林婉如在寺庙里祈祷。她看到墙上挂着一幅画，画的是一颗<span class="w">planet(行星)📢</span>围绕着太阳旋转。她感慨——人生就像那颗行星，虽然渺小，但只要找到自己的轨道，就能发出光芒。`,

  `她<span class="w">amuse(娱乐)📢</span>自己：如果前世没有穿越，自己现在会是什么样子？也许只是一个普通的上班族，每天朝九晚五，过着平淡的生活。而如今，她成了一个时代的传奇。`,

  `时光飞逝，林婉如的事业越来越成功。她的丝绸品牌成了江南最著名的品牌之一，甚至皇室也开始采购她的产品。她<span class="w">exempt(免除)📢</span>了许多不必要的税费，生意越做越大。`,

  `<span class="w">inclusive(包括的)📢</span>林家、陈家在内，江南的丝绸业形成了完整的产业链。林婉如用自己的影响力，<span class="w">unify(统一)📢</span>了行业的标准，提高了整体的竞争力。`,

  `某天，林婉如站在江南的<span class="w">distance(距离)📢</span>城市最高的阁楼上，望着脚下的<span class="w">panorama(全景)📢</span>。她看到远处的山峦起伏，近处的河流蜿蜒，心中充满了感慨。`,

  `她想起重生前的自己，那个默默无闻的大学生。她感慨——命运的安排，真是奇妙。她<span class="w">cherish(珍爱)📢</span>眼前的一切，也珍惜重生的机会。`,

  `故事的最后，林婉如常常对年轻的后辈说："成功不是<span class="w">wrong(错误的)📢</span>选择，而是正确的坚持。无论遇到什么困难，只要不放弃，就一定能看到希望的曙光。"`,

  `她相信，前世的经验让她学会了谨慎，重生的机会让她找到了真正的自己。她要用自己的故事，激励更多的人，勇敢追寻自己的梦想。她微笑着望向窗外，那里有阳光，有希望，还有美好的未来。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越商海：江南女商之路 · 学习版</title>
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
      <h1>穿越商海：江南女商之路</h1>
      <p class="sub">穿越 · 古代 · 商战</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story59</span>商海沉浮</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越商海：江南女商之路 · 学习版　|　看故事记单词</footer>
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
<title>穿越商海：江南女商之路 · 复习版</title>
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
      <h1>穿越商海：江南女商之路</h1>
      <p class="sub">穿越 · 古代 · 商战</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story59</span>商海沉浮</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越商海：江南女商之路 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '59_穿越商海_江南女商之路_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '59_穿越商海_江南女商之路_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：59_穿越商海_江南女商之路_学习版.html');
console.log('✓ 已生成：59_穿越商海_江南女商之路_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越商海：江南女商之路：商海沉浮`);
console.log(`- 题材：穿越 · 古代 · 商战`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);