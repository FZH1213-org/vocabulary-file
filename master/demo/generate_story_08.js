const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('master/demo/vocabulary_split/vocabulary_008_351-400.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `周杰是一名考古学家，他的一生都在追寻古老的<span class="w">fossil(化石)📢</span>。在博物馆的展厅里，他经常凝视着那些千万年前的生物遗骸，思考着时间的<span class="w">irony(讽刺)📢</span>——曾经称霸地球的生物，如今只剩下冰冷的石质外壳。`,

  `这天，周杰收到了一封神秘的信件，信中的<span class="writing">writing(字迹)📢</span>非常潦草。信上说他祖母的坟墓出现了异常现象。周杰感到十分<span class="w">odd(奇怪)📢</span>，因为祖母去世已有十年，为何现在才出现问题？`,

  `周杰来到家乡的<span class="w">cemetery(坟墓)📢</span>。这是一个雾气弥漫的清晨，<span class="w">mist(薄雾)📢</span>笼罩着整个墓园。他在祖母的墓前停下，墓碑上刻着庄重的<span class="w">grave(坟墓)📢</span>文字，记载着祖母的一生。`,

  `墓地管理员告诉他，最近有人在夜间看到祖母墓前出现奇异的光芒。周杰拿出<span class="w">microphone(话筒)📢</span>开始录音，记录下所有细节。他决定在<span class="w">daytime(白天)📢</span>和夜晚分别观察。`,

  `调查过程中，周杰发现祖母生前曾参与一个秘密组织，这个组织致力于保护一件珍贵的<span class="w">product(产物)📢</span>——一本记载着远古秘密的手稿。祖母将它藏在了一个特殊的地方。`,

  `周杰想起祖母生前总是教导他要保持<span class="w">upright(正直)📢</span>的品格，不要被世俗的<span class="w">vanity(虚荣心)📢</span>所迷惑。他现在理解了祖母话中的深意——有些秘密，值得用生命守护。`,

  `夜幕降临，周杰躲在墓园角落，等待线索。忽然，他看到一个<span class="w">rectangle(矩形)📢</span>的光影从墓碑下方透出。他悄悄靠近，发现墓碑后方有一个隐蔽的机关。`,

  `就在这时，一个黑影突然出现。周杰看清了对方的面容——竟是祖母的老朋友，<span class="w">undergraduate(大学生)📢</span>时代就与祖母相识的李老先生。李老先生看到周杰，神色变得复杂。`,

  `"周杰，你祖母<span class="w">assign(分配)📢</span>给你一个任务。"李老先生说，"她希望你能守护这份遗产，不要让<span class="w">evil(邪恶)📢</span>势力得到它。"周杰追问那是什么，李老先生却摇头说："时机未到。"`,

  `周杰感到十分<span class="w">vague(模糊)📢</span>，他不明白祖母为何从未对他提起这些。他想起小时候，祖母经常<span class="w">hum(哼唱)📢</span>一支奇怪的歌谣，当时他只当是祖母的习惯，现在看来，那歌谣似乎隐藏着某种线索。`,

  `李老先生告诉周杰，那个秘密组织代号为"<span class="w">symbol(符号)📢</span>"，他们世代守护着一件关乎人类未来的宝物。祖母是组织的核心成员，她将位置线索藏在了一首古老的<span class="w">script(剧本)📢</span>中。`,

  `周杰回到家，翻找祖母的遗物。在一本旧书的夹页中，他发现了一张泛黄的纸张，上面用<span class="w">graceful(优美的)📢</span>字体写着："当晨光穿透<span class="w">waist(腰)📢</span>之地，答案自会出现。"周杰反复思考这句话的含义。`,

  `接下来的日子，周杰频繁<span class="w">participate(参与)📢</span>各种学术会议，试图寻找更多线索。他注意到一个<span class="w">frequent(频繁)📢</span>出现在他身边的女人——她自称是<span class="w">reporter(记者)📢</span>，名为林晓。`,

  `周杰对林晓保持警惕。他能感受到她的<span class="w">persuasion(说服力)📢</span>很强，总是试图从他口中套取信息。但他始终<span class="w">deny(否认)📢</span>自己知道任何秘密，并且暗中观察她的一举一动。`,

  `一天，周杰在整理资料时，发现祖母曾留下关于"<span class="w">holiday(假期)📢</span>"的笔记。内容提到，每个节日期间，<span class="w">generation(世代)📢</span>守护者都会在特定地点举行秘密聚会。下周就是<span class="w">prior(在...之前)📢</span>约定的清明祭祖日。`,

  `周杰意识到，祖母提到的"腰之地"可能指的是山脉的腰部。他查阅地图，发现家乡附近有一座形似<span class="w">rectangle(矩形)📢</span>的山峰，当地人称之为"方山"，山腰处有一座古老的神庙。`,

  `清明前夜，周杰出发前往方山。他在<span class="w">cafeteria(自助食堂)📢</span>简单吃了点东西后，独自上山。山间的雾气越来越浓，他能听到远处传来的奇怪<span class="w">sneeze(喷嚏)📢</span>声——不，那不是喷嚏，是某种信号。`,

  `到达山腰时，周杰看到一个古老的<span class="w">establishment(建筑)📢</span>。神庙的门窗早已残破，但内部依然保持完好。他推门而入，发现里面站满了人——正是祖母所在的秘密组织成员。`,

  `李老先生看到周杰，点了点头："你终于来了。根据<span class="w">conclusion(结论)📢</span>，你通过<span class="w">option(选择)📢</span>找到了这里，这说明你有资格继承守护者的身份。"`,

  `周杰被带到一个石台前，上面放着一块古老的<span class="w">fossil(化石)📢</span>。这块化石形状<span class="w">apt(恰当)📢</span>地呈现为一个完美的圆球，表面刻满了神秘的符文。李老先生说："这是'时间之心'，传说它能<span class="w">transmit(传输)📢</span>远古智慧。"`,

  `周杰按照指示，将手掌放在化石上。瞬间，他感到一股强大的能量涌入体内。他看到了<span class="w">innumerable(无数的)📢</span>画面——远古文明的兴衰、人类未来的<span class="w">possibility(可能性)📢</span>、以及许多<span class="w">remain(剩余)📢</span>未解的谜题。`,

  `仪式结束后，李老先生告诉周杰："组织需要你<span class="w">dedicate(奉献)📢</span>一生来守护这个秘密。你将获得所有<span class="w">resource(资源)📢</span>的支持，但必须<span class="w">suppress(抑制)📢</span>内心的贪婪和<span class="w">vanity(虚荣)📢</span>，时刻保持<span class="w">upright(正直)📢</span>。"`,

  `周杰郑重地点头。从那天起，他正式成为组织的一员。他明白，这份使命需要他做出<span class="w">concession(让步)📢</span>——放弃普通人的生活，但换来的是守护人类未来的重任。`,

  `回到城市后，周杰继续他的考古工作。白天，他是博物馆的<span class="w">witness(见证)📢</span>者，为公众讲解历史；夜晚，他研究化石中的秘密，解码远古智慧的<span class="w">meaning(意义)📢</span>。`,

  `林晓再次找到周杰，这次她带来了<span class="w">fabricate(编造)📢</span>的理由："周教授，我听说您在研究一件特殊的文物，能分享一下吗？"周杰平静地回答："只是普通的研究，没什么特别的。"`,

  `周杰知道，林晓背后一定有人指使。他开始暗中调查，发现一个名为"<span class="w">slave(奴隶)📢</span>"的地下组织正在寻找时间之心。这个组织的目标是利用远古智慧获得绝对的权力。`,

  `为了保护秘密，周杰不得不做出艰难的决定——他向组织申请<span class="w">levy(征收)📢</span>更多资源，加强方山神庙的安保措施。同时，他<span class="w">nurture(培养)📢</span>了几名年轻人，准备让他们成为下一代的守护者。`,

  `一天，周杰收到消息：林晓已经找到方山的<span class="w">clue(线索)📢</span>。他必须在她到达之前<span class="w">chop(砍)📢</span>断所有追踪路径。他带着几名助手，连夜清理了神庙附近的所有痕迹。`,

  `当林晓最终到达方山时，她只看到一座破败的神庙。她站在神庙前，脸上露出<span class="w">miserable(痛苦)📢</span>的表情——她知道，自己再次失败了。而周杰，则站在远处默默观察，心中<span class="w">opinion(看法)📢</span>坚定。`,

  `岁月流逝，周杰渐渐老去。他<span class="w">conclude(得出)📢</span>一个道理：真正的守护者，不是靠力量，而是靠信念。他将所有的知识记录在新的<span class="w">script(手稿)📢</span>中，准备交给下一代。`,

  `在周杰最后的岁月里，他经常去祖母的坟前祭拜。他会带着一束鲜花，在墓前轻声说："祖母，我没有辜负您的期望。我会继续守护下去，直到生命的最后一刻。"`,

  `周杰的故事在组织内部流传开来，成为一段传奇。他的名字被刻在神庙的墙壁上，永远<span class="w">remain(留存)📢</span>在守护者的史册中。后来者都知道，正是他的坚持和牺牲，才让这份古老的秘密得以延续。`,

  `每当夜深人静，周杰都会想起祖母哼唱的那首歌谣。现在他明白了，那不仅仅是一首歌，更是一份传承——一份关于责任、关于信念、关于守护的永恒承诺。这份承诺，将伴随他走过一生，也将传递给每一个未来的守护者。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>时间守护者 · 学习版</title>
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
      <h1>时间守护者</h1>
      <p class="sub">悬疑 · 探秘 · 传承</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story08</span>古老的秘密</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>时间守护者 · 学习版　|　看故事记单词</footer>
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
<title>时间守护者 · 复习版</title>
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
      <h1>时间守护者</h1>
      <p class="sub">悬疑 · 探秘 · 传承</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story08</span>古老的秘密</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>时间守护者 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '08_时间守护者_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '08_时间守护者_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：08_时间守护者_学习版.html');
console.log('✓ 已生成：08_时间守护者_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：时间守护者：古老的秘密`);
console.log(`- 题材：悬疑 · 探秘 · 传承`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);