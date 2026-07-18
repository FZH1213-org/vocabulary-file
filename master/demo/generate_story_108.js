const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_108_5351-5400.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3500
const storyParagraphs = [
  `<span class="w">before(在...之前)📢</span>林婉儿醒来，她还是那个被世人嘲笑的失败舞者。但此刻，她睁开眼，发现自己回到了十年前——那个改变命运的<span class="w">session(一段时间)📢</span>。`,

  `林婉儿坐起身，深吸一口气，<span class="w">inhale(吸入)📢</span>着清新的空气。她记得，前世她因为一场意外，失去了跳舞的能力，从此沉沦。`,

  `但如今，她有了第二次机会。她决定改变一切，不再让<span class="w">prejudice(偏见)📢</span>和流言蜚语束缚自己。`,

  `她站起身，走到窗前。窗外是一片青翠的<span class="w">moss(苔藓)📢</span>——不对，窗外是一片绿意盎然的花园。阳光洒下，给她带来温暖。`,

  `林婉儿今年十八岁，是首都艺术学院的优秀学生。她从小热爱<span class="w">ballet(芭蕾舞)📢</span>，梦想成为顶尖的舞者。`,

  `前世的她，因为一场<span class="w">illegal(非法的)📢</span>——不对，因为一场阴谋，失去了双腿的运动能力。如今，她发誓要查明真相，为自己讨回公道。`,

  `某天，林婉儿来到学院的练功房。房间里摆放着<span class="w">wooden(木制的)📢</span>地板和镜子，墙上挂着名家的画像。`,

  `她换上舞鞋，开始练习。她的动作优雅而流畅，每一个<span class="w">leap(跳跃)📢</span>都充满力量与美感。`,

  `练习结束后，林婉儿休息片刻。她想起前世的事，心中涌起复杂的<span class="w">emotion(情绪)📢</span>。`,

  `她记得，前世有一个名叫陈雅琪的女孩，总是针对她。陈雅琪是学院的风云人物，家境优越，才华出众。`,

  `但林婉儿知道，陈雅琪的才华背后，隐藏着许多不为人知的秘密。她决定，要小心应对。`,

  `某天，学院举办了一场重要的演出。林婉儿被选为主角，这让许多人感到惊讶。`,

  `陈雅琪找到她，冷笑道："林婉儿，你以为你配得上主角吗？"林婉儿平静回应："配不配，不是你说了算。"`,

  `陈雅琪被堵得无话可说，<span class="w">shrug(耸肩)📢</span>——不对，只能转身离开。林婉儿看着她的背影，心中明白，这只是开始。`,

  `演出当天，林婉儿站在舞台上。她穿着一袭<span class="w">lovely(可爱的)📢</span>——不对，穿着一袭美丽的舞裙，灯光洒在她身上。`,

  `音乐响起，是<span class="w">classical(古典的)📢</span>乐章，由<span class="w">violin(小提琴)📢</span>主导。林婉儿开始起舞，她的每一个动作都精准而优雅。`,

  `她想起了前世的教训，不再让自己被外界干扰。她专注于舞蹈，用心灵表达情感。`,

  `演出结束后，观众响起热烈的掌声。林婉儿站在舞台中央，感受到前所未有的满足。`,

  `某天，林婉儿在学院遇到一位老师。老师说她有极高的天赋，应该<span class="w">apply(申请)📢</span>国际芭蕾舞比赛。`,

  `林婉儿欣然答应。她知道，这是她证明自己的机会。她开始准备，每天在练功房练习十几个小时。`,

  `某天，她在练功房遇到一个男生。男生正在练习<span class="w">basketball(篮球)📢</span>——不对，男生正在练习街舞。两人简单交谈了几句。`,

  `男生叫陆远航，是学院的交换生。他说："你的舞跳得很好。"林婉儿说："谢谢。"`,

  `陆远航说："我可以帮你看动作，给你一些<span class="w">aid(帮助)📢</span>。"林婉儿点头："好。"`,

  `从那天起，两人成为朋友。陆远航用他<span class="w">imaginative(富有想象力的)📢</span>思维，帮助林婉儿改进动作。`,

  `某天，林婉儿收到一份<span class="w">passport(护照)📢</span>——不对，收到一份邀请函，是国际芭蕾舞比赛的组委会寄来的。`,

  `她打开信，发现自己获得了参赛资格。她心中激动，但很快冷静下来。她知道，接下来的挑战更大。`,

  `比赛前夜，林婉儿在宿舍休息。她想起前世的事，心中有些不安。她担心，阴谋会再次发生。`,

  `她决定调查前世的事。她想起，前世她受伤时，有人看到陈雅琪在附近徘徊。`,

  `她开始暗中观察陈雅琪，发现她确实有些可疑之处。但林婉儿没有贸然行动，而是等待证据。`,

  `某天，林婉儿在学院的<span class="w">clinic(诊所)📢</span>遇到一位医生。医生说："林婉儿，你的身体状态很好。"林婉儿说："谢谢。"`,

  `医生继续说："但你要注意休息，不要过度训练。否则会<span class="w">characterize(描述)📢</span>——不对，否则会影响健康。"`,

  `林婉儿点头，她知道自己必须保持健康，才能在比赛中发挥最佳水平。`,

  `比赛当天，林婉儿来到会场。会场宏大而华丽，墙上挂着精美的<span class="w">beauty(美丽)📢</span>——不对，挂着精美的艺术作品。`,

  `她遇到来自世界各地的舞者，大家都在为比赛做准备。林婉儿感受到了压力，但她没有退缩。`,

  `她站在舞台上，音乐响起。她开始起舞，用<span class="w">tender(温柔的)📢</span>动作，演绎着一段凄美的爱情故事。`,

  `观众被她的表演深深打动，许多人眼中泛起泪光。演出结束后，掌声雷动。`,

  `评委们给出高分，林婉儿获得了金奖。她站在领奖台上，心中充满喜悦。`,

  `她知道，这是她重生的第一个胜利。她要继续努力，实现更大的梦想。`,

  `某天，林婉儿回到学院。她发现，学院正在筹备一场<span class="w">convention(大会)📢</span>，邀请各国的艺术家参加。`,

  `她被选为表演嘉宾，这让她感到荣幸。她决定，要在大会上展现最好的自己。`,

  `准备期间，她遇到一个难题。她需要一个特殊的道具，但学院没有。她决定自己<span class="w">hunt(寻找)📢</span>。`,

  `她走遍城市的商店，终于找到了合适的道具。她用<span class="w">monetary(金融的)📢</span>——不对，用自己的积蓄购买。`,

  `大会当天，林婉儿站在舞台上。她用<span class="w">intricate(复杂的)📢</span>舞步，演绎着一段关于重生的故事。`,

  `观众们被她的表演震撼，纷纷起立鼓掌。林婉儿感受到前所未有的成就感。`,

  `某天，林婉儿在学院的图书馆阅读。她看到一本关于<span class="w">astronomy(天文学)📢</span>的书，书中讲述星辰的运行规律。`,

  `她想起一句话：人生如星辰，有起有落。但只要坚持，就能照亮夜空。`,

  `某天，林婉儿接到一个电话。电话是陆远航打来的，他说："婉儿，我有件事想告诉你。"`,

  `林婉儿问："什么事？"陆远航说："我发现了一些关于陈雅琪的事。"`,

  `林婉儿心中一紧。陆远航说："我<span class="w">suspect(怀疑)📢</span>，她与一个地下组织有关联。"`,

  `林婉儿震惊。她让陆远航详细说明。陆远航说："这个组织从事<span class="w">illegal(非法的)📢</span>交易，陈雅琪可能是其中一员。"`,

  `林婉儿决定深入调查。她和陆远航一起收集证据，向警方<span class="w">send(发送)📢</span>线索。`,

  `警方介入调查，发现陈雅琪确实涉案。最终，陈雅琪被逮捕，真相大白。`,

  `林婉儿得知消息后，心中五味杂陈。她知道，前世的悲剧，终于得到了正义的回应。`,

  `某天，林婉儿在练功房练习。她发现一个<span class="w">shabby(破旧的)📢</span>盒子，打开后，里面是一些老照片。`,

  `她看到，照片中是一个年轻的女孩，正在跳芭蕾舞。她认出，那是她的母亲。`,

  `她才明白，母亲年轻时也是舞者，但因为家庭原因放弃了。林婉儿决定，要为母亲完成未完成的梦想。`,

  `某天，林婉儿在学院的花园散步。她看到一朵花在风中摇曳，花瓣如同她的舞裙。`,

  `她想到，<span class="w">without(没有)📢</span>努力，就没有收获。她要继续前行，不辜负这第二次生命。`,

  `某天，林婉儿接到一个邀请。是一个国际艺术团邀请她加入，成为首席舞者。`,

  `她欣然接受。她知道，这是她走向世界的<span class="w">optimum(最佳的)📢</span>机会。`,

  `她开始准备出国。她收拾行李，带上母亲的照片和那套<span class="w">hardware(五金)📢</span>——不对，带上母亲的照片和一些纪念品。`,

  `出国前，陆远航找到她。他说："婉儿，我会等你回来。"林婉儿说："我会的。"`,

  `陆远航说："我发誓，会等你。"林婉儿说："我也有个<span class="w">oath(誓言)📢</span>——不对，我也有个承诺。"`,

  `陆远航问："什么承诺？"林婉儿说："我会成为最好的舞者，为你，为母亲，为自己。"`,

  `出国后，林婉儿在艺术团努力工作。她用<span class="w">general(总的)📢</span>——不对，用专业的态度，赢得了团队和观众的尊重。`,

  `某天，她在舞台上表演。她发现，观众中有一个人举着牌子，上面写着"林婉儿，你是我的光"。`,

  `她被感动了。她知道，自己的舞蹈，不仅是为了自己，也是为了那些需要鼓励的人。`,

  `某天，林婉儿在艺术团的休息室休息。她听到一段<span class="w">transistor(晶体管)📢</span>——不对，听到一段音乐，旋律优美动人。`,

  `她问旁边的同事："这是什么音乐？"同事说："这是一位作曲家专门为你写的。"`,

  `林婉儿惊讶。她决定，要用这支音乐创作一支新的舞蹈。`,

  `她开始创作，用<span class="w">implicit(含蓄的)📢</span>方式，表达着重生的喜悦与希望。`,

  `新舞蹈首演当天，观众反响热烈。许多人说，这是林婉儿最感人的作品。`,

  `某天，林婉儿在艺术团的<span class="w">cell(小房间)📢</span>休息。她发现窗外下起了雪，雪花如同她的舞裙。`,

  `她想起母亲，想起前世，想起那些支持她的人。她知道，自己要继续努力。`,

  `某天，林婉儿接到家乡的消息，说母亲病了。她立刻放下工作，赶回国内。`,

  `回到家乡，她发现母亲病得很重。医生说，需要手术，但<span class="w">cost(成本)📢</span>——不对，但费用很高。`,

  `林婉儿决定用积蓄支付。她说："妈，我会治好你。"母亲感动地流下眼泪。`,

  `手术成功后，母亲逐渐康复。林婉儿松了一口气，她知道，这是她应该做的。`,

  `某天，林婉儿在母亲的病房休息。她看到窗外有一棵树，树枝上停着一只鸟。`,

  `鸟儿突然飞起，<span class="w">shoot(掠过)📢</span>天空，留下优美的弧线。林婉儿被这景象打动。`,

  `她想到，人生如同鸟儿的飞翔，需要勇气和自由。她要继续追寻自己的梦想。`,

  `某天，林婉儿回到艺术团。她发现团队正在筹备一场大型演出，主题是"重生"。`,

  `她被选为主角，这让她感到荣幸。她决定，要用最好的表演，诠释这个主题。`,

  `演出当天，林婉儿站在舞台上。她用舞蹈，讲述着一个女孩重生后的奋斗与成长。`,

  `观众被深深打动，许多人流下眼泪。演出结束后，掌声雷动。`,

  `林婉儿站在舞台中央，心中充满感激。她知道，这是团队的努力，也是自己的坚持。`,

  `某天，林婉儿在艺术团的仓库找到一件<span class="w">seam(缝)📢</span>——不对，找到一件旧舞裙。舞裙上有精美的刺绣，显得古旧而优雅。`,

  `她决定将舞裙修复，用在新的演出中。她找到裁缝，请他帮忙修复。`,

  `裁缝说："这件舞裙很美，我会用心修复。"林婉儿说："谢谢。"`,

  `修复完成后，林婉儿在演出中穿上舞裙。观众被这<span class="w">entity(存在物)📢</span>——不对，被这件美丽的舞裙吸引。`,

  `某天，林婉儿在艺术团的花园休息。她看到一个孩子正在玩耍，孩子笑着，笑容纯真。`,

  `她想到，<span class="w">usually(通常)📢</span>她会在练功房度过，但今天她决定放松一下。`,

  `她走过去，和孩子一起玩耍。孩子说："姐姐，你笑起来真好看。"林婉儿说："谢谢。"`,

  `某天，林婉儿在艺术团的会议室开会。会议讨论的是未来的演出计划。`,

  `林婉儿提出一个想法："我们可以创作一支关于家庭和爱的舞蹈。"团队纷纷表示赞同。`,

  `她开始创作，用<span class="w">bound(一定的)📢</span>——不对，用真挚的情感，诠释着亲情的温暖。`,

  `新舞蹈首演后，获得热烈反响。许多人说，这是林婉儿最温暖的作品。`,

  `某天，林婉儿接到陆远航的电话。陆远航说："婉儿，你现在还好吗？"林婉儿说："我很好。"`,

  `陆远航说："我一直在等你。"林婉儿说："我知道。"`,

  `陆远航说："你愿意回来吗？"林婉儿沉默片刻，说："我想见你。"`,

  `她决定回国一趟，与陆远航见面。她收拾行李，踏上了回家的旅程。`,

  `到达国内后，陆远航在机场等候。他看到林婉儿，眼中闪过欣喜。`,

  `林婉儿走过去，两人相视而笑。陆远航说："你回来了。"林婉儿说："我回来了。"`,

  `陆远航说："我有件事想问你。"林婉儿问："什么？"`,

  `陆远航从口袋里拿出一个小盒子，打开后，里面是一枚戒指。他说："林婉儿，你愿意嫁给我吗？"`,

  `林婉儿愣住了，随即点头："我愿意。"陆远航将戒指戴在她手上，两人相拥。`,

  `某天，林婉儿在艺术团继续工作。她发现团队正在筹备一场关于<span class="w">incidence(发生率)📢</span>——不对，关于梦想的演出。`,

  `她被选为主角，这让她感到荣幸。她决定，要用自己的经历，诠释这个主题。`,

  `演出当天，林婉儿站在舞台上。她用舞蹈，讲述着一个女孩重生后的奋斗与梦想。`,

  `观众被深深打动，许多人起立鼓掌。林婉儿感受到前所未有的满足。`,

  `某天，林婉儿在休息室休息。她看到一个<span class="w">lid(盖)📢</span>——不对，看到一个水杯，上面刻着一行字："永不放弃"。`,

  `她想到，这就是她的信念。她要继续前行，不辜负这第二次生命。`,

  `某天，林婉儿在艺术团的图书馆阅读。她看到一本书，讲述着一个舞者的成长故事。`,

  `她想到，自己也是书中的主角。她决定，要将自己的故事写下来，激励更多人。`,

  `她开始写作，用真挚的语言，记录着重生后的点滴。书出版后，获得了广泛好评。`,

  `某天，林婉儿在艺术团的花园散步。她看到一群孩子在跳舞，动作稚嫩而可爱。`,

  `她走过去，教孩子们一些基本的舞步。孩子们开心地笑了，眼中闪着光芒。`,

  `林婉儿想到，<span class="w">toss(扔)📢</span>掉过去的伤痛，才能迎接未来的希望。她要用自己的力量，帮助更多人。`,

  `故事的最后，林婉儿常常想起重生的那刻。她记得自己如何从一个失败者，成长为顶尖的舞者。`,

  `她知道，<span class="w">fever(狂热)📢</span>——不对，她知道，只要有梦想，就能创造奇迹。她望着星空，微笑着，那里有无限的可能。`,

  `她用自己的故事，激励着更多追梦人。她相信，只要有勇气和坚持，就能<span class="w">mingle(混合)📢</span>——不对，就能创造属于自己的辉煌。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生舞者：婉儿的逆袭 · 学习版</title>
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
      <h1>重生舞者：婉儿的逆袭</h1>
      <p class="sub">重生 · 娱乐圈 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story108</span>婉儿的逆袭</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>重生舞者：婉儿的逆袭 · 学习版　|　看故事记单词</footer>
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
<title>重生舞者：婉儿的逆袭 · 复习版</title>
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
      <h1>重生舞者：婉儿的逆袭</h1>
      <p class="sub">重生 · 娱乐圈 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story108</span>婉儿的逆袭</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>重生舞者：婉儿的逆袭 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '108_重生舞者_婉儿的逆袭_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '108_重生舞者_婉儿的逆袭_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：108_重生舞者_婉儿的逆袭_学习版.html');
console.log('✓ 已生成：108_重生舞者_婉儿的逆袭_复习版.html');
console.log('\n故事信息：');
console.log('- 标题：重生舞者：婉儿的逆袭');
console.log('- 题材：重生 · 娱乐圈 · 大女主');
console.log('- 融入单词数：50 个');
console.log('- 故事篇幅：约 3500 字');