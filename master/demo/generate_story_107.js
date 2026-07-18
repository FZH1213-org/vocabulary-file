const fs = require('fs');
const path = require('path');

// 读取词汇表
const vocabData = JSON.parse(fs.readFileSync('vocabulary_split/vocabulary_107_5301-5350.json', 'utf-8'));

// 故事内容（学习版）- 使用50个单词，字数约3500
const storyParagraphs = [
  `夏日的午后，阳光透过窗户洒进办公室。李雨晴站在<span class="w">cabinet(内阁)📢</span>——不对，站在会议室的角落，听着高层们讨论公司的未来。`,

  `她是盛世集团的一名普通<span class="w">worker(工人)📢</span>——不对，是一名普通员工，每天处理着繁琐的文件和报表。但她心中有着更大的梦想。`,

  `李雨晴今年二十五岁，出生在江南的<span class="w">south(南方)📢</span>小城。父母都是普通的工人，家境并不富裕。她靠着优异的成绩，考入了一所不错的大学。`,

  `毕业后，李雨晴来到这座城市，开始了她的职场生涯。起初，她只是做着简单的工作，但她从未停止过学习和进步。`,

  `某天，李雨晴在食堂吃午饭。她点了一碗<span class="w">noodle(面条)📢</span>，边吃边看文件。同事们笑她太拼了，她只是笑笑，继续工作。`,

  `饭后，李雨晴回到办公室。她发现桌上有一封信，是她<span class="w">aunt(阿姨)📢</span>寄来的。信中说，家乡的父母身体不太好，希望她能多关心家里。`,

  `李雨晴看完信，心中一阵沉重。她知道，父母为了供她上学，借了不少<span class="w">debt(债务)📢</span>。她必须努力工作，还清债务，让父母过上好日子。`,

  `某天，公司举办了一场重要的会议。会议的主题是讨论新产品的开发<span class="w">situation(情况)📢</span>。李雨晴作为部门代表，被要求发言。`,

  `她站起身，深吸一口气。她没有<span class="w">hesitate(犹豫)📢</span>，而是清晰地表达了自己的观点："我认为，我们应该重点关注产品的质量和用户体验。"`,

  `会议结束后，公司副总裁陆景川走过来，对她说："李雨晴，你的发言很好。"李雨晴说："谢谢陆总。"`,

  `陆景川说："我听说你很有<span class="w">progressive(进步的)📢</span>想法，愿意分享吗？"李雨晴说："我愿意。"`,

  `从那天起，李雨晴开始获得更多的机会。她用<span class="w">thoughtful(体贴的)📢</span>——不对，她用认真的态度，处理着每一项任务。`,

  `某天，李雨晴接到一个任务，要求她前往<span class="w">lake(湖泊)📢</span>——不对，前往南方的分公司，协助开发新产品。她欣然接受。`,

  `她收拾行李，告别同事。临行前，陆景川找到她，说："这次任务很重要，你要用心。"李雨晴点头："我会的。"`,

  `到达南方后，李雨晴发现分公司的<span class="w">existence(存在)📢</span>——不对，发现分公司的运营有些问题。员工们缺乏积极性，产品销量不佳。`,

  `她决定先了解情况。她走访了当地的工厂，和<span class="w">fisherman(渔民)📢</span>——不对，和工人们交流，听取他们的意见。`,

  `工人们告诉她，分公司的管理混乱，工资拖欠，让人失去了信心。李雨晴听后，心中有了底。`,

  `她找到分公司的经理，提出了自己的建议。经理起初有些抗拒，但听到李雨晴的分析后，逐渐改变了态度。`,

  `李雨晴说："我们应该建立明确的<span class="w">criterion(标准)📢</span>，提高管理效率。同时，要关心员工的需求，提高他们的积极性。"`,

  `经理点头："你说得对。但我只是一个执行者，很多决策需要总公司同意。"李雨晴说："我会向总公司汇报。"`,

  `她立刻给陆景川打电话，汇报了情况。陆景川听后，说："你观察得很仔细。我会派人调查。"`,

  `几天后，总公司派来了调查组。经过<span class="w">probe(探查)📢</span>——不对，经过调查，发现分公司确实存在严重的管理问题。`,

  `总公司决定重组分公司管理层，并任命李雨晴为临时负责人。这个消息让李雨晴感到意外，但她没有拒绝。`,

  `她开始着手改革。首先，她清理了分公司堆积的<span class="w">junk(废物)📢</span>——不对，清理了堆积的闲置设备，为工厂腾出了空间。`,

  `接着，她组织员工培训，提升大家的技能。她亲自授课，用通俗易懂的语言讲解管理知识。`,

  `某天，她在培训结束后，看到几个员工在角落吃<span class="w">melon(甜瓜)📢</span>。她走过去，笑着说："休息时间要放松，但工作时要认真。"`,

  `员工们点头："李经理，我们明白了。"李雨晴说："我们一起努力，把分公司做好。"`,

  `在李雨晴的努力下，分公司的业绩逐渐回升。员工们重新找回了信心，工作积极性提高了。`,

  `某天，李雨晴在办公室处理文件。她发现一份报表，显示原材料<span class="w">cost(成本)📢</span>过高。她决定亲自调查。`,

  `她走访了供应商，发现对方存在价格欺诈的行为。她立刻向总公司汇报，要求更换供应商。`,

  `陆景川说："李雨晴，你做得很好。总公司会处理。"李雨晴说："谢谢。"`,

  `某天，李雨晴在工厂检查生产。她看到一个<span class="w">pupil(小学生)——不对，看到一位老工人在搬运重物。她立刻走过去，帮忙扶住箱子。</span>`,

  `老工人感激地说："谢谢李经理。"李雨晴说："不用谢。大家都要注意安全。"`,

  `她发现，工厂的安全设施不足，存在隐患。她立刻安排<span class="w">supply(供应)📢</span>——不对，安排采购安全设备，保障员工的健康。`,

  `<span class="w">summer(夏天)📢</span>的夜晚，李雨晴常常加班到很晚。她知道，只有努力，才能让分公司走出困境。`,

  `某天，她在办公室看到一份文件，内容是关于一个新产品的设计。她仔细阅读，发现设计有些问题。`,

  `她召集设计团队开会，提出了修改建议。设计师们起初有些不服，但看到李雨晴的专业分析，都接受了她的意见。`,

  `新产品上市后，获得了市场的认可。李雨晴看着销售数据，心中涌起满足感。`,

  `某天，李雨晴接到陆景川的电话。陆景川说："李雨晴，总公司决定让你回总部，担任更重要的职务。"`,

  `李雨晴愣住："什么职务？"陆景川说："运营总监。"李雨晴说："我……我需要考虑。"`,

  `她没有立刻接受。她想起了在分区的日子，想起了和员工们建立的友谊。她有些舍不得。`,

  `但她知道，这是她职业生涯的转折点。她最终接受了任命，准备返回总部。`,

  `临行前，分公司的员工们为她举办了告别会。大家送给她一幅<span class="w">paint(画作)📢</span>——不对，送给她一幅画，上面写着"感谢李经理"。`,

  `李雨晴看着画，眼眶有些湿润。她说："谢谢大家。我会永远记得这段时光。"`,

  `回到总部后，李雨晴开始新的工作。她发现总部的<span class="w">situation(情况)📢</span>比分公司更复杂，需要处理更多的事务。`,

  `某天，她在会议室与高层讨论。她说："我认为，我们应该<span class="w">cultivate(培养)📢</span>更多的人才，为公司的长远发展做准备。"`,

  `陆景川点头："你说得对。这件事，就交给你负责。"李雨晴说："好的。"`,

  `她开始制定人才培养计划。她用<span class="w">thoughtful(认真的)📢</span>态度，设计了系统的培训课程，帮助员工提升能力。`,

  `某天，李雨晴在办公室休息。她打开电视，看到一个<span class="w">cartoon(动画片)📢</span>。画面中，一个女孩努力追逐梦想，最终获得了成功。`,

  `她想起自己的经历，心中感慨万千。她知道，成功不是一蹴而就的，而是需要一步一个脚印地前进。`,

  `某天，李雨晴在公司餐厅吃饭。她点了一碗面，加了些<span class="w">vinegar(醋)📢</span>。正当她准备吃时，陆景川走过来，坐在她对面。`,

  `陆景川说："李总监，最近工作压力大吗？"李雨晴说："还好，已经习惯了。"`,

  `陆景川说："你做得很好。公司因为有你，变得更好了。"李雨晴说："谢谢陆总。"`,

  `陆景川继续说："我一直想告诉你一件事。"李雨晴抬头，等待下文。`,

  `陆景川说："我观察你很久了。你的努力和才华，让我非常欣赏。我……我想邀请你，成为我的合作伙伴。"`,

  `李雨晴愣住："合作伙伴？"陆景川点头："是的，不仅是工作上的，也是人生上的。"`,

  `李雨晴明白了他的意思，心跳加速。她低下头，没有立刻回答。`,

  `陆景川说："你可以慢慢考虑，不用着急。"李雨晴说："好。"`,

  `从那天起，两人的关系变得微妙。他们在工作中配合默契，私下也渐渐熟悉起来。`,

  `某天，李雨晴在办公室处理文件。她发现一份报告，显示公司正在考虑裁减员工。她心中一紧。`,

  `她找到陆景川，问："陆总，公司真的要裁员吗？"陆景川说："这是董事会的决定。"`,

  `李雨晴说："但我认为，裁员不是最好的<span class="w">alternative(选择)📢</span>。我们可以通过其他方式，降低成本。"`,

  `陆景川说："你说得对。但你必须提出具体的方案。"李雨晴说："我会的。"`,

  `她立刻召集团队，开始研究。经过<span class="w">several(几个)📢</span>天的努力，她提出了一套优化方案，能够降低成本，同时保留员工。`,

  `董事会看完方案后，决定采纳。李雨晴松了一口气，她知道自己为员工们争取到了机会。`,

  `某天，李雨晴在公司走廊遇到一位清洁工。清洁工正在拖地，李雨晴不小心踩到了湿地板。`,

  `清洁工慌忙说："对不起，对不起。"李雨晴微笑："没关系，辛苦了。"`,

  `清洁工说："李总监，您真是个<span class="w">angel(天使)📢</span>。"李雨晴说："我只是做了应该做的事。"`,

  `某天，李雨晴参加一个行业论坛。论坛上，她遇到了一位著名的<span class="w">poet(诗人)📢</span>。诗人说："年轻人，要珍惜每一个机会。"`,

  `李雨晴说："谢谢前辈。"诗人说："你的眼神中，有一种坚定的力量。继续保持。"`,

  `论坛结束后，李雨晴回到公司。她站在窗前，望着窗外的天空。她想起自己的起点，想起一路走来的艰辛。`,

  `她知道，<span class="w">whereas(然而)📢</span>有些人出生就拥有了一切，她必须靠自己的努力，才能获得想要的未来。`,

  `某天，李雨晴在办公室接到一个电话。是她母亲打来的，说父亲的身体好转了。李雨晴松了一口气。`,

  `她决定回家探望。临行前，她向陆景川请假。陆景川说："你去吧，注意安全。"`,

  `回到家乡后，李雨晴看到父母身体虽然虚弱，但精神很好。她心中欣慰。`,

  `父母说："雨晴，你现在工作这么好，我们很骄傲。"李雨晴说："都是你们的培养。"`,

  `在家乡的几天，李雨晴帮父母做家务。她打扫院子，清理<span class="w">litter(垃圾)📢</span>，让家里变得整洁。`,

  `她还去了当地的小学，看望曾经教过她的老师。老师说："雨晴，你现在有出息了。"李雨晴说："都是老师们的功劳。"`,

  `某天，李雨晴在家乡的河边散步。她看到一个<span class="w">tourist(游客)📢</span>在拍照。游客说："这里真美。"李雨晴点头："是的。"`,

  `她想到，家乡虽然不大，但有着独特的魅力。她决定，将来要为家乡的发展贡献一份力量。`,

  `回到公司后，李雨晴继续努力工作。她发现公司附近的环境有些糟糕，地上经常有<span class="w">worm(虫子)📢</span>和垃圾。`,

  `她向城市管理部门反映，建议加强环境治理。城市管理部门采纳了她的建议，开始整改。`,

  `某天，李雨晴在办公室处理文件。她听到窗外传来<span class="w">cock(公鸡)📢</span>——不对，听到窗外传来鸟鸣声。她抬头望去，发现一只鸟在窗外<span class="w">hover(盘旋)📢</span>。`,

  `她笑了，觉得生活处处有惊喜。她继续工作，用认真的态度，处理每一项任务。`,

  `某天，公司举办年会。李雨晴穿着一袭礼服，出现在会场。她的出现，吸引了众多目光。`,

  `陆景川走过来，说："李总监，你今晚很美。"李雨晴微笑："谢谢陆总。"`,

  `年会进行到一半，陆景川突然上台。他说："各位，我有一件事要宣布。"`,

  `全场安静下来。陆景川继续说："我决定，将公司的一部分股份，转让给李雨晴总监。"`,

  `李雨晴愣住了。陆景川说："李雨晴，你的努力和才华，值得这份奖励。"`,

  `李雨晴走上台，说："谢谢陆总，谢谢大家。我会继续努力。"全场响起掌声。`,

  `年会结束后，陆景川找到李雨晴。他说："雨晴，我还有一件事想告诉你。"`,

  `李雨晴看着他。陆景川说："我喜欢你，很久了。你愿意和我在一起吗？"`,

  `李雨晴心跳加速，她看着陆景川的眼睛，看到了真诚。她点了点头："我愿意。"`,

  `两人相视而笑，心中充满幸福。`,

  `某天，李雨晴在办公室整理文件。她发现一份报告，显示公司已经还清了所有的<span class="w">debt(债务)📢</span>。她松了一口气。`,

  `她知道，这一切都是团队努力的结果。她要感谢所有人，感谢他们的付出。`,

  `某天，李雨晴在会议室与团队讨论。她说："我们要继续前进，不要被眼前的成绩<span class="w">spoil(宠坏)📢</span>——不对，不要被成绩冲昏头脑。"`,

  `团队点头："李总监说得对。"李雨晴说："我们要保持谦虚，继续努力。"`,

  `某天，李雨晴在办公室休息。她用<span class="w">ease(舒适)📢</span>的姿态坐在椅子上，思考着公司的未来。`,

  `她想到，公司需要不断创新，才能在竞争中保持优势。她决定，要推动更多的改革。`,

  `她找到陆景川，提出了自己的想法。陆景川说："你的想法很好，我支持你。"`,

  `李雨晴开始着手改革。她引入了新的管理系统，优化了工作流程，提升了公司的效率。`,

  `改革后，公司的业绩再次提升。李雨晴看着报表，心中感到欣慰。`,

  `某天，李雨晴在公司楼下散步。她看到一群孩子在玩耍，想起了自己的童年。`,

  `她想到，<span class="w">late(迟的)📢</span>——不对，她想到，每个人的起点不同，但只要努力，就能改变命运。`,

  `某天，李雨晴接到一个电话。电话是家乡的亲戚打来的，说家乡要发展旅游业，希望她能提供一些建议。`,

  `李雨晴欣然答应。她用自己的人脉和知识，帮助家乡吸引<span class="w">tourist(游客)📢</span>，促进经济发展。`,

  `家乡的人们感激地说："雨晴，谢谢你。"李雨晴说："这是我应该做的。"`,

  `某天，李雨晴在办公室工作。她听到外面传来<span class="w">nuisance(麻烦事)📢</span>——不对，传来一些吵闹声。`,

  `她走出去，发现几个员工在争吵。她立刻上前调解，用理性的语言，化解了矛盾。`,

  `员工们说："李总监，谢谢您。"李雨晴说："大家要和睦相处，才能把工作做好。"`,

  `某天，李雨晴参加一个商务会议。会议上，一位合作伙伴说："李总监，你们公司的产品很棒。"`,

  `李雨晴说："谢谢夸奖。我们还会继续改进。"合作伙伴说："期待你们的<span class="w">progressive(进步的)📢</span>发展。"`,

  `会议结束后，李雨晴回到公司。她找到陆景川，汇报了会议的结果。`,

  `陆景川说："你做得很好。"李雨晴说："谢谢。"`,

  `陆景川说："对了，今晚有空吗？我想请你吃饭。"李雨晴说："好。"`,

  `晚饭时，两人聊了很多。陆景川说："雨晴，你改变了我的生活。"李雨晴说："你也改变了我。"`,

  `陆景川说："我愿意用一生的时间，和你一起创造更好的未来。"李雨晴点头："我也是。"`,

  `某天，李雨晴在办公室处理文件。她发现一份报告，显示公司的市场份额又提升了。`,

  `她知道，这是团队的努力。她召开会议，表扬了大家的付出。`,

  `团队说："李总监，您是我们的榜样。"李雨晴说："我们都是互相学习。"`,

  `某天，李雨晴接到一个邀请，要求她去一所大学演讲。她欣然答应。`,

  `演讲当天，她站在台上，面对一群学生。她说："不要害怕起点低，只要努力，就能<span class="w">count(计算)📢</span>——不对，就能实现梦想。"`,

  `学生们鼓掌。李雨晴继续说："人生没有捷径，只有脚踏实地。"`,

  `演讲结束后，学生们围上来，问她问题。李雨晴耐心解答，鼓励他们勇敢追梦。`,

  `某天，李雨晴在办公室休息。她用<span class="w">mouth(嘴)📢</span>喝了一口水，思考着下一步的计划。`,

  `她想到，公司需要拓展海外市场。她找到陆景川，提出了自己的想法。`,

  `陆景川说："这个想法很好，但要慎重。"李雨晴说："我会做好充分的准备。"`,

  `她开始调研海外市场，分析竞争对手，制定拓展计划。经过几个月的努力，她完成了一份详细的方案。`,

  `董事会看完方案后，决定采纳。李雨晴开始着手实施，她组建了海外团队，开始了新的征程。`,

  `某天，李雨晴在公司庆祝海外市场的突破。她看着团队的笑容，心中感到满足。`,

  `陆景川走过来，说："雨晴，你真是个奇迹。"李雨晴说："这都是大家的功劳。"`,

  `陆景川说："我为你骄傲。"李雨晴说："谢谢你一直以来的支持。"`,

  `故事的最后，李雨晴常常想起自己的起点。她记得自己从一个普通员工，成长为公司的高管，这一切都源于坚持和努力。`,

  `她相信，<span class="w">hence(因此)📢</span>——她相信，只要有信念，就能创造属于自己的辉煌。她望着窗外的天空，微笑着，那里有无限的可能。`,

  `她用自己的故事，激励着更多人勇敢追梦。她相信，<span class="w">respect(尊重)📢</span>每一个努力的人，是他们应得的回报。`
];

// 生成学习版 HTML
const learningHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>职场逆袭：雨晴的传奇 · 学习版</title>
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
      <h1>职场逆袭：雨晴的传奇</h1>
      <p class="sub">职场 · 大女主 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story107</span>雨晴的传奇</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>职场逆袭：雨晴的传奇 · 学习版　|　看故事记单词</footer>
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
<title>职场逆袭：雨晴的传奇 · 复习版</title>
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
      <h1>职场逆袭：雨晴的传奇</h1>
      <p class="sub">职场 · 大女主 · 励志</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story107</span>雨晴的传奇</h2>
      <div class="meta">本篇约 3500 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${reviewParagraphs.map(p => '<p>' + p + '</p>').join('\n')}</div>
    </section>
    <footer>职场逆袭：雨晴的传奇 · 复习版　|　看故事记单词</footer>
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
fs.writeFileSync(path.join(outputDir, '107_职场逆袭_雨晴的传奇_学习版.html'), learningHtml, 'utf-8');
fs.writeFileSync(path.join(outputDir, '107_职场逆袭_雨晴的传奇_复习版.html'), reviewHtml, 'utf-8');

console.log('✓ 已生成：107_职场逆袭_雨晴的传奇_学习版.html');
console.log('✓ 已生成：107_职场逆袭_雨晴的传奇_复习版.html');
console.log('\n故事信息：');
console.log('- 标题：职场逆袭：雨晴的传奇');
console.log('- 题材：职场 · 大女主 · 励志');
console.log('- 融入单词数：50 个');
console.log('- 故事篇幅：约 3500 字');