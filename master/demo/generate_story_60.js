const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_060_2951-3000.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `雨夜，苏婉站在写字楼的落地窗前，望着窗外<span class="w">desolate(荒凉的)📢</span>的城市街道，心中感慨万千。重生回到五年前，她终于有机会改变一切。前世，她被最信任的人背叛，失去了一切——职位、名誉，甚至差点失去生命。如今，她要让那些人付出代价。`,

  `<span class="w">once(一次)📢</span>，苏婉是<span class="w">beautiful(美丽的)📢</span>的广告公司创意总监，事业蒸蒸日上。然而，她的副手李婷却暗中觊觎她的位置。李婷联合公司高层，设计陷害苏婉，让她背上泄露商业机密的罪名。苏婉被逐出公司，名声扫地，最终陷入绝望。`,

  `重生后，苏婉发誓要改变命运。她回到五年前的那一天——刚被提拔为创意总监。她知道，李婷的阴谋将在<span class="w">twelve(十二)📢</span>个月后开始。她必须在此之前，先发制人。`,

  `第二天，苏婉来到公司。她走进自己的办公室，打开空调，感受着<span class="w">air-conditioning(空调)📢</span>带来的凉爽。她坐<span class="w">down(向下)📢</span>在椅子上，开始整理工作计划。她知道，要对付李婷，必须从长计议。`,

  `苏婉首先调查了李婷的背景。她发现，李婷并非凭自己的<span class="w">merit(优点)📢</span>上位，而是靠拉关系、走后门。李婷的<span class="w">ancestor(祖先)📢</span>曾是公司的大股东，虽然现在股份已经转让，但她在公司里依然有人脉。`,

  `苏婉意识到，要对付李婷，不能只靠个人能力，必须建立自己的势力。她开始主动与同事交流，建立<span class="w">fellowship(联谊会)📢</span>，扩大自己的影响力。她还主动帮助新人，培养自己的团队。`,

  `某天，苏婉在办公室加班到很晚。她正在用<span class="w">typewriter(打字机)📢</span>打印文件——公司的新系统还在调试中，她只好用老办法。突然，门被推开，李婷走了进来。`,

  `李婷笑着问："苏总监，这么晚还在工作？真是辛苦。"苏婉淡淡地说："没办法，项目<span class="w">missing(缺失)📢</span>了一些重要资料，我要补齐。"李婷心中一紧，她没想到苏婉会这么认真。`,

  `接下来的日子，苏婉继续努力工作。她每天早出晚归，几乎没有时间休息。她知道，只有用实力证明自己，才能让李婷无机可乘。她<span class="w">hope(希望)📢</span>通过自己的努力，赢得更多人的支持。`,

  `某天，公司接到了一个大项目——为一家知名<span class="w">shopkeeper(店主)📢</span>连锁企业做广告策划。苏婉主动请缨，担任项目负责人。她知道，这是一个<span class="w">conspicuous(显眼的)📢</span>的机会，如果成功，她在公司的地位将更加稳固。`,

  `项目启动后，苏婉带领团队全力以赴。她每天工作到深夜，甚至在周末也泡在公司。她的团队成员被她的敬业精神<span class="w">arouse(激励)📢</span>，也都加倍努力。`,

  `然而，李婷并没有闲着。她暗中<span class="w">mess(搞乱)📢</span>苏婉的项目，故意拖延进度，还篡改了部分数据。苏婉很快发现了这些问题，但她没有声张，而是悄悄收集证据。`,

  `某天，苏婉在整理文件时，发现了一张<span class="w">paper(纸)📢</span>，上面记录着李婷篡改数据的痕迹。她立刻将这张纸收好，作为日后反击的证据。`,

  `几个月后，项目进入关键阶段。苏婉在会议室里向客户汇报方案。她用流利的<span class="w">linguistic(语言)📢</span>表达能力，赢得了客户的高度认可。客户当场拍板，决定签约。`,

  `签约仪式上，苏婉站在台上，接受众人的祝贺。李婷站在台下，脸上挂着<span class="w">jolly(欢乐的)📢</span>笑容，心中却暗暗嫉妒。她没想到，苏婉能够如此成功。`,

  `项目结束后，苏婉被晋升为公司的副总裁。她的成功让许多人感到惊讶，但也有人心存<span class="w">skeptical(怀疑)📢</span>——他们不明白，苏婉凭什么获得如此大的成就。`,

  `苏婉知道，李婷不会善罢甘休。她决定主动出击，揭开李婷的真面目。她联系了一位<span class="w">correspondent(记者)📢</span>，将李婷篡改数据的事实公之于众。`,

  `报道发出后，公司高层震怒。他们立刻调查，发现李婷确实存在违规行为。李婷试图<span class="w">refute(反驳)📢</span>，但证据确凿，她无从辩解。最终，她被公司开除。`,

  `李婷离开公司时，心中充满了<span class="w">despair(绝望)📢</span>。她没想到，自己精心策划的阴谋，最终会被揭穿。她感到<span class="w">ashamed(羞耻)📢</span>，不敢再面对曾经的同事。`,

  `苏婉看着李婷离去的背影，心中五味杂陈。她知道，自己终于为前世报了仇。但她也明白，职场上的斗争永无止境，她必须时刻保持警惕。`,

  `接下来的日子，苏婉继续努力工作。她用<span class="w">frank(坦白的)📢</span>态度对待每一位同事，赢得了大家的信任。她还在公司内部建立了<span class="w">stability(稳定)📢</span>的管理制度，提高了整体效率。`,

  `某天，苏婉在街上遇到一位<span class="w">guest(客人)📢</span>——那是她前世的朋友，也是唯一在她最困难时伸出援手的人。朋友看到她，惊讶地说："苏婉，你现在变化真大！"苏婉笑了："是啊，我现在<span class="w">know(知道)📢</span>了，只有靠自己，才能真正站稳脚跟。"`,

  `朋友点头："你变了，变得更强大了。"苏婉感慨："前世的经历让我学会了很多东西。我不想再被<span class="w">wicked(邪恶的)📢</span>人伤害，也不想再被<span class="w">greedy(贪婪的)📢</span>人利用。"`,

  `某天，苏婉在牙科诊所等待就诊。她坐在候诊室里，看到墙上挂着一幅画，画的是一位<span class="w">dentist(牙医)📢</span>为病人治疗的场景。她不禁感慨——人生就像治疗牙齿，有时候需要忍受疼痛，才能恢复健康。`,

  `回到公司后，苏婉继续投入工作。她发现，公司的<span class="w">territory(领土)📢</span>正在不断扩大，业务已经延伸到了周边的几个城市。她决定乘胜追击，进一步扩大市场份额。`,

  `在她的带领下，公司的业绩节节攀升。她在行业内的<span class="w">radius(半径)📢</span>范围内，建立了广泛的合作网络，成为了备受尊敬的女性企业家。`,

  `某天，苏婉收到一封邀请函。是行业<span class="w">composite(混合)📢</span>商会组织的年度论坛，邀请她作为嘉宾演讲。苏婉欣然答应，她知道，这是一个展示自己的好机会。`,

  `论坛当天，苏婉穿着得体，走进会场。她看到<span class="w">many(许多)📢</span>熟悉的同行，心中涌起一阵自豪。她知道，自己已经从一个被人欺负的职场新人，成长为行业内的翘楚。`,

  `演讲时，苏婉侃侃而谈。她分享了自己的职场经验，强调<span class="w">mankind(人类)📢</span>应该相互帮助、共同进步。她的演讲赢得了台下阵阵掌声。`,

  `演讲结束后，一位<span class="w">musician(音乐家)📢</span>走过来，自我介绍道："你好，我听你的演讲很受启发。"苏婉微笑着回应："谢谢，你的音乐也很棒。"两人聊得很投机，发现彼此有很多共同话题。`,

  `从那以后，苏婉和这位音乐家成了朋友。他们经常一起参加活动，一起分享彼此的故事。苏婉发现，自己开始对未来有了新的期待。`,

  `某天，苏婉在公园里散步。她看到一群孩子在玩耍，其中一个孩子不小心摔倒了，膝盖<span class="w">bounce(弹起)📢</span>着跌在地上，裤子破了。苏婉走过去，帮他捡起掉落的<span class="w">umbrella(伞)📢</span>，递给他。`,

  `孩子感激地说："谢谢阿姨。"苏婉笑了："不用客气。"她看着孩子跑开的背影，心中充满了温暖。她意识到，帮助别人，也是一种幸福。`,

  `回到公司后，苏婉继续忙碌。她发现，公司最近遇到了一个棘手的问题——供应链出现断裂，原材料无法及时<span class="w">recipient(接收)📢</span>。她立刻召开紧急会议，讨论解决方案。`,

  `会上，有人提出用<span class="w">gasoline(汽油)📢</span>涨价作为借口，建议提高产品价格。苏婉摇头："这样做会失去客户。我们应该想办法提高效率，降低成本。"最终，大家同意了她的方案。`,

  `经过一番努力，供应链问题得到解决。公司的业务恢复正常，员工的士气也提高了。苏婉看着眼前的一切，心中充满了成就感。`,

  `某天，苏婉在整理旧文件时，发现了一本<span class="w">chapter(章节)📢</span>未完成的书稿。那是她前世开始写的一本职场指南，但因为种种原因，没能完成。她决定继续完成这本书，分享自己的经验。`,

  `几个月后，书稿完成。苏婉将书稿交给出版社，书名定为《职场女王的<span class="w">surface(表面)📢</span>之下》。她在书中坦诚地讲述了自己的经历，以及如何在职场中立足的心得。`,

  `书出版后，获得了广泛好评。许多年轻女性读者纷纷来信，说这本书给了她们<span class="w">avail(效用)📢</span>和启发。苏婉看着这些来信，心中感到无比欣慰。`,

  `某天，苏婉参加一个公益活动，为<span class="w">slum(贫民窟)📢</span>的孩子募捐。她站在台上，用自己的故事激励孩子们："无论出身如何，只要努力，就能改变命运。"`,

  `活动结束后，一个小女孩走过来，羞涩地问："苏姐姐，你是怎么做到的？"苏婉蹲<span class="w">down(向下)📢</span>身，微笑着说："我没有放弃，你也可以。"`,

  `小女孩听了，眼中闪着光芒。苏婉拍了拍她的肩膀，递给她一本自己的书。小女孩接过书，紧紧抱在怀里，仿佛那是<span class="w">excuse(借口)📢</span>的魔法宝物。`,

  `回到家中，苏婉坐在沙发上，望着窗外的夜景。她想起重生前的自己，那个被人欺负、无处申诉的女子。如今，她已经站了起来，成为了一个强大的女性。`,

  `她知道，重生的机会给了她第二次生命。她要珍惜这个机会，用行动证明——女性同样可以在职场上闯出一片天地。`,

  `某天，苏婉在<span class="w">homework(作业)📢</span>般的忙碌中，收到一封来自李婷的信。信中，李婷表达了对过去行为的悔恨，请求苏婉的原谅。苏婉读完信，沉默良久。`,

  `她想起前世，李婷如何将她推入绝境，让她几乎失去一切。她想起那些漫漫长夜，她独自流泪，感到<span class="w">brittle(脆弱)📢</span>无助。`,

  `她将信收起来，没有回复。她知道，原谅需要时间，而她已经不再被仇恨所束缚。她要向前看，创造更美好的未来。`,

  `故事的最后，苏婉常常对年轻的职场新人说："职场就像一场修行，有挑战，有困难，但只要坚持不懈，就能找到属于自己的路。不要被眼前的困境所<span class="w">fond(喜爱)📢</span>恐惧，要相信自己的能力。"`,

  `她相信，前世的经验让她学会了谨慎，重生的机会让她找到了真正的自己。她要用自己的故事，激励更多的人，勇敢追寻自己的梦想。她微笑着望向窗外，那里有阳光，有希望，还有美好的未来。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生职场：复仇女王之路 · 学习版</title>
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
      <h1>重生职场：复仇女王之路</h1>
      <p class="sub">重生 · 职场 · 复仇</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story60</span>王者归来</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生职场：复仇女王之路 · 学习版　|　看故事记单词</footer>
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
<title>重生职场：复仇女王之路 · 复习版</title>
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
      <h1>重生职场：复仇女王之路</h1>
      <p class="sub">重生 · 职场 · 复仇</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story60</span>王者归来</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生职场：复仇女王之路 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '60_重生职场_复仇女王之路_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '60_重生职场_复仇女王之路_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：60_重生职场_复仇女王之路_学习版.html');
console.log('✓ 已生成：60_重生职场_复仇女王之路_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生职场：复仇女王之路：王者归来`);
console.log(`- 题材：重生 · 职场 · 复仇`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);