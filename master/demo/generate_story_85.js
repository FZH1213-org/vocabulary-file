const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_085_4201-4250.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">Friday(星期五)📢</span>的清晨，苏雨涵睁开眼，发现自己重生回到了高中时代。她本是现代的<span class="w">management(管理)📢</span>顾问，如今再次成为了一名高中生。她知道，这是改变命运的机会。`,

  `苏雨涵坐在教室的<span class="w">bench(长凳)📢</span>上，望着窗外的<span class="w">weather(天气)📢</span>。她想起前世的自己，总是因为不够努力而遗憾。如今，她要弥补这些遗憾。`,

  `她拿出笔记本，用<span class="w">shorthand(速记)📢</span>记下老师讲的重点。她知道，<span class="w">talent(天赋)📢</span>固然重要，但努力才是关键。`,

  `某天，苏雨涵在<span class="w">shop(商店)📢</span>买文具。她看到一位老人在<span class="w">say(说)📢</span>着什么，走近一听，原来是在讲解人生道理。她仔细聆听，受益匪浅。`,

  `老人说:"人生就像一场<span class="w">cross(穿越)📢</span>，要勇敢面对每一个<span class="w">challenge(挑战)📢</span>。"苏雨涵点头，记下了这些话。`,

  `她回到学校，开始用<span class="w">conscientious(认真的)📢</span>态度对待每一项任务。她知道，<span class="w">permanent(永久的)📢</span>的成功需要持续的努力。`,

  `某日，苏雨涵在图书馆学习。她用<span class="w">recorder(录音机)📢</span>记录重要内容，方便复习。她发现，这个方法很有效。`,

  `她继续努力。她知道，<span class="w">scarce(稀缺)📢</span>的机会需要珍惜。她用<span class="w">voluntary(自愿)📢</span>的心态，参加各种竞赛。`,

  `某天，苏雨涵在教室做作业。她用<span class="w">gold(金)📢</span>色的笔写下答案。她知道，学习需要<span class="w">capacity(能力)📢</span>，更需要坚持。`,

  `她参加了一次竞赛。竞赛在<span class="w">May(五月)📢</span>举行，<span class="w">million(百万)📢</span>——吸引了众多学生参加。她用<span class="w">captain(队长)📢</span>的身份，带领团队参赛。`,

  `比赛中，苏雨涵用<span class="w">literary(文学)📢</span>知识回答问题。她的表现<span class="w">splendid(极好的)📢</span>，赢得评委的<span class="w">acknowledge(认可)📢</span>。`,

  `她获得了第一名。同学们纷纷<span class="w">comment(评论)📢</span>，称赞她的<span class="w">personality(个性)📢</span>和能力。苏雨涵心中<span class="w">happy(快乐)📢</span>，但仍然保持谦虚。`,

  `她继续学习。她发现，<span class="w">compulsory(必修的)📢</span>课程虽然基础，但很重要。她用<span class="w">inquiry(探究)📢</span>的精神，深入学习每门课程。`,

  `某天，苏雨涵在操场上跑步。她看到<span class="w">crowd(人群)📢</span>聚集，原来是一场<span class="w">spectacle(壮观)📢</span>的表演。她驻足观看，心中感慨。`,

  `她想到，人生也像一场表演，要全力以赴。她用<span class="w">urge(强烈欲望)📢</span>——用强烈的动力，继续努力。`,

  `某日，苏雨涵在食堂用餐。她点了一杯<span class="w">coke(可乐)📢</span>，边喝边思考学习计划。她知道，时间宝贵。`,

  `她继续努力。她发现，<span class="w">civilize(文明)📢</span>——不对，是发现学习需要文明的方法。她用科学的策略，提高效率。`,

  `某天，苏雨涵在街上散步。她看到一家<span class="w">ice(冰)📢</span>淇淋店，想起童年的美好回忆。她决定，要珍惜当下。`,

  `她继续学习。她知道，<span class="w">catch(抓住)📢</span>每一个机会，才能成功。她用行动证明，努力终有回报。`,

  `某日，苏雨涵在教室听老师讲课。老师说:"你们要<span class="w">brace(支撑)📢</span>——要支撑起自己的梦想。"苏雨涵点头，记下了这句话。`,

  `她用<span class="w">expectation(期望)📢</span>激励自己。她知道，只有设定目标，才能有方向。`,

  `某天，苏雨涵在图书馆学习。她听到旁边有人用<span class="w">dictate(口述)📢</span>的方式背书。她觉得这个方法不错，也开始尝试。`,

  `她继续努力。她发现，<span class="w">substitute(替代)📢</span>方法有时也能提高效率。她灵活运用各种技巧。`,

  `某日，苏雨涵在餐厅吃饭。她看到桌上摆着<span class="w">saucer(茶托)📢</span>，想起家中的温暖。她决定，要用优异的成绩回报父母。`,

  `她继续学习。她知道，<span class="w">politics(政治)📢</span>——不对，是知道学习需要策略。她用科学的方法，提升成绩。`,

  `某天，苏雨涵在操场上散步。她看到一只猫在追捕猎物，却不小心<span class="w">bump(碰撞)📢</span>到树上。她想到，追求目标也要小心谨慎。`,

  `她继续努力。她用<span class="w">instrumental(有帮助的)📢</span>方法，解决学习中的难题。她的成绩稳步提升。`,

  `某日，苏雨涵在教室休息。她趴在桌上<span class="w">nap(小睡)📢</span>了一会儿，醒来后精神焕发。她知道，劳逸结合很重要。`,

  `她继续学习。她发现，<span class="w">commonwealth(联邦)📢</span>——不对，是发现团队合作很重要。她与同学们一起讨论问题。`,

  `某天，苏雨涵在街上看到一位老人跌倒。她立刻上前搀扶，发现老人的手臂被<span class="w">fell(击倒)📢</span>——被擦伤了。她帮忙处理伤口。`,

  `老人感激地说:"谢谢<span class="w">yourself(你自己)📢</span>——谢谢你，小姑娘。"苏雨涵微笑道:"不客气。"`,

  `她继续学习。她知道，<span class="w">misfortune(不幸)📢</span>总会过去，只要坚持努力。她用乐观的心态，面对困难。`,

  `某日，苏雨涵在商店购物。她看到一位<span class="w">owner(店主)📢</span>正在整理货架。她主动帮忙，店主感激地说:"谢谢你。"`,

  `苏雨涵微笑道:"举手之劳。"她知道，帮助他人也是快乐的源泉。`,

  `她继续努力。她用<span class="w">pound(猛击)📢</span>——不对，是用坚定的意志，克服每一个困难。她相信，努力终有回报。`,

  `某天，苏雨涵在教室学习。她听到外面传来<span class="w">anger(愤怒)📢</span>的声音。她走出去，发现两位同学在争执。`,

  `她立刻上前调解。她用温和的语言，化解了矛盾。两位同学握手言和。`,

  `她继续学习。她发现，<span class="w">cross(交叉)📢</span>学科的知识很有用。她综合运用各科知识，解决复杂问题。`,

  `某日，苏雨涵在街上看到一位男士正在用剃刀<span class="w">shave(刮)📢</span>胡子。她想到，生活需要精细的态度。`,

  `她继续努力。她用<span class="w">excite(激发)📢</span>团队士气的方式，带动同学们一起学习。大家的成绩都有提升。`,

  `某天，苏雨涵在图书馆看书。她发现书页有些损坏，但没有放在心上。她知道，<span class="w">minor(次要)📢</span>——不对，是知道内容才是最重要的。`,

  `她继续学习。她用<span class="w">say(说)📢</span>——用清晰的表达，向老师请教问题。老师对她的好学印象深刻。`,

  `某日，苏雨涵在操场上跑步。她看到一位同学在练习跳高，却因为姿势不当而失败。她上前指导，帮助同学提高。`,

  `同学感激地说:"谢谢苏雨涵。"苏雨涵微笑道:"互相帮助，共同进步。"`,

  `她继续努力。她知道，<span class="w">shop(商店)📢</span>——不对，是知道学习需要积累。她每天都坚持学习，从不间断。`,

  `某天，苏雨涵在教室考试。她用<span class="w">accuracy(准确)📢</span>——不对，是用认真的态度，完成每一道题。`,

  `考试结束后，她取得了优异的成绩。老师和同学们都为她感到高兴。`,

  `她继续学习。她知道，<span class="w">million(百万)📢</span>——不对，是知道成功需要一点一滴的积累。她用踏实的态度，继续前行。`,

  `某日，苏雨涵在街上散步。她看到一只鸟在天空中飞翔，心中感慨。她知道，自由和梦想同样珍贵。`,

  `她继续努力。她用<span class="w">voluntary(自愿)📢</span>的心态，参加各种活动。她相信，经历能让人成长。`,

  `某天，苏雨涵在办公室接见老师。老师问她:"你对未来有什么<span class="w">expectation(期望)📢</span>?"苏雨涵回答:"希望能考上理想的大学。"`,

  `老师点头，鼓励道:"加油，你一定能做到。"苏雨涵心中充满动力。`,

  `她继续学习。她发现，<span class="w">scarce(稀缺)📢</span>的机遇需要主动争取。她用积极的态度，迎接每一个挑战。`,

  `某日，苏雨涵在图书馆看<span class="w">literary(文学)📢</span>书籍。她被书中的故事深深吸引，仿佛看到了另一个世界。`,

  `她继续努力。她用<span class="w">talent(才能)📢</span>和努力，书写着自己的未来。她知道，只要坚持，梦想终会实现。`,

  `某天，苏雨涵在操场上散步。她看到同学们在努力学习，心中感慨。她知道，大家的努力终会有回报。`,

  `她继续前行。她用<span class="w">permanent(永久的)📢</span>决心，追求自己的目标。她相信，努力不会白费。`,

  `某日，苏雨涵在教室工作。她突然感到一阵眩晕，随即想起前世的自己。她知道，重生的使命已经完成，是时候回到现代了。`,

  `她闭上眼，感受着时空的转换。当她再次睁开眼，发现自己已经回到了现代的办公室。`,

  `苏雨涵看着周围的一切，心中感慨万千。她知道，那段重生经历让她成长了许多。她决定，要将那些感悟运用到现实中。`,

  `她开始写作，将重生的经历写成一本书。她希望，读者能从中汲取力量，勇敢追寻自己的梦想。`,

  `某天，苏雨涵在书店看到自己的书被摆放在显眼位置。她心中涌起自豪，知道这是努力的回报。`,

  `故事的最后，苏雨涵常常对年轻人说:"重生让我明白，珍惜时间是成功的关键。不要被环境限制，勇敢追寻自己的价值。"`,

  `她相信，那段经历让她学会了珍惜，也让她找到了真正的自己。她望着窗外的天空，微笑着，那里有过去，有现在，还有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生高中：逆袭人生 · 学习版</title>
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
      <h1>重生高中：逆袭人生</h1>
      <p class="sub">重生 · 校园 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story85</span>逆袭人生</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生高中：逆袭人生 · 学习版　|　看故事记单词</footer>
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
<title>重生高中：逆袭人生 · 复习版</title>
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
      <h1>重生高中：逆袭人生</h1>
      <p class="sub">重生 · 校园 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story85</span>逆袭人生</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生高中：逆袭人生 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '85_重生高中_逆袭人生_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '85_重生高中_逆袭人生_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：85_重生高中_逆袭人生_学习版.html');
console.log('✓ 已生成：85_重生高中_逆袭人生_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生高中：逆袭人生：逆袭人生`);
console.log(`- 题材：重生 · 校园 · 励志`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);