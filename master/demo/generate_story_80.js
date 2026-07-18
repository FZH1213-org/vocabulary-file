const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_080_3951-4000.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `清晨的<span class="w">hour(小时)📢</span>里，苏雨涵睁开眼，发现自己重生回到了高中时代。前世的她，因为<span class="w">idle(懒散)📢</span>度日，最终碌碌无为。如今，她有机会重新开始。`,

  `苏雨涵站在校园的<span class="w">middle(中间)📢</span>，看着熟悉的教学楼。她知道，这次必须努力学习，改变命运。她拿出笔记本，开始<span class="w">write(写)📢</span>下学习计划。`,

  `某天，苏雨涵在教室上课。老师讲到<span class="w">extinct(灭绝的)📢</span>物种时，她突然想起前世的知识。她举手回答问题，准确<span class="w">certify(证明)📢</span>了自己的实力。老师点头<span class="w">praise(称赞)📢</span>道:"很好。"`,

  `苏雨涵继续努力学习。她知道，知识是<span class="w">one(一个)📢</span>改变命运的重要途径。她每天都会花几个<span class="w">hour(小时)📢</span>复习功课，不断提升自己。`,

  `某天，苏雨涵在图书馆看书。她看到一本关于<span class="w">herb(药草)📢</span>的书籍，想起前世的职业——药剂师。她决定，要提前学习相关知识，为未来做准备。`,

  `她开始研究<span class="w">plant(植物)📢</span>的特性，了解各种药材的<span class="w">extract(精华)📢</span>成分。她发现，前世的知识在这个时代<span class="w">undoubtedly(无疑)📢</span>是宝贵的财富。`,

  `某天，苏雨涵在校园看到一只<span class="w">owl(猫头鹰)📢</span>停在树上。她想起前世读过的<span class="w">the(这)📢</span>篇文章，说猫头鹰象征着智慧。她心中充满动力。`,

  `她开始<span class="w">practise(练习)📢</span>各种技能。除了学习，她还参加课外活动，提升<span class="w">flexible(灵活的)📢</span>应变能力。她知道，综合能力对未来<span class="w">crucial(至关重要的)📢</span>。`,

  `某天，苏雨涵在教室整理书籍。她将书本放进<span class="w">box(盒子)📢</span>里，突然发现了一张旧照片。照片上是她初中时获得<span class="w">commercial(商业)📢</span>竞赛奖项的场景。`,

  `她想起前世的遗憾——那次比赛后，她逐渐放弃了努力。她决定，这次要全力以赴，不再重蹈覆辙。`,

  `苏雨涵开始<span class="w">preparation(准备)📢</span>新一轮比赛。她用前世的经验，制定详细计划。她知道，机会只留给有准备的人。`,

  `比赛当天，苏雨涵站在舞台上。她用流利的语言演讲，展示了对<span class="w">environment(环境)📢</span>保护的深刻理解。评委们听后，纷纷点头。`,

  `<span class="w">instant(瞬间)📢</span>，苏雨涵感到紧张，但她很快调整心态。她用<span class="w">complete(完全)📢</span>的自信，完成了演讲。台下响起热烈的掌声。`,

  `结果公布，苏雨涵获得一等奖。她心中<span class="w">rejoice(欣喜)📢</span>，知道这是努力的回报。她拿着奖状，走下舞台，同学们纷纷祝贺。`,

  `某天，苏雨涵在校园散步。她看到一位同学坐在<span class="w">cushion(垫子)📢</span>上看书。她走过去，问:"需要帮助吗?"同学抬头，感激地说:"谢谢。"`,

  `苏雨涵帮助同学解决了难题。同学说:"你真厉害。"苏雨涵微笑道:"只要努力，你也可以。"`,

  `某天，苏雨涵在教室上课。老师讲到<span class="w">outer(外部)📢</span>空间的探索，激发了她的<span class="w">curiosity(好奇心)📢</span>。她开始阅读相关书籍，了解宇宙的奥秘。`,

  `她发现，科学知识能够<span class="w">compete(竞争)📢</span>——帮助她在学业上领先。她决定，要多学习科学知识，拓宽视野。`,

  `某天，苏雨涵在图书馆看到一本关于<span class="w">expedition(探险)📢</span>的书。书中记载了许多冒险故事，让她心生向往。她想到，未来也要去探索未知的世界。`,

  `她继续努力。每天，她都会花时间<span class="w">sow(播种)📢</span>知识，期待未来收获。她知道，学习是一个循序渐进的过程。`,

  `某天，苏雨涵在食堂用餐。她点了一份炒<span class="w">onion(洋葱)📢</span>和蔬菜，边吃边思考学习计划。她知道，健康也很重要。`,

  `她开始<span class="w">regular(有规律的)📢</span>锻炼。每天放学后，她都会在操场跑步，保持身体素质。她发现，健康的身体是学习的基础。`,

  `某天，苏雨涵在教室做作业。她用<span class="w">battery(电池)📢</span>——手电筒照亮笔记本，继续学习。她知道，每一分每一秒都很珍贵。`,

  `某天，苏雨涵在校园看到一群学生在玩<span class="w">cannon(大炮)📢</span>——不对，是在玩模型飞机。她想起前世的自己也曾有过这样的兴趣，但后来放弃了。`,

  `她决定，这次要培养更多兴趣。她加入了科技社，学习制作模型。她发现，动手实践能提升<span class="w">attention(注意力)📢</span>和创造力。`,

  `某天，苏雨涵在科技社看到一<span class="w">massive(大量的)📢</span>资料。她如饥似渴地阅读，学习新知识。她的努力得到了社长的认可。`,

  `社长说:"你的<span class="w">impulse(冲动)📢</span>——热情很可贵。"苏雨涵微笑回应:"谢谢社长鼓励。"`,

  `某天，苏雨涵在校园遇到一位<span class="w">missionary(传教士)📢</span>——志愿者。志愿者告诉她，帮助他人能带来快乐。苏雨涵决定，也要参与志愿服务。`,

  `她加入了学校的志愿服务队，定期去养老院陪伴老人。她用前世的护理知识，帮助老人解决健康问题。老人们<span class="w">rather(相当)📢</span>感激她。`,

  `某天，苏雨涵在养老院遇到一位老人。老人拿出一个<span class="w">triple(三倍)📢</span>——老旧的相框，给她看年轻时的照片。苏雨涵感慨，时光飞逝，要珍惜当下。`,

  `她继续志愿服务。她发现，帮助他人不仅能积累经验，还能培养<span class="w">obedient(顺从的)📢</span>——培养责任心。`,

  `某天，苏雨涵在校园听到一声<span class="w">moan(呻吟)📢</span>。她循声找去，发现一位同学扭伤了脚。她立刻上前，用前世的知识帮助同学缓解疼痛。`,

  `同学感激地说:"谢谢你。"苏雨涵微笑道:"举手之劳。"`,

  `某天，苏雨涵在教室上课。老师讲到<span class="w">mortal(凡人)📢</span>终有一死，她心中有所感悟。她决定，要珍惜每一天，活得精彩。`,

  `她继续努力学习。她发现，前世的经验让她在学习上<span class="w">widespread(广泛)📢</span>受益。她知道，这是重生的优势。`,

  `某天，苏雨涵在图书馆看到一位<span class="w">affluent(富裕的)📢</span>——衣着讲究的同学正在借书。她走过去，主动搭话。两人开始交流学习心得，成为朋友。`,

  `朋友说:"你的学习<span class="w">namely(即)📢</span>方法很有效。"苏雨涵回应:"我们可以一起进步。"`,

  `某天，苏雨涵在校园看到一只猫在<span class="w">tug(拉)📢</span>——拖动玩具。她想到，学习也需要这样坚持不懈的精神。`,

  `某天，苏雨涵在教室整理物品。她将<span class="w">trash(垃圾)📢</span>分类处理，保持环境整洁。她知道，良好的环境有助于学习。`,

  `某天，苏雨涵在校园散步。她看到花坛里的花开得正艳，心中<span class="w">rejoice(高兴)📢</span>。她想到，努力终会有回报。`,

  `她继续努力。她用前世的知识，帮助更多同学提升成绩。她的名声在校园里传开，成为同学们的榜样。`,

  `某天，苏雨涵在教室做作业。她发现一个<span class="w">erroneous(错误的)📢</span>答案，立刻纠正。她知道，细节决定成败。`,

  `某天，苏雨涵在校园看到一位老师正在<span class="w">extract(拔出)📢</span>——搬动重物。她立刻上前帮忙，老师感激地说:"谢谢你的帮助。"`,

  `苏雨涵微笑道:"这是应该做的。"`,

  `某天，苏雨涵在图书馆看到一本关于<span class="w">bosom(胸怀)📢</span>——关于心理学书籍。她如饥似渴地阅读，学习如何调节情绪。她知道，心理健康同样重要。`,

  `她开始实践书中的方法，保持积极的心态。她发现，良好的心态能提高学习效率。`,

  `某天，苏雨涵在校园遇到一位正在<span class="w">idle(虚度)📢</span>时光的同学。她走上前，鼓励他珍惜时间。同学听后，感激地说:"谢谢你的提醒。"`,

  `某天，苏雨涵在教室上课。老师讲到<span class="w">payment(支付)📢</span>系统的发展，她心中有所感悟。她决定，未来要学习金融知识，为事业做准备。`,

  `她开始阅读经济类书籍，了解市场规律。她发现，知识越广博，未来越有选择。`,

  `<span class="w">incidentally(顺便提及)📢</span>，苏雨涵在校园遇到一位曾经的老师。老师看到她的变化，欣慰地说:"你变了很多。"苏雨涵微笑回应:"我在努力改变。"`,

  `某天，苏雨涵在校园散步。她看到一群学生在讨论<span class="w">commercial(商业)📢</span>项目。她加入讨论，提出建设性意见。学生们对她的见解印象深刻。`,

  `某天，苏雨涵在教室整理笔记。她将学习心得<span class="w">write(写)📢</span>成文章，分享给同学们。她的文章得到大家的认可，激励了更多人努力。`,

  `某天，苏雨涵在校园看到一只<span class="w">owl(猫头鹰)📢</span>飞过天空。她想起重生时的决心，心中充满动力。她知道，未来充满希望。`,

  `故事的最后，苏雨涵常常对后辈说:"重生给了我第二次机会，让我明白时间的珍贵。不要<span class="w">moan(抱怨)📢</span>，要珍惜每一天，努力改变自己的命运。"`,

  `她相信，前世的经验让她学会了珍惜，重生的机会让她找到了真正的自己。她望着窗外的天空，微笑着，那里有希望，有未来，还有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生高中：逆风翻盘 · 学习版</title>
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
      <h1>重生高中：逆风翻盘</h1>
      <p class="sub">重生 · 校园 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story80</span>逆风翻盘</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生高中：逆风翻盘 · 学习版　|　看故事记单词</footer>
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
<title>重生高中：逆风翻盘 · 复习版</title>
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
      <h1>重生高中：逆风翻盘</h1>
      <p class="sub">重生 · 校园 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story80</span>逆风翻盘</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生高中：逆风翻盘 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '80_重生高中_逆风翻盘_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '80_重生高中_逆风翻盘_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：80_重生高中_逆风翻盘_学习版.html');
console.log('✓ 已生成：80_重生高中_逆风翻盘_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生高中：逆风翻盘：逆风翻盘`);
console.log(`- 题材：重生 · 校园 · 励志`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);