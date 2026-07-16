const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('master/demo/vocabulary_split/vocabulary_011_501-550.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `<span class="w">via(通过)📢</span>驿站快马，一份密信送到了林月手中。信上说，边关告急，敌军来势汹汹。林月看了一眼信上的<span class="w">lip(嘴唇)📢</span>印章——这是她母亲留下的秘密标记。`,

  `林月是林家的<span class="w">dominant(支配的)📢</span>继承人，自幼习武，精通兵法。她的父亲是朝中大将，却因<span class="w">sin(罪恶)📢</span>而被诬陷致死。林月发誓要为父亲洗清冤屈。`,

  `林月立即召见府中<span class="w">handful(少数)📢</span>亲信，商议对策。她制定了周密的<span class="w">tactic(策略)📢</span>：先稳定军心，再寻找真相。她知道，这需要<span class="w">survival(生存)📢</span>智慧。`,

  `三天后，林月带着几名侍女，乔装打扮，<span class="w">interrupt(中断)📢</span>了原本平静的生活。她要亲自前往边关，查看实情。临行前，她在母亲的<span class="w">sculpture(雕像)📢</span>前跪拜许久。`,

  `路途遥远，林月一行人住进了小镇的<span class="w">motel(旅馆)📢</span>。夜深人静时，林月独自坐在窗前，翻看母亲留下的<span class="w">manuscript(手稿)📢</span>。手稿中记载着一个惊天的秘密——关于皇位的<span class="w">five(五)📢</span>位争夺者。`,

  `林月<span class="w">glance(瞥见)📢</span>窗外，发现有人在监视她们。她不动声色，继续看书。她知道，敌人已经盯上了她，但她必须<span class="w">refrain(克制)📢</span>冲动。`,

  `第二天，林月继续赶路。途中，她看到一群士兵正在<span class="w">patrol(巡逻)📢</span>。她故意露出腰间的<span class="w">sheep(羊)📢</span>形玉佩——这是她家族的信物。士兵们立刻放行。`,

  `到达边关后，林月发现军营中<span class="w">disperse(分散)📢</span>着许多谣言，说敌军不可战胜。林月知道，这是有人故意散布恐惧，目的是动摇军心。`,

  `林月找到营中的<span class="w">advice(劝告)📢</span>师爷，询问详情。师爷是父亲的旧部，他告诉林月，这一切都是朝中奸臣的阴谋。他们想让林家<span class="w">death(死)📢</span>无葬身之地。`,

  `林月听后，心中<span class="w">painful(痛苦)📢</span>万分。但她强忍泪水，说："我会查清真相，为父亲报仇。"师爷叹息道："此事<span class="w">hitherto(迄今)📢</span>无人敢管。"`,

  `当晚，林月在<span class="w">supper(晚餐)📢</span>时听到一个消息：敌军中有<span class="w">nineteen(十九)📢</span>名将领是中土人。这意味着有人背叛了国家。林月决定深入调查。`,

  `她化装成商人的女儿，混入敌营。她用<span class="w">fairy(仙女)📢</span>般的舞姿吸引了敌军将领的注意。趁对方不备，她盗取了重要的<span class="w">index(索引)📢</span>文件。`,

  `文件中记载着<span class="w">basic(基本)📢</span>的事实：朝中有一位王爷与敌军勾结，意图谋反。而这位王爷，正是当年诬陷她父亲的幕后黑手。`,

  `林月心中燃起熊熊怒火。她想起父亲临终前的<span class="w">confess(忏悔)📢</span>："我一生为国尽忠，却落得如此下场。"林月发誓，绝不让父亲的冤屈沉入海底。`,

  `回到中土后，林月将证据呈交给皇帝。皇帝大怒，立即下令调查。然而，那位王爷已经得知消息，开始<span class="w">threaten(威胁)📢</span>林月的安全。`,

  `林月并不害怕。她拿出母亲留下的宝剑，剑身上刻着"<span class="w">four(四)📢</span>字箴言"："忠义千秋"。她知道，自己肩负着家族的荣誉和国家的安危。`,

  `林月开始<span class="w">build(建立)📢</span>自己的势力。她招募了一批忠心耿耿的将士，准备与王爷<span class="w">choice(选择)📢</span>决战。她的<span class="w">idea(想法)📢</span>是：以正义之师，破叛贼之军。`,

  `王爷派出刺客，企图<span class="w">physical(身体)📢</span>消灭林月。林月凭借高超的武艺，一次次化解危机。她的<span class="w">experience(经验)📢</span>告诉她，真正的危险还未到来。`,

  `林月决定<span class="w">date(约会)📢</span>王爷的女儿——一位表面温婉，实则心机深沉的女子。林月想通过她，了解更多关于王爷的计划。`,

  `见面时，王爷的女儿故意说起一些<span class="w">petty(琐碎)📢</span>的小事，试图试探林月。林月表现得很<span class="w">moderate(温和)📢</span>，实则暗中观察。`,

  `林月终于找到了突破口。王爷的女儿无意中透露，王爷将在<span class="w">forever(永远)📢</span>纪念日那天发动政变。林月立即将消息传给皇帝。`,

  `政变之夜，林月带领亲信，攻入王爷府邸。她看到王爷正准备登基，而他的<span class="w">mammal(哺乳动物)📢</span>宠物——一只猎豹，守在身旁。林月冷笑："你的<span class="w">grease(油脂)📢</span>护身符救不了你。"`,

  `王爷大惊，命令猎豹攻击。林月一剑斩杀猎豹，王爷惊恐万分。林月说："你的<span class="w">sin(罪恶)📢</span>到此为止。"她将王爷押送朝廷。`,

  `经此一战，林月名震天下。皇帝亲自接见她，称赞她是国家的<span class="w">triumph(胜利)📢</span>象征。林月请求皇帝为父亲平反。`,

  `皇帝同意了林月的请求，恢复了林家的名誉。林月将母亲的<span class="w">manuscript(手稿)📢</span>交给皇帝，说："这是母亲留下的<span class="w">content(内容)📢</span>，请您过目。"`,

  `皇帝看完手稿，感慨万分。原来林月的母亲曾是前朝公主，因政变而隐姓埋名。林月<span class="w">himself(他自己)📢</span>的身世，竟是如此不凡。`,

  `皇帝封林月为<span class="w">dominant(统治)📢</span>公主，地位仅次于皇后。林月却婉拒了封号，她说："我只愿为父亲报仇，无心权势。"`,

  `林月回到家乡，继续经营家族的<span class="w">agriculture(农业)📢</span>产业。她用赚来的钱，资助贫困的学子和伤残的士兵。她的善举传遍了四方。`,

  `有一天，林月在<span class="w">cinema(影院)📢</span>看戏时，遇到了一位<span class="w">cautious(谨慎)📢</span>的年轻将军。他自称是林月父亲的学生，特地来拜访。`,

  `林月与将军畅谈，发现他<span class="w">least(最少)📢</span>的愿望，就是守护林家。林月心中一暖，决定与他合作，共同守卫边疆。`,

  `从此，林月和将军联手，多次击退敌军。他们用<span class="w">navigation(航海)📢</span>技术，开辟了新的贸易路线，让边关百姓的生活逐渐富足。`,

  `林月的故事传遍了整个王朝。人们称赞她是"巾帼不让须眉"的典范。她的<span class="w">technique(技巧)📢</span>和智慧，成为了后人学习的榜样。`,

  `林月最终选择了简单的生活，她不再追求权力，而是将精力放在帮助他人上。她常说："真正的强者，不是<span class="w">spray(喷射)📢</span>权力，而是守护弱者。"`,

  `多年后，林月安详离世。她的墓前竖起了一座<span class="w">sculpture(雕像)📢</span>，雕刻着她持剑而立的身影。后人每当谈起林月，都会感叹："她用一生诠释了什么是真正的忠诚与勇敢。"`,

  `林月的<span class="w">choice(选择)📢</span>证明了，真正的强者不在于权力和地位，而在于内心的坚定与对正义的执着。她的故事，将永远流传在这片土地上。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>巾帼英雄 · 学习版</title>
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
      <h1>巾帼英雄</h1>
      <p class="sub">大女主 · 古代 · 权谋</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story11</span>复仇之路</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>巾帼英雄 · 学习版　|　看故事记单词</footer>
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
<title>巾帼英雄 · 复习版</title>
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
      <h1>巾帼英雄</h1>
      <p class="sub">大女主 · 古代 · 权谋</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story11</span>复仇之路</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>巾帼英雄 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '11_巾帼英雄_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '11_巾帼英雄_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：11_巾帼英雄_学习版.html');
console.log('✓ 已生成：11_巾帼英雄_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：巾帼英雄：复仇之路`);
console.log(`- 题材：大女主 · 古代 · 权谋`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);