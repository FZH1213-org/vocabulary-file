const fs = require('fs');
const path = require('path');

// 故事配置（故事86-90）- 大学生喜爱的题材
const storyConfigs = [
  { theme: '大女主', title: '女王归来', subtitle: '逆袭之路', tags: '逆袭 · 成长 · 励志' },
  { theme: '霸总', title: '总裁的秘密', subtitle: '豪门契约', tags: '霸总 · 豪门 · 爱情' },
  { theme: '职场', title: '职场进阶', subtitle: '升职记', tags: '职场 · 成长 · 奋斗' },
  { theme: '校园', title: '青春恋曲', subtitle: '校园时光', tags: '校园 · 青春 · 恋爱' },
  { theme: '恋爱', title: '心动瞬间', subtitle: '浪漫邂逅', tags: '恋爱 · 浪漫 · 甜蜜' }
];

// 所有故事内容 - 词汇量控制在50-60个
const storyContents = {
  '逆袭之路': `豪华的办公室里，林婉正【organize/整理】着公司的核心文件。作为曾经被家族抛弃的女儿，她靠自己的【ability/能力】一步步走到今天。曾经那些看不起她的人，现在都不得不承认她的【talent/才华】。她深知这一切来之不易。办公室里【quiet/安静】，她【focus/专注】于工作。她每天都很【busy/忙碌】，但内心【firm/坚定】。

今天的任务是完成一个重要项目的谈判。林婉注意到对方的态度还不够【sincere/真诚】，需要更多的沟通技巧。她反复准备谈判策略，寻找最佳的解决方案。这是一个需要【patience/耐心】和智慧的过程。她【never/从不】放弃自己的目标，【always/总是】努力争取。她【prepare/准备】充分，【analyze/分析】对方需求。

谈判过程中，林婉遇到了一个难题。对方提出的条件太过苛刻，无法接受。她【worried/担忧】地思考对策，尝试了多种谈判方案。最终，她通过【smart/聪明】的策略调整，成功说服对方接受了合理的条款。突破需要智慧。她【finally/终于】达成协议。她【excited/激动】地签下合同。谈判【perfectly/完美】结束。

项目完成后，林婉开始规划下一步的发展。她【establish/建立】新的团队，拓展业务领域。发展需要投入。她【careful/仔细】地规划未来，【precise/精确】把握机会。她【nervous/紧张】但同时也【confident/自信】。她【invest/投入】大量精力发展事业。

成功发布会上，林婉站在舞台中央，接受所有人的掌声。曾经嘲笑她的人，现在只能仰望她的【success/成功】。媒体纷纷报道她的逆袭故事，称她为"女王"。发布会【successful/成功】。她【proud/自豪】地看着台下的掌声。每个人都为她的【achieve/成就】感到敬佩。

成功后，林婉感到一种深深的【satisfaction/满足】。逆袭的喜悦让她感到欣慰，但她明白，这只是人生的新起点。她【humbly/谦逊地】接受大家的赞誉。成功在此【mark/标记】。她【continue/继续】追求更高的目标。

她明白，成功不仅是终点，更是新的起点。她开始思考如何帮助更多和她一样的人，如何【create/创造】更大的【value/价值】。责任在此诞生。她【respect/尊重】每一个奋斗者，【support/支持】有梦想的人，【share/分享】成功经验。她【active/积极】参与公益事业。

林婉开始帮助那些正在奋斗的年轻人，传授成功经验和人生智慧。她告诉他们："逆袭需要【courage/勇气】和【persistence/坚持】。我们用努力改变命运，用实力证明自己。"她的故事帮助了许多人成长。希望在此传递。她【patient/耐心】地倾听，【encourage/鼓励】奋斗精神。年轻人都受到她的【inspire/启发】。

女王归来，让林婉感受到奋斗的魅力和成功的价值。她决定继续深耕事业，用能力创造价值，用成功证明自己。这是她选择的道路，也是她逆袭的人生。每一次突破，都是一次对自己的证明。这是她的使命。她【determine/决心】一生【devote/奉献】给事业，【achieve/实现】更多梦想，让人生更加【wonderful/精彩】，【build/建立】属于自己的传奇。她【firmly/坚定地】相信努力的力量。她【promise/承诺】会一直坚持奋斗。

某次女性创业论坛上，林婉分享了她逆袭理念："命运掌握在自己手中。我们用努力的力量，书写属于自己的传奇。"台下女性深受启发，开始思考自己的人生。论坛现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以改变命运，逆袭的精神可以创造奇迹。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '豪门契约': `顶层的豪华办公室里，霸道总裁顾琛正【review/审视】着手中的合同。作为商业帝国的继承人，他习惯了掌控一切。然而眼前这个女人，却让他第一次有了不同的【feeling/感觉】。他深知这场契约婚姻背后的【complexity/复杂】。办公室里【tense/紧张】，他【stare/注视】着文件。他表面【calm/冷静】，内心却有些【disturbed/波动】。

今天他要与苏瑶签署一份特殊的契约。顾瑶注意到对方的表情虽然平静，但眼神中透着坚强。这场契约对双方都有【benefit/好处】，但他莫名有些心软。这是一个【special/特殊】的安排。他【try/尝试】保持理智，但【fail/无法】控制内心。他【wonder/疑惑】自己的变化。

签署过程中，顾琛遇到了一个难题。他发现自己竟然在意她的感受，这与他的性格完全不同。他【confused/困惑】地分析自己的情绪，试图找到原因。最终，他决定【change/改变】合同条款，给她更多的保障。改变需要勇气。他【finally/终于】做出决定。他【surprised/惊讶】于自己的行为。契约变得【different/不同】。

契约签订后，两人开始了特殊的相处模式。顾琛发现，苏瑶并不像其他女人那样对他百般讨好。她的独立和自信，让他越来越【attracted/被吸引】。相处需要时间。他【slowly/慢慢】了解她，【gradually/逐渐】改变看法。他【nervous/紧张】但同时也【curious/好奇】。他【spend/花费】时间了解真实的她。

某次意外中，顾琛发现苏瑶竟然在默默帮助他的公司解决难题。那一刻，他的心彻底被她融化。原来契约背后，藏着的是她的善良和智慧。他开始【regret/后悔】自己的傲慢。他【realize/意识到】她的价值。感情在此【blossom/萌芽】。

随后的相处中，顾琛彻底爱上了这个女人。他决定撕毁契约，给她真正的名分和爱情。告白那天，他第一次露出了温柔的笑容。告白【successful/成功】。他【sincere/真诚】地表达心意。苏瑶被他的【change/改变】感动。爱情终于【arrive/降临】。

他明白，爱情不是契约，而是真心的付出。他开始学着如何真正关心一个人，如何【protect/保护】她的心。爱情在此成长。他【respect/尊重】她的独立，【support/支持】她的事业，【give/给予】她自由。他【active/积极】经营感情。

顾琛开始改变自己的处事方式，学着用真心对待身边的人。他告诉苏瑶："爱情需要【sincerity/真诚】和【trust/信任】。我愿意用一生守护你。"他的改变让所有人惊讶。爱情在此升华。他【patient/耐心】地经营感情，【encourage/鼓励】彼此成长。他们的爱情成为【legend/传奇】。

豪门契约，让顾琛感受到爱情的美好和改变的力量。他决定用真心守护这段感情，用行动证明自己的爱。这是他选择的道路，也是他真爱的开始。每一次付出，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】幸福生活，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的传奇。他【firmly/坚定地】相信爱情的力量。他【promise/承诺】会一直守护她。

某次婚礼上，顾琛分享了他爱情理念："真爱让人改变。我愿意用一生守护她。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。他用亲身经历证明，爱情的力量可以改变一个人，真心的付出可以收获幸福。每个人都被他【inspire/启发】。他感到无比【happy/幸福】和【fulfill/充实】。`,

  '升职记': `繁忙的办公室里，新员工张悦正【prepare/准备】着重要会议的资料。作为一名刚入职的新人，她每天都在努力学习成长。每一项工作都需要【careful/仔细】的对待，每一次机会都承载着未来的【hope/希望】。她深知职场竞争的激烈。办公室里【busy/忙碌】，她【focus/专注】于工作细节。她每天都很【diligent/勤奋】，从不抱怨辛苦。她【always/总是】保持积极的心态。

今天的任务是完成部门的重要报告。张悦注意到报告中还有一些数据需要【verify/核实】，她反复检查每一个细节。这是一个需要【patience/耐心】和认真态度的过程。她【never/从不】放弃对完美的追求，【always/总是】努力做到最好。她【ask/请教】前辈经验，【learn/学习】专业知识。

工作过程中，张悦遇到了一个难题。某个项目的分析数据出现矛盾，她无法找到问题所在。她【worried/担忧】地思考解决方案，尝试了多种分析方法。最终，她通过【meticulous/细致】的核对，成功找到了数据错误并修正。突破需要细心。她【finally/终于】解决问题。她【excited/激动】地完成任务。报告【perfectly/完美】呈现。

工作完成后，张悦开始主动承担更多的责任。她发现，只有主动出击，才能获得更多的机会和成长。成长需要行动。她【positive/积极】地接受挑战，【brave/勇敢】地面对困难。她【nervous/紧张】但同时也【confident/自信】。她【spend/投入】大量时间提升能力。

年终考核时，张悦的努力得到了领导的认可。她的工作能力和学习态度，让她成功获得了晋升的机会。升职【successful/成功】。她【proud/自豪】地看着晋升通知。同事们都为她的【achieve/成就】感到高兴。

升职后，张悦感到一种深深的【satisfaction/满足】。成长的喜悦让她感到欣慰，但她明白，这只是职场的新起点。她【humbly/谦逊地】接受大家的祝贺。成功在此【mark/标记】。她【continue/继续】追求更高的职业目标。

她明白，职场不仅是工作的地方，更是成长的平台。她开始主动分享自己的经验，帮助更多的新人快速成长。经验在此传递。她【respect/尊重】前辈指导，【share/分享】学习心得，【help/帮助】同事进步。她【active/积极】参与团队建设。

张悦开始培养新入职的同事，传授工作技巧和职场经验。她告诉他们："职场需要【diligence/勤奋】和【learning/学习】。我们用努力赢得机会，用能力证明自己。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【encourage/鼓励】进步精神。年轻同事都受到她的【inspire/启发】。

职场进阶，让张悦感受到成长的魅力和奋斗的价值。她决定继续深耕职业发展，用能力赢得认可，用努力证明价值。这是她选择的道路，也是她奋斗的人生。每一次晋升，都是一次对自己的肯定。这是她的使命。她【determine/决心】一生【devote/奉献】给事业，【achieve/实现】职业目标，让人生更加【meaningful/有意义】，【build/建立】属于自己的职场传奇。她【firmly/坚定地】相信努力的力量。她【promise/承诺】会一直坚持奋斗。

某次职场分享会上，张悦分享了她成长理念："努力是职场最好的通行证。我们用汗水浇灌梦想，用实力赢得尊重。"台下新人深受启发，开始思考自己的职业规划。分享会现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以获得晋升，努力的精神可以赢得认可。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '校园时光': `美丽的大学校园里，大一新生李明正【walk/漫步】在林荫道上。作为一名刚入学的新生，他对大学生活充满【expectation/期待】。每一天都是新的开始，每一个瞬间都承载着青春的【dream/梦想】。他深知大学时光的珍贵。校园里【vibrant/生机勃勃】，他【observe/观察】着周围的一切。他内心充满【curious/好奇】，对未来满怀憧憬。他【always/总是】保持积极的心态。

今天的任务是参加学生会的招新面试。李明注意到竞争非常激烈，需要展现出自己的【advantage/优势】。他反复准备面试内容，思考如何表达自己。这是一个需要【confidence/自信】和准备的过程。他【never/从不】放弃尝试的机会，【always/总是】努力表现自己。他【prepare/准备】充分，【practice/练习】表达技巧。

面试过程中，李明遇到了一个难题。评委提出的问题超出了他的准备范围，他一时不知如何回答。他【nervous/紧张】地思考应对方案，试图保持冷静。最终，他通过【honest/诚实】的回答和【sincere/真诚】的态度，获得了评委的认可。突破需要真诚。他【finally/终于】通过面试。他【excited/激动】地加入学生会。面试【perfectly/结束】。

加入学生会后，李明开始积极参与各项活动组织。他发现，大学不仅是学习的地方，更是锻炼能力的平台。成长需要参与。他【active/积极】组织活动，【enthusiastic/热情】服务同学。他【nervous/紧张】但同时也【excited/兴奋】。他【spend/花费】大量时间提升能力。

校园文化节上，李明第一次策划的活动获得了巨大成功。同学们的掌声和赞扬，让他感受到组织的成就感。活动【successful/成功】。他【proud/自豪】地看着活动效果。每个人都为他的【achieve/成就】感到高兴。

成功后，李明感到一种深深的【satisfaction/满足】。成长的喜悦让他感到欣慰，但他明白，这只是大学生活的一部分。他【humbly/谦逊地】接受同学们的赞扬。成功在此【mark/标记】。他【continue/继续】追求更多精彩。

他明白，大学不仅是学习的地方，更是青春绽放的舞台。他开始尝试更多的新事物，让自己的大学生活更加丰富多彩。青春在此绽放。他【explore/探索】新领域，【challenge/挑战】自己，【enjoy/享受】过程。他【active/积极】参与校园活动。

李明开始帮助新入学的同学，分享大学经验和学习心得。他告诉他们："大学是青春的舞台。我们用热情拥抱生活，用努力书写精彩。"他的帮助让许多新生受益。经验在此传递。他【patient/耐心】地介绍，【encourage/鼓励】探索精神。新同学都受到他的【inspire/启发】。

青春恋曲，让李明感受到成长的魅力和青春的价值。他决定珍惜大学时光，用热情拥抱生活，用努力书写精彩。这是他选择的道路，也是他青春的旅程。每一次经历，都是一次对青春的诠释。这是他的使命。他【determine/决心】珍惜大学时光，【create/创造】更多回忆，让青春更加【colorful/多彩】，【build/建立】属于自己的青春传奇。他【firmly/坚定地】相信青春的力量。他【promise/承诺】会一直珍惜当下。

某次新生见面会上，李明分享了他校园理念："大学是青春最美好的时光。我们要用热情书写精彩，用努力创造回忆。"台下新生深受启发，开始规划自己的大学生活。见面会现场【applaud/响起掌声】。他用亲身经历证明，热情的力量可以充实生活，青春的精神可以创造精彩。每个人都被他【inspire/启发】。他感到无比【happy/快乐】和【fulfill/充实】。`,

  '浪漫邂逅': `温馨的咖啡店里，王瑶正【read/阅读】着一本小说。作为一名文艺女青年，她喜欢在咖啡馆享受宁静的时光。每一页文字都带来心灵的触动，每一杯咖啡都承载着生活的【flavor/味道】。她享受这样的时光。咖啡店里【cozy/温馨】，她【immersed/沉浸】在故事中。她内心平静而【relaxed/放松】，享受着属于自己的时光。

今天，她像往常一样来到咖啡店。王瑶注意到角落的位置坐着一位陌生的男生，气质【elegant/优雅】而神秘。她偶尔抬头，发现对方也在看向她。这是一个【special/特别】的时刻。她【try/尝试】继续阅读，却【fail/无法】集中注意力。她【feel/感觉】心跳加速。

阅读过程中，王瑶遇到了一个小插曲。她不小心碰倒了咖啡，弄脏了桌子和书本。她【embarrassed/尴尬】地收拾残局，不知所措。这时，那位男生走过来，帮她一起清理。他的举动让她的心【moved/感动】。邂逅需要缘分。他【gently/温柔】地递上纸巾。她【surprised/惊讶】于他的善良。相遇变得【memorable/难忘】。

帮助后，两人开始了第一次交谈。王瑶发现，他是一位作家，喜欢在咖啡店寻找灵感。他们的共同爱好让对话变得【natural/自然】而愉快。交流需要真诚。她【sincere/真诚】地分享感受，【careful/认真】倾听对方。她【nervous/紧张】但同时也【happy/开心】。她【spend/花费】时间了解对方。

随后的日子里，两人经常在咖啡店偶遇。每一次相遇，都让彼此的心更加靠近。某次雨天，他为她撑伞送她回家，那一刻，她知道自己的心已经属于他。感情【blossom/萌芽】。她【proud/自豪】地接受他的关心。两人都为这份【feeling/感觉】而心动。

告白的那一天，他送给她一本书，书页里夹着一封信。信中写下他对她的所有心动瞬间。告白【successful/成功】。她【touched/感动】地接受他的心意。爱情终于【arrive/降临】。

她明白，爱情不仅是心动，更是陪伴和珍惜。她开始学着如何经营一段感情，如何珍惜眼前的幸福。爱情在此成长。她【respect/尊重】他的创作，【support/支持】他的梦想，【share/分享】生活点滴。她【active/积极】经营感情。

王瑶开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："爱情需要【treasure/珍惜】和【sincerity/真诚】。我愿意用一生陪伴你。"他们的爱情简单而美好。爱情在此升华。她【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

心动瞬间，让王瑶感受到爱情的美好和缘分的神奇。她决定用真心经营这段感情，用珍惜守护眼前的幸福。这是她选择的道路，也是她浪漫的开始。每一次相遇，都是一次对爱情的诠释。这是她的承诺。她【determine/决心】一生【devote/奉献】给爱情，【create/创造】美好回忆，让生活更加【sweet/甜蜜】，【build/建立】属于他们的爱情传奇。她【firmly/坚定地】相信爱情的力量。她【promise/承诺】会一直珍惜彼此。

某次婚礼上，王瑶分享了她爱情理念："缘分让相遇成为可能，真心让爱情成为永恒。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。她用亲身经历证明，缘分的力量可以让陌生人相遇，真心的付出可以让爱情永恒。每个人都被她【inspire/启发】。她感到无比【happy/幸福】和【fulfill/充实】。`
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

    const num = String(86 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 86 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 86 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事86-90，大学生喜爱题材，词汇量50-60）');
}

main();