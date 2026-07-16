const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('master/demo/vocabulary_split/vocabulary_005_201-250.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `林晓月是<span class="w">worldwide(全世界)📢</span>知名的中医专家，每天忙于诊治病人和<span class="w">educate(教育)📢</span>学生。这天，她在整理古籍时，一本<span class="w">historical(历史的)📢</span>医书引起了她的注意。书上记载着一个神秘的配方，据说能治百病。她好奇地翻开书页，突然一阵眩晕袭来，她失去了意识。`,

  `当林晓月醒来时，发现自己躺在一间古朴的房间里。四周摆着<span class="w">lumber(木材)📢</span>家具和<span class="w">brass(黄铜)📢</span>器皿，墙上的油<span class="w">lamp(灯)📢</span>散发着微弱的光芒。她意识到，自己穿越到了古代。还没等她完全回过神来，门外传来一阵急促的脚步声。`,

  `"王妃，您终于醒了！"一个年迈的仆妇冲进来，脸上满是惊喜。"王爷已经派人<span class="w">worldwide(到处)📢</span>寻找名医，终于把您救回来了。"林晓月这才明白，自己成了王府的王妃，而原身因为中毒而生命垂危。`,

  `林晓月检查了自己的身体，发现原身中了剧毒。她立即开始<span class="w">conduct(进行)📢</span>诊断，运用现代医学知识分析症状。她发现，毒药的成分很复杂，需要特殊的草药才能解毒。她询问仆人王府里是否有药房，仆人摇了摇头。`,

  `林晓月决定亲自前往城中的药房寻找药材。她换上一身朴素的衣裙，独自离开了王府。街上人来人往，小贩们在叫卖着各种商品。她在一家<span class="w">coherent(协调的)📢</span>布局的药铺前停下，询问掌柜是否有所需的药材。`,

  `掌柜看着她列出的<span class="w">parameter(参数)📢</span>清单，皱起眉头："这些药材非常稀有，价格不菲。"林晓月从怀中取出一枚玉佩，这是她在王府找到的<span class="w">accessory(配饰)📢</span>。她用玉佩换到了所需的药材。`,

  `回到王府后，林晓月开始熬制解毒药剂。她将药材切片，放入陶罐中，用小火慢炖。整个过程中，她时刻关注火候和药汤的颜色变化，力求达到<span class="w">satisfactory(满意的)📢</span>效果。终于，一碗墨绿色的药汤完成了。`,

  `林晓月服下药汤，感觉体内的毒素逐渐被化解。她的<span class="w">chest(胸腔)📢</span>不再疼痛，呼吸也变得顺畅。几天后，她完全恢复了健康。王妃康复的消息传遍了整个王府，仆人们都对她充满了敬佩。`,

  `然而，林晓月并没有因此安于现状。她开始<span class="w">strive(努力)📢</span>学习古代的医术知识，结合现代医学理论，不断提升自己的医术。她发现，这个时代的人对医学了解甚少，很多疾病都无法有效治疗。`,

  `一天，王府来了一位<span class="w">tough(棘手的)📢</span>病人——王爷的侄儿，一个年幼的<span class="w">kid(小孩)📢</span>。孩子高烧不退，已经昏迷了三天。王府的医生们束手无策，王爷焦急万分。林晓月主动请缨，为孩子诊治。`,

  `她仔细检查了孩子的症状，发现是急性肺炎。她立即开出药方，用银针针灸配合药物治疗。经过一整夜的守护，孩子的<span class="w">percentage(百分比)📢</span>体温终于开始下降，情况逐渐稳定。`,

  `王爷看到侄儿康复，心中充满<span class="w">gratitude(感激)📢</span>。他对林晓月说："王妃，您的医术真是令人惊叹。我从不知道您还有这样的才能。"林晓月微笑着说："王爷，我只是尽我所能，救人一命。"`,

  `从此，林晓月在王府里开设了一间诊所，专门为王府的人和附近的百姓看病。她的医术<span class="w">far(远远)📢</span>超过了当地的医生，许多疑难杂症都在她手中得到治愈。她的名声渐渐传开，甚至连宫廷里的贵族也前来求医。`,

  `然而，林晓月的成功也引来了嫉妒。王府的侧妃苏氏心生<span class="w">deceit(欺骗)📢</span>之意，暗中散布谣言，说林晓月用<span class="w">cunning(狡猾)📢</span>手段迷惑王爷。她还派人对林晓月的药材动手脚，企图让她医疗失败。`,

  `林晓月很快发现了苏氏的阴谋。她没有退缩，而是用<span class="w">wit(智慧)📢</span>化解危机。她在药材中加入了特殊的<span class="w">seed(种子)📢</span>，这些种子只有在高温下才会变色。当苏氏派人<span class="w">assault(攻击)📢</span>药材时，种子变成了红色，暴露了她的罪行。`,

  `王爷得知真相后，对苏氏的<span class="w">conduct(行为)📢</span>大怒。他严厉惩罚了苏氏，并公开<span class="w">accuse(谴责)📢</span>她的恶行。林晓月的清白得以<span class="w">uncover(揭露)📢</span>，她的名声反而更加响亮。`,

  `随着时间的推移，林晓月与王爷之间的感情也逐渐升温。王爷发现，这位王妃不仅有高超的医术，还有善良的心灵和<span class="w">articulate(善于表达的)📢</span>口才。他开始主动接近她，两人常常一起<span class="w">lunch(午餐)📢</span>，畅谈人生和理想。`,

  `一天傍晚，王爷带林晓月来到王府后花园。园中种植着各种奇花异草，空气中弥漫着淡淡的花香。王爷指着一株珍贵的草药说："这是我从<span class="w">far(远方)📢</span>寻来的，希望您能用它救治更多的病人。"`,

  `林晓月接过草药，心中充满感动。她说："王爷，您对我的信任和支持，让我感到无比温暖。我一定不负所托，继续救治病人。"王爷握住她的手，温柔地说："王妃，有您在，是王府的福气。"`,

  `秋天来临，一场突如其来的瘟疫席卷了整个城镇。许多人染病倒下，朝廷陷入了恐慌。林晓月立即组织医疗队，建立隔离病房，用现代的防疫知识控制疫情。她<span class="w">envisage(设想)📢</span>了一套完整的治疗方案，迅速推行。`,

  `她教导百姓们注意卫生，焚烧患者的衣物，用<span class="w">oven(炉灶)📢</span>煮沸饮用水。她还调配了一种特殊的药剂，能够有效抵抗瘟疫。在她的努力下，疫情的传播<span class="w">percentage(比率)📢</span>迅速降低，患者们逐渐康复。`,

  `瘟疫过后，朝廷对林晓月的贡献给予高度评价。皇帝下旨，封她为"妙手医妃"，并赐予她一柄<span class="w">eternal(永久的)📢</span>玉如意。林晓月跪谢皇恩，心中却清楚，这一切的成就，都是因为她有一颗医者仁心。`,

  `回到王府后，林晓月继续她的医疗事业。她<span class="w">breed(培养)📢</span>了一批年轻的医学生，将现代医学知识传授给他们。她希望，通过自己的努力，能够<span class="w">lower(降低)📢</span>这个时代人们的疾病痛苦。`,

  `然而，新的挑战出现了。邻近的敌国趁瘟疫之机，发动了一场猛烈的<span class="w">assault(攻击)📢</span>。王府陷入了战火，林晓月不得不暂停医疗工作，投入到救助伤员的工作中。她用精湛的医术，救治了无数士兵和平民。`,

  `在战场上，林晓月看到了太多的死亡和痛苦。她心中充满了<span class="w">dismay(沮丧)📢</span>，但她没有放弃。她知道，作为医者，她的责任是救死扶伤，无论在什么情况下都不能退缩。`,

  `战争结束后，林晓月开设了一家<span class="w">worldwide(举世闻名)📢</span>的医学院，培养更多的医学人才。她还编写了一部医书，详细记录了自己的医疗经验和对疾病的理解。这本书后来成为了古代医学的经典之作。`,

  `王爷对林晓月的成就感到骄傲。他对她说："王妃，您不仅是王府的荣耀，更是整个国家的骄傲。您的医术和仁心，<span class="w">evoke(唤起)📢</span>了人们对生命的尊重和对健康的渴望。"`,

  `林晓月微笑着回答："王爷，我只是做了我力所能及的事情。医者的使命，就是用医术去减轻他人的痛苦。"她想起自己曾经看过的一本<span class="w">story(故事)📢</span>集，里面有一句话说得好："医者父母心，救人如救火。"`,

  `一天，林晓月在王府的书房里，翻看着自己穿越前的那本医书。书中的每一个<span class="w">slice(章节)📢</span>都仿佛在诉说着她与医学的不解之缘。她突然明白，穿越到这个时代，也许就是命运的安排。`,

  `她用<span class="w">metaphor(隐喻)📢</span>的方式，在日记中写道："命运就像一盏油<span class="w">lamp(灯)📢</span>，在黑暗中为我们照亮前行的道路。我愿意用我的一生，守护这盏灯，让它永不熄灭。"`,

  `王爷走进书房，看到林晓月沉思的样子，轻声问道："王妃，您在想什么？"林晓月抬起头，微笑着说："我在想，能够遇到您，是我这一生最<span class="w">satisfactory(满意的)📢</span>的事情。"`,

  `王爷握住她的手，说："我也是。有您在，我的生命才变得完整。"两人相视而笑，心中充满了对未来的期待。他们知道，无论前方有多少困难，只要彼此相依，就能一起度过。`,

  `几个月后，林晓月发现自己怀孕了。这个消息让整个王府充满了喜悦。王爷对她更加呵护，每天亲自为她准备<span class="w">lunch(午餐)📢</span>，陪她在花园里散步。林晓月感到无比幸福，她知道，这是命运对她最好的馈赠。`,

  `然而，好景不长。敌国再次发动进攻，王爷不得不率军出征。林晓月虽然不舍，但她知道，保家卫国是王爷的责任。她叮嘱他要保重自己，然后送他离开。`,

  `王爷走后，林晓月独自管理王府。她一方面继续医疗工作，一方面处理王府的事务。她用<span class="w">thrift(节俭)📢</span>的方式管理府中的财务，确保每一笔开支都用得其所。她还设立了<span class="w">auxiliary(辅助)📢</span>医疗站，为士兵和百姓提供及时的救治。`,

  `战争持续了数月，林晓月每天都在祈祷王爷平安归来。她常常站在王府的城墙上，眺望远方，希望能看到王爷的身影。每当夜幕降临，她就会点燃<span class="w">lamp(灯)📢</span>，在灯下研读医书，让自己保持忙碌，不去想那些令人担忧的事情。`,

  `终于，传来了胜利的消息。王爷凯旋归来，林晓月激动得泪水夺眶而出。她冲到城门口，看到王爷骑着战马，英姿勃发地归来。王爷下马，紧紧抱住她，说："王妃，我回来了。"`,

  `林晓月抚摸着隆起的小腹，说："王爷，我们的<span class="w">kid(孩子)📢</span>快要出生了。"王爷眼中闪烁着喜悦的光芒，他说："真是太好了！我们终于要有自己的孩子了。"`,

  `几个月后，林晓月顺利产下一子。王府上下一片欢腾，所有人都为这个新生命的到来而高兴。王爷抱着孩子，眼中满是慈爱。他对林晓月说："王妃，谢谢你，给我带来这么珍贵的礼物。"`,

  `林晓月看着王爷和孩子，心中充满了幸福和<span class="w">gratitude(感激)📢</span>。她知道，自己在这个时代的生活，终于找到了真正的归宿。她用医术救治了无数人，也收获了属于自己的爱情和家庭。`,

  `时光荏苒，林晓月的医术和仁心，被后人传颂<span class="w">eternal(永远)📢</span>。她用自己的一生，证明了医者的使命不分时代，只要心中有爱，就能照亮他人的生命。她的故事，成为了一个时代的传奇，激励着无数后来者投身医学，救死扶伤。`,

  `每当夜深人静时，林晓月仍会想起穿越前的生活。她想起现代的<span class="w">e-mail(电子邮件)📢</span>和<span class="w">dial(电话)📢</span>，想起那些熟悉的同事和学生。但她知道，自己已经在这个时代找到了新的生命意义。她不再思念过去，而是珍惜眼前的每一刻。`,

  `她用自己的行动证明，无论身处何时何地，只要心怀善良和坚持，就能创造出属于自己的精彩人生。她的医术和仁心，就像一盏永不熄灭的<span class="w">lamp(灯)📢</span>，照亮了无数人的生命之路。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越王妃：医女当道 · 学习版</title>
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
      <h1>穿越王妃：医女当道</h1>
      <p class="sub">穿越 · 古代言情 · 医术</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story05</span>妙手仁心</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越王妃：医女当道 · 学习版　|　看故事记单词</footer>
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
<title>穿越王妃：医女当道 · 复习版</title>
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
      <h1>穿越王妃：医女当道</h1>
      <p class="sub">穿越 · 古代言情 · 医术</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story05</span>妙手仁心</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越王妃：医女当道 · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;

// 输出目录
const outputDir = 'master/result';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入文件
fs.writeFileSync(path.join(outputDir, '05_穿越王妃_医女当道_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '05_穿越王妃_医女当道_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：05_穿越王妃_医女当道_学习版.html');
console.log('✓ 已生成：05_穿越王妃_医女当道_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越王妃：医女当道：妙手仁心`);
console.log(`- 题材：穿越 · 古代言情 · 医术`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);