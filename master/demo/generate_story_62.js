const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_062_3051-3100.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">night(夜晚)📢</span>的<span class="w">noon(中午)📢</span>，林雨晴站在警局的窗前，望着窗外的城市灯火，心中感慨万千。重生回到五年前，她终于有机会改变一切。前世，她是<span class="w">international(国际)📢</span>犯罪调查组的<span class="w">policeman(警察)📢</span>，因为一场阴谋，被诬陷谋杀，最终入狱。如今，她要让那些人付出代价。`,

  `<span class="w">month(月)📢</span>前，林雨晴被调到市刑警队。她<span class="w">never(从不)📢</span>想到，自己会成为一场阴谋的目标。前世，她的<span class="w">family(家庭)📢</span>因此破碎，她的<span class="w">vocation(职业)📢</span>生涯毁于一旦。这一世，她要<span class="w">investigate(调查)📢</span>真相，洗清冤屈。`,

  `林雨晴回到刑警队的<span class="w">domain(领域)📢</span>，开始梳理前世的记忆。她记得，阴谋的<span class="w">beginning(开始)📢</span>是一起谋杀案——受害者是一位<span class="w">surgeon(外科医生)📢</span>，在现场发现了一条<span class="w">ribbon(丝带)📢</span>和一件特殊的<span class="w">costume(服装)📢</span>。`,

  `她<span class="w">perform(执行)📢</span>着自己的日常工作，同时暗中调查。她发现，那起谋杀案并非简单的刑事案件，而是涉及到一个庞大的<span class="w">money(钱)📢</span>财集团。集团的头目利用<span class="w">jet(喷气)📢</span>式私人飞机进行跨境犯罪，<span class="w">pollute(污染)📢</span>着整个城市的治安。`,

  `<span class="w">sudden(突然)📢</span>有一天，林雨晴接到一个任务——保护一位<span class="w">dean(院长)📢</span>。院长是案件的证人，掌握着关键证据。林雨晴<span class="w">diligent(勤奋的)📢</span>地执行任务，但她发现，有人想对院长不利。`,

  `她立刻<span class="w">investigate(调查)📢</span>，发现是犯罪集团的人在暗中监视。她用<span class="w">graphic(生动的)📢</span>的方式，向上级汇报了情况。上级听后，决定<span class="w">augment(增加)📢</span>人手，加强对院长的保护。`,

  `然而，犯罪集团<span class="w">tolerate(容忍)📢</span>不了院长的存在。他们派出杀手，试图<span class="w">cancel(取消)📢</span>院长的生命。林雨晴<span class="w">resolute(坚决的)📢</span>地站在院长面前，用身体挡住了子弹。`,

  `她感到肩膀一阵<span class="w">surge(汹涌)📢</span>般的疼痛，但她没有倒下。她从<span class="w">compact(紧凑的)📢</span>的腰包里掏出枪，精准地击中杀手。<span class="w">everybody(每个人)📢</span>都惊呆了——这个女警察，竟然如此勇敢。`,

  `林雨晴被送往医院。<span class="w">layman(外行)📢</span>们以为她伤势严重，但实际上，子弹只是擦伤了她的肩膀。她在医院里休养了一个<span class="w">week(周)📢</span>，就回到了岗位。`,

  `回到警队后，林雨晴继续调查案件。她发现，犯罪集团的<span class="w">current(潮流)📢</span>正在蔓延，已经渗透到城市的各个角落。她决定从<span class="w">length(长度)📢</span>计议，逐步瓦解这个庞大的组织。`,

  `某天，林雨晴在<span class="w">service(服务)📢</span>站加油时，遇到一位<span class="w">soldier(士兵)📢</span>。士兵看到她，<span class="w">murmur(低语)📢</span>道："林警官，我听说你在调查案件。"林雨晴点头："是的，需要帮忙吗？"士兵说："我有一些情报，或许对你有用。"`,

  `林雨晴请士兵喝了一杯茶。士兵从<span class="w">mug(大茶杯)📢</span>里取出一张照片，说："这是犯罪集团的一个头目，他是我的<span class="w">family(家庭)📢</span>远亲。"林雨晴接过照片，心中一喜——这或许是突破口。`,

  `她立刻向<span class="w">earnest(诚挚的)📢</span>的上级报告。上级听完，点头："好，我们展开行动。"林雨晴和同事们一起制定计划，准备<span class="w">defend(辩护)📢</span>正义。`,

  `行动当天，林雨晴穿着便装，混入了犯罪集团的聚会。她用<span class="w">outward(向外的)📢</span>冷静的态度，隐藏着内心的紧张。她注意到，集团头目戴着一块<span class="w">quartz(石英)📢</span>表，表盘上镶嵌着微小的<span class="w">particle(粒子)📢</span>，在灯光下闪闪发光。`,

  `她<span class="w">mutter(低语)📢</span>着录音笔，记录下每一个重要信息。她知道，这些证据将<span class="w">publish(公布)📢</span>集团的罪行。`,

  `聚会进行到一半时，<span class="w">sudden(突然)📢</span>，警方冲入现场。林雨晴立刻行动，制服了几名嫌疑人。集团头目见状，试图<span class="w">flee(逃跑)📢</span>，但林雨晴早已封锁了出口。`,

  `头目被戴上手铐，林雨晴走到他面前，冷静地说："你的<span class="w>weight(重量)📢</span>罪行，将会被依法审判。"头目咬牙切齿："你以为这就结束了吗？"<span class="w">than(比)📢</span>起集团的势力，这只是冰山一角。`,

  `林雨晴没有理会他的威胁。她知道，只要<span class="w}sober(清醒的)📢</span>地面对，就一定能找到真相。她相信，正义终将战胜邪恶。`,

  `案件结束后，林雨晴被授予勋章。她站在领奖台上，看着台下的<span class="w">everybody(每个人)📢</span>，心中涌起一股自豪。她知道，这是对她努力的肯定，也是对她重生的认可。`,

  `某天，林雨晴在办公室整理文件。她发现一份旧案卷，卷中记录着一个<span class="w">notion(概念)📢</span>——集团背后，可能还有更大的势力。她深吸一口气，知道自己的工作还没结束。`,

  `她继续调查，发现集团与一个<span class="w">international(国际)📢</span>组织有关联。这个组织利用<span class="w">metric(公制的)📢</span>系统进行洗钱，手段隐秘而<span class="w}>graphic(生动的)📢</span>。林雨晴意识到，要彻底解决问题，必须找到组织的核心。`,

  `<span class="w">month(月)📢</span>后，林雨晴获得了一个线索——组织的高层将在某<span class="w">noon(中午)📢</span>举行秘密会议。她立刻召集队员，制定抓捕计划。`,

  `会议当天，林雨晴带队埋伏。她看着目标人物一个个进入<span class="w">domain(领域)📢</span>，心中默数着时间。当最后一人进入后，她一声令下，警方冲入现场。`,

  `组织高层被悉数抓获。林雨晴在现场发现了大量证据，证明他们<span class="w">pollute(污染)📢</span>了城市的治安。她将这些证据整理成报告，提交给法院。`,

  `审判当天，林雨晴站在法庭上，<span class="w">perform(执行)📢</span>着自己的职责。她用<span class="w">graphic(生动的)📢</span>的证据，证明了被告的罪行。法官听完，当场宣判——组织高层被判<span class="w">length(长度)📢</span>期徒刑。`,

  `案件结束后，林雨晴回到警队。她用<span class="w>resolute(坚决的)📢</span>的态度，继续维护城市的安宁。她知道，警察的<span class="w">vocation(职业)📢</span>是<span class="w">never(从不)📢</span>会结束的使命。`,

  `某天，林雨晴在街上巡逻。她看到一个<span class="w">layman(外行)📢</span>正在向路人询问方向。她走过去，<span class="w">earnest(诚挚的)📢</span>地提供了帮助。路人感激地说："谢谢，林警官。"林雨晴微笑："不客气。"`,

  `回到警队后，林雨晴开始写一份报告。她用<span class="w">metric(公制的)📢</span>方式整理数据，确保报告<span class="w">compact(紧凑的)📢</span>而清晰。她知道，专业的<span class="w">service(服务)📢</span>需要细致的态度。`,

  `<span class="w">night(夜晚)📢</span>，林雨晴在宿舍里休息。她拿起一只<span class="w">mug(大茶杯)📢</span>，喝着热茶。她想起前世，自己被诬陷入狱时的绝望。如今，她已经洗清冤屈，重新开始。`,

  `她想起那些曾经帮助过她的人——<span class="w">soldier(士兵)📢</span>、同事、上级。她知道，自己的成功离不开他们的支持。她决定，要用自己的方式，回报<span class="w">everybody(每个人)📢</span>的信任。`,

  `某天，林雨晴接到一个电话。电话那头是前世的<span class="w">family(家庭)📢</span>朋友，告诉她，那些陷害她的人，已经被依法处理。林雨晴听完，心中涌起一股释然。`,

  `她知道，重生的机会给了她第二次生命。她要珍惜这个机会，用行动证明——正义虽然会迟到，但<span class="w">never(从不)📢</span>会缺席。`,

  `某天，林雨晴在<span class="w">noon(中午)📢</span>时，遇到一位老人。老人递给她一根<span class="w">ribbon(丝带)📢</span>，说："这是我的感谢。"林雨晴接过丝带，心中温暖。她知道，这就是警察的<span class="w">weight(重量)📢</span>责任。`,

  `她将丝带系在桌前，提醒自己不要忘记初心。她用<span class="w">diligent(勤奋的)📢</span>态度，继续工作。她相信，只要坚持正义，就一定能守护城市的安宁。`,

  `<span class="w">than(比)📢</span>起前世的屈辱，如今的生活让她感到满足。她用自己的努力，证明了<span class="w">everybody(每个人)📢</span>都应该得到公平对待。`,

  `某天，林雨晴在警局遇到了<span class="w">pope(教皇)📢</span>——不，是一位神父。神父看到她，微笑着说："林警官，愿<span class="w">god(上帝)📢</span>保佑你。"林雨晴点头："谢谢。"`,

  `从那以后，林雨晴更加坚定。她知道，自己的使命不仅是<span class="w">investigate(调查)📢</span>案件，更是守护正义。`,

  `<span class="w">farewell(告别)📢</span>前世的阴影，林雨晴迎接新的生活。她用<span class="w">sober(清醒的)📢</span>头脑和<span class="w">resolute(坚决的)📢</span>意志，继续履行警察的职责。她相信，只要不放弃，就一定能守护光明。`,

  `故事的最后，林雨晴常常对年轻的警员说："警察的工作不仅是抓捕罪犯，更是<span class="w">defend(辩护)📢</span>正义。不要被<span class="w">money(钱)📢</span>财诱惑，不要被威胁<span class="w">tolerate(容忍)📢</span>妥协。只有坚守原则，才能真正守护人民。"`,

  `她相信，前世的经验让她学会了谨慎，重生的机会让她找到了真正的自己。她要用自己的故事，激励更多的人，勇敢追寻正义。她微笑着望向窗外，那里有阳光，有希望，还有美好的未来。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>重生警探：正义之路 · 学习版</title>
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
      <h1>重生警探：正义之路</h1>
      <p class="sub">重生 · 侦探 · 悬疑</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story62</span>正义归来</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生警探：正义之路 · 学习版　|　看故事记单词</footer>
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
<title>重生警探：正义之路 · 复习版</title>
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
      <h1>重生警探：正义之路</h1>
      <p class="sub">重生 · 侦探 · 悬疑</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story62</span>正义归来</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>重生警探：正义之路 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '62_重生警探_正义之路_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '62_重生警探_正义之路_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：62_重生警探_正义之路_学习版.html');
console.log('✓ 已生成：62_重生警探_正义之路_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：重生警探：正义之路：正义归来`);
console.log(`- 题材：重生 · 侦探 · 悬疑`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);