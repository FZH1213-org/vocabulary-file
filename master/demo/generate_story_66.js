const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_066_3251-3300.json', 'utf-8'));

// 故事内容（学习版）- 精确使用50个单词
const storyParagraphs = [
  `<span class="w">yearly(每年的)📢</span>的校园招聘会上，林雪站在<span class="w">exit(出口)📢</span>旁，看着各个<span class="w">corporation(公司)📢</span>的展位。作为<span class="w">maths(数学)📢</span>系的高材生，她对自己的未来充满信心。然而，她从不知道，一场<span class="w">accidental(偶然的)📢</span>相遇将改变她的命运。`,

  `林雪走进一家知名企业的展位，看到了一位穿着<span class="w">nice(美好的)📢</span>西装的男士。他正是这家公司的CEO——顾辰。顾辰看到林雪的简历，眼中闪过一丝欣赏："林小姐，你的<span class="w">maths(数学)📢</span>成绩很优秀，欢迎加入我们公司。"`,

  `林雪进入公司后，被分配到数据分析部门。她发现，公司的业务遍布<span class="w">hemisphere(半球)📢</span>各个地区，数据处理需要<span class="w">effective(有效的)📢</span>的方法。她用自己在大学学到的知识，迅速适应了工作。`,

  `某天，林雪在公司的茶水间遇到顾辰。顾辰递给她一块<span class="w">bread(面包)📢</span>，说："林小姐，工作辛苦了。"林雪接过面包，感到一阵温暖。她发现，这位看似冷酷的CEO，其实很关心员工。`,

  `然而，林雪很快发现公司内部存在问题。某些高层试图<span class="w">cheat(欺骗)📢</span>客户，用虚假的数据报告骗取项目资金。林雪决定调查真相，她收集了大量证据，准备向上级汇报。`,

  `某天傍晚，林雪在办公室加班。她整理文件时，不小心被纸张<span class="w">scratch(抓)📢</span>伤了手指。她看着伤口，想起父亲曾经说过的话："遇到困难时，要像钢铁一样坚强。"她的父亲是一名<span class="w">lawyer(律师)📢</span>，曾经教导她要坚守正义。`,

  `林雪决定找顾辰谈话。她走进顾辰的办公室，看到他正在看一份<span class="w">concrete(具体的)📢</span>的报告。顾辰抬头，问："林小姐，有什么事吗？"林雪深吸一口气，将收集的证据放在桌上："顾总，公司内部有人<span class="w">cheat(欺骗)📢</span>客户。"`,

  `顾辰听完，眉头紧锁。他看着林雪，说："谢谢你告诉我。我会调查此事。"他打开抽屉，拿出一个精致的<span class="w">package(包装)📢</span>盒，递给林雪："这是我送给你的小礼物，感谢你的诚实。"`,

  `林雪接过礼物，打开一看，是一条<span class="w">lace(花边)📢</span>围巾。她感激地说："谢谢顾总。"顾辰微笑："叫我顾辰就好。"林雪感到脸颊有些<span class="w">hot(热的)📢</span>，她低声说："好的，顾辰。"`,

  `从那以后，林雪和顾辰的关系逐渐升温。某天，顾辰邀请林雪参加公司的<span class="w">yearly(每年的)📢</span>晚会。林雪穿上一件<span class="w">nice(美好的)📢</span>礼服，走进了会场。`,

  `晚会上，林雪看到一位女士走向顾辰。女士穿着华丽，自称是顾辰的未婚妻。林雪心中一紧，她想起自己曾经听说，顾辰的家族为了商业利益，安排了一桩<span class="w">marriage(婚姻)📢</span>。`,

  `林雪感到一阵失落，她转身走向<span class="w">exit(出口)📢</span>。就在这时，顾辰拉住了她的手。他用坚定的语气说："林雪，我没有未婚妻，那只是家族的安排。我选择的，是你。"`,

  `林雪听完，心中的疑虑消散。她和顾辰一起回到舞池，跳了一支<span class="w">round(圆的)📢</span>舞步。舞曲结束后，顾辰为林雪倒了一杯<span class="w">champagne(香槟)📢</span>，两人相视而笑。`,

  `然而，好景不长。公司的高层得知林雪揭露了他们的阴谋，开始对她进行<span class="w">intimidate(胁迫)📢</span>。他们派人在林雪回家的路上跟踪，试图让她退缩。`,

  `林雪并没有被吓倒。她想起父亲的话："正义需要勇气。"她决定继续调查，将证据提交给相关的<span class="w">bureau(局)📢</span>。`,

  `某天，林雪在公司附近的咖啡厅遇到了顾辰。顾辰看到她，向她<span class="w">wink(眨眼)📢</span>示意。林雪走近，顾辰低声说："我已经查清了，那些高层用<span class="w">disguise(伪装)📢</span>的方式隐藏了真实的财务数据，我会处理。"`,

  `林雪点头。她继续工作，用<span class="w">input(输入)📢</span>的数据，分析公司各个部门的运营情况。她发现，那些高层不仅<span class="w">cheat(欺骗)📢</span>客户，还挪用了公司的资金，用于个人的投资。`,

  `顾辰得知后，立刻召开董事会。他用<span class="w">effective(有效的)📢</span>的证据，证明了那些高层的违法行为。董事会一致决定，将涉案人员开除，并追究法律责任。`,

  `案件结束后，公司恢复了正常运营。林雪因为表现出色，被提拔为数据分析部的经理。她用自己的能力，<span class="w">prove(证明)📢</span>了女性的力量。`,

  `某天，林雪在公司的档案室里，发现了一份<span class="w">regarding(关于)📢</span>公司历史的文件。文件中记录着，顾辰的<span class="w">fate(命运)📢</span>——他原本是家族企业的继承人，但为了追求自己的梦想，放弃了家族的安排。`,

  `林雪看完，心中感慨。她明白，顾辰选择了一条艰难的路，但他从未后悔。她决定，要和顾辰一起，创造属于他们的未来。`,

  `某天周末，林雪和顾辰一起参加了一个慈善活动。活动在一个<span class="w">source(源泉)📢</span>清澈的公园举行。林雪看到，公园的植物需要<span class="w">irrigate(灌溉)📢</span>，她主动拿起水管，帮忙浇水。`,

  `顾辰看着她，微笑着说："林雪，你真的很善良。"林雪回答："这是我应该做的。"她将水管递给顾辰，两人一起完成了浇水的任务。`,

  `活动结束后，林雪和顾辰在公园的长椅上休息。林雪看到一位老人在剪羊毛，她好奇地问："为什么要<span class="w">shear(剪)📢</span>羊毛？"顾辰笑道："因为夏天太<span class="w">hot(热的)📢</span>，羊会不舒服。"`,

  `林雪点头。她想起自己小时候，曾经在乡下度过一个夏天，那时她经常吃<span class="w">chicken(鸡肉)📢</span>和<span class="w">bread(面包)📢</span>，生活简单而快乐。`,

  `某天，林雪在公司收到一个<span class="w">leaflet(传单)📢</span>，是关于一个商业<span class="w">league(联盟)📢</span>的邀请。她将传单递给顾辰，顾辰看后，说："这个联盟很有影响力，我们应该参加。"`,

  `林雪开始准备参加联盟的材料。她用电脑<span class="w">produce(生产)📢</span>了一份详细的报告，展示公司的实力和发展前景。顾辰看完，满意地点头："做得很好。"`,

  `参加联盟会议那天，林雪穿上一件<span class="w">nice(美好的)📢</span>的职业装，跟随顾辰前往会场。会议在一家豪华酒店举行，会场里摆满了各种<span class="w">chip(薄片)📢</span>饼干和点心。`,

  `林雪在会议上发言，她用<span class="w">effective(有效的)📢</span>数据和<span class="w">concrete(具体的)📢</span>案例，赢得了与会者的认可。会议结束后，一位投资人走过来，递给林雪一张名片，说："林小姐，你的能力很强，期待合作。"`,

  `林雪接过名片，感激地说："谢谢。"她将名片放入口袋，心中充满成就感。她知道，这是她努力工作的<span class="w">resultant(作为结果而发生的)📢</span>回报。`,

  `某天，林雪在公司附近的餐厅吃饭。她点了一份<span class="w">chicken(鸡肉)📢</span>沙拉和一杯果汁。正在用餐时，顾辰走了进来。他看到林雪，走过来坐在她对面。`,

  `顾辰问："林雪，你有没有想过我们的未来？"林雪点头："当然。"顾辰从口袋里拿出一个精致的盒子，打开后，里面是一枚戒指。他说："林雪，你愿意嫁给我吗？"`,

  `林雪感到一阵<span class="w">instantaneous(瞬间的)📢</span>的惊喜。她看着顾辰，眼中含着泪水："我愿意。"顾辰将戒指戴在她的手指上，两人紧紧相拥。`,

  `求婚成功后，林雪和顾辰开始筹备婚礼。他们选择了一家<span class="w">nice(美好的)📢</span>教堂作为婚礼地点。林雪想起母亲曾经说过，<span class="w">marriage(婚姻)📢</span>需要<span class="w">trust(信任)📢</span>和包容。`,

  `婚礼当天，林雪穿上<span class="w">lace(花边)📢</span>婚纱，走向顾辰。顾辰看着她，眼中满是温柔。两人在牧师面前许下誓言，在结婚证书上签下了<span class="w">signature(签名)📢</span>，交换了戒指。`,

  `婚礼结束后，林雪和顾辰在教堂的<span class="w">exit(出口)📢</span>处接受亲友的祝福。一位亲友开玩笑道："你们俩真是天生一对，谁敢<span class="w">curse(诅咒)📢</span>你们，一定会有报应的。"`,

  `林雪听完，笑了。她知道，自己的选择是正确的。她将和顾辰一起，创造幸福的生活。`,

  `某天，林雪和顾辰乘坐<span class="w">steamer(汽船)📢</span>度蜜月。船行驶在江面上，两岸的风景如画。林雪站在甲板上，感受着微风拂面。顾辰走到她身边，<span class="w">slap(拍)📢</span>了拍她的肩膀，说："风景很美吧？"`,

  `林雪点头："是的。"她看着远处的群山，感到热血在<span class="w">vein(血管)📢</span>中流动，心中感慨——人生就像这条江水，有时平静，有时波涛汹涌。但只要和爱的人在一起，就能<span class="w">undergo(经历)📢</span>一切。`,

  `回到公司后，林雪继续努力工作。她用<span class="w">laser(激光)📢</span>打印机制作了许多报告，为公司的发展提供支持。她还建立了一个数据分析<span class="w">gear(齿轮)📢</span>系统，提高了工作效率。`,

  `某天，林雪在公司听到一个消息——那位曾经自称是顾辰未婚妻的女士，因为商业欺诈被起诉。林雪感叹，正义终将战胜邪恶。`,

  `她想起自己曾经<span class="w">perplex(困惑)📢</span>过的时刻——担心自己的能力，担心被高层打压。如今，她已经克服了这些困难，成为了公司的中流砥柱。`,

  `某天，林雪在办公室整理文件。她发现一份报告，上面记录着公司的成就——业务扩展到了南<span class="w">hemisphere(半球)📢</span>，客户满意度大幅提升。林雪看完，心中自豪。`,

  `她用自己的努力，<span class="w">accumulate(积累)📢</span>了丰富的经验，也为公司带来了丰厚的回报。她相信，只要坚持初心，就一定能创造出更美好的未来。`,

  `某天，林雪在公司的音乐会上，听到<span class="w">orchestra(管弦乐队)📢</span>演奏的动人乐曲。她看着台上的乐手，心中感慨——生活就像音乐，需要和谐的节奏。`,

  `音乐会结束后，林雪和顾辰一起走<span class="w">out(出去)📢</span>会场。顾辰握着她的手，说："林雪，谢谢你一直陪伴我。"林雪微笑："我们是一家人。"`,

  `故事的最后，林雪常常对年轻员工说："职场需要<span class="w">liable(有责任的)📢</span>的态度，也需要勇气和智慧。遇到困难时，不要退缩，要相信自己的能力。"`,

  `她相信，只要保持<span class="w">trust(信任)📢</span>和坚持，就一定能实现梦想。她微笑着望向窗外，那里有阳光，有希望，还有美好的未来。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>校园恋人：霸总的数学天才 · 学习版</title>
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
      <h1>校园恋人：霸总的数学天才</h1>
      <p class="sub">校园 · 恋爱 · 霸总</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story66</span>数学情缘</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>校园恋人：霸总的数学天才 · 学习版　|　看故事记单词</footer>
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
<title>校园恋人：霸总的数学天才 · 复习版</title>
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
      <h1>校园恋人：霸总的数学天才</h1>
      <p class="sub">校园 · 恋爱 · 霸总</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story66</span>数学情缘</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>校园恋人：霸总的数学天才 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '66_校园恋人_霸总的数学天才_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '66_校园恋人_霸总的数学天才_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：66_校园恋人_霸总的数学天才_学习版.html');
console.log('✓ 已生成：66_校园恋人_霸总的数学天才_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：校园恋人：霸总的数学天才：数学情缘`);
console.log(`- 题材：校园 · 恋爱 · 霸总`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);