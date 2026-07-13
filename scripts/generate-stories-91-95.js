const fs = require('fs');
const path = require('path');

// 故事配置（故事91-95）- 大学生喜爱的题材
const storyConfigs = [
  { theme: '大女主', title: '千金归来', subtitle: '复仇计划', tags: '复仇 · 智慧 · 正义' },
  { theme: '霸总', title: '契约娇妻', subtitle: '心动时刻', tags: '契约 · 爱情 · 融化' },
  { theme: '职场', title: '新人挑战', subtitle: '第一份工作', tags: '职场 · 挑战 · 成长' },
  { theme: '校园', title: '宿舍闺蜜', subtitle: '青春友谊', tags: '宿舍 · 友谊 · 青春' },
  { theme: '恋爱', title: '异地相思', subtitle: '距离之美', tags: '异地 · 爱情 · 坚守' }
];

// 所有故事内容 - 词汇量控制在50-60个
const storyContents = {
  '复仇计划': `豪华的别墅里，苏瑶正【recall/回忆】着多年前的那场阴谋。作为曾经被陷害的千金，她改名换姓回到这座城市。曾经的仇恨让她变得【strong/坚强】，她深知只有实力才能【prove/证明】一切。别墅里【luxurious/奢华】，她【prepare/准备】着复仇计划。她表面【calm/平静】，内心却【determined/坚定】。她【always/总是】保持清醒的头脑。

今天的任务是接近当年陷害她的家族企业。苏瑶注意到必须【careful/小心】行事，不能暴露真实身份。她反复推敲每一个步骤，寻找最佳的【opportunity/机会】。这是一个需要【wisdom/智慧】和耐心的过程。她【never/从不】忘记仇恨，【always/总是】等待时机。她【disguise/伪装】自己，【approach/接近】目标。

接近过程中，苏瑶遇到了一个难题。当年陷害她的人已经成为了商业巨头，势力庞大。她【worried/担忧】地思考对策，尝试了多种方法。最终，她通过【smart/聪明】的商业手段，成功打入对方内部。突破需要智慧。她【finally/终于】获得信任。她【excited/激动】地开始计划。复仇【smoothly/顺利】进行。

获得信任后，苏瑶开始收集当年阴谋的证据。她发现真相远比想象中更加【cruel/残酷】。调查需要耐心。她【secret/暗中】收集证据，【careful/小心】保护自己。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间调查真相。

证据收集完成后，苏瑶选择了一个重要的商业晚宴公开真相。当所有证据摆在众人面前，当年陷害她的人终于得到了应有的惩罚。复仇【successful/成功】。她【proud/自豪】地看着正义伸张。所有人都为她的【courage/勇气】感到敬佩。

复仇后，苏瑶感到一种深深的【relief/释然】。正义的喜悦让她感到欣慰，但她明白，这只是人生的新开始。她【calmly/平静地】接受真相大白。成功在此【mark/标记】。她【continue/继续】追求新的生活。

她明白，复仇不是终点，而是放下过去重新开始。她开始思考如何用余生创造更多【value/价值】，如何帮助更多被冤枉的人。责任在此诞生。她【respect/尊重】法律正义，【help/帮助】弱势群体，【share/分享】人生经验。她【active/积极】参与公益。

苏瑶开始帮助那些遭遇不公的人，传授应对经验和法律知识。她告诉他们："正义需要【brave/勇敢】和【wisdom/智慧】。我们用法律维护权益，用真相伸张正义。"她的故事帮助了许多人。希望在此传递。她【patient/耐心】地倾听，【encourage/鼓励】追求正义。受害者都受到她的【inspire/启发】。

千金归来，让苏瑶感受到正义的魅力和人生的价值。她决定继续追求正义，用能力帮助他人，用智慧改变命运。这是她选择的道路，也是她重生的人生。每一次坚持，都是一次对正义的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给正义事业，【help/帮助】更多受害者，让社会更加【fair/公平】，【build/建立】属于自己的传奇。她【firmly/坚定地】相信正义的力量。她【promise/承诺】会一直坚守信念。

某次公益论坛上，苏瑶分享了她人生理念："正义终将战胜邪恶。我们用勇敢的力量，守护社会的公平。"台下观众深受启发，开始思考正义的意义。论坛现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以伸张正义，勇敢的精神可以改变命运。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '心动时刻': `高档的公寓里，叶婉正【organize/整理】着自己的行李。作为顾总的新婚"妻子"，她住进了这个陌生的家。契约的婚姻让她感到【awkward/尴尬】，但她需要这笔钱。公寓里【spacious/宽敞】，她【observe/观察】着环境。她内心有些【nervous/紧张】，对未来充满未知。她【always/总是】保持礼貌的距离。

今天是她搬进来的第一天。叶婉注意到顾总的态度冷淡，似乎只是为了完成任务。她反复提醒自己，这只是【business/交易】，不能有其他想法。这是一个需要【patience/耐心】和理智的过程。她【try/尝试】适应环境，【maintain/保持】距离。她【remind/提醒】自己，【control/控制】情绪。

相处过程中，叶婉遇到了一个难题。顾总虽然表面冷淡，但偶尔会流露出温柔的一面，让她感到困惑。她【confused/困惑】地分析他的态度，试图找到答案。最终，她发现他的冷淡只是保护色，内心其实很【gentle/温柔】。发现让她心动。她【slowly/慢慢】了解他，【gradually/逐渐】放下戒备。她【surprised/惊讶】于他的改变。相处变得【natural/自然】。

相处一段时间后，叶婉发现顾总经常默默关心她。比如下雨天为她撑伞，生病时送来药品。她开始注意到他的好。观察需要时间。她【careful/仔细】观察细节，【moved/感动】于他的关怀。她【nervous/紧张】但同时也【happy/开心】。她【spend/花费】时间了解真实的他。

某次意外中，叶婉遇到危险，顾总不顾一切地保护了她。那一刻，她的心彻底融化。原来他一直在默默守护她。感情在此【blossom/萌芽】。她【touched/感动】地看着他。两颗心终于【close/靠近】。

告白的那一天，顾总第一次主动打破契约，说他想给她真正的婚姻。告白【successful/成功】。她【happily/幸福地】接受他的心意。契约变成了【real/真实】的爱情。

她明白，爱情不是契约，而是真心的付出。她开始学着经营这段感情，珍惜眼前的幸福。爱情在此成长。她【respect/尊重】他的付出，【support/支持】他的事业，【share/分享】生活点滴。她【active/积极】经营感情。

叶婉开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："爱情需要【sincerity/真诚】和【trust/信任】。我愿意用一生守护你。"他们的爱情从契约开始，却以真心结束。爱情在此升华。她【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

契约娇妻，让叶婉感受到爱情的美好和改变的力量。她决定用真心经营这段感情，用珍惜守护眼前的幸福。这是她选择的道路，也是她爱情的开始。每一次心动，都是一次对爱情的诠释。这是她的承诺。她【determine/决心】一生【devote/奉献】给他，【create/创造】幸福生活，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的传奇。她【firmly/坚定地】相信爱情的力量。她【promise/承诺】会一直珍惜彼此。

某次婚礼上，叶婉分享了她爱情理念："契约可以变成真情，冷漠可以被真心融化。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。她用亲身经历证明，真心的力量可以改变命运，爱情的精神可以融化冰雪。每个人都被她【inspire/启发】。她感到无比【happy/幸福】和【fulfill/充实】。`,

  '第一份工作': `繁忙的写字楼里，新员工陈悦正【study/学习】着公司的业务流程。作为刚毕业的大学生，这是她的第一份工作。每一项任务都需要【careful/仔细】对待，每一次学习都承载着成长的【hope/希望】。她深知新人需要努力。办公室里【busy/忙碌】，她【focus/专注】于学习。她内心有些【nervous/紧张】，但充满干劲。她【always/总是】保持积极的心态。

今天的任务是完成部门的数据整理工作。陈悦注意到数据量很大，需要【efficient/高效】的方法。她反复学习Excel技巧，寻找最快的处理方式。这是一个需要【patience/耐心】和细心的过程。她【never/从不】放弃学习的机会，【always/总是】努力进步。她【learn/学习】新技能，【apply/应用】到工作中。

工作过程中，陈悦遇到了一个难题。某个数据分析方法她之前没有学过，无法完成任务。她【worried/担忧】地思考解决方案，尝试了多种方法。最终，她通过【online/在线】教程学习，成功掌握了分析方法。突破需要学习。她【finally/终于】解决问题。她【excited/激动】地完成任务。数据【perfectly/完美】呈现。

工作完成后，陈悦开始主动承担更多的任务。她发现，只有主动学习，才能快速成长。成长需要行动。她【positive/积极】接受任务，【brave/勇敢】面对挑战。她【nervous/紧张】但同时也【confident/自信】。她【spend/投入】大量时间提升能力。

季度考核时，陈悦的努力得到了领导的认可。她的学习态度和工作能力，获得了优秀员工的称号。认可【successful/成功】。她【proud/自豪】地看着奖励证书。同事们都为她的【achieve/成就】感到高兴。

认可后，陈悦感到一种深深的【satisfaction/满足】。成长的喜悦让她感到欣慰，但她明白，这只是职业的开始。她【humbly/谦逊地】接受大家的祝贺。成功在此【mark/标记】。她【continue/继续】追求更高的职业目标。

她明白，职场不仅是工作的地方，更是学习和成长的平台。她开始主动分享自己的学习经验，帮助更多新人快速成长。经验在此传递。她【respect/尊重】前辈指导，【share/分享】学习心得，【help/帮助】同事进步。她【active/积极】参与团队建设。

陈悦开始培养新入职的同事，传授工作技巧和学习方法。她告诉他们："第一份工作需要【diligence/勤奋】和【learning/学习】。我们用努力证明自己，用能力赢得认可。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【encourage/鼓励】进步精神。年轻同事都受到她的【inspire/启发】。

新人挑战，让陈悦感受到成长的魅力和奋斗的价值。她决定继续深耕职业发展，用能力赢得认可，用努力证明价值。这是她选择的道路，也是她成长的人生。每一次进步，都是一次对自己的肯定。这是她的使命。她【determine/决心】一生【devote/奉献】给事业，【achieve/实现】职业目标，让人生更加【meaningful/有意义】，【build/建立】属于自己的职场传奇。她【firmly/坚定地】相信努力的力量。她【promise/承诺】会一直坚持奋斗。

某次新人分享会上，陈悦分享了她成长理念："第一份工作是最好的学习机会。我们用努力浇灌梦想，用实力赢得未来。"台下新人深受启发，开始思考自己的职业规划。分享会现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以获得认可，努力的精神可以赢得尊重。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '青春友谊': `热闹的女生宿舍里，四位女孩正【chat/聊天】着各自的心事。作为室友，她们已经一起度过了半年的大学时光。每一间宿舍都承载着青春的【memory/记忆】，每一次交谈都是友谊的见证。她们深知室友是大学最珍贵的缘分。宿舍里【warm/温馨】，她们【share/分享】着生活。她们内心很【happy/快乐】，享受着宿舍生活。她们【always/总是】互相关心。

今天是小丽的生日，其他三位室友正【prepare/准备】着惊喜。她们注意到小丽最近压力很大，需要一个【special/特别】的生日。她们反复商量策划方案，寻找最佳的庆祝方式。这是一个需要【teamwork/团队合作】和用心的过程。她们【never/从不】忘记友情，【always/总是】互相支持。她们【plan/策划】细节，【prepare/准备】礼物。

准备过程中，她们遇到了一个难题。预算有限，无法购买昂贵的礼物。她们【worried/担忧】地思考解决方案，尝试了多种方法。最终，她们决定亲手制作礼物，更加【meaningful/有意义】。突破需要用心。她们【finally/终于】完成礼物。她们【excited/激动】地等待夜晚。惊喜【perfectly/准备】好。

当晚，小丽推开宿舍门的那一刻，蜡烛的光芒照亮了整个房间。室友们的歌声和祝福，让她感动落泪。惊喜【successful/成功】。她【touched/感动】地看着大家。每个人都为这份【friendship/友谊】感到温暖。

庆祝后，小丽感到一种深深的【happiness/幸福】。友谊的温暖让她感到欣慰，她明白，这就是大学最珍贵的收获。她【sincerely/真诚地】感谢室友。友谊在此【deepen/加深】。她们【continue/继续】珍惜彼此。

她们明白，宿舍不仅是睡觉的地方，更是青春友谊的港湾。她们开始约定，无论未来如何，都要保持联系，珍惜这份难得的缘分。友谊在此延续。她们【respect/尊重】彼此差异，【support/支持】彼此梦想，【share/分享】生活点滴。她们【active/积极】经营友谊。

她们开始制定宿舍公约，共同维护这个小家的温馨。她们告诉彼此："宿舍生活需要【understanding/理解】和【tolerance/包容】。我们用真心经营友谊，用陪伴守护青春。"她们的友谊成为大学的【treasure/宝藏】。友谊在此升华。她们【patient/耐心】地相处，【encourage/鼓励】彼此成长。她们的故事成为【legend/传奇】。

宿舍闺蜜，让她们感受到友谊的魅力和青春的价值。她们决定珍惜宿舍时光，用真心经营友谊，用陪伴守护青春。这是她们选择的生活，也是她们青春的旅程。每一次相处，都是一次对友谊的诠释。这是她们的承诺。她们【determine/决心】珍惜彼此友谊，【create/创造】更多回忆，让青春更加【colorful/多彩】，【build/建立】属于她们的青春传奇。她们【firmly/坚定地】相信友谊的力量。她们【promise/承诺】会一直珍惜彼此。

某次毕业告别会上，她们分享了她友谊理念："宿舍是青春最温暖的港湾。我们用真心守护友谊，用陪伴书写青春。"台下同学感动落泪。告别会现场【applaud/响起掌声】。她们用亲身经历证明，真心的力量可以收获友谊，青春的精神可以创造回忆。每个人都被她们【inspire/启发】。她们感到无比【happy/幸福】和【fulfill/充实】。`,

  '距离之美': `安静的书房里，林瑶正【write/写】着一封长信。作为一名异地恋的女生，她用文字表达对男友的思念。每一封信都承载着深深的【emotion/情感】，每一句话都是爱的见证。她深知异地恋的辛苦。书房里【quiet/安静】，她【recall/回忆】着相处的点滴。她内心很【miss/想念】，期待着下次见面。她【always/总是】保持着联系。

今天的任务是给男友写一封特别的信。林瑶注意到他们已经三个月没有见面了，思念越来越【strong/强烈】。她反复斟酌每一个字句，表达最真挚的情感。这是一个需要【sincerity/真诚】和坚持的过程。她【never/从不】放弃这段感情，【always/总是】努力维系。她【express/表达】思念，【share/分享】生活。

写信过程中，林瑶遇到了一个难题。文字无法完全表达她的思念，她感到有些无助。她【worried/担忧】地思考如何让对方感受到爱。最终，她决定录制一段视频，更加【direct/直接】地表达情感。突破需要创意。她【finally/终于】完成视频。她【excited/激动】地发送过去。思念【perfectly/传递】。

发送后，林瑶每天都会期待男友的回复。虽然距离遥远，但他们的心始终相连。等待需要耐心。她【patient/耐心】等待回复，【positive/积极】面对距离。她【nervous/紧张】但同时也【hopeful/充满希望】。她【spend/花费】时间维系感情。

终于，男友的回复来了。他告诉她，他也在努力，希望早日结束异地，给她一个家。那一刻，她知道等待是值得的。感情在距离中【stronger/更坚定】。她【moved/感动】地看着回复。两颗心跨越距离【close/靠近】。

某次视频通话中，男友给了她一个惊喜。他告诉她，他已经申请调动，很快就可以在一起了。惊喜【successful/成功】。她【happily/幸福地】流下眼泪。异地即将结束。

她明白，异地恋需要的是坚持和信任。她开始更加珍惜每一次联系，用心经营这段感情。爱情在此成长。她【respect/尊重】他的努力，【support/支持】他的决定，【share/分享】生活点滴。她【active/积极】维系感情。

林瑶开始给同样异地恋的朋友分享经验，鼓励他们坚持下去。她告诉他们："异地恋需要【trust/信任】和【persistence/坚持】。我们用真心守护爱情，用等待证明坚定。"她的故事帮助了许多人。希望在此传递。她【patient/耐心】地鼓励，【encourage/坚持信念】。异地恋的人都受到她的【inspire/启发】。

异地相思，让林瑶感受到爱情的魅力和坚守的价值。她决定继续坚持这段感情，用真心守护爱情，用等待证明坚定。这是她选择的道路，也是她爱情的考验。每一次思念，都是一次对爱情的诠释。这是她的承诺。她【determine/决心】一生【devote/奉献】给他，【create/创造】幸福未来，让爱情更加【firm/坚定】，【build/建立】属于他们的传奇。她【firmly/坚定地】相信爱情的力量。她【promise/承诺】会一直坚守感情。

某次婚礼上，林瑶分享了她爱情理念："距离让爱情更加珍贵。我们用坚守证明真爱，用等待换来团圆。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。她用亲身经历证明，坚守的力量可以战胜距离，爱情的精神可以跨越时空。每个人都被她【inspire/启发】。她感到无比【happy/幸福】和【fulfill/充实】。`
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

    const num = String(91 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 91 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 91 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事91-95，大学生喜爱题材，词汇量50-60）');
}

main();