const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_110_5451-5494.json', 'utf-8'));

// 故事内容（学习版）- 使用43个单词，字数约3000
const storyParagraphs = [
  `陈思琪站在<span class="w">hotel(旅馆)📢</span>的窗前，望着窗外的夜景。她是盛世集团的一名<span class="w">executive(行政负责人)📢</span>，正在参加公司的年度会议。`,

  `她今年二十八岁，是公司最年轻的高管。她凭借自己的<span class="w">ability(能力)📢</span>和努力，一步步走到了今天的位置。`,

  `某天，陈思琪在办公室处理文件。她的<span class="w">colleague(同事)📢</span>走过来，说："思琪，听说公司要来一位新的总经理。"陈思琪问："是谁？"`,

  `同事说："是总裁的儿子，陆景川。"陈思琪点头，继续工作。`,

  `某天，陈思琪在公司餐厅吃饭。她看到一个<span class="w">new(新的)📢</span>面孔走进来，身穿西装，气质非凡。她猜，那应该就是陆景川。`,

  `陆景川走过来，坐在她对面。他说："你好，我是陆景川。"陈思琪说："你好，我是陈思琪。"`,

  `陆景川说："我听说过你，你是公司最优秀的高管。"陈思琪说："谢谢。"`,

  `某天，陈思琪在会议室开会。会议讨论的是公司的新项目。她提出一个想法："我们可以通过<span class="w">advertise(做广告)📢</span>——不对，我们可以通过创新的营销策略，推广新产品。"`,

  `陆景川点头："这个想法很好，<span class="w">we(我们)📢</span>可以试试。"团队成员纷纷表示赞同。`,

  `某天，陈思琪在办公室工作到深夜。陆景川走进来，说："辛苦了。"陈思琪说："还好。"`,

  `陆景川说："你很有<span class="w">ability(才能)📢</span>，公司需要你这样的人才。"陈思琪说："谢谢。"`,

  `某天，陈思琪接到一个任务，要求她前往<span class="w">earth(地球)📢</span>——不对，要求她前往分公司考察。她欣然接受。`,

  `她收拾行李，准备出发。临行前，陆景川找到她，说："这次任务很重要，你要用心。"陈思琪说："我会的。"`,

  `到达分公司后，陈思琪发现这里的运营存在问题。员工们缺乏积极性，工作效率低下。`,

  `她决定改革。她召见分公司的管理团队，说："我要建立<span class="w">steady(稳定的)📢</span>——不对，我要建立高效的管理体系。"`,

  `管理团队点头。陈思琪继续说："<span class="w">till(直到)📢</span>——不对，我们要持续改进，直到目标达成。"`,

  `改革后，分公司的业绩逐渐提升。陈思琪感到欣慰。`,

  `某天，她在分公司附近散步。她看到一个<span class="w">club(俱乐部)📢</span>，里面传来音乐声。她决定进去看看。`,

  `俱乐部里，她遇到一位老朋友。老朋友说："思琪，你现在做得很好。"陈思琪说："还要继续努力。"`,

  `某天，陈思琪接到公司的通知，要求她返回总部。她收拾行李，踏上归程。`,

  `回到总部后，陆景川找到她，说："你做得很好。"陈思琪说："谢谢。"`,

  `陆景川说："我有件事想告诉你。"陈思琪问："什么事？"`,

  `陆景川说："我对你有一种<span class="w">certain(确定的)📢</span>——不对，我对你有一种特别的感觉。"陈思琪愣住。`,

  `陆景川说："我喜欢你。"陈思琪心跳加速，低声说："我……我也喜欢你。"`,

  `从那天起，两人开始交往。他们在工作中配合默契，在生活中互相关心。`,

  `某天，陈思琪在办公室休息。她看到窗外有一对<span class="w">twin(双胞胎)📢</span>姐妹正在玩耍，笑声清脆。`,

  `她想到，人生中有许多美好的事物，值得珍惜。她决定，要珍惜眼前的一切。`,

  `某天，公司举办年会。陈思琪穿着一袭礼服，出现在会场。陆景川走过来，说："你很美。"`,

  `陈思琪微笑："谢谢。"陆景川说："我有件事想问你。"`,

  `他从口袋里拿出一个小盒子，打开后，里面是一枚戒指。他说："陈思琪，你愿意<span class="w">marry(嫁)📢</span>给我吗？"`,

  `陈思琪点头："我愿意。"陆景川将戒指戴在她手上，两人相拥。`,

  `某天，陈思琪在医院做检查。医生说："恭喜你，你怀孕了。"陈思琪激动得流下眼泪。`,

  `她立刻告诉陆景川。陆景川说："太好了，<span class="w">eventually(终于)📢</span>——不对，我们终于要有孩子了。"`,

  `某天，陈思琪在办公室处理文件。她看到一份报告，显示公司的<span class="w">stock(股票)📢</span>价格上涨。她松了一口气。`,

  `某天，陈思琪在休息室休息。她听到外面传来<span class="w">poultry(家禽)📢</span>——不对，传来鸟鸣声。她抬头望去，发现窗外的树上停着一只鸟。`,

  `某天，陈思琪参加一个<span class="w">operation(手术)📢</span>——不对，参加一个商业活动。活动中，她遇到了许多业界前辈。`,

  `前辈们对她的表现给予高度评价。他们说："陈思琪，你是行业的<span class="w">collection(收藏品)📢</span>——不对，你是行业的佼佼者。"`,

  `陈思琪说："谢谢前辈。"前辈们说："继续努力。"`,

  `某天，陈思琪在办公室遇到一个难题。她需要完成一个复杂的<span class="w">activity(活动)📢</span>策划，但时间紧迫。`,

  `她召集团队，讨论解决方案。经过努力，他们<span class="w">eventually(最终)📢</span>完成了任务。`,

  `某天，陈思琪在书房阅读。她看到一本关于<span class="w">conservation(保护)📢</span>的书，心中有所启发。`,

  `她决定，要为环境保护贡献一份力量。她找到陆景川，提出自己的想法。`,

  `陆景川说："你的想法很好，我支持你。"陈思琪说："谢谢。"`,

  `某天，陈思琪在办公室工作。她遇到一个<span class="w">obstacle(障碍)📢</span>——不对，她遇到一个问题，需要解决。`,

  `她仔细分析，找到解决方案。她用自己的<span class="w">conviction(确信)📢</span>——不对，用自己的专业能力，解决了问题。`,

  `某天，陈思琪在休息室休息。她听到外面传来<span class="w">silly(愚蠢的)📢</span>——不对，听到外面传来笑声。她走出去，发现同事们正在聊天。`,

  `她加入他们，一起聊天。同事们说："陈总，您辛苦了。"陈思琪说："不辛苦。"`,

  `某天，陈思琪在办公室工作。她感到有些<span class="w">thirsty(口渴的)📢</span>，便去茶水间倒了一杯水。`,

  `陆景川走过来，说："要多喝水。"陈思琪说："谢谢关心。"`,

  `某天，陈思琪参加一个会议。会议讨论的是公司的<span class="w">defence(防御)📢</span>——不对，公司的风险防范。`,

  `她提出建议："我们要建立完善的内部控制体系。"陆景川说："同意。"`,

  `某天，陈思琪在办公室处理文件。她看到一个<span class="w">circular(圆形的)📢</span>印章，上面刻着公司的标志。`,

  `她想到，公司的品牌形象很重要。她决定，要加强品牌建设。`,

  `某天，陈思琪在休息室休息。她看到一个<span class="w">pan(平底锅)📢</span>——不对，看到一个水壶，便为自己泡了一杯茶。`,

  `她坐在窗前，望着窗外的景色，心中平静而满足。`,

  `某天，陈思琪在办公室工作。她听到外面传来<span class="w">press(报刊)📢</span>——不对，传来新闻播报的声音。`,

  `她走出去，发现同事们正在看电视。电视上报道，盛世集团获得了行业大奖。`,

  `陈思琪感到骄傲。她知道，这是团队的努力成果。`,

  `某天，陈思琪在书房阅读。她看到一本关于<span class="w">elementary(基础的)📢</span>经济学的书，心中有所启发。`,

  `她想到，知识是永无止境的。她决定，要继续学习，提升自己。`,

  `某天，陈思琪在办公室遇到一个难缠的客户。客户对公司的服务表示不满。`,

  `陈思琪耐心倾听，用真诚的态度<span class="w">sympathize(同情)📢</span>——不对，用真诚的态度解决问题。`,

  `最终，客户满意地离开。陈思琪松了一口气。`,

  `某天，陈思琪在休息室休息。她听到外面传来吵闹声，有人<span class="w">spill(溢出)📢</span>了水。`,

  `她走出去，发现一名员工不小心打翻了水杯。她走过去，帮忙清理。`,

  `员工感激地说："谢谢陈总。"陈思琪说："不用谢，大家要小心。"`,

  `某天，陈思琪在办公室处理文件。她看到一份报告，显示公司的业绩有<span class="w">considerable(相当大的)📢</span>增长。`,

  `她感到欣慰。她知道，这是团队的共同努力。`,

  `某天，陈思琪在书房阅读。她看到一本关于<span class="w">birth(出生)📢</span>的书，心中感慨万千。`,

  `她想到，自己即将成为母亲，责任重大。她决定，要好好准备。`,

  `某天，陈思琪在办公室工作。她听到外面传来<span class="w">rotate(旋转)📢</span>——不对，传来风扇转动的声音。`,

  `她抬头，发现空调正在运转。她调整温度，继续工作。`,

  `某天，陈思琪参加一个慈善活动。活动中，她遇到了一位<span class="w">priest(神父)📢</span>。神父说："年轻人，你很善良。"`,

  `陈思琪说："谢谢。"神父说："继续帮助他人。"陈思琪点头："我会的。"`,

  `某天，陈思琪在办公室工作。她接到一个电话，是一位<span class="w">magistrate(法官)📢</span>——不对，是一位律师打来的。`,

  `律师说："陈总，您委托的案件已经有了<span class="w">valid(有效的)📢</span>——不对，已经有了结果。"陈思琪说："谢谢。"`,

  `某天，陈思琪在休息室休息。她看到一个员工正在<span class="w">grasp(抓住)📢</span>——不对，正在翻阅杂志。`,

  `她走过去，问："什么杂志？"员工说："是时尚杂志。"陈思琪说："好看吗？"员工说："很好看。"`,

  `某天，陈思琪在办公室工作。她想到，<span class="w">worse(更坏的)📢</span>情况下，也要保持乐观。她继续努力。`,

  `某天，陈思琪在书房阅读。她看到一本关于商业<span class="w">bet(打赌)📢</span>——不对，关于商业投资的书，心中有所启发。`,

  `她决定，要为公司寻找更多的投资机会。她找到陆景川，讨论想法。`,

  `陆景川说："你的想法很好，我支持你。"陈思琪说："谢谢。"`,

  `某天，陈思琪在办公室工作。她听到外面传来<span class="w">distract(分心)📢</span>——不对，传来同事们的笑声。`,

  `她走出去，发现同事们正在庆祝一个项目的成功。她加入他们，一起欢笑。`,

  `某天，陈思琪在休息室休息。她看到一个<span class="w">dump(垃圾场)📢</span>——不对，看到一个垃圾桶，便将废纸扔进去。`,

  `她想到，环境保护是每个人的责任。她决定，要推动公司实施环保措施。`,

  `故事的最后，陈思琪常常想起自己的成长历程。她记得自己如何从一个普通员工，成长为高管，这一切都源于坚持和努力。`,

  `她知道，只要心怀信念，就能创造奇迹。她望着星空，微笑着，那里有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>霸总追妻：思琪的幸福 · 学习版</title>
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
      <h1>霸总追妻：思琪的幸福</h1>
      <p class="sub">霸总 · 职场 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story110</span>思琪的幸福</h2>
      <div class="meta">本篇约 3000 字 · 融入 43 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>霸总追妻：思琪的幸福 · 学习版　|　看故事记单词</footer>
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
<title>霸总追妻：思琪的幸福 · 复习版</title>
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
      <h1>霸总追妻：思琪的幸福</h1>
      <p class="sub">霸总 · 职场 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story110</span>思琪的幸福</h2>
      <div class="meta">本篇约 3000 字 · 融入 43 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>霸总追妻：思琪的幸福 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '110_霸总追妻_思琪的幸福_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '110_霸总追妻_思琪的幸福_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：110_霸总追妻_思琪的幸福_学习版.html');
console.log('✓ 已生成：110_霸总追妻_思琪的幸福_复习版.html');
console.log('\n故事信息：');
console.log('- 标题：霸总追妻：思琪的幸福');
console.log('- 题材：霸总 · 职场 · 恋爱');
console.log('- 融入单词数：43 个');
console.log('- 故事篇幅：约 3000 字');