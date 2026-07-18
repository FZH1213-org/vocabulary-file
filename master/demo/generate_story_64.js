const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_064_3151-3200.json', 'utf-8'));

// 故事内容（学习版）- 精确使用50个单词
const storyParagraphs = [
  `<span class="w">today(今天)📢</span>是林晓雨在<span class="w">east(东方)📢</span>国际学校任教的第一天。作为<span class="w">teacher(教师)📢</span>，她感到既紧张又兴奋。这所学校以<span class="w">hospitality(好客)📢</span>闻名，但听说校董会的<span class="w">employer(雇主)📢</span>非常严格。`,

  `林晓雨走进办公室，发现桌上放着一支精致的<span class="w">pen(钢笔)📢</span>和<span class="w">some(一些)📢</span>文件。她拿起文件，看到上面写着教师<span class="w">must(必须)📢</span>遵守的规定。她心想，只要保持<span class="w">understanding(理解)📢</span>和耐心，一定能胜任这份工作。`,

  `办公桌<span class="w">beside(在旁边)📢</span>有一个<span class="w">little(小的)📢</span>窗户，窗外正下着雨，街道<span class="w">wet(湿的)📢</span>一片。林晓雨看着窗外，想起自己<span class="w">successive(连续的)📢</span>面试失败的经历。如今，她终于找到了这份工作，<span class="w">must(必须)📢</span>好好珍惜。`,

  `正在这时，办公室的门打开了。一位穿着深色西装的男人走了进来，他正是学校的董事长——陆景深。他用带着淡淡<span class="w">accent(口音)📢</span>的声音说："林老师，欢迎加入我们学校。"`,

  `林晓雨站起身，感到脸颊有些<span class="w">flush(脸红)📢</span>。陆景深是城中最<span class="w">prominent(杰出的)📢</span>的企业家之一，他的公司在国际教育领域<span class="w">prevalent(流行的)📢</span>度极高。林晓雨没想到，自己的<span class="w">employer(雇主)📢</span>竟然是他。`,

  `陆景深走到桌前，拿起桌上的<span class="w">thermometer(温度计)📢</span>看了一眼，说："办公室的空调<span class="w">matter(物质)📢</span>吗？温度是否合适？"林晓雨点头："很舒适，谢谢关心。"`,

  `陆景深继续说："我们学校注重<span class="w">spiritual(精神的)📢</span>教育和学术培养。我<span class="w">allocate(分配)📢</span>给你的班级是高一三班，学生们来自<span class="w">homogeneous(同类的)📢</span>背景，多为商界精英的子女。"`,

  `林晓雨听完，心中有些紧张。她知道，这些学生可能会对她提出<span class="w">criticism(批评)📢</span>。但她决定用<span class="w">legal(合法的)📢</span>的教学方法，赢得学生的尊重。`,

  `第二天，林晓雨走进教室。她发现，学生们对她的态度有些冷淡。她决定用<span class="w">benign(仁慈的)📢</span>的方式接近学生，用耐心和真诚打动他们。`,

  `课间休息时，林晓雨在办公室里听到一声<span class="w">whistle(口哨)📢</span>。她循声望去，发现是隔壁班的一位男教师在吹口哨。那位教师走过来，说："林老师，别担心，学生们只是需要时间适应。"`,

  `林晓雨感激地点头。她拿出笔记本，用<span class="w">pen(钢笔)📢</span>记录下今天的观察。她决定，要<span class="w">retain(保留)📢</span>自己的教学风格，不因学生的态度而改变。`,

  `某天，林晓雨在教室里发现一个学生正在偷偷玩<span class="w">chess(国际象棋)📢</span>。她没有生气，而是走过去，说："你对国际象棋很感兴趣？"学生点头，林晓雨微笑道："放学后，我们一起下一盘。"`,

  `这个举动让学生们感到惊讶。渐渐地，林晓雨赢得了学生们的<span class="w">consent(同意)📢</span>和尊重。他们开始主动与她交流，课堂氛围也变得活跃起来。`,

  `然而，好景不长。某天，学校接到了家长的<span class="w">testimony(证据)📢</span>——有家长投诉林晓雨的教学方法不够严格。林晓雨听到这个消息，心中充满<span class="w">indignation(愤怒)📢</span>，但她知道，自己<span class="w">must(必须)📢</span>冷静应对。`,

  `她找到陆景深，解释了自己的教学理念。陆景深听完，用<span class="w">understanding(理解)📢</span>的语气说："林老师，我<span class="w">guarantee(保证)📢</span>会支持你。但要记住，教育需要平衡。"`,

  `林晓雨点头。她回到教室，继续用自己独特的方式教学。她发现，学生们开始在她面前表现出<span class="w">autonomy(自治)📢</span>的能力，他们能够自主学习和思考。`,

  `某天傍晚，林晓雨在办公室加班。突然，电话响了。她接起<span class="w">telephone(电话)📢</span>，是陆景深的声音："林老师，还没<span class="w">out(出去)📢</span>吗？我正好要送文件去教学楼，可以顺路送你回家。"`,

  `林晓雨有些惊讶，但她接受了陆景深的好意。在车上，陆景深告诉她，学校曾经差点<span class="w">bankrupt(破产)📢</span>，是他接手后，通过<span class="w">manufacture(制造)📢</span>教育产品的业务，才让学校度过难关。`,

  `林晓雨听完，对陆景深产生了敬佩之情。她发现，这位看似冷酷的<span class="w">employer(雇主)📢</span>，其实内心<span class="w">benign(仁慈的)📢</span>而温暖。`,

  `接下来的日子，林晓雨和陆景深的接触越来越多。某天，陆景深邀请她参加学校的董事会<span class="w">ballot(投票)📢</span>会议。林晓雨作为教师代表，被邀请发言。`,

  `她在会议上提出了关于教师<span class="w">autonomy(自治)📢</span>权的建议，获得了董事会成员的认可。陆景深看着她，眼中闪过一丝欣赏的光芒。`,

  `会议结束后，陆景深走到林晓雨身边，说："你的建议很好，我会<span class="w">transfer(转移)📢</span>相关部门落实。"林晓雨点头，心中涌起一股成就感。`,

  `某天周末，林晓雨在学校附近的公园散步。她看到树荫下有一群人在下<span class="w">chess(国际象棋)📢</span>，便走过去观看。正当她看得入神时，一个熟悉的声音从<span class="w">shade(阴影)📢</span>中传来："林老师，你也喜欢下棋？"`,

  `林晓雨转头，发现是陆景深。她点头："是的，我小时候学过一点。"陆景深微笑道："那不如我们对弈一局？"林晓雨欣然同意。`,

  `棋局进行到一半时，天空突然下起大雨。两人<span class="w">withdraw(撤回)📢</span>到附近的咖啡厅躲雨。咖啡厅里弥漫着<span class="w">raw(生的)📢</span>咖啡豆的香气，林晓雨感到心情放松。`,

  `陆景深看着她，问："林老师，你<span class="w">who(谁)📢</span>是你的榜样？"林晓雨想了想，说："是我大学时的导师，她教会了我如何成为一名好老师。"`,

  `陆景深点头："我能感受到你对教育的热情。这也是我选择接管学校的原因——我希望为孩子们创造更好的教育环境。"`,

  `林晓雨被他的话打动。她发现，自己和陆景深之间，有着共同的理想和追求。`,

  `雨停后，两人一起走<span class="w">out(出去)📢</span>咖啡厅。陆景深说："林老师，有件事我想问你。"林晓雨转头："什么事？"陆景深深吸一口气："你愿意和我一起，为这所学校做更多的事吗？"`,

  `林晓雨明白，这不仅是一个工作的邀请，更是一份感情的表白。她点头："我愿意。"`,

  `从那以后，林晓雨和陆景深成为了工作上的搭档，生活中的伴侣。他们一起为学校的发展努力，林晓雨也成为了学校最<span class="w">prominent(杰出的)📢</span>的教师之一。`,

  `某天，林晓雨在办公室里整理文件。她拿起一支<span class="w">pen(钢笔)📢</span>，在纸上写下自己的教学心得。她想起自己刚来学校时的<span class="w">nightmare(噩梦)📢</span>——担心自己无法胜任，担心被学生和家长批评。`,

  `如今，她已经<span class="w">withstand(抵抗)📢</span>住了所有的压力和挑战。她用自己的努力和真诚，证明了自己是一名优秀的教师。`,

  `某天，学校举办了一场教师运动会。林晓雨参加了一个趣味项目——用<span class="w">reel(卷筒)📢</span>传递接力棒。比赛中，她感到自己的衣服有些<span class="w">loose(松的)📢</span>，但她依然全力以赴，最终为团队赢得了第一名。`,

  `陆景深站在场边，为她鼓掌。比赛结束后，他走过来，递给她一瓶水。林晓雨接过水，感到一阵<span class="w">inward(向内的)📢</span>的温暖涌上心头。她想起比赛时自己完全<span class="w">submerge(淹没)📢</span>在运动的快乐中，忘记了所有的压力。`,

  `某天，林晓雨在教室里发现一名学生脸色苍白。她立刻用体温计测量学生的温度，发现<span class="w">thermometer(温度计)📢</span>显示的数值正常，只是学生因为紧张而脸色不佳。她安慰学生："别担心，你会做得很好。"`,

  `学生感激地看着她。林晓雨知道，教师的职责不仅是教授知识，更是关怀学生的<span class="w">spiritual(精神的)📢</span>成长。`,

  `某天傍晚，林晓雨在办公室加班。她听到窗外传来一声<span class="w">whistle(口哨)📢</span>，转头发现陆景深站在门口，手里拿着一束鲜花。他走进来，说："林老师，今晚有空吗？想请你吃饭。"`,

  `林晓雨<span class="w">flush(脸红)📢</span>了。她收拾好东西，和陆景深一起走出办公室。她发现，走廊的灯光将他们的影子拉得很长，就像他们未来的人生路。`,

  `故事的最后，林晓雨常常对学生们说："教育是一场<span class="w">matter(物质)📢</span>关乎心灵的旅程。无论遇到什么困难，都要保持<span class="w">benign(仁慈的)📢</span>的心，用耐心和真诚去面对。"`,

  `她相信，自己已经找到了属于自己的幸福——一份热爱的工作，和一个值得信赖的伴侣。她微笑着望向窗外，那里有阳光，有希望，还有美好的未来。`,

  `某天，林晓雨在教室里看到一个学生正在用<span class="w">fetch(取来)📢</span>的方式整理书桌。她走过去，帮助学生一起整理。学生说："林老师，谢谢您一直以来的关心。"林晓雨微笑："这是我应该做的。"`,

  `她知道，自己选择成为教师是正确的决定。她要用自己的故事，激励更多的学生，勇敢追寻自己的梦想。她相信，只要保持<span class="w">understanding(理解)📢</span>和耐心，就一定能创造出更美好的明天。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>职场恋曲：霸总的温柔教师 · 学习版</title>
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
      <h1>职场恋曲：霸总的温柔教师</h1>
      <p class="sub">职场 · 恋爱 · 霸总</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story64</span>温柔相遇</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>职场恋曲：霸总的温柔教师 · 学习版　|　看故事记单词</footer>
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
<title>职场恋曲：霸总的温柔教师 · 复习版</title>
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
      <h1>职场恋曲：霸总的温柔教师</h1>
      <p class="sub">职场 · 恋爱 · 霸总</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story64</span>温柔相遇</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>职场恋曲：霸总的温柔教师 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '64_职场恋曲_霸总的温柔教师_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '64_职场恋曲_霸总的温柔教师_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：64_职场恋曲_霸总的温柔教师_学习版.html');
console.log('✓ 已生成：64_职场恋曲_霸总的温柔教师_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：职场恋曲：霸总的温柔教师：温柔相遇`);
console.log(`- 题材：职场 · 恋爱 · 霸总`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);