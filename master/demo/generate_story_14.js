const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_014_651-700.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `沈悦盯着电脑屏幕，文件里堆积如山的<span class="w">garbage(垃圾)📢</span>数据让她头痛欲裂。作为盛世集团的初级分析师，每个<span class="w">weekday(工作日)📢</span>都在重复着<span class="w">tedious(乏味)📢</span>的工作。她常常想，这样的日子什么时候才是个头。`,

  `会议室里，新任CEO顾言正主持着第一场重要<span class="w">meeting(会议)📢</span>。他一身定制西装，气场强大得像一个精密运转的<span class="w">organ(器官)📢</span>。沈悦坐在角落，尽量让自己不被注意。`,

  `顾言突然开口："各位，我们公司的市场分析存在严重问题。我需要有人提出新的<span class="w">hypothesis(假设)📢</span>，找出问题根源。"他的目光扫过全场，最后停在一个不起眼的<span class="w">spot(地点)📢</span>——沈悦身上。`,

  `沈悦心跳加速，她从文件夹中抽出一份报告。这是她花了三个月时间研究的成果，包含完整的<span class="w">track(轨迹)📢</span>分析和数据追踪，但主管一直认为这些是<span class="w">garbage(垃圾)📢</span>，从不让提交。`,

  `"顾总，我有一个想法。"沈悦站起身，声音微微颤抖。顾言挑眉："请讲。"她深吸一口气，开始阐述自己的<span class="w">inference(推论)📢</span>，语气逐渐变得坚定。`,

  `会议结束后，顾言留下沈悦。"你叫什么名字？""沈悦，市场部分析师。"顾言靠在椅背上："我<span class="w">advise(建议)📢</span>你今晚整理完整报告，明天交给我。"沈悦用力点头，心中燃起希望的火焰。`,

  `回到家，沈悦简单吃了几个<span class="w">egg(蛋)📢</span>就开始工作。她知道自己需要证明自己，这可能是改变命运的转折点。窗外夜色渐深，她却毫无睡意。`,

  `第二天一早，沈悦直接去顶层办公室。前台<span class="w">maid(女仆)📢</span>礼貌地拦住她："请问您有预约吗？"沈悦摇头："顾总让我来的。"女仆<span class="w">please(请)📢</span>她稍等，确认后放行。`,

  `顾言的办公室宽敞得像个小型<span class="w">harbor(海港)📢</span>，落地窗外是整个城市的风景。他坐在桌前，正翻阅着什么文件。沈悦敲门，顾言抬头："进来。"他示意她坐下，开始询问数据来源。`,

  `"报告我看了。"顾言放下文件，"你的分析很专业，但有个问题——你的数据<span class="w">load(装载)📢</span>量很大，来源可靠吗？"沈悦从包里拿出U盘："所有原始记录都在这里。"顾言接过，突然笑了。`,

  `那笑容很<span class="w">gorgeous(灿烂)📢</span>，看得沈悦有些发愣。他说："你很不错。这样，从今天起，你直接向我汇报，绕过王主管。我会让<span class="w">personnel(人事)📢</span>部门处理调令。"沈悦简直不敢相信。`,

  `消息传开，公司上下引起一片<span class="w">uproar(骚动)📢</span>。王主管脸色铁青，其他同事议论纷纷。人事主管亲自来办理沈悦的调令，手续走得飞快。沈悦感觉自己像中了<span class="w">lottery(彩票)📢</span>一样幸运。`,

  `沈悦的新办公室在顶层，和她以前的工位简直是两个世界。但她不知道，真正的考验才刚刚开始。顾言的要求极高，每个细节都要完美，常常让工作变得<span class="w">complicate(复杂)📢</span>。`,

  `接下来的日子，沈悦忙得像个陀螺。顾言的要求<span class="w">accordingly(相应地)📢</span>提高，每个细节都要做到极致。沈悦常常加班到深夜，累得全身<span class="w">muscle(肌肉)📢</span>酸痛。`,

  `一次深夜，沈悦在办公室遇到顾言。他端着咖啡，靠在门口："还不走？"沈悦抬头，发现顾言卸下了白天的威严，看起来像个温和的<span class="w">elder(长者)📢</span>。`,

  `"顾总，我还有几个数据要核对。"顾言走进来，看着沈悦的电脑屏幕："你一直这么拼吗？"沈悦苦笑："不拼不行啊，我怕出错。"顾言叹气："你太紧绷了，要学会放松。"`,

  `顾言突然说："你知道吗，我也曾是个什么都不懂的<span class="w">child(孩子)📢</span>。刚进公司时，连最基本的<span class="w">alphabet(字母)📢</span>报表都看不懂。父亲<span class="w">endow(赋予)📢</span>了我这个位置，我必须比别人更努力才能证明自己。"`,

  `沈悦听着，心中涌起一股暖流。她突然意识到，顾言并不像传闻中那么冷漠霸道。或许，他只是被外界的标签<span class="w">inhibit(抑制)📢</span>了真实的一面。`,

  `一个月后，公司派沈悦和顾言去上海参加商务<span class="w">tour(旅行)📢</span>。在<span class="w">aircraft(飞机)📢</span>上，顾言难得放松，聊起了自己的爱好。沈悦发现他喜欢登山，还擅长摄影，是个很有趣的人。`,

  `上海之行顺利，但回程时发生意外。顾言因为连续工作，突发急性<span class="w">rib(肋骨)📢</span>炎，疼得几乎<span class="w">paralyze(瘫痪)📢</span>。沈悦当机立断，<span class="w">contact(联系)📢</span>机场安排紧急医疗。`,

  `在医院，顾言躺在病床上，看着沈悦忙前忙后。他突然说："谢谢你，这<span class="w">thing(事情)📢</span>处理得很好。"沈悦摇头："这是我应该做的。"`,

  `顾言笑了笑："我发现自己越来越依赖你了。"沈悦愣住，脸红了。顾言又说："或许，我们应该换个方式相处。"沈悦心跳加速，不知如何回应。`,

  `出院后，顾言和沈悦的关系明显改变。工作时依然是上下级，但私下多了几分亲密。公司里开始流传各种<span class="w">oral(口头的)📢</span>八卦，说沈悦靠关系上位。`,

  `王主管趁机散布谣言，说沈悦和顾言有不正当关系。这些<span class="w">poisonous(恶意的)📢</span>传言迅速扩散，甚至有人用<span class="w">savage(野蛮)📢</span>的语言攻击沈悦，让她的声誉受到严重损害。`,

  `沈悦找到顾言："顾总，我申请调回原部门。"顾言皱眉："为什么？"沈悦咬唇："我不想因为流言影响您和公司的声誉。"顾言站起来，走到沈悦面前："你觉得我会让员工因为谣言离开吗？"`,

  `顾言的眼神坚定："我会处理这件事。"他走到办公桌前，拿起一把<span class="w">bolt(螺栓)📢</span>状的钢笔，在文件上签下名字。那个动作让沈悦莫名安心。`,

  `第二天，公司召开全体员工<span class="w">meeting(会议)📢</span>。顾言当众宣布："关于沈悦的谣言，经过调查，是有人故意散布。王主管，你有什么要解释的吗？"`,

  `王主管脸色惨白，全场哗然。顾言拿出一份文件："这是王主管伪造数据、贪污公款的证据，已经提交给<span class="w">detector(侦查)📢</span>部门处理。经过<span class="w">unanimous(一致)📢</span>决定，解除其职务。"`,

  `王主管被带走后，顾言看向沈悦："沈悦，你愿意继续留下吗？"沈悦点头，眼中含泪。全场响起掌声，大家都为沈悦的坚持感到高兴。`,

  `从那以后，沈悦在公司的地位彻底稳固。她学会了像顺时针转动<span class="w">clockwise(顺时针)📢</span>一样有序地处理工作，不再害怕那些复杂的<span class="w">thing(事情)📢</span>，因为她知道有人会支持她。`,

  `顾言开始频繁出现在沈悦的办公室。有时是讨论工作，有时只是闲聊。沈悦发现自己越来越期待这些时刻，心中的种子正在悄悄<span class="w">sprout(发芽)📢</span>。`,

  `一次重要<span class="w">visitor(访问)📢</span>接待中，沈悦展现出色的社交能力。她与客户谈笑风生，化解了一场潜在的危机。顾言在一旁看着，眼神温柔。`,

  `活动结束后，顾言邀请沈悦共进晚餐。餐厅很<span class="w">gorgeous(华丽)📢</span>，烛光摇曳。顾言看着沈悦："我们认识半年了，你有什么感觉？"沈悦心跳加速："顾总，我……"`,

  `顾言打断她："叫我顾言就好。"沈悦深吸一口气："我觉得，很充实。"顾言笑了："我也一样。沈悦，我想和你正式交往，不要让职位<span class="w">inhibit(抑制)📢</span>我们的感情。"`,

  `沈悦低下头，过了许久才说："顾言，我愿意。"顾言伸出手，沈悦将手放上去。顾言握住她的手，就像握住一根<span class="w">cord(绳索)📢</span>，紧紧不放。`,

  `恋情公开后，公司里再次引起轰动。但这次，大家的反应都是祝福。毕竟，沈悦的能力和努力，大家都看在眼里，她在公司已经成为<span class="w">predominant(占主导地位的)📢</span>人物。`,

  `顾言的母亲对沈悦很满意，<span class="w">unanimous(一致)📢</span>认为她是理想的儿媳妇。沈悦觉得自己被上天<span class="w">endow(赋予)📢</span>了幸运，遇到了最好的人。`,

  `一年后，沈悦升任市场部总监。她在会议上发言，自信而从容。台下的顾言，用温柔的目光注视着她，心中充满自豪。他知道，是沈悦的<span class="w">enthusiasm(热情)📢</span>和努力让她走到了今天。`,

  `周末，顾言带沈悦去他最喜欢的登山地点。山道上，顾言指着远处："看，那个<span class="w">spot(地点)📢</span>，我曾经独自去过。现在，有你在身边，感觉更好了。"`,

  `沈悦握住顾言的手："以后的路，我们一起走。"顾言点头，紧紧回握："好。"两人沿着山路继续前行，心中满是平静与<span class="w">peace(安宁)📢</span>。`,

  `傍晚，两人坐在山顶看日落。沈悦突然问："顾言，如果有一天，我要<span class="w">shift(转换)📢</span>职业方向，你还会支持我吗？"顾言笑了："当然，只要你开心。"`,

  `沈悦心中涌起一股暖流。她知道，这段感情来之不易，需要双方共同维护，就像精心<span class="w">fuel(加燃料)📢</span>的火焰，需要不断添柴才能长久燃烧。`,

  `回去的路上，沈悦望着窗外的风景，心中满是感激。她从一个普通的分析师，成长为独当一面的总监，还收获了珍贵的爱情。`,

  `顾言开车，注意到沈悦的沉思，问："在想什么？"沈悦转头："在想，我是多么幸运，能遇到你。有些人可能一辈子都无法<span class="w">undo(解开)📢</span>命运的枷锁，而我很幸运。"`,

  `顾言伸手，握住沈悦的手："是你让我相信，真诚和努力会有回报。"沈悦笑了，靠在座椅上，看着窗外的夜色，心中充满了幸福。`,

  `两人交往两年后，顾言在公司年会上公开求婚。他站在台上，面对全体员工说："沈悦，谢谢你这两年的陪伴。我想让这份陪伴持续一辈子。嫁给我好吗？"`,

  `沈悦泪流满面，点头答应。全场欢呼，掌声如潮。顾言走上前，将戒指<span class="w">hold(握住)📢</span>在手中，郑重地套在沈悦手上，两人在众人祝福中拥抱。`,

  `婚礼在一个月后举行，现场布置得如童话般<span class="w">gorgeous(美丽)📢</span>。沈悦穿着婚纱，站在顾言身边，感到无比幸福。牧师问："你愿意嫁给他吗？"沈悦含泪点头："我愿意。"`,

  `蜜月<span class="w">tour(旅行)📢</span>选择了马尔代夫。碧海蓝天，白沙细浪，两人手牵手漫步海滩。沈悦感叹："这一切，像做梦一样。"顾言搂住她："这不是梦，是我们共同努力的结果。"`,

  `回国后，沈悦继续投入工作。她用<span class="w">enthusiasm(热情)📢</span>感染团队，带领市场部创下了一个又一个佳绩。顾言则在公司战略层面运筹帷幄，两人配合默契。`,

  `几年后，沈悦已成为业界的传奇人物。她的故事被写进商业案例，激励着无数年轻人。而她和顾言的爱情，也成为了公司文化的一部分，象征着职场与爱情可以兼得。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>总裁的偏爱 · 学习版</title>
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
      <h1>总裁的偏爱</h1>
      <p class="sub">职场 · 霸总 · 逆袭</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story14</span>一场会议改变命运</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>总裁的偏爱 · 学习版　|　看故事记单词</footer>
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
<title>总裁的偏爱 · 复习版</title>
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
      <h1>总裁的偏爱</h1>
      <p class="sub">职场 · 霸总 · 逆袭</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story14</span>一场会议改变命运</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>总裁的偏爱 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '14_总裁的偏爱_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '14_总裁的偏爱_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：14_总裁的偏爱_学习版.html');
console.log('✓ 已生成：14_总裁的偏爱_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：总裁的偏爱：一场会议改变命运`);
console.log(`- 题材：职场 · 霸总 · 逆袭`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);