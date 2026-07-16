const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_024_1151-1200.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `凌晨三点，陆瑶还在公司加班。桌上<span class="w">pile(堆)📢</span>满了待审核的文件，她揉了揉酸痛的肩膀，望向窗外。在这个城市，像她这样<span class="w">stubborn(固执)📢</span>的女性并不多见，但陆瑶从不认为这有什么不对。`,

  `作为盛世集团财务部的<span class="w">grade(初级)📢</span>审计师，陆瑶每天面对的是海量的数据和<span class="w">continuous(连续的)📢</span>的工作压力。但她的工作从不出错，每一个数字都经过<span class="w">audit(审计)📢</span>确认。同事们都说她是个工作狂，可陆瑶知道，这不过是对工作的尊重。`,

  `"小陆，你又加班啊。"保安老张路过办公室门口。陆瑶笑了笑："张叔，我还有点工作没做完。"老张摇摇头："你们这些年轻人，真是不知疲倦。"陆瑶想起自己的<span class="w">youth(青春)📢</span>，大部分时间都在这样的夜晚度过。`,

  `走出写字楼，陆瑶去了公司<span class="w">garage(车库)📢</span>取车。今夜的风很凉，吹在她瘦削的脸上。她回想起入职三年来的点点滴滴，那些被<span class="w">underestimate(低估)📢</span>的瞬间，那些被忽视的努力，都像电影一样在脑海闪过。`,

  `陆瑶并不属于含着金汤匙出生的<span class="w">peer(同辈)📢</span>。<span class="w">she(她)📢</span>出身普通家庭，父母都是工人，靠着<span class="w">mutual(相互)📢</span>扶持才将她送进大学。从会计专业毕业后，她凭<span class="w">evidence(证据)📢</span>和能力进入盛世集团，却因为是女性而屡次被轻视。`,

  `"女人嘛，适合做些轻松的工作。"这是她听过无数次的话。每当这时，陆瑶都会握紧拳头，用行动证明自己。她不相信性别的<span class="w">judgement(判断)📢</span>会决定一切，只相信实力才是硬道理。`,

  `周一早晨，陆瑶准时到达办公室。刚坐下，部门经理王建国就让她去茶水间倒咖啡。这是<span class="w">commonplace(平常)📢</span>的事了，虽然陆瑶是审计师，但王建国总把她当成<span class="w">waitress(女服务员)📢</span>使唤。`,

  `"建国，让她做点有意义的工作。"同事陈雪小声提醒。王建国冷哼："她能做什么？还不是些<span class="w">easy(容易)📢</span>的杂活。"陆瑶握着咖啡杯的手微微颤抖，但她什么也没说，转身回到座位。`,

  `下午两点，集团总部来了重要通知。董事长要亲自视察财务部，时间就在明天。整个部门顿时乱成一团，像发生了<span class="w">earthquake(地震)📢</span>一样。王建国急得团团转，却找不到关键文件。`,

  `"谁负责上季度的<span class="w">storage(存储)📢</span>数据？"王建国大声问。所有人面面相觑。陆瑶站起身："是我，都在这里。"她将整理好的文件递过去，王建国接过，脸上闪过一丝尴尬。`,

  `第二天上午，董事长陆振华来到财务部。他是个<span class="w">holy(神圣)📢</span>不可侵犯的人物，整个集团无人不惧。陆瑶站在角落，努力让自己不引人注目。但陆振华的目光扫过人群，突然停在她身上。`,

  `"你叫什么名字？"陆振华问。陆瑶抬头："陆瑶，财务部审计师。"陆振华点点头："我看过你的报告，分析得很专业。"会议室里响起一片惊叹声，王建国的脸色瞬间变得苍白。`,

  `陆振华示意陆瑶坐到他旁边的<span class="w">stool(凳子)📢</span>上，开始询问她对公司财务状况的看法。陆瑶深吸一口气，开始<span class="w">interpret(解释)📢</span>她的发现。她的分析精准而犀利，指出了几个潜在的风险点。`,

  `"很好。"陆振华点头，"你就是我一直在找的人。"他转向其他人，声音严厉："财务部需要改革，一些人的工作方式必须改变。"王建国低着头，大气不敢出。`,

  `视察结束后，陆振华让陆瑶去他的办公室。路过公司<span class="w">lobby(大厅)📢</span>时，陆瑶感到无数双眼睛盯着她。她知道，这次机会对她来说意味着什么。`,

  `陆振华的办公室宽敞明亮，落地窗<span class="w">curtain(窗帘)📢</span>半开，阳光洒进来。他坐在办公桌后，示意陆瑶坐下。"陆瑶，我查过你的履历，你很优秀。从今天起，你直接向我汇报，负责总部<span class="w">outside(外部)📢</span>的业务审核。"`,

  `陆瑶愣住："董事长，我……"陆振华打断她："我知道你在想什么。很多人<span class="w">obstruct(阻碍)📢</span>你的发展，但我不在乎性别，我只看重能力。这个岗位<span class="w">entitle(给予)📢</span>你更大的权限，你有信心吗？"`,

  `"有！"陆瑶坚定地回答。陆振华露出了笑容："很好。不过我要提醒你，这个位置不容易，你会面对很多挑战。有人可能会对你进行<span class="w">insult(侮辱)📢</span>，甚至暗中使绊。你要学会<span class="w">exert(施加)📢</span>自己的影响力。"`,

  `回到工位，陆瑶收拾东西准备搬去顶层。王建国走过来，脸上的表情复杂："陆瑶，恭喜。"陆瑶看着这个曾经轻视她的上司，平静地说："谢谢您这三年的照顾。"王建国愣住，半晌说不出话。`,

  `新工作开始后，陆瑶每天都忙得像<span class="w">gallop(奔驰)📢</span>的骏马。她要审核各分公司的账目，还要处理各种突发事件。一次，她发现南方分公司账目异常，疑似有人<span class="w">steal(窃取)📢</span>公款。`,

  `陆瑶立即向陆振华汇报。陆振华让法务部和审计团队介入，最终查清了真相。那个分公司经理涉嫌挪用资金，还伪造文件，行为已构成<span class="w">treason(背叛)📢</span>公司的严重违规。陆瑶的敏锐为公司避免了巨额损失。`,

  `消息传出，集团上下震动。那些曾经质疑陆瑶的人，纷纷改变态度。有人开始叫她"女强人"，陆瑶却不喜欢这个<span class="w">nickname(绰号)📢</span>。"我只是做了该做的事。"她对朋友陈雪说。`,

  `陈雪看着陆瑶桌上的<span class="w">violet(紫罗兰)📢</span>花束，笑着说："你现在可是名人了。"陆瑶摇摇头："名人？我只希望做一名专业的财务人。"她拿起桌上的<span class="w">tablet(药片)📢</span>，喝口水吞下——最近胃痛又犯了。`,

  `一天晚上，陆瑶在公司加班到深夜。她感到一阵头晕，扶着桌子才站稳。保安发现后，立即通知了陆振华。陆振华赶到办公室，看到陆瑶脸色苍白，眉头紧锁。`,

  `"你太拼了。"陆振华说，"去休息吧。"陆瑶摇头："还有工作没做完。"陆振华走到她身边，轻轻拉开她的衣<span class="w">sleeve(袖子)📢</span>，露出她手臂上的淤青："这是怎么回事？"`,

  `"没什么，工作太累了。"陆瑶说。陆振华叹气："陆瑶，你不需要用这种方式证明自己。你的<span class="w">magnetic(有吸引力的)📢</span>品质已经展现出来了，不需要再拼命。"`,

  `陆瑶深吸一口气："董事长，我明白您的意思。但我不想被任何人<span class="w">defeat(击败)📢</span>，包括我自己。"陆振华沉默片刻，说："我理解。但要学会照顾自己。"`,

  `接下来的日子，陆瑶开始调整节奏。她不再像之前那样拼命，而是学会了合理安排时间。公司也<span class="w">generate(产生)📢</span>了新的管理机制，给女性员工更多支持。陆瑶发现，原来工作可以不必那么艰难。`,

  `半年后，陆瑶被提拔为财务部副总监。消息公布时，公司<span class="w">resistance(阻力)📢</span>很大，很多人认为她资历不够。陆振华力排众议，坚持任命。他在会议上说："陆瑶用实力证明了女性也能站在顶峰。"`,

  `陆瑶站在会议桌前，面对着所有人的目光。她想起入职第一天，想起那些被轻视的时刻，想起无数个加班的夜晚。所有的努力，都是为了这一刻。她知道自己做到了。`,

  `"谢谢大家的信任。"陆瑶说，"我会用行动证明，性别从来不是能力的衡量标准。"台下响起掌声，陆瑶的眼眶微微泛红。她感到一种从未有过的<span class="w">joy(喜悦)📢</span>。`,

  `回家的路上，陆瑶去了趟超市。她买了新鲜的<span class="w">meat(肉类)📢</span>和蔬菜，准备给自己做顿丰盛的晚餐来<span class="w">compensate(补偿)📢</span>这段时间的辛苦。路过冷藏区时，她想起食品安全课上学过的<span class="w">bacterium(细菌)📢</span>知识，特意挑选了新鲜的食材。拿起一瓶<span class="w">acid(酸)📢</span>奶，她想起大学时和室友一起熬夜学习的日子，嘴角浮现微笑。`,

  `陆瑶从不相信命运是注定的。她知道，有些人试图把她和成功隔开<span class="w">apart(分开)📢</span>，但只要坚持，就能打破一切障碍。她想起陆振华说过的话："真正的强者，不是从不跌倒，而是每次跌倒后都能站起来。"`,

  `周末，陆瑶参加了公司组织的<span class="w">train(培训)📢</span>课程。课堂上，讲师讲到领导力的本质，陆瑶认真聆听。她知道，成为管理者不仅需要专业能力，更需要人格魅力。她要让下属看到，女性领导者同样可以很有力量。`,

  `课间休息，几个年轻女员工找到陆瑶。"陆总监，我们想向您请教。"她们眼中满是崇拜。陆瑶看着她们，仿佛看到了当年的自己。"记住，"她说，"不要让任何人定义你的边界。"`,

  `那晚，陆瑶躺在床上，回想这几年的经历。她知道，未来还会有很多<span class="w">temptation(诱惑)📢</span>和挑战。有人可能会用金钱或权力动摇她，但她相信自己的原则不会动摇。`,

  `第二天，陆瑶去公司财务档案室查看资料。档案管理员刘阿姨看到她，笑着说："陆总监，您又来查资料啦？"陆瑶点头："刘姨，我想核对几个数据。"刘阿姨递上一叠文件："都在这里。"`,

  `翻阅文件时，陆瑶发现一个细节：三年前，她曾提交过一份改进财务流程的建议，但被王建国压下了。现在看来，那份建议如果能实施，公司可以节省很多成本。`,

  `陆瑶拿起电话，拨打人事部："喂，请帮我查一下，王建国现在是什么情况？"人事主管回答："王建国已经离职了，听说退休后靠<span class="w">pension(养老金)📢</span>生活。"`,

  `陆瑶挂断电话，心中没有怨恨，只有平静。她知道，那些曾经的阻碍，都已成为过去。现在，她有了<span class="w">very(正是)📢</span>自己想要的舞台，她要用实力证明一切。`,

  `年底，集团召开年度总结会。陆瑶作为新任副总监，在大会上发言。她站在讲台上，面对数百名员工，声音坚定而清晰。`,

  `"各位同事，曾经有人告诉我，女性不适合做财务高管。但今天，我站在这里，就是要告诉大家：能力没有性别之分，只有强者与弱者之分。"`,

  `台下响起热烈掌声。陆瑶继续说："我希望我的故事能给所有女性员工带来信心。不要害怕<span class="w">activate(激活)📢</span>你们的潜力，不要害怕去追求更高的目标。"`,

  `会议结束后，很多同事来向陆瑶道贺。陈雪挤过来，给了她一个拥抱："瑶瑶，你太棒了！"陆瑶笑着拍拍她的背："谢谢你一直以来的支持。"`,

  `回家的路上，陆瑶看到路边有个小女孩在踢球。女孩的母亲在旁边看着，脸上带着骄傲的笑容。陆瑶想，也许有一天，那个小女孩也会长大，会面对各种挑战，但只要她相信自己，就没有什么是不可能的。`,

  `陆瑶的故事在公司里传为佳话。她用实力证明了女性也能站在顶峰，她让更多人看到，真正的强者从来不是由性别决定的。而这一切，不过是她人生旅程的<span class="w">easy(轻松)📢</span>开端。`,

  `她知道，未来还有更多的山峰等待攀登。但她不再害怕，因为她已经学会了一个道理：当你不再被定义束缚，整个世界都会为你让路。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>逆袭人生 · 学习版</title>
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
      <h1>逆袭人生：她用实力证明女性也能站在顶峰</h1>
      <p class="sub">职场 · 逆袭 · 女性强</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story24</span>一个女性的职场逆袭之路</h2>
      <div class="meta">本篇约 2800 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>逆袭人生 · 学习版　|　看故事记单词</footer>
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
<title>逆袭人生 · 复习版</title>
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
      <h1>逆袭人生：她用实力证明女性也能站在顶峰</h1>
      <p class="sub">职场 · 逆袭 · 女性强</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story24</span>一个女性的职场逆袭之路</h2>
      <div class="meta">本篇约 2800 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>逆袭人生 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '24_逆袭人生_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '24_逆袭人生_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：24_逆袭人生_学习版.html');
console.log('✓ 已生成：24_逆袭人生_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：逆袭人生：她用实力证明女性也能站在顶峰`);
console.log(`- 题材：职场 · 逆袭 · 女性强`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 2800 字`);

// 验证所有单词都已使用
const usedWords = [];
storyParagraphs.forEach(p => {
  const matches = p.match(/<span class="w">([a-zA-Z]+)\(/g);
  if (matches) {
    matches.forEach(m => {
      const word = m.replace('<span class="w">', '').replace('(', '');
      if (!usedWords.includes(word)) {
        usedWords.push(word);
      }
    });
  }
});

console.log(`\n词汇使用统计：`);
console.log(`- 应使用：50 个单词`);
console.log(`- 实际使用：${usedWords.length} 个单词`);

if (usedWords.length < 50) {
  const vocabList = vocabData.vocabulary.map(v => v.word);
  const missingWords = vocabList.filter(w => !usedWords.includes(w));
  if (missingWords.length > 0) {
    console.log(`- 缺失单词：${missingWords.join(', ')}`);
  }
}