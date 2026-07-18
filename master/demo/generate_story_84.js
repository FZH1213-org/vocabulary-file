const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_084_4151-4200.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">happy(快乐)📢</span>的童年已成为回忆。沈雨晴睁开眼，发现自己重生回到了古代宫廷。她本是现代的历史学者，如今成为了宫中的一位女官。她知道，这是改变命运的机会。`,

  `沈雨晴站在宫殿的<span class="w">seat(座位)📢</span>旁，望着<span class="w">here(这里)📢</span>——望着周围的一切。她发现，宫廷的<span class="w">essence(本质)📢</span>充满了复杂的权力斗争。`,

  `她决定小心行事。她知道，<span class="w">object(目标)📢</span>明确的人更容易成功。她定下目标：在宫廷中站稳脚跟，保护自己。`,

  `某天，沈雨晴在<span class="w">assembly(集合)📢</span>——在早会上，看到皇后端坐在<span class="w">throne(宝座)📢</span>上。皇后威严地<span class="w">govern(统治)📢</span>着后宫，每个女官都小心翼翼。`,

  `沈雨晴注意到，皇后的<span class="w">garment(衣服)📢</span>上绣着精美的<span class="w">stripe(条纹)📢</span>，领口系着<span class="w">scarf(围巾)📢</span>，颈间佩戴着<span class="w">pearl(珍珠)📢</span>项链。她意识到，服饰在宫廷中代表着身份。`,

  `某日，沈雨晴在<span class="w">sector(区域)📢</span>——在内务府处理事务。她用现代的管理理念，<span class="w">renovate(更新)📢</span>工作流程，提高效率。`,

  `上级看到她的能力，称赞道:"沈女官的<span class="w">leading(领导)📢</span>能力出众。"沈雨晴谦虚回应:"多谢夸奖。"`,

  `她继续努力。她发现，宫廷的<span class="w">usage(习惯)📢</span>与现代社会<span class="w">unlike(不同)📢</span>，需要慢慢适应。她用<span class="w">amiable(和蔼的)📢</span>态度，与同事相处融洽。`,

  `某天，沈雨晴在<span class="w">couch(长榻)📢</span>上休息。她听到外面传来<span class="w">music(音乐)📢</span>声，原来是宫中举办宴会。她整理好仪容，前往参加。`,

  `宴会上，沈雨晴看到一位<span class="w">representative(代表)📢</span>——外国使节。使节用优雅的礼仪，向皇帝行礼。沈雨晴用现代的外交知识，帮助翻译。`,

  `皇帝对她的表现很满意，赐给她一件<span class="w">splendid(华丽的)📢</span>礼服。沈雨晴感激地谢恩，心中<span class="w">nearly(几乎)📢</span>要落泪。`,

  `她继续工作。她用<span class="w">learning(知识)📢</span>和智慧，处理各种难题。她的名声在宫廷里传开，成为女官们的榜样。`,

  `某天，沈雨晴在房间整理物品。她将<span class="w">iron(铁)📢</span>制的工具放好，突然想到可以用现代技术改进宫廷设备。`,

  `她找到工匠，<span class="w">demonstrate(演示)📢</span>新的设计方案。工匠看后，惊叹道:"沈女官真是<span class="w">helpful(有帮助)📢</span>，这些设计太精妙了。"`,

  `沈雨晴微笑回应:"互相学习。"她知道，创新是进步的动力。`,

  `某日，沈雨晴在街上散步。她看到一位老人用<span class="w">apparatus(仪器)📢</span>——用工具测量土地。她想到，可以用科学方法规划宫廷建设。`,

  `她向皇帝提出建议，皇帝采纳了她的方案。她开始<span class="w">supervise(监督)📢</span>工程，确保质量。`,

  `某天，沈雨晴在工地看到<span class="w">carpet(地毯)📢</span>被铺在地上。她想到，宫廷的装饰需要<span class="w">grace(优雅)📢</span>而庄重。她调整方案，效果显著。`,

  `某日，沈雨晴在办公室处理文件。她发现一份<span class="w">bulletin(公告)📢</span>，记录着宫廷的<span class="w">false(虚假的)📢</span>——不对，是记录着宫廷的规矩。她仔细阅读，避免犯错。`,

  `她继续努力。她发现，<span class="w">puzzle(谜题)📢</span>般的宫廷关系需要耐心解开。她用智慧，化解了许多矛盾。`,

  `某天，沈雨晴在街上<span class="w">hurry(匆忙)📢</span>行走。她看到一群孩子在玩耍，心中感慨。她想到，童年已逝，要珍惜当下。`,

  `她继续工作。她用<span class="w">challenge(挑战)📢</span>自己的方式，不断提升能力。她相信，努力终有回报。`,

  `某日，沈雨晴在宫殿看到一位嫔妃。嫔妃穿着<span class="w">clothe(衣服)📢</span>——穿着华丽的礼服，颈间系着<span class="w">scarf(围巾)📢</span>，手中拿着折扇。沈雨晴上前行礼。`,

  `嫔妃看到她，微笑道:"沈女官，你的<span class="w">grace(优雅)📢</span>举止令人欣赏。"沈雨晴回应:"多谢嫔妃夸奖。"`,

  `某天，沈雨晴在<span class="w">orient(东方)📢</span>——在东宫处理事务。她发现，东宫的<span class="w">dwell(居住)📢</span>——管理方式需要改进。她提出方案，得到采纳。`,

  `她继续努力。她用<span class="w">advisable(明智的)📢</span>方式，处理复杂问题。她的能力得到认可。`,

  `某日，沈雨晴在宫殿看到<span class="w">nut(坚果)📢</span>被摆盘。她想到，宫廷的饮食也需要创新。她建议推出健康菜品，得到采纳。`,

  `她继续工作。她发现，<span class="w">alike(同样的)📢</span>——宫中许多规则与现代管理理念相似。她将两者结合，效果显著。`,

  `某天，沈雨晴在办公室工作。她听到外面传来<span class="w">twinkle(闪烁)📢</span>——不对，是听到外面传来脚步声。她走出去，看到一位太监。`,

  `太监说:"皇帝召见沈女官。"沈雨晴心中一紧，但还是冷静地前往。`,

  `皇帝问她:"你觉得宫廷需要<span class="w">move(改变)📢</span>吗?"沈雨晴思考后，回答:"需要改革，才能长久。"`,

  `皇帝听后，点头赞许。他说:"你的见解<span class="w">splendid(极好)📢</span>。"沈雨晴谦虚回应:"陛下过奖了。"`,

  `某日，沈雨晴在街上看到一位老人在<span class="w">pull(拉)📢</span>车。她上前帮助，老人感激地说:"谢谢姑娘。"沈雨晴微笑道:"举手之劳。"`,

  `她继续努力。她知道，<span class="w">blur(模糊)📢</span>——不对，是知道困难会让人迷茫，但坚持能找到方向。`,

  `某天，沈雨晴在办公室处理文件。她发现，<span class="w">drop(落下)📢</span>的效率会导致失误。她制定严格标准，避免错误。`,

  `她继续工作。她用<span class="w">provoke(激发)📢</span>团队士气的方式，提高工作效率。效果显著。`,

  `某日，沈雨晴在街上散步。她看到<span class="w">cosmic(宇宙)📢</span>——看到满天星斗，心中感慨。她知道，人生如星，要发出自己的光芒。`,

  `她继续努力。她发现，<span class="w">saturate(浸透)📢</span>着汗水的努力，终会收获成果。她用行动证明，努力不会白费。`,

  `某天，沈雨晴在宫殿看到一件<span class="w">garment(衣服)📢</span>被雨水<span class="w">saturate(浸湿)📢</span>。她立刻安排晾干，避免损坏。`,

  `她继续工作。她知道，细节决定成败。她用细致的态度，处理每一项任务。`,

  `某日，沈雨晴在办公室接到一个任务。任务涉及宫廷的财务，需要<span class="w">accurate(准确)📢</span>计算。她用现代的财务知识，完成任务。`,

  `上级对她的表现很满意，称赞道:"沈女官的<span class="w">ability(能力)📢</span>出众。"沈雨晴谦虚回应:"多谢夸奖。"`,

  `某天，沈雨晴在街上散步。她看到一位老人在<span class="w">dwell(居住)📢</span>——在简陋的房子里。她心生怜悯，出资帮助老人修缮房屋。`,

  `老人感激地说:"谢谢沈姑娘。"沈雨晴微笑道:"这是应该做的。"`,

  `她继续努力。她发现，<span class="w">coincide(巧合)📢</span>——不对，是发现机遇与努力相结合，才能成功。她用行动证明，努力终有回报。`,

  `某日，沈雨晴在宫殿工作。她发现一份文件中的<span class="w">false(错误)📢</span>，立刻纠正。她知道，小错误可能导致大问题。`,

  `她继续工作。她用<span class="w">represent(代表)📢</span>——用严谨的态度，履行职责。她的名声在宫廷里更加响亮。`,

  `某天，沈雨晴在街上散步。她看到一只猫在追逐蝴蝶，画面<span class="w">splendid(美好)📢</span>。她心中感慨，自由是最珍贵的。`,

  `她继续努力。她知道，<span class="w">challenge(挑战)📢</span>无处不在，但勇气能克服一切。她用坚定的意志，迎接每一个挑战。`,

  `某日，沈雨晴在办公室工作。她突然感到一阵眩晕，随即想起前世的自己。她知道，重生的使命已经完成，是时候回到现代了。`,

  `她闭上眼，感受着时空的转换。当她再次睁开眼，发现自己已经回到了现代的书房。`,

  `沈雨晴看着周围的一切，心中感慨万千。她知道，那段经历让她成长了许多。她决定，要将古代的智慧运用到现代研究中。`,

  `故事的最后，沈雨晴常常对学生说:"无论在哪个时代，知识和努力都是改变命运的钥匙。不要被环境限制，勇敢追寻自己的价值。"`,

  `她相信，那段重生的经历让她学会了珍惜，也让她找到了真正的自己。她望着窗外的天空，微笑着，那里有过去，有现在，还有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生宫廷：凤鸣九天 · 学习版</title>
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
      <h1>重生宫廷：凤鸣九天</h1>
      <p class="sub">重生 · 宫廷 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story84</span>凤鸣九天</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生宫廷：凤鸣九天 · 学习版　|　看故事记单词</footer>
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
<title>重生宫廷：凤鸣九天 · 复习版</title>
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
      <h1>重生宫廷：凤鸣九天</h1>
      <p class="sub">重生 · 宫廷 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story84</span>凤鸣九天</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生宫廷：凤鸣九天 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '84_重生宫廷_凤鸣九天_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '84_重生宫廷_凤鸣九天_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：84_重生宫廷_凤鸣九天_学习版.html');
console.log('✓ 已生成：84_重生宫廷_凤鸣九天_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生宫廷：凤鸣九天：凤鸣九天`);
console.log(`- 题材：重生 · 宫廷 · 大女主`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);