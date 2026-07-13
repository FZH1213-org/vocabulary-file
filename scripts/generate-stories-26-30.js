const fs = require('fs');
const path = require('path');

// 故事配置（故事26-30）
const storyConfigs = [
  { theme: '教育', title: '三尺讲台', subtitle: '初次授课', tags: '教育 · 教师 · 成长' },
  { theme: '教育', title: '三尺讲台', subtitle: '学生逆袭', tags: '教育 · 教师 · 成长' },
  { theme: '科技', title: '代码人生', subtitle: '项目攻坚', tags: '科技 · 程序员 · 梦想' },
  { theme: '公益', title: '志愿之光', subtitle: '支教岁月', tags: '公益 · 志愿者 · 爱心' },
  { theme: '建筑', title: '筑梦空间', subtitle: '设计之路', tags: '建筑 · 设计 · 理想' }
];

// 所有故事内容 - 每个故事约50个词汇
const storyContents = {
  '初次授课': `教师办公室里，李雯紧张地翻看着教案。这是她【graduation/毕业】后第一次站在讲台上，面对四十多个学生，心中既【expect/期待】又紧张。作为一名新入职的【teacher/教师】，她深知自己肩负的【responsibility/责任】重大。每一份教案都凝聚着她的心血，她希望能够给学生带来【knowledge/知识】和启发。这是一个【important/重要】的时刻，她必须好好把握这个【opportunity/机会】。

教室里，学生们陆续走进，叽叽喳喳地讨论着暑假的趣事。李雯站在讲台上，用【serious/严肃的】表情环顾四周。学生们注意到新老师的到来，逐渐安静下来。李雯清了清嗓子，开始她的【first/第一】堂课。她希望能够给学生们留下一个良好的【impression/印象】。这份【hope/希望】让她更加认真地对待每一个细节。

"大家好，我是你们的新班主任李雯。"她的声音略显紧张，但眼神中透着【firm/坚定的】决心。"希望在接下来的日子里，我们能一起【progress/进步】，一起成长。"她【believe/相信】自己能够成为一个好老师。

第一堂课的内容是语文课。李雯准备了详细的教学【plan/计划】，希望能够吸引学生的注意力。然而，课堂的【reality/现实】远比她想象的复杂。有些学生在下面窃窃私语，有些学生心不在焉地望向窗外。李雯注意到，这些学生的【attention/注意力】很容易分散。这是一个需要她努力解决的【problem/问题】。

李雯【realize/意识到】，单纯的知识传授是不够的，她需要用更有趣的方式吸引学生。她开始讲述一个与课程相关的故事，学生的眼神逐渐【focus/专注】起来。课堂气氛变得活跃，学生们开始积极提问和讨论。李雯感到很高兴，因为她找到了一个有效的【method/方法】。这个发现给了她很大的【confidence/信心】。

课后，李雯回到办公室，长长地舒了一口气。同事张老师走过来，笑着说："第一堂课总是最具挑战的，你已经做得不错了。"这份鼓励让李雯感到温暖。她决定继续【improve/提升】自己的教学技巧，让每一堂课都更有意义。她相信，只要坚持不懈，一定能取得【success/成功】。同事的【support/支持】对她来说意义重大。

接下来的几周，李雯每天都会花时间【prepare/准备】教案，研究各种教学方法。她发现，每个学生都有独特的【talent/天赋】和学习方式。有的学生喜欢听故事，有的学生喜欢动手实践，有的学生喜欢讨论交流。李雯开始了解每个学生的【interest/兴趣】和特长。这是一个需要耐心和细心的【process/过程】。

她开始尝试不同的教学方式。对于喜欢听故事的学生，她会在课程中融入生动的例子；对于喜欢动手的学生，她会设计互动活动；对于喜欢讨论的学生，她会组织小组讨论。这种多样化的教学让每个学生都能找到自己的学习【rhythm/节奏】，也让课堂充满了活力。她【feel/感受】到教学的乐趣。

某次课堂上，一个平时不爱发言的学生突然举手提问。李雯注意到他眼中的光芒，鼓励他说出自己的想法。学生的回答虽然不够完整，但展现出了独特的思考角度。李雯【praise/表扬】了他的勇气和思考能力。这个学生感到很高兴，因为他的【effort/努力】得到了认可。这是一次成功的【try/尝试】。

课后，这个学生来到李雯的办公桌前，羞涩地说："谢谢老师，我以前不敢在课堂上发言，但您的鼓励让我有了信心。"这个简单的【feedback/反馈】让李雯感受到教师职业的意义——不只是传授知识，更是点燃学生心中的【flame/火焰】。她为自己的【choice/选择】感到骄傲。

学期结束时，李雯收到了学生们写的小纸条。"谢谢老师的耐心教导"、"您是我最喜欢的老师"……每一句话都让她感到无比的温暖和【satisfaction/满足】。这些简单的文字表达了学生对她的感谢和【respect/尊重】。这份【trust/信任】是她最珍贵的收获。

李雯明白，教育是一场漫长的旅程。她决定继续【learn/学习】，不断提升自己的专业能力。她相信，只要用心付出，就能帮助每个学生发现自己的【potential/潜力】，【achieve/实现】自己的梦想。这是一个需要【heart/用心】的事业。

初次授课的经历，成为李雯教师生涯的美好开端。她知道，未来的路上还有无数的挑战和机遇，但她已经找到了前进的方向。这份【experience/经验】让她更加【confident/自信】，也让她对教育充满了热情。每当她回想起第一堂课的紧张和学生们期待的眼神，她都会【smile/微笑】，感谢自己选择了这份有意义的【career/职业】。她对自己的【future/未来】充满了期待。`,

  '学生逆袭': `新学期开始，李雯注意到班级里有一个特别的【student/学生】——王浩。他坐在教室的最后一排，总是低着头，从不在课堂上发言。成绩单上，他的分数是全班最低的。李雯决定深入了解这个学生的【situation/情况】。这是一个需要【care/关心】的孩子。她对这个孩子产生了深深的【concern/关切】。

她联系了王浩的家长，了解到王浩的父母离异，他跟随奶奶生活，家庭【environment/环境】并不理想。奶奶年纪大了，没有能力辅导他学习。王浩逐渐对学习失去了兴趣，成绩越来越差。李雯【feel/感受】到这个孩子需要帮助。她下定决心要【help/帮助】他。

李雯【realize/意识到】，王浩并不是不聪明，而是缺乏关注和鼓励。她决定在课后单独辅导他。每周三次，李雯都会在办公室等王浩，耐心地讲解课本【content/内容】。她【believe/相信】每个孩子都有潜力。这份【faith/信念】支撑着她坚持下去。

起初，王浩的【attitude/态度】有些抗拒。他觉得自己的成绩已经无法改变，老师的努力也是白费。但李雯没有放弃。她用鼓励的眼神看着他，说："每个人都有自己的潜力，我相信你可以做到。"这份【trust/信任】让王浩开始动摇。他开始【think/思考】老师的话。

一次次的辅导中，李雯发现王浩其实很聪明。他的数学思维很清晰，只是基础知识薄弱。李雯从最基础的内容开始，一步步帮他【build/建立】知识体系。这是一个需要【patience/耐心】的过程。她投入了大量的【time/时间】和精力。

两个月后，王浩的成绩开始【improve/提升】。他第一次在课堂上主动举手回答问题，虽然答案不够完整，但他已经展现出思考的能力。李雯在班级面前【praise/表扬】了他的进步，全班同学都为他鼓掌。这个【moment/时刻】让王浩终生难忘。他的眼中充满了【hope/希望】。

这个简单的举动，让王浩的眼神中第一次出现了光芒。他开始认真听讲，课后主动问老师问题。李雯感受到，这个学生正在发生【change/变化】。这种【progress/进步】令人欣慰。王浩的【confidence/信心】逐渐建立起来。

期末考试前，李雯对王浩说："相信自己，你一定能取得好成绩。"王浩点头，眼中充满了【determination/决心】。考试结果公布，王浩的成绩跃升到班级中游，数学更是进入了前十名。这是一个令人振奋的【result/结果】。他取得了惊人的【achievement/成就】。

家长会上，王浩的奶奶握着李雯的手，激动地说："谢谢您，老师，王浩现在回家后会主动学习了。"李雯微笑着回应："这是他自己努力的结果。"这份【joy/喜悦】无法用言语表达。奶奶的脸上露出了【smile/微笑】。

王浩的故事让李雯更加坚信：每个学生都有无限的潜力，只要给予他们足够的关注和鼓励，他们就能【create/创造】奇迹。她决定继续关注每一个学生，帮助他们发现自己的优势。这就是教育的【meaning/意义】所在。她找到了自己的【purpose/目标】。

在这个过程中，李雯也学到了很多。她明白了教育的真谛不仅是传授知识，更是点燃学生内心的【passion/热情】。每个孩子都值得被【respect/尊重】和理解。这是一种宝贵的【insight/领悟】。

学年末，王浩写了一篇作文《我的老师》，文中写道："李老师是我遇到的最特别的老师。她不像其他老师那样只关注成绩，而是真正关心我们每一个人。是她的鼓励让我重新找到了学习的信心。"这篇作文让李雯【feel/感受】到教师的价值。她被这份真诚的【gratitude/感激】打动。

李雯阅读这篇作文时，眼眶湿润了。她明白，教师的【value/价值】不在于传授了多少知识，而在于点亮了多少学生的人生。她决定继续用爱心和耐心，帮助每一个需要帮助的学生，让教育的【light/光芒】照亮更多人的前路。这是一份需要【love/爱心】的事业。她对自己的【choice/选择】感到满意。这让她感到无比的【pride/自豪】。

学生逆袭的故事，成为李雯教学生涯中最珍贵的记忆。她相信，只要坚持用心，就能见证更多学生从平凡走向优秀，从迷茫走向自信。这段【journey/旅程】让她更加坚定了自己的信念，也让她明白了教育的真正【meaning/意义】。每当回想起王浩从低谷走向成功的【process/过程】，李雯都会感到无比的欣慰和自豪，这就是她选择成为老师的初衷。她对这个【career/职业】充满了热爱。她期待看到更多学生的【success/成功】。这是一个美好的【beginning/开始】。`,

  '项目攻坚': `科技公司办公室里，程序员陈伟盯着电脑屏幕，眉头紧锁。项目已经进行了两个月，距离上线只剩一周时间，但核心【module/模块】还存在严重的bug。作为项目的主要负责人，他必须尽快解决这些问题。这是一个巨大的【challenge/挑战】。他感受到了前所未有的【pressure/压力】。

团队成员们同样焦头烂额。他们日夜奋战，试图找到bug的根源。每次修复一个问题，又会冒出新的错误。这种循环让整个团队感到【pressure/压力】巨大。每个人的脸上都写满了【worry/担忧】。这是一个艰难的【period/时期】。

陈伟召集团队开会，严肃地说："我们必须换一个思路，不能再这样被动地修复bug。"他【propose/提议】团队暂停修改，先系统性地分析问题的根源。这是一个明智的【decision/决定】。团队需要新的【approach/方法】。

会议后，陈伟带领团队进行代码审查。他们逐行检查每一部分代码，寻找可能的逻辑漏洞。经过一整天的分析，他们终于发现了一个关键的【issue/问题】——某个核心函数的实现存在设计缺陷，导致多个模块之间的数据不一致。这个发现让大家看到了【hope/希望】。问题终于有了【solution/解决】的方向。

找到问题的根源后，陈伟迅速制定修复方案。他决定重新设计这个函数，并调整相关模块的接口。这意味着大量的代码需要修改，但这是解决问题的唯一【solution/方案】。团队必须【work/努力】。每个人都需要付出更多的【effort/努力】。

接下来的三天，团队进入攻坚状态。每个人都全身心地投入到修复工作中。陈伟作为负责人，除了编写代码，还要协调各个模块之间的配合。他每天工作十几个小时，几乎不离开办公室。这份【effort/努力】令人敬佩。他的【dedication/奉献】感染了大家。

修复过程中，新的问题不断出现。团队成员开始感到疲惫和焦虑。陈伟注意到大家的情绪，他主动与每个人交流，鼓励他们坚持下去。他说："我们已经走了这么远，不能放弃。只要齐心协力，一定能【overcome/克服】这个难关。"他的【confidence/信心】感染了大家。团队的【energy/能量】重新焕发。

第四天深夜，核心模块的修复终于完成。陈伟启动测试程序，所有人的目光都集中在大屏幕上。测试逐项进行，每一个功能都正常运作。当最后一项测试通过的标志出现时，整个团队欢呼起来。这个【moment/时刻】值得铭记。这是他们共同的【success/成功】。

项目经理对陈伟的工作给予高度评价："你的领导力和技术能力让这个项目得以成功。你是团队的【core/核心】力量。"这份认可让陈伟感到深深的成就感。所有的付出都有了【return/回报】。他为自己的【role/角色】感到自豪。

项目上线当天，用户反馈非常积极。产品的稳定性和性能都达到了预期，客户对团队的表现感到满意。陈伟站在窗前，望着城市的夜景，感到无比的【relief/宽慰】。他为自己的团队感到【proud/骄傲】。这是一次完美的【launch/上线】。

他明白，这次项目攻坚的成功不仅源于个人的技术能力，更源于团队的团结协作。每一个成员都付出了巨大的努力，每一个细节都经过了精心的打磨。这种团队【spirit/精神】是成功的关键。这是他们共同的【success/成功】。团队的【collaboration/协作】至关重要。

项目结束后，陈伟整理了完整的文档，记录了整个过程中的经验教训。他决定将这些经验分享给其他团队，帮助他们在未来的项目中避免类似的【trouble/麻烦】。这是一种宝贵的【experience/经验】。他的【knowledge/知识】值得传承。

这次经历让陈伟的职业能力得到了进一步的【improve/提升】。他更加坚信：技术只是基础，团队协作和问题解决能力才是真正的核心竞争力。未来的路上，他将继续追求技术进步，同时培养更强的团队领导力。他有明确的【goal/目标】。他对自己的【development/发展】有清晰的规划。

陈伟也从这次经历中学到了很多。他明白了面对【difficulty/困难】时要保持冷静，要善于倾听团队的意见，要勇于承担责任。这些都是宝贵的【lesson/教训】。他获得了很多的【insight/领悟】。

团队成员们也从这次项目中成长了很多。他们学会了如何在【pressure/压力】下工作，如何更好地协作，如何快速解决问题。这些能力将伴随他们的整个【career/职业】生涯。这是他们宝贵的【growth/成长】经历。

项目攻坚的故事，成为陈伟职业生涯中的重要里程碑。他知道，未来还有更多的挑战等待着他，但他已经准备好迎接每一个新的机遇。每当回想起那几天的紧张与奋斗，他都会感谢那段【experience/经历】，因为它让他成长为一名更优秀的工程师。团队成员们的支持与合作，让他明白了什么是真正的【professional/专业】精神。他对自己的【future/未来】充满了信心。这段【journey/旅程】让他更加成熟。这是一个值得铭记的【milestone/里程碑】。`,

  '支教岁月': `暑假开始，大学生张明背着行囊，踏上了前往山区的旅程。作为一名【volunteer/志愿者】，他报名参加了学校组织的支教活动，即将在偏远山区的小学度过一个【special/特别的】暑假。这是一个充满【meaning/意义】的决定。他对这次【experience/经历】充满期待。

初到山区，张明被眼前的景象震撼了。学校的设施十分简陋，教室的墙壁斑驳，课桌椅破旧不堪。但孩子们的眼神中透着对知识的渴望，这种纯真让张明深受触动。他感受到了【responsibility/责任】的重量。这是一次难忘的【arrival/到达】。

第一天上课，张明走进教室，孩子们好奇地看着这位年轻的老师。他微笑着介绍自己："大家好，我是张明，这个暑假我会教你们语文和英语。"孩子们的眼中闪烁着光芒，他们从未接触过这样的【course/课程】。这是一次全新的【experience/体验】。他开始了自己的【teaching/教学】工作。

张明准备了丰富的教学内容。他不仅教授课本知识，还会讲述外面的世界，让孩子们了解山以外的风景。孩子们听得入迷，每次下课都依依不舍地围着他，问各种问题。他们对外面的世界充满了【curiosity/好奇】。他分享了很多【story/故事】。

某次课堂中，一个小女孩怯怯地问："老师，山外面真的有高楼大厦吗？"张明点头，耐心地描述城市的景象。女孩的眼中充满了向往，她说："我长大后也要去看看。"这句话让张明深受【move/感动】。他感受到了孩子们的【hope/希望】。

这句话让张明意识到，支教不仅是传授知识，更是点燃孩子们心中的梦想。他决定用更多的时间陪伴孩子们，了解他们的想法，鼓励他们追求自己的【ideal/理想】。每个孩子都有自己的【dream/梦想】。他想帮助孩子们【achieve/实现】梦想。

每天的课后，张明都会和孩子们一起游戏，分享彼此的故事。他发现，这些孩子虽然生活条件艰苦，但内心充满了阳光和希望。他们的纯真和坚韧，让张明感受到了生命的【power/力量】。这是一种纯粹的【joy/快乐】。他和孩子们建立了【friendship/友谊】。

支教期间，张明还组织了一次小型运动会。孩子们兴奋地参与各种活动，操场上一片欢声笑语。张明看到，这些孩子需要的不仅是知识，更是关爱和陪伴。这是他最难忘的【memory/记忆】。这是他组织的【event/活动】。

运动会结束后，一个孩子跑过来，紧紧地抱住张明，说："老师，这是我玩得最开心的一天。"这个简单的拥抱，让张明感到无比的温暖。他知道自己的付出得到了【return/回报】。他感受到了孩子们的【affection/喜爱】。

在日常教学中，张明发现有些孩子的学习基础较弱，他便利用课余时间进行个别辅导。他耐心地讲解每一个知识点，直到孩子们完全理解。他希望每个孩子都能【grow/成长】。他付出了很多的【time/时间】。

随着时间的推移，张明和孩子们建立了深厚的感情。孩子们会把自己最珍贵的零食分享给他，会为他采摘山里的野花。这些小小的【gift/礼物】，承载着孩子们最纯真的感谢。这是一种珍贵的【bond/纽带】。

暑假结束，张明即将离开。孩子们为他准备了简单的告别礼物——一张手绘的卡片，上面写着："谢谢老师，我们永远不会忘记您。"张明接过卡片，眼眶湿润。这份【emotion/情感】难以言表。他收到了真诚的【gratitude/感激】。

离开那天，孩子们站在校门口，挥动着小手，直到张明的身影消失在山路的尽头。张明坐在回程的车上，望着窗外连绵的群山，心中充满了感慨。这是一段难忘的【journey/旅程】。他经历了一次深情的【departure/离别】。

他明白，支教不仅是帮助孩子们，也是让自己成长。这段经历让他更加理解了生命的意义，也坚定了继续投身公益的决心。他决定未来还要参加更多的【volunteer/志愿】活动，用自己的力量帮助更多需要帮助的人。他找到了自己的【mission/使命】。

回到学校，张明将支教的故事分享给同学们。他鼓励大家积极参与公益活动，用行动改变世界。他的故事感染了许多人，越来越多的学生报名参加下一次的支教活动。这是他带来的【change/改变】。他产生了积极的【impact/影响】。

支教岁月成为张明人生中珍贵的记忆。他知道，未来的路上还有无数的孩子需要帮助，但他愿意用时间和精力，为他们点亮希望的灯火。这是一条充满意义的道路，他会一直走下去。他找到了自己的【purpose/目标】。他对自己的【life/人生】有了新的认识。

张明也明白了，给予比接受更快乐。帮助他人的过程，也是在帮助自己成长。这份宝贵的【lesson/教训】，将伴随他的一生。他获得了深刻的【wisdom/智慧】。

每当回想起那段时光，张明都会想起孩子们纯真的笑脸和对知识的渴望。那些简单的【moment/时刻】，那些真诚的【conversation/对话】，都成为了他心中最温暖的回忆。他明白了教育的【value/价值】，不在于教授了多少知识，而在于点燃了多少希望。山区的孩子们用他们的纯真和坚韧，教会了张明什么是真正的【courage/勇气】和坚持。这段【journey/旅程】，让他对人生有了全新的理解和感悟。他对自己的【choice/选择】感到骄傲。这是一次难忘的【adventure/冒险】。他收获了宝贵的【wisdom/智慧】和美好的【memory/记忆】。`,

  '设计之路': `建筑设计事务所里，林浩坐在电脑前，仔细【review/审查】着最新的设计图纸。作为一名年轻建筑师，他正在参与一个重要的项目——城市文化中心的设计。这是他入行以来最具【challenge/挑战】的任务。他对这个项目充满了【expect/期待】。他投入了全部的【attention/专注】。

项目的【requirement/要求】很高，需要融合现代元素与传统文化，同时满足功能性和美观性。林浩花了两周时间研究当地的建筑风格和文化背景，试图找到最合适的【design/设计】理念。这是一个需要深思熟虑的【process/过程】。他进行了深入的【research/研究】。

他提出的设计方案初稿在团队讨论中被提出了一些质疑。资深建筑师指出，方案虽然美观，但部分空间利用率不够，功能布局还需要优化。林浩【accept/接受】了意见，开始重新调整设计。他【realize/意识到】这是学习的机会。他珍惜这次【opportunity/机会】。

修改过程中，林浩遇到了不少困难。如何在保留文化特色的同时提高空间利用率？如何让建筑既现代化又不失地域特色？这些问题困扰着他，让他深夜还在办公室里反复【think/思考】。他感到前所未有的【pressure/压力】。这是一个充满【difficulty/困难】的阶段。

某次偶然的机会，林浩在参观古建筑时获得了灵感。他发现传统建筑中的庭院设计巧妙地解决了空间利用和通风采光的问题。他决定将这种理念融入到自己的设计中，创造出既现代又具有传统【flavor/韵味】的空间。这是一个重要的【breakthrough/突破】。他获得了宝贵的【inspiration/灵感】。

新的设计方案完成后，林浩再次提交团队讨论。这次，资深建筑师对方案给予了肯定，认为他在传统文化与现代功能之间找到了很好的平衡。团队成员也开始支持他的方案，提出了更多优化建议。这份【support/支持】让他信心倍增。他感受到了团队的【trust/信任】。

项目进入深化阶段，林浩每天都会来到工地，【supervise/监督】施工进度。他发现，设计图纸上的想法在实际施工中会遇到各种问题。他需要不断调整方案，与工程师、施工方沟通协调。这需要极大的【patience/耐心】。他付出了大量的【time/时间】。

某次施工现场，林浩发现一个细节与设计不符。他立即与施工队沟通，要求按照设计进行调整。这种对细节的严格【require/要求】，确保了最终的成果能够完美呈现设计意图。他追求的是【perfect/完美】。他展现出了严谨的【attitude/态度】。

经过半年的建设，城市文化中心终于完工。林浩站在建筑前，望着自己设计的成果，心中充满了成就感。建筑的外观融合了传统元素和现代材料，内部空间既实用又富有艺术感。这是他努力的【result/结果】。他实现了自己的【goal/目标】。

开幕典礼上，市民们对建筑给予了高度评价。有人说："这座建筑既有现代感，又透着浓厚的文化气息，真是我们的骄傲。"这份认可让林浩感到所有的努力都是值得的。他为自己的工作感到【proud/骄傲】。他收获了巨大的【satisfaction/满足】。

林浩也明白，这个项目的成功离不开团队的合作。设计师、工程师、施工人员，每个人都为这个项目付出了巨大的努力。这种协作精神是项目成功的【key/关键】。他感谢每一位团队成员的贡献。这是团队的【success/成功】。

项目结束后，林浩将这次设计的经验整理成文档，作为未来工作的参考。他明白，建筑设计不只是画图纸，更是对文化、功能、空间的深入理解和创造性表达。这是一次宝贵的【learning/学习】。他获得了丰富的【experience/经验】。

这次经历让林浩的职业能力得到了进一步的【improve/提升】。他更加坚信：建筑是凝固的艺术，承载着人们的情感和记忆。未来的路上，他将继续追求设计的【ideal/理想】，创造出更多有意义的空间。他对自己的【career/职业】充满热情。他对【future/未来】充满信心。

林浩也开始在行业中建立自己的声誉。其他设计师开始关注他的作品，客户对他的设计风格给予认可。这份【success/成功】是他多年努力的回报。他赢得了行业的【respect/尊重】。

他也开始指导年轻的设计师，将自己的经验传授给他们。他告诉他们，设计不仅需要技术，更需要对生活的理解和对文化的尊重。这是他对【next/下一代】的责任。他承担起了【mentor/导师】的角色。

设计之路，成为林浩人生中重要的篇章。他知道，还有无数的建筑等待他去设计，还有无数的空间等待他去创造。他会用专业的能力和用心的态度，为城市留下更多美丽的印记。他有自己的【goal/目标】。他对自己的【path/道路】充满期待。

每当林浩走过自己设计的建筑，他都会想起那段艰辛而充实的时光。从最初的构思到最终的落成，每一步都凝聚着他的心血和汗水。他明白了设计的真正意义——不是为了追求名利，而是为了创造能够改善人们生活质量的【environment/环境】。传统文化与现代美学的完美结合，让他感受到了建筑师的使命。这座文化中心不仅是一个建筑，更是一个承载着城市记忆和精神的文化【symbol/象征】。它见证了林浩从一名新人到成熟设计师的【growth/成长】，也让他对未来充满了更多的期待和憧憬。他对自己的【choice/选择】无悔。这是一段值得铭记的【journey/旅程】。他创造了属于自己的【legend/传奇】。`,
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

    const num = String(26 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 26 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 26 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事26-30）');
}

main();