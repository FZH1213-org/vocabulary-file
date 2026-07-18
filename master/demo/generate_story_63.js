const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_063_3101-3150.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">miss(小姐)📢</span>林雪儿站在<span class="w">university(大学)📢</span>图书馆的<span class="w">closet(壁橱)📢</span>前，整理着一本古老的书籍。作为这里的<span class="w">librarian(图书管理员)📢</span>，她每天的工作都十分<span class="w">pleasant(令人愉快的)📢</span>。然而，她从不知道，这本书将改变她的命运。`,

  `那是一个<span class="w">accident(意外)📢</span>的下午，林雪儿在整理古籍时，手指不小心被纸张划破，鲜血滴在书页上。突然间，一道光芒闪过，她感到整个世界都在<span class="w">shake(摇动)📢</span>。当她再次睁开眼，发现自己已经不在图书馆，而是一个陌生的世界。`,

  `林雪儿<span class="w">understand(理解)📢</span>到自己穿越了。她发现自己变成了一个名为林雪儿的<span class="w">modest(谦虚的)📢</span>少女，是这个修仙世界中的一个小家族的女儿。而她的身体里，似乎还蕴含着某种特殊的力量。`,

  `她开始在这个世界<span class="w">collect(收集)📢</span>信息。她发现，这个世界存在着修仙者，而她所在的林家，正面临一场危机。家族的修炼资源被一个<span class="w">corrupt(腐败的)📢</span>势力夺取，家族成员被迫<span class="w">go(去)📢</span>往矿场劳作。`,

  `林雪儿决定改变这一切。她发现，前世在大学学习的<span class="w">physics(物理)📢</span>知识，在这个世界竟然能帮助她<span class="w">understand(理解)📢</span>修炼的原理。她开始尝试修炼，用<span class="w">intelligent(聪明的)📢</span>的方式，快速提升自己的修为。`,

  `某天，林雪儿在后山修炼时，发现了一处隐藏的<span class="w">store(商店)📢</span>。这竟然是古代修士留下的藏宝阁，里面存放着大量的修炼资源。她小心翼翼地打开门，用<span class="w">thorough(彻底的)📢</span>方式检查了每一个角落。`,

  `她找到了一对<span class="w">pair(一对)📢</span>修炼玉佩，还有一本关于炼丹的秘籍。她<span class="w">deposit(存放)📢</span>好这些宝物，准备在合适的时机使用。她知道，这些资源将帮助她改变家族的命运。`,

  `回到家族后，林雪儿开始秘密修炼。她每天<span class="w">twice(两次)📢</span>打坐，吸收天地灵气。她发现，自己的修炼速度远超常人，这或许与她穿越前在图书馆接触的那本古籍有关。`,

  `某天，林雪儿在山中<span class="w">hike(徒步旅行)📢</span>时，遇到一位老者。老者看她资质不错，便问她是否愿意成为他的弟子。林雪儿<span class="w">tentative(试探性的)📢</span>地点了点头，跟着老者去了他的住处。`,

  `老者的住所是一处隐秘的洞府，里面有各种珍稀的灵草。他教导林雪儿炼丹术，告诉她如何用<span class="w">vegetable(植物)📢</span>和<span class="w">salt(盐)📢</span>等材料，炼制提升修为的丹药。林雪儿学得很认真，很快就掌握了要领。`,

  `修炼过程中，林雪儿发现老者使用的丹炉很特别，上面涂着一层<span class="w">wax(蜡)📢</span>，能够防止丹药在炼制时粘锅。她记下这个细节，准备以后自己炼丹时使用。`,

  `某天，林雪儿在洞府中<span class="w">doze(瞌睡)📢</span>时，突然感到一阵强烈的震动。她冲出洞府，发现远处的天空中出现了罕见的<span class="w">hurricane(飓风)📢</span>，灵气剧烈波动。老者告诉她，这是修仙界的异象，预示着有大机缘出现。`,

  `林雪儿决定前往查看。她用<span class="w">means(方法)📢</span>施展隐匿术，悄悄接近异象中心。她发现，那里有一处古老的遗迹，散发着微弱的<span class="w">radioactive(放射性的)📢</span>能量——不对，是灵气波动。`,

  `她走进遗迹，发现里面有一座巨大的阵法。阵法中央，悬浮着一颗<span class="w">glorious(壮丽的)📢</span>的灵珠。林雪儿知道，这必定是上古修士留下的重宝。她小心翼翼地取下灵珠，感受到其中蕴含的强大力量。`,

  `就在这时，遗迹外传来一阵喧哗。林雪儿躲在<span class="w">sideways(向旁边)📢</span>的角落，悄悄观察。她发现，那个<span class="w">corrupt(腐败的)📢</span>势力的修士已经追了过来，他们显然也感知到了异象。`,

  `林雪儿屏住呼吸，用<span class="w">lung(肺)📢</span>深吸一口气，努力让自己的心跳平稳下来。她知道，如果被发现，她将面临极大的危险。她静静地等待，直到那些修士离开。`,

  `回到安全地带后，林雪儿开始研究灵珠。她发现，灵珠中蕴含着一位上古修士的传承。她用<span class="w">rub(摩擦)📢</span>灵珠的方式，激活了其中的传承。一股庞大的信息涌入她的脑海，让她几乎<span class="w">hysterical(歇斯底里的)📢</span>地叫出声来。`,

  `但她很快<span class="w">sustain(支撑)📢</span>住了自己，用<strong>integrity(正直)📢</strong>的心态接受传承。她学到一套名为"天元心法"的修炼之法，还有许多高深的阵法和炼丹术。`,

  `林雪儿明白，这些传承将帮助她改变家族的命运。她开始刻苦修炼，用<span class="w">impossible(不可能的)📢</span>的速度提升修为。短短<span class="w">partly(部分地)📢</span>一个月，她就突破到了筑基期。`,

  `某天，林雪儿收到家书，得知家族遭遇了危机。她立刻离开老者的洞府，准备<span class="w">back(回到)📢</span>家族。老者送给她一瓶珍贵的丹药，说："遇到危险时，可以<span class="w">eject(喷射)📢</span>这些丹药，它们会爆发出强大的力量。"林雪儿感激地接过丹药，踏上归途。`,

  `回到家族后，林雪儿发现，那些<span class="w">corrupt(腐败的)📢</span>势力已经将家族成员关押在<span class="w">prison(监狱)📢</span>中。她愤怒不已，决定展开一场<span class="w">adventure(冒险)📢</span>营救行动。`,

  `她悄悄潜入敌方据点，发现有一个<span class="w">grocer(杂货商)📢</span>在为敌方势力提供物资。林雪儿假装是普通的商人，与杂货商攀谈，逐渐获取了情报。她得知，敌方将在三天后举行一场聚会，届时所有高层都会出席。`,

  `林雪儿制定了一个周密的计划。她决定在聚会当天，用传承中的阵法，制造一场混乱，趁机营救家族成员。她用三天时间，在聚会地点周围的<span class="w">intersection(交叉口)📢</span>布置了阵法，等待时机。`,

  `聚会当天，林雪儿隐匿在暗处。她看着那些<span class="w">them(他们)📢</span>——敌方势力的修士，一个个进入会场。她在心中默默计算着时间，准备发动阵法。`,

  `当聚会进行到一半时，林雪儿启动了阵法。霎时间，整个会场<span class="w">glorious(壮丽的)📢</span>的光芒四射，灵气剧烈波动。敌方修士们惊慌失措，林雪儿趁机冲入监狱，用丹药的力量炸开了牢门。`,

  `家族成员们看到林雪儿，都感到惊讶。林雪儿对<span class="w">them(他们)📢</span>说："快走，我来救你们了！"她带领家族成员，从<span class="w">sideways(向旁边)📢</span>的小路逃离。`,

  `然而，敌方势力的首领很快<span class="w">understand(理解)📢</span>了情况。他派出高手追击，在<span class="w">scenery(风景)📢</span>秀丽的山道上展开了一场激烈的战斗。林雪儿用传承中的阵法和高深的修炼功法，与敌人周旋。`,

  `战斗中，林雪儿发现敌方首领使用的功法与林家有渊源。她用<span class="w">intelligent(聪明的)📢</span>方式，找到了功法的破绽，成功击败了敌人。她看着倒在地上的首领，冷冷地说："你们的<span class="w">myth(神话)📢</span>结束了。"`,

  `回到家族后，林雪儿用传承中的资源，帮助家族成员提升修为。她还用炼丹术，炼制了许多珍贵的丹药，分发给家族成员。家族逐渐恢复了元气，重新在修仙界站稳了脚跟。`,

  `某天，林雪儿收到一封信。信是那个<span class="w">corrupt(腐败的)📢</span>势力的残余势力写来的，声称他们已经向修仙界的<span class="w">eligible(符合条件的)📢</span>高层举报了林雪儿的行为。林雪儿看完信，心中并不害怕。`,

  `她知道，修仙界讲究实力和<strong>integrity(正直)📢</strong>。她用<span class="w">response(回答)📢</span>的方式，向修仙界高层陈述了事情经过。高层听完，不仅没有惩罚她，反而称赞她<span class="w">eligible(符合条件的)📢</span>修仙者的品质。`,

  `林雪儿的<span class="w">glorious(壮丽的)📢</span>事迹很快传遍了整个修仙界。她被邀请参加修仙界的盛会，与许多高阶修士交流。她用<span class="w">modest(谦虚的)📢</span>的态度，赢得了众人的尊重。`,

  `盛会上，林雪儿遇到一位来自南方<span class="w">latitude(纬度)📢</span>的修士。修士告诉她，南方有一处秘境，里面藏有上古修士的传承。林雪儿听后，心中充满了好奇。`,

  `她决定前往秘境探险。她用<span class="w">despatch(派遣)📢</span>的方式，通知了家族，然后踏上旅程。途中，她经过了许多美丽的<span class="w">scenery(风景)📢</span>，也遇到了不少<span class="w">pleasant(令人愉快的)📢</span>的修士。`,

  `某天，林雪儿在一处<span class="w">store(商店)📢</span>中休息。店主是一位<span class="w">grocer(杂货商)📢</span>，见她气质不凡，便赠送了她一些珍贵的灵草。林雪儿感激地接过，用<span class="w">thorough(彻底的)📢</span>方式检查了灵草的品质。`,

  `她继续前行，终于来到了秘境入口。她用传承中的知识，解开了秘境的封印，进入了其中。秘境中充满了<span class="w">impossible(不可能的)📢</span>的奇观，让她大开眼界。`,

  `在秘境深处，林雪儿发现了一座古老的藏书阁。阁中的<span class="w">librarian(图书管理员)📢</span>——不对，是守护灵，告诉她，这里收藏着上古修士的传承秘籍。林雪儿激动不已，开始<span class="w">collect(收集)📢</span>其中的知识。`,

  `她在秘境中修炼了数月，修为突飞猛进。当她走出秘境时，已经成为了一名元婴期的修士。她用<span class="w">glorious(壮丽的)📢</span>的姿态，回到家族，继续守护着家族的安宁。`,

  `某天，林雪儿在家族的后山修炼。她想起穿越前的自己，那位<span class="w">miss(小姐)📢</span>——林雪儿，如今已经成为了修仙界的强者。她感慨万千，感谢命运给予她的这次机会。`,

  `她用<span class="w">means(方法)📢</span>将前世的知识与今生的修炼结合，创造了一套独特的功法。她还用炼丹术，炼制了许多珍贵的丹药，帮助家族成员提升修为。家族的实力越来越强，在修仙界的<span class="w">latitude(纬度)📢</span>范围内，已经无人敢惹。`,

  `故事的最后，林雪儿常常对年轻修士说："修仙之路充满了<span class="w">adventure(冒险)📢</span>，但只要我们保持<strong>integrity(正直)📢</strong>的心，就一定能找到属于自己的路。不要被眼前的困难所吓倒，要相信自己的力量。"`,

  `她相信，穿越的经历让她学会了珍惜，修仙的旅程让她找到了真正的自己。她要用自己的故事，激励更多的人，勇敢追寻自己的道。她微笑着望向天空，那里有云彩，有阳光，还有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越女修：仙途崛起 · 学习版</title>
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
      <h1>穿越女修：仙途崛起</h1>
      <p class="sub">穿越 · 修仙 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story63</span>仙途传奇</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越女修：仙途崛起 · 学习版　|　看故事记单词</footer>
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
<title>穿越女修：仙途崛起 · 复习版</title>
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
      <h1>穿越女修：仙途崛起</h1>
      <p class="sub">穿越 · 修仙 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story63</span>仙途传奇</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越女修：仙途崛起 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '63_穿越女修_仙途崛起_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '63_穿越女修_仙途崛起_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：63_穿越女修_仙途崛起_学习版.html');
console.log('✓ 已生成：63_穿越女修_仙途崛起_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越女修：仙途崛起：仙途传奇`);
console.log(`- 题材：穿越 · 修仙 · 大女主`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);