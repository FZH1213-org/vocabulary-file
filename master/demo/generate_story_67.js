const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_067_3301-3350.json', 'utf-8'));

// 故事内容（学习版）- 精确使用50个单词
const storyParagraphs = [
  `<span class="w">June(六月)📢</span>的一个<span class="w">Wednesday(星期三)📢</span>，苏晴站在公司总部的窗前，看着窗外的城市。作为一家科技公司的创始人，她回想起前世的<span class="w">childhood(童年)📢</span>和职场经历，心中感慨万千。重生回到十年前，她终于有机会改变一切。`,

  `前世，苏晴在一家大公司工作。那时的她，被同事中的<span class="w">bully(恃强欺弱者)📢</span>欺负，被领导排挤，最终在一场<span class="w">tragic(悲剧的)📢</span>事件中失去了工作。她感到<span class="w">numb(麻木的)📢</span>和绝望，最终因病离世。如今，她要用智慧和勇气，创造属于自己的未来。`,

  `苏晴记得，前世的公司<span class="w">headquarters(总部)📢</span>里，那些人用各种手段陷害她。她曾经试图<span class="w">appeal(呼吁)📢</span>公平对待，但没有人理会。重生后，她决定不再为别人工作，而是自己创业。她要从失败中站起来，永远不要<span class="w">again(再次)📢</span>被别人控制。`,

  `她用前世积累的<span class="w">cognitive(认知的)📢</span>科学知识，开发了一款创新的软件产品。这款软件的<span class="w">prototype(原型)📢</span>在<span class="w">a(一个)📢</span>小工作室里诞生，功能强大，吸引了投资者的注意。`,

  `某天，苏晴在工作室里忙碌。她穿着一件简洁的<span class="w">blouse(女衬衣)📢</span>，整理着项目的<span class="w">dimension(尺寸)📢</span>和参数。她知道，要成功，必须用<span class="w">bold(大胆的)📢</span>的思维，打破常规。`,

  `苏晴的公司逐渐壮大。她招聘了一批有才华的员工，建立一个<span class="w">creative(有创造力的)📢</span>团队。她教导员工，工作要有<span class="w">virtue(美德)📢</span>，要诚信和敬业。`,

  `某天，苏晴收到一份<span class="w">document(公文)📢</span>，是政府的<span class="w">subsidy(补助金)📢</span>通知。政府认可她的项目，提供了资金支持。苏晴<span class="w">grateful(感激的)📢</span>地接受了这份支持，继续推进研发。`,

  `然而，创业之路并不平坦。某天，苏晴发现，前世的那些人——<span class="w">they(他们)📢</span>，开始在市场上与她竞争。他们用不正当的手段，试图挖走她的客户。`,

  `苏晴没有退缩。她<span class="w">refuse(拒绝)📢</span>了竞争对手的收购提议，决定用自己的方式，证明实力。她用法律的手段，保护自己的知识产权，并向相关部门提交了<span class="w">charter(宪章)📢</span>，申请了专利保护。对手公司因为违规操作被<span class="w">suspend(暂停)📢</span>了营业执照，无法继续恶意竞争。`,

  `为了提升产品竞争力，苏晴带领团队开发了新功能。她设计了一个智能<span class="w">hook(钩)📢</span>系统，能够快速抓取和处理数据。这项技术让她的产品在市场上脱颖而出，并能够有效地<span class="w">segregate(隔离)📢</span>不同的数据类型，提高处理效率。`,

  `某天傍晚，苏晴在公司附近的餐厅<span class="w">dine(吃饭)📢</span>。她点了一份沙拉和<span class="w">a(一个)📢</span><span class="w">pear(梨子)📢</span>，准备继续工作。正在用餐时，一位投资人走了过来，说："苏总，你的产品很有潜力，我们愿意投资。"`,

  `苏晴听完，心中一喜。她知道，这是<span class="w">virtual(实际上的)📢</span>认可，也是她努力工作的回报。她用<span class="w">bold(大胆的)📢</span>的态度，与投资人谈判，最终获得了理想的融资条件。`,

  `融资成功后，苏晴继续扩大公司规模。她在城市<span class="w">from(从)📢</span>市中心到郊区的<span class="w">gymnasium(体育馆)📢</span>旁租了一层楼，作为新的办公室。员工们在宽敞明亮的环境里工作，效率大幅提升。`,

  `某天，苏晴在办公室里听到一则新闻——前世的那个<span class="w">bully(恃强欺弱者)📢</span>，因为商业欺诈被起诉。<span class="w">amid(在...中间)📢</span>众多的新闻报道中，苏晴看到了正义的曙光。她心中感慨——正义终将到来。`,

  `她想起前世，那个在<span class="w">bleak(荒凉的)📢</span>职场中挣扎的自己。如今，她已经站了起来，成为了一名成功的创业者。她用自己的故事，证明了一个道理：遇到困难时，要改变<span class="w">mind(精神)📢</span>状态，积极应对。`,

  `某天，苏晴参加了一个行业会议。会议在一个<span class="w">faculty(学院)📢</span>的报告厅举行。苏晴在会议上发言，分享了自己的创业经历，赢得了与会者的<span class="w">appreciate(感激)📢</span>和认可。`,

  `会议结束后，一位年轻的女创业者走过来，说："苏总，您的故事激励了我。我也想创业，但不知道如何开始。"苏晴微笑道："保持<span class="w">safety(安全)📢</span>意识，用智慧面对挑战，你一定能成功。"`,

  `回到公司后，苏晴继续工作。她用<span class="w">stream(溪流)📢</span>般流畅的数据处理系统，提升了产品性能。她相信，只有不断创新，才能在竞争中保持优势。`,

  `某天，苏晴决定<span class="w">travel(旅行)📢</span>放松身心。她乘坐<span class="w">charter(租用)📢</span>的飞机，前往一个风景优美的城市。在旅途中，她用<span class="w">straw(稻草)📢</span>喝着果汁，欣赏窗外的风景。`,

  `旅途中，苏晴回忆起前世的<span class="w">tragic(悲剧的)📢</span>经历。她记得，那时的自己总是被压力和恐惧所困扰。如今，她已经学会了用<span class="w">fun(玩笑)📢</span>和轻松的态度，面对生活的挑战。`,

  `回到公司后，苏晴发现，竞争对手试图用<span class="w">trap(陷阱)📢</span>诱骗她的团队。她立刻召开会议，用<span class="w">document(公文)📢</span>和数据证明了对手的阴谋，提醒员工保持警惕。`,

  `员工们听完，纷纷表示支持。他们用<span class="w">vote(投票)📢</span>的方式，决定继续跟随苏晴，共同面对挑战。苏晴看到团队的支持，心中充满感激。`,

  `某天，苏晴在办公室里收到一封信。信是前世的同事写来的，表达了对她的敬佩。苏晴看完，心中感慨——前世的恩怨，如今已经烟消云散，所有的仇恨都在时间的流逝中<span class="w">dissolve(溶解)📢</span>了。`,

  `她将信收好，<span class="w">continue(继续)📢</span>工作。她知道，过去的已经过去，重要的是把握现在，创造未来。`,

  `某天，苏晴在公司举办了一场团建活动。活动在一个<span class="w">stream(溪流)📢</span>旁的度假村举行。员工们在自然环境中放松身心，建立了更深厚的友谊。`,

  `活动中，苏晴与员工们一起玩游戏，分享<span class="w">childhood(童年)📢</span>的故事。她发现，团队的凝聚力在活动中得到了提升，大家的工作热情也更加高涨。`,

  `回到公司后，苏晴用<span class="w">creative(有创造力的)📢</span>的方式，开发了新的产品线。她设计了一款能够<span class="w">absorb(吸收)📢</span>大量数据的软件，帮助客户更好地管理业务。`,

  `产品上市后，获得了市场的认可。苏晴用实际的业绩，<span class="w">verify(证实)📢</span>了自己的能力。她相信，只要坚持创新，就一定能赢得客户的信任。`,

  `某天，苏晴在<span class="w">gymnasium(体育馆)📢</span>锻炼身体。她想起前世，因为工作压力而忽视健康的自己。如今，她学会了平衡工作和生活，保持身心的健康。`,

  `锻炼结束后，苏晴回到公司。她发现，团队的成员正在讨论一个新项目。她走过去，用<span class="w">cognitive(认知的)📢</span>科学的理论，提供了宝贵的建议。`,

  `某天，苏晴在办公室里接待了一位来访的客户。客户对她的产品很满意，说："苏总，你们的服务很有<span class="w">virtue(美德)📢</span>，我们愿意长期合作。"苏晴微笑道："谢谢您的信任。"`,

  `合作确定后，苏晴用<span class="w">document(公文)📢</span>记录了合同的细节。她知道，专业的态度和细致的工作，是成功的关键。`,

  `某天，苏晴在公司的会议室里，听到一位员工提出辞职。原来，竞争对手用高薪挖角。苏晴没有生气，而是用真诚的语气说："我理解你的选择。无论你走到哪里，都希望你能保持<span class="w">virtue(美德)📢</span>。"`,

  `员工听完，感动地说："苏总，谢谢您的理解。"苏晴点头，她知道，尊重每个人的选择，也是一种美德。`,

  `回到办公室后，苏晴继续工作。她用<span class="w">bold(大胆的)📢</span>的决策，调整了公司的战略，开辟了新的市场。她相信，只有不断突破，才能在竞争中保持领先。`,

  `某天，苏晴在城市的街头看到一个孩子正在用<span class="w">straw(稻草)📢</span>喝饮料。她想起自己小时候，曾经在乡下度过<span class="w">childhood(童年)📢</span>，那时的生活虽然简单，但很快乐。`,

  `她想起前世，那个被<span class="w">bully(恃强欺弱者)📢</span>欺负的自己。如今，她已经站了起来，用自己的能力，创造了美好的生活。她感慨万千——命运掌握在自己手中。`,

  `某天，苏晴在办公室里整理文件。她发现一份报告，上面记录着公司的成就——产品销往世界各地，客户满意度高达百分之九十五。苏晴看完，心中自豪。`,

  `她用自己的努力，证明了<span class="w">a(一个)📢</span>道理：遇到困难时，不要放弃，要勇敢面对。她相信，只要坚持初心，就一定能创造出更美好的未来。`,

  `某天，苏晴参加了一个慈善活动。活动在一个<span class="w">stream(溪流)📢</span>旁的公园举行。苏晴看到，许多孩子在活动中玩耍，她想起了自己的<span class="w">childhood(童年)📢</span>。`,

  `她决定，用自己的方式，帮助更多需要帮助的人。她向慈善机构捐赠了资金，并承诺未来会<span class="w">continue(继续)📢</span>支持公益事业。`,

  `活动结束后，苏晴回到公司。她发现，团队的成员正在为她准备一个惊喜——一个庆祝公司成立的派对。苏晴看到大家用心准备的<span class="w">repertoire(全部剧目)📢</span>，心中充满感激。`,

  `派对上，苏晴与员工们一起庆祝。她用<span class="w">appeal(呼吁)📢</span>的语气说："感谢大家的努力，我们一定能创造更辉煌的明天。"员工们鼓掌，表示支持。`,

  `某天，苏晴在办公室里忙碌。她用<span class="w">medicine(医学)📢</span>知识，开发了健康管理的软件模块。她知道，健康是人生最宝贵的财富。`,

  `产品开发完成后，苏晴用<span class="w">verify(证实)📢</span>的方式，测试了软件的功能。她发现，软件的运行效率远超预期，能够帮助用户更好地管理健康。`,

  `某天，苏晴在公司附近的咖啡厅休息。她坐在窗边，看着窗外的<span class="w">eclipse(日食)📢</span>景象——虽然天空变暗，但很快就会恢复光明。她感慨——人生也是如此，遇到黑暗时，要坚持希望。`,

  `回到公司后，苏晴继续工作。她用<span class="w">safety(安全)📢</span>意识，建立了数据保护系统，确保客户的信息安全。她知道，只有保护客户的利益，才能赢得长期的信任。`,

  `某天，苏晴在公司的实验室里，研发新的产品。她用<span class="w">prototype(原型)📢</span>测试了新功能，发现效果很好。她决定，将新产品投入市场。`,

  `产品上市后，获得了客户的好评。苏晴用实际的业绩，证明了自己的<span class="w">creative(有创造力的)📢</span>能力。她相信，只要坚持创新，就一定能赢得市场。`,

  `故事的最后，苏晴常常对年轻创业者说："创业是一场漫长的旅程，需要<span class="w">bold(大胆的)📢</span>的勇气，也需要细致的准备。遇到困难时，不要放弃，要相信自己的能力。"`,

  `她相信，前世的经验让她学会了谨慎，重生的机会让她找到了真正的自己。她要用自己的故事，激励更多的人，勇敢追寻梦想。她微笑着望向窗外，那里有阳光，有希望，还有美好的未来。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生女强：职场逆袭传奇 · 学习版</title>
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
      <h1>重生女强：职场逆袭传奇</h1>
      <p class="sub">重生 · 职场 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story67</span>女强重生</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生女强：职场逆袭传奇 · 学习版　|　看故事记单词</footer>
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
<title>重生女强：职场逆袭传奇 · 复习版</title>
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
      <h1>重生女强：职场逆袭传奇</h1>
      <p class="sub">重生 · 职场 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story67</span>女强重生</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生女强：职场逆袭传奇 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '67_重生女强_职场逆袭传奇_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '67_重生女强_职场逆袭传奇_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：67_重生女强_职场逆袭传奇_学习版.html');
console.log('✓ 已生成：67_重生女强_职场逆袭传奇_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生女强：职场逆袭传奇：女强重生`);
console.log(`- 题材：重生 · 职场 · 大女主`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);