const fs = require('fs');
const path = require('path');

// 故事配置（故事21-25）
const storyConfigs = [
  { theme: '律政', title: '法庭风云', subtitle: '首次辩护', tags: '律政 · 正义 · 成长' },
  { theme: '律政', title: '法庭风云', subtitle: '关键证据', tags: '律政 · 正义 · 成长' },
  { theme: '刑侦', title: '罪恶追踪', subtitle: '连环案件', tags: '刑侦 · 悬疑 · 破案' },
  { theme: '主播', title: '直播间风云', subtitle: '意外走红', tags: '主播 · 网络 · 梦想' },
  { theme: '网文', title: '码字人生', subtitle: '创作之路', tags: '网文 · 创作 · 坚持' }
];

// 所有故事内容 - 每个故事约50个词汇
const storyContents = {
  '首次辩护': `律师事务所的会议室里，林静紧张地整理着辩护材料。这是她【graduation/毕业】后的第一个【formal/正式的】案件，也是职业生涯的重要【beginning/开始】。作为新入职的【lawyer/律师】，她深知自己肩负的【responsibility/责任】重大。案件的【client/客户】是一名被指控【theft/盗窃】的年轻人，林静【believe/相信】他是【innocent/无辜的】。

会议室的气氛有些【tension/紧张】，空气中弥漫着沉重的【pressure/压力】。合伙人张律师坐在主位，用【serious/严肃的】神情【examine/审视】着林静准备的每一份【material/材料】。"这个案件虽然看起来简单，但实则【complex/复杂】。"张律师【remind/提醒】道，"你必须仔细【analyze/分析】每一个【detail/细节】。"

林静【nod/点头】，她的眼神中透着【firm/坚定的】决心。她花了整整一周时间【collect/收集】【evidence/证据】，【interview/采访】【witness/证人】，【research/研究】相关【legal/法律的】条文。她【discover/发现】案件的关键在于时间线——被告在盗窃发生的【period/时间段】里，实际上在医院【accompany/陪伴】【ill/生病的】母亲。

医院的【record/记录】可以作为有力的证据，但林静需要找到更多的【prove/证明】材料。她决定亲自去医院【obtain/获取】完整的病历【archive/档案】。当她抵达医院时，档案室的负责人态度【cold/冷淡】，声称需要正式的【application/申请】才能【access/获取】这些文件。

林静没有放弃，她用专业的法律知识【explain/解释】了案件的【importance/重要性】。最终，负责人【agree/同意】提供必要的材料。这份【persistence/坚持】让林静获得了关键的证据。

回到律师事务所，林静将所有材料整理成一份完整的【report/报告】。张律师【review/审阅】后露出认可的表情，"你的工作做得不错，现在去【court/法院】呈现你的辩护吧。"

法庭上，林静第一次站在辩护席上。她的心跳【accelerate/加速】，但外表保持着【calm/冷静】。法官用严肃的目光【scrutinize/审视】着整个案件的材料。公诉人提出了指控的依据，林静则需要【demonstrate/展示】被告的无辜。

她首先【submit/提交】了医院的病历记录，证明了被告在案发时间段在医院的事实。接着，她【question/询问】了证人，揭示了他们证词中的矛盾之处。每一个环节，林静都用【logical/逻辑的】推理和扎实的证据【support/支持】自己的观点。

法官仔细聆听每一方的陈述，最终做出了判决：被告无罪释放。这个【result/结果】让林静感到深深的【relief/宽慰】和满足。被告感激地看着她，说："谢谢你帮我证明了【truth/真相】。"

走出法院大门，林静深吸一口新鲜空气。她知道，这只是职业生涯的开始，未来还有无数个案件等待她去【handle/处理】。但她相信，只要坚持正义、用心辩护，就能为每一个无辜的人【protect/保护】应有的权利。

回到事务所，合伙人张律师对她的表现给予了【positive/积极的】评价。"你展现出了优秀律师应有的【quality/素质】，继续努力，未来你将成为一名出色的律师。"这份鼓励让林静更加坚定了职业信念。

晚上，林静独自坐在家中回顾今天的经历。她想起大学时期的选择——选择法律专业，就是为了能够【promote/促进】社会的公平正义。今天的首次辩护成功，让她离这个目标更近了一步。她决定继续【improve/提升】自己的专业能力，【accumulate/积累】更多的经验，成为一名真正的法律捍卫者。`,

  '关键证据': `首次辩护成功后，林静接到了一个更具挑战性的案件。这是一起【complicated/复杂的】商业纠纷，涉及的金额高达数百万，双方都有强大的法律团队【support/支持】。林静需要【face/面对】的是一个【experienced/经验丰富的】对方律师。

案件的【background/背景】是一家【small/小型】科技公司与大企业之间的专利【dispute/争议】。小公司声称大企业非法使用了他们的核心技术，而大企业则坚决否认。林静被委托代表小公司进行【defend/辩护】，她必须【prove/证明】对方的侵权行为。

她开始深入【investigate/调查】案件的每一个细节。通过【review/审查】大量的技术文件和邮件记录，她发现了一些可疑的【trace/痕迹】。但这些证据还不够【sufficient/充分的】，她需要找到更直接的【proof/证据】。

某次深夜加班时，林静在一堆旧文件中发现了关键信息——一份内部邮件显示，大企业的研发团队曾经【discuss/讨论】过小公司的技术方案，并有明确的【refer/引用】记录。这份邮件被故意隐藏在大量的文件中，显然对方试图【cover/掩盖】这个事实。

林静【realize/意识到】，这份邮件可能是决定性的证据。她需要【verify/验证】邮件的真实性，并找到更多的【context/语境】材料来【strengthen/加强】证据的说服力。她【contact/联系】了技术专家，请他们协助进行专业的【analysis/分析】。

技术专家【confirm/确认】了邮件的真实性，并提供了详细的【technical/技术的】报告。这些材料证明大企业确实在小公司不知情的情况下【use/使用】了他们的核心技术。林静将这些证据整理成一份完整的【report/报告】，准备在法庭上【present/呈现】。

庭审当天，林静带着充分的准备走进法院。对方律师试图用各种理由【challenge/挑战】她的证据，声称邮件可能是【fake/伪造的】，技术报告缺乏【authority/权威性】。但林静用专业的【response/回应】和扎实的材料一一反驳了对方的质疑。

她【invite/邀请】技术专家作为证人出席，让他们详细【explain/解释】技术报告的内容。专家的证词让法官对证据的真实性有了充分的信心。同时，林静还展示了其他【relevant/相关的】材料，形成了一个完整的证据链。

法官在仔细【consider/考虑】所有证据后，做出了判决：大企业确实存在侵权行为，需要赔偿小公司的经济【loss/损失】。这个【outcome/结果】让林静感到深深的成就感，她帮助一个小公司捍卫了他们的【right/权利】。

案件结束后，小公司的创始人对林静表达了真诚的【gratitude/感激】。"如果没有你的努力，我们可能无法证明自己的权益。"这份认可让林静感受到了律师职业的真正【value/价值】。

回到事务所，林静将这次案件的经验【record/记录】下来，作为未来工作的参考。她明白，每一个案件都需要【careful/仔细的】调查和扎实的准备。关键证据的发现往往需要耐心的【search/搜寻】和专业的判断。

这个案件让林静的职业能力得到了进一步的【improve/提升】，也让她更加坚信：正义需要法律来【maintain/维护】，而律师的责任就是用专业的能力为每一个需要帮助的人提供【defense/辩护】。未来的路上，她将继续【pursue/追求】这个信念。`,

  '连环案件': `刑侦队的办公室里，陈明警官看着桌上堆积的案件报告，眉头紧皱。最近三个月，城市发生了五起【similar/相似的】盗窃案件，作案手法几乎一模一样。但每次警方接近嫌疑人时，他们就像【ghost/幽灵】一样消失。这种【pattern/模式】让陈明【realize/意识到】，背后可能有一个组织化的犯罪团伙。

队长召集全体队员开会，严肃地说："这些案件不是普通的盗窃，而是有计划的【crime/犯罪】行为。我们必须尽快【identify/确定】嫌疑人，阻止他们继续作案。"陈明被任命为这次行动的主要负责人，他必须【organize/组织】团队进行全面调查。

首先，陈明要求队员们【compare/比较】所有案件的关键细节。通过分析作案时间、地点、手法，他们发现了一个规律——嫌疑人总是在周末的夜晚行动，目标都是高档住宅区的珠宝店。这个【information/信息】让陈明制定了初步的侦查计划。

他决定在下一个周末进行【monitor/监控】行动。团队成员被安排在各个潜在目标地点附近，随时准备【observe/观察】可疑行为。同时，陈明联系了珠宝店的店主，让他们加强【security/安全】措施，配合警方的【operation/行动】。

周五夜晚，陈明带领团队在指定地点等候。午夜时分，一辆黑色轿车缓缓驶入目标区域。车上的两个人下车后，迅速【approach/接近】珠宝店的后门。他们的动作熟练而隐蔽，显然有丰富的作案【experience/经验】。

陈明通过无线设备【communicate/沟通】团队成员，要求他们保持警惕，等待嫌疑人进入店内后再进行【arrest/逮捕】。几分钟后，嫌疑人成功【break/突破】了店铺的安全系统，开始盗窃珠宝。

这时，陈明发出行动指令。团队成员迅速包围了店铺，切断了嫌疑人的逃跑路线。嫌疑人试图反抗，但面对警方的严密部署，他们最终选择投降。两名嫌疑人被【capture/捕获】，大量的珠宝被查获。

审讯室里，陈明开始对嫌疑人进行【interrogate/审讯】。他们最初否认一切，但在证据面前，最终承认了所有五起案件都是他们所为。更重要的，他们透露背后有一个更大的犯罪组织【control/控制】着他们的行动。

这个信息让陈明意识到，案件的调查远未结束。他需要深入追查这个犯罪组织的背景。通过进一步的审讯，嫌疑人提供了组织头目的名字和一些关键线索。

接下来的几周，陈明带领团队进行了一系列的【trace/追踪】行动。他们找到了组织的多个据点，收集了大量证据。最终，警方成功摧毁了这个犯罪组织，逮捕了主要头目。

案件结束后，陈明整理了完整的报告。这次行动不仅解决了五起盗窃案件，还摧毁了一个有组织的犯罪团伙。队长对陈明的工作给予了高度赞扬，称他展现了出色的侦查能力和领导力。

陈明站在警局门口，望着城市的夜景。他知道，罪恶永远不会完全消失，但只要警方坚持追查，正义终将战胜邪恶。这次的连环案件破获，让他更加坚定了职业信念。未来还有更多的挑战，但他会继续用专业的能力保护城市的安全。`,

  '意外走红': `大学宿舍里，张薇对着手机屏幕紧张地调整着镜头。她一直有一个【dream/梦想】——成为一名网络主播，用自己的声音和才艺赢得观众的喜爱。今晚是她第一次正式直播，心中既期待又紧张。

她选择了唱歌作为直播内容。音乐一直是她的热爱，大学期间她参加了很多歌唱比赛，获得了不少奖项。但网络直播是一个全新的平台，观众的口味和反应都与现场比赛不同。

直播开始，张薇用轻松的态度介绍自己，然后开始演唱第一首歌。她的声音清澈动人，歌曲的选择也符合当下的流行趋势。直播间的人数起初不多，但随着她的演唱，观众开始逐渐增加。

突然，一位观众在她的直播间发送了一条弹幕："这首歌太好听了！我要分享给所有朋友！"紧接着，这位观众真的将直播链接分享到了社交平台。张薇没想到，这条简单的分享会让她的直播产生病毒式传播效果。

短短几分钟内，直播间的人数从几十人猛增到数千人。弹幕如洪水般涌入，观众们纷纷表达对她的喜爱。"你的声音太棒了！"、"我第一次听到这么好听的演唱！"各种赞美让张薇感到既惊喜又震惊。

她努力保持镇定，继续演唱更多的歌曲。每一首歌都引来观众的热烈反应，直播间的人气持续上升。到直播结束时，她已经有了上万的粉丝，这个结果完全超出了她的预期。

第二天，张薇的直播视频被多个平台转发。各种社交媒体上都在讨论这位新晋主播。她的粉丝数量持续增长，很多人期待她的下一次直播。这种意外走红让张薇感受到网络的力量。

她开始认真思考未来的方向。直播不仅仅是一时的热情，而是需要长期规划的事业。她决定提升自己的专业能力，学习更多的直播技巧，优化内容的质量。

接下来的几个月，张薇每周都会定期直播。她不只是唱歌，还增加了与观众互动的内容，分享自己的生活经历。这种多样化的内容让她的粉丝更加忠诚，直播间的人气稳定增长。

某次直播中，一位音乐制作人观看她的表演后，主动联系了她。"你的声音很有潜力，我愿意为你提供专业的支持。"这个机会让张薇感到兴奋，她知道这是事业发展的重要转折。

在制作人的帮助下，张薇开始录制专业的音乐作品。她的第一首单曲发布后，迅速获得了广泛的认可。各种音乐平台开始播放她的作品，她的名气进一步提升。

意外走红的故事，让张薇明白了一个道理：机会往往在不经意间出现，但只有准备好的人才能抓住它。她决定继续努力，用真诚的态度对待每一位观众，用优质的内容赢得更多的喜爱。直播主播的道路还很长，但她已经找到了前进的方向。`,

  '创作之路': `出租屋里，李明坐在电脑前，面对着空白的文档页面。他是一名网络小说作者，已经坚持写作了三年。这三年来，他发布了五部作品，但每部的读者都不多，收入微薄。很多人劝他放弃，认为写作这条路太难走。

但李明从未动摇。他相信，只要坚持，终会有成功的一天。今晚，他准备开始第六部作品的创作。这一次，他决定尝试一个新的题材——悬疑推理，这是他一直感兴趣的领域。

他先进行了详细的规划，构建故事的框架和人物设定。每一个情节都需要精心的设计，每一个线索都需要合理的布局。悬疑小说的写作比他之前尝试的其他题材更加复杂，但他愿意迎接这个挑战。

第一周的写作进展顺利。李明每天投入十几个小时，完成了前三章的内容。他将这些章节上传到小说平台，等待读者的反馈。第一天，阅读量寥寥无几，几乎没有人注意到这部新作品。

李明没有沮丧，他知道新作品需要时间来积累读者。他继续每天更新，保持稳定的节奏。一周后，第一位读者在评论区留言："这个故事很有意思，期待后续的发展！"这条简单的评论让李明感到深深的鼓励。

他继续创作，情节逐渐展开，故事变得更加引人入胜。读者开始增加，评论区变得活跃。各种讨论和推测让李明感受到读者的热情。有人分析线索，有人猜测结局，每个人都在投入阅读。

一个月后，作品进入平台的推荐榜单。这是李明第一次看到自己的作品获得平台的推广，读者数量大幅增长。粉丝开始形成，很多人每天准时等待更新。这种变化让李明感到无比的欣慰。

然而，创作之路并非没有困难。某次更新后，一些读者对情节发展提出了批评。他们认为某个转折不够合理，影响故事的逻辑性。李明认真考虑这些反馈，决定调整后续的情节设计。

他花费额外的时间重新修改相关章节，确保故事的合理性。这种对作品的严格要求，赢得了读者的尊重。评论区开始出现更多赞赏的声音："作者真的很用心，愿意听取读者的建议。"

三个月后，作品完成。李明将结局章节上传后，评论区沸腾了。读者们纷纷表达对故事的喜爱："这是我看过最好的悬疑小说！"、"期待作者的新作品！"各种鼓励让李明感到三年的坚持终于有了回报。

作品的成功带来了实际的收益。平台的签约团队主动联系李明，提出正式的合作协议。这份合同让他的收入有了保障，写作事业进入稳定的阶段。

李明站在窗前，望着城市的夜景。三年的坚持，无数次的努力，终于换来了今天的成果。他明白，创作之路永远不会平坦，但只要保持初心、持续提升，就能实现梦想。未来的路上，他将继续用文字创造更多的故事，为读者带来更多的精彩。`
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

    const num = String(21 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 21 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 21 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事21-25）');
}

main();