const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_057_2801-2850.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `晚上八<span class="w">o'clock(点钟)📢</span>，张雨晨站在写字楼的落地窗前，望着窗外繁华的城市夜景。重生回到五年前，她终于有机会改变一切。前世，她被最信任的合伙人背叛，失去了一切——公司、名誉，甚至差点被送进<span class="w">gaol(监狱)📢</span>。如今，她要让那些人付出代价。`,

  `张雨晨是明辉科技的CEO，公司主营软件开发和<span class="w">commerce(商业)📢</span>咨询。前世，她的合伙人李志强暗中挪用公司资金，导致公司破产，她还被诬陷财务造假，背负巨额债务。这一世，她绝不会再犯同样的错误。`,

  `第二天一早，张雨晨来到公司。她走进自己的办公室，开始整理文件。她拿出一本厚厚的笔记本，里面记录着前世发生的每一件重要事情。她仔细翻阅<span class="w">note(笔记)📢</span>，找到了关键信息——李志强会在三个月后开始他的计划。`,

  `张雨晨知道，要对付李志强，必须先<span class="w">diagnose(诊断)📢</span>出他的问题所在。她决定从财务部门入手，调查公司的资金流向。她找到公司的<span class="w">accountant(会计师)📢</span>王芳，请她帮忙核对最近的账目。`,

  `王芳是个认真的员工，她花了一周时间，完成了详细的调查报告。报告显示，公司最近几个月的财务数据确实存在异常——有几笔大额支出，用途不明。张雨晨心中有了数，她知道，李志强已经开始动手了。`,

  `接下来的日子，张雨晨开始暗中观察李志强的一举一动。她发现，李志强最近经常和<span class="w">opposite(相反)📢</span>阵营的竞争对手见面，显然是在策划什么。她还发现，李志强在公司里拉拢了一批<span class="w">minority(少数)📢</span>派员工，暗中培养自己的势力。`,

  `某天，张雨晨在办公室加班到很晚。她听到门外传来轻微的<span class="w">mouse(老鼠)📢</span>般的声音，警觉地抬头。门被轻轻推开，李志强走了进来。他看到张雨晨还，脸上闪过一丝惊讶："张总，这么晚还在？"`,

  `张雨晨不动声色："有些文件要处理。你呢？"李志强笑了："我也是来加班的。"他走到张雨晨的桌前，假装关心地问："公司最近怎么样？"张雨晨淡淡地说："还好，业务正在<span class="w">thrive(兴旺)📢</span>发展。"`,

  `李志强点点头，转身离开。张雨晨看着他离去的背影，心中冷笑——她知道，李志强已经开始不老实了。她必须尽快采取行动，否则后果不堪设想。`,

  `<span class="w">consecutive(连续的)📢</span>几天，张雨晨都在暗中调查李志强。她发现，李志强正在策划一场阴谋——他要让公司<span class="w">merge(合并)📢</span>到竞争对手那里，然后瓜分公司的资产。`,

  `张雨晨知道，这是李志强的老套路。前世，他就是用这个方法，让明辉科技陷入困境。如今，他要故技重施。但张雨晨不会再让他得逞。`,

  `她决定先下手为强。她召集公司的核心<span class="w">discipline(纪律)📢</span>委员会，讨论应对方案。会上，她将李志强的所作所为公之于众。核心成员们听后，纷纷表示震惊和愤怒。`,

  `"李志强这样做，简直是公司的<span class="w">devil(魔鬼)📢</span>！"一位高管愤怒地说。张雨晨点头："所以我们必须尽快采取行动，<span class="w">preserve(保护)📢</span>公司的利益。"`,

  `会议结束后，张雨晨开始部署行动计划。她安排财务部严密监控资金流动，安排人事部调查李志强拉拢的员工，还安排法务部准备诉讼材料。`,

  `几天后，张雨晨收到消息——李志强准备在本周末<span class="w">sack(解雇)📢</span>一批不服从他的员工，替换成自己的人。张雨晨心中一紧，她知道，必须尽快行动。`,

  `她立刻召开紧急董事会，出示了李志强的所有证据。董事会成员看完证据，脸色铁青。他们没想到，李志强竟然做了这么多手脚。最终，董事会决定，立即解除李志强的职务。`,

  `李志强收到通知后，气急败坏地闯进张雨晨的办公室。他怒吼："张雨晨，你敢解雇我？我告诉你，我不会放过你！"张雨晨冷静地看着他："李志强，你的所作所为已经构成了犯罪，我不会再容忍你。"`,

  `李志强被保安请出公司。他站在写字楼下，望着顶层的<span class="w">building(建筑)📢</span>，眼中满是恨意。他发誓，一定要让张雨晨付出代价。`,

  `然而，张雨晨并没有给他机会。她立刻向<span class="w">federal(联邦)📢</span>法院提起诉讼，指控李志强挪用公款、欺诈等罪名。法院很快受理了案件，李志强被传唤到庭。`,

  `庭审当天，张雨晨亲自出庭作证。她<span class="w">concentrate(集中)📢</span>精力，详细陈述了李志强的犯罪事实。法官听完她的陈述，问李志强："你有什么要说的吗？"李志强支吾其词，无法辩解。`,

  `最终，法院判决李志强有罪，判处他有期徒刑三年。李志强被带离法庭，眼中满是悔恨。张雨晨站在法庭外，深吸一口气，感到一种前所未有的轻松。`,

  `案件结束后，张雨晨回到公司，继续经营业务。她知道，李志强的倒台只是一个开始，她还有更<span class="w">farther(更远)📢</span>的目标要实现。她要让明辉科技成为行业内的<span class="w">prestige(声望)📢</span>企业。`,

  `接下来的日子，张雨晨开始大刀阔斧地改革。她重组了公司的管理架构，<span class="w">coordinate(协调)📢</span>各部门的运作，提高了工作效率。她还推行了新的<span class="w">discipline(纪律)📢</span>制度，规范员工的行为。`,

  `她的改革引起了一些员工的担忧。有人问她："张总，这些<span class="w">change(改变)📢</span>会不会太大了？"张雨晨回答："改革是必要的，只有不断进步，公司才能发展。"`,

  `某天，张雨晨收到一份邀请函。是<span class="w">province(省)📢</span>里的商会组织的商业论坛，邀请她作为嘉宾演讲。张雨晨欣然同意，她知道，这是一个扩大影响力的好机会。`,

  `论坛当天，张雨晨穿着干练的套装，走进会场。她看到<span class="w">blackboard(黑板)📢</span>上写着今天议程，自己将在上午十点上台演讲。她找个位置坐下，开始准备。`,

  `演讲时，张雨晨侃侃而谈。她分享了自己的创业经历，以及对<span class="w">commerce(商业)📢</span>发展趋势的看法。她的演讲赢得了台下阵阵掌声。许多人都对这位年轻的女CEO刮目相看。`,

  `演讲结束后，一位<span class="w">wise(聪明的)📢</span>老人走过来，自我介绍道："你好，我是华兴集团的董事长陈正华。"张雨晨礼貌地回应："陈总您好，久仰大名。"`,

  `陈正华笑着说："你的演讲很精彩。我们公司正在寻找合作伙伴，<span class="w">whether(是否)📢</span>有兴趣谈谈？"张雨晨心中一动——华兴集团是行业巨头，能与它合作，对明辉科技的发展大有好处。`,

  `她点头："当然，我们很愿意合作。"陈正华递给她一张名片："下周到我公司来，我们详细谈。"张雨晨接过名片，心中充满了期待。`,

  `回到公司后，张雨晨开始准备与华兴集团的合作方案。她花了一周时间，完成了详细的计划书。方案中，她<span class="w">anticipate(预料)📢</span>了合作后可能出现的各种情况，并制定了应对策略。`,

  `一周后，张雨晨来到华兴集团。她走进陈正华的办公室，看到墙上挂着一幅画，画的是一群人在<span class="w">football(足球)📢</span>场上奔跑的场景。她不禁感慨——商场就像足球场，需要团队合作才能取胜。`,

  `陈正华请张雨晨坐下，仔细阅读她的方案。他看完，点头："方案不错，但有些细节需要调整。"张雨晨认真听取他的意见，一一记录下来。`,

  `经过几轮谈判，双方终于达成了合作。张雨晨和陈正华在合同上签字，握手言庆。陈正华笑着说："合作愉快！"张雨晨也笑了："合作愉快。"`,

  `合作开始后，张雨晨投入了大量精力。她每天早出晚归，几乎没有时间休息。她的助理劝她："张总，您太累了，要注意身体。"张雨晨苦笑："没办法，这是我的<span class="w">risk(风险)📢</span>。"`,

  `某天晚上，张雨晨在办公室加班。她感到有些疲惫，起身走到窗边。她看到楼下广场上，有几个年轻人在踢球，脸上洋溢着<span class="w">bright(明亮)📢</span>的笑容。她不禁感慨——自己也曾这样无忧无虑过。`,

  `她回到桌前，继续工作。突然，手机响了。是她的好友林倩打来的。林倩问："雨晨，周末有空吗？我们一起去郊外骑马吧。"张雨晨想了想，答应道："好，正好放松一下。"`,

  `周末，张雨晨来到郊外的马场。她换上骑马装，系好<span class="w">saddle(马鞍)📢</span>，骑上一匹棕色的马。她用力一<span class="w">thrust(猛推)📢</span>，马儿开始奔跑。风吹过她的头发，她感到无比自由。`,

  `骑完马，张雨晨和林倩坐在马场的<span class="w">school(学校)📢</span>食堂里吃午餐。林倩问："最近公司怎么样？"张雨晨回答："还好，和华兴的合作进展顺利。"林倩点头："那就好，你也要注意休息。"`,

  `午餐后，两人在马场里散步。她们经过一条小溪，看到溪水清澈见底，里面有许多<span class="w">pebble(卵石)📢</span>。张雨晨蹲下，捡起一颗，发现上面有一道天然的<span class="w">coil(曲线)📢</span>，非常漂亮。`,

  `回到城市后，张雨晨继续投入工作。在她的努力下，明辉科技的业务蒸蒸日上，公司的规模也越来越大。她从一个被背叛的创业者，成长为行业内的<span class="w">intimate(亲密的)📢</span>伙伴。`,

  `某天，张雨晨收到一封信。信是李志强从监狱里寄来的。他在信中表达了对自己的悔恨，并请求张雨晨的原谅。张雨晨读完信，心中五味杂陈。`,

  `她想起前世，李志强如何<span class="w">persecute(迫害)📢</span>自己，如何让自己陷入绝境。如今，他终于得到了应有的惩罚。张雨晨知道，自己不会原谅他，但也不会再恨他——因为恨只会让自己更加痛苦。`,

  `她将信收起来，继续工作。她知道，自己还有很长的路要走。她要继续努力，让明辉科技成为更强大的企业。`,

  `时光飞逝，转眼间，张雨晨已经在商界站稳了脚跟。她不仅成功经营明辉科技，还投资了多个项目，成为了年轻一代的<span class="w">minority(少数)📢</span>派女性企业家代表。`,

  `某天，张雨晨参加一个商业晚宴。宴会上，她遇到了一位<span class="w">accountant(会计师)📢</span>同行，两人聊得很投机。同行说："张总，您的事业很成功，有什么秘诀吗？"张雨晨笑："秘诀就是，永远不要相信背叛过你的人。"`,

  `晚宴结束后，张雨晨回到家中。她坐在沙发上，打开电视，看到新闻里正在报道明辉科技的最新业绩。她不禁感慨——从一个小公司，到如今的行业翘楚，这一路走来，真的不容易。`,

  `她想起一句话：人生就像一场<span class="w">rush(冲)📢</span>刺，有起有落，有成功有失败。但只要坚持不懈，终会找到属于自己的道路。她相信，命运让她重生，是为了让她弥补前世的遗憾，创造更美好的未来。`,

  `故事的最后，张雨晨常常对年轻的创业者说："商场就像战场，充满了<span class="w">rigorous(严格的)📢</span>挑战。但只要你有<span class="w">wise(聪明)📢</span>的头脑和坚定的信念，就能战胜一切困难。不要害怕失败，因为每一次失败，都是成长的机会。"`,

  `她相信，前世的经验让她学会了<span class="w">liberate(解放)📢</span>自己的思维，重生的机会让她改变了自己的命运。她要用自己的故事，激励更多的人，勇敢追寻自己的梦想。她微笑着望向窗外，那里有阳光，有希望，还有美好的未来。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生商海：逆袭女王之路 · 学习版</title>
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
      <h1>重生商海：逆袭女王之路</h1>
      <p class="sub">重生 · 职场 · 商战</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story57</span>逆流而上</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生商海：逆袭女王之路 · 学习版　|　看故事记单词</footer>
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
<title>重生商海：逆袭女王之路 · 复习版</title>
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
      <h1>重生商海：逆袭女王之路</h1>
      <p class="sub">重生 · 职场 · 商战</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story57</span>逆流而上</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生商海：逆袭女王之路 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '57_重生商海_逆袭女王之路_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '57_重生商海_逆袭女王之路_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：57_重生商海_逆袭女王之路_学习版.html');
console.log('✓ 已生成：57_重生商海_逆袭女王之路_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生商海：逆袭女王之路：逆流而上`);
console.log(`- 题材：重生 · 职场 · 商战`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);