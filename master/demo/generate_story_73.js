const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_073_3601-3650.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `当第一缕<span class="w">daylight(日光)📢</span>透过窗棂，林雨萱睁开眼，发现自己身处一座<span class="w">magnificent(宏伟的)📢</span>宫殿。她本是现代的<span class="w">technician(技术员)📢</span>，一场意外让她穿越到古代，成为了宫中的女官。`,

  `林雨萱站在宫殿的<span class="w">quarter(区域)📢</span>里，看着手中的<span class="w">luggage(行李)📢</span>。她知道，从今以后，她的生活将彻底改变。她必须学会适应这个陌生的世界。`,

  `宫中的<span class="w">schedule(时间表)📢</span>严格而有序。每天清晨，林雨萱都会听到<span class="w">crow(乌鸦)📢</span>的叫声，这是她起床的信号。她快速梳洗，穿上宫女的服装，开始一天的工作。`,

  `作为女官，林雨萱负责管理宫中的<span class="w">jar(罐子)📢</span>和器皿。她用现代的<span class="w">theory(理论)📢</span>知识，改进了宫廷的收纳方式。她的做法得到了上级的认可。`,

  `某天，林雨萱在宫中巡逻。她看到一排排整齐的<span class="w">row(排)📢</span>房子，每间房子都住着宫女和太监。她意识到，这个看似华丽的宫廷，其实是一个等级森严的社会。`,

  `林雨萱决定用自己的方式改变现状。她提出了一套<span class="w">economical(节约的)📢</span>管理方案，减少宫廷的浪费。方案实施后，效果显著，连皇帝都听说了她的名字。`,

  `某日，皇帝召见林雨萱。皇帝问她:"你认为宫廷需要什么改变?"林雨萱谨慎地回答:"陛下，宫廷需要<span class="w">modernization(现代化)📢</span>的管理方式。"皇帝听后，沉思片刻。`,

  `皇帝对林雨萱的回答很满意。他说:"你的见解很<span class="w">worthy(值得的)📢</span>，朕会考虑你的建议。"林雨萱心中一喜，知道自己得到了机会。`,

  `某天，林雨萱在宫中看到一位<span class="w">niece(侄女)📢</span>模样的女孩在哭泣。她走过去询问，得知女孩刚入宫，还不适应宫中的生活。林雨萱安慰她，教她如何应对。`,

  `女孩感激地说:"谢谢姐姐，您真是个<span class="w">reliable(可靠的)📢</span>的人。"林雨萱微笑道:"宫中虽严，但只要用心，就能找到自己的位置。"`,

  `某<span class="w">semester(学期)📢</span>——不对，应该是某个季节，宫廷举办盛大宴会。林雨萱负责筹备，她用现代的思维，设计了一场别开生面的宴会。宴会上，<span class="w">balloon(气球)📢</span>装饰着大厅，<span class="w">wine(葡萄酒)📢</span>在杯中流淌。`,

  `皇帝对宴会赞不绝口。他对林雨萱说:"这次宴会真是<span class="w">terrific(极好的)📢</span>。"林雨萱谦虚地回应:"都是陛下英明的指导。"`,

  `宴会后，林雨萱在花园散步。她看到花儿竞相<span class="w">bloom(开放)📢</span>，蝴蝶在花间飞舞。她想起现代的生活，心中有些感慨。但她知道，既然已经来到这里，就要努力生活。`,

  `某天，林雨萱在书房整理书籍。她发现一本关于<span class="w">statistical(统计的)📢</span>的古籍，书中记录了宫廷的收支数据。她用现代的方法分析数据，发现了管理上的漏洞。`,

  `她将分析结果呈报给皇帝。皇帝看后，大加赞赏。他说:"你的<span class="w">reason(理性)📢</span>分析让朕刮目相看。"林雨萱回应:"陛下过奖，这是我的本分。"`,

  `某天，林雨萱听到宫中传来<span class="w">crash(碰撞)📢</span>声。她赶去查看，发现是两名宫女在争执。她立刻上前劝阻，用<span class="w">judicial(公正的)📢</span>态度处理了矛盾。`,

  `宫女们对林雨萱的处理结果心服口服。她们说:"林姐姐真是公正。"林雨萱微笑道:"宫中需要和谐，大家要互相关照。"`,

  `某天，林雨萱在宫中遇到一位<span class="w">acquaintance(熟人)📢</span>。原来是她穿越前认识的朋友，也穿越到了这个世界。两人相视一笑，心中感慨万千。`,

  `朋友低声说:"没想到我们会在<span class="w">elsewhere(别处)📢</span>相遇。"林雨萱回应:"这或许是命运的安排。"两人约定互相帮助，在宫中生存。`,

  `某天，林雨萱被任命为<span class="w">director(主管)📢</span>，负责管理更大的区域。她知道，这是皇帝对她的信任。她决定更加努力，不辜负这份信任。`,

  `她开始<span class="w">specialize(专门研究)📢</span>宫廷管理，制定了一套完善的制度。制度实施后，宫廷的运行效率大幅提升。皇帝对她的表现非常满意。`,

  `某天，林雨萱在宫中看到一个奇怪的装置。走近一看，原来是古代的<span class="w">antenna(天线)📢</span>——一种用来传递信号的工具。她用现代知识改进了装置，让信号传递更加清晰。`,

  `皇帝得知后，称赞林雨萱是宫中的奇才。他说:"你的才能让朕惊叹。"林雨萱谦虚回应:"陛下过奖，我只是尽了本分。"`,

  `某天，林雨萱在宫中接待外宾。她用优雅的礼仪和流利的语言，<span class="w">entertain(款待)📢</span>外宾。外宾对她的表现印象深刻，称赞她是大国的栋梁。`,

  `某晚，林雨萱在寝宫休息。她想起现代的家人，心中有些惆怅。但她知道，无论身在何处，家人都会希望她过得好。她决定坚强面对一切。`,

  `某天，林雨萱在宫中看到一位将军。将军腰间佩戴着<span class="w">sword(剑)📢</span>，威风凛凛。林雨萱上前行礼，将军回以微笑。两人开始交谈，将军对她的见识十分赞赏。`,

  `将军说:"林姑娘的见识不输男子。"林雨萱回应:"将军过奖，女子亦能为国效力。"将军点头，对她刮目相看。`,

  `某天，林雨萱在宫中看到一架古老的机器。她研究后发现，这是一台用来<span class="w">grind(磨碎)📢</span>谷物的工具。她用现代技术改进了机器，提高了效率。`,

  `宫中的工人们对新机器赞不绝口。他们说:"林主管真是聪明。"林雨萱微笑道:"这是大家共同努力的结果。"`,

  `某天，林雨萱在宫中举办一场<span class="w">solo(独奏)📢</span>音乐会。她邀请宫中的乐师演奏，美妙的音乐在宫殿中回荡。皇帝和皇后都来观看，对音乐会赞赏有加。`,

  `皇后对林雨萱说:"你的安排真是周到。"林雨萱回应:"能为陛下和娘娘服务是我的荣幸。"`,

  `某天，林雨萱在宫中处理事务。她发现一对<span class="w">couple(夫妇)📢</span>因小事争吵。她上前劝解，用温和的方式化解了矛盾。两人感激地谢过她。`,

  `林雨萱心中感慨，宫中的每个人都有自己的故事。她决定用更多的<span class="w">goodness(善良)📢</span>去对待每一个人。`,

  `某天，林雨萱在宫中看到一处<span class="w">curb(路边)📢</span>——宫中小径的边缘，摆放着<span class="w">aluminum(铝)📢</span>制的装饰品。她觉得这些装饰品很有特色，便命人妥善保管。`,

  `某天，林雨萱在书房阅读。她看到一本关于<span class="w">simultaneous(同时的)📢</span>翻译的书籍，书中介绍了古代的翻译技巧。她用现代的方法改进了翻译流程，让效率提升。`,

  `某天，林雨萱在宫中巡视。她看到河水在宫苑中<span class="w">flow(流淌)📢</span>，形成美丽的景致。她提议在河边种植花木，美化环境。皇帝批准了她的建议。`,

  `某天，林雨萱在宫中遇到难题。她需要<span class="w">cover(覆盖)📢</span>一个紧急的空缺岗位。她经过深思熟虑，推荐了一位<span class="w">durable(持久的)📢</span>可靠的人选。人选表现优异，皇帝十分满意。`,

  `某天，林雨萱在宫中看到一位贵族虐待宫女。她立刻上前制止，用<span class="w">compel(强迫)📢</span>的语气说:"这样的行为不被允许。"贵族被她的气势震慑，灰溜溜地离开。`,

  `宫女们对林雨萱充满感激。她们说:"林主管真是我们的救星。"林雨萱微笑道:"保护大家是我的责任。"`,

  `某天，林雨萱在宫中组织一场<span class="w">row(划船)📢</span>比赛。宫女和太监们参与其中，气氛热烈。林雨萱看着大家的笑容，心中感到温暖。`,

  `某天，林雨萱在宫中看到一处破旧的建筑。她提议修复，用<span class="w">make(制造)📢</span>新的材料替换损坏的部分。修复后的建筑焕然一新，成为宫中的新景点。`,

  `某天，林雨萱在宫中处理一位宫女的<span class="w">divorce(离婚)📢</span>请求。宫女因丈夫不忠，希望结束婚姻。林雨萱用公正的方式处理，维护了宫女的权益。`,

  `宫女感激地说:"谢谢林主管为我主持公道。"林雨萱回应:"每个人的尊严都应被尊重。"`,

  `某天，林雨萱在宫中看到一本书，书名是《如何<span class="w">become(成为)📢</span>优秀的管理者》。她仔细阅读，将书中的智慧运用到实际工作中。`,

  `某天，林雨萱在宫中接待一位来自远方的使者。使者用<span class="w">always(总是)📢</span>恭敬的态度与她交谈。林雨萱用优雅的礼仪回应，展现了大国的风范。`,

  `某天，林雨萱在宫中看到一些贵族试图<span class="w">dominate(支配)📢</span>宫女。她立刻上前制止，维护了宫女的尊严。皇帝得知后，称赞她是宫中的正义之声。`,

  `某天，林雨萱在宫中组织一场宴会。宴会上，<span class="w">flow(流淌)📢</span>着香醇的美酒，宾客们欢声笑语。林雨萱看着这一切，心中充满成就感。`,

  `某天，林雨萱在宫中反思自己的经历。她意识到，自己已经从一个普通的现代人，<span class="w">alter(改变)📢</span>成为了一个有担当的女官。她为自己的成长感到骄傲。`,

  `某天，林雨萱在宫中收到一封信。信是现代的朋友寄来的，信中写道:"无论身在何处，你都是最棒的。"林雨萱看着信，眼眶湿润。`,

  `她知道，自己的选择是正确的。她要继续努力，在这个时代发光发热。她相信，只要有信念，就能创造奇迹。`,

  `故事的最后，林雨萱常常对宫中的年轻女孩说:"无论在哪个时代，女性都要有自己的<span class="w">regard(尊严)📢</span>。不要被困难打倒，勇敢追寻自己的价值。"`,

  `她相信，现代的经验和古代的智慧结合，能创造出美好的未来。她望着宫殿外的天空，微笑着，那里有希望，有梦想，还有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越宫廷：女官传奇 · 学习版</title>
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
      <h1>穿越宫廷：女官传奇</h1>
      <p class="sub">穿越 · 宫廷 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story73</span>女官崛起</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越宫廷：女官传奇 · 学习版　|　看故事记单词</footer>
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
<title>穿越宫廷：女官传奇 · 复习版</title>
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
      <h1>穿越宫廷：女官传奇</h1>
      <p class="sub">穿越 · 宫廷 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story73</span>女官崛起</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越宫廷：女官传奇 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '73_穿越宫廷_女官传奇_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '73_穿越宫廷_女官传奇_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：73_穿越宫廷_女官传奇_学习版.html');
console.log('✓ 已生成：73_穿越宫廷_女官传奇_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越宫廷：女官传奇：女官崛起`);
console.log(`- 题材：穿越 · 宫廷 · 大女主`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);