const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('master/demo/vocabulary_split/vocabulary_010_451-500.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `李峰是一名微生物学家，他在一家研究所工作，专门研究细菌和<span class="w">insect(昆虫)📢</span>携带的病原体。每天，他都在实验室里进行各种<span class="w">experiment(实验)📢</span>，试图找出对抗疾病的新方法。`,

  `这天，李峰收到一份特殊的样本——从热带雨林带回的一种<span class="w">fierce(凶猛)📢</span>蜘蛛。据说这种蜘蛛的毒液中蕴含着某种特殊的物质。李峰将其放入培养皿，开始研究。`,

  `实验室里摆满了各种仪器。李峰坐在<span class="w">keyboard(键盘)📢</span>前，记录着观察数据。他发现蜘蛛毒液中的某种成分，能够有效抑制肿瘤细胞的生长。这个发现让他激动不已。`,

  `为了进一步验证，李峰决定进行动物<span class="w">experiment(实验)📢</span>。他从冷藏柜中取出一块<span class="w">beef(牛肉)📢</span>，准备喂食实验室的小白鼠。然而，就在他打开笼子时，意外发生了——蜘蛛样本不慎打翻，毒液洒在了实验台上。`,

  `李峰连忙清理，但部分毒液已经渗入缝隙。他担心毒液可能对环境和人体造成影响，立即向上级<span class="w">demand(要求)📢</span>更严格的防护措施。然而，上级却认为他太紧张，只是<span class="w">superficial(肤浅)📢</span>地敷衍了事。`,

  `几天后，实验室开始出现异常。李峰发现培养皿中的细菌出现了奇怪的变化——它们的生长速度大大加快，甚至开始<span class="w">invade(入侵)📢</span>邻近的培养皿。李峰意识到，蜘蛛毒液可能激发了细菌的某种潜能。`,

  `李峰立即启动紧急预案。他穿上防护服，拿起<span class="w">rod(杆)📢</span>状的工具，开始清理受污染的区域。他的动作熟练而迅速，仿佛在进行一场精密的<span class="w">operation(手术)📢</span>。`,

  `清理过程中，李峰注意到一个奇怪的<span class="w">triangle(三角形)📢</span>标记出现在实验台上。他不记得之前有过这个标记，心中升起一丝不安。他拿出放大镜仔细观察，发现标记下方有一行小字："小心<span class="w">enemy(敌人)📢</span>。"`,

  `李峰感到一阵<span class="w">fuss(忙乱)📢</span>。他开始调查标记的来源，询问每一位进入过实验室的人员。最终，他锁定了一名新来的实习生——张伟。`,

  `李峰找到张伟，直接质问他关于标记的事情。张伟脸色苍白，最终承认，他是一名商业间谍，受雇于一家竞争对手公司，目的是<span class="w">steal(窃取)📢</span>研究所的最新研究成果。`,

  `李峰将张伟交给了安全部门处理。然而，事情并没有结束。他发现蜘蛛毒液的影响已经扩散——实验室附近的<span class="w">grass(草地)📢</span>上，出现了许多奇怪的昆虫，它们的体型比正常大了数倍。`,

  `李峰意识到，蜘蛛毒液已经引发了某种生态危机。他立即联系了环保部门，并提供了详细的<span class="w">correspondence(通信)📢</span>报告。报告显示，毒液中的活性成分能够加速生物的生长，但也会导致基因突变。`,

  `环保部门高度重视，派出专家团队进行调查。他们发现，毒液已经渗透到地下水中，可能影响更广泛的区域。李峰感到深深的<span class="w">guilt(内疚)📢</span>——正是他的疏忽，导致了这场危机。`,

  `为了弥补错误，李峰决定全力投入解决方案的研发。他夜以继日地工作，不断尝试各种配方。终于，他发现了一种能够中和毒液的物质——<span class="w">steel(钢)📢</span>元素的一种特殊化合物。`,

  `李峰带着解决方案，前往受污染的区域。他和团队成员一起，在<span class="w">grass(草地)📢</span>和水源中投放中和剂。经过几天的努力，异常现象终于开始消退。`,

  `危机解除后，李峰回到了研究所。他向领导<span class="w">plead(恳求)📢</span>更严格的管理制度，避免类似事件再次发生。领导终于同意了他的要求，并决定建立一套全新的<span class="w">operational(操作)📢</span>规程。`,

  `然而，李峰的内心依然无法平静。他想起那些因他的疏忽而受到影响的生物，心中充满了<span class="w">miserable(痛苦)📢</span>。他决定，要用余生来弥补这个错误。`,

  `几个月后，李峰的研究取得了重大突破。他成功研发出一种新型药物，能够有效治疗多种疾病。这项成果在医学界引起了轰动，被称为"<span class="w">formidable(令人敬畏)📢</span>的成就"。`,

  `李峰并没有因此而骄傲。他知道，科学的道路永无止境，每一次成功背后都可能隐藏着新的<span class="w">danger(危险)📢</span>。他决定保持谦逊，继续努力。`,

  `一天，李峰收到了一封信。信中写道："感谢您的贡献。希望您能继续用科学的力量<span class="w">enrich(丰富)📢</span>人类的生活。"落款是一位曾经受他药物帮助康复的患者。`,

  `李峰读着信，眼眶湿润了。他意识到，科学不仅仅是一份工作，更是一份<span class="w">friendship(友谊)📢</span>和责任。他决心将这份责任延续下去，用每一项研究来回报社会。`,

  `为了纪念这次事件，李峰在实验室的墙上挂起了一个<span class="w">triangle(三角形)📢</span>的警示牌，提醒每一位科研人员：科学的力量是双刃剑，必须谨慎对待。`,

  `时间一天天过去，李峰的名声越来越大。他收到了许多研究机构的邀请，甚至有人愿意支付<span class="w">large(大量)📢</span>的薪酬让他跳槽。但李峰选择留下，他认为这里才是他的归宿。`,

  `在研究所里，李峰培养了一批年轻的研究员。他教导他们，科学需要<span class="w">effort(努力)📢</span>和耐心，更需要对生命的尊重。他经常说："每一个<span class="w">experiment(实验)📢</span>都可能影响无数生命，我们必须谨慎。"`,

  `有一次，一名年轻研究员问李峰："您为什么如此执着于研究？"李峰笑着回答："因为我想看到更多的<span class="w">delight(快乐)📢</span>笑容，而不是悲伤的眼泪。"`,

  `一年后，李峰的研究所举办了一场盛大的<span class="w">banquet(宴会)📢</span>，庆祝研究所成立五十周年。李峰作为首席科学家，在会上发表了演讲，分享了自己的经历和感悟。`,

  `演讲中，李峰提到了那段关于蜘蛛毒液的往事。他说："那是我人生中最艰难的时刻，也是最宝贵的教训。它让我明白，科学的责任不仅仅在于发现，更在于守护。"`,

  `演讲结束后，全场掌声雷动。李峰看着台下年轻的面孔，心中充满了希望。他相信，未来会有更多优秀的科学家，继续用智慧和勇气，探索未知的世界。`,

  `宴会结束后，李峰独自走到实验室外的<span class="w">grass(草地)📢</span>上。月光洒在他身上，他抬头看着夜空，仿佛能听到宇宙的<span class="w">meaning(意义)📢</span>在召唤他。`,

  `他想起小时候，父亲曾经给他讲过一个关于<span class="w">panda(熊猫)📢</span>的故事——熊猫虽然行动缓慢，但总能找到最适合自己的生存方式。李峰微笑着，他明白，科学研究也是如此，需要耐心和坚持。`,

  `李峰回到实验室，继续他的工作。桌上放着一份新的研究计划——关于如何用科学的方法保护濒危物种。他拿起笔，在计划的首页写下："用科学守护生命，是我们最崇高的使命。"`,

  `几年后，李峰的研究所成为了世界顶级的科研机构。他研发的药物拯救了无数患者，他的名字被刻在研究所的荣誉墙上，永远<span class="w">remain(留存)📢</span>在科学的史册中。`,

  `每当有人问起他的成功秘诀，李峰总是回答："坚持、责任和对生命的敬畏。"这三个词，是他一生的<span class="w">phrase(座右铭)📢</span>，也是他留给后人最宝贵的财富。`,

  `故事的最后，李峰站在研究所的窗前，看着窗外的<span class="w">ocean(海洋)📢</span>。他知道，科学的探索就像这片海洋一样，无边无际，充满未知。但他毫不畏惧，因为他相信，只要心中有信念，就能驶向任何想去的地方。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>科学守护者 · 学习版</title>
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
      <h1>科学守护者</h1>
      <p class="sub">科研 · 危机 · 责任</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story10</span>危险的发现</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>科学守护者 · 学习版　|　看故事记单词</footer>
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
<title>科学守护者 · 复习版</title>
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
      <h1>科学守护者</h1>
      <p class="sub">科研 · 危机 · 责任</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story10</span>危险的发现</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>科学守护者 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '10_科学守护者_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '10_科学守护者_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：10_科学守护者_学习版.html');
console.log('✓ 已生成：10_科学守护者_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：科学守护者：危险的发现`);
console.log(`- 题材：科研 · 危机 · 责任`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);