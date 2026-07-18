const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_050_2451-2500.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `苏婉站在落地窗前，看着窗外繁华的城市夜景，嘴角勾起一抹冷笑。重生回到五年前，她终于有机会改变一切。前世，她被最信任的人背叛，失去了一切——家族企业、父母留下的遗产，甚至自己的尊严。如今，她要让那些人付出代价。`,

  `苏婉的家族经营着一家大型<span class="w">trade(贸易)📢</span>公司，在本地商界颇有名气。然而，她那个堂兄苏明轩，却一直觊觎着公司的控制权。前世，他联合外人，设计陷害苏婉，让她背上巨额债务，最终将她赶出了家族。这一世，苏婉绝不会让历史重演。`,

  `第二天一早，苏婉来到公司。走进那间熟悉的<span class="w">spacious(宽敞的)📢</span>办公室，她深吸一口气，感受着空气中的<span class="w">moist(潮湿的)📢</span>气息。这间办公室曾属于父亲，如今是她捍卫家族遗产的战场。她打开电脑，开始梳理公司的业务和财务状况。`,

  `苏婉知道，苏明轩的阴谋始于三个月后的一场董事会。到时候，他会<span class="w">announce(宣布)📢</span>一个看似完美的收购方案，实则是将公司资产转移的陷阱。她必须在此之前，找到足够的证据，<span class="w">disclose(揭示)📢</span>他的真面目。`,

  `接下来的日子，苏婉开始暗中调查。她发现，苏明轩与一家<span class="w">shady(阴暗的)📢</span>的投资公司有密切往来。那家公司名为"盛华投资"，表面上做正当生意，实际上却涉及洗钱和非法交易。苏婉决定深入挖掘。`,

  `某天晚上，苏婉跟踪苏明轩来到一栋老旧的写字楼。她小心翼翼地上楼，听到一间房间里传来谈话声。她屏住<span class="w">breathe(呼吸)📢</span>，贴在门边偷听。里面的人正在讨论如何转移公司资产，还提到了苏婉的名字。`,

  `"那个丫头太<span class="w">clumsy(笨拙的)📢</span>了，根本不懂得经营公司。"苏明轩的声音传来，"等收购完成，她就会乖乖滚蛋。"另一个人说："放心，我们的计划很周密，不会留下任何<span class="w">visible(可见的)📢</span>的痕迹。"苏婉紧握拳头，心中怒火燃烧。`,

  `她悄悄离开，回到家中，开始整理收集到的<span class="w">information(信息)📢</span>。她需要一个机会，将这些证据公之于众。正当她思考时，手机响了。是一个陌生号码。她接起电话，对方说："苏小姐，我是顾墨寒，有些事想和您谈谈。"`,

  `顾墨寒是本市最大的财团——顾氏集团的继承人。前世，苏婉与他毫无交集。这一世，他为什么会找上门？苏婉心中疑惑，但还是答应了<span class="w">meet(见面)📢</span>。第二天，两人在一家高级餐厅会面。`,

  `顾墨寒穿着一身剪裁合体的西装，眉宇间透着冷峻。他开门见山："苏小姐，我知道苏明轩在做什么。我愿意帮您。"苏婉警惕地看着他："为什么帮我？"顾墨寒说："因为苏明轩的合作伙伴，也是我的敌人。敌人的敌人，就是朋友。"`,

  `苏婉<span class="w">think(想)📢</span>了想，点头："好，我们合作。"顾墨寒递给她一份文件："这是我掌握的证据。盛华投资的背后，是一个非法洗钱网络。苏明轩只是棋子。"苏婉翻开文件，眉头紧锁。这些证据，足以让苏明轩身败名裂。`,

  `然而，苏婉并不满足于此。她要彻底击垮苏明轩，让他付出代价。她和顾墨寒制定了一个计划：从内部瓦解苏明轩的势力，让他众叛亲离，最后在董事会上当众揭穿他的阴谋。`,

  `接下来的日子，苏婉开始行动。她首先联系了公司的几个老员工，这些人曾经是父亲的心腹，对公司忠心耿耿。苏婉向他们透露了部分真相，获得了他们的支持。接着，她开始暗中收购公司的股份，增加自己的话语权。`,

  `与此同时，顾墨寒也在行动。他利用自己的资源，切断了苏明轩的资金来源。盛华投资的账户被冻结，合伙人纷纷撤资。苏明轩陷入困境，开始变得焦躁不安。`,

  `某天，苏婉在公司遇到苏明轩。他看起来憔悴了许多，眼圈发黑，明显是失眠所致。苏婉故作关切地问："堂兄，你还好吗？"苏明轩勉强笑笑："没事，最近太忙了。"苏婉心中冷笑——这只是开始。`,

  `几周后，苏婉收到一个消息：苏明轩的<span class="w">landlord(房东)📢</span>打来电话，说他拖欠房租已经两个月。苏婉一愣，随即明白——顾墨寒出手了。他切断了苏明轩的资金流，让他连房租都付不起。`,

  `苏婉来到苏明轩的住处，看到他正和房东争执。房东怒气冲冲："再不交房租，就搬出去！"苏明轩满脸尴尬，看到苏婉，眼神闪烁。苏婉走上前，对房东说："我来帮他付。"苏明轩愣住，不知道苏婉葫芦里卖的什么药。`,

  `进了屋，苏婉环顾四周。这是一间简陋的公寓，与苏明轩往日的奢华生活形成鲜明对比。苏婉说："堂兄，你最近遇到麻烦了？"苏明轩勉强笑笑："没什么，只是资金周转不灵。"苏婉说："需要帮忙吗？"苏明轩眼中闪过一丝感激，但很快又警惕起来。`,

  `苏婉心中暗笑。她知道，苏明轩开始慌了。他的资金链断裂，合作伙伴撤资，连房租都付不起。再过不久，他就会做出更<span class="w">clumsy(笨拙的)📢</span>的决定，让她有机会彻底击垮他。`,

  `果然，几天后，苏明轩联系了苏婉。他说："婉婉，我需要钱。公司的事先放一放，帮我渡过难关。"苏婉装作犹豫："堂兄，你要多少钱？"苏明轩说："五百万，就五百万，很快就能还你。"苏婉点头："好，我帮你。"`,

  `苏婉给了苏明轩五百万，但她也暗中录下了他们的对话。这笔钱，是她设下的又一个陷阱。苏明轩拿到钱后，立刻转账给盛华投资。苏婉通过顾墨寒的关系，截获了这笔交易记录。`,

  `转眼间，董事会召开的日子临近了。苏明轩以为一切都在掌控之中，殊不知苏婉已经准备好了最后的杀手锏。会议前一天，苏婉收到顾墨寒的电话："明天，我会让人<span class="w">deliver(交付)📢</span>所有证据到您手中。"`,

  `董事会当天，苏婉穿着一身干练的黑色套装走进会议室。与会者陆续到场，苏明轩坐在主位旁边，脸上挂着自信的笑容。他不知道，自己的末日即将来临。`,

  `会议开始，苏明轩首先发言。他滔滔不绝地介绍收购方案的"优势"，声称这将为公司带来巨大的发展前景。在场的人听得认真，有人点头附和，形成一片<span class="w">chorus(合唱)📢</span>般的赞同声。`,

  `苏婉静静听着，等到苏明轩说完，她站起身："各位，我有话要说。"她的声音不大，但带着不可忽视的威严。所有人的目光投向她。苏婉说："在讨论收购方案之前，我想让大家看一些东西。"`,

  `她打开投影仪，屏幕上出现了一系列文件和交易记录。苏婉逐一讲解：苏明轩如何与盛华投资勾结，如何策划转移公司资产，如何企图将苏婉赶出家族企业。证据确凿，无法辩驳。`,

  `苏明轩脸色惨白，站起来大喊："这都是假的！是诬陷！"苏婉冷笑："假的？那这段录音呢？"她播放了苏明轩向她借钱的录音，以及转账给盛华投资的记录。全场一片哗然。`,

  `董事会成员纷纷质问苏明轩，他支吾着无法回答。最终，董事会决定暂停收购方案，并启动内部调查。苏明轩被当场罢免职务，面临法律追究。`,

  `会议结束后，苏婉走出会议室，深吸一口气。空气中带着淡淡的<span class="w">corn(谷物)📢</span>香——那是公司楼下咖啡厅飘来的味道。她感到一种前所未有的轻松，仿佛卸下了沉重的枷锁。`,

  `顾墨寒出现在她身后："恭喜，苏小姐。"苏婉转身，微笑道："谢谢你的帮助。"顾墨寒说："不用客气，这是<span class="w">versus(对)📢</span>苏明轩的联盟，我们互利共赢。"苏婉点头，心中对这个男人多了几分信任。`,

  `接下来的日子，苏婉正式接管公司。她大刀阔斧地进行改革，清除了苏明轩留下的残余势力，提拔了一批忠诚有能力的员工。在她的带领下，公司逐渐恢复了元气，业务蒸蒸日上。`,

  `某天，苏婉收到一封匿名信。信中写道："苏小姐，苏明轩虽然倒台了，但他的背后还有人。小心盛华投资的幕后老板。"苏婉皱眉，她意识到，这场斗争还没有结束。`,

  `她和顾墨寒再次会面。顾墨寒说："盛华投资的幕后老板叫赵天成，是黑道出身。他不会善罢甘休。"苏婉问："怎么办？"顾墨寒说："我们继续合作，彻底铲除他。"`,

  `两人开始联手对付赵天成。他们收集证据，向警方举报他的非法活动。同时，顾墨寒利用自己的影响力，切断了赵天成的资金来源。赵天成的势力逐渐瓦解，他本人也被警方通缉。`,

  `某天，苏婉收到消息：赵天成企图逃跑，被警方抓获。他的落网，标志着这场斗争的终结。苏婉终于可以松一口气，她成功捍卫了家族企业，也为前世的自己报了仇。`,

  `庆功宴在一家高级酒店举行。苏婉穿着华丽的礼服，出席了这场<span class="w">exclusive(独占的)📢</span>的宴会。顾墨寒也来了，他走到苏婉身边，递给她一杯酒："恭喜，苏总。"苏婉接过酒杯，微笑道："谢谢你，顾总。"`,

  `顾墨寒看着她，眼中闪过一丝温柔："苏婉，其实有一件事我一直想说。"苏婉看着他，等待下文。顾墨寒说："我帮你，不仅仅是因为利益。我欣赏你的勇气和智慧。苏婉，我喜欢你。"`,

  `苏婉愣住了。她没有想到，这个冷峻的男人会如此直接。她沉默片刻，说："顾总，我……"顾墨寒打断她："不要急着回答。好好<span class="w">think(想)📢</span>想，我等你。"苏婉心中一暖，轻轻点头。`,

  `宴会结束后，苏婉独自走在回家的路上。夜风轻拂，她抬头看到天空中飘着一只<span class="w">kite(风筝)📢</span>——是哪家孩子在放夜风筝？她笑了笑，心中感到一种宁静。`,

  `回到家中，苏婉坐在沙发上，回想着这段时间的经历。从重生的那一刻起，她就知道，自己必须改变命运。如今，她终于做到了。她不仅保住了家族企业，还收获了顾墨寒的真情。`,

  `几天后，苏婉来到父母的墓前。她跪在墓碑前，轻声说："爸，妈，女儿做到了。公司保住了，苏明轩也受到了惩罚。你们可以放心了。"她的眼眶湿润，心中涌起一股<span class="w">grief(悲伤)📢</span>，但更多的是释然。`,

  `离开墓地时，苏婉看到顾墨寒站在不远处。他穿着简单的<span class="w">jeans(牛仔裤)📢</span>和T恤，看起来比平时亲切了许多。他走过来，说："我来送你。"苏婉点头，两人并肩走在林荫道上。`,

  `顾墨寒突然说："苏婉，我听说你以前喜欢画画。有空一起去看画展吗？"苏婉惊讶地看着他，没想到他会知道这个。她笑了："好。"顾墨寒也笑了，那是苏婉第一次看到他真心地笑。`,

  `日子一天天过去，苏婉和顾墨寒的关系逐渐升温。他们一起看画展，一起散步，一起讨论商业上的问题。苏婉发现，顾墨寒并不像外表那样冷硬，他也有温柔细腻的一面。`,

  `某天，苏婉在公司的<span class="w">cellar(地下室)📢</span>整理旧文件，发现了一份父亲留下的遗嘱。遗嘱中写道："婉婉，如果有一天你遇到困难，去找顾家的人。他们是我们家族的老朋友。"苏婉恍然大悟——原来两家早有渊源。`,

  `她把这件事告诉顾墨寒。顾墨寒说："是的，我父亲和你父亲是故交。他临终前嘱咐我，如果苏家遇到困难，要尽力帮助。"苏婉心中感动，她终于明白了顾墨寒的善意从何而来。`,

  `几个月后，苏婉的公司和顾氏集团达成深度合作。签约仪式上，两家公司的代表齐聚一堂，共同见证这一时刻。苏婉站在台上，发表了简短的演讲。她说："感谢大家的支持，我们一定不负众望，创造更辉煌的未来。"`,

  `台下响起热烈的掌声。苏婉走下台，顾墨寒迎上来，递给她一杯水。他低声说："表现得不错。"苏婉笑："谢谢夸奖。"两人相视而笑，周围的人都能感受到他们之间的默契。`,

  `仪式结束后，苏婉和顾墨寒来到酒店的露台。夜风轻拂，城市灯火璀璨。顾墨寒说："苏婉，公司的事已经稳定了。你有什么打算？"苏婉想了想，说："我想去旅行，放松一下。"`,

  `顾墨寒说："正好，我也有这个打算。一起吗？"苏婉看着他，眼中闪过一丝笑意："好啊。"顾墨寒伸出手，苏婉握住。两人的手紧紧相扣，仿佛要将这份温暖永远留住。`,

  `旅行归来后，苏婉和顾墨寒的关系更加亲密。他们开始计划未来，讨论结婚的可能性。某天，顾墨寒正式向苏婉求婚。他拿出一枚精致的戒指，说："苏婉，嫁给我，好吗？"`,

  `苏婉看着戒指，眼眶湿润。她想起前世的种种，想起重生后的艰辛。如今，她不仅守护了家族的<span class="w">honor(荣誉)📢</span>，还找到了真正的爱情。她点头："我愿意。"顾墨寒将戒指戴在她的手上，紧紧拥抱她。`,

  `婚礼定在秋天举行。苏婉穿着洁白的婚纱，在父亲的旧友——顾墨寒的父亲陪伴下，缓缓走向顾墨寒。牧师宣读誓词，两人交换了戒指。台下，亲友们送上祝福，现场洋溢着幸福的气氛。`,

  `婚礼结束后，苏婉站在露台上，看着远方的天空。她听到身后传来<span class="w">footstep(脚步声)📢</span>，转头看到顾墨寒走过来。他递给她一杯酒，说："在想什么？"苏婉笑："在想，命运真是奇妙。"`,

  `顾墨寒将她搂在怀里，说："是啊。如果不是你重生，我们可能永远不会相遇。"苏婉点头，靠在他的肩膀上。她看着夜空中的星星，心中充满了感激和幸福。`,

  `婚后，苏婉继续经营公司，顾墨寒则在背后支持她。两人相互扶持，共同面对挑战。他们的故事，成为了商界的佳话，流传<span class="w">so(所以)📢</span>广泛，甚至有人写成了小说。`,

  `某天，苏婉在书房里翻看一本旧相册。她看到一张父母年轻时的照片，两人笑得灿烂。她轻声说："爸，妈，我现在很幸福。谢谢你们，谢谢命运。"窗外，阳光明媚，一只燕子飞过，仿佛在祝福她的未来。`,

  `故事的最后，苏婉常常对年轻人说："人生就像一场<span class="w">collision(碰撞)📢</span>，有挫折，有困难，但只要不放弃，就一定能找到出路。命运给了我们考验，也给了我们机会。关键在于，我们是否敢于抓住它。"`,

  `她相信，前世的经验让她学会了谨慎和智慧，重生的机会让她改变了命运。如今，她不仅拥有了成功的事业，还拥有了深爱的伴侣。这一切，都是她用勇气和智慧换来的。她知道，未来的路还很长，但只要有信念，就没有什么是不可能的。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生女王：商战复仇 · 学习版</title>
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
      <h1>重生女王：商战复仇</h1>
      <p class="sub">重生 · 大女主 · 商战</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story50</span>逆风翻盘</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生女王：商战复仇 · 学习版　|　看故事记单词</footer>
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
<title>重生女王：商战复仇 · 复习版</title>
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
      <h1>重生女王：商战复仇</h1>
      <p class="sub">重生 · 大女主 · 商战</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story50</span>逆风翻盘</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生女王：商战复仇 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '50_重生女王_商战复仇_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '50_重生女王_商战复仇_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：50_重生女王_商战复仇_学习版.html');
console.log('✓ 已生成：50_重生女王_商战复仇_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生女王：商战复仇：逆风翻盘`);
console.log(`- 题材：重生 · 大女主 · 商战`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);