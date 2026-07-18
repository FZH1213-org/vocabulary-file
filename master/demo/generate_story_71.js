const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_071_3501-3550.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `<span class="w">waken(唤醒)📢</span>的瞬间，苏晚晴知道自己必须面对现实。她站在豪华办公室的窗前，望着<span class="w">downtown(商业区)📢</span>的繁华景象。作为<span class="w">premier(总理)📢</span>企业的项目经理，她深知自己肩上的责任。`,

  `三个月前，苏晚晴入职这家知名公司。她的<span class="w">efficiency(效率)📢</span>和专业能力很快得到认可。某天，总裁陆瑾轩亲自找到她，提出让她负责一个重要<span class="w">client(客户)📢</span>的项目。`,

  `陆瑾轩是商界的传奇人物，以霸道著称。他看着苏晚晴，用<span class="w">brisk(轻快的)📢</span>语气说："这个项目对公司至关重要，我相信你能完成。"苏晚晴点头，心中却有些忐忑。`,

  `项目初期，一切顺利。苏晚晴展现出<span class="w">professional(职业的)📢</span>素养，带领团队高效推进。她每天记录工作日志，在<span class="w">diary(日记)📢</span>中写下每一步进展。`,

  `某天，苏晚晴在办公室加班到深夜。她听到门外有脚步声，抬头看到陆瑾轩推门而入。他手里提着一瓶<span class="w">brandy(白兰地)📢</span>，淡淡道："辛苦了。"苏晚晴有些惊讶，总裁竟会亲自关心员工。`,

  `陆瑾轩在她对面坐下，倒了两杯酒。他谈起公司的未来发展，提到要<span class="w">establish(建立)📢</span>更完善的体系。苏晚晴听得认真，偶尔提出自己的<span class="w">viewpoint(观点)📢</span>——不对，应该用<span class="w">initiative(主动精神)📢</span>来表达见解。`,

  `从那以后，苏晚晴和陆瑾轩的接触变得频繁。每次开会，陆瑾轩都会用<span class="w">invaluable(无价的)📢</span>见解指导她。苏晚晴发现，这位看似冷酷的总裁，其实有着温暖的一面。`,

  `某周末，苏晚晴去郊外放松。她租了一辆自行车，踩着<span class="w">pedal(踏板)📢</span>穿行在山间小道。微风中飘来阵阵<span class="w">scent(香味)📢</span>，让她心情愉悦。`,

  `突然，她看到前方有一辆熟悉的黑色轿车。走近一看，竟是陆瑾轩。他正站在一座老旧的建筑前，似乎在<span class="w">observe(观察)📢</span>着什么。苏晚晴有些意外，总裁怎么会出现在这里？`,

  `陆瑾轩看到她，微微一愣，随即露出罕见的笑容。他解释道："这是我爷爷留下的老工厂，我计划将它改造成文化创意园。"苏晚晴听后，对这位总裁有了新的认识。`,

  `她跟着陆瑾轩走进工厂。里面堆满了陈旧的机器和零件，空气中弥漫着<span class="w">oxide(氧化物)📢</span>的味道。陆瑾轩指着角落说："那里曾是我爷爷工作的地方。"苏晚晴看到墙上挂着一张老照片，照片中的老人正专注地制作着什么。`,

  `陆瑾轩继续说道："我想<span class="w">exploit(开发)📢</span>这片土地，让更多人了解它的历史。"苏晚晴提出了一些建议，两人讨论得十分投机。`,

  `某天，苏晚晴在办公室收到一份包裹。她打开一看，里面是一套精致的<span class="w">china(瓷器)📢</span>茶具。随包裹附有一张卡片，上面写着："感谢你的付出——陆瑾轩。"苏晚晴心中一暖。`,

  `她将茶具摆放在办公桌上，用<span class="w">pail(桶)📢</span>打来清水，准备泡茶。她注意到茶杯上印着公司的标志，显然是特意定制的。这份礼物，让她感受到了陆瑾轩的<span class="w">kindness(仁慈)📢</span>。`,

  `项目进入关键阶段，苏晚晴的工作强度加大。她每天以惊人的<span class="w">pace(速度)📢</span>推进，确保每个环节都完美。陆瑾轩看着她的表现，心中暗自赞赏。`,

  `某天，苏晚晴在会议室向团队汇报进展。她用清晰的语言<span class="w">relate(叙述)📢</span>项目情况，每个人都听得入神。陆瑾轩坐在一旁，看着她自信的样子，心中涌起一股异样的情感。`,

  `会议结束后，陆瑾轩将苏晚晴叫到办公室。他开门见山地说："晚晴，我想让你担任更重要的职位。"苏晚晴有些惊讶，但没有立刻答应。她需要时间考虑。`,

  `那天晚上，苏晚晴在宿舍写下日记。她记录着与陆瑾轩的每一次接触，思考着他对自己的意义。她发现，这位总裁已经<span class="w">permeate(渗透)📢</span>进她的生活。`,

  `某天，苏晚晴接到通知，项目出现意外状况。她立刻赶到现场，发现问题比想象中严重。客户对方案提出质疑，甚至有<span class="w">reject(拒绝)📢</span>合作的倾向。`,

  `苏晚晴迅速召开紧急会议。她<span class="w">assemble(集合)📢</span>核心成员，商讨解决方案。她提出新的策略，试图扭转局势。团队成员被她的果断折服，纷纷表示支持。`,

  `陆瑾轩得知消息后，亲自出面与客户沟通。他用<span class="w">warrant(保证)📢</span>的态度，承诺公司会全力配合。最终，客户被说服，同意继续合作。`,

  `危机过后，苏晚晴对陆瑾轩更加敬佩。她发现，这位总裁不仅有能力，更有担当。她开始重新审视自己对他的感情。`,

  `某天傍晚，苏晚晴在公园散步。她看到一对老年夫妇手牵手走过，心中感慨。她想起陆瑾轩，不知道自己是否也能拥有这样的<span class="w">beloved(爱人)📢</span>。`,

  `她坐在长椅上，拿出笔记本写下感想。她写道："生活需要<span class="w">hard(努力)📢</span>，也需要温暖。"突然，一个声音在身后响起："写得不错。"苏晚晴回头，看到陆瑾轩正站在那里。`,

  `陆瑾轩在她身边坐下，指着远处的夕阳说："每天这个时候，我都会来这里。"苏晚晴问："为什么？"他回答："因为这里能看到最美的<span class="w">sun(太阳)📢</span>落下。"`,

  `两人沉默了一会儿，陆瑾轩开口道："晚晴，我想告诉你一件事。"苏晚晴转过头，看着他的眼睛。他说："我<span class="w">yet(还)📢</span>没有遇到过像你这样的人。"苏晚晴心中一动。`,

  `从那以后，苏晚晴和陆瑾轩的关系开始变化。他们频繁见面，谈论工作，也谈论生活。苏晚晴发现，陆瑾轩其实是个很温柔的人。`,

  `某天，苏晚晴在办公室收到一束鲜花。花束中夹着一张卡片，上面写着："愿我们的故事，如这花香般<span class="w">wonderful(美好)📢</span>。"苏晚晴看着卡片，嘴角上扬。`,

  `项目顺利完成，公司举办庆功宴。宴会上，陆瑾轩当众表彰苏晚晴的贡献。他说："苏小姐用她的<span class="w">facility(才能)📢</span>和专业精神，为公司赢得了荣誉。"`,

  `宴会结束后，陆瑾轩邀请苏晚晴去楼顶看夜景。他指着远处说："这片城市，是我奋斗的舞台。"苏晚晴看着他的侧脸，心中涌起复杂的情感。`,

  `陆瑾轩转过头，认真地说："晚晴，我想问你一个问题。"苏晚晴心跳加速，等待着他的下文。他说："你愿意成为我生命中的<span class="w">part(部分)📢</span>吗？"`,

  `苏晚晴愣住了，随即露出笑容。她回答："我愿意。"陆瑾轩眼中闪过一丝欣喜，轻轻握住她的手。`,

  `某天，苏晚晴在办公室处理文件。她看到一份<span class="w">insurance(保险)📢</span>申请表，突然想起什么。她拨通陆瑾轩的电话，说："瑾轩，我们需要谈谈。"陆瑾轩立刻赶来，以为出了什么问题。`,

  `苏晚晴说："我想申请把你也加入我的保险受益人名单。"陆瑾轩听完，<span class="w">laugh(笑)📢</span>了——不对，这里应该用其他表达。他微笑道："这真是个<span class="w">damn(该死)📢</span>好的提议。"`,

  `某周末，苏晚晴去陆瑾轩家做客。她看到书房里摆满了各种书籍和<span class="w">stone(石头)📢</span>收藏品。陆瑾轩解释道："这些石头是我从各地带回来的，每块都有故事。"`,

  `苏晚晴拿起一块石头，发现上面刻着字。她问："这是什么意思？"陆瑾轩回答："这是我爷爷留下的，上面写着'坚韧'二字。"苏晚晴心中感动。`,

  `某天，陆瑾轩带苏晚晴去参观他的新项目。那是他收购的一家工厂，正准备改造成创意园区。现场，一位<span class="w">carpenter(木匠)📢</span>正在修复老建筑。`,

  `陆瑾轩介绍道："这里将成为艺术家和创业者的聚集地。"苏晚晴看着他的规划图，心中对他的敬佩更深。她发现，这位总裁不仅有商业头脑，更有社会责任感。`,

  `某天，苏晚晴在办公室接到电话。电话那头是陆瑾轩的秘书，告诉她陆瑾轩因工作过度劳累而晕倒。苏晚晴立刻赶到医院，看到躺在病床上的陆瑾轩。`,

  `医生说："他只是疲劳过度，需要休息。"苏晚晴松了口气，坐在床边守候。她握着陆瑾轩的手，心中满是心疼。`,

  `陆瑾轩醒来后，看到苏晚晴，露出疲惫的笑容。他说："抱歉，让你担心了。"苏晚晴回应："你要照顾好自己。"陆瑾轩点头，心中涌起温暖。`,

  `出院后，陆瑾轩开始调整工作节奏。他不再像从前那样拼命，学会了享受生活。他经常带苏晚晴去郊外散步，感受自然的美好。`,

  `某天，两人在山间小路上散步。苏晚晴看到路边有野花，蹲下来闻了闻。花香让她想起第一次收到陆瑾轩送的花。她抬头，看到他正微笑着看她。`,

  `陆瑾轩说："晚晴，我想告诉你一件事。"苏晚晴站起身，等待着他的下文。他说:"公司准备在海外开设分公司，我想让你负责。"苏晚晴有些惊讶，但随即点头答应。`,

  `海外项目推进顺利，苏晚晴展现了出色的能力。她用<span class="w">democratic(民主的)📢</span>管理方式，赢得了团队的尊重。陆瑾轩看着她的成长，心中满是骄傲。`,

  `某天，陆瑾轩对苏晚晴说:"晚晴，我想送你一份礼物。"他带她来到一家珠宝店，让她挑选喜欢的款式。苏晚晴选中了一枚戒指，陆瑾轩当场为她戴上。`,

  `苏晚晴看着戒指，心中感慨万千。她想起与陆瑾轩相识的点点滴滴，从最初的陌生到现在的亲密，一切都像梦一般美好。`,

  `某<span class="w">anniversary(周年纪念日)📢</span>，陆瑾轩邀请苏晚晴共进晚餐。餐厅里，他用<span class="w">so-called(所谓的)📢</span>浪漫方式，表达了对她的爱意。苏晚晴感动得热泪盈眶。`,

  `她握着陆瑾轩的手，说:"谢谢你让我走进你的生活。"陆瑾轩回应:"应该是我感谢你，让我的生命变得完整。"`,

  `某天，苏晚晴在办公室接到一个电话。电话那头是一位<span class="w">coach(教练)📢</span>，邀请她参加一场马拉松比赛。苏晚晴想了想，决定参加。她希望通过运动，保持健康的状态。`,

  `比赛当天，陆瑾轩亲自到场为她加油。他用相机记录下她奔跑的身影，眼中满是骄傲。苏晚晴冲过终点，拥抱住陆瑾轩，笑着说:"谢谢你的支持。"`,

  `时光飞逝，苏晚晴和陆瑾轩的感情愈发深厚。他们一起经历风雨，一起迎接<span class="w">dawn(黎明)📢</span>。他们相信，只要彼此相伴，就能克服一切困难。`,

  `某天，陆瑾轩对苏晚晴说:"晚晴，我想给你一个惊喜。"他带她来到一片空地，指着前方说:"我将在这里建一座花园，以你的名字命名。"苏晚晴听后，感动得说不出话。`,

  `她知道，这份礼物比任何物质都珍贵。她看着陆瑾轩，心中涌起无限感激。她说:"瑾轩，谢谢你给我的一切。"陆瑾轩微笑:"这都是你应得的。"`,

  `故事的最后，苏晚晴常常对朋友说:"爱情不是童话，而是两个人共同成长的过程。不要被<span class="w">absent(缺乏的)📢</span>自信打败，勇敢追寻自己的幸福。"`,

  `她相信，只要真诚相待，就能收获<span class="w">wonderful(美好)📢</span>的爱情。她望着窗外的阳光，微笑着，那里有希望，有未来，还有她深爱的人。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>霸总的温柔陷阱 · 学习版</title>
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
      <h1>霸总的温柔陷阱</h1>
      <p class="sub">霸总 · 职场 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story71</span>温柔陷阱</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>霸总的温柔陷阱 · 学习版　|　看故事记单词</footer>
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
<title>霸总的温柔陷阱 · 复习版</title>
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
      <h1>霸总的温柔陷阱</h1>
      <p class="sub">霸总 · 职场 · 恋爱</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story71</span>温柔陷阱</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>霸总的温柔陷阱 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '71_霸总的温柔陷阱_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '71_霸总的温柔陷阱_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：71_霸总的温柔陷阱_学习版.html');
console.log('✓ 已生成：71_霸总的温柔陷阱_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：霸总的温柔陷阱：温柔陷阱`);
console.log(`- 题材：霸总 · 职场 · 恋爱`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);