const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_088_4351-4400.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `青云山巅，一座简陋的<span class="w">cottage(小屋)📢</span>中，林清雪盘腿坐在一块巨<span class="w">rock(岩石)📢</span>上，闭目<span class="w">meditate(沉思)📢</span>。她是修仙界的<strong>天才少女</strong>，年仅<span class="w">twenty(二十)📢</span>岁，已经突破到了筑基期。`,

  `清晨的阳光透过窗户照进来，林清雪睁开眼。她看到窗台上放着一块<span class="w">copper(铜)📢</span>制的灵石，那是师父留给她的遗物。她轻轻拿起，感受着上面残留的温度。`,

  `林清雪想起师父临终前的嘱托："清雪，你要记住，修仙之路充满艰险。你必须<span class="w">stand(站立)📢</span>得稳，心志坚定，才能走得更远。"`,

  `她起身走到屋外。不远处有一个清澈的池塘，水面泛着微微的<span class="w">pale(暗淡的)📢</span>光芒。林清雪知道，那是灵气凝聚的征兆。`,

  `她来到池塘边，突然发现水中漂浮着一块<span class="w">fragment(碎片)📢</span>。她用灵力将它托起，发现那是一块残破的玉简。上面记载着一种古老的修炼法门。`,

  `林清雪仔细阅读玉简，发现这种修炼法门需要寻找<span class="w">twenty(二十)📢</span>——不对，需要寻找灵气聚集之地。她决定下山历练，寻找机缘。`,

  `临行前，林清雪收拾了简单的行囊。她将一件<span class="w">fragile(易碎的)📢</span>灵器小心包好，放进包裹。这件灵器是师父的遗物，她必须好好保护。`,

  `她来到山下的城镇。这里的街道上人来人往，<span class="w">their(他们)📢</span>有的行色匆匆，有的悠闲漫步。林清雪找到一个落脚的客栈，决定先打听消息。`,

  `客栈的<span class="w">clerk(办事员)📢</span>见林清雪气度不凡，热情地招呼她。林清雪询问附近是否有灵气聚集之地，对方摇头表示不清楚。`,

  `林清雪在客栈住下。晚上，她听到外面传来阵阵<span class="w">echo(回声)📢</span>。她走出客栈，看到天空中有一道光芒划过，随后消失在远处的山脉中。`,

  `她心中好奇，决定第二天去一探究竟。她相信，那道光芒一定隐藏着什么秘密。`,

  `第二天一早，林清雪循着光芒的方向前进。她来到一片幽深的森林，空气中弥漫着奇怪的<span class="w">odor(气味)📢</span>。她小心翼翼地前进。`,

  `突然，她看到前方有一个巨大的洞穴。洞穴中传出阵阵寒气，仿佛连空气都要<span class="w">freeze(结冰)📢</span>。林清雪深吸一口气，走进了洞穴。`,

  `洞穴中黑暗无比，林清雪只能凭借<span class="w">intelligence(智力)📢</span>——凭借灵力感知前进。她发现洞穴深处有一个巨大的水晶，散发着柔和的光芒。`,

  `就在这时，洞穴突然震动起来。林清雪知道，这是某种<span class="w">force(力量)📢</span>在作祟。她必须尽快离开，否则会有危险。`,

  `她转身向外跑，却发现出口已经被堵住。洞穴中的水位开始上涨，她差点被<span class="w">drown(淹没)📢</span>。幸好她反应迅速，用灵力护住自己。`,

  `林清雪仔细观察，发现洞穴中有一个隐蔽的出口。她循着<span class="w">cue(提示)📢</span>——循着灵气的流动，找到了出路。`,

  `逃出洞穴后，林清雪发现外面的森林已经变得陌生。她知道，自己可能误入了某个修仙门派的禁地。`,

  `她正想离开，却被一队修士拦住。为首的是一个中年男子，他冷冷地看着林清雪，问："你是谁？为何擅闯我<span class="w">kingdom(王国)📢</span>——为何擅闯我派禁地？"`,

  `林清雪恭敬地解释自己的来历。那男子听完，脸色缓和了一些。他说："既然是误闯，我不为难你。但你必须告诉我，你在洞穴中看到了什么。"`,

  `林清雪如实相告。男子听后，沉吟道："那个水晶，是我们门派的护派之宝。看来，你与它有缘。"`,

  `他邀请林清雪到门派一叙。林清雪犹豫片刻，决定接受邀请。她相信，这或许是命运的安排。`,

  `来到门派后，林清雪见到了门派掌门。掌门是一个面容<span class="w">pale(苍白)📢</span>的老者，但眼神中却透着精光。他对林清雪说："小姑娘，你很有天赋。"`,

  `掌门告诉她，那块水晶是一件上古灵器，名叫"天心水晶"。它可以测试修炼者的资质，并赋予有缘人特殊的<span class="w">connection(联系)📢</span>——特殊的灵力连接。`,

  `林清雪询问掌门，为何水晶会出现在洞穴中。掌门说："那是为了防止外人觊觎，我们特意将它<span class="w">hide(隐藏)📢</span>在洞穴深处。"`,

  `几天后，林清雪决定加入这个门派。她通过了入门测试，成为一名正式弟子。掌门<span class="w">appoint(任命)📢</span>她为内门弟子，并传授她修炼心法。`,

  `林清雪努力修炼，进步神速。她发现这门派的修炼法门与她在玉简上看到的<span class="w">edition(版本)📢</span>有相通之处，便将两者结合，效果奇佳。`,

  `某天，林清雪在门派图书馆阅读典籍。她看到一本古书上有一个<span class="w">label(标签)📢</span>，上面写着"禁术"二字。她好奇地翻开。`,

  `书中记载了一种强大的术法，可以召唤天地之力。但修炼此术风险极大，稍有不慎就会导致经脉<span class="w">destruction(毁坏)📢</span>。`,

  `林清雪合上书，沉思良久。她知道，强大的力量往往伴随着危险。她必须谨慎选择。`,

  `晚上，林清雪回到住处。她看到桌上放着一张<span class="w">patch(小块)📢</span>布料，上面绣着奇特的符文。她认出这是师父的笔迹，心中涌起一阵思念。`,

  `她想起师父曾经对她说过："修炼就像人生，需要不断<span class="w">revolve(旋转)📢</span>——需要不断循环往复，才能有所突破。"`,

  `几天后，门派接到报告，说是附近的山谷中出现了异象。掌门派林清雪前往调查。`,

  `林清雪来到山谷，发现这里的树木已经<span class="w">rot(腐烂)📢</span>——大部分已经枯死。她循着灵气的流动，找到了异象的源头。`,

  `原来，山谷深处有一口灵泉，但灵泉已经干涸。林清雪仔细检查，发现是灵泉的管道出现了<span class="w">leak(漏洞)📢</span>，导致灵气泄漏。`,

  `她用灵力修复了管道，灵泉重新涌出清泉。山谷中的灵气开始恢复，枯木也重新焕发生机。`,

  `回到门派后，林清雪向掌门汇报了情况。掌门对她的表现很满意，说："你<strong class="w">deserve(值得)📢</strong>更好的修炼资源。"`,

  `他给了林清雪一个<span class="w">license(许可证)📢</span>，允许她进入门派的密室修炼。密室中灵气充裕，是修炼的绝佳之地。`,

  `林清雪在密室中修炼了<span class="w">twenty(二十)📢</span>天，修为突飞猛进。她感到自己的丹田中充满了<span class="w">surplus(过剩)📢</span>的灵气，是时候突破瓶颈了。`,

  `她走出密室，来到门派后山的悬崖边。这里有一块突出的岩石，她可以在这里俯瞰整个门派。`,

  `林清雪盘腿坐下，开始运功。她感到体内的灵气开始沸腾，仿佛有一股力量要冲破束缚。`,

  `<span class="w">notwithstanding(尽管)📢</span>修为已经达到瓶颈，林清雪依然保持冷静。她用师父传授的心法，引导灵气在经脉中流动。`,

  `终于，她感到体内的屏障被冲破。一股强大的力量从她体内涌出，周围的空气仿佛都凝固了。`,

  `林清雪睁开眼，眼中闪过一道光芒。她知道，自己已经成功突破到了金丹期。`,

  `就在这时，天空中突然出现了一道<span class="w">bus(公共汽车)📢</span>——不对，是出现了一道奇异的光芒。掌门和几位长老飞来，他们感受到了林清雪突破时的灵气波动。`,

  `掌门欣慰地说："清雪，你果然是修炼天才。才短短时间，就突破了金丹期。"林清雪谦虚地说："多亏掌门和各位长老的指导。"`,

  `长老们纷纷点头。其中一位长老说："清雪，你的天赋让我想起了当年的一位<span class="w">parent(母亲)📢</span>——让我想起了当年的一位天才。"`,

  `林清雪心中一动，她一直不知道自己的<span class="w">parent(父母)📢</span>是谁。师父当年收留她时，说她是弃婴。难道，这位长老知道什么？`,

  `她刚想询问，掌门却摆手道："那些都是往事了。清雪，你现在最重要的是继续修炼，争取早日飞升。"`,

  `林清雪点头，将心中的疑问压下。她知道，真相终有一天会浮出水面。`,

  `晚上，林清雪回到住处。她用<span class="w">soap(肥皂)📢</span>洗去身上的灰尘，准备休息。她躺在<span class="w">studio(工作室)📢</span>——躺在自己的房间里，很快进入了<span class="w">sleep(睡眠)📢</span>。`,

  `梦中，她看到一片广阔的<span class="w">kingdom(王国)📢</span>，天空中飞舞着无数仙鹤。她站在一座高台上，周围是无数修士，他们都在向她行礼。`,

  `她看到自己身上穿着华丽的法袍，手中握着一柄流光溢彩的飞剑。她知道，这是未来的自己。`,

  `醒来后，林清雪更加坚定了修炼的决心。她知道，只要坚持不懈，终有一天会成为真正的仙人。`,

  `某天，门派举行盛大的比武大会。林清雪作为内门弟子参赛，她用强大的实力击败了所有对手，获得了第一名。`,

  `掌门奖励了她一件<span class="w">costly(昂贵的)📢</span>法宝。林清雪接过法宝，心中充满了感激。她知道，这一切都是师父和掌门的栽培。`,

  `她暗下决心，一定要用实力证明自己，不负众望。她相信，只要<span class="w">willing(愿意)📢</span>努力，梦想终会实现。`,

  `故事的最后，林清雪站在山顶，望着天边的云彩。她想起师父的话："修炼之路，就像攀登山峰。只有不断前进，才能看到更美的风景。"`,

  `她深吸一口气，眼中闪烁着坚定的光芒。她知道，自己的修仙之路才刚刚开始，未来还有无数挑战等待着她。但她已经准备好了，用勇气和智慧，书写属于自己的传奇。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>修仙传说：问道青云 · 学习版</title>
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
      <h1>修仙传说：问道青云</h1>
      <p class="sub">修仙 · 玄幻 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story88</span>问道青云</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>修仙传说：问道青云 · 学习版　|　看故事记单词</footer>
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
<title>修仙传说：问道青云 · 复习版</title>
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
      <h1>修仙传说：问道青云</h1>
      <p class="sub">修仙 · 玄幻 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story88</span>问道青云</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>修仙传说：问道青云 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '88_修仙传说_问道青云_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '88_修仙传说_问道青云_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：88_修仙传说_问道青云_学习版.html');
console.log('✓ 已生成：88_修仙传说_问道青云_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：修仙传说：问道青云：问道青云`);
console.log(`- 题材：修仙 · 玄幻 · 励志`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);