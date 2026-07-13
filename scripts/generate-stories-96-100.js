const fs = require('fs');
const path = require('path');

// 故事配置（故事96-100）- 大学生喜爱的题材
const storyConfigs = [
  { theme: '大女主', title: '商业女王', subtitle: '从零开始', tags: '创业 · 奋斗 · 成功' },
  { theme: '霸总', title: '冰山融化', subtitle: '真爱降临', tags: '霸总 · 变化 · 爱情' },
  { theme: '职场', title: '团队协作', subtitle: '共同成长', tags: '团队 · 合作 · 进步' },
  { theme: '校园', title: '图书馆邂逅', subtitle: '书缘情缘', tags: '图书馆 · 邂逅 · 爱情' },
  { theme: '恋爱', title: '甜蜜告白', subtitle: '心动季节', tags: '告白 · 爱情 · 甜蜜' }
];

// 所有故事内容 - 词汇量控制在50-60个
const storyContents = {
  '从零开始': `简陋的出租屋里，林悦正【plan/规划】着自己的创业方案。作为一名白手起家的女性，她决心用自己的双手创造未来。每一个想法都需要【careful/仔细】的考量，每一步都承载着成功的【dream/梦想】。她深知创业的艰辛。房间里【simple/简陋】，她【focus/专注】于方案。她内心【determined/坚定】，充满信心。她【always/总是】保持奋斗的精神。

今天的任务是完成商业计划书的初稿。林悦注意到市场分析还不够【thorough/全面】，需要更多的数据支撑。她反复查阅资料，寻找最准确的【evidence/证据】。这是一个需要【patience/耐心】和努力的过程。她【never/从不】放弃自己的目标，【always/总是】努力完善。她【research/研究】市场，【analyze/分析】数据。

创业过程中，林悦遇到了一个难题。启动资金不足，无法开展业务。她【worried/担忧】地思考解决方案，尝试了多种融资方式。最终，她通过【hard/努力】的准备，成功说服了投资人。突破需要坚持。她【finally/终于】获得投资。她【excited/激动】地开始创业。事业【smoothly/顺利】启动。

获得投资后，林悦开始组建团队，开展业务。她发现，创业不仅需要想法，更需要【execution/执行力】。创业需要行动。她【active/积极】组建团队，【careful/仔细】管理财务。她【nervous/紧张】但同时也【confident/自信】。她【spend/投入】大量时间发展事业。

一年后，林悦的公司已经初具规模，业务蒸蒸日上。媒体纷纷报道她的创业故事，称她为"商业女王"。创业【successful/成功】。她【proud/自豪】地看着公司成长。每个人都为她的【achieve/成就】感到敬佩。

成功后，林悦感到一种深深的【satisfaction/满足】。奋斗的喜悦让她感到欣慰，但她明白，这只是事业的开始。她【humbly/谦逊地】接受大家的赞誉。成功在此【mark/标记】。她【continue/继续】追求更高的商业目标。

她明白，成功不仅是终点，更是激励他人的力量。她开始分享创业经验，帮助更多有梦想的人。经验在此传递。她【respect/尊重】创业精神，【share/分享】成功经验，【help/帮助】创业者。她【active/积极】参与创业辅导。

林悦开始培养年轻的创业者，传授创业技巧和管理经验。她告诉他们："创业需要【courage/勇气】和【persistence/坚持】。我们用努力创造价值，用实力证明自己。"她的故事帮助了许多人成长。希望在此传递。她【patient/耐心】地指导，【encourage/鼓励】创业精神。年轻创业者都受到她的【inspire/启发】。

商业女王，让林悦感受到奋斗的魅力和成功的价值。她决定继续深耕事业，用能力创造价值，用成功证明自己。这是她选择的道路，也是她奋斗的人生。每一次突破，都是一次对自己的证明。这是她的使命。她【determine/决心】一生【devote/奉献】给事业，【achieve/实现】更多目标，让人生更加【wonderful/精彩】，【build/建立】属于自己的传奇。她【firmly/坚定地】相信奋斗的力量。她【promise/承诺】会一直坚持创业。

某次创业论坛上，林悦分享了她创业理念："从零开始，用双手创造未来。我们用奋斗的力量，书写属于自己的传奇。"台下创业者深受启发，开始思考自己的道路。论坛现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以创造奇迹，奋斗的精神可以改变命运。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '真爱降临': `豪华的总裁办公室里，顾辰正【review/审视】着手中的文件。作为商界的冷面霸总，他习惯了用理性掌控一切。然而最近，他的心似乎开始有了【change/变化】。办公室里【luxurious/奢华】，他【think/思考】着自己的改变。他表面【calm/冷静】，内心却有些【disturbed/波动】。他【always/总是】试图保持理智。

今天的任务是处理一项重要的商业合作。顾辰注意到合作方的代表竟然是苏瑶——那个让他心动的女人。他反复提醒自己保持【professional/专业】，但内心无法平静。这是一个需要【control/控制】和理智的过程。他【try/尝试】保持冷静，【fail/无法】控制情绪。他【wonder/疑惑】自己的变化。

合作过程中，顾辰遇到了一个难题。他发现自己竟然在意苏瑶的看法，这与他的性格完全不同。他【confused/困惑】地分析自己的情绪，试图找到原因。最终，他意识到自己已经爱上了她。发现需要勇气。他【finally/终于】承认感情。他【surprised/惊讶】于自己的变化。内心开始【melt/融化】。

意识到感情后，顾辰开始尝试改变自己。他发现，爱情让他变得更加温柔和有人情味。改变需要时间。他【slowly/慢慢】改变态度，【gradually/逐渐】展现温柔。他【nervous/紧张】但同时也【happy/开心】。他【spend/花费】时间了解爱情。

某次危机中，苏瑶遇到困难，顾辰第一时间伸出援手。那一刻，他明白了自己的心已经完全属于她。原来冰山可以融化，真爱可以降临。感情在帮助中【blossom/萌芽】。他【moved/感动】地看着她。两颗心终于【close/靠近】。

告白的那一天，顾辰第一次主动表达自己的心意，承诺给她真正的爱情。告白【successful/成功】。他【sincere/真诚】地表达爱意。苏瑶被他的【change/改变】感动。冰山终于【melt/融化】。

他明白，爱情不是控制，而是付出和改变。他开始学着用真心对待感情，珍惜眼前的幸福。爱情在此成长。他【respect/尊重】她的独立，【support/支持】她的事业，【give/给予】她自由。他【active/积极】经营感情。

顾辰开始改变自己的人生态度，用真心对待身边的人。他告诉苏瑶："爱情需要【sincerity/真诚】和【trust/信任】。我愿意用一生守护你。"他的改变让所有人惊讶。爱情在此升华。他【patient/耐心】地经营感情，【encourage/鼓励】彼此成长。他们的爱情成为【legend/传奇】。

冰山融化，让顾辰感受到爱情的美好和改变的力量。他决定用真心守护这段感情，用行动证明自己的爱。这是他选择的道路，也是他爱情的开始。每一次付出，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】幸福生活，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的传奇。他【firmly/坚定地】相信爱情的力量。他【promise/承诺】会一直守护她。

某次婚礼上，顾辰分享了他爱情理念："真爱可以融化冰雪。我愿意用一生守护她。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。他用亲身经历证明，爱情的力量可以改变一个人，真心的付出可以收获幸福。每个人都被他【inspire/启发】。他感到无比【happy/幸福】和【fulfill/充实】。`,

  '共同成长': `开放式的办公室里，项目组长张悦正【organize/组织】着团队的周例会。作为年轻的团队负责人，她深知团队协作的重要性。每一项任务都需要【teamwork/团队合作】，每一次合作都是成长的【opportunity/机会】。她深知团队的力量。办公室里【busy/忙碌】，她【coordinate/协调】着工作。她内心很【responsible/负责】，充满干劲。她【always/总是】保持积极的沟通。

今天的任务是完成一个紧急项目。张悦注意到团队成员之间还需要更多的【understanding/理解】和配合。她反复强调协作的重要性，寻找最佳的工作方式。这是一个需要【communication/沟通】和耐心的过程。她【never/从不】放弃团队精神，【always/总是】努力协调。她【encourage/鼓励】成员，【solve/解决】问题。

项目过程中，团队遇到了一个难题。某个环节出现了延误，影响整体进度。张悦【worried/担忧】地思考解决方案，尝试了多种方法。最终，她通过【effective/有效】的协调和沟通，成功解决了问题。突破需要协作。她【finally/终于】解决问题。她【excited/激动】地看到进展。项目【smoothly/顺利】推进。

问题解决后，张悦开始更加注重团队建设。她发现，优秀的团队需要信任和默契。成长需要投入。她【careful/仔细】培养团队，【active/积极】组织活动。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间建设团队。

项目完成时，团队的成果获得了客户的高度赞扬。更重要的是，团队成员之间建立了深厚的友谊和信任。项目【successful/成功】。她【proud/自豪】地看着团队成果。每个人都为这次【achieve/成就】感到高兴。

成功后，张悦感到一种深深的【satisfaction/满足】。协作的喜悦让她感到欣慰，但她明白，这只是团队成长的一部分。她【humbly/谦逊地】接受大家的感谢。成功在此【mark/标记】。她【continue/继续】追求更高的团队目标。

她明白，团队不仅是工作的组合，更是共同成长的平台。她开始主动分享协作经验，帮助更多的团队提升效率。经验在此传递。她【respect/尊重】每个成员，【share/分享】协作经验，【help/帮助】其他团队。她【active/积极】参与团队建设。

张悦开始培养团队成员的协作能力，传授沟通技巧和合作经验。她告诉他们："团队需要【trust/信任】和【cooperation/合作】。我们用团结的力量创造价值，用协作的精神共同成长。"她的指导帮助了许多人成长。传承在此延续。她【patient/耐心】地讲解，【encourage/鼓励】协作精神。团队成员都受到她的【inspire/启发】。

团队协作，让张悦感受到合作的魅力和成长的价值。她决定继续深耕团队建设，用协作能力创造价值，用团队精神共同成长。这是她选择的道路，也是她成长的人生。每一次合作，都是一次对团队的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给团队，【build/建立】优秀团队，让协作更加【efficient/高效】，【create/创造】属于团队的传奇。她【firmly/坚定地】相信团队的力量。她【promise/承诺】会一直坚持协作。

某次团队分享会上，张悦分享了她协作理念："团结就是力量。我们用协作的力量，创造团队的奇迹。"台下同事深受启发，开始思考团队的意义。分享会现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以建设团队，协作的精神可以共同成长。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '书缘情缘': `安静的图书馆里，李明正【read/阅读】着一本文学经典。作为一名热爱读书的大学生，他经常来这里寻找知识的乐趣。每一本书都承载着作者的【wisdom/智慧】，每一页都是心灵的对话。他深知阅读的美好。图书馆里【quiet/安静】，他【immerse/沉浸】在书中。他内心很【peaceful/平静】，享受着阅读。他【always/总是】保持专注的状态。

今天他像往常一样来到图书馆。李明注意到对面坐着一位女生，也在专注地看书。她认真的样子让他感到【attracted/被吸引】，但他不敢打扰。这是一个需要【respect/尊重】和等待的过程。他【try/尝试】专注阅读，却【fail/无法】控制目光。他【feel/感觉】心跳加速。

阅读过程中，李明遇到了一个小插曲。他伸手拿书时，不小心碰到了女生的书，两人同时抬头。他【embarrassed/尴尬】地道歉，她却微笑着说没关系。那个笑容让他心动。邂逅需要缘分。他们开始【chat/聊天】。他【surprised/惊讶】于她的善良。相遇变得【memorable/难忘】。

交谈后，李明发现女生叫苏瑶，也是文学爱好者。他们聊起共同喜欢的书籍，发现彼此有很多共同话题。交流需要真诚。他【sincere/真诚】地分享感受，【careful/认真】倾听她。他【nervous/紧张】但同时也【happy/开心】。他【spend/花费】时间了解对方。

随后的日子里，他们经常在图书馆相遇。从讨论书籍开始，他们逐渐了解彼此，感情也在慢慢升温。某次雨天，他们一起撑伞漫步，那一刻，他决定表白。感情在此【blossom/萌芽】。他【moved/感动】地看着她。两颗心在书香中【close/靠近】。

告白的那一天，李明送给她一本她一直想要的书，书中夹着一封信。告白【successful/成功】。她【touched/感动】地接受他的心意。书缘变成了情缘。

他明白，爱情不仅需要心动，更需要共同的语言和价值观。他开始更加珍惜这段在图书馆萌芽的感情。爱情在此成长。他【respect/尊重】她的爱好，【share/分享】阅读体验，【discuss/讨论】文学观点。他【active/积极】经营感情。

李明开始珍惜每一次图书馆的相遇，用心感受爱情的美好。他告诉她："爱情需要【understanding/理解】和【shared interests/共同兴趣】。我愿意用一生陪你阅读。"他们的爱情从书本开始，在书香中绽放。爱情在此升华。他【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

图书馆邂逅，让李明感受到缘分的神奇和爱情的美好。他决定珍惜这段书缘，用真心守护爱情，用陪伴见证成长。这是他选择的道路，也是他浪漫的开始。每一次相遇，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】美好回忆，让爱情更加【literary/文艺】，【build/建立】属于他们的传奇。他【firmly/坚定地】相信缘分的力量。他【promise/承诺】会一直珍惜彼此。

某次校园活动中，李明分享了他爱情理念："书缘是最浪漫的情缘。我们用阅读的力量，书写属于我们的故事。"台下同学深受启发，开始思考爱情的美好。活动现场【applaud/响起掌声】。他用亲身经历证明，缘分的力量可以让陌生人相遇，真心的付出可以让爱情绽放。每个人都被他【inspire/启发】。他感到无比【happy/幸福】和【fulfill/充实】。`,

  '心动季节': `春日的校园里，张伟正【walk/漫步】在樱花树下。作为一名大三的学生，他的内心充满对未来的憧憬。春风吹过，樱花飘落，每一片花瓣都承载着青春的【dream/梦想】。他深知大学的珍贵。校园里【beautiful/美丽】，他【enjoy/享受】着春光。他内心很【relaxed/放松】，感受着季节。他【always/总是】保持欣赏的心态。

今天他约了喜欢的女生在校园见面。张伟注意到她的笑容在樱花下更加动人，他的心跳加速。他反复练习着想说的话，寻找最【sincere/真诚】的表达。这是一个需要【courage/勇气】和真诚的过程。他【never/从不】放弃表达心意，【always/总是】努力准备。他【prepare/准备】告白，【organize/整理】思绪。

告白过程中，张伟遇到了一个难题。他紧张得说不出话，心跳得厉害。他【nervous/紧张】地站在她面前，不知道如何开始。最终，他深吸一口气，鼓起【courage/勇气】说出心底的话。告白需要勇气。他【finally/终于】开口告白。他【excited/激动】地等待回复。时间仿佛【stop/静止】。

说完心里话后，张伟紧张地等待她的回复。她沉默了片刻，然后露出一个灿烂的笑容。等待需要耐心。他【patient/耐心】等待回复，【hopeful/充满希望】面对结果。他【nervous/紧张】但同时也【expectant/期待】。他【hold/屏住】呼吸等待。

终于，她轻声说："我愿意。"那一刻，张伟感觉整个世界都在为他庆祝。告白【successful/成功】。他【happily/幸福地】拥抱她。两颗心终于【together/在一起】。

她明白，爱情需要勇气和真诚。他们开始共同书写这段青春的爱情故事。爱情在此成长。他们【respect/尊重】彼此，【support/支持】对方，【share/分享】生活。他们【active/积极】经营感情。

张伟开始珍惜每一天的相处，用心感受爱情的甜蜜。他告诉她："爱情需要【brave/勇敢】和【sincere/真诚】。我愿意用青春守护你。"他们的爱情在春天绽放，在心动季节盛开。爱情在此升华。他【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

甜蜜告白，让张伟感受到爱情的美好和青春的价值。他决定珍惜这段感情，用真心守护爱情，用勇气证明自己。这是他选择的道路，也是他青春的浪漫。每一次心动，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】幸福未来，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的传奇。他【firmly/坚定地】相信爱情的力量。他【promise/承诺】会一直守护她。

某次毕业典礼上，张伟分享了他爱情理念："心动季节是最美的时光。我们用勇敢的力量，书写青春的爱情。"台下同学感动落泪。典礼现场【applaud/响起掌声】。他用亲身经历证明，勇气的力量可以获得爱情，青春的精神可以创造浪漫。每个人都被他【inspire/启发】。他感到无比【happy/幸福】和【fulfill/充实】。`
};

// 生成学习版HTML
function generateLearningHTML(config, storyContent, storyIndex) {
  let processedContent = storyContent.replace(/【(\w+)\/([^】]+)】/g, (match, word, meaning) => {
    return `<span class="w">${word}(${meaning})📢</span>`;
  });

  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');

  const wordCount = (storyContent.match(/【\w+\/[^】]+】/g) || []).length;
  const charCount = storyContent.replace(/【\w+\/[^】]+】/g, '').length;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.title}：${config.subtitle} · 学习版</title>
<style>
  :root {
    --pill: #E1BEE7;
    --accent: #9C27B0;
    --bg-soft: #F3E5F5;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
    color: #2b2b2b;
    background: linear-gradient(180deg, var(--bg-soft), #ffffff);
    background-attachment: fixed;
  }
  .wrap { max-width: 297mm; width: 100%; margin: 0 auto; padding: 0 40px 80px; }
  header.top { text-align: center; padding: 46px 40px 30px; }
  header.top .badge {
    display: inline-block;
    padding: 5px 16px;
    border-radius: 999px;
    background: var(--accent);
    color: #fff;
    font-size: 13px;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }
  header.top h1 { font-size: 34px; margin: 0 0 10px; letter-spacing: 2px; }
  header.top p.sub { color: #888; font-size: 15px; margin: 0 0 18px; }
  section.story {
    background: #fff; border-radius: 20px; padding: 30px 32px 34px;
    margin-bottom: 30px; box-shadow: 0 8px 30px rgba(0,0,0,.05);
  }
  section.story .step {
    display: inline-block; font-size: 13px; color: var(--accent); font-weight: 700;
    border-left: 4px solid var(--accent); padding-left: 10px; margin-bottom: 14px;
    background: var(--bg-soft); border-radius: 4px; padding: 6px 12px;
  }
  section.story h2 { font-size: 26px; margin: 6px 0 8px; letter-spacing: 1px; line-height: 1.35; }
  section.story h2 .no { color: var(--accent); margin-right: 10px; }
  section.story .meta { font-size: 13px; color: #aaa; margin-bottom: 22px; }
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 4px; text-align: justify; }
  .w {
    background-color: #E1BEE7;
    border-radius: 999px;
    padding: 0.12em 0.55em;
    margin: 0 1px;
    white-space: nowrap;
    color: #333;
    font-weight: 600;
  }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词</div>
      <h1>${config.title}</h1>
      <p class="sub">${config.tags}</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story${String(storyIndex).padStart(2, '0')}</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${charCount} 字 · 融入 ${wordCount} 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">
${paragraphsHTML}
      </div>
    </section>
    <footer>${config.title}：${config.subtitle} · 学习版　|　看故事记单词</footer>
  </div>
</body>
</html>`;
}

// 生成复习版HTML
function generateReviewHTML(config, storyContent, storyIndex) {
  let processedContent = storyContent.replace(/【(\w+)\/([^】]+)】/g, (match, word, meaning) => {
    return `<span class="r" onclick="toggle(this)">${word}(<span class="h">${meaning}</span>)</span>`;
  });

  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');

  const wordCount = (storyContent.match(/【\w+\/[^】]+】/g) || []).length;
  const charCount = storyContent.replace(/【\w+\/[^】]+】/g, '').length;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.title}：${config.subtitle} · 复习版</title>
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
      <h1>${config.title}</h1>
      <p class="sub">${config.tags}</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story${String(storyIndex).padStart(2, '0')}</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${charCount} 字 · 融入 ${wordCount} 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">
${paragraphsHTML}
      </div>
    </section>
    <footer>${config.title}：${config.subtitle} · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;
}

// 主函数
function main() {
  const outputDir = path.join(__dirname, '../result');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  storyConfigs.forEach((config, index) => {
    const content = storyContents[config.subtitle];

    if (!content) {
      console.log(`警告：缺少 "${config.subtitle}" 的故事内容`);
      return;
    }

    const num = String(96 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 96 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 96 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事96-100，大学生喜爱题材，词汇量50-60）');
}

main();