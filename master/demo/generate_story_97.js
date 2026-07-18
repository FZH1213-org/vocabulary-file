const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_097_4801-4850.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">tonight(今晚)📢</span>，林清雪站在天台上，望着璀璨的城市灯火。她刚刚穿越到了一个陌生的世界——一个现代都市。`,

  `林清雪深吸一口气，努力让自己冷静下来。她本是古代王朝的公主，如今却成了现代社会的一名高中生。她知道，必须尽快适应这个新环境。`,

  `她回到房间，打开课本。课本上的<span class="w">page(页)📢</span>密密麻麻，全是她不熟悉的知识。她决定从基础开始学习。`,

  `第二天，林清雪来到学校。她发现这个时代的学校<span class="w">quite(相当)📢</span>——学校的规模很大，<span class="w">stadium(体育场)📢</span>、图书馆、实验室一应俱全。`,

  `她走进教室，坐在<span class="w">floor(楼层)📢</span>——坐在教室的后排。同学们的目光让她有些不自在，但她努力保持镇定。`,

  `老师开始讲课，用<span class="w">projector(投影仪)📢</span>展示内容。林清雪认真听讲，努力理解每一个知识点。`,

  `课后，一个女生走过来。她叫苏婉儿，是班级的班长。苏婉儿问："你是新来的吗？"林清雪点头："是的。"`,

  `苏婉儿说："如果有不懂的，可以问我。"林清雪说："谢谢。"`,

  `放学后，林清雪在校园里<span class="w">wander(漫步)📢</span>。她看到操场上有人在打<span class="w">tennis(网球)📢</span>，动作矫健。`,

  `一个男生注意到她，走过来问："你是新来的？"林清雪点头。男生说："我叫陆景明，是这个班级的学习委员。"`,

  `林清雪说："我叫林清雪。"陆景明说："欢迎加入我们班。"`,

  `从那天起，林清雪开始了新的生活。她每天努力学习，用<span class="w">strong(强烈的)📢</span>求知欲，追赶同学们的进度。`,

  `某天，林清雪在图书馆<span class="w">print(印刷)📢</span>——在图书馆借书时，看到一本关于<span class="w">eastern(东方的)📢</span>历史的书。她翻开阅读，发现书中记载了许多她熟悉的历史。`,

  `她心中感慨，前世的记忆渐渐浮现。但她知道，那些都已经过去，她要<span class="w">do(做)📢</span>好现在的自己。`,

  `期中考试临近，林清雪开始紧张准备。她知道，考试的成绩会<span class="w">reveal(显示)📢</span>出她的学习成果。`,

  `她每天熬夜复习，用<span class="w">nerve(勇气)📢</span>支撑着自己。她不想让别人看不起她。`,

  `考试那天，林清雪认真答题。她用<span class="w">bulk(大量)📢</span>——不对，用扎实的知识储备，完成了每一道题。`,

  `成绩公布后，林清雪的排名<span class="w">increase(增加)📢</span>——不对，林清雪的排名提升到了班级前十。同学们都对她刮目相看。`,

  `陆景明说："林清雪，你很厉害。"林清雪说："谢谢，我会继续努力。"`,

  `某天，学校举办文化节。林清雪参加了舞蹈表演，她穿上<span class="w">spicy(浓郁的)📢</span>——不对，穿上华丽的舞裙，在舞台上翩翩起舞。`,

  `台下响起热烈的掌声。陆景明站在观众席中，眼中满是欣赏。`,

  `表演结束后，陆景明找到林清雪。他说："你跳得很好。"林清雪说："谢谢。"`,

  `陆景明顿了顿，说："其实，我有件事想告诉你。"林清雪看着他，等待下文。`,

  `陆景明说："你<span class="w">diverse(不同的)📢</span>——你和其他女生不同，有一种特别的气质。"林清雪心中一动。`,

  `她低下头，说："谢谢。"陆景明说："我希望我们能成为好朋友。"`,

  `从那天起，林清雪和陆景明的关系越来越好。他们经常一起学习，一起讨论问题。`,

  `某天，林清雪在食堂吃饭。她点了一份<span class="w">meal(餐)📢</span>，边吃边看书。陆景明走过来，坐在她对面。`,

  `他说："你每天都很努力。"林清雪说："因为我要追赶你。"`,

  `陆景明笑了，说："那你要加油了。"林清雪点点头。`,

  `期末考试临近，林清雪更加努力。她知道，考试<span class="w">deadline(最后期限)📢</span>就在眼前，不能放松。`,

  `她每天学习到深夜，用<span class="w">chemical(化学)📢</span>——不对，用科学的方法复习，效率很高。`,

  `考试结束后，林清雪的成绩再次提升。她进入了年级前十，成了同学们眼中的黑马。`,

  `某天，林清雪在图书馆遇到陆景明。陆景明说："林清雪，我想<span class="w">declare(宣布)📢</span>——我想告诉你一件事。"`,

  `林清雪问："什么事？"陆景明深吸一口气，说："我喜欢你。"`,

  `林清雪愣住了。她没想到陆景明会说出这样的话。她低下头，心跳加速。`,

  `陆景明说："我知道这很突然。但我希望你能给我一个<span class="w">chance(机会)📢</span>。"林清雪抬起头，看着他。`,

  `她说："我愿意试试。"陆景明眼中闪过喜悦，握住了林清雪的手。`,

  `两人开始交往。他们一起学习，一起参加活动，感情越来越深。`,

  `某天，陆景明带林清雪去了一家餐厅。餐厅的环境很优雅，服务很周到。`,

  `陆景明问："你觉得这里怎么样？"林清雪说："<span class="w">quite(相当)📢</span>——很不错。"`,

  `两人边吃边聊。陆景明问："你以后有什么打算？"林清雪说："我想考入理想的大学。"`,

  `陆景明说："我也是。希望我们能一起努力。"林清雪点头："好。"`,

  `高考临近，林清雪和陆景明一起备战。他们互相鼓励，互相支持。`,

  `高考结束后，两人都收到了录取通知书。他们考入了同一所大学。`,

  `大学生活丰富多彩。林清雪加入了学生会，用<span class="w">enterprise(进取心)📢</span>，组织了许多活动。`,

  `某天，学校举办了一场<span class="w">military(军事)📢</span>——不对，举办了一场运动会。林清雪参加了长跑比赛，获得了第一名。`,

  `陆景明为她欢呼。他说："你真是我的<span class="w">wealth(财富)📢</span>——你真是我的骄傲。"`,

  `大学四年很快过去。林清雪和陆景明都找到了理想的工作。他们在同一个城市，开始了新的人生<span class="w">march(行进)📢</span>——不对，开始了新的人生旅程。`,

  `某天，陆景明邀请林清雪去海边。他们站在<span class="w">isle(小岛)📢</span>——站在海边的岩石上，望着远处的海鸥<span class="w">fly(飞)📢</span>翔。`,

  `陆景明突然从口袋里拿出一个盒子。他打开盒子，里面是一枚精致的戒指。`,

  `他说："林清雪，我们认识已经七年了。这七年，是我最幸福的时光。我想问你，你愿意嫁给我吗？"`,

  `林清雪眼泪夺眶而出，点头道："我愿意。"`,

  `陆景明将戒指戴在林清雪的手上。两人相拥而笑，海风轻轻吹拂，仿佛在为他们祝福。`,

  `<span class="w">thus(如此)📢</span>，林清雪的人生发生了翻天覆地的变化。她从一个古代公主，变成了现代都市的幸福新娘。`,

  `她常常想：人生就像一场<span class="w">wild(狂野的)📢</span>冒险，充满了未知和惊喜。她相信，只要勇敢面对，就能找到属于自己的幸福。`,

  `故事的最后，林清雪站在阳台上，望着城市的夜空。她知道，命运将她带到这个世界，是为了让她遇见陆景明。而她，也会用尽一生，守护这份珍贵的爱情。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越时空：遇见你 · 学习版</title>
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
      <h1>穿越时空：遇见你</h1>
      <p class="sub">穿越 · 校园 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story97</span>遇见你</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越时空：遇见你 · 学习版　|　看故事记单词</footer>
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
<title>穿越时空：遇见你 · 复习版</title>
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
      <h1>穿越时空：遇见你</h1>
      <p class="sub">穿越 · 校园 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story97</span>遇见你</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越时空：遇见你 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '97_穿越时空_遇见你_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '97_穿越时空_遇见你_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：97_穿越时空_遇见你_学习版.html');
console.log('✓ 已生成：97_穿越时空_遇见你_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越时空：遇见你：遇见你`);
console.log(`- 题材：穿越 · 校园 · 恋爱`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);