const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_048_2351-2400.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `凌霄站在高高的<span class="w">altitude(高度)📢</span>，俯瞰着脚下这片苍茫大地。穿越到这个修仙世界已经三年了，她从一个现代都市白领，蜕变成了玄天宗最年轻的峰主。风吹过她的长发，她轻轻<span class="w">sigh(叹息)📢</span>，想起那段不堪回首的往事。`,

  `前世，她是一名的企业高管，每天在钢筋水泥的丛林中奔波。那个<span class="w">cosy(舒适的)📢</span>的办公室曾是她的战场，而如今，这处云端之上的洞府成了她新的归宿。命运总是充满了<span class="w">fluctuate(波动)📢</span>，让人无法预料下一秒会发生什么。`,

  `穿越那晚，她正在加班。深夜的办公室里，她翻阅着厚厚的资料，试图解决一个棘手的<span class="w">economic(经济)📢</span>问题。突然，一道奇异的光芒从窗外射入，她只觉得眼前一黑，再醒来时，已经躺在这片陌生的<span class="w">desert(沙漠)📢</span>中。`,

  `起初，她<span class="w">seem(似乎)📢</span>注定要死在这里。没有食物，没有水源，四周是一望无际的沙海。她绝望地走着，嘴唇干裂，额头上渗出细密的<span class="w">sweat(汗)📢</span>。就在她快要倒下的那一刻，一个路过的修仙者救了她。`,

  `那位修仙者名叫云天河，是玄天宗的长老。他将她带回宗门，传授她修炼之法。凌霄发现，自己穿越后的身体资质极好，修炼速度远超常人。她暗下决心，一定要在这个世界立足，绝不重蹈前世的覆辙。`,

  `修炼的日子枯燥而艰苦。每天凌晨，她就开始打坐，吸收天地灵气。她像一个孤独的行者，在这条充满荆棘的道路上前行。但她从未想过放弃，因为她知道，只有变得更强，才能掌握自己的命运。`,

  `三年后，凌霄突破到金丹期，成为玄天宗最年轻的峰主。她管理着一座山峰，手下有数十名弟子。她用现代的管理理念，将这座山峰治理得井井有条，效率<span class="w">efficient(有效的)📢</span>，让所有人都刮目相看。`,

  `某天，宗门来了一位不速之客。一<span class="w">gang(一帮)📢</span>自称来自魔教的修行者，要求玄天宗交出一件上古法宝。为首的是一个<span class="w">sturdy(坚定的)📢</span>男子，眼神中透着狠厉。凌霄站在人群中，静静<span class="w">listen(听)📢</span>着他们的要求。`,

  `宗主严词拒绝，对方恼羞成怒，竟出手伤人。混乱中，几名弟子被对方劫持，成了<span class="w">hostage(人质)📢</span>。宗门陷入恐慌，长老们紧急商议对策。凌霄站出来，冷静地说："我去救他们。"`,

  `"你？"有人质疑，"你一个新晋峰主，凭什么<span class="w">contest(竞争)📢</span>那些魔教高手？"凌霄淡淡一笑："凭我有办法。"她提出一个计划，用智慧和谋略，而非蛮力，去解救人质。`,

  `当晚，凌霄独自前往魔教的据点。她隐藏在暗处，观察着对方的<span class="w">movement(运动)📢</span>规律。她发现，魔教的防守存在<span class="w">discrepancy(差异)📢</span>，有些地方严密，有些地方却松懈。她决定从薄弱环节入手。`,

  `她悄悄潜入，发现被囚禁的弟子们关在一个山洞里。洞口有两个守卫，正在低声交谈。凌霄躲在一块巨石<span class="w">underneath(在下面)📢</span>，等待着最佳时机。她知道，强攻只会打草惊蛇，必须智取。`,

  `她从怀中取出一颗珠子，这是她炼制的迷烟弹。轻轻一弹，珠子滚到守卫脚下，瞬间释放出浓密的烟雾。守卫们还没反应过来，就倒在了地上。凌霄迅速行动，打开牢门，带着弟子们逃离。`,

  `然而，就在他们即将脱身时，魔教的首领发现了他们。"哪里走！"一声怒吼，数道凌厉的攻击袭来。凌霄挺身而出，用自己的身体挡住了攻击。她的<span class="w">frame(框架)📢</span>虽然纤细，却蕴含着强大的力量。`,

  `激烈的战斗中，凌霄身受重伤。她的手臂被划出一道深深的伤口，鲜血染红了衣袖。但她没有退缩，反而越战越勇。最终，她用一记精妙的招式，将魔教首领击退，成功带弟子们回到宗门。`,

  `这次事件后，凌霄名声大振。宗门上下对她刮目相看，称赞她是玄天宗的骄傲。但凌霄并没有停下脚步，她知道，真正的挑战还在后面。她开始更加刻苦地修炼，每天在<span class="w">greenhouse(温室)📢</span>般的环境中闭关，吸收灵气。`,

  `修炼之余，凌霄喜欢阅读古籍。她发现，这个世界的修仙典籍，有些内容竟与前世的科学知识不谋而合。比如修炼中的"小周天"，竟与人体循环<span class="w">system(系统)📢</span>有异曲同工之妙。这让她对修炼有了更深的理解。`,

  `某天，凌霄在整理书籍时，发现了一本残破的古籍。古籍记载了一个神秘的阵法，据说可以穿越时空。她心中一动——难道这就是她穿越的原因？她决定深入研究，寻找答案。`,

  `研究过程漫长而艰辛。古籍中的文字晦涩难懂，她必须逐字逐句地解读。她像一个勤奋的学生，不断扩充着自己的修仙<span class="w">vocabulary(词汇)📢</span>，试图理解那些古老的术语。`,

  `经过数月的努力，凌霄终于破解了阵法的秘密。原来，这个阵法是一个穿越之门，可以连接不同的世界。她的穿越，正是因为前世某个时刻，无意中触发了这个阵法的残留能量。`,

  `凌霄陷入了沉思。她是否应该回到前世？那里有她的家人、朋友，还有未完成的事业。但这个世界，她已经建立了自己的<span class="w">contribution(贡献)📢</span>，有了值得守护的弟子和朋友。她犹豫了。`,

  `就在这时，宗门传来紧急消息——邻近的几个修仙<span class="w">nation(国家)📢</span>正在联合，准备对玄天宗发动攻击。理由是玄天宗占据了一处灵脉，他们想要瓜分这份资源。凌霄立刻放下个人的纠结，投入到了保卫宗门的战斗中。`,

  `战争中，凌霄展现出非凡的领导才能。她制定了周密的战略，将有限的资源发挥出最大的<span class="w">value(价值)📢</span>。她还亲自上阵，用自己的修为击退了数名敌方高手。在她的带领下，玄天宗成功守住了阵地。`,

  `战后，凌霄的名声更加响亮。她不仅被誉为玄天宗的守护神，还被其他宗门邀请去讲学。她将自己的修炼心得整理成一篇篇<span class="w">prose(散文)📢</span>，传授给更多的修行者。她的名声，逐渐传遍了整个修仙界。`,

  `然而，凌霄并没有被荣誉冲昏头脑。她始终保持着<span class="w">slim(苗条的)📢</span>身材和清醒的头脑，因为她知道，修仙之路永无止境。她每天都会在清晨冥想，让自己的心境保持平和，不被外物所扰。`,

  `某天，凌霄在山间行走，突然听到一阵微弱的哭声。她循声而去，发现一个小女孩正蜷缩在一棵树下，瑟瑟发抖。凌霄走过去，轻轻<span class="w">ask(问)📢</span>："你叫什么名字？为什么在这里？"`,

  `女孩抬起头，眼中满是恐惧。她告诉凌霄，自己叫小蝶，父母被仇家所杀，她一路逃亡，精疲力尽。凌霄看着女孩脸上纵横的<span class="w">wrinkle(皱纹)📢</span>——那不是岁月的痕迹，而是苦难的印记。她心中一软，收留了小蝶。`,

  `从那以后，凌霄多了一个徒弟。她悉心教导小蝶修炼之道，就像当年云天河教导她一样。小蝶虽然资质平平，但勤奋刻苦，很快有了进步。凌霄看着小蝶一天天成长，心中充满了欣慰。`,

  `某天夜里，凌霄做了一个梦。梦中，她回到了前世，站在那间熟悉的办公室里。窗外是繁华的都市，灯火辉煌。她走到窗前，看到楼下的<span class="w">square(广场)📢</span>上，人们在欢声笑语中散步。她突然感到一阵恍惚——哪一个是真实的？`,

  `醒来后，凌霄陷入了深深的思索。她开始审视自己的内心，试图找到真正的自我。她想起前世阅读过的一句话：人生就像一条<span class="w">line(线)📢</span>，有时笔直，有时弯曲，但永远向前。她释然了——无论是前世还是今生，都是她生命中不可或缺的一部分。`,

  `日子一天天过去，凌霄的修为越来越深厚。她突破到了元婴期，成为整个修仙界最年轻的高手之一。她的名字，开始被载入史册。但她始终保持着谦虚，因为她知道，真正的强者，不需要刻意彰显<span class="w">itself(它自己)📢</span>。`,

  `某天，凌霄接到一个特殊的邀请。一个名叫"天机阁"的神秘组织，邀请她参加一场修行者的<span class="w">contest(竞赛)📢</span>。这场竞赛汇聚了各路高手，奖励是一颗可以突破瓶颈的丹药。凌霄决定参加，检验自己的实力。`,

  `竞赛当天，凌霄站在擂台上，面对着一个又一个对手。她从容不迫，每一场都以最小的代价获胜。她的战斗风格被评委会称为"<span class="w">efficient(有效的)📢</span>而优雅"，让所有人都印象深刻。`,

  `决赛中，凌霄遇到了一个强劲的对手——一个来自魔教的<span class="w">convict(囚犯)📢</span>出身的修行者。他的眼神阴冷，招招致命。凌霄起初有些吃力，但她很快发现了对方的破绽，用一记巧妙的招式，将对手击败。`,

  `夺冠后，凌霄获得了那颗珍贵的丹药。但她没有急着使用，而是将它交给了宗门的药房，让更多的弟子能够受益。她说："一个人的成功，不是真正的成功；能够<span class="w">accompany(陪伴)📢</span>更多人成长，才是真正的成功。"`,

  `此举让凌霄的声望达到了顶峰。许多人开始将她视为偶像，纷纷前来拜师。凌霄没有拒绝，她开设了一所修炼学堂，亲自授课。她用前世的科学思维，结合这个世界的修炼知识，创造出了一套独特的教学方法。`,

  `在她的教导下，许多弟子都有了长足的进步。有的突破瓶颈，有的领悟新功法。他们对凌霄充满感激，称她为"最好的师父"。凌霄笑着摇头："我只是一个引路人，真正的路，要靠你们自己走。"`,

  `某天，凌霄收到了一个神秘的消息。据说，在遥远的北方，发现了一个新的穿越阵法。这次，阵法比她研究的那个更加完整，可能真的能够实现穿越。凌霄心中波澜起伏——是否要去看看？`,

  `她思索良久，最终决定亲自前往。她带着小蝶，踏上了北上的旅程。一路上，她们穿越了茂密的森林，越过了湍急的河流，经历了无数的艰难险阻。但凌霄从未放弃，她像一只顽强的<span class="w">eagle(鹰)📢</span>，在风暴中翱翔。`,

  `终于，她们到达了目的地。那是一座隐藏在冰川之下的古老遗迹，散发着神秘的气息。凌霄走进遗迹，发现了一面巨大的石壁，上面刻满了古老的符文。她仔细辨认，发现这些符文与她研究的阵法属于同一个<span class="w">version(版本)📢</span>。`,

  `凌霄运转灵力，激活了石壁上的阵法。一道耀眼的光芒闪过，她发现自己被传送到一个奇异的空间。空间中，悬浮着无数的画面——那是不同世界的缩影。她看到了前世的世界，也看到了这个世界，还有许多她从未见过的世界。`,

  `凌霄心中一震。原来，穿越并非偶然，而是命运的安排。她被选中，是为了在这个世界完成某个使命。而那个使命，她现在已经隐约明白——就是传承修炼之道，让更多人受益。`,

  `她做出了决定。她选择回到这个世界，继续她的使命。光芒再次闪过，她回到了冰川遗迹。小蝶见她出来，急切地<span class="w">ask(问)📢</span>："师父，您看到了什么？"凌霄微笑："我看到了我的路。"`,

  `回到宗门后，凌霄更加投入地修炼和教学。她将自己的经历写成了一本书，名叫《穿越女帝：从零开始的修仙之路》。这本书在修仙界广为流传，被许多人奉为经典。`,

  `书中，凌霄写道："人生就像一场修行，充满了未知和挑战。无论身处何地，只要保持<span class="w">sturdy(坚定的)📢</span>信念，就能走出一条属于自己的路。不要被眼前的困难所<span class="w">bite(咬)📢</span>住，要像凤凰一样，在烈火中重生。"`,

  `多年后，凌霄突破到了化神期，成为了一代女帝。她统一了周边的修仙<span class="w">nation(国家)📢</span>，建立了一个和平繁荣的联盟。她用自己的智慧和力量，守护着这片土地，让无数修行者有了安身立命之所。`,

  `在联盟的中心<span class="w">square(广场)📢</span>上，立着一座雕像，刻画着凌霄的形象。雕像的底座上刻着一行字："她从一个陌生的世界来到这里，用智慧和勇气，开创了一个时代。"`,

  `某天傍晚，凌霄独自走在宗门的后山。她看到一<span class="w">basket(篮子)📢</span>野花，被遗弃在路边。她捡起篮子，轻轻抚摸着那些花瓣。她想起前世，自己也曾是一个普通的上班族，为了生活奔波。如今，她已经成为了一代女帝，拥有了无数人梦寐以求的权力和地位。`,

  `但她知道，这一切都不是终点。修炼之路永无止境，她还有更长的路要走。她看着远方的天际，那里有一片金色的云彩，仿佛在召唤着她。她深吸一口气，闻到了空气中淡淡的<span class="w">moisture(湿气)📢</span>，那是雨后特有的清新。`,

  `她想起刚穿越时，自己在沙漠中濒临<span class="w">desperate(绝望的)📢</span>境地。那时的她，无论如何也想不到，自己会有今天的成就。她轻轻笑了——命运总是充满了惊喜，只要不放弃，就会有希望。`,

  `夜幕降临，凌霄回到自己的洞府。她用灵力点燃了烛火，房间顿时变得温暖明亮。她坐在桌前，拿出一卷古籍，继续研读。修炼不仅仅是身体的锻炼，更是心灵的升华。她需要不断充实自己，才能走得更远。`,

  `窗外，月光洒落在山谷中，银白色的光芒如同瀑布一般倾泻而下。凌霄放下书籍，走到窗前。她想起了前世的家人，不知道他们是否安好。但她知道，无论在哪里，她都会活出自己的<span class="w">value(价值)📢</span>。`,

  `某天，宗门来了一位不速之客。一个自称来自"天外天"的修行者，要求与凌霄一战。凌霄淡然应对，用三招将其击败。那人临走时，说了一句话："你的故事，在各个世界流传。下次，我们会再来挑战。"`,

  `凌霄没有把这话放在心上。她知道，真正的强者，不需要在意那些虚名。她继续着自己的修炼和教学，守护着她所珍视的一切。她的故事，激励着一代又一代的修行者，去追寻自己的梦想。`,

  `故事的最后，凌霄常常对弟子们说："修炼之路，就像攀登一座高山。不要因为山高而害怕，不要因为路远而放弃。每一步，都是成长；每一滴<span class="w">sweat(汗)📢</span>，都是财富。只要<span class="w">use(使用)📢</span>正确的方法，坚定地走下去，终有一天，你会站在山巅，俯瞰整个世界。"`,

  `她相信，无论前世今生，她都活出了自己的精彩。而这一切，都是从那个穿越的夜晚开始的。她感谢命运的安排，也感谢自己的坚持。未来的路还很长，但她已经准备好了，继续前行，永不止步。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越女帝：修仙之路 · 学习版</title>
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
      <h1>穿越女帝：修仙之路</h1>
      <p class="sub">穿越 · 大女主 · 修仙</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story48</span>命运之门</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越女帝：修仙之路 · 学习版　|　看故事记单词</footer>
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
<title>穿越女帝：修仙之路 · 复习版</title>
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
      <h1>穿越女帝：修仙之路</h1>
      <p class="sub">穿越 · 大女主 · 修仙</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story48</span>命运之门</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越女帝：修仙之路 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '48_穿越女帝_修仙之路_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '48_穿越女帝_修仙之路_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：48_穿越女帝_修仙之路_学习版.html');
console.log('✓ 已生成：48_穿越女帝_修仙之路_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越女帝：修仙之路：命运之门`);
console.log(`- 题材：穿越 · 大女主 · 修仙`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3500 字`);