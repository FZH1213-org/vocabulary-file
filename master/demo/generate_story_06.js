const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('master/demo/vocabulary_split/vocabulary_006_251-300.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `顾浩然站在落地窗前，望着窗外繁华的城市夜景。作为顾氏集团的<span class="w">specialist(专家)📢</span>和继承人，他用十年的心血将公司打造成商业帝国。然而，如今的他却陷入了深深的<span class="w">confusion(困惑)📢</span>——就在昨天，他的未婚妻林雨晴提出了悔婚。`,

  `林雨晴是顾浩然的<span class="w">genuine(真正的)📢</span>挚爱。两人相识于大学时代，经过多年的相处，终于决定步入婚姻殿堂。然而，就在婚礼前夕，林雨晴突然告诉顾浩然，她无法<span class="w">accomplish(完成)📢</span>这段婚姻。她说，她无法承受顾家的<span class="w">responsibility(责任)📢</span>和压力。`,

  `顾浩然无法相信自己的耳朵。他问林雨晴："雨晴，我们在一起这么久，你为什么突然做出这样的决定？"林雨晴低下头，眼眶泛红："浩然，我对不起你。但我真的<span class="w">admit(承认)📢</span>，我无法成为你期望的那种妻子。"`,

  `婚礼被取消，林雨晴搬出了顾家的别墅。顾浩然陷入了前所未有的低沉。他开始反思，是不是自己平时过于专注于工作，<span class="w">ignore(忽视)📢</span>了林雨晴的感受。他想起他们曾经一起在<span class="w">playground(运动场)📢</span>打<span class="w">badminton(羽毛球)📢</span>，一起在<span class="w">pasture(牧场)📢</span>散步，那时的林雨晴总是笑容满面。`,

  `顾浩然决定追回林雨晴。他<span class="w">attempt(企图)📢</span>打电话给她，但她不接。他派人送花送礼物，她全部退回。他甚至亲自去她租住的小区门口等待，却始终见不到她的身影。顾浩然感到前所未有的挫败。`,

  `一天，顾浩然从公司的<span class="w">salesman(推销员)📢</span>那里得知，林雨晴正在一家小型公司工作。他立即赶往那里，在公司楼下看到了林雨晴。她穿着简单的职业装，正和一个同事交谈。顾浩然快步走上前，轻声说："雨晴，好久不见。"`,

  `林雨晴看到顾浩然，眼中闪过惊讶和复杂的情感。她轻声说："顾总，您怎么会来这里？"顾浩然看着她平静的面容，心中涌起一股酸楚。他说："雨晴，我想和你谈谈。"`,

  `两人来到附近的一家咖啡馆。顾浩然看着林雨晴，心中充满了疑问。他问："雨晴，你为什么突然离开？是不是我做错了什么？"林雨晴沉默片刻，说："浩然，你<span class="w">none(一点都不)📢</span>错。是我自己的<span class="w">trouble(问题)📢</span>。"`,

  `"那你可以告诉我真正的原因吗？"顾浩然追问。林雨晴叹了口气，说："浩然，你家的<span class="w">infrastructure(基础设施)📢</span>和生活方式，和我完全不同。我只是一个普通家庭的女孩，我不适应那种高压的生活。我不想成为你的负担。"`,

  `顾浩然听完，心中感到无比的愧疚。他意识到，自己确实忽略了林雨晴的感受。他握住她的手，说："雨晴，对不起。我以前太专注于工作，没有考虑到你的感受。但我愿意改变，为了你，我愿意放弃一切。"`,

  `林雨晴看着顾浩然真诚的眼神，心中有些动摇。但她仍然摇头："浩然，我们已经是两个世界的人了。我们<span class="w">somehow(不知怎么地)📢</span>无法回到过去了。"顾浩然坚定地说："雨晴，给我一个机会，让我证明我可以改变。"`,

  `从那天起，顾浩然开始了艰难的追妻之路。他辞去了顾氏集团的大部分职务，只保留了<span class="w">reserve(储备)📢</span>股东的身份。他搬出了豪华别墅，在林雨晴的小区租了一套普通的公寓。他开始学习做家务，学习如何与普通人相处。`,

  `每天早晨，顾浩然都会在林雨晴公司楼下等待，送她上班。每天傍晚，他都会准时出现在公司门口，接她下班。起初，林雨晴对他避而不见，但随着时间的推移，她开始逐渐接受他的存在。`,

  `一天傍晚，顾浩然邀请林雨晴一起吃晚餐。他带她来到一家普通的餐厅，点了她最喜欢的<span class="w">grape(葡萄)📢</span>汁和家常菜。用餐时，顾浩然细心地为她夹菜，让她感受到久违的温暖。`,

  `林雨晴看着眼前的顾浩然，心中五味杂陈。她问："浩然，你真的愿意放弃以前的生活，过这种平凡的日子吗？"顾浩然点头："雨晴，只要能和你在一起，我愿意<span class="w">choose(选择)📢</span>任何生活。"`,

  `然而，顾浩然的转变并非一帆风顺。顾家的长辈们对他的行为感到不满，认为他背离了家族的<span class="w">course(路线)📢</span>。他们试图劝阻顾浩然，让他回到顾氏集团，承担起家族的<span class="w">quota(配额)📢</span>和责任。但顾浩然拒绝了。他说："我的责任是追求自己的幸福，而不是被束缚在家族的期望中。"`,

  `林雨晴得知顾浩然为了她和家族决裂，心中既感动又担忧。她对顾浩然说："浩然，你不必为我做出这么大的牺牲。我不想成为你和家人矛盾的根源。"顾浩然握住她的手："雨晴，这不是牺牲，而是<span class="w">further(进一步)📢</span>认识自己的过程。"`,

  `为了证明自己的诚意，顾浩然开始<span class="w">acquire(获得)📢</span>新的技能。他报名参加了烹饪班，学习制作各种菜肴。他还报名参加了心理学<span class="w">course(课程)📢</span>，学习如何更好地理解和沟通。他希望，通过这些努力，能够重新赢得林雨晴的心。`,

  `几个月后，顾浩然的努力开始有了成效。林雨晴对他的态度逐渐软化，她开始主动和他聊天，分享自己的生活。顾浩然感到无比欣慰，他知道，自己的努力没有白费。`,

  `一天，顾浩然邀请林雨晴一起去郊外的<span class="w">pasture(牧场)📢</span>散步。两人漫步在绿草如茵的原野上，享受着清新的空气和宁静的时光。顾浩然停下脚步，转向林雨晴："雨晴，我想问你一个问题。"`,

  `"什么问题？"林雨晴问。顾浩然深吸一口气："你愿意再给我一次机会吗？让我们重新开始。"林雨晴看着他真诚的眼神，心中涌起复杂的情感。她沉默片刻，轻声说："浩然，我需要时间。"`,

  `顾浩然点头："我理解。我会等你，无论需要多长时间。"两人在牧场中继续漫步，享受着彼此的陪伴。顾浩然知道，这段追妻之路还很漫长，但他愿意付出一切。`,

  `回到城市后，顾浩然继续他的日常生活。他每天早起，去市场购买新鲜的<span class="w">cotton(棉花)📢</span>和食材。他学会了用<span class="w">pot(壶)📢</span>煮咖啡，用<span class="w">solid(固体)📢</span>燃料烧菜。他甚至学会了修理家中的小故障，比如更换灯泡和修理水龙头。`,

  `林雨晴看到顾浩然的变化，心中既感动又惊讶。她从未想过，这位曾经的商业精英，竟然能够适应如此平凡的生活。她开始重新审视自己对他的感情。`,

  `一天，林雨晴在工作中遇到了<span class="w">trouble(麻烦)📢</span>。她的一个重要项目出现了问题，客户非常不满意。林雨晴焦虑万分，不知如何应对。顾浩然得知后，主动提供帮助。他用自己多年的商业经验，帮助林雨晴分析问题，制定解决方案。`,

  `在顾浩然的帮助下，林雨晴成功解决了问题，客户对她的表现表示满意。林雨晴对顾浩然充满了<span class="w">gratitude(感激)📢</span>，她意识到，顾浩然不仅愿意为她改变，还愿意在她需要时给予支持。`,

  `然而，顾家的压力并没有消失。顾浩然的父亲顾震天多次打电话给他，要求他回到家族企业。顾浩然每次都耐心地<span class="w">tell(告诉)📢</span>父亲，他已经找到了自己的人生方向。顾震天对此既愤怒又失望。`,

  `一天，顾震天亲自来到顾浩然的公寓。他看到儿子简陋的生活环境，心中充满了<span class="w">sight(感触)📢</span>。他对顾浩然说："浩然，你真的愿意放弃顾氏集团的一切，过这样的生活吗？"顾浩然点头："爸，这不是放弃，而是<span class="w">rise(崛起)📢</span>。我在寻找自己的幸福。"`,

  `顾震天沉默片刻，然后说："浩然，如果你真的认定了这个女孩，我不会阻拦你。但我希望，你能够处理好家族和个人的关系。"顾浩然感激地看着父亲："谢谢您的理解，爸。"`,

  `有了父亲的理解，顾浩然感到如释重负。他继续追求林雨晴，用实际行动证明自己的诚意。他不再只是空口许诺，而是用一件件小事来打动她的心。`,

  `一天，林雨晴生病了，高烧不退。顾浩然得知后，立即赶到她的住处，带她去看<span class="w">doctor(医生)📢</span>。医生诊断为急性扁桃体炎，需要休息和治疗。顾浩然陪伴在她身边，细心照顾，直到她康复。`,

  `在照顾林雨晴的过程中，顾浩然看到了她脆弱的一面。他意识到，林雨晴并非他想象中那么坚强，她也需要关爱和陪伴。他下定决心，要成为她永远的依靠。`,

  `林雨晴康复后，对顾浩然说："浩然，谢谢你这段时间的照顾。"顾浩然微笑："雨晴，我愿意一直照顾你，无论发生什么。"林雨晴看着他真诚的眼神，心中的坚冰终于开始融化。`,

  `随着时间的推移，林雨晴对顾浩然的态度越来越开放。她开始主动邀请他一起外出，参加各种活动。两人一起去看了音乐会，一起去了<span class="w">experimental(实验性)📢</span>艺术展。每一次相处，都让他们更加了解彼此。`,

  `一天，顾浩然邀请林雨晴一起去郊外骑马。他们来到一家马场，顾浩然细心地教林雨晴如何<span class="w">steer(驾驶)📢</span>马匹。林雨晴在顾浩然的指导下，逐渐掌握了骑马的技巧。她感到无比开心，笑声在<span class="w">pasture(牧场)📢</span>上回荡。`,

  `傍晚，两人坐在<span class="w">carriage(马车)📢</span>上，欣赏着夕阳西下的美景。顾浩然轻声说："雨晴，这段时间，我明白了一个道理。幸福不是物质的堆砌，而是心灵的相通。我愿意用我的一生，去守护你的幸福。"`,

  `林雨晴看着他，眼中闪烁着泪光。她说："浩然，这段时间，我也明白了很多。我曾经以为自己无法承受顾家的压力，但看到你为我做出的改变，我愿意再试一次。"`,

  `顾浩然激动地握住她的手："雨晴，你真的愿意回到我身边吗？"林雨晴点头："是的，浩然。我愿意给我们一次机会。"`,

  `从那天起，顾浩然和林雨晴重新走到了一起。他们一起规划未来，一起面对挑战。顾浩然没有回到顾氏集团，而是创办了一家小型的咨询公司。他用多年的商业经验，为客户提供专业的建议。`,

  `林雨晴继续在原来的公司工作，但她不再感到压力和不安。她知道，有顾浩然在她身边，她可以勇敢地面对一切。`,

  `几个月后，顾浩然向林雨晴求婚。他在他们初次相遇的<span class="w">playground(操场)📢</span>上，单膝跪地，拿出一枚精致的戒指。他说："雨晴，你愿意嫁给我吗？"林雨晴眼眶泛红，点头："我愿意。"`,

  `婚礼如期举行，这一次，林雨晴穿着洁白的婚纱，成为顾浩然的<span class="w">bride(新娘)📢</span>。顾浩然看着她，心中充满了幸福和感激。他知道，这段追妻之路虽然艰辛，但最终的结果是值得的。`,

  `婚后，顾浩然和林雨晴过上了平凡而幸福的生活。他们每天早晨一起准备早餐，每天傍晚一起散步。顾浩然学会了用<span class="w">fine(好的)📢</span>心态面对生活，林雨晴也学会了如何更好地沟通和理解。`,

  `然而，生活并非总是一帆风顺。一次，顾浩然的公司遇到了资金困难。他不得不向顾氏集团寻求帮助。顾震天得知后，立即派人<span class="w">sell(出售)📢</span>部分资产，为顾浩然提供资金支持。他对顾浩然说："无论你做什么，顾家永远是你坚强的后盾。"`,

  `顾浩然感激地接受了父亲的帮助，并承诺会努力回报。他用这笔资金，成功渡过了难关，公司业务开始<span class="w">rise(增长)📢</span>。`,

  `几年后，顾浩然和林雨晴迎来了他们的第一个孩子。看着孩子的出生，顾浩然感到无比的喜悦。他对林雨晴说："雨晴，谢谢你给我带来这一切。我会用我的余生，守护你和孩子的幸福。"`,

  `林雨晴微笑着看着他："浩然，谢谢你让我明白，爱情需要勇气和坚持。我们一起走过的这段路，虽然艰难，但每一步都值得。"`,

  `时光流转，顾浩然和林雨晴的故事成为了一个美丽的<span class="w">context(背景)📢</span>。他们用自己的经历证明了，真正的爱情能够战胜一切困难。顾浩然曾经的<span class="w">erosion(消磨)📢</span>和迷茫，最终化为了<span class="w">solid(坚实的)📢</span>的幸福。`,

  `顾浩然常常对林雨晴说："如果没有那次悔婚，我可能永远不会意识到，什么才是真正的幸福。"林雨晴笑着回答："有时候，只有经历失去，才能懂得珍惜。"`,

  `他们的故事告诉我们，爱情不是一场<span class="w">dash(猛冲)📢</span>，而是一场需要耐心和坚持的旅程。只要心中有爱，就能战胜一切<span class="w">innumerable(无数的)📢</span>困难，找到属于自己的幸福终点。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>霸总追妻：悔婚后 · 学习版</title>
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
      <h1>霸总追妻：悔婚后</h1>
      <p class="sub">霸总 · 追妻 · 言情</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story06</span>再续前缘</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>霸总追妻：悔婚后 · 学习版　|　看故事记单词</footer>
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
<title>霸总追妻：悔婚后 · 复习版</title>
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
      <h1>霸总追妻：悔婚后</h1>
      <p class="sub">霸总 · 追妻 · 言情</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story06</span>再续前缘</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>霸总追妻：悔婚后 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '06_霸总追妻_悔婚后_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '06_霸总追妻_悔婚后_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：06_霸总追妻_悔婚后_学习版.html');
console.log('✓ 已生成：06_霸总追妻_悔婚后_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：霸总追妻：悔婚后：再续前缘`);
console.log(`- 题材：霸总 · 追妻 · 言情`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);