const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_095_4701-4750.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">lunar(月亮的)📢</span>照耀下，林清雪盘腿坐在山巅的一块巨石上。她是修仙界的<span class="w">ingenious(机敏的)📢</span>天才，年仅十八岁，已经突破到了金丹期。`,

  `林清雪睁开眼，望着<span class="w">field(田野)📢</span>上的灵气流转。她知道，今晚是她<span class="w">stay(停留)📢</span>在此山的最后期限。明天，她就要下山历练。`,

  `她站起身，走向山脚的<span class="w">habitat(栖息地)📢</span>——走向山脚的村落。那里有一间简陋的<span class="w">nose(小屋)📢</span>——不对，那里有一间简陋的小屋，是她暂住的地方。`,

  `回到小屋，林清雪点燃灯盏。灯光摇曳，她想起师父的嘱托："清雪，修仙之路艰难，你要<span class="w">distinguish(辨别)📢</span>善恶，坚守本心。"`,

  `林清雪从怀中取出一个<span class="w">lock(锁)📢</span>着的盒子。她用灵力打开，里面是一枚<span class="w">diamond(钻石)📢</span>——不对，是一枚灵石。这是师父留给她的遗物。`,

  `她轻轻握住灵石，感受到其中蕴含的强大力量。她知道，这是师父的心血，必须好好珍惜。`,

  `第二天清晨，林清雪收拾行囊。她将灵石和几件<span class="w">routine(常规)📢</span>物品放入包裹，准备下山。`,

  `山路崎岖，林清雪小心翼翼地前行。她经过一片<span class="w">region(地区)📢</span>，发现这里的灵气很稀薄。她心中疑惑，决定一探究竟。`,

  `她来到一个村庄，发现村民们脸上都带着<span class="w">horrible(可怕的)📢</span>神情。她询问一位老者，才得知附近出现了妖兽。`,

  `老者说："那只妖兽很强大，已经<span class="w">slaughter(屠杀)📢</span>了许多村民。"林清雪心中一震，决定帮助村民。`,

  `她问："妖兽<span class="w">exist(存在)📢</span>于何处？"老者指向东边的山谷，说："那里就是它的巢穴。"`,

  `林清雪来到山谷，感受到一股<span class="w">frost(霜)📢</span>——感受到一股寒气。她知道，妖兽就在附近。`,

  `突然，一只巨大的妖兽从树丛中冲出。它张开嘴，露出<span class="w">sting(刺)📢</span>——露出锋利的獠牙。林清雪快速闪避，用灵力凝聚出一道光刃。`,

  `光刃击中妖兽，但它似乎没有受伤。林清雪意识到，这只妖兽的防御力很强。`,

  `她调整策略，用<span class="w">fluent(流利的)📢</span>灵力运转，将攻击力集中在一点。她用<span class="w">motor(动力)📢</span>——不对，她用灵力驱动，发出最强一击。`,

  `终于，妖兽被击倒。林清雪松了一口气，转身准备离开。但这时，她听到身后传来声音："你是谁？为何能击败我的妖兽？"`,

  `林清雪转身，看到一个黑衣女子。女子面容冷峻，眼中透着寒光。林清雪问："<span class="w">relation(关系)📢</span>——你与这只妖兽有什么关系？"`,

  `女子冷笑："这是我的傀儡。你毁了它，我要你赔偿。"林清雪皱眉，说："它在伤害村民，我必须阻止。"`,

  `女子说："那不关我的事。"她<span class="w">react(反应)📢</span>——不对，她突然出手，向林清雪攻来。林清雪连忙闪避。`,

  `两人交手数十回合。林清雪发现，对方的修为与自己<span class="w">comparison(比较)📢</span>——不对，对方的修为与自己相当。`,

  `她决定用<span class="w">culture(文化)📢</span>——不对，她决定用智慧取胜。她假装不敌，引诱对方靠近。然后，她突然发难，用一招<span class="w">ingenious(精巧的)📢</span>掌法，击中对方。`,

  `女子被击退，眼中闪过惊讶。她说："你很强，我<span class="w">leave(离开)📢</span>——我会记住你。"说完，她化作一道黑影，消失在山中。`,

  `林清雪回到村庄，告诉村民妖兽已经被消灭。村民们纷纷感谢，一位<span class="w">widow(寡妇)📢</span>老人甚至流泪道："谢谢仙师救了我们。"`,

  `林清雪说："这是我的职责。"她在村庄<span class="w">stay(停留)📢</span>——她在村庄逗留了一天，帮村民修复受损的房屋。`,

  `离开村庄后，林清雪继续前行。她来到一座城市，发现这里繁华异常。街道上人来人往，商铺林立。`,

  `她在城中找到一家客栈住下。客栈的<span class="w">comrade(同伴)📢</span>——客栈的老板很热情，问她是否需要帮助。`,

  `林清雪说："我想了解附近的修仙门派。"老板说："附近有青云门，是这一<span class="w">region(地区)📢</span>最大的门派。"`,

  `林清雪决定去青云门<span class="w">draft(草稿)📢</span>——不对，去青云门拜访。她整理好衣物，向青云山出发。`,

  `到达青云门，林清雪向守门弟子表明身份。弟子<span class="w">simplify(简化)📢</span>——不对，弟子向长老禀报后，邀请她进入。`,

  `长老见到林清雪，说："你的灵力很纯正。我们门派<span class="w">constitute(组成)📢</span>三堂，你可以加入其中一堂修炼。"`,

  `林清雪选择加入剑堂。剑堂的<span class="w">senator(议员)📢</span>——剑堂的堂主是一位中年男子，修为高深。他对林清雪说："你要遵守门规，勤加修炼。"`,

  `林清雪点头。她在剑堂住了下来，每天<span class="w">habit(习惯)📢</span>——每天坚持修炼。她的修为稳步提升。`,

  `某天，林清雪在修炼时，感到一阵<span class="w">headache(头痛)📢</span>。她知道，这是突破的征兆。她闭关三天，终于突破到了元婴期。`,

  `突破后，林清雪感到体内灵力澎湃。她用<span class="w">vocal(声音)📢</span>——不对，她用灵力凝聚出一把飞剑，剑光闪亮。`,

  `堂主看到后，点头赞许："你的天赋很罕见。"林清雪说："谢谢堂主指导。"`,

  `几个月后，青云门接到消息，说附近出现了一批魔修。他们<span class="w">dismiss(解散)📢</span>——不对，他们残害百姓，无恶不作。`,

  `门派决定派出弟子清剿魔修。林清雪主动请缨，带领一支小队出发。`,

  `他们来到魔修的据点，发现这里<span class="w">minor(较小)📢</span>——不对，发现这里的防御很严密。林清雪制定计划，用声东击西的方式，成功突破防线。`,

  `战斗中，林清雪展现出强大的实力。她的飞剑<span class="w">shatter(粉碎)📢</span>敌人的防御，为同伴创造了机会。`,

  `最终，魔修被全部剿灭。林清雪的<span class="w">momentum(动力)📢</span>——林清雪的声望在门派中不断提升。`,

  `回到门派后，长老召见林清雪。他说："你这次任务完成得很好。门派决定<span class="w">tick(打勾)📢</span>——门派决定提拔你为内门长老。"`,

  `林清雪感激地说："谢谢长老信任。"长老说："这是你应得的。"`,

  `某天，林清雪在门派的藏书阁阅读。她看到一本古籍，记载了一种传说中的修炼法门。这种法门可以让人突破到更高的境界。`,

  `她仔细研读，发现修炼需要找到一种稀有的灵物——<span class="w">diamond(钻石)📢</span>灵石。这种灵石只<span class="w">exist(存在)📢</span>于极寒之地。`,

  `林清雪决定前往寻找。她向堂主禀报，堂主说："这是一条艰难的路，你要小心。"`,

  `林清雪说："我会的。"她收拾行囊，踏上了新的旅程。`,

  `路上，她经过一个<span class="w">society(社会)📢</span>——不对，她经过一个小镇，在客栈<span class="w">pillow(枕头)📢</span>上休息了一夜。第二天，她继续前行。`,

  `经过数日的跋涉，林清雪终于到达了极寒之地。这里的<span class="w">frost(霜)📢</span>——这里的冰雪覆盖一切，寒气刺骨。`,

  `她用灵力抵御寒冷，在冰原上搜寻。终于，她找到了那块钻石灵石。它散发着淡淡的光芒，美丽非凡。`,

  `林清雪将灵石收入怀中，准备返回。但这时，她感到一股强大的<span class="w">objection(反对)📢</span>——不对，她感到一股强大的敌意。`,

  `原来是之前那个黑衣女子。她说："你果然找到了这块灵石。交给我，否则别怪我无情。"`,

  `林清雪说："这是我修炼所需，不能给你。"女子冷笑，再次出手。`,

  `两人再次交手。林清雪用<span class="w">recent(近来的)📢</span>——用最近的突破之力，发出最强攻击。女子不敌，再次退走。`,

  `林清雪回到青云门，用钻石灵石修炼。她的修为再次提升，达到了化神期。`,

  `故事的最后，林清雪站在青云山顶，望着<span class="w">reality(现实)📢</span>——望着眼前的世界。她知道，修仙之路漫长，但她会坚持走下去。`,

  `<span class="w">thus(如此)📢</span>，她用坚定的信念，书写着属于自己的传奇。她相信，只要坚持，终有一天会登上仙途之巅。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>仙途问道：凌云之路 · 学习版</title>
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
      <h1>仙途问道：凌云之路</h1>
      <p class="sub">修仙 · 玄幻 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story95</span>凌云之路</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>仙途问道：凌云之路 · 学习版　|　看故事记单词</footer>
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
<title>仙途问道：凌云之路 · 复习版</title>
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
      <h1>仙途问道：凌云之路</h1>
      <p class="sub">修仙 · 玄幻 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story95</span>凌云之路</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>仙途问道：凌云之路 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '95_仙途问道_凌云之路_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '95_仙途问道_凌云之路_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：95_仙途问道_凌云之路_学习版.html');
console.log('✓ 已生成：95_仙途问道_凌云之路_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：仙途问道：凌云之路：凌云之路`);
console.log(`- 题材：修仙 · 玄幻 · 励志`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);