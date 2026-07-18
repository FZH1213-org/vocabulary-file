const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_076_3751-3800.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `清晨的<span class="w">coffee(咖啡)📢</span>香气弥漫在办公室，陈雨晴站在窗前，望着窗外<span class="w">prosperous(繁荣的)📢</span>的城市。作为公司的<span class="w">brilliant(才华横溢的)📢</span>设计师，她知道自己肩上的责任重大。`,

  `某<span class="w">Thursday(星期四)📢</span>，陈雨晴接到一个重要<span class="w">job(工作)📢</span>。公司要她设计一组以"<span class="w">north(北方)📢</span>风光"为主题的<span class="w">commodity(商品)📢</span>包装。她知道，这是展示才华的机会。`,

  `陈雨晴开始<span class="w">organize(组织)📢</span>思路。她用<span class="w">telescope(望远镜)📢</span>——开阔的视野，观察市场趋势。她发现，消费者喜欢<span class="w">something(某物)📢</span>独特而有文化内涵的设计。`,

  `她决定从传统元素入手。她研究北方的<span class="w">feature(特征)📢</span>，如冰雪、森林、<span class="w">cattle(牛)📢</span>群等。她希望将这些元素<span class="w">cut(剪裁)📢</span>成现代风格，创造独特的视觉效果。`,

  `某天，陈雨晴在<span class="w">suburb(郊区)📢</span>的公园散步。她看到一群孩子在玩耍，他们脸上洋溢着<span class="w">energetic(精力旺盛的)📢</span>的笑容。她突然想到，设计应该充满活力和希望。`,

  `她回到工作室，开始创作。她用电脑软件绘制<span class="w">portrait(肖像)📢</span>——雪景的图案，用<span class="w">synthetic(合成的)📢</span>材料模拟质感。她的设计<span class="w">rapid(快速)📢</span>成型，效果出色。`,

  `<span class="w">meanwhile(与此同时)📢</span>，公司内部传来<span class="w">rumor(谣言)📢</span>——不对，是消息，说竞争对手正在开发类似产品。陈雨晴知道，必须加快进度，<span class="w">attack(攻击)📢</span>市场。`,

  `她召集团队，召开紧急<span class="w">chat(聊天)📢</span>——会议。她说:"我们需要在<span class="w">duration(期间)📢</span>内完成设计，抢占市场先机。"团队成员纷纷表示支持。`,

  `某天，陈雨晴在工作时感到身体不适。她担心是<span class="w">illness(疾病)📢</span>，但去医院检查后，医生说只是疲劳过度。她意识到，必须注意健康。`,

  `回到家，陈雨晴在<span class="w">bath(浴室)📢</span>里放松。她用<span class="w">shampoo(洗发水)📢</span>洗头，让紧张的神经舒缓下来。她知道，只有保持良好的状态，才能迎接挑战。`,

  `某周末，陈雨晴决定去郊外<span class="w">picnic(野餐)📢</span>放松。她准备了一些食物，包括烤<span class="w">turkey(火鸡)📢</span>肉，开车前往郊外。在那里，她遇到了一位<span class="w">sane(明智的)📢</span>老人。`,

  `老人看到她的设计稿，称赞道:"你的作品很有灵魂。"陈雨晴感激地说:"谢谢您的夸奖。"老人继续道:"设计要追求<span class="w">perfection(完美)📢</span>，也要有温度。"`,

  `陈雨晴听后，心中有所感悟。她回到城市，重新审视自己的设计。她发现，确实需要加入更多人文关怀。`,

  `某天，陈雨晴在办公室加班。她突然听到<span class="w">bug(小毛病)📢</span>——电脑出现故障。她立刻联系技术部门，<span class="w">immediate(立即)📢</span>解决了问题。`,

  `她继续工作，用<span class="w">twist(扭曲)📢</span>的线条表现北方的风雪。她的设计逐渐完善，得到同事们的认可。`,

  `某天，陈雨晴向上级汇报进度。上级看后，露出<span class="w">sad(悲伤)📢</span>——不对，是满意的表情。他说:"你的设计很有创意，继续完善。"`,

  `陈雨晴继续努力。她用<span class="w">sort(种类)📢</span>不同的材料，测试最佳效果。她发现，<span class="w">synthetic(合成)📢</span>材料最能表现北方的冷峻之美。`,

  `某天，陈雨晴在办公室接到一个电话。电话那头是一位客户，希望<span class="w">purchase(购买)📢</span>她的设计。陈雨晴心中一喜，知道自己的努力没有白费。`,

  `她与客户<span class="w">speak(交谈)📢</span>，了解对方的需求。她发现，客户是一家<span class="w">prosperous(繁荣)📢</span>的企业，希望通过包装提升品牌形象。`,

  `陈雨晴根据客户需求，调整设计。她用<span class="w">overall(全面的)📢</span>思维，考虑包装的实用性和美观性。她的方案让客户十分满意。`,

  `某天，陈雨晴在街上看到一个<span class="w">cluster(群)📢</span>——一群人在排队购买产品。她走近一看，发现正是她设计的包装。她心中涌起成就感。`,

  `她回到公司，将好消息告诉团队。团队成员纷纷祝贺她。陈雨晴谦虚道:"这是大家共同努力的结果。"`,

  `某天，陈雨晴收到一封邮件。邮件中是一篇<span class="w">essay(文章)📢</span>，介绍了北方文化的魅力。她从中汲取灵感，丰富设计内涵。`,

  `她决定去北方实地考察。她收拾<span class="w">luggage(行李)📢</span>，准备出发。临行前，她告诉团队:"我会带回<span class="w">something(某物)📢</span>新的灵感。"`,

  `来到北方，陈雨晴被眼前的景象震撼。她看到<span class="w">cattle(牛群)📢</span>在雪原上漫步，<span class="w">enclosure(围栏)📢</span>里堆满干草。她用相机记录下这些画面。`,

  `她走进一家当地的艺术馆，看到许多<span class="w">portrait(肖像画)📢</span>。她发现，北方艺术有一种独特的美感，粗犷而深沉。`,

  `某天，陈雨晴在北方小镇漫步。她看到一家咖啡馆，决定进去休息。她点了一杯<span class="w">coffee(咖啡)📢</span>，坐在窗边观察街道。`,

  `她看到人们在雪地里行走，脸上露出坚韧的表情。她意识到，北方人有一种不屈不挠的精神。她将这种精神融入设计中。`,

  `回到城市后，陈雨晴立刻开始创作。她用<span class="w">sensible(明智的)📢</span>的手法，表现北方的力量与美丽。她的设计再次得到认可。`,

  `某天，陈雨晴在办公室接到通知，说公司要举办设计展。她决定参展，展示北方系列作品。`,

  `展览当天，陈雨晴的作品吸引了众多观众。有人问她:"你是如何想到这些创意的?"她回答:"观察生活，感受自然。"`,

  `展览后，陈雨晴的知名度提升。她被邀请参加各种<span class="w">social(社交)📢</span>活动，结识了许多业界精英。`,

  `某天，陈雨晴在活动中遇到一位前辈。前辈告诉她:"你的设计<span class="w">invariably(总是)📢</span>令人惊艳。"陈雨晴感激道:"谢谢您的鼓励。"`,

  `前辈继续道:"你知道吗，你让我想起了年轻时的自己。<span class="w">as(作为)📢</span>过来人，我想告诉你，坚持自己的风格。"`,

  `陈雨晴听后，心中感动。她知道，前辈的认可对她来说意义非凡。`,

  `某天，陈雨晴在办公室处理文件。她看到一份<span class="w">precedent(先例)📢</span>案例，启发她改进设计流程。她用新方法，提高了工作效率。`,

  `某天，陈雨晴在公司遇到一个<span class="w">inferior(下级)📢</span>——新来的实习生。实习生对设计充满热情，但缺乏经验。陈雨晴主动指导，分享自己的心得。`,

  `实习生感激地说:"谢谢您的帮助。"陈雨晴微笑道:"大家都是从新手开始的。"`,

  `某天，陈雨晴在公司接到任务，要为一家慈善机构设计宣传材料。她立刻想到，可以用设计帮助需要帮助的人。`,

  `她查阅资料，发现这家机构主要帮助贫困地区的孩子。她决定，设计要体现孩子的希望和梦想。`,

  `某天，陈雨晴在街上看到一位老人摔倒在<span class="w">behind(后面)📢</span>——在她身后。她立刻上前扶起老人，并<span class="w">save(救)📢</span>助他联系家人。`,

  `老人感激地说:"谢谢你，年轻人。"陈雨晴回应:"这是应该做的。"`,

  `某天，陈雨晴在办公室休息。她用<span class="w">by(通过)📢</span>阅读杂志放松。她看到一篇关于设计师成长的文章，心中有所共鸣。`,

  `她想起自己从一个新人成长为<span class="w">brilliant(才华横溢的)📢</span>设计师的历程。她感慨，努力和坚持是成功的关键。`,

  `某天，陈雨晴接到通知，她的设计获得了国际奖项。她激动得热泪盈眶，知道这是对她努力的肯定。`,

  `她立刻将好消息告诉团队。团队成员纷纷祝贺她。陈雨晴说:"这个奖属于我们所有人。"`,

  `某天，陈雨晴在公司会议上发言。她说:"设计不仅是<span class="w">job(工作)📢</span>，更是<span class="w">behalf(利益)📢</span>——为社会创造价值的方式。"同事们纷纷点头赞同。`,

  `某天，陈雨晴在办公室整理物品。她看到一个<span class="w">enclosure(附件)📢</span>——一张旧照片，是她刚入行时的样子。她感慨万千。`,

  `她想起前些年的奋斗，那些<span class="w">sad(悲伤)📢</span>和快乐的时刻。她知道，每一步都是成长。`,

  `某天，陈雨晴决定给自己放个<span class="w">vacation(假期)📢</span>。她去了一个安静的小镇，放松身心。在那里，她找到了新的灵感。`,

  `回到城市后，陈雨晴继续创作。她相信，只要保持热情，就能创造出更多<span class="w">brilliant(辉煌的)📢</span>作品。`,

  `故事的最后，陈雨晴常常对年轻人说:"设计是一种语言，用它可以<span class="w">speak(表达)📢</span>对生活的热爱。不要被困难打倒，勇敢追寻自己的梦想。"`,

  `她相信，只要用心，每个人都能在自己选择的道路上发光。她望着窗外的天空，微笑着，那里有希望，有未来，还有无限的可能。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>职场女性：设计人生 · 学习版</title>
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
      <h1>职场女性：设计人生</h1>
      <p class="sub">职场 · 励志 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story76</span>创意之路</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>职场女性：设计人生 · 学习版　|　看故事记单词</footer>
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
<title>职场女性：设计人生 · 复习版</title>
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
      <h1>职场女性：设计人生</h1>
      <p class="sub">职场 · 励志 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story76</span>创意之路</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>职场女性：设计人生 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '76_职场女性_设计人生_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '76_职场女性_设计人生_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：76_职场女性_设计人生_学习版.html');
console.log('✓ 已生成：76_职场女性_设计人生_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：职场女性：设计人生：创意之路`);
console.log(`- 题材：职场 · 励志 · 大女主`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);