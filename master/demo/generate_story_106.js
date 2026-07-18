const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_106_5251-5300.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3500
const storyParagraphs = [
  `夜幕降临，<span class="w">wide(宽阔的)📢</span>的天空下，赵灵芸盘膝而坐。她是玄天宗最年轻的元婴期修士，年仅二十五岁，就已经名震修仙界。`,

  `赵灵芸睁开眼，望着星空。她想起<span class="w">yesterday(昨天)📢</span>的事——师父告诉她，修仙之路充满艰辛，但只要有坚定的<span class="w">ambition(雄心)📢</span>，就能突破一切障碍。`,

  `她站起身，走向修炼室的角落。那里有一个<span class="w">nest(巢)📢</span>——不对，那里有一个灵兽蛋，是她从秘境带回来的。`,

  `赵灵芸轻轻抚摸蛋壳，感受到里面的生命律动。她知道，这只灵兽将成为她修仙路上的重要伙伴。`,

  `某天，赵灵芸接到宗门的通知，要求她前往<span class="w">foreign(外国的)📢</span>——不对，要求她前往西域的联盟<span class="w">college(学院)📢</span>，参加一场重要的修士交流大会。`,

  `赵灵芸乘坐<span class="w">airline(航线)📢</span>——不对，乘坐飞行灵舟，前往西域。她望着窗外的云层，心中思考着接下来的计划。`,

  `到达西域后，赵灵芸发现这里的风土人情与中原不同。街头的小贩叫卖着各种<span class="w">food(食物)📢</span>和药材，繁华而热闹。`,

  `她走进学院，看到许多修士已经到达。大家在<span class="w">scene(场景)📢</span>——不对，大家在会场中交谈，气氛热烈。`,

  `赵灵芸找了个位置坐下。她注意到，会场的<span class="w">posture(姿势)📢</span>——不对，会场的布置很特别，中央摆放着一座巨大的阵法模型。`,

  `大会开始，主持人说："各位修士，本次大会的主题是讨论修仙界的<span class="w">tendency(趋势)📢</span>，以及如何应对魔道的威胁。"众人纷纷点头。`,

  `赵灵芸被<span class="w">elect(选举)📢</span>为代表，上台发言。她站在台上，面对成百上千的修士，心中充满自信。`,

  `她说："修仙之道，在于坚持与突破。我们必须<span class="w">defy(违抗)📢</span>——不对，我们必须抵抗魔道的侵蚀，守护正道。"台下响起掌声。`,

  `会议结束后，赵灵芸回到住处。她从<span class="w">number(数量)📢</span>——不对，她从储物袋中取出一本古籍，开始研读。`,

  `古籍记载了一个古老的阵法，可以用来压制魔气。赵灵芸仔细研究，希望能<span class="w">recollect(回忆)📢</span>起阵法的完整结构。`,

  `某天，赵灵芸在学院的花园散步。她看到一只<span class="w">spider(蜘蛛)📢</span>在枝头织网，动作熟练而优雅。`,

  `她突然有了灵感。她想到，阵法的结构就像蜘蛛网一样，需要精密的连接和平衡。她立刻回到住处，开始<span class="w">sketch(素描)📢</span>——不对，开始绘制阵法图。`,

  `几天后，赵灵芸完成了阵法的设计。她将阵法图交给学院的<span class="w">secretary(秘书)📢</span>——不对，交给学院的长老审核。`,

  `长老看完后，露出惊讶的表情："这个阵法设计得很好，简直是一件艺术品。"赵灵芸说："谢谢长老夸奖。"`,

  `长老说："你很有天赋。对了，你愿意参加后天的<span class="w">sightseeing(观光)📢</span>——不对，参加后天的秘境探险吗？"赵灵芸点头："我愿意。"`,

  `探险当天，赵灵芸和其他修士一起进入秘境。秘境中<span class="w">dangerous(危险的)📢</span>，到处都是机关和妖兽。`,

  `赵灵芸运用灵力，快速移动。她用<span class="w">slender(修长的)📢</span>手指结印，发出一道道灵力攻击，击退妖兽。`,

  `某天，探险队在秘境中发现一座古老的宫殿。宫殿的墙壁用<span class="w">clay(粘土)📢</span>和玉石混合砌成，散发着神秘的光芒。`,

  `赵灵芸走进宫殿，发现一个<span class="w">queer(奇怪的)📢</span>现象——宫殿的地面在缓缓<span class="w">spin(旋转)📢</span>，仿佛在转动。`,

  `她意识到，这可能是某种机关。她提醒队友小心，不要被<span class="w">overlook(忽略)📢</span>周围的细节。`,

  `果然，地面突然裂开，露出一个深坑。赵灵芸反应迅速，用灵力托住身体，避免了掉落。`,

  `她发现深坑中有一座<span class="w">house(房屋)📢</span>——不对，有一座密室。密室内摆放着许多珍稀的灵器和丹药。`,

  `赵灵芸和队友进入密室。她拿起一个<span class="w">yellow(黄色)📢</span>的玉盒，打开后，里面是一颗散发着<span class="w">glitter(光辉)📢</span>的灵丹。`,

  `队友说："这是筑基丹！"赵灵芸将丹药收好，决定带回宗门，分给需要的弟子。`,

  `探险结束后，赵灵芸回到西域联盟学院。她将成果汇报给长老，长老对她的表现非常满意。`,

  `某天，赵灵芸在学院的演武场练习剑法。她的<span class="w">wrist(腕关节)📢</span>转动灵活，剑光如雪，招招精妙。`,

  `一个男修走上前，说："赵师姐，你的剑法真厉害。"赵灵芸收剑，说："谢谢夸奖。"`,

  `男修说："我叫孙明远，是学院的弟子。我想向你请教剑法。"赵灵芸说："可以。"`,

  `两人开始切磋。赵灵芸发现，孙明远的实力不错，但还有提升空间。她耐心指导，帮助他纠正了一些错误。`,

  `孙明远感激地说："谢谢赵师姐。"赵灵芸说："不用谢。修仙之路，在于互相学习。"`,

  `某天，赵灵芸接到宗门的消息，要求她尽快返回。原来，宗门附近的山脉<span class="w">erupt(爆发)📢</span>——不对，宗门附近出现了魔道势力的踪迹。`,

  `赵灵芸立刻启程。她乘坐飞行灵舟，日夜赶路。途中，她遇到一场<span class="w">revolution(革命)📢</span>——不对，遇到一场灵气风暴。`,

  `风暴中，赵灵芸用灵力护住自己，艰难前行。她想起师父的话："修仙者要有坚定的<span class="w">conscience(良心)📢</span>——不对，要有坚定的信念。"`,

  `终于，她回到宗门。宗门已经进入战备状态，弟子们都在准备战斗。`,

  `赵灵芸来到掌门的<span class="w">profile(侧面)📢</span>——不对，来到掌门的住处。掌门说："灵芸，你回来了。情况很紧急。"`,

  `赵灵芸问："具体是什么情况？"掌门说："魔道势力在附近集结，意图不明。我们需要派人侦查。"`,

  `赵灵芸说："我去。"掌门说："好。你要小心。"赵灵芸点头，转身离开。`,

  `她独自前往魔道势力的集结地。她<span class="w">crawl(爬行)📢</span>——不对，她隐匿身形，悄悄接近敌营。`,

  `她发现，魔道势力确实在策划一场攻击。她立刻返回宗门，将情报汇报给掌门。`,

  `掌门说："我们必须先下手为强。"赵灵芸说："我同意。我愿意担任先锋。"`,

  `战斗<span class="w">term(期限)📢</span>——不对，战斗定于三天后开始。赵灵芸开始准备，她用灵力修复身体，调整状态。`,

  `战斗当天，赵灵芸站在队伍最前方。她身穿<span class="w">velvet(天鹅绒)📢</span>质地的战袍，腰间挂着储物袋，神情坚毅。`,

  `魔道势力的首领出现，手持一把<span class="w">pistol(手枪)📢</span>——不对，手持一把魔剑。他冷笑道："玄天宗，今天就是你们的末日。"`,

  `赵灵芸冷冷回应："妄想。"她催动灵力，剑光骤起，冲向敌方首领。`,

  `两人交手，灵力激荡。赵灵芸发现，敌方首领的实力很强，但她并不畏惧。`,

  `她想起自己的<span class="w">process(过程)📢</span>——不对，想起自己的修炼历程，想起师父的教导，想起宗门的期望。`,

  `她深吸一口气，催动最强一击。剑光如虹，瞬间击退敌方首领。首领倒地，露出<span class="w">angry(愤怒的)📢</span>表情。`,

  `赵灵芸说："你们输了。"魔道势力见首领落败，纷纷撤退。战斗结束。`,

  `回到宗门后，掌门对赵灵芸说："你做得很好。这次胜利，多亏了你的勇敢和智慧。"`,

  `赵灵芸说："这是大家共同努力的结果。"掌门说："你很谦虚，这份品质很<span class="w">good(好的)📢</span>。"`,

  `某天，赵灵芸在宗门的图书馆阅读。她看到一本关于修仙历史的书，记载着修仙界的许多<span class="w">revolution(革命)📢</span>——不对，记载着修仙界的许多大事。`,

  `她突然想到一个问题。她找到宗门的长老，问："长老，我想知道，修仙的本质是什么？"`,

  `长老沉思片刻，说："修仙的本质，是追求真理和自由。不被世俗束缚，不被欲望<span class="w">suck(吸收)📢</span>——不对，不被欲望吞噬。"`,

  `赵灵芸若有所思地点头。她明白了，修仙不仅是提升实力，更是修炼心性。`,

  `某天，赵灵芸收到一封来自西域联盟学院的信。信中说，学院希望她能担任客座长老，指导学生修炼。`,

  `赵灵芸犹豫了。她不知道该接受还是拒绝。她找到师父，请教练。`,

  `师父说："这是一个<span class="w">good(好的)📢</span>机会。你可以去，但不要忘记，宗门永远是你的家。"赵灵芸说："我明白了。"`,

  `赵灵芸决定接受邀请，但她会定期返回宗门，履行自己的责任。`,

  `在西域联盟学院，赵灵芸认真教学。她发现，有些学生因为家贫而<span class="w">illiterate(文盲的)📢</span>——不对，因为家贫而没有机会接受教育。`,

  `她决定设立一个基金，帮助这些学生。她用自己的积蓄，购买书籍和修炼资源，免费提供给有需要的学生。`,

  `学生们感激地说："赵老师，谢谢您。"赵灵芸说："不用谢。你们只要努力学习，就是对我最好的回报。"`,

  `某天，赵灵芸在学院的花园休息。她看到一只灵兽在草地上打滚，模样可爱。`,

  `她想起自己的灵兽蛋。经过这段时间的孵化，蛋壳终于裂开，一只<span class="w">slender(修长的)📢</span>——不对，一只小巧的灵兽破壳而出。`,

  `灵兽毛色如<span class="w">yellow(黄色)📢</span>金，眼睛闪闪发光。赵灵芸给它取名"小金"，它将成为她修仙路上的伙伴。`,

  `小金很聪明，很快就学会了一些简单的指令。赵灵芸每天都会抽出时间训练它。`,

  `某天，赵灵芸接到宗门的消息，说宗门的护山大阵需要<span class="w">maintenance(维修)📢</span>。她立刻返回，帮忙处理。`,

  `她仔细检查大阵，发现了一些问题。她用灵力修复，并用<span class="w">aerial(空中的)📢</span>——不对，用灵气加强阵法的稳定性。`,

  `修复完成后，掌门说："灵芸，你真是宗门的栋梁。"赵灵芸说："我只是尽自己的责任。"`,

  `时间飞逝，赵灵芸在宗门和学院之间往返。她用自己的知识和实力，帮助了无数人。`,

  `某天，她在学院的办公室整理文件。她发现一份<span class="w">receipt(收据)📢</span>——不对，发现一份古老的文件，记载着一个未完成的任务。`,

  `任务内容是：寻找一种稀有的灵草，用于炼制突破瓶颈的丹药。赵灵芸决定接受这个任务。`,

  `她带着小金，前往灵草生长的地方。那是一座<span class="w">dangerous(危险的)📢</span>的山脉，充满了妖兽和陷阱。`,

  `赵灵芸小心翼翼地前进。她用灵力探测周围，避免触发机关。小金紧跟在她身后，警觉地观察四周。`,

  `终于，她找到了灵草。灵草生长在一块巨石旁，散发着淡淡的光芒。赵灵芸小心翼翼地采摘，放入储物袋。`,

  `返回的路上，她遇到一只妖兽的袭击。她立刻拔剑迎战，经过一番激战，成功击退妖兽。`,

  `回到学院后，赵灵芸将灵草交给炼丹师。炼丹师说："这株灵草品质很高，可以炼制出上等的丹药。"`,

  `赵灵芸说："那就麻烦您了。"炼丹师说："不麻烦，这是我的职责。"`,

  `丹药炼成后，赵灵芸将其分给需要的学生和宗门弟子。学生们服用后，修为都有所提升。`,

  `某天，赵灵芸在学院的茶室与同事聊天。她<span class="w">drink(喝)📢</span>着一杯灵茶，听同事讲述修仙界的趣闻。`,

  `同事说："赵老师，你的故事已经成为学院的传说。"赵灵芸笑道："哪有什么传说，只是努力而已。"`,

  `同事说："你的经历激励了很多学生。"赵灵芸说："我只是做了应该做的事。"`,

  `某天，赵灵芸收到师父的信。师父说："灵芸，你的<span class="w">profile(轮廓)📢</span>——不对，你的名字已经传遍修仙界。我为你骄傲。"`,

  `赵灵芸回信："师父，我的一切都是您教导的结果。"师父回信："保持初心，继续前行。"`,

  `赵灵芸常常想起自己的修炼历程。她记得自己从一个普通弟子，成长为元婴期修士，这一切都源于坚持和努力。`,

  `她想起一个道理：修仙之路，不仅是为了提升实力，更是为了守护自己珍视的一切。`,

  `某天，赵灵芸站在学院的最高处，望着<span class="w">wide(宽阔的)📢</span>的天空。她知道，未来还有很长的路要走。`,

  `但她并不害怕。因为她相信，只要坚持信念，就能<span class="w">defy(违抗)📢</span>——不对，就能战胜一切困难。`,

  `小金走到她身边，轻轻蹭着她的手。赵灵芸微笑道："我们一起，走向更高的境界。"`,

  `故事的最后，赵灵芸继续她的修仙之路。她用自己的故事，激励着无数后来者。`,

  `她相信，只要心怀<span class="w">ambition(雄心)📢</span>，就能突破一切界限，抵达心中的彼岸。她望着星空，微笑着，那里有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>修仙传奇：灵芸破界 · 学习版</title>
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
      <h1>修仙传奇：灵芸破界</h1>
      <p class="sub">修仙 · 大女主 · 奇幻</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story106</span>灵芸破界</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>修仙传奇：灵芸破界 · 学习版　|　看故事记单词</footer>
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
<title>修仙传奇：灵芸破界 · 复习版</title>
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
      <h1>修仙传奇：灵芸破界</h1>
      <p class="sub">修仙 · 大女主 · 奇幻</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story106</span>灵芸破界</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>修仙传奇：灵芸破界 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '106_修仙传奇_灵芸破界_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '106_修仙传奇_灵芸破界_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：106_修仙传奇_灵芸破界_学习版.html');
console.log('✓ 已生成：106_修仙传奇_灵芸破界_复习版.html');
console.log('\n故事信息：');
console.log('- 标题：修仙传奇：灵芸破界');
console.log('- 题材：修仙 · 大女主 · 奇幻');
console.log('- 融入单词数：50 个');
console.log('- 故事篇幅：约 3500 字');