const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_018_851-900.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `苏晴盯着桌上那份<span class="w">available(可用的)📢</span>文件，手指微微颤抖。这是一份婚姻契约书，甲方是盛世集团的掌权人陆瑾言，乙方则是她这个普通<span class="w">citizen(公民)📢</span>。命运的齿轮从这一刻开始转动，她的人生即将被改写。`,

  `三个月前，苏晴还是一名普通的大学毕业生，在南方<span class="w">southern(南方的)📢</span>城市的一家小型企业工作。她<span class="w">personal(个人的)📢</span>生活简单，却因为父亲突发<span class="w">malignant(恶性的)📢</span>疾病而陷入困境。高额的手术费让她几乎崩溃，就在她快要<span class="w">lose(失去)📢</span>希望时，陆瑾言出现了。`,

  `陆瑾言提出一个条件：签下契约，成为他名义上的妻子一年，他会承担父亲全部的手术费用。苏晴知道这个男人在商界<span class="w">notorious(臭名昭著的)📢</span>，以冷酷无情著称，但她别无选择。`,

  `签完字的那一刻，苏晴感觉自己像被关进了一个精密运转的<span class="w">module(模块)📢</span>中，每个细节都被精心计算。她看着陆瑾言的侧脸，发现他眉宇间竟与年轻时的父亲有几分<span class="w">resemble(相似)📢</span>，这让她心头微微一颤。陆瑾言的律师递给她一把钥匙："这是您在陆府的<span class="w">suite(套间)📢</span>钥匙，请您今晚搬入。"苏晴点头，心中却忐忑不安。`,

  `陆家别墅坐落在城市的繁华地段，宛如一座现代<span class="w">classic(经典的)📢</span>建筑杰作。苏晴站在玄关，看着眼前的一切，感到强烈的<span class="w">contrast(对比)📢</span>——这里和她简陋的出租屋简直是两个世界。管家走过来，礼貌地说："夫人，请随我来。"苏晴深吸一口气，跟着她走进电梯，按下了<span class="w">lift(电梯)📢</span>按钮。`,

  `推开房门，苏晴被眼前的景象惊艳到了。房间里摆放着各种精致的<span class="w">cube(立方体)📢</span>形水晶灯，地板上的图案像一幅精美的<span class="w">mosaic(马赛克)📢</span>。她慢慢习惯了这里的生活，每天早晨，佣人都会送来一杯牛奶和烤面包，有时候还有<span class="w">quart(夸脱)📢</span>装的新鲜果汁。`,

  `契约中明确写着，陆瑾言<span class="w">restrict(限制)📢</span>她的一切对外活动。苏晴不能随意出门，不能接受采访，不能向外透露两人关系。这些条款让她感到窒息，但她知道这是契约的代价，<span class="w">henceforth(今后)📢</span>她必须遵守。`,

  `陆瑾言很少出现在家里，他忙着处理公司的各种<span class="w">dispute(争端)📢</span>。苏晴从新闻中了解到，盛世集团正在进行一项重要的<span class="w">application(申请)📢</span>项目，涉及新型能源材料的研发。据说陆瑾言投入了<span class="w">great(巨大的)📢</span>资金，聘请了顶尖的<span class="w">chemist(化学家)📢</span>团队。`,

  `一个月后，陆瑾言突然回来，通知苏晴参加一场重要晚宴。苏晴有些<span class="w">upset(心烦意乱)📢</span>，她完全没有准备。陆瑾言看着她紧张的样子，淡淡地说："只是一场普通的商业宴会，你<span class="w">merely(仅仅)📢</span>需要站在我身边，保持安静就好。"苏晴点头，努力让自己平静下来。`,

  `晚宴上，苏晴穿着一袭深蓝色礼服，气质优雅。陆瑾言走在她身旁，为她介绍各路商界名流。突然，一个身穿军装的男人走过来，他的军衔是<span class="w">colonel(上校)📢</span>，气场十足。陆瑾言叫了一声"三叔"，苏晴这才认出，这位竟是陆瑾言的三叔陆震东。`,

  `陆震东打量着苏晴，眼神中带着审视："你就是瑾言的新婚妻子？听说你父亲生病了。"苏晴点头，感到有些紧张。陆震东继续说："陆家的规矩，<span class="w">customary(习惯的)📢</span>来说，新媳妇要经过家族长辈的认可。你打算如何证明自己？"苏晴愣住，不知如何回答。`,

  `陆瑾言上前一步，挡在苏晴面前："三叔，今天是商业宴会，家族事务<span class="w">might(可能)📢</span>不适合在这里讨论。"陆震东冷笑一声："瑾言，你什么时候学会替女人说话了？"周围顿时安静下来，气氛变得<span class="w">turbulent(动荡的)📢</span>。`,

  `苏晴深吸一口气，鼓起勇气说："三叔，我虽然不是豪门出身，但我愿意学习。请给我时间证明自己。"陆震东挑眉："好，我给你机会。下个月的公司慈善晚会，你来主持。"苏晴点头答应，心跳如擂鼓。`,

  `晚宴结束后，陆瑾言开车带苏晴回家。车厢里一片沉默，苏晴忍不住问："为什么帮我说话？"陆瑾言目视前方，淡淡地回答："你是我的妻子，我不喜欢别人对你<span class="w">disregard(忽视)📢</span>。"苏晴心中一暖，原来这个冷酷男人也有温柔的一面。`,

  `接下来的日子，苏晴开始为慈善晚会做准备。她查阅各种资料，了解陆家的历史和商业版图。她发现陆家的创始<span class="w">cradle(摇篮)📢</span>就在这座南方城市，一百多年前，陆家的祖先只是一家小<span class="w">van(货车)📢</span>运输公司的老板，靠着勤劳和智慧，一步步建立起如今的商业帝国。`,

  `慈善晚会当天，苏晴穿着一袭白色礼服，举止优雅。她站在台上，面对台下数百位嘉宾，开始讲述公司的慈善项目。她用流利的语言描绘了项目的愿景，声音温柔却坚定。许多嘉宾都为她鼓掌，陆瑾言站在一旁，眼中闪过一丝欣赏。`,

  `晚会进行到一半，突然发生了一个意外。一位嘉宾不小心打翻了酒杯，"砰"的一声<span class="w">bang(砰)📢</span>响，引得众人侧目。苏晴反应迅速，立刻吩咐服务员清理，并转移话题，继续介绍项目。这种临场应变能力，让在场的人都刮目相看。`,

  `晚会结束后，陆震东走到苏晴面前："你表现得<span class="w">well(好)📢</span>，比我想象中强。不过，真正融入陆家，还需要更多时间。"苏晴点头致谢："谢谢三叔指点。"陆震东转身离开，嘴角微微上扬。`,

  `陆瑾言开车回家，车厢里依然安静。苏晴忍不住问："你觉得我今晚表现得怎么样？"陆瑾言转头看了她一眼，嘴角勾起一抹微笑："很好。"苏晴有些惊讶，这是她第一次听到陆瑾言的夸奖。`,

  `回到家，陆瑾言突然开口："你想去书房坐坐吗？"苏晴愣了一下，点头答应。书房里摆满了各种书籍，墙上挂着几幅画，<span class="w">depict(描绘)📢</span>着陆家历代人物的故事。陆瑾言给她倒了一杯红酒，两人第一次坐下来，聊起了天。`,

  `苏晴发现陆瑾言其实是个很有趣的人。他虽然外表冷酷，但内心细腻。他告诉她，自己曾经梦想成为一名<span class="w">science(科学)📢</span>研究员，但家族责任让他不得不接管企业。苏晴听得入神，第一次看到他卸下防备的一面。`,

  `陆瑾言突然问："你觉得我是个什么样的人？"苏晴想了想，认真回答："外表冷漠，但内心温暖。虽然你不爱表达，但你能让我感到安心。"陆瑾言怔住，半晌才说："我以为所有人都觉得我是个坏人。"苏晴摇头："人不应该被标签定义，<span class="w">gender(性别)📢</span>、身份、财富，这些都不重要，重要的是你心里有什么。"陆瑾言沉默了许久，然后轻声说："谢谢你。"`,

  `那晚之后，陆瑾言开始频繁回家。有时候他会带苏晴出去吃饭，有时候会开车带她兜风。苏晴慢慢<span class="w">accustomed(习惯的)📢</span>了这种生活，甚至开始期待每一次见面。她发现自己正在慢慢喜欢上这个男人。`,

  `一次晚餐，陆瑾言带苏晴去了一家私房菜馆。菜馆老板是个有趣的老头，养了一只<span class="w">frog(青蛙)📢</span>做宠物。苏晴被逗得咯咯笑，陆瑾言在一旁看着，眼中满是温柔。老板端上主菜，是一只烤<span class="w">duck(鸭)📢</span>，香气四溢。苏晴吃得开心，陆瑾言却只看着她，几乎没动筷子。`,

  `吃完饭，两人在江边散步。江水波光粼粼，<span class="w">pour(倾泻)📢</span>着月光。陆瑾言突然开口："苏晴，我想我们可以不再只是契约关系。"苏晴心跳加速，抬头看他。陆瑾言继续说："这一年，我发现你很特别。你坚强、善良，不像我见过的那些女人。"苏晴低下头，脸颊发烫。`,

  `陆瑾言伸出手，轻轻握住苏晴的手："给我一个机会，<span class="w">whom(谁)📢</span>都不要告诉，我们重新开始，好吗？"苏晴抬起头，看到陆瑾言眼中闪烁着真诚的光芒。她深吸一口气，轻声说："好。"陆瑾言笑了，那是苏晴见过最温暖的笑容。`,

  `从那以后，两人的关系发生了变化。陆瑾言不再冷漠，开始主动关心苏晴。他带她去公司，介绍她认识自己的<span class="w">counterpart(对应的人)📢</span>和合作伙伴。苏晴也努力学习商业知识，希望能帮他分担压力。`,

  `一天，陆瑾言邀请苏晴参观公司研发中心。这里聚集了众多顶尖科学家，正在研究一种新型高<span class="w">voltage(电压)📢</span>材料。陆瑾言耐心地给苏晴讲解，苏晴听得入迷。她发现，陆瑾言对科学的热爱从未消失，只是被深埋在心里。`,

  `实验室里，一位<span class="w">resistant(抵制的)📢</span>老教授正在给学生们讲解实验原理。苏晴在一旁认真听讲，不时提问。教授对她的热情很欣赏，笑着说："陆总，您夫人很有<span class="w">zeal(热情)📢</span>啊！"陆瑾言微微点头，眼中满是骄傲。`,

  `苏晴开始理解陆瑾言的世界，也开始<span class="w">comprehend(理解)📢</span>他的责任和压力。她意识到，契约婚姻背后，陆瑾言其实承受着常人难以想象的负担。她想帮他，想成为他真正的依靠。`,

  `一个月后，盛世集团面临一场危机。有竞争对手指控公司研发的新材料存在安全隐患，要求停止生产。一时间，公司陷入舆论风暴。陆瑾言被迫出席新闻发布会，面对<span class="w">jury(评审团)📢</span>和媒体的质疑。`,

  `苏晴从新闻中看到这一幕，心如刀绞。她决定站出来，用自己学到的知识帮助陆瑾言。她整理了所有相关资料，分析了竞争对手的<span class="w">equivalent(对等的)📢</span>产品，发现了对方的漏洞。`,

  `当晚，苏晴敲开陆瑾言的书房门。陆瑾言抬头，看到她手中的文件夹："这是什么？"苏晴走过去："我发现对方的指控存在问题，这是我整理的证据。"陆瑾言接过文件，一页页翻看，眼中闪过惊讶。`,

  `陆瑾言看完文件，站起身走到苏晴面前："你怎么做到的？"苏晴微笑："我想帮你。这一年，我学到了很多，也看到了你的努力。我希望能成为你的力量，而不仅仅是一个契约妻子。"陆瑾言怔住，随即紧紧抱住苏晴。`,

  `第二天，陆瑾言带着苏晴提供的证据出席发布会。他清晰地<span class="w">tempt(诱惑)📢</span>对方露出破绽，最终证明了公司的清白。发布会结束后，陆瑾言走到苏晴面前，当着所有媒体的面说："感谢我的妻子，没有她，就没有今天的盛世。"全场哗然，苏晴却感到无比幸福。`,

  `从那以后，苏晴正式成为盛世集团的一员。她用自己的能力和智慧，帮助公司度过一个又一个难关。陆瑾言也彻底改变了，变得温柔体贴，把苏晴当成生命中最重要的存在。`,

  `契约到期的那一天，陆瑾言带苏晴去了他们第一次见面的地方。他拿出一枚戒指，单膝跪地："苏晴，契约结束了，但我对你的爱才刚刚开始。你愿意嫁给我吗？不是契约，而是真心。"苏晴泪流满面，用力点头："我愿意。"`,

  `陆瑾言站起身，将戒指套在苏晴手上。夕阳洒下，两人的身影交织在一起。苏晴知道，这一年的契约婚姻，不是终点，而是她人生最<span class="w">pleasure(快乐)📢</span>的起点。她终于找到了属于自己的幸福。`,

  `婚后，苏晴继续在盛世集团工作，成为陆瑾言最信任的伙伴。她用自己的努力证明，一个女人<span class="w">might(可能)📢</span>出身平凡，但只要有勇气和坚持，一样能成为人生的主角。`,

  `陆瑾言常常感慨，当初签下契约，以为是权衡利弊的结果，没想到却收获了一生的挚爱。他看着苏晴忙碌的身影，心中满是温暖。命运像一场精妙的棋局，每一步都暗藏玄机。而他最庆幸的，就是当年没有错过她。`,

  `苏晴也常常回想这一路。从签订契约的那一刻起，她以为自己<span class="w">lose(失去)📢</span>了自由，却没想到，真正的自由，是找到那个愿意和你并肩前行的人。契约甜妻，最终成为了总裁真正的掌心宠。这大概就是命运最温柔的安排。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>契约甜妻：总裁的掌心宠 · 学习版</title>
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
      <h1>契约甜妻：总裁的掌心宠</h1>
      <p class="sub">契约 · 甜宠 · 霸总</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story18</span>契约婚姻中的爱情故事</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>契约甜妻：总裁的掌心宠 · 学习版　|　看故事记单词</footer>
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
<title>契约甜妻：总裁的掌心宠 · 复习版</title>
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
      <h1>契约甜妻：总裁的掌心宠</h1>
      <p class="sub">契约 · 甜宠 · 霸总</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story18</span>契约婚姻中的爱情故事</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>契约甜妻：总裁的掌心宠 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '18_契约甜妻_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '18_契约甜妻_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：18_契约甜妻_学习版.html');
console.log('✓ 已生成：18_契约甜妻_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：契约甜妻：总裁的掌心宠`);
console.log(`- 题材：契约 · 甜宠 · 霸总`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);

// 验证词汇使用情况
const allWords = ['available', 'classic', 'might', 'science', 'resemble', 'mosaic', 'lose', 'chemist', 'jury', 'bang', 'suite', 'citizen', 'cube', 'turbulent', 'disregard', 'voltage', 'frog', 'well', 'resistant', 'colonel', 'malignant', 'customary', 'pour', 'dispute', 'notorious', 'personal', 'gender', 'great', 'restrict', 'zeal', 'southern', 'henceforth', 'module', 'lift', 'pleasure', 'depict', 'accustomed', 'merely', 'quart', 'upset', 'application', 'equivalent', 'contrast', 'cradle', 'tempt', 'duck', 'whom', 'van', 'counterpart', 'comprehend'];

const storyText = storyParagraphs.join(' ');
console.log(`\n词汇使用检查：`);
allWords.forEach(word => {
  const regex = new RegExp(`<span class="w">${word}\\(`, 'i');
  const found = storyText.match(regex);
  if (found) {
    console.log(`✓ ${word}`);
  } else {
    console.log(`✗ ${word} 未使用！`);
  }
});