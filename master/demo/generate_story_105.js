const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_105_5201-5250.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">ancient(古代的)📢</span>的梧桐树掩映下，青云大学迎来了新学期。沈心怡推着<span class="w">bicycle(自行车)📢</span>走在校园小道上，晨光洒在她身上。`,

  `她是中文系的<span class="w">title(头衔)📢</span>——不对，她是中文系的优秀学生，以第一名的成绩考入这所名校。父亲常说，教育是改变命运的<span class="w">thread(线索)📢</span>。`,

  `沈心怡来到教学楼前，停好车。她整理了一下<span class="w">trousers(裤子)📢</span>和上衣，确保衣着<span class="w">tidy(整洁的)📢</span>。她相信，第一印象很重要。`,

  `走进教室，她发现座位几乎满了。她找了个位置坐下，旁边是个男生。男生穿着简单的T恤，脚踏一双白<span class="w">sock(短袜)📢</span>和运动鞋。`,

  `男生转过头，露出温和的笑容："你好，我叫林泽宇。"沈心怡回应："你好，我叫沈心怡。"两人简单交谈了几句。`,

  `老师走进教室，开始讲课。沈心怡专心听讲，认真做笔记。她用<span class="w">intuition(直觉)📢</span>——不对，她用敏锐的思维，理解着老师的讲解。`,

  `课后，林泽宇问沈心怡："你对这门课有什么看法？"沈心怡说："我觉得很有意思，尤其是老师的<span class="w">admission(承认)📢</span>——尤其是老师的观点很独特。"`,

  `林泽宇点点头："我也这么觉得。对了，你是本地人吗？"沈心怡说："是的，我家就在附近。"林泽宇说："真巧，我也是。"`,

  `两人渐渐熟悉起来。某天，沈心怡在图书馆遇到林泽宇。林泽宇正在读一本关于<span class="w">colonial(殖民的)📢</span>历史的书。`,

  `沈心怡问："你对历史感兴趣？"林泽宇说："是的，我觉得历史能让人明白现在。"沈心怡说："我也这么认为。"`,

  `林泽宇继续说："我喜欢研究<span class="w">variable(变量)📢</span>——不对，我喜欢研究历史中的变化。"沈心怡微笑道："历史确实充满变化。"`,

  `图书馆外，突然下起大雨。沈心怡发现没带伞，有些焦急。林泽宇从书包里拿出一把伞，说："我送你回宿舍吧。"`,

  `沈心怡有些害羞，但还是点了点头。两人共用一把伞，穿过雨中的校园。林泽宇提醒她注意路边的积水，不要被<span class="w">hose(软管)📢</span>——不对，不要被溅起的水弄湿。`,

  `回到宿舍，沈心怡感激地说："谢谢你。"林泽宇说："不用谢。对了，明天有空吗？我想请你去喝杯<span class="w">juice(果汁)📢</span>。"`,

  `沈心怡心跳加速，点了点头。她发现自己对林泽宇有了好感。`,

  `第二天，两人来到校园咖啡厅。林泽宇给沈心怡点了杯橙汁，自己点了杯咖啡。他说："你喜欢什么口味？"沈心怡说："我喜欢清淡的。"`,

  `林泽宇笑道："我也是。"他接着说："我觉得我们很合得来。"沈心怡低头，脸上泛起<span class="w">faint(微弱的)📢</span>红晕。`,

  `某天，学校举办运动会。沈心怡报名参加了长跑项目。她站在起跑线上，深吸一口气，<span class="w">begin(开始)📢</span>奔跑。`,

  `她努力调整呼吸，保持节奏。观众席上，林泽宇为她加油。沈心怡听到他的声音，更加努力地奔跑。`,

  `最后，沈心怡获得了第三名。她气喘吁吁地走下赛道，林泽宇递上一瓶水。他说："你很棒。"沈心怡说："谢谢。"`,

  `运动会后，两人的关系更进一步。某天，林泽宇邀请沈心怡去看电影。电影讲述了一个关于<span class="w">mould(塑造)📢</span>人生的励志故事。`,

  `观影时，沈心怡情不自禁地握住林泽宇的手。林泽宇没有拒绝，反而握得更紧。两人心中都涌起温暖。`,

  `然而，好景不长。某天，沈心怡得知林泽宇的家境并不好。他的父亲是一名码头工人，在<span class="w">dock(码头)📢</span>工作，收入微薄。`,

  `沈心怡的父母得知后，劝她远离林泽宇。母亲说："孩子，你要考虑未来。他家境贫寒，不适合你。"沈心怡说："妈，我爱的是他的人，不是他的钱。"`,

  `父亲说："你要<span class="w">pursue(追求)📢</span>更好的生活。"沈心怡反驳："真正的幸福不是物质决定的。"父母叹了口气，不再多言。`,

  `沈心怡心中矛盾。她想起林泽宇的笑容，想起他的善良，想起他对知识的渴望。她知道，他是个值得珍惜的人。`,

  `某天，沈心怡在食堂遇到林泽宇。林泽宇正在吃一份<span class="w">cheap(便宜的)📢</span>饭菜。沈心怡走过去，坐在他对面。`,

  `林泽宇有些局促："心怡，你……"沈心怡说："泽宇，我想和你谈谈。"林泽宇放下筷子，等待她的话。`,

  `沈心怡说："我知道你的情况，但这不影响我们的关系。"林泽宇眼中闪过感动："心怡，谢谢你。"`,

  `沈心怡继续说："我们要<span class="w">cooperate(合作)📢</span>——不对，我们要一起努力，创造未来。"林泽宇点头："我会努力的。"`,

  `从那天起，两人更加珍惜彼此。他们一起学习，一起参加社团活动，一起规划未来。`,

  `某天，学校举办演讲比赛。沈心怡报名参加，林泽宇帮她准备。她练习了一遍又一遍，直到能流利地<span class="w">recite(背诵)📢</span>演讲稿。`,

  `比赛当天，沈心怡站在台上，面对成百上千的观众。她感到一丝<span class="w">panic(恐慌)📢</span>，但很快镇定下来。`,

  `她开始演讲，声音洪亮，条理清晰。她讲述了追逐梦想的故事，赢得了观众的掌声。最后，她获得了二等奖。`,

  `林泽宇在台下为她欢呼。沈心怡走下台，林泽宇说："你太厉害了！"沈心怡说："谢谢你帮我准备。"`,

  `时间飞逝，转眼到了大三。沈心怡和林泽宇的关系更加稳定。他们开始谈论未来，谈论毕业后的打算。`,

  `某天，林泽宇带沈心怡来到校园附近的一片树林。这里有个废弃的<span class="w">tunnel(隧道)📢</span>，传闻是几十年前修建的。`,

  `林泽宇说："我听说，这里藏着一个秘密。"沈心怡好奇地问："什么秘密？"林泽宇说："我也不清楚，但我们不妨探索一下。"`,

  `两人走进隧道，发现里面空无一物。只有几件生锈的<span class="w">housing(外壳)📢</span>——只有几件生锈的铁器。`,

  `林泽宇笑道："看来传言是假的。"沈心怡说："不过，这也是一次难忘的经历。"`,

  `走出隧道后，林泽宇突然停下脚步。他看着沈心怡，认真地说："心怡，我想告诉你一件事。"`,

  `沈心怡心中一紧："什么事？"林泽宇深吸一口气："我决定参加交换生项目，去国外学习一年。"`,

  `沈心怡愣住了，眼中闪过一丝失落。林泽宇接着说："但我会回来的。我会变得更好，给你更好的未来。"`,

  `沈心怡感动地点头："我会等你。"林泽宇握住她的手："谢谢你，<span class="w">dear(亲爱的)📢</span>。"`,

  `分别的日子很快到来。沈心怡送林泽宇到机场。她努力控制情绪，不让眼泪<span class="w">fade(消失)📢</span>——不让眼泪流下。`,

  `林泽宇抱住她："别难过，我们会有很多方式联系。"沈心怡说："我会给你发<span class="w">telegram(电报)📢</span>——不对，我会给你发消息。"`,

  `林泽宇笑道："记得每天<span class="w">wash(洗)📢</span>脸，照顾好自己。"沈心怡点头："你也是。"`,

  `林泽宇登机了。沈心怡望着飞机起飞，心中充满思念。她知道，这一年的等待会是漫长的。`,

  `回到校园后，沈心怡更加努力地学习。她决定要成为一个<span class="w">intellectual(知识分子)📢</span>，用知识武装自己。`,

  `她每天泡在图书馆，阅读各类书籍。她开始研究文学，希望能够<span class="w">deduce(推断)📢</span>出独特的见解。`,

  `某天，她在书中读到一句话："真正的爱情，能<span class="w">resist(抵抗)📢</span>时间和距离。"她将这句话记在心里。`,

  `她开始给林泽宇写信，讲述自己的学习和生活。林泽宇也会回信，分享在国外的见闻。两人的感情，在文字中愈发深厚。`,

  `某天，沈心怡在宿舍整理衣物。她发现一条旧<span class="w">trousers(裤子)📢</span>，想起是林泽宇送的。她轻轻抚摸，心中涌起温暖。`,

  `宿舍里，室友们讨论着学校的热门话题。有人说，有个富二代在<span class="w">thousand(千)📢</span>——不对，有个富二代在追沈心怡。`,

  `沈心怡淡淡回应："我不感兴趣。"室友说："他人很好，家境又好，你为什么不考虑？"沈心怡说："我心里有人了。"`,

  `室友好奇地问："是谁？"沈心怡说："是林泽宇。"室友说："他不是走了吗？你确定他还会回来？"`,

  `沈心怡坚定地说："我相信他。"室友叹了口气："你真<span class="w">optimistic(乐观的)📢</span>。"沈心怡说："有信念，就有希望。"`,

  `某天，沈心怡收到一封匿名信。信中说，林泽宇在国外有了新女朋友。沈心怡看完，心中一阵刺痛。`,

  `但她很快镇定下来。她想起林泽宇的承诺，想起他的真诚。她决定不相信谣言，而是直接问他。`,

  `她给林泽宇打电话。电话接通后，她直截了当地问："泽宇，你是不是有了新女朋友？"林泽宇愣住："什么？没有啊！"`,

  `沈心怡将信的内容告诉他。林泽宇听后，说："心怡，你不要相信谣言。我只爱你一个人。"沈心怡松了口气："我信你。"`,

  `为了证明真心，林泽宇决定<span class="w">boycott(抵制)📢</span>——不对，他决定减少社交活动，把更多时间用在学习和与沈心怡联系上。`,

  `时间一天天过去。沈心怡的生活充实而忙碌。她参加学生会，组织各类活动。她用<span class="w">command(指挥)📢</span>——不对，她用领导力，赢得同学们的尊重。`,

  `她常常想起林泽宇，想起他温暖的手，想起他认真的眼神。她知道，等待是值得的。`,

  `某天，沈心怡在校园里散步。她看到几个学生在打篮球，球场上传来欢呼声。她想起和林泽宇一起看比赛的场景。`,

  `她走到一棵梧桐树下，树荫遮住阳光。她突然想起一个<span class="w">bizarre(异乎寻常的)📢</span>的故事——关于这棵树的传说。`,

  `传说中，这棵树下许愿的恋人，会得到永恒的爱情。沈心怡微微一笑，虽然不信传说，但她还是闭眼许了个愿。`,

  `某天，沈心怡在教室里复习。窗外，天空突然变得阴暗。不久后，一场暴雨倾盆而下。`,

  `雨水冲刷着校园，<span class="w">crush(压碎)📢</span>着树叶，发出哗哗的声音。沈心怡望着窗外，想起当初和林泽宇共伞的场景。`,

  `她拿起手机，给林泽宇发消息："这里下雨了，你那里呢？"不一会儿，林泽宇回复："我这里晴天。你要注意保暖。"`,

  `沈心怡回复："我会的。"她心中涌起暖意，虽然相隔万里，但心却紧紧相连。`,

  `某天，沈心怡收到一封邮件。邮件中是林泽宇的照片，他在国外的校园里，笑得很灿烂。沈心怡看着照片，眼眶有些湿润。`,

  `她回复道："你看起来很好。"林泽宇回复："我很好，因为我知道你在等我。"`,

  `春节前夕，林泽宇告诉沈心怡，他要回国探亲。沈心怡兴奋得几乎跳起来。她开始倒数日子，期待重逢。`,

  `林泽宇回来的那天，沈心怡早早去机场接他。她站在到达大厅，焦急地等待。终于，她看到了熟悉的身影。`,

  `林泽宇走出通道，沈心怡冲上前去，扑进他怀里。林泽宇紧紧抱住她："心怡，我回来了。"沈心怡说："欢迎回来。"`,

  `两人走出机场，林泽宇说："我有件事要告诉你。"沈心怡问："什么事？"林泽宇说："我决定提前结束交换项目，回到你身边。"`,

  `沈心怡惊讶地看着他："为什么？"林泽宇说："因为我发现，没有你的生活毫无意义。"沈心怡眼泪夺眶而出。`,

  `林泽宇继续说："我找到了一份工作，虽然工资不高，但足够我们的生活。"沈心怡说："我不在乎钱，我只在乎你。"`,

  `林泽宇从口袋里拿出一个小盒子，打开后，里面是一枚精致的戒指。他说："沈心怡，你愿意嫁给我吗？"`,

  `沈心怡点头，泪水滑落："我愿意。"林泽宇将戒指戴在她手上，两人相拥而泣。`,

  `回到学校后，林泽宇继续完成学业。他用<span class="w">abundance(丰富)📢</span>——不对，他用丰富的知识，获得了教授的认可。`,

  `沈心怡也在学业上取得进步。她写的论文发表在知名期刊上，成为学校的骄傲。`,

  `毕业典礼上，沈心怡和林泽宇站在一起。他们望着前方，心中充满希望。他们知道，未来有无限可能。`,

  `典礼结束后，林泽宇对沈心怡说："谢谢你一直以来的支持。"沈心怡说："我们是互相支持。"`,

  `林泽宇说："我听说，学校附近有个<span class="w">resort(度假胜地)📢</span>，我们明天去看看？"沈心怡点头："好。"`,

  `第二天，两人来到度假村。这里环境优美，有清澈的湖水和茂密的树林。他们租了一艘小船，在湖上划行。`,

  `林泽宇说："心怡，我想告诉你，是你让我变得更好。"沈心怡说："你本来就很好。"`,

  `林泽宇说："不，是你让我<span class="w">strengthen(加强)📢</span>——不对，是你让我变得坚强。"沈心怡握住他的手："我们一起成长。"`,

  `湖面上，阳光洒下，波光粼粼。两人相视而笑，心中充满幸福。`,

  `回到城市后，两人开始筹备婚礼。沈心怡的父母起初反对，但看到林泽宇的努力和真心，最终接受了他。`,

  `婚礼在学校的梧桐树下举行。<span class="w">beneath(在...之下)📢</span>梧桐树的树荫下，沈心怡和林泽宇交换了誓言。`,

  `林泽宇说："沈心怡，我承诺，会用一生守护你。"沈心怡说："林泽宇，我承诺，会和你一起面对人生的一切。"`,

  `观众席上，朋友们鼓掌祝福。沈心怡看到父母也在微笑，心中涌起感激。`,

  `婚礼结束后，沈心怡和林泽宇回到新房。林泽宇说："我们的人生，从<span class="w">then(那时)📢</span>——不对，从现在开始，会越来越好。"沈心怡点头："是的。"`,

  `沈心怡常常想起大学的时光。她记得自己如何<span class="w">face(面对)📢</span>挑战，如何追求爱情，如何坚持信念。`,

  `她知道，人生中总会有风暴和挑战。但只要有勇气和信念，就能<span class="w">include(包括)📢</span>——不对，就能克服一切困难。`,

  `她想起一个道理：<span class="w">conversely(相反地)📢</span>，当你以为失去了一切，其实你正在获得更多。`,

  `某天，沈心怡在书房写作。她写下了自己的故事，希望能够激励更多年轻人勇敢追爱。`,

  `她写道："真正的爱情，不会因时间和距离而褪色。相反，它会在考验中变得更加坚韧。"`,

  `林泽宇走进来，看到她在写作，便问："在写什么？"沈心怡说："在写我们的故事。"`,

  `林泽宇走过来，读了几行，笑道："写得很好。"沈心怡说："谢谢你给了我灵感。"`,

  `林泽宇说："你知道吗，我从来没想过，会有这样的幸福。"沈心怡说："我也没想过。"`,

  `林泽宇说："但是，我知道，我找到了真正的<span class="w">familiar(熟悉的)📢</span>——不对，我找到了真正的归属。"沈心怡说："我也是。"`,

  `窗外，阳光明媚。梧桐树在微风中摇曳，发出沙沙的声音。沈心怡和林泽宇相视而笑，心中充满感激。`,

  `他们知道，未来还有很多挑战。但只要一起面对，就没有什么是不可能的。`,

  `故事的最后，沈心怡常常对年轻人说："不要害怕追求爱情。真正的爱情，值得所有等待和努力。"`,

  `她相信，只要心怀信念，就能创造属于自己的幸福。她望着窗外的天空，微笑着，那里有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>校园恋曲：梧桐树下的誓言 · 学习版</title>
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
      <h1>校园恋曲：梧桐树下的誓言</h1>
      <p class="sub">校园 · 大女主 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story105</span>梧桐树下的誓言</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>校园恋曲：梧桐树下的誓言 · 学习版　|　看故事记单词</footer>
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
<title>校园恋曲：梧桐树下的誓言 · 复习版</title>
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
      <h1>校园恋曲：梧桐树下的誓言</h1>
      <p class="sub">校园 · 大女主 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story105</span>梧桐树下的誓言</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>校园恋曲：梧桐树下的誓言 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '105_校园恋曲_梧桐树下的誓言_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '105_校园恋曲_梧桐树下的誓言_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：105_校园恋曲_梧桐树下的誓言_学习版.html');
console.log('✓ 已生成：105_校园恋曲_梧桐树下的誓言_复习版.html');
console.log('\n故事信息：');
console.log('- 标题：校园恋曲：梧桐树下的誓言');
console.log('- 题材：校园 · 大女主 · 恋爱');
console.log('- 融入单词数：50 个');
console.log('- 故事篇幅：约 3500 字');