const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_047_2301-2350.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `清晨的阳光透过古老的玻璃窗洒进钟楼，陈默站在高高的<span class="w">pillar(柱子)📢</span>旁，仰望着眼前这座摇摇欲坠的古建筑。作为一名古建筑修复专家，他的任务是<span class="w">construct(建设)📢</span>和修复这座百年钟楼，让它重现昔日风采。这是他<span class="w">first(第一)📢</span>次独立负责如此重要的项目，心中既紧张又<span class="w">proud(自豪的)📢</span>。`,

  `陈默从背包里拿出一本厚厚的<span class="w">journal(期刊)📢</span>，上面记录着这座钟楼的每一个细节。他习惯在工作前仔细<span class="w">observation(观察)📢</span>建筑的整体结构，确保修复方案的<span class="w">basis(基础)📢</span>牢靠。这座钟楼曾是城市的地标，如今却因年久失修而<span class="w">natural(自然的)📢</span>老化，亟需专业团队的精心呵护。`,

  `楼内的<span class="w">corridor(走廊)📢</span>布满了灰尘和蛛网，陈默小心翼翼地前行，生怕踩坏了脚下的老地板。墙角的<span class="w">wheel(轮子)📢</span>装置已经锈迹斑斑，那是曾经驱动钟摆的核心部件。陈默轻轻叹了口气——<span class="w">whatever(无论什么)📢</span>原因导致这座钟楼被遗弃，都是对历史的一种亏欠。`,

  `钟楼的核心是一座巨大的<span class="w">pendulum(钟摆)📢</span>钟，它曾经每小时准时敲响，提醒着城市居民时间的流逝。陈默站在巨大的钟面前，感受着时间仿佛凝固在这一<span class="w">moment(片刻)📢</span>。他需要让这个<span class="w">system(系统)📢</span>重新运转起来，这不仅是技术活，更是对历史的尊重。`,

  `正当陈默全神贯注时，楼下传来急促的脚步声。助手小张<span class="w">haste(匆忙)📢</span>跑上来，气喘吁吁地说："陈工，不好了！有人在网上散布谣言，说我们在破坏文物！"陈默眉头一皱——这显然是有人故意抹黑。他立刻打开<span class="w">internet(互联网)📢</span>，果然看到一篇充满恶意的文章。`,

  `文章声称修复团队是在"<span class="w">blackmail(敲诈)📢</span>政府资金"，还配发了几张被刻意截取的照片。陈默看着那些断章取义的内容，心中的<span class="w">sentiment(感情)📢</span>难以平复。他知道，这是竞争对手在背后捣鬼，试图<span class="w">break(打破)📢</span>他的项目。`,

  `陈默沉住气，对助手说："我们用事实说话。准备一份详细报告，向公众展示我们的专业<span class="w">performance(表演)📢</span>和成果。"他知道，在这种时候，急躁只会让事情变得更糟。他需要<span class="w">consideration(考虑)📢</span>周全，用专业赢得信任。`,

  `接下来的日子，陈默每天都在钟楼里忙碌。他反复检查每一个零件，确保修复工作<span class="w">fulfill(完成)📢</span>到位。巨钟的核心是一个精密的齿轮<span class="w">factory(工厂)📢</span>制造的产品，虽然年代久远，但质量依然可靠。陈默明白，只有让钟楼真正恢复运转，谣言才会自动消散。`,

  `某天下午，陈默接到一个意外的电话。一家<span class="w">notable(显著的)📢</span>建筑杂志想要<span class="w">interview(面试)📢</span>他，了解钟楼修复的故事。陈默欣然同意，他觉得这是一个向公众展示真相的机会。采访当天，他带着记者走过钟楼的每一个角落，详细讲解修复的技术细节。`,

  `"这座钟楼的修复<span class="w">rate(速率)📢</span>在同类项目中属于前列，"陈默自信地说，"我们采用传统工艺与现代技术<span class="w">parallel(平行的)📢</span>推进的方式，既保留了历史风貌，又提高了结构安全。"记者频频点头，对陈默的专业态度表示赞赏。`,

  `采访结束后，陈默回到钟楼继续工作。他发现一个大问题：钟楼的木材供应出现严重<span class="w">shortage(不足)📢</span>，原本指定的木材商临时提价，试图坐地起价。陈默冷笑——这种手段他见多了，绝不会让对方的<span class="w">ego(自我)📢</span>得逞。`,

  `他立刻联系了<span class="w">repeatedly(重复地)📢</span>合作过的供应商，很快找到了替代方案。新供应商提供的木材<span class="w">sample(样品)📢</span>经过严格检测，质量完全达标。<span class="w">plus(加上)📢</span>价格合理，陈默果断签下了合同。`,

  `木材到位后，修复工作进入快车道。陈默每天清晨出发，<span class="w">commute(通勤)📢</span>一小时才能到达钟楼。但他从不觉得辛苦，反而很<span class="w">relish(享受)📢</span>这种充实的生活。他相信，只要坚持<span class="w">just(公正的)📢</span>原则，终会赢得尊重。`,

  `工作之余，陈默喜欢坐在钟楼的窗边，<span class="w">sip(抿)📢</span>一口热茶，看着窗外的城市风景。远处有一只<span class="w">eagle(鹰)📢</span>在天空盘旋，自由的身影让他心生向往。他觉得自己就像那只鹰，在天空中寻找着属于自己的方向。`,

  `钟楼的修复不是<span class="w">static(静态的)📢</span>的工作，而是一个动态的、不断调整的过程。陈默需要不断<span class="w">convert(转换)📢</span>思路，应对各种突发状况。比如某天突然发现地下室的<span class="w">ozone(臭氧)📢</span>浓度异常，他立即组织团队排查原因，最终发现是通风系统堵塞。`,

  `陈默常说，修复古建筑就像研究<span class="w">molecule(分子)📢</span>结构——需要精准到每一个细节。他用专业仪器检测木材的<span class="w">its(它的)📢</span>内部结构，确保没有隐患。这种严谨的态度，赢得了文物部门的<span class="w">approve(赞成)📢</span>和支持。`,

  `某个周末，陈默接到老朋友的电话，邀请他参加一场<span class="w">recreation(娱乐)📢</span>活动。陈默婉言谢绝——他<span class="w">need(需要)📢</span>全身心投入钟楼项目，无暇分心。朋友笑他是个工作狂，陈默却<span class="w">deem(认为)📢</span>这是一种责任。`,

  `时间一天天过去，钟楼的修复工作逐渐接近尾声。陈默站在钟楼顶端，俯瞰整个城市，心中充满感慨。他想起了大学时在建筑系的日子，那时他常翻阅专业<span class="w">journal(杂志)📢</span>，梦想着有朝一日能修复一座真正的古建筑。如今，梦想成真。`,

  `开幕典礼定在<span class="w">moment(时刻)📢</span>下午三点。陈默提前两小时到达，做最后的检查。他来到钟楼的机械室，看着巨大的齿轮和<span class="w">pendulum(钟摆)📢</span>，轻轻抚摸着这些冰冷的金属，仿佛能感受到它们跳动的脉搏。`,

  `典礼开始前，市长亲自前来视察。他握着陈默的手说："陈工，感谢你让这座钟楼重获新生。你用行动<span class="w">fulfill(完成)📢</span>了对历史文化的承诺。"陈默谦虚地说："这是团队的努力，我只是其中一员。"市长大笑："你太低调了，我<span class="w">compare(比较)📢</span>过很多项目，你的专业精神是<span class="w">notable(显著的)📢</span>的。"`,

  `典礼正式开始，陈默站在台上，看着台下密密麻麻的人群。他想起修复过程中的艰辛——供应商刁难、谣言攻击、资金短缺……这些曾经让他感到心中像堵了一<span class="w">lump(块)📢</span>石头。但如今，一切都过去了。`,

  `钟楼的重启仪式上，陈默被问到成功的秘诀。他想了想，说："没有什么秘诀，就是坚持和热爱。我把这座钟楼当成我的孩子，用心呵护<span class="w">its(它的)📢</span>每一个细节。"台下响起热烈的掌声。`,

  `典礼结束后，陈默独自站在钟楼顶层。夕阳西下，金色的光芒洒在古老的石墙上，显得格外温柔。他轻轻抚摸着身边的<span class="w">pillar(柱子)📢</span>，仿佛能感受到它的呼吸。这座钟楼，不再是冰冷的建筑，而是有生命的朋友。`,

  `突然，身后传来轻微的脚步声。陈默转头，看到项目负责人苏雅正微笑着走来。她手里端着两杯红酒，递给陈默一杯："庆祝一下？"陈默接过酒杯，轻轻<span class="w">sip(抿)📢</span>了一口，感受着成功的甘甜。`,

  `"谢谢你，陈默。"苏雅真诚地说，"如果没有你，这个项目不可能完成。"陈默摇头："是团队的力量，我只是做了自己<span class="w">need(需要)📢</span>做的事。"苏雅看着他，眼中闪过一丝温柔："你总是这么谦虚。你知道吗，我最欣赏的就是你这种<span class="w">just(公正的)📢</span>和坚持。"`,

  `两人站在窗前，看着城市的灯火逐渐亮起。苏雅轻声说："修复钟楼，其实也在修复我们自己的内心。"陈默点头："是啊，这座钟楼让我明白了很多道理。"<span class="w">god(上帝)📢</span>安排的每一次挑战，都是为了让我们成长。`,

  `几个月后，钟楼成为城市的新地标，每天吸引大量游客参观。陈默经常回到这里，像探望老朋友一样。他喜欢站在钟楼的<span class="w">corridor(走廊)📢</span>里，听着钟声响起，感受时间的流淌。`,

  `某天，陈默接到一个陌生电话。对方自称是文物局的官员，想要<span class="w">interview(面试)📢</span>他，邀请他参与一个更大规模的修复项目。陈默欣然答应，心中充满期待。他知道，这是他职业生涯新的起点。`,

  `新项目位于一座古老的庄园，需要修复的不仅是建筑，还有园内的<span class="w">factory(工厂)📢</span>遗址和园林景观。陈默仔细研究资料，发现这座庄园曾是一位贵族的住所，拥有丰富的历史故事。他决定用<span class="w">first(第一)📢</span>次修复钟楼时积累的经验，去迎接新的挑战。`,

  `开工前，陈默站在庄园门口，深吸一口气。空气中带着清新的气息，<span class="w">ozone(臭氧)📢</span>含量适中，让人感觉神清气爽。他相信，只要用心去做，就没有<span class="w">whatever(无论什么)📢</span>困难无法克服。`,

  `庄园的修复需要大量的木材和石材，陈默提前联系了可靠的供应商。他知道材料<span class="w">shortage(不足)📢</span>是最常见的问题，必须提前准备。他<span class="w">compare(比较)📢</span>了多家供应商的报价和质量，最终选择了性价比最高的方案。`,

  `修复过程中，陈默遇到了不少难题。比如庄园的地下水<span class="w">system(系统)📢</span>老化严重，需要彻底更换。他用专业的<span class="w">weapon(武器)📢</span>级设备进行探测，发现了几处隐藏的漏水点。这些细节如果被忽视，后果不堪设想。`,

  `陈默的认真态度得到了团队的认可。大家<span class="w">approve(赞成)📢</span>他的工作方式，愿意跟随他的节奏。陈默常说："修复古建筑，不是简单的施工，而是对历史的敬畏。"他的话让团队成员更加珍惜这份工作。`,

  `某天，陈默在庄园的花园里发现了一座古老的水池。池边立着一根刻有<span class="w">eagle(鹰)📢</span>图案的<span class="w">pillar(柱子)📢</span>，虽然已经风化，但依然能看出精湛的工艺。陈默决定保留这座水池，让它成为庄园修复的一个亮点。`,

  `他仔细<span class="w">observation(观察)📢</span>水池的构造，发现它采用了一种独特的循环系统，可以将水<span class="w">convert(转换)📢</span>后重新利用。这种设计在当年非常先进，体现了古人的智慧。陈默决定修复这套系统，让水池重新流动起来。`,

  `经过几个月的努力，庄园修复完成。开放典礼上，游客们惊叹于庄园的美丽和历史韵味。陈默站在人群中，听着大家的赞美，心中充满<span class="w">proud(自豪的)📢</span>感。他用专业和坚持，再次证明了自己的价值。`,

  `"陈工，恭喜你！"苏雅从人群中走来，笑容灿烂。陈默微笑道："谢谢，没有你们的支持，我一个人做不到。"苏雅看着他的眼睛，认真地说："你知道吗，我一直在关注你的工作。你的<span class="w">performance(表演)📢</span>，让我看到了什么叫专业。"`,

  `陈默有些不好意思地挠挠头："我只是做了我该做的。"苏雅递给他一张卡片："这是我新项目的联系方式，如果感兴趣，可以加入。"陈默接过卡片，点头道："我会<span class="w">consideration(考虑)📢</span>的。"`,

  `那天晚上，陈默坐在酒店阳台上，<span class="w">sip(抿)📢</span>着红酒，回忆着一路走来的点点滴滴。从第一次修复钟楼时的忐忑，到如今的自信从容，他明白了一个道理：只要坚持初心，<span class="w">whatever(无论什么)📢</span>困难都能克服。`,

  `他想起父亲曾经说过的话："人生就像一座钟楼，需要用心去<span class="w">construct(建设)📢</span>和维护。时间会带走很多东西，但也会留下真正有价值的东西。"陈默轻轻点头，感谢父亲给他的智慧。`,

  `夜深了，陈默回到房间。他打开笔记本，写下一句话："每一次修复，都是与历史的对话；每一份坚持，都是对未来的承诺。"他相信，自己选择的道路是正确的。`,

  `第二天，陈默启程返回城市。坐在高铁上，看着窗外飞逝的风景，他心中充满期待。新的项目、新的挑战正在前方等待。他知道，只要保持<span class="w">natural(自然的)📢</span>心态和<span class="w">just(公正的)📢</span>原则，就能走得更远。`,

  `回到城市后，陈默马不停蹄地投入新的工作。他每天<span class="w">commute(通勤)📢</span>于各个工地之间，检查进度、解决问题。虽然辛苦，但他很<span class="w">relish(享受)📢</span>这种充实的生活。因为他知道，这就是他热爱的事业。`,

  `某天傍晚，陈默路过那座钟楼。夕阳的余晖洒在钟面上，金色的光芒让它显得格外庄严。陈默停下脚步，静静地凝视着钟楼。这座钟楼，是他事业的起点，也是他心中永恒的记忆。`,

  `他想起钟楼修复完工那天，市长握着他的手说的话："感谢你让历史重焕生机。"陈默微笑着，心中默念："这是我应该做的。"因为他知道，保护历史文化遗产，是每一个建筑人的<span class="w">sentiment(感情)📢</span>和责任。`,

  `故事的最后，陈默常常对年轻的同事们说："修复古建筑，就像修复自己的人生。不要被眼前的困难吓倒，不要被外界的噪音干扰。只要你<span class="w">deem(认为)📢</span>自己做的事情是对的，就坚持走下去。时间会给你答案。"`,

  `他相信，每一次挑战都是一次成长的机会。就像钟楼的<span class="w">pendulum(钟摆)📢</span>，虽然有起有落，但始终在前行。而他，也会像那只天空中的<span class="w">eagle(鹰)📢</span>一样，在自己的领域里自由翱翔，守护着历史与文化的尊严。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>钟楼守护者：古建修复师的坚守 · 学习版</title>
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
      <h1>钟楼守护者：古建修复师的坚守</h1>
      <p class="sub">历史 · 建筑 · 职业成长</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story47</span>时光修复</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>钟楼守护者：古建修复师的坚守 · 学习版　|　看故事记单词</footer>
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

// 生成复习版 HTML（需要将单词格式从 learning 改为 review）
const reviewParagraphs = storyParagraphs.map(p => {
  return p.replace(/<span class="w">([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g,
    '<span class="r" onclick="toggle(this)">$1(<span class="h">$2</span>)</span>');
});

const reviewHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>钟楼守护者：古建修复师的坚守 · 复习版</title>
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
      <h1>钟楼守护者：古建修复师的坚守</h1>
      <p class="sub">历史 · 建筑 · 职业成长</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story47</span>时光修复</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>钟楼守护者：古建修复师的坚守 · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;

// 输出目录
const outputDir = 'vocabulary_split';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入文件
fs.writeFileSync(path.join(outputDir, 'vocabulary_047_2301-2350_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, 'vocabulary_047_2301-2350_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：vocabulary_047_2301-2350_学习版.html');
console.log('✓ 已生成：vocabulary_047_2301-2350_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：钟楼守护者：古建修复师的坚守：时光修复`);
console.log(`- 题材：历史 · 建筑 · 职业成长`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3500 字`);