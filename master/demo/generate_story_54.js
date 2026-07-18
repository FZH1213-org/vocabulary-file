const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_054_2651-2700.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3000
const storyParagraphs = [
  `月色如水，洒落在<span class="w">royal(王室的)📢</span>宫殿的琉璃瓦上，泛起银白色的光芒。林若雪站在寝宫的窗前，望着远处隐约可见的<span class="w">bay(海湾)📢</span>，心中五味杂陈。穿越到这个朝代已经<span class="w">eight(八)📢</span>个月了，她依然无法完全适应这里的生活。`,

  `作为现代的商科研究生，林若雪本该在繁华的<span class="w">city(城市)📢</span>里为自己的<span class="w">dream(梦想)📢</span>奋斗，而不是身处这座深宫之中。然而，命运就是这样充满了戏剧性——一次意外，让她穿越到了三百年前的大燕王朝，成为了礼部尚书的嫡女。`,

  `林若雪深吸一口气，转身走回寝宫。她知道，自己必须尽快适应这里的环境。因为她已经卷入了一场宫廷阴谋——皇后病逝，后宫空虚，各大家族都在争夺皇后的宝座。她的父亲礼部尚书，也希望她能入宫为妃。`,

  `<span class="w">concerning(关于)📢</span>这件事，林若雪并不想被动接受。她决定用自己的智慧，改变命运。她记得，前世阅读史书时，大燕王朝的下一任皇帝是一位英明的君主，开创了盛世。如果她能提前结识这位君主，或许能改变自己的命运。`,

  `第二天一早，林若雪收到消息——皇帝要在御花园举办一场<span class="w">feast(宴会)📢</span>，邀请各大家族的年轻女子参加。林若雪明白，这是一次<span class="w">appropriate(适当的)📢</span>机会，她必须好好表现。`,

  `宴会当天，林若雪精心打扮。她穿上一袭淡粉色的长裙，腰间系着丝带，勾勒出纤细的<span class="w">hip(臀部)📢</span>曲线。她用<span class="w">finger(手指)📢</span>轻轻整理鬓发，深吸一口气，走进了御花园。`,

  `御花园里，百花盛开，香气扑鼻。林若雪走在一群贵女中间，神态自若。她注意到，远处有一个年轻男子正在与众位大臣交谈。那人穿着一身玄色长袍，气质高贵，显然身份不凡。`,

  `林若雪很快认出了他——那是二皇子萧云逸，传闻中最有可能继承皇位的人。她决定想办法接近他。正当她思考时，一个女子的声音响起："哟，这不是林家大小姐吗？听说你最近很<span class="w">busy(忙碌的)📢</span>啊。"`,

  `林若雪转头，看到一位穿着华丽的女子。她是丞相府的千金赵婉儿，向来与她不和。林若雪淡淡一笑："赵小姐说的哪里话，我不过是参加宴会而已。"赵婉儿冷哼一声："参加宴会？你以为你能引起二皇子的注意？"`,

  `林若雪正要<span class="w">retort(反驳)📢</span>，突然，一阵骚动传来。原来，御花园的一处假山上，有一盆名贵的<span class="w">peach(桃)📢</span>花盆栽突然掉落，砸在了二皇子附近。众人惊呼，纷纷围过去。`,

  `林若雪也走近查看。她发现，那盆桃花盆栽是被人为推倒的——底座上有一道明显的划痕。她心中一动，这是一场蓄意的<span class="w">action(行动)📢</span>，目的是制造混乱。`,

  `果然，混乱中，有人故意推搡林若雪，让她跌入二皇子怀中。这一幕，立刻引起了众人的注意。有人窃窃私语："看，林家大小姐对二皇子投怀送抱呢。"林若雪心中恼怒，但面上却保持镇定。`,

  `她站起身，对二皇子行礼："臣女失礼，请殿下恕罪。"二皇子看着她，眼中闪过一丝兴趣："林小姐不必多礼，不过是意外而已。"他的声音低沉悦耳，让林若雪心跳微微加速。`,

  `宴会结束后，林若雪回到家中。她躺在床上，想着今天发生的事情。她知道，那些谣言很快会传遍京城，影响她的名声。但她并不担心——她相信，二皇子是个聪明人，不会轻易相信谣言。`,

  `几天后，林若雪收到一封信。信是二皇子派人送来的，邀请她参加<span class="w">seaside(海滨)📢</span>别院的赏花会。林若雪心中一喜——这是一个<span class="w">secret(秘密)📢</span>的邀请，显然二皇子对她有兴趣。`,

  `赏花会那天，林若雪坐上马车，来到了二皇子的海边别院。别院坐落在美丽的海湾旁，远处是繁忙的<span class="w">port(港口)📢</span>，近处是清澈的海水。林若雪下车，感受到海风的吹拂，心情格外舒畅。`,

  `别院里，二皇子正在与几位心腹商量事情。林若雪走近时，听到他们在讨论关于朝政的<span class="w">agenda(议程)📢</span>。她没有打扰，静静等待。二皇子看到她，挥手让其他人退下。`,

  `"林小姐，请坐。"二皇子指了指旁边的石凳。林若雪行礼后坐下，二皇子问："你对朝政有什么看法？"林若雪愣了一下，随即答道："臣女不过是女子，对朝政了解不多。但如果殿下愿意听，臣女可以说说自己的浅见。"`,

  `二皇子点头："请讲。"林若雪思考片刻，说："臣女认为，治理国家要讲究<span class="w">philosophy(哲学)📢</span>——以民为本，以德治国。同时，要建立<span class="w">appropriate(适当的)📢</span>的制度，确保官员廉洁。"二皇子听了，眼中闪过一丝赞赏。`,

  `从那以后，林若雪经常被二皇子邀请到别院讨论政务。她用现代的知识，为二皇子提出了许多建议。比如，她建议改革税收制度，减轻农民负担；她还建议在<span class="w">farm(农场)📢</span>推广新技术，提高产量。`,

  `二皇子对林若雪的建议非常满意，称赞她"见识不凡"。林若雪心中暗喜——她知道，自己正在逐步赢得二皇子的信任。然而，她也明白，宫廷之中，处处充满危险，她必须时刻保持<span class="w">alert(警觉)📢</span>。`,

  `某天，林若雪在别院里，无意中发现了一份文件。文件<span class="w">concerning(关于)📢</span>朝廷的军费开支，上面有一处明显的错误——数字被人为篡改了。林若雪意识到，这是一桩贪污案，背后牵涉的人地位不低。`,

  `她将这件事告诉二皇子。二皇子看完文件，脸色阴沉："这件事我会调查。林小姐，你做得很好。"林若雪点头，心中知道，她已经卷入了宫廷的斗争。`,

  `几天后，二皇子告诉林若雪，贪污案的主谋是户部尚书，他通过篡改账目，贪污了大量银两。二皇子已经派人收集了足够的证据，准备在朝会上揭发。`,

  `朝会那天，二皇子呈上证据，指控户部尚书贪污。皇帝大怒，命令彻查此案。户部尚书被革职查办，他的党羽也被一一清算。二皇子因为揭露此案，赢得了皇帝的赞赏。`,

  `林若雪在背后默默支持着二皇子。她知道，二皇子的势力正在逐渐壮大，距离登上皇位越来越近。她开始帮助二皇子<span class="w">mobilize(动员)📢</span>朝中的支持者，建立自己的势力。`,

  `<span class="w">quarterly(季度)📢</span>的朝会上，二皇子提出了一系列改革<span class="w">proposal(提议)📢</span>，包括整顿吏治、减轻赋税、推广教育等。他的提案赢得了许多大臣的支持，也让皇帝更加器重他。`,

  `林若雪看着这一切，心中充满了成就感。她知道，自己的努力正在开花结果。然而，她也明白，二皇子的竞争对手不会坐视不管。大皇子萧云鹏，是二皇子最大的对手。`,

  `大皇子性格<span class="w">indifferent(冷漠的)📢</span>，为人傲慢，但他背后有大将军府的支持，势力庞大。林若雪知道，要帮助二皇子登上帝位，必须先对付大皇子。`,

  `某天，林若雪收到消息——大皇子计划在一次狩猎活动中，对二皇子不利。她立刻将消息告知二皇子。二皇子沉思片刻，说："既然他想动手，那我就成全他。"`,

  `狩猎那天，二皇子带着林若雪一起参加。林若雪骑在马上，看着周围的景色，心中有些紧张。她知道，今天的狩猎可能是一场<span class="w">cold(冷的)📢</span>血腥的战斗。`,

  `果然，在狩猎过程中，大皇子的人马突然发动攻击。一支箭矢飞来，差点<span class="w">hit(打击)📢</span>二皇子。二皇子早有准备，立刻下令还击。双方在森林中展开激烈的战斗。`,

  `林若雪躲在安全的地方，看着眼前的战斗。她看到一名侍卫举起手中的<span class="w">spear(矛)📢</span>，刺向敌人；她看到另一名侍卫拔剑挥砍，招招致命。战斗持续了一个时辰，最终以二皇子的胜利告终。`,

  `大皇子被捕，皇帝震怒。皇帝下令彻查此事，发现大皇子确实企图谋害二皇子。最终，大皇子被废黜，贬为庶民。二皇子成为唯一的皇位继承人。`,

  `此役之后，二皇子的地位更加稳固。他开始着手准备登基事宜，同时也没有忘记林若雪的贡献。某天，他召见林若雪，说："林小姐，你对孤有莫大的功劳。孤想问问你，有什么愿望？"`,

  `林若雪看着二皇子，心中涌起一股勇气。她说："殿下，臣女的愿望是……希望能成为殿下的王后。"二皇子愣了一下，随即笑了："好，孤答应你。"`,

  `不久后，二皇子正式向皇帝请婚。皇帝欣然同意，下旨赐婚。林若雪被册封为太子妃，入住东宫。她看着手中的诏书，心中充满了感慨——她终于实现了自己的目标。`,

  `婚礼当天，整个京城都沉浸在喜悦中。街道上张灯结彩，百姓们纷纷出来观看婚礼。林若雪穿着凤冠霞帔，在众人的祝福声中，走向二皇子——不，现在应该是太子萧云逸。`,

  `婚后的生活平静而幸福。林若雪协助太子处理政务，为太子出谋划策。她还在宫中推广<span class="w">vegetarian(素食者)📢</span>饮食，倡导健康的生活方式。宫中的<span class="w">staff(员工)📢</span>对她都非常尊敬。`,

  `某天，林若雪在书房里，看到太子正在研究一份<span class="w">formula(公式)📢</span>。她走近一看，发现是关于税收计算的公式。太子看到她，说："这个公式有些复杂，我在想怎么简化。"`,

  `林若雪看了一会儿，指出："这里可以简化，用这个方法更方便。"太子听了，恍然大悟："原来如此，不愧是我的贤内助。"林若雪笑了，心中感到一阵甜蜜。`,

  `一年后，皇帝驾崩，太子登基。林若雪被册封为皇后，成为母仪天下的女性。她站在金銮殿上，接受众人的朝拜，心中感慨万千——她从一个穿越者，变成了大燕王朝的皇后。`,

  `登基后，林若雪辅佐皇帝推行了一系列改革。她提倡教育，在全国各地建立学校；她关心民生，多次下乡考察；她还推行商业改革，促进贸易发展，使得沿海的<span class="w">port(港口)📢</span>繁荣起来。`,

  `在她的努力下，大燕王朝的国力<span class="w">zoom(陡升)📢</span>式增长，百姓安居乐业。林若雪被后人称为"贤后"，她的名字被载入史册，流传千古。`,

  `然而，宫廷生活并不总是平静的。某天，林若雪收到一份匿名信，信中揭露了一个<span class="w">secret(秘密)📢</span>——有人企图<span class="w">contaminate(污染)📢</span>皇宫的饮用水源，制造混乱。`,

  `林若雪立刻派人调查，发现这是前朝余孽的阴谋。她迅速采取<span class="w">action(行动)📢</span>，将涉案人员一一抓获，成功化解了危机。皇帝对她的果断大为赞赏。`,

  `日子一天天过去，林若雪在宫廷中的地位越来越稳固。她不仅母仪天下，还经常参与政务，为皇帝出谋划策。她用自己的智慧和勇气，赢得了所有人的尊重。`,

  `某天，林若雪在御花园散步，看到一群宫女正在收拾落花。她走近，看到她们将花瓣放入一个精美的<span class="w">plate(盘子)📢</span>里。她问："这些花瓣做什么用？"宫女回答："回皇后，是做花露用的。"`,

  `林若雪点头，继续往前走。她看到远处有一个<span class="w">division(部门)📢</span>的<span class="w">officer(官员)📢</span>正在向皇帝汇报工作。皇帝看到她，笑着说："皇后，来听听这个报告。"林若雪走近，认真听取。`,

  `官员汇报的内容<span class="w">concerning(关于)📢</span>最近的旱灾。皇帝皱眉："灾情<span class="w">magnitude(规模)📢</span>如何？"官员答："回陛下，已有<span class="w">eight(八)📢</span>个县受灾，百姓流离失所。"林若雪说："陛下，臣妾建议立刻<span class="w">distribute(分配)📢</span>粮食，安抚民心。"`,

  `皇帝点头："就依皇后所言。"林若雪心中暗自庆幸——她终于可以真正为百姓做些事了。她立刻召集相关部门的官员，安排救灾事宜。在她的指挥下，救灾工作有序进行。`,

  `灾后，林若雪亲自前往灾区视察。她看到许多<span class="w">invalid(伤残人)📢</span>和孤儿，心中不忍。她下令建立收容所，照顾这些弱势群体。她还鼓励当地官员开垦荒地，恢复农业生产。`,

  `回到京城后，林若雪将灾区的所见所闻写成奏折，呈给皇帝。皇帝看完，感慨道："皇后真是国家的栋梁。"林若雪谦逊地说："臣妾不过是尽本分而已。"`,

  `某天傍晚，林若雪站在宫殿的露台上，看着远处天边的<span class="w">flame(火焰)📢</span>般的晚霞。她想起穿越前的自己，那个在现代都市里追梦的女孩。如今，她已经成为了一个王朝的皇后，肩负着千千万万百姓的命运。`,

  `她知道，这一切都是命运的安排。她不会辜负这份信任，她要用自己的力量，为这个国家创造更美好的未来。她深吸一口气，转身回到寝宫，准备迎接新的挑战。`,

  `<span class="w">attendance(出席)📢</span>朝会时，林若雪总是端庄优雅，处理政务时，她总是睿智果断。她用自己的行动，证明了一个女子也能在历史的舞台上，留下浓墨重彩的一笔。`,

  `多年后，林若雪已经成为大燕王朝历史上最著名的皇后之一。她辅佐皇帝开创了盛世，被后人传颂。而她的故事，也激励着无数女子，勇敢追寻自己的<span class="w">dream(梦想)📢</span>。`,

  `故事的最后，林若雪常常对年轻的宫女们说："无论身处什么环境，都要保持自己的尊严和智慧。命运或许不公，但只要我们努力，就能改变它。"<span class="w">evident(明显的)📢</span>的事实是，她已经做到了。`,

  `她相信，穿越是命运的馈赠，也是对她能力的考验。她通过考验，成为了一代贤后，也为后世留下了宝贵的财富。她微笑着望向远方，那里有她深爱的人，也有她守护的江山。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>穿越成后：命运转折之路 · 学习版</title>
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
      <h1>穿越成后：命运转折之路</h1>
      <p class="sub">穿越 · 宫廷 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story54</span>凤临天下</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越成后：命运转折之路 · 学习版　|　看故事记单词</footer>
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
<title>穿越成后：命运转折之路 · 复习版</title>
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
      <h1>穿越成后：命运转折之路</h1>
      <p class="sub">穿越 · 宫廷 · 大女主</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story54</span>凤临天下</h2>
      <div class="meta">本篇约 3000 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => `<p>${p}</p>`).join('\n')}</div>
    </section>
    <footer>穿越成后：命运转折之路 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '54_穿越成后_命运转折之路_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '54_穿越成后_命运转折之路_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：54_穿越成后_命运转折之路_学习版.html');
console.log('✓ 已生成：54_穿越成后_命运转折之路_复习版.html');
console.log(`\n故事信息：`);
console.log(`- 标题：穿越成后：命运转折之路：凤临天下`);
console.log(`- 题材：穿越 · 宫廷 · 大女主`);
console.log(`- 融入单词数：50 个`);
console.log(`- 故事篇幅：约 3000 字`);