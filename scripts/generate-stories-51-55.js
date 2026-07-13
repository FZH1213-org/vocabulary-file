const fs = require('fs');
const path = require('path');

// 故事配置（故事51-55）
const storyConfigs = [
  { theme: '科学', title: '科研之路', subtitle: '实验探索', tags: '科学 · 实验 · 发现' },
  { theme: '建筑', title: '建筑梦想', subtitle: '城市建造', tags: '建筑 · 设计 · 城市' },
  { theme: '农业', title: '田野守护', subtitle: '丰收希望', tags: '农业 · 种植 · 收获' },
  { theme: '交通', title: '驾驶人生', subtitle: '道路前行', tags: '交通 · 驾驶 · 安全' },
  { theme: '图书馆', title: '书海航行', subtitle: '知识守护', tags: '图书 · 阅读 · 知识' }
];

// 所有故事内容 - 每个故事约50个词汇
const storyContents = {
  '实验探索': `实验室的工作台上，研究员李明正【prepare/准备】着今天的实验材料。作为一名科学家，他每天都在探索未知的领域。每一个实验都需要【careful/仔细】的操作，每一个数据都可能揭示新的【truth/真相】。他深知科研的【important/重要性】。实验室里【quiet/安静】，他【focus/专注】于每一个细节。他【early/早早】来到实验室，每天都很【busy/忙碌】。他【always/总是】保持高度的专注。

今天的实验主题是研究一种新型材料的特性。李明注意到实验条件还不够【stable/稳定】，需要更多的调试。他反复调整参数，观察实验反应。这是一个需要【patient/耐心】等待的过程。他【never/从不】放弃对真理的追求，【always/总是】力求更精确的结果。实验【require/需要】严谨的态度。

实验过程中，李明遇到了一个难题。某个关键数据与预期不符，无法解释实验现象。他【worried/担忧】地思考原因，尝试了多种分析方法。最终，他发现了一个被忽略的因素，成功解释了异常数据。突破需要坚持。他【patiently/耐心地】分析，【finally/终于】找到了答案。他【excited/兴奋】地记录发现。实验结果【perfectly/完美地】符合理论预测。

实验完成后，李明开始撰写研究报告。他【organize/整理】实验数据，【analyze/分析】实验结果，撰写详细的论文。科研需要记录。他【careful/仔细】地核对数据，【accurate/准确】描述发现。他【nervous/紧张】但同时也【excited/兴奋】。他【spend/花费】大量时间完善论文。

论文发表后，李明的研究引起了学术界的关注。同行专家对他的发现给予了肯定，认为这是领域内的重要突破。他看到了科研的价值。论文【publish/发表】后引发讨论。他【nervous/紧张】但【confident/自信】，成功地展示了成果。学术界【warm/热情】地回应。他【proud/自豪】地看着研究成果。期刊都【active/积极】报道。

研究结束后，李明感到一种深深的【satisfy/满足】。发现的喜悦让他感到欣慰，但他明白，这只是科研道路的开始。他【humbly/谦虚地】接受同行的认可。成功在此【mark/标记】。他【proud/自豪】地看着论文引用，知道这是努力的回报。他【continue/继续】追求更高的科学境界。每个人都为这个【achieve/成就】感到高兴。

他明白，科研不仅是职业，更是真理的追寻者。他开始参与学术交流会议，分享研究成果和经验。他希望通过交流，推动整个领域的进步。知识在此传递。他【respect/尊重】前人成果，【innovate/创新】研究方法，【share/分享】学术见解。他【active/积极】参与学术活动。他【travel/旅行】各地参加会议。

李明开始培养年轻的研究员，传授实验技巧和科研方法。他告诉他们："科研需要热爱和坚持。我们用实验的力量揭示真相，用科学的态度探索未知。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。他【successfully/成功地】培养了多位优秀研究员。年轻研究员都受到他的【inspire/启发】。

科研之路，让李明感受到探索的魅力和发现的价值。他决定继续深耕这个领域，用实验的能力揭示真相，用科学的态度服务人类。这是他选择的道路，也是他热爱的生活。每一次实验，都是一次对真理的追寻。这是他的使命。他【determine/决心】一生【devote/奉献】给科研事业，【discover/发现】更多科学真理，让人类知识更加【rich/丰富】，【build/建立】属于自己的科研传奇。他【firmly/坚定地】相信科学的力量。他【promise/承诺】会一直坚持探索。

某次学术研讨会上，李明分享了他的科研理念："科学是真理的追寻者。我们用实验的力量，揭示自然界的奥秘。"同行们深受启发，开始思考科研的深层意义。他的故事激励着更多科学家追求更高的境界。研讨会现场【applaud/响起掌声】，大家热烈讨论。他用亲身经历证明，坚持的力量可以发现真理，科学的精神可以改变世界。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。科学【industry/行业】需要这样的探索。`,

  '城市建造': `建筑设计工作室里，建筑师王华正【design/设计】着新的城市规划方案。作为一名资深建筑师，她每天都在为城市的发展贡献智慧。每一个建筑都需要【creative/创造性】的设计，每一个空间都可能影响人们的生活。她深知建筑的【responsibility/责任】重大。工作室里【busy/忙碌】，她【focus/专注】地绘制图纸。她【early/早早】来到工作室，准备工作做得非常【well/好】。她【always/总是】保持高度的专业性。

今天的项目主题是设计一座环保建筑。王华注意到传统设计方法还不够【efficient/高效】，需要创新的思路。她反复推敲方案，寻找最佳的设计理念。这是一个需要【careful/细心】打磨的过程。她【never/从不】放弃对完美的追求，【always/总是】力求更好的方案。她【try/尝试】各种布局，【experiment/实验】不同风格。设计【require/需要】灵感与理性。

设计过程中，王华遇到了一个难题。某种结构设计与功能需求冲突，无法同时满足。她【worried/担忧】地思考解决方案，尝试了多种调整方案。最终，她找到了一种创新的结构形式，完美平衡了美观与功能。突破需要坚持。她【patiently/耐心地】研究，【finally/终于】找到了答案。她【excited/兴奋】地应用新方案。设计【perfectly/完美地】呈现理念。

方案完成后，王华开始准备项目汇报。她制作详细的演示材料，向客户展示设计理念。每一个细节都需要考虑周全。准备需要投入。她【careful/仔细】地准备材料，【organize/组织】演示内容。她【nervous/紧张】但同时也【excited/兴奋】。她【spend/花费】大量时间完善方案。

汇报当天，王华站在会议室，向客户展示她的设计方案。客户的认可让她感到欣慰。她的设计获得了高度评价，被认为是创新与实用的完美结合。汇报【successful/成功】。她【nervous/紧张】但【confident/自信】，成功地展示了方案。客户【warm/热情】地反馈。她【proud/自豪】地看着方案通过。项目都【active/积极】推进。

项目结束后，王华感到一种深深的【satisfy/满足】。建筑的成功让她感到欣慰，但她明白，这只是设计生涯的一部分。她【humbly/谦虚地】接受客户的赞扬。成功在此【mark/标记】。她【proud/自豪】地看着设计方案，知道这是创意的回报。她【continue/继续】追求更高的设计境界。每个人都为这个【achieve/成就】感到高兴。

她明白，建筑不仅是职业，更是城市的塑造者。她开始研究各地优秀建筑案例，学习先进的理念和技术。她希望通过设计，让城市更加美好宜居。知识在此传递。她【respect/尊重】经典建筑，【innovate/创新】设计理念，【share/分享】设计心得。她【active/积极】学习新知识。她【travel/旅行】各地考察建筑。

王华开始培养年轻的建筑师，传授设计理念和技术。她告诉他们："建筑需要热爱和责任。我们用创意的力量塑造城市，用专业的技能改善生活。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。她【successfully/成功地】培养了多位优秀建筑师。年轻建筑师都受到她的【inspire/启发】。

建筑梦想，让王华感受到创作的魅力和城市的价值。她决定继续深耕这个领域，用创意的能力塑造城市，用专业的技能改善生活。这是她选择的道路，也是她热爱的生活。每一次设计，都是一次对城市的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给建筑事业，【create/创造】更多经典建筑，让城市更加【beautiful/美丽】与宜居，【build/建立】属于自己的设计传奇。她【firmly/坚定地】相信建筑的力量。她【promise/承诺】会一直坚持设计。

某次建筑论坛上，王华分享了她设计理念："建筑是城市的塑造者。我们用创意的力量，让城市焕发新的生命力。"同行们深受启发，开始思考建筑的深层意义。她的故事激励着更多建筑师追求更高的境界。论坛现场【applaud/响起掌声】，大家热烈讨论。她用亲身经历证明，创意的力量可以塑造城市，建筑的智慧可以改善生活。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。建筑【industry/行业】需要这样的创新。`,

  '丰收希望': `农场的田野上，农民张伟正【prepare/准备】着播种的土地。作为一名职业农民，他每天都在守护着这片土地。每一颗种子都需要【careful/细心】的照料，每一寸土地都承载着丰收的【hope/希望】。他深知农业的【important/重要性】。田野里【quiet/安静】，他【focus/专注】于每一个农活。他【early/早早】来到农场，每天都很【busy/忙碌】。他【always/总是】保持辛勤的工作态度。

今天的任务是种植新品种的作物。张伟注意到土壤条件还不够【ideal/理想】，需要改良处理。他反复测试土壤，调整施肥方案。这是一个需要【patient/耐心】等待的过程。他【never/从不】放弃对丰收的追求，【always/总是】力求更好的产量。他【try/尝试】各种方法，【experiment/实验】不同种植技术。农业【require/需要】科学与经验。

种植过程中，张伟遇到了一个难题。某种害虫开始侵袭幼苗，威胁作物生长。他【worried/担忧】地思考解决方案，尝试了多种防治方法。最终，他找到了一种环保的防治措施，成功控制了害虫。突破需要坚持。他【patiently/耐心地】研究，【finally/终于】找到了答案。他【excited/兴奋】地看到幼苗恢复生长。防治【perfectly/完美地】解决了问题。

作物生长期间，张伟每天都到田间观察。他记录生长数据，及时调整管理措施。每一个变化都需要关注。管理需要投入。他【careful/仔细】地观察作物，【accurate/准确】记录数据。他【nervous/紧张】但同时也【excited/兴奋】。他【spend/花费】大量时间照料作物。

收获季节来临，张伟站在金黄的麦田里，心中充满喜悦。丰收的果实让他感到欣慰。新品种获得了超出预期的产量，证明了科学种植的价值。收获【successful/成功】。他【nervous/紧张】但【confident/自信】，成功地完成了收割。产量【warm/热情】地回应他的努力。他【proud/自豪】地看着丰收成果。周围农户都【active/积极】学习他的方法。

收获结束后，张伟感到一种深深的【satisfy/满足】。丰收的喜悦让他感到欣慰，但他明白，这只是农业耕作的一季。他【humbly/谦虚地】接受邻里的称赞。成功在此【mark/标记】。他【proud/自豪】地看着收获成果，知道这是辛勤的回报。他【continue/继续】追求更高的产量目标。每个人都为这个【achieve/成就】感到高兴。

他明白，农业不仅是职业，更是生命的守护者。他开始学习先进的农业技术，了解科学的种植方法。他希望通过实践，让更多人理解农业的价值。技术在此传递。他【respect/尊重】传统农艺，【innovate/创新】种植方法，【share/分享】种植经验。他【active/积极】学习新知识。他【travel/旅行】各地学习先进技术。

张伟开始培养年轻的农民，传授种植技巧和管理方法。他告诉他们："农业需要热爱和耐心。我们用汗水浇灌土地，用科学的种植守护粮食。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。他【successfully/成功地】培养了多位优秀农民。年轻农民都受到他的【inspire/启发】。

田野守护，让张伟感受到耕作的魅力和丰收的价值。他决定继续深耕这个领域，用汗水浇灌土地，用科学的种植守护粮食。这是他选择的道路，也是他热爱的生活。每一次耕作，都是一次对生命的守护。这是他的使命。他【determine/决心】一生【devote/奉献】给农业事业，【grow/种植】更多优质粮食，让人民生活更加【rich/富足】，【build/建立】属于自己的农业传奇。他【firmly/坚定地】相信农业的力量。他【promise/承诺】会一直坚守田野。

某次农业技术培训上，张伟分享了他种植理念："农业是生命的守护者。我们用汗水浇灌土地，让人民享受丰收的喜悦。"农户们深受启发，开始思考农业的深层意义。他的故事激励着更多农民追求更高的产量。培训现场【applaud/响起掌声】，大家热烈讨论。他用亲身经历证明，坚持的力量可以获得丰收，科学的精神可以改善农业。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。农业【industry/行业】需要这样的坚守。`,

  '道路前行': `交通运输公司里，司机刘强正【prepare/准备】着今天的运输任务。作为一名职业司机，他每天都在道路上奔波。每一次运输都需要【safe/安全】的驾驶，每一位乘客都承载着信任的【hope/希望】。他深知驾驶的【responsibility/责任】重大。车队里【busy/忙碌】，他【focus/专注】于检查车辆。他【early/早早】来到车队，每天都很【busy/忙碌】。他【always/总是】保持高度的责任心。

今天的任务是完成长途客运。刘强注意到路况信息还不够【clear/清晰】，需要提前了解。他仔细查看路线，规划行驶方案。这是一个需要【careful/细心】准备的过程。他【never/从不】放弃对安全的追求，【always/总是】力求更安全的行程。他【try/尝试】各种路线，【choose/选择】最佳方案。驾驶【require/需要】谨慎与经验。

驾驶过程中，刘强遇到了一个难题。道路突发状况，需要临时调整路线。他【worried/担忧】地思考解决方案，尝试了多种绕行方案。最终，他找到了一条安全的替代路线，顺利避开拥堵。突破需要冷静。他【calmly/冷静地】判断，【finally/终于】找到了出路。他【excited/兴奋】地继续前行。绕行【perfectly/完美地】解决了困境。

运输途中，刘强始终保持专注。他观察路况变化，及时调整车速。每一个细节都需要关注。驾驶需要投入。他【careful/仔细】地观察路况，【accurate/准确】判断风险。他【nervous/紧张】但同时也【confident/自信】。他【spend/花费】大量精力保持专注。

抵达终点时，刘强看到乘客安全下车，心中感到欣慰。顺利的运输让他感到满足。乘客们对他专业的驾驶给予了肯定，认为他是一位值得信赖的司机。抵达【successful/成功】。他【nervous/紧张】但【confident/自信】，安全地完成了任务。乘客【warm/热情】地感谢。他【proud/自豪】地看着任务完成。公司都【active/积极】表扬他。

运输结束后，刘强感到一种深深的【satisfy/满足】。安全的完成让他感到欣慰，但他明白，这只是驾驶生涯的一次任务。他【humbly/谦虚地】接受乘客的感谢。成功在此【mark/标记】。他【proud/自豪】地看着安全记录，知道这是责任的回报。他【continue/继续】追求更高的安全标准。每个人都为他的【achieve/成就】感到高兴。

他明白，驾驶不仅是职业，更是安全的守护者。他开始学习先进的驾驶技术，了解交通安全知识。他希望通过学习，让自己成为更专业的司机。技术在此传递。他【respect/尊重】交通规则，【innovate/创新】驾驶方法，【share/分享】安全经验。他【active/积极】学习新知识。他【travel/旅行】各地学习先进技术。

刘强开始培养年轻的司机，传授驾驶技巧和安全意识。他告诉他们："驾驶需要谨慎和责任。我们用专业的技能守护安全，用认真的态度服务乘客。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。他【successfully/成功地】培养了多位优秀司机。年轻司机都受到他的【inspire/启发】。

道路前行，让刘强感受到驾驶的意义和安全的价值。他决定继续深耕这个领域，用专业的技能守护安全，用认真的态度服务乘客。这是他选择的道路，也是他热爱的生活。每一次驾驶，都是一次对安全的守护。这是他的使命。他【determine/决心】一生【devote/奉献】给驾驶事业，【protect/守护】更多乘客安全，让道路更加【safe/安全】与畅通，【build/建立】属于自己的驾驶传奇。他【firmly/坚定地】相信责任的力量。他【promise/承诺】会一直坚持安全。

某次驾驶安全培训上，刘强分享了他驾驶理念："驾驶是安全的守护者。我们用专业的技能，让每一位乘客平安抵达。"同行们深受启发，开始思考驾驶的深层意义。他的故事激励着更多司机追求更高的安全标准。培训现场【applaud/响起掌声】，大家热烈讨论。他用亲身经历证明，坚持的力量可以守护安全，责任的意识可以改善交通。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。交通【industry/行业】需要这样的责任。`,

  '知识守护': `图书馆的阅览室里，管理员陈芳正【organize/整理】着新到的书籍。作为一名图书馆管理员，她每天都在守护知识的殿堂。每一本书都需要【proper/恰当】的分类，每一位读者都承载着学习的【hope/希望】。她深知图书管理的【important/重要性】。图书馆里【quiet/安静】，她【focus/专注】于整理书籍。她【early/早早】来到图书馆，每天都很【busy/忙碌】。她【always/总是】保持高度的责任心。

今天的任务是整理新购的科技类书籍。陈芳注意到某些书籍的分类还不够【accurate/准确】，需要重新审核。她仔细查阅目录，调整分类方案。这是一个需要【careful/细心】处理的过程。她【never/从不】放弃对精准的追求，【always/总是】力求更好的分类。她【try/尝试】各种分类方法，【choose/选择】最佳方案。管理【require/需要】知识与耐心。

整理过程中，陈芳遇到了一个难题。某种古籍的保存状况不佳，需要修复处理。她【worried/担忧】地思考解决方案，尝试了多种修复方法。最终，她找到了一种科学的修复技术，成功保护了古籍。突破需要坚持。她【patiently/耐心地】研究，【finally/终于】找到了答案。她【excited/兴奋】地完成修复。保存【perfectly/完美地】守护了知识。

管理工作中，陈芳始终保持专注。她帮助读者查找资料，解答咨询问题。每一个需求都需要关注。服务需要投入。她【careful/仔细】地回答问题，【accurate/准确】推荐书籍。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间服务读者。

举办阅读推广活动时，陈芳看到读者们热情参与，心中感到欣慰。活动的成功让她感到满足。读者们对图书馆的服务给予了肯定，认为这里是一个知识的宝库。活动【successful/成功】。她【nervous/紧张】但【confident/自信】，成功地举办了活动。读者【warm/热情】地参与。她【proud/自豪】地看着活动完成。媒体都【active/积极】报道。

活动结束后，陈芳感到一种深深的【satisfy/满足】。推广的喜悦让她感到欣慰，但她明白，这只是图书馆服务的一部分。她【humbly/谦虚地】接受读者的认可。成功在此【mark/标记】。她【proud/自豪】地看着阅读推广，知道这是服务的回报。她【continue/继续】追求更高的服务质量。每个人都为这个【achieve/成就】感到高兴。

她明白，图书管理不仅是职业，更是知识的守护者。她开始学习先进的图书管理技术，了解数字化服务方法。她希望通过学习，让图书馆更加现代化。技术在此传递。她【respect/尊重】知识传统，【innovate/创新】服务方法，【share/分享】管理经验。她【active/积极】学习新知识。她【travel/旅行】各地学习先进技术。

陈芳开始培养年轻的管理员，传授管理技巧和服务理念。她告诉他们："图书管理需要热爱和责任。我们用专业的技能守护知识，用认真的态度服务读者。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。她【successfully/成功地】培养了多位优秀管理员。年轻管理员都受到她的【inspire/启发】。

书海航行，让陈芳感受到管理的意义和知识的价值。她决定继续深耕这个领域，用专业的技能守护知识，用认真的态度服务读者。这是她选择的道路，也是她热爱的生活。每一次管理，都是一次对知识的守护。这是她的使命。她【determine/决心】一生【devote/奉献】给图书事业，【protect/守护】更多书籍资源，让读者更加【easy/便捷】获取知识，【build/建立】属于自己的图书馆传奇。她【firmly/坚定地】相信知识的力量。她【promise/承诺】会一直坚守岗位。

某次图书馆培训会上，陈芳分享了她管理理念："图书是知识的守护者。我们用专业的技能，让每一位读者畅游知识的海洋。"同行们深受启发，开始思考图书管理的深层意义。她的故事激励着更多管理员追求更高的服务水平。培训现场【applaud/响起掌声】，大家热烈讨论。她用亲身经历证明，坚持的力量可以守护知识，服务的意识可以传播文明。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。图书【industry/行业】需要这样的守护。`
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

    const num = String(51 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 51 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 51 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事51-55）');
}

main();