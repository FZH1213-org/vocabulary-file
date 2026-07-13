const fs = require('fs');
const path = require('path');

// 故事配置（故事46-50）
const storyConfigs = [
  { theme: '体育', title: '球场传奇', subtitle: '篮球之路', tags: '篮球 · 运动 · 拼搏' },
  { theme: '医疗', title: '白衣天使', subtitle: '护士之歌', tags: '医疗 · 护理 · 关爱' },
  { theme: '法律', title: '正义守护', subtitle: '律师辩护', tags: '法律 · 正义 · 辩护' },
  { theme: '新闻', title: '真相追踪', subtitle: '记者之路', tags: '新闻 · 真实 · 报道' },
  { theme: '设计', title: '时尚梦想', subtitle: '设计人生', tags: '设计 · 时尚 · 创意' }
];

// 所有故事内容 - 每个故事约50个词汇
const storyContents = {
  '篮球之路': `篮球馆的训练场上，球员李强正【practice/练习】着投篮动作。作为一名职业篮球运动员，他每天都在为比赛做准备。每一个动作都需要【perfect/完美的】执行，每一次投篮都承载着胜利的【hope/希望】。他深知训练的【important/重要性】。场馆里【quiet/安静】，他【focus/专注】于每一个细节。他【early/早早】来到训练场，每天都很【busy/忙碌】。他【always/总是】保持高度的专注。

今天的训练重点是提高投篮命中率。李强注意到自己的罚篮技术还不够【stable/稳定】，需要更多的练习。他反复调整姿势，感受肌肉的发力节奏。这是一个需要【careful/细心】打磨的过程。他【never/从不】放弃对完美的追求，【always/总是】力求更好。教练【guide/指导】他的动作，帮助他纠正细节。他【listen/倾听】教练的建议，认真执行。

训练结束后，李强回到休息室进行恢复性训练。他需要通过专业的拉伸和按摩，缓解肌肉疲劳，为明天的训练做好准备。恢复是运动员的必修课。他【careful/仔细】地拉伸每一个肌群，确保身体状态良好。他【spend/花费】了大量时间做恢复训练，确保身体【healthy/健康】。恢复训练【require/需要】极大的耐心。

比赛临近，李强开始研究对手的比赛录像。他分析对手的进攻套路和防守策略，寻找破解的方法。战术分析需要智慧。他【analyze/分析】对手的每一个动作，【try/努力】找到突破口。他【deeply/深深地】理解比赛策略。他【nervous/紧张】但同时也【excited/兴奋】。他【watch/观看】了大量录像，研究对手的习惯。

比赛当天，李强站在球场上，心跳加速。观众的欢呼声让他感到振奋。比赛开始后，他全力以赴，用训练积累的技术应对每一个挑战。关键时刻，他冷静地执行战术，帮助球队取得领先。比赛【intense/激烈】。他【nervous/紧张】但【confident/自信】，成功地完成了关键投篮。观众【warm/热情】地为他喝彩。他【bravely/勇敢地】面对压力。

比赛结束后，李强感到一种深深的【satisfy/满足】。球队的胜利让他感到欣慰，但他明白，这只是赛季的开始。他【humbly/谦虚地】接受队友的赞扬。成功在此【mark/标记】。他【proud/自豪】地看着比分板，知道这是团队的努力。他【continue/继续】追求更高的目标。每个人都为这个【achieve/成就】感到高兴。

他明白，篮球不仅是运动，更是团队精神的体现。他开始更加注重与队友的配合，学习如何在团队中发挥自己的作用。每一次传球，每一次防守，都是团队协作的结果。团队在此凝聚。他【respect/尊重】队友，【cooperate/合作】配合，【share/分享】荣誉。他【active/积极】参与团队建设。

李强开始培养年轻的球员，传授自己的经验和技术。他告诉他们："篮球需要热爱和坚持。每一场比赛都是对意志的考验。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】他们努力。他【successfully/成功地】培养了多位年轻球员。年轻球员们都受到他的【inspire/启发】。

篮球之路，让李强感受到运动的魅力和拼搏的价值。他决定继续深耕这个领域，用专业的技术赢得比赛，用团队的精神创造辉煌。这是他选择的道路，也是他热爱的生活。每一场比赛，都是一次对自我的挑战。这是他的使命。他【determine/决心】一生【devote/奉献】给篮球事业，【achieve/实现】更多的胜利，让球迷能够【enjoy/享受】精彩的比赛，【build/建立】属于自己的传奇。他【firmly/坚定地】相信篮球的力量。他【promise/承诺】会一直追求卓越。

某次青少年篮球训练营上，李强分享了他的运动理念："篮球教会我们永不放弃。我们在赛场上拼搏，用汗水和努力证明自己的价值。"孩子们深受启发，开始向往篮球运动。他的故事激励着新一代运动员。训练营现场【warm/温暖】，大家积极提问。他用亲身经历证明，坚持的力量可以战胜一切困难。每个孩子都被他【inspire/启发】。他【hope/希望】能培养更多篮球人才。`,

  '护士之歌': `医院的病房里，护士张华正【check/检查】着患者的生命体征。作为一名资深的护士，她已经在这个岗位工作了十年。每一个患者都需要【careful/细心】的照顾，每一个细节都可能影响治疗效果。她深知这份工作的【responsibility/责任】重大。病房里【quiet/安静】，她【focus/专注】地观察每一个指标。她【patient/耐心】地记录数据，【careful/仔细】核对。她每天都【arrive/到达】得很早，准备工作做得非常【well/好】。

今天的病房有一位新入院的患者。张华注意到患者情绪有些焦虑，需要心理上的安慰。她决定在医疗护理之外，给予患者更多的情感支持。护理不仅是技术，更是关怀。她【sincere/真诚】地与患者交流，用【gentle/温和】的语言安抚。她【deeply/深深地】理解患者的恐惧。她【help/帮助】患者放松心情。

护理过程中，张华遇到了一个紧急情况。患者的血压突然下降，需要立即处理。她迅速【contact/联系】医生，同时采取急救措施。她保持冷静，熟练地执行每一个步骤。危机需要沉着。她【quickly/快速】地反应，【skillfully/熟练】地操作。她【nervous/紧张】但【confident/自信】。她【successfully/成功地】稳定了患者状况。

经过紧急处理，患者的状况开始稳定。医生对张华的专业反应给予了肯定。患者家属对她的及时救治表示感谢。张华感到一种深深的【satisfy/满足】。生命在此守护。她【happy/开心】地看到患者好转，也【know/知道】护理需要持续关注。她【continue/继续】监测患者情况。家属感到【relieve/释然】和感激。

她明白，护理不仅是职业，更是使命。她开始整理自己的护理经验，参与医院的培训项目，帮助新入职的护士快速成长。她希望通过教育，提升整个护理团队的专业水平。经验在此传递。她【respect/尊重】传统，【innovate/创新】方法，【share/分享】心得。她【active/积极】参与培训工作。她【write/编写】了护理手册。

某次护理技能培训中，张华向新护士讲解急救流程。她用实际案例演示操作要点，传授应急处理的技巧。培训吸引了众多参与者，大家认真学习每一个细节。她看到了传承的希望。培训现场【warm/温暖】，大家积极提问。她【patient/耐心】地回答，【encourage/鼓励】新人学习。每个人都【benefit/受益】于她的分享。年轻护士都受到她的【inspire/启发】。

张华开始培养年轻的护士，传授专业知识和技能。她告诉他们："护理需要爱心和耐心。我们用专业的技能守护生命，用真诚的态度温暖患者。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。她【successfully/成功地】培养了多位优秀护士。每位护士都感到被【support/支持】和鼓励。

护士之歌，让张华感受到护理的意义和生命的价值。她决定继续深耕这个领域，用专业的技能治愈患者，用温暖的态度传递关怀。这是她选择的道路，也是她热爱的生活。每一次护理，都是一次对生命的守护。这是她的使命。她【determine/决心】一生【devote/奉献】给护理事业，【help/帮助】更多患者康复，让医院更加【harmony/和谐】与温暖，【build/建立】一个充满爱的护理团队。她【firmly/坚定地】相信护理的价值。她【promise/承诺】会一直坚守岗位。这份职业让她感到无比【fulfill/充实】。

某次护士节庆祝会上，张华分享了她的护理理念："护理是生命的守护。我们用专业的能力，帮助患者重新拥抱健康。"同行们深受启发，开始思考护理的深层意义。她的故事激励着更多护士追求更高的境界。庆祝会现场【applaud/响起掌声】，大家热烈交流。她用亲身经历证明，专业的力量可以挽救生命，温暖的力量可以治愈心灵。每个人都被她【inspire/启发】。她感到无比【proud/自豪】。`,

  '律师辩护': `律师事务所的会议室里，律师王明正【review/审查】着案件的证据材料。作为一名专业的律师，他正在为即将到来的庭审做准备。每一个证据都需要【careful/仔细】的分析，每一个论点都需要严密的逻辑。他深知辩护的【important/重要性】。会议室里【quiet/安静】，他【focus/专注】地研究每一个细节。他【early/早早】来到办公室，准备工作做得非常【well/好】。他【always/总是】保持高度的专业性。

今天的案件是一起复杂的商业纠纷。王明注意到证据链还不够完整，某些关键事实需要进一步核实。他决定深入调查，寻找更多的证据支持。辩护需要严谨。他【careful/仔细】地梳理案件脉络，【try/努力】找到突破口。他【deeply/深深地】理解案件背景。他【analyze/分析】每一个证据的可靠性。他【spend/花费】大量时间研究案情。

调查过程中，王明遇到了一个难题。某个关键证人不愿配合，无法获取重要证言。他【worried/担忧】地思考解决方案，尝试了多种方法。最终，他通过耐心的沟通，说服证人配合调查。突破需要坚持。他【patiently/耐心地】沟通，【finally/终于】获得了证言。他【excited/兴奋】地记录证词。证人感到被【respect/尊重】和理解。

庭审当天，王明站在法庭上，面对法官和对方律师。他冷静地陈述辩护意见，用充分的证据支持自己的观点。每一个论点都有理有据，每一个反驳都精准有力。庭审【intense/激烈】。他【nervous/紧张】但【confident/自信】，成功地完成了辩护。法官【listen/倾听】他的陈述。他【bravely/勇敢地】应对挑战。

庭审结束后，王明感到一种深深的【satisfy/满足】。案件的胜诉让他感到欣慰，但他明白，这只是职业生涯的一部分。他【humbly/谦虚地】接受当事人的感谢。成功在此【mark/标记】。他【proud/自豪】地看着判决书，知道这是专业努力的回报。他【continue/继续】追求更高的专业水平。当事人感到【relieve/释然】和感激。

他明白，律师不仅是职业，更是正义的守护者。他开始参与公益法律服务，为弱势群体提供法律援助。他希望通过自己的努力，让更多人获得公正的对待。正义在此传递。他【respect/尊重】法律，【practice/实践】正义，【share/分享】知识。他【active/积极】参与公益项目。他【provide/提供】免费法律咨询。

王明开始培养年轻的律师，传授专业知识和技能。他告诉他们："律师需要正义和勇气。我们用法律的力量维护公平，用专业的技能守护权益。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。他【successfully/成功地】培养了多位优秀律师。年轻律师都受到他的【inspire/启发】。

律师辩护，让王明感受到法律的威严和正义的价值。他决定继续深耕这个领域，用专业的能力维护公平，用正义的理念守护权益。这是他选择的道路，也是他热爱的生活。每一次辩护，都是一次对正义的守护。这是他的使命。他【determine/决心】一生【devote/奉献】给律师事业，【defend/维护】更多人的权益，让社会更加【fair/公平】与公正，【build/建立】一个法治的社会环境。他【firmly/坚定地】相信法律的力量。他【promise/承诺】会一直坚守正义。

某次法律教育讲座上，王明分享了他的职业理念："律师是正义的守护者。我们用法律的智慧，帮助人们获得公平的对待。"听众们深受启发，开始思考法律的意义。他的故事激励着更多年轻人向往法律职业。讲座现场【applaud/响起掌声】，大家热烈提问。他用亲身经历证明，专业的力量可以维护正义，法律的智慧可以改变命运。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。`,

  '记者之路': `新闻编辑部的工作室里，记者刘芳正【write/撰写】着最新的新闻报道。作为一名专业的记者，她每天都在追踪社会热点。每一个事件都需要【accurate/准确】的报道，每一个细节都需要核实。她深知新闻的【responsibility/责任】重大。工作室里【busy/忙碌】，她【focus/专注】地整理素材。她【patient/耐心】地核对信息，【careful/仔细】撰写。她每天都【arrive/到达】得很早，准备工作做得非常【well/好】。

今天的选题是一起社会关注的民生问题。刘芳注意到某些信息还不够完整，需要深入的实地调查。她决定亲自前往现场，获取第一手资料。新闻需要真实。她【sincere/真诚】地对待每一个采访对象，用【gentle/温和】的方式提问。她【deeply/深深地】理解问题本质。她【travel/前往】现场进行采访。

采访过程中，刘芳遇到了一个难题。某个关键当事人不愿接受采访，无法获取重要信息。她【worried/担忧】地思考解决方案，尝试了多种沟通方式。最终，她通过真诚的态度，获得了当事人的信任。突破需要耐心。她【patiently/耐心地】等待，【finally/终于】完成了采访。她【excited/兴奋】地记录信息。当事人感到被【respect/尊重】和理解。

她撰写了详细的报道文章，客观呈现了事件的各个方面。她的报道引起了社会的关注，相关部门开始重视这个问题。她看到了新闻的力量。报道【publish/发表】后引发热议。她【nervous/紧张】但【confident/自信】，成功地完成了任务。读者【warm/热情】地反馈。她【bravely/勇敢地】追踪真相。

报道结束后，刘芳感到一种深深的【satisfy/满足】。社会的改变让她感到欣慰，但她明白，这只是记者使命的一部分。她【humbly/谦虚地】接受同行和读者的认可。成功在此【mark/标记】。她【proud/自豪】地看着报道反响，知道这是专业努力的回报。她【continue/继续】追求真相。相关部门感到【urge/督促】而行动。

她明白，记者不仅是职业，更是真相的追寻者。她开始参与新闻培训项目，培养年轻记者的专业素养。她希望通过教育，让更多人理解新闻的意义。真相在此传递。她【respect/尊重】事实，【pursue/追求】真相，【share/分享】经验。她【active/积极】参与培训工作。她【teach/教授】年轻记者。

刘芳开始培养年轻的记者，传授采访技巧和写作方法。她告诉他们："记者需要勇气和责任。我们用文字的力量揭示真相，用专业的态度服务公众。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。她【successfully/成功地】培养了多位优秀记者。年轻记者都受到她的【inspire/启发】。

记者之路，让刘芳感受到新闻的力量和社会的价值。她决定继续深耕这个领域，用专业的能力揭示真相，用客观的态度服务公众。这是她选择的道路，也是她热爱的生活。每一次报道，都是一次对真相的追寻。这是她的使命。她【determine/决心】一生【devote/奉献】给新闻事业，【report/报道】更多真相，让社会更加【transparent/透明】与公正，【build/建立】一个信息真实的环境。她【firmly/坚定地】相信新闻的价值。她【promise/承诺】会一直追求真相。

某次新闻教育讲座上，刘芳分享了她职业理念："记者是真相的守护者。我们用专业的力量，帮助公众了解真实的世界。"听众们深受启发，开始思考新闻的意义。她的故事激励着更多年轻人向往新闻职业。讲座现场【applaud/响起掌声】，大家热烈提问。她用亲身经历证明，专业的力量可以揭示真相，新闻的智慧可以推动社会进步。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。新闻【industry/行业】需要这样的人才。`,

  '设计人生': `设计工作室的创作室里，设计师陈静正【create/创作】着新的服装系列。作为一名时尚设计师，她每天都在为下一个发布会做准备。每一个款式都需要【creative/创造性】的设计，每一个细节都需要精心的打磨。她深知设计的【important/重要性】。工作室里【quiet/安静】，她【focus/专注】于每一个细节。她【early/早早】来到工作室，每天都很【busy/忙碌】。她【always/总是】保持创作的激情。

今天的创作主题是将传统元素与现代风格结合。陈静注意到传统图案的运用还不够【natural/自然】，需要更多的尝试。她反复调整设计草图，寻找最佳的表现方式。这是一个需要【careful/细心】打磨的过程。她【never/从不】放弃对完美的追求，【always/总是】力求更好。她【try/尝试】各种组合，【experiment/实验】不同效果。

设计过程中，陈静遇到了一个难题。某种面料的质地与设计理念不符，无法达到预期的效果。她【worried/担忧】地思考解决方案，尝试了多种材料。最终，她找到了一种新型面料，完美契合了设计需求。突破需要坚持。她【patiently/耐心地】研究，【finally/终于】找到了答案。她【excited/兴奋】地应用新材料。面料【perfectly/完美地】呈现设计。

作品完成后，陈静开始准备时装发布会。她精心布置展示场地，安排模特走秀流程。发布会的每一个细节都需要考虑。准备需要投入。她【careful/仔细】地安排流程，【organize/组织】每一个环节。她【nervous/紧张】但同时也【excited/兴奋】。她【spend/花费】大量时间准备发布会。

发布会当天，陈静站在舞台边，看着模特展示她的作品。观众的掌声和赞美让她感到欣慰。她的设计获得了专业人士的认可，被认为是创新与传承的完美结合。发布会【successful/成功】。她【nervous/紧张】但【confident/自信】，成功地展示了作品。观众【warm/热情】地喝彩。她【proud/自豪】地看着作品展示。媒体都【active/积极】报道。

发布会结束后，陈静感到一种深深的【satisfy/满足】。作品的成功让她感到欣慰，但她明白，这只是设计生涯的开始。她【humbly/谦虚地】接受大家的祝贺。成功在此【mark/标记】。她【proud/自豪】地看着媒体报道，知道这是创意的回报。她【continue/继续】追求更高的设计境界。每个人都为这个【achieve/成就】感到高兴。

她明白，设计不仅是职业，更是文化的传承者。她开始研究各地的传统服饰，了解背后的文化内涵。她希望通过设计，让传统文化焕发新的生命力。文化在此传递。她【respect/尊重】传统，【innovate/创新】风格，【share/分享】理念。她【active/积极】推广文化设计。她【travel/旅行】各地学习传统技艺。

陈静开始培养年轻的设计师，传授设计理念和技术。她告诉他们："设计需要热爱和文化。我们用创意的力量传承文化，用时尚的方式表达美学。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。她【successfully/成功地】培养了多位优秀设计师。年轻设计师都受到她的【inspire/启发】。

设计人生，让陈静感受到创作的魅力和文化的价值。她决定继续深耕这个领域，用创意的能力传承文化，用时尚的方式表达美学。这是她选择的道路，也是她热爱的生活。每一次设计，都是一次对文化的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给设计事业，【create/创造】更多经典作品，让时尚更加【meaningful/有意义】，【build/建立】属于自己的设计传奇。她【firmly/坚定地】相信设计的力量。她【promise/承诺】会一直坚持创作。

某次设计师论坛上，陈静分享了她创作理念："设计是文化的传承者。我们用创意的力量，让传统文化焕发新的生命力。"同行们深受启发，开始思考设计的深层意义。她的故事激励着更多设计师追求更高的境界。论坛现场【applaud/响起掌声】，大家热烈讨论。她用亲身经历证明，创意的力量可以传承文化，时尚的智慧可以表达美学。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。设计【industry/行业】需要这样的创新。`
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

    const num = String(46 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 46 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 46 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事46-50）');
}

main();