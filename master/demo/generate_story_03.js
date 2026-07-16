const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('master/demo/vocabulary_split/vocabulary_003_101-150.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词
const storyParagraphs = [
  `夜深人静，凤倾颜从<span class="w">software(软件)📢</span>公司加班回家，疲惫地躺在床上。作为公司的技术总监，她每天都要<span class="w">manage(管理)📢</span>无数的项目和团队。然而，一场突如其来的<span class="w">crisis(危机)📢</span>改变了一切——她在睡梦中突发心脏病，体温<span class="w">temperature(温度)📢</span>急剧下降，香消玉殒。`,

  `当她再次睁开眼睛时，发现自己躺在一个陌生的环境中。这里不是现代医院，而是一座古色古香的宫殿。她努力<span class="w">examine(检查)📢</span>自己的身体，发现穿着华丽的古代服饰。一位<span class="w">local(当地的)📢</span>宫女跪在床边，惊呼："陛下终于醒来了！"`,

  `凤倾颜震惊地意识到，自己竟然穿越到了古代，成为了一位女帝。她想起现代的<span class="w">anything(任何东西)📢</span>都已离她远去，取而代之的是这个陌生的时代。她深吸一口气，决定<span class="w">utilize(利用)📢</span>自己的现代知识，在这个时代生存下去。`,

  `宫女递给她一面铜镜，凤倾颜看到镜中的自己：一张倾国倾城的脸庞，却带着几分威严的<span class="w">temperament(气质)📢</span>。她意识到，自己现在是这片土地的统治者——一位需要面对无数挑战的女<span class="w">emperor(皇帝)📢</span>。`,

  `太医匆匆赶来，为她检查身体。太医说："陛下受了风寒，需要服用药<span class="w">pill(丸)📢</span>调理。"凤倾颜接过药丸，心中暗自庆幸，还好自己在现代学过中医知识，能够辨别药物的成分。`,

  `接下来的日子里，凤倾颜开始熟悉这个陌生的世界。她发现，这个国家的<span class="w">fundamental(基础的)📢</span>制度非常落后，百姓生活困苦。她决定从内部开始改革，<span class="w">consolidate(巩固)📢</span>自己的统治地位。`,

  `一天，凤倾颜在御花园散步，看到一座精致的<span class="w">cage(鸟笼)📢</span>，里面关着一只美丽的金丝雀。她心中涌起一股悲悯，下令打开笼门，放飞了那只鸟。她说："没有任何生命应该被束缚，每个人都应该拥有<span class="w">privacy(自由)📢</span>。"`,

  `宰相王肃是朝中最有权势的<span class="w">scholar(学者)📢</span>，他对这位年轻的女帝充满了怀疑。他认为女帝只是个傀儡，不足为惧。然而，凤倾颜很快用行动证明了他的<span class="w">fault(过错)📢</span>。她在朝堂上发表了一次精彩的<span class="w">lecture(演讲)📢</span>，阐述了自己的治国理念，赢得了大臣们的<span class="w">awe(敬畏)📢</span>。`,

  `凤倾颜开始推行一系列改革。她开放了国家的<span class="w">annual(年度)📢</span>科举制度，允许女子参加考试，这一举措震惊了整个朝野。她还设立了专门的学校，聘请<span class="w">ethnic(民族的)📢</span>各族学者教授知识，培养人才。`,

  `然而，改革并非一帆风顺。边境的叛乱势力趁机发动攻击，企图<span class="w">block(阻碍)📢</span>她的改革进程。叛军首领李狂是一个残暴的人，他曾经<span class="w">rape(掠夺)📢</span>过无数边境村庄，百姓对他恨之入骨。凤倾颜决定亲自率军出征。`,

  `出征前夜，凤倾颜在御书房中沉思。她拿起毛笔，写下了一首<span class="w">poem(诗)📢</span>："风萧萧兮易水寒，壮士一去兮不复还。"她知道，这次出征可能充满<span class="w">danger(危险)📢</span>，但她必须为百姓而战。`,

  `第二天一早，凤倾颜身穿战甲，骑上战马，带领大军向边境进发。队伍经过一座<span class="w">steep(陡峭的)📢</span>的山谷时，突然遭到叛军的埋伏。箭矢如<span class="w">wind(风)📢</span>般呼啸而来，士兵们纷纷倒下。凤倾颜冷静指挥，迅速调整阵型，化险为夷。`,

  `她命令士兵们利用地形优势，在山谷中设下陷阱。当叛军追击时，落入了我军的包围圈。凤倾颜亲自挥剑斩敌，她的剑法精准无比，每一剑都击中敌人的致命要害。士兵们看在眼里，无不对这位女帝心生敬佩。`,

  `经过数日的激战，叛军终于被击退。凤倾颜没有<span class="w">punish(惩罚)📢</span>投降的士兵，而是给他们提供了改过自新的机会。她的<span class="w">liberal(宽容)📢</span>态度赢得了人心，许多叛军纷纷归降。`,

  `在回京的路上，凤倾颜经过一个偏远的小镇。镇上的百姓生活贫困，许多人因为疾病而<span class="w">sick(生病)📢</span>。凤倾颜停下队伍，亲自为百姓诊治。她利用现代的医学知识，配制了有效的药方，为百姓解除病痛。`,

  `镇上有一位年迈的<span class="w">mistress(女主人)📢</span>，她拉着凤倾颜的手，感激地说："陛下真是活菩萨啊！我们从未见过如此仁慈的君主。"凤倾颜微笑着说："为民服务是我的责任，只要我还在，就不会让百姓受苦。"`,

  `回到京城后，凤倾颜继续推行改革。她开设了<span class="w">destination(目的地)📢</span>驿站，方便百姓出行；建立了<span class="w">register(注册)📢</span>制度，规范商业交易；她还鼓励工匠们<span class="w">polish(打磨)📢</span>技艺，生产出更加精美的商品。`,

  `然而，朝中仍有反对势力。宰相王肃暗中勾结外敌，企图发动政变。他派人暗中<span class="w">search(搜索)📢</span>凤倾颜的弱点，企图找到机会将她拉下台。他散布谣言，说女帝的改革是<span class="w">tangle(混乱)📢</span>之源，会带来灾难。`,

  `凤倾颜察觉到了朝中的异动。她决定采取行动，<span class="w">fix(固定)📢</span>住局面。她召集大臣们开会，公开了自己的改革方案，并<span class="w">explain(解释)📢</span>了每一项政策的意义。她用数据和事实说服了大多数大臣，赢得了他们的支持。`,

  `王肃见计谋失败，决定孤注一掷。他在朝堂上突然拔出匕首，刺向凤倾颜。然而，凤倾颜早有防备，她迅速闪身躲开，一<span class="w">fist(拳头)📢</span>击中了王肃的手腕。匕首落地，王肃被侍卫们当场拿下。`,

  `凤倾颜冷冷地看着王肃，说："你的<span class="w">spite(恶意)📢</span>和不忠，已经失去了为臣的资格。"她下令将王肃革职查办，并清查他的<span class="w">account(账户)📢</span>，将被贪污的财物全部归还国库。`,

  `这场政变让凤倾颜意识到，必须加强国家的安全体系。她任命忠诚的将领为<span class="w">escort(护卫)📢</span>统领，负责皇宫和京城的安全。她还建立了情报系统，及时掌握各地的动态。`,

  `一年后，国家逐渐走向繁荣。凤倾颜在御花园中举办了一场盛大的宴会，邀请各国的使节和<span class="w">scholar(学者)📢</span>参加。宴会上，乐师们演奏着<span class="w">fabulous(极好的)📢</span>的乐曲，舞者们跳着优雅的舞蹈。凤倾颜与众宾朋畅谈治国之道，分享改革经验。`,

  `宴会中，一位来自异域的诗人献上一首诗，<span class="w">theme(主题)📢</span>是赞美凤倾颜的英明。诗人朗诵道："凤鸣九天，天下归心；女帝之德，万民敬仰。"凤倾颜听后，心中感到无比欣慰。`,

  `宴会上，凤倾颜还遇到了一位来自远方的商人。商人告诉她，他曾经听说了一个关于<span class="w">spaceship(宇宙飞船)📢</span>的传说，说是天上有一艘巨大的船，可以飞向星空。凤倾颜微微一笑，她想，也许有一天，人类真的能够飞向太空。`,

  `宴会结束后，凤倾颜独自站在御花园的<span class="w">waterfall(瀑布)📢</span>前，望着飞流直下的水流，心中思绪万千。她想起现代的生活，想起那些曾经熟悉的<span class="w">software(软件)📢</span>和科技。但她知道，现在的她，有着更重要的使命。`,

  `她转身回到寝宫，命人点起蜡烛，在案前写下了下一阶段的改革计划。她希望，在她的统治下，这个国家能够变得更加强大，百姓能够过上更加幸福的生活。`,

  `几天后，凤倾颜收到了一封来自边境的<span class="w">remark(消息)📢</span>。信中说，边境的叛乱已经彻底平定，百姓们重新开始了安定的生活。凤倾颜心中感到无比欣慰，她的努力终于有了回报。`,

  `她决定亲自前往边境视察，看看百姓的生活状况。她带着<span class="w">proficiency(熟练)📢</span>的护卫队，沿着蜿蜒的山路前行。途中，她看到一处山脚下有一座破旧的小屋，便下车查看。`,

  `屋中住着一位年迈的<span class="w">shepherd(牧羊人)📢</span>，他独自抚养着几个孙辈。凤倾颜走上前，轻声询问老人的情况。老人看到女帝亲自前来，激动得热泪盈眶。他跪在地上说："陛下，您的改革让我们看到了希望。虽然我们还很贫穷，但我们相信，在您的带领下，生活会越来越好。"`,

  `凤倾颜扶起老人，说："你们的支持，就是我最强大的力量。"她立即下令，为老人和他的孙辈修建新房，并提供粮食和衣物。`,

  `回宫的路上，凤倾颜坐在马车中，透过车窗看到远处的山峦。她想起了一首现代的<span class="w">poem(诗)📢</span>："山不厌高，海不厌深。周公吐哺，天下归心。"她希望，自己能够像周公一样，赢得天下人的心。`,

  `回到皇宫后，凤倾颜继续夜以继日地工作。她查阅各地的<span class="w">list(名单)📢</span>，确保每一项改革都落实到位。她还不忘<span class="w">inspire(鼓舞)📢</span>身边的臣子们，激励他们为国家尽心尽力。`,

  `她常常对大臣们说："我们要记住一个<span class="w">fundamental(基本的)📢</span>道理：国家之本在于民。只有百姓安居乐业，国家才能长治久安。"大臣们纷纷点头，被女帝的智慧和远见所折服。`,

  `时间一天天过去，凤倾颜的改革成果越来越显著。国家的经济<span class="w">advance(进步)📢</span>迅速，百姓的生活水平不断提高。各国纷纷派使者前来学习经验，凤倾颜的名字传遍了整个大陆。`,

  `她用自己的行动证明，无论身处何种环境，只要有决心和智慧，就能创造出<span class="w">fabulous(极好的)📢</span>的成就。她就像一只浴火重生的凤凰，在这片古老的土地上，展开了全新的翅膀。`,

  `凤倾颜站在皇宫的最高处，望着脚下的<span class="w">depth(深度)📢</span>城市，心中充满了自豪和责任。她知道，这条改革之路还很长，但她愿意为了百姓，为了这个国家，一直走下去。`,

  `夜幕降临，宫灯点亮。凤倾颜回到寝宫，脱下龙袍，露出疲惫的身躯。她轻声对自己说："无论前方有多少困难，我都不会放弃。"她闭上眼睛，期待着明天的到来，期待着继续为她的人民创造更加美好的未来。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>凤临天下：女帝归来 · 学习版</title>
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
      <h1>凤临天下：女帝归来</h1>
      <p class="sub">重生穿越 · 大女主 · 权谋逆袭</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story03</span>浴火重生</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>凤临天下：女帝归来 · 学习版　|　看故事记单词</footer>
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
<title>凤临天下：女帝归来 · 复习版</title>
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
      <h1>凤临天下：女帝归来</h1>
      <p class="sub">重生穿越 · 大女主 · 权谋逆袭</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story03</span>浴火重生</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>凤临天下：女帝归来 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '03_凤临天下_女帝归来_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '03_凤临天下_女帝归来_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：03_凤临天下_女帝归来_学习版.html');
console.log('✓ 已生成：03_凤临天下_女帝归来_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：凤临天下：女帝归来：浴火重生`);
console.log(`- 题材：重生穿越 · 大女主 · 权谋逆袭`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);