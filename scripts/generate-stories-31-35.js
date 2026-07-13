const fs = require('fs');
const path = require('path');

// 故事配置（故事31-35）
const storyConfigs = [
  { theme: '媒体', title: '镜头背后', subtitle: '记者之路', tags: '媒体 · 记者 · 真相' },
  { theme: '环保', title: '绿色守护', subtitle: '环保先锋', tags: '环保 · 自然 · 责任' },
  { theme: '艺术', title: '画布人生', subtitle: '艺术追寻', tags: '艺术 · 画家 · 梦想' },
  { theme: '心理', title: '心灵解码', subtitle: '心理咨询', tags: '心理 · 咨询 · 疗愈' },
  { theme: '航空', title: '云端之上', subtitle: '飞行梦想', tags: '航空 · 飞行员 · 梦想' }
];

// 所有故事内容 - 每个故事约50个词汇
const storyContents = {
  '记者之路': `新闻编辑室里，林记者正对着电脑屏幕整理采访资料。作为一家主流媒体的【journalist/记者】，她深知自己肩负的【responsibility/责任】重大。每一个报道都可能【influence/影响】公众的认知，每一句话都可能改变某个人的命运。新闻工作【require/需要】严谨的态度和敏锐的洞察力。

这次她接到的【assignment/任务】是调查一起环境污染事件。某化工厂被指控【illegal/非法】排放废水，影响了周边居民的【health/健康】。林记者决定深入【investigate/调查】这件事，揭开【truth/真相】。她仔细【review/审查】了已有的资料，发现了一些可疑的【detail/细节】。

她首先来到了受影响的村庄。村民们的情绪激动，纷纷向她【complain/投诉】工厂的行为。"我们的水源被污染了，孩子经常生病。"一位村民【explain/解释】道。林记者仔细【record/记录】每个人的陈述，同时【collect/收集】相关的证据材料。她【promise/承诺】会为他们争取【justice/正义】。

采访过程中，林记者遇到了不少【obstacle/障碍】。工厂方面拒绝接受采访，甚至有人跟踪她，试图阻止调查。但这些阻力反而坚定了她【pursue/追求】真相的决心。她【realize/意识到】这份工作需要勇气和【persistence/坚持】。

她【contact/联系】了环保部门，获取了官方的检测报告。报告显示，工厂确实存在超标排放的问题。同时，她还找到了几位愿意匿名【reveal/透露】情况的工厂员工，他们【confirm/确认】了工厂的违规行为。这些证据构成了完整的【chain/链条】。

为了获得更全面的【information/信息】，林记者还【interview/采访】了医学专家，了解污染对健康的【specific/具体的】影响。专家提供了详细的数据和分析，让报道更加有说服力。这体现了新闻报道的【principle/原则】——用事实说话。

经过一周的深入调查，林记者完成了报道的【draft/初稿】。编辑审阅后，提出了一些建议，要求补充更多的【detail/细节】和数据支撑。林记者连夜修改，确保报道的准确性和客观性。每一个【statement/陈述】都需要有可靠的【source/来源】。

报道发布后，引起了社会的广泛关注。读者们纷纷留言，【express/表达】对污染问题的担忧。相关部门也迅速【respond/回应】，承诺将严肃【handle/处理】此事。媒体的【power/力量】再次得到了体现。

几周后，工厂被责令停产整顿，并面临巨额罚款。村民们的权益得到了【protect/保护】。这个结果让林记者感到深深的【satisfaction/满足】。她【achieve/实现】了自己的职业目标。

她明白，作为记者，最重要的不是追求轰动效应，而是坚持【professional/专业】的操守，用事实说话，为公众【serve/服务】。每一次报道，都是对真相的追寻，对正义的【defend/捍卫】。这是新闻行业的【spirit/精神】所在。

回到编辑室，林记者继续投入到下一个【topic/话题】的调查中。她知道，还有很多故事等待被【discover/发现】，还有很多真相需要被【expose/揭露】。这是她作为记者的使命，也是她职业【value/价值】的体现。每一天都是新的【challenge/挑战】。

记者之路充满挑战，但林记者愿意一直走下去。她相信，只要坚持真相，就能让世界变得更美好。这份【career/职业】给了她无限的【meaning/意义】。`,

  '环保先锋': `环保组织的办公室里，张晨正在整理最新的【environmental/环境的】监测数据。作为一名【environmentalist/环保主义者】，他已经在这个领域工作了五年。每一份数据都【reflect/反映】着环境状况，每一个数字都关系着【ecological/生态的】平衡。他对这份工作充满【passion/热情】。

最近，他所在的团队正在【investigate/调查】一个【important/重要的】问题——某河流的水质【pollute/污染】情况。这条河流曾经清澈见底，但近年来水质急剧下降，鱼类数量【decrease/减少】，甚至出现了死鱼现象。这个【situation/情况】令人担忧。

张晨带领团队来到河边，开始【collect/收集】水样。他们使用专业的【equipment/设备】，从不同【location/地点】提取样本，准备带回【laboratory/实验室】分析。工作虽然繁琐，但每个成员都【serious/认真】对待。他们【measure/测量】了多个指标。

【analysis/分析】结果显示，河水中含有高浓度的有害物质，远超国家【standard/标准】。张晨意识到，必须尽快找到污染源，否则后果将更加【serious/严重】。时间非常【urgent/紧迫】。

团队开始沿着河流上游【search/搜寻】。经过几天的排查，他们发现了几个可疑的【discharge/排放】口。这些排放口隐藏在隐蔽的角落，显然是为了【avoid/避免】监管。这种【behavior/行为】必须被制止。

张晨【contact/联系】了当地环保部门，【report/报告】了这一发现。同时，他还邀请媒体记者来到现场，【record/记录】污染情况，希望通过舆论监督【promote/促进】问题的解决。他【believe/相信】公众的力量。

调查过程中，张晨遇到了不少阻力。有些企业试图用各种方式【stop/阻止】调查，甚至有人威胁他们。但这些困难并没有动摇张晨的【determination/决心】，他坚信环保事业的【importance/重要性】。他选择【insist/坚持】下去。

经过多方努力，污染源终于被【identify/确定】。相关部门迅速采取【action/行动】，责令企业停止排污，并进行整改。河流的治理工作也随即【start/开始】。这需要长期的【effort/努力】。

张晨团队持续【monitor/监控】水质变化，定期发布【report/报告】。几个月后，河水开始变得清澈，鱼类数量逐渐【recover/恢复】。这些变化让张晨感到无比的欣慰。这是他们工作的【result/成果】。

他明白，环保工作不是一朝一夕的事情，需要长期的【persistence/坚持】和努力。每一个小的进步，都是向着更美好的环境迈进了一步。保护环境是每个人的【duty/责任】。

回到办公室，张晨继续整理资料，准备下一个调查任务。他知道，还有很多河流、森林、空气需要被【protect/保护】，还有很多环境问题等待被【solve/解决】。这是他的使命，也是他的责任。

环保先锋的道路虽然艰难，但张晨愿意一直走下去。他相信，只要每个人都贡献一份力量，就能【create/创造】一个更加绿色、健康的地球。未来的【generation/世代】会感谢今天的努力。`,

  '艺术追寻': `画室里，苏雨站在画布前，凝视着空白的画面。作为一名青年【artist/艺术家】，她一直在寻找自己的艺术【style/风格】。每一次创作，都是一次内心的【explore/探索】，每一幅作品，都承载着她的情感和思考。她用画笔表达内心的【world/世界】。她热爱这种【creative/创作的】过程。

毕业后，苏雨选择了独立创作。这条路并不容易，没有固定的【income/收入】，没有稳定的【platform/平台】。很多人劝她找一份稳定的工作，但她内心深处始终有一个【voice/声音】告诉她，要坚持自己的【dream/梦想】。这是她的【choice/选择】。她【decide/决定】走这条路。

她的创作灵感来源于生活。城市的街角、乡村的田野、人们的表情，都可能成为她笔下的【subject/主题】。她喜欢用色彩表达情感，用线条描绘故事。每一幅画都是她【emotion/情感】的体现。她捕捉生活中的【scene/场景】。

第一年，苏雨参加了几个小型展览，但【respond/反应】平平。她的作品被认为过于抽象，难以被大众【understand/理解】。这让苏雨一度陷入【confuse/困惑】，开始怀疑自己的创作方向。她感到有些【frustrate/沮丧】和【disappoint/失望】。

某次偶然的机会，她遇到了一位资深画家。画家看了她的作品后说："你的画有自己的【soul/灵魂】，不要为了迎合市场而改变。真正的艺术需要时间被【discover/发现】。"这句话让苏雨重新找回了信心。她【appreciate/感激】这份【support/支持】。

她决定继续坚持自己的风格，同时不断【improve/提升】技艺。她每天花大量时间【practice/练习】素描，研究色彩搭配，【visit/参观】各大美术馆，学习大师的作品。她深知【technique/技艺】的重要性。她不断【develop/发展】自己的能力。

一年后，苏雨创作了一组以"城市印象"为主题的系列作品。这组作品融合了写实与抽象，展现了城市生活的多样面貌。她将作品提交给一个重要的艺术【exhibition/展览】，意外地入选了。这给了她巨大的【encourage/鼓舞】和【inspire/激励】。

展览开幕那天，苏雨紧张地站在展厅里。许多观众在她的作品前驻足，有人细细【observe/观察】，有人拍照留念，有人开始讨论作品的意义。一位收藏家甚至【express/表达】了购买意向。这次经历让苏雨感到无比的【satisfaction/满足】和【proud/自豪】。

这次经历让苏雨感到无比的【encourage/鼓舞】。她明白，坚持终会有回报。艺术的道路虽然孤独，但只要真诚地创作，就能打动人心。她更加【confident/自信】了。她看到了【success/成功】的希望。

接下来的日子，苏雨继续创作。她开始【experiment/尝试】不同的媒介，油画、水彩、素描，每种材料都带来不同的体验。她的作品逐渐被更多人【recognize/认可】，展览邀请也越来越多。她的【reputation/名声】慢慢建立。她获得了更多【opportunity/机会】。

某天，一位画廊的策展人联系她，希望能为她举办个人画展。这是苏雨一直【expect/期待】的机会。她精心【prepare/准备】了二十幅作品，涵盖了她近年来的创作历程。她【organize/整理】了创作的理念。她希望与观众【share/分享】她的作品。

画展开幕当天，朋友们、同行们、艺术爱好者们纷纷到来。苏雨站在自己的作品前，向每位观众【explain/解释】创作的理念和过程。观众的【feedback/反馈】让她感受到艺术的力量——它能连接人心，能激发思考。这是一次成功的【communicate/交流】和【connect/连接】。

画展结束后，苏雨收到很多积极的评价。有人说她的作品让人【feel/感受】到生活的温度，有人说她的色彩运用充满感染力。这些评价让苏雨更加坚定了自己的艺术道路。她【realize/意识到】自己的方向是对的。她继续【grow/成长】。

艺术追寻的道路没有终点，苏雨知道，还有很多创作等待着她去【complete/完成】，还有很多表达等待着她去【realize/实现】。她会继续用画笔记录生活，用色彩传递情感。这是她的选择，也是她的使命。艺术的【journey/旅程】才刚刚开始。她期待更多的【future/未来】。`,

  '心理咨询': `心理咨询室里，李医生静静地坐在沙发椅上，等待预约的来访者。作为一名【professional/专业的】心理医生，她已经在这个领域工作了十年。每一次【consultation/咨询】，都是一次心灵的对话，每一个案例，都承载着独特的【emotion/情感】和故事。她用专业的【knowledge/知识】帮助他人。她热爱这份【career/职业】。

今天的来访者是一位年轻的职场人士，他最近一直感到【anxiety/焦虑】，工作压力让他难以入睡。李医生用温和的【attitude/态度】引导他【express/表达】内心的感受，用专业的技巧帮助他分析问题的【source/根源】。这是一个【common/常见的】问题。她【understand/理解】他的困扰。

"我总觉得做不好任何事，害怕失败，害怕别人的评价。"来访者说出了困扰他的核心问题。李医生【listen/倾听】着，不时点头表示理解。她没有急于给出建议，而是让来访者充分表达。她深知【patience/耐心】的重要性。她给予他【support/支持】。

咨询过程中，李医生运用认知行为疗法的【technique/技巧】，帮助来访者识别那些不合理的思维【pattern/模式】。她【explain/解释】道："很多时候，我们的情绪来源于对事情的解读，而不是事情本身。"她用浅显的【example/例子】来说明。她帮助他【identify/识别】问题。

通过一系列的【question/问题】，李医生引导来访者反思自己的思维方式。她让他【realize/意识到】，完美主义倾向和对失败的过度恐惧，是导致焦虑的重要原因。这些认知往往源于早期的经历和社会的【pressure/压力】。这是一个长期的【process/过程】。她帮助他【change/改变】思维。

李医生给出了一些实用的【suggestion/建议】：学会接纳不完美的自己，设定【reasonable/合理的】目标，练习放松技巧。她还【recommend/推荐】了一些阅读材料，帮助来访者深入理解自己的心理状态。这些方法需要【regular/规律的】练习。她【encourage/鼓励】他坚持。

几次咨询后，来访者的焦虑状况有了明显【improve/改善】。他学会了用更客观的视角看待工作和生活，不再被消极情绪完全控制。这种变化让李医生感到深深的满足。看到来访者的【progress/进步】是她最大的动力。她感到【satisfy/满足】。

她明白，心理咨询不仅是技术，更是一门艺术。每个来访者都是独特的，需要不同的【approach/方法】和策略。最重要的是建立信任的【relationship/关系】，让来访者感到被理解、被接纳。这需要专业的【skill/技能】和真诚的心。她用心【serve/服务】每一位来访者。

除了个体咨询，李医生还定期开展心理健康【workshop/讲座】，帮助更多人了解心理健康知识。她发现，很多人对心理问题存在误解，认为寻求帮助是软弱的表现。她希望通过自己的努力，改变这种【stereotype/刻板印象】。她【advocate/倡导】心理健康教育。她希望【raise/提高】公众意识。

某次讲座中，一位听众问她："为什么选择这份职业？"李医生【recall/回忆】起自己的经历——大学时，她曾经历了一段低谷期，正是心理咨询帮助她走出了困境。那次经历让她【determine/决定】成为一名心理医生，帮助更多人。这是一个重要的【turn/转折】点。她找到了自己的【purpose/目标】。

心理咨询的工作虽然充满挑战，但每当看到来访者的进步，李医生就觉得一切都值得。她知道，心灵的治愈需要时间和耐心，但只要有人愿意倾听和理解，就没有跨不过去的坎。这是她工作的【value/价值】所在。她【believe/相信】希望的力量。

未来的路上，李医生会继续学习新的理论和技术，不断提升自己的专业【level/水平】。她相信，心理健康是每个人都应该【attention/关注】的话题，而她的工作就是为那些需要帮助的人提供支持和【guide/引导】。她会一直【pursue/追求】这个目标。她的【mission/使命】是帮助他人。`,

  '飞行梦想': `飞行学院的教室里，张浩专注地听着教官的讲解。从小就有一个【dream/梦想】的他，终于站在了【pursue/追求】飞行梦想的起点。成为一名【pilot/飞行员】，在蓝天中翱翔，是他最大的【desire/渴望】。这个【goal/目标】一直激励着他。他对飞行充满【passion/热情】。

飞行训练的第一步是理论学习。张浩需要【master/掌握】大量的航空知识：气象学、导航、飞行原理、应急处理等。每一门课程都需要认真的【study/学习】，每一个知识点都可能在关键时刻救命。他【focus/专注】于每一个细节。他【effort/努力】学习。

"飞行不只是技术，更是一种【responsibility/责任】。"教官的这句话深深印在张浩的心中。他明白，飞行员手中握着的不仅是操纵杆，更是几十上百名乘客的生命。这种【awareness/意识】让他更加谨慎。他时刻保持【alert/警觉】。

地面课程结束后，张浩开始了飞行训练。第一次坐在驾驶舱里，他的心跳【accelerate/加速】，手心冒汗。教官坐在副驾驶位，指导他进行各项【operation/操作】。他努力让自己保持【calm/冷静】。他仔细【observe/观察】仪表。

"放松，感受飞机的【response/反应】。"教官说。张浩深吸一口气，让紧张的情绪平静下来。他小心翼翼地推动油门，飞机开始在跑道上滑行。这一刻充满了【expect/期待】。他准备【launch/起飞】。

第一次起飞的瞬间，张浩感受到了前所未有的【excitement/兴奋】。当飞机离开地面，冲向云霄的那一刻，他知道，这就是他想要的【life/生活】。天空给了他无限的【freedom/自由】感。他享受这种【experience/体验】。

训练过程中，张浩遇到了不少【challenge/挑战】。有些飞行科目需要高度的【precision/精准】，一点小小的失误都可能导致失败。他花了大量时间【practice/练习】，不断【correct/纠正】自己的操作。每一次【mistake/错误】都是学习的机会。他不断【improve/改进】技术。

除了飞行技术，张浩还需要【cultivate/培养】良好的心理素质。在紧急情况下保持【calm/冷静】，做出正确的判断，是飞行员必备的【quality/素质】。学院安排了各种模拟训练，帮助学员【prepare/准备】应对突发状况。这种【train/训练】非常重要。他需要【develop/发展】能力。

一年的训练后，张浩迎来了最终的考核。这是一次全面的飞行【test/测试】，从起飞到降落，每一个环节都被严格【evaluate/评估】。张浩深吸一口气，开始展示他所学的一切。他已经为此【prepare/准备】了很久。他充满【confidence/信心】。

考核过程中，他遇到了一次模拟的紧急情况。虽然紧张，但他迅速按照训练的程序【handle/处理】，成功化解了危机。教官对他的【perform/表现】给予了肯定的评价。这次【experience/经历】让他更有信心。他【complete/完成】了考核。

考核通过的那一刻，张浩感到无比的骄傲。他终于实现了自己的飞行梦想，成为了一名合格的飞行员。这不仅是他个人的【achievement/成就】，也是对那些一直支持他的人最好的回报。他感到深深的【satisfy/满足】。这是一个【memorable/难忘的】时刻。

毕业典礼上，张浩站在台上，接过飞行证书。他知道，这只是职业生涯的【begin/开始】。未来的路上，还有很多航班等待他去【execute/执行】，还有很多经验等待他去积累。他期待着新的【journey/旅程】。这是新的【chapter/篇章】。

他将成为一名民航飞行员，载着乘客飞往世界各地。每一次起飞和降落，他都会以最专业的态度对待，确保每一位乘客的【safety/安全】。这是他的职责，也是他的承诺。他将以【strict/严格】的标准要求自己。他肩负【duty/职责】。

飞行梦想，从童年到成年，终于变成了现实。张浩知道，天空才是他的舞台，他会一直飞下去，追逐属于自己的蓝天。这个【career/职业】给了他无限的【meaning/意义】。他找到了自己的【direction/方向】。`
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

    const num = String(31 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 31 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 31 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事31-35）');
}

main();