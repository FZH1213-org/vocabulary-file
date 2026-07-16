const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_025_1201-1250.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `林晨坐在破旧的出租屋里，窗外是灰蒙蒙的天空，屋里光线<span class="w">dim(暗淡的)📢</span>。墙角堆着一<span class="w">bunch(束)📢</span>杂物，那是他过去生活的全部。作为一名失业的<span class="w">orphan(孤儿)📢</span>，他从小<span class="w">in(在…里)📢</span>福利院长大，没有亲人，没有依靠。他渴望<span class="w">rid(摆脱)📢</span>这种困境，却不知从何下手。`,

  `三个月前，他还在一家知名企业担任项目经理，生活充实而有希望。然而一场<span class="w">dramatic(戏剧性的)📢</span>变故彻底改变了他的命运——公司被竞争对手收购，他和其他数十名员工被无情<span class="w">displace(取代)📢</span>。`,

  `失业后的日子<span class="w">difficult(困难的)📢</span>得让人窒息。林晨尝试了无数方法找工作，却总是碰壁。招聘会上，面试官用轻蔑的眼神看着他，仿佛在说：你这个年纪还敢来竞争？那些人<span class="w">despise(轻视)📢</span>他的经历，认为他已经过时。`,

  `深夜，林晨独自走在狭窄的小巷里。这条<span class="w">lane(小巷)📢</span>通往他廉价的住处，路边是一排高高的<span class="w">hedge(树篱)📢</span>，遮挡了前方的光亮。他感觉自己的人生就像这条黑暗的小路，看不到出口。`,

  `回到房间，林晨打开那盏老旧的台灯。灯光昏黄，像一支即将燃尽的<span class="w">torch(火炬)📢</span>。他拿出一叠简历<span class="w">file(文件)📢</span>，又一次仔细检查每一份。窗外吹来一阵冷风，<span class="w">air(空气)📢</span>中带着潮湿的气息，他不由得打了个寒战。`,

  `林晨坐在桌前，手里握着一张<span class="w">tissue(纸巾)📢</span>，擦去额头的汗水。他回想起母亲——不，他从来没有母亲。他在福利院长大，那里的阿姨教会他坚强。从那时起，他就学会了独自面对一切<span class="w">intense(强烈的)📢</span>的挑战。`,

  `记忆如潮水般涌来。小时候，福利院的<span class="w">canteen(食堂)📢</span>是他最害怕的地方。孩子们总爱嘲笑他，有人把他推进更衣室的<span class="w">locker(更衣箱)📢</span>里，关了整整一个小时。那段经历让他学会了忍耐。`,

  `林晨深吸一口气，打开笔记本电脑。他突然变得<span class="w">curious(好奇的)📢</span>——一个创业项目正在招募合伙人。创办人是一位<span class="w">eminent(杰出的)📢</span>的商业人士，曾在<span class="w">country(国家)📢</span>级大赛中获奖。林晨盯着屏幕，心中的火焰开始燃烧。`,

  `这是一个关于绿色能源的项目，需要有人负责市场推广。林晨仔细阅读着项目介绍，他<span class="w">perceive(察觉)📢</span>到这可能是改变命运的机会。但要求很严格——<span class="w">only(唯一的)📢</span>条件是必须有成功案例。`,

  `林晨犹豫了。他的简历上空空如也，拿什么去竞争？但他转念一想，不去尝试才是真正的失败。他决定放手一搏，不再被失败的恐惧所<span class="w">depress(压抑)📢</span>。`,

  `第二天一早，林晨穿上仅有的那套西装，打好领带。镜子里的他，嘴角微微上扬，眼神中透着坚定。头发有些凌乱，几缕发丝<span class="w">curl(卷曲)📢</span>在额头前。他走进洗手间，用冷水洗脸，然后从柜子里拿出一双<span class="w">stocking(长袜)📢</span>仔细整理——这是他唯一能体面穿出门的衣物。`,

  `面试地点在一栋写字楼的顶层。林晨站在电梯里，周围是穿着光鲜的白领。他注意到一个女孩正在打量他，她的眼神很<span class="w">quiet(安静)📢</span>，却似乎能看透一切。林晨微微点头，轻声说了句"<span class="w">hi(嗨)📢</span>"。`,

  `电梯门打开，林晨走出电梯。接待处坐着一个<span class="w">sociable(好交际的)📢</span>的女孩，她热情地向他打招呼："您好，请问有预约吗？"林晨点头，说明了来意。女孩微笑着让他稍等。`,

  `等待时，林晨环顾四周。墙上挂着一幅<span class="w">painting(绘画)📢</span>，画的是一座灯塔在风暴中发出光芒。林晨凝视着那幅画，仿佛看到了自己的影子——即使风暴再大，也要照亮前方的路。`,

  `面试官终于出现了。让他意外的是，对方竟是电梯里那个女孩。她叫苏雅，是项目的市场负责人。苏雅的眼神<span class="w">intense(强烈)📢</span>，似乎在打量他的一切。林晨挺直腰板，迎上她的目光。`,

  `"林先生，我看过您的简历。"苏雅开门见山，"您过去三年没有工作经历，这个空白期很长。"林晨点头："是的，但我没有放弃。我自学了新媒体运营，这是我做的几个账号数据。"他从包里拿出准备好的材料。`,

  `苏雅接过材料，眉头微微皱起。林晨继续说："我知道自己不是最优秀的候选人，但我不需要您<span class="w">grant(准予)📢</span>我特殊照顾。请给我一个机会，让我证明自己。"苏雅沉默片刻，终于开口："好，我给您三个月试用期。"林晨差点惊叫出声，这简直是<span class="w">surprise(惊异)📢</span>！`,

  `从那天起，林晨的生活发生了变化。他每天工作<span class="w">six(六)📢</span>个小时，学习新知识，拓展客户。苏雅对他要求严格，但也给了他很多指导。渐渐地，林晨发现自己越来越适应这份工作。`,

  `然而好景不长。项目推进到关键阶段，却遇到了<span class="w">substantial(重大的)📢</span>阻碍。一位重要客户突然撤资，这对项目造成了巨大<span class="w">damage(损害)📢</span>。团队陷入恐慌，有人开始议论林晨是害群之马。`,

  `林晨站在会议室角落，听着同事们的指责。有人冷笑道："我就说这个人不行，一个失业三年的家伙，能有什么用？"林晨握紧拳头，但没有反驳。他知道，只有用结果说话。`,

  `深夜，林晨独自在办公室加班。他拿出笔记本，重新整理思路。突然，一个念头闪过——那位客户撤资的原因是什么？他决定深入调查，而不是<span class="w">presume(假定)📢</span>问题已经无法解决。`,

  `经过连夜分析，林晨发现客户撤资并非因为项目问题，而是被竞争对手<span class="w">mislead(误导)📢</span>，听信了不实谣言。他立刻整理报告，准备向团队汇报。然而，他的身体已经撑到了极限，一阵眩晕让他差点倒下。`,

  `苏雅恰好经过，看到林晨虚弱的样子，赶紧拿来水和<span class="w">tissue(纸巾)📢</span>。"你没事吧？"她关切地问。林晨摆摆手："没事，只是太累了。"苏雅叹了口气："你太拼了，身体要注意。"林晨苦笑："我没有退路。"`,

  `第二天，林晨向团队汇报了调查结果。他用数据证明了客户的误解，并提出了解决方案。大家听完后，都沉默了。<span class="w">head(领导)📢</span>市场的苏雅率先开口："林晨说得有道理，我们不应该因为一次挫折就放弃。"`,

  `团队决定重新争取客户。林晨主动请缨，他说："我去和客户沟通，澄清事实。"有人质疑："你觉得他们会听你的？"林晨坚定回答："我会让他们听进去。"`,

  `谈判那天，林晨站在客户面前，从容不迫地展示数据和方案。他没有<span class="w">rash(鲁莽)📢</span>地指责对方，而是用事实说服他们。最终，客户被他的诚意打动，决定重新合作。`,

  `项目重回正轨，林晨的付出得到了回报。团队对他刮目相看，那些曾经嘲笑他的人也开始尊重他。苏雅私下找到林晨，说："谢谢你，没有你，这个项目可能就毁了。"林晨摇头："是大家的努力，<span class="w">hers(她的)📢</span>贡献也很大。"`,

  `日子一天天过去，林晨在项目中越来越重要。他学会了如何与不同的人打交道，也找回了自己的自信。苏雅发现，这个男人身上有一种特殊的魅力——坚韧、真诚、永不放弃。`,

  `一次团队聚餐，大家围坐在<span class="w">canteen(食堂)📢</span>改造成的活动室里。苏雅端着一杯饮料走到林晨身边："聊聊？"林晨点头。两人坐在角落，苏雅说："我一直很好奇，你是怎么熬过这三年的？"林晨沉默片刻，说："因为我相信，人生没有绝路，只有自己放弃的路。"`,

  `苏雅听了，眼中闪过一丝光芒。她说："你知道吗，我刚进公司时也很迷茫。我原本是一名<span class="w">housewife(家庭主妇)📢</span>，孩子上学后我才重新工作。很多人也觉得我做不到，但我用行动证明了自己。"林晨听了，对苏雅更加敬佩。`,

  `项目取得巨大成功，公司决定给林晨正式签约。签约仪式上，<span class="w">commission(委员会)📢</span>的成员们纷纷祝贺他。林晨站在台上，向大家致谢。他的眼神中透着感激，也透着对未来的期许。`,

  `有人问林晨："你成功的<span class="w">recipe(诀窍)📢</span>是什么？"林晨想了想，说："永不放弃，永远相信明天会更好。"台下响起掌声。`,

  `然而，命运又给了林晨新的考验。公司高层变动，新上任的副总对这个项目不看好，要求<span class="w">halt(停止)📢</span>所有投入。林晨听到消息，仿佛被一盆冷水浇透。`,

  `他没有放弃。林晨整理了一份详细报告，用数据证明项目的潜力。他找到副总，平静而坚定地说："请给我十分钟，让我解释为什么这个项目值得继续。"副总看着他，点头同意。`,

  `林晨用十分钟说服了副总。他的真诚和专业让副总改变看法，项目得以继续。团队得知消息，都对林晨竖起大拇指。苏雅笑着对他说："你真厉害，敢这样和副总<span class="w">contend(竞争)📢</span>。"`,

  `林晨摇头："我不是竞争，只是不想让大家努力白费。"苏雅看着他的眼睛，轻声说："你知道吗，你身上有一种光芒，照亮了大家。"林晨愣住，心跳突然加快。`,

  `几天后，苏雅邀请林晨去她家做客。她家在城市的另一边，门口有一条开满鲜花的<span class="w">lane(小路)📢</span>。苏雅做了一桌好菜，林晨吃得很开心。饭后，两人坐在阳台上聊天。`,

  `苏雅问林晨："你现在还觉得人生是<span class="w">illusion(幻觉)📢</span>吗？"林晨摇头："不，现在我觉得每一步都值得。"苏雅笑了："你变了，变得更自信了。"林晨看着苏雅，突然说："是因为遇见了你。"苏雅愣住，脸颊微微泛红。`,

  `林晨深吸一口气，鼓起勇气说："苏雅，我一直有一个<span class="w">desire(愿望)📢</span>——和你在一起。"苏雅沉默片刻，终于微笑着说："我也是。"林晨握住她的手，感觉世界都亮了。`,

  `两人开始交往。林晨发现苏雅不仅温柔，还是一个很懂生活的女人。她会做各种美食，每一道菜都有独特的<span class="w">custom(习惯)📢</span>和讲究。林晨常说："你做的饭比任何餐厅都好吃。"苏雅笑着说："那当然，这是独家<span class="w">recipe(食谱)📢</span>。"`,

  `然而，生活总有意外。苏雅的母亲突然生病，需要一大笔医疗费。苏雅愁眉不展，林晨安慰她："别担心，我们一起想办法。"他拿出自己所有的积蓄，帮苏雅度过难关。`,

  `苏雅感动得哭了。她说："我不知道该怎么感谢你。"林晨握住她的手："我们是家人，不用感谢。"苏雅紧紧握住他的手，感受着这份温暖。`,

  `苏雅母亲的手术很成功。在医院，林晨帮忙照顾，每天端水送饭，从不抱怨。苏雅的母亲看着林晨，对苏雅说："这个男人不错，要好好珍惜。"苏雅点头，心中满是幸福。`,

  `一年后，林晨和苏雅结婚了。婚礼上，林晨对苏雅说："感谢你让我重新相信生活，让我从谷底爬了回来。"苏雅含泪微笑："是我们一起努力的结果。"两人紧紧相拥，周围响起祝福的掌声。`,

  `婚后，林晨的事业越来越好。他被公司提拔为市场部总监，带领团队创造了一个又一个佳绩。曾经那些<span class="w">despise(轻视)📢</span>他的人，现在都来向他学习。林晨没有骄傲，而是用自己的经历鼓励更多在低谷中挣扎的人。`,

  `有一天，林晨接到福利院的电话，院长请他回去给孩子们讲讲自己的故事。林晨欣然前往。站在熟悉的<span class="w">canteen(食堂)📢</span>里，看着一张张稚嫩的脸庞，林晨心中涌起无限的感慨。`,

  `他对孩子们说："人生就像一场长跑，不在乎你起点在哪里，只在乎你愿不愿意跑到终点。我曾经和你们一样，没有父母，没有依靠。但我没有放弃，因为我相信，只要努力，命运总会给你一个答案。"`,

  `一个孩子问："叔叔，我们真的可以改变命运吗？"林晨蹲下身，看着孩子的眼睛："当然可以。记住，命运掌握在自己手里，不要让任何人告诉你做不到。"孩子们用力点头，眼中燃起了希望的<span class="w">torch(火炬)📢</span>。`,

  `离开福利院时，林晨回头看了看那栋熟悉的建筑。曾经的他，只是一个被人遗忘的<span class="w">orphan(孤儿)📢</span>；现在的他，已经拥有了事业、家庭和尊重。他深知，这一切都是自己一步一个脚印走出来的。`,

  `回到公司，林晨站在窗前，看着窗外繁华的城市。阳光洒在他的脸上，他感到一种前所未有的平静。苏雅走进办公室，站在他身边："在想什么？"林晨微笑："在想，人生真是一场奇妙的旅程。"`,

  `苏雅靠在他肩上，轻声说："是啊，如果不是那次相遇，我们可能永远不会认识。"林晨握住她的手："所以，每一个选择都很重要，每一次努力都不会白费。"`,

  `林晨知道，自己的故事还在继续。前方还有更多的挑战，更多的机遇。但无论发生什么，他都不会忘记那段从谷底爬回巅峰的日子——那是他人生中最宝贵的财富。`,

  `夜幕降临，城市的灯火点亮。林晨和苏雅并肩站在窗前，看着窗外的星空。林晨轻声说："苏雅，谢谢你陪我走过最难的日子。"苏雅摇头："是你教会我，什么叫永不放弃。"`,

  `两人相视而笑，心中满是温暖。林晨想起一句话：真正的强者，不是从不跌倒，而是每次跌倒后都能站起来。他曾经跌到谷底，但他没有<span class="w">kill(消灭)📢</span>自己的希望，而是用双手重新创造了未来。`,

  `周末，林晨和苏雅回到苏雅母亲家。苏雅母亲笑着迎接他们，桌上摆满了苏雅按照祖传<span class="w">recipe(食谱)📢</span>做的菜肴。林晨吃着，笑着说："妈，您做的菜永远是最好吃的。"苏雅母亲开心地笑了。`,

  `看着眼前的一切，林晨感到无比幸福。他终于明白，人生的意义不在于拥有多少财富，而在于遇到多少真心相待的人。他曾经以为自己会永远孤独，但现在，他有了家人，有了爱人，有了朋友。`,

  `林晨心中暗暗发誓，无论未来遇到什么困难，他都会像当年一样，用坚韧和勇气去面对。因为他知道，只要不放弃，命运总会眷顾那些努力的人。`,

  `故事的最后，林晨站在公司年会舞台上，向大家讲述自己的经历。他说："我曾经是一个被社会遗忘的孤儿，但我没有被命运打倒。我想告诉大家，无论你现在身处何方，无论你遭遇了多少失败，只要你愿意站起来，未来就在你手中。"`,

  `台下响起雷鸣般的掌声。苏雅站在人群中，眼中含着泪光。她知道，这个男人值得所有人的尊重，因为他用行动诠释了什么叫真正的逆袭。`,

  `年会结束后，林晨和苏雅并肩走在回家的路上。林晨突然停下脚步，指着前方说："看，那边有一条新的<span class="w">lane(小路)📢</span>。"苏雅笑着说："走吧，去看看。"两人手牵手，走向那条未知却充满希望的路。`,

  `林晨回头望了一眼身后的灯火，心中默默感谢那些曾经帮助过他的人。他知道，没有他们，就没有今天的自己。但他也知道，真正的改变，源于自己内心那个永不熄灭的<span class="w">signal(信号)📢</span>——我可以。`,

  `从此以后，林晨的人生开始了新的篇章。他不仅收获了事业的成功，更收获了珍贵的亲情和爱情。而那段从谷底重返巅峰的传奇之路，也成为了无数人心中照亮黑暗的灯塔。`,

  `林晨常常对年轻员工说："永远不要让过去的失败定义你的未来。每一次跌倒，都是为了更强大的站起。"这句话，成为了他人生的注脚，也成为了激励无数人的力量源泉。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>绝地反击：从谷底重返巅峰的传奇之路 · 学习版</title>
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
      <h1>绝地反击：从谷底重返巅峰的传奇之路</h1>
      <p class="sub">逆袭 · 励志 · 奋斗</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story25</span>从谷底重返巅峰的传奇</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>绝地反击：从谷底重返巅峰的传奇之路 · 学习版　|　看故事记单词</footer>
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
<title>绝地反击：从谷底重返巅峰的传奇之路 · 复习版</title>
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
      <h1>绝地反击：从谷底重返巅峰的传奇之路</h1>
      <p class="sub">逆袭 · 励志 · 奋斗</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story25</span>从谷底重返巅峰的传奇</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>绝地反击：从谷底重返巅峰的传奇之路 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '25_绝地反击_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '25_绝地反击_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：25_绝地反击_学习版.html');
console.log('✓ 已生成：25_绝地反击_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：绝地反击：从谷底重返巅峰的传奇之路`);
console.log(`- 题材：逆袭 · 励志 · 奋斗`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);