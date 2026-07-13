const fs = require('fs');
const path = require('path');

// 故事配置（故事36-40）
const storyConfigs = [
  { theme: '金融', title: '华尔街风云', subtitle: '投资之路', tags: '金融 · 投资 · 决策' },
  { theme: '社工', title: '社区守护者', subtitle: '社工使命', tags: '社工 · 社区 · 服务' },
  { theme: '动物保护', title: '生命守护', subtitle: '动物救援', tags: '动物保护 · 救援 · 爱心' },
  { theme: '考古', title: '千年回响', subtitle: '考古发现', tags: '考古 · 历史 · 发现' },
  { theme: '翻译', title: '语言之桥', subtitle: '翻译人生', tags: '翻译 · 文化 · 沟通' }
];

// 所有故事内容 - 每个故事约50个词汇
const storyContents = {
  '投资之路': `投资公司的办公室里，王强【stare/盯着】电脑屏幕上跳动的曲线，眉头紧锁。作为一名专业的投资【analyst/分析师】，他每天都在与【data/数据】打交道。每一个【decision/决策】都可能【affect/影响】数百万资金的流向，每一次判断都承载着客户的【trust/信任】和期待。他深知这份工作的【responsibility/责任】重大。办公室里【quiet/安静】得只能听到键盘的敲击声，他【focus/专注】于每一个细节。

今天的【market/市场】【fluctuate/波动】格外剧烈。王强注意到，某个【industry/行业】的股票出现了【abnormal/异常】的下跌趋势。他开始仔细分析背后的【reason/原因】，查阅相关的财务报表和新闻资讯。他发现，这次下跌可能是一个投资【opportunity/机会】，也可能是一个【trap/陷阱】。他需要【careful/谨慎】判断。每一分钟都很【critical/关键】，他不敢【ignore/忽略】任何细节。

他决定深入【research/研究】这家公司的基本面。通过分析财务数据、行业趋势和竞争格局，他逐渐看清了情况。这家公司虽然【temporarily/暂时】面临困难，但核心【competitiveness/竞争力】依然存在。他相信，只要度过这个难关，公司就会重新【rise/崛起】。这是一个需要耐心等待的机会。他【clearly/清楚地】看到了其中的价值。这项研究【require/需要】大量的时间和【effort/努力】。

王强撰写了一份详细的【analysis/分析】报告，提出了投资建议。他的观点在团队会议上引发了激烈的讨论。有人认为风险太大，有人支持他的判断。最终，团队决定进行小规模的【explore/试探】性投资。这是一个审慎的决定。会议上，大家【debate/辩论】得很激烈，最终达成了【consensus/共识】。

几个月后，市场开始回暖，这家公司的股价果然开始回升。投资获得了可观的【return/回报】，客户对团队的表现感到满意。这次成功让王强感到欣慰，但他明白，投资永远充满了【uncertainty/不确定性】。市场变幻莫测。他【humbly/谦虚地】接受了大家的【congratulate/祝贺】。

他开始更加深入地学习投资【theory/理论】，研究各种分析方法和风险管理策略。他知道，在这个领域里，只有不断学习，才能在变幻莫测的市场中立足。每一次投资决策，都是一次对【humanity/人性】和理性的考验。贪婪和恐惧是最大的敌人。他【spend/花费】了大量时间阅读经典著作。

某次投资会议上，王强分享了他的心得："投资不仅是分析数据，更是理解人性。市场的波动往往【reflect/反映】着人们的恐惧和贪婪。只有保持冷静和理性，才能做出正确的判断。"他的观点得到了资深投资人的认可。大家都深受【inspire/启发】。会议室里【applaud/响起掌声】。

投资之路上，王强遇到过不少【setback/挫折】。有些投资决策没有达到预期，有些市场变化超出了预判。但他从不气馁，而是从每一次失败中【absorb/吸取】教训，不断优化自己的分析框架和决策流程。失败是成功之母，他坚信这一点。他【firmly/坚定地】相信自己的选择。

他明白，投资是一门需要终身学习的艺术。市场在变化，技术在进步，新的投资工具和策略不断涌现。他决定继续深耕这个领域，用专业的能力为客户创造价值，用理性的【attitude/态度】应对市场的挑战。学习永无止境。他【continue/继续】追求卓越。

投资之路充满挑战，但王强愿意一直走下去。他相信，只要坚持学习和思考，就能在这个充满机遇和风险的领域中找到自己的【position/位置】。每一次决策，都是对智慧和勇气的考验。他将【bravely/勇敢地】前行，【achieve/实现】自己的目标。他【know/知道】这条路【worth/值得】所有的付出，也会让他【become/成为】一个更好的分析师。`,

  '社工使命': `社区服务中心的办公室里，社工李芳正在【organize/整理】社区居民的档案。作为一名社会工作者，她已经在这个社区工作了五年。每一天，她都要面对各种各样的【issue/问题】：邻里纠纷、家庭矛盾、老年人照料、青少年成长。她的工作就是帮助这些人解决困难，让社区更加【harmonious/和谐】。她热爱这份工作，每天都带着【energy/精力】和热情【arrive/到达】工作岗位。这份工作让她感到【fulfill/充实】，她【love/热爱】与人交流。

今天，她接到了一个紧急的求助电话。一位独居老人突然生病，需要立即送往医院。李芳迅速【contact/联系】了社区医疗机构，同时赶往老人的家中。她帮助老人收拾必要的物品，【accompany/陪同】前往医院，协助办理入院手续。时间紧迫，她行动迅速。老人【grateful/感激】地握着她的手。她【immediately/立即】行动，从不犹豫，这是她的【style/风格】。

在医院里，李芳细心地【inquire/询问】老人的病情，了解他的家庭情况和医疗需求。她发现，老人不仅身体需要照顾，心理上也感到孤独。李芳决定在治疗期间【regularly/定期】探访，陪伴老人度过这段艰难的时光。心灵的关怀同样重要。她【patiently/耐心地】倾听老人的【complain/抱怨】和担忧，给予他【warm/温暖】的陪伴和【support/支持】。

回到社区，李芳继续处理其他的求助事项。一位单亲妈妈因为工作压力过大，无法照顾孩子。李芳帮她联系了社区托管服务，同时推荐她参加心理辅导【course/课程】。一位失业的青年找不到工作方向。李芳帮他分析职业规划，推荐适合的培训项目。每个人都有不同的需求。她【carefully/仔细地】为每个人【provide/提供】帮助。她【quickly/迅速】处理各种事务，【skillfully/熟练地】应对每个【case/案例】。

每一项工作都需要耐心和细心。李芳知道，社工不仅是解决问题，更是建立信任和理解。她用【sincere/真诚】的态度对待每一位求助者，用专业的知识帮助他们找到解决方案。她明白，每个人都有自己的故事和困境。倾听是第一步。她总是【willing/愿意】【share/分享】他人的负担，用【gentle/温和】的方式【communicate/沟通】。她【deeply/深深地】理解他们的感受。

某次社区活动中，李芳组织了一场邻里联谊会。她希望借此机会，增进居民之间的了解和友谊。活动现场气氛热烈，居民们积极参与，分享各自的【experience/经历】。李芳看到，社区正在变得更加温暖和融洽。凝聚力在增强。大家都【happily/愉快地】参与其中，【active/积极】地交流。每个人脸上都【show/露出】笑容。

她明白，社工的价值不仅是帮助个人，更是建设社区。她积极推动各种社区项目：老年人关爱计划、青少年成长支持、环境保护行动。每一个项目都是为了让社区变得更加【beautiful/美好】。她用自己的行动诠释着服务的意义。改变从小事开始。她【believe/相信】积少成多的力量，【try/努力】带动更多人参与。

工作中，李芳也遇到过不少挑战。有些问题复杂棘手，有些居民态度消极。但她从不放弃，而是用更大的耐心和毅力去面对每一个困难。她相信，只要坚持付出，就一定能带来改变。每一次成功都让她感受到工作的价值。坚持是关键。她【always/总是】保持【optimistic/乐观】的心态，【never/从不】轻易放弃。

她开始【cultivate/培养】年轻的社工，传授自己的经验和方法。她告诉他们："社工不仅是职业，更是使命。我们用行动传递温暖，用专业帮助他人。"她的故事激励着更多人投身社工事业。她希望更多人能够理解社工的重要性。传承是责任。她【proud/自豪】地看着学生们成长，【hope/希望】他们能传承这份精神。

社工使命，成为李芳人生中最珍贵的部分。她知道，还有很多居民需要帮助，还有很多问题等待解决。她会继续用爱心和专业，守护这个社区的每一个角落。每一天的工作都充满了意义和希望。这是她的选择。她【determine/决心】一生【devote/奉献】给这份事业，【create/创造】更美好的社区环境，让每个人都能够【live/生活】得更幸福，【build/建立】一个充满【love/爱】的社区。`,

  '动物救援': `动物救助站的院子里，志愿者张伟正在给一只受伤的小狗【feed/喂食】。作为一名动物保护志愿者，他已经在这里工作了三年。每一只被【rescue/救助】的动物，都有着自己的故事，每一个故事都让他感受到【life/生命】的脆弱和珍贵。他深深地爱着这份工作。每一个生命都值得【respect/尊重】。每天早上，他都会【early/早早】来到救助站开始一天的工作，【careful/细心】地照顾每一只动物。他【gently/温柔地】抚摸着小狗，给予它【comfort/安慰】。

今天早上，救助站接到了一个紧急电话。一只流浪狗在马路上被车撞伤，需要立即【treat/救治】。张伟迅速赶到现场，小心翼翼地将受伤的小狗抱上车，送往合作医院。医生【examine/检查】后发现，小狗的腿部骨折，需要手术治疗。张伟在手术室外焦急地等待。生命在此刻显得如此脆弱。他【nervous/紧张】地来回【pace/踱步】，心中充满了【worry/担忧】。

张伟在医院等待手术结果时，心中充满了担忧。他知道，这只小狗只是众多流浪动物中的一员。每年，都有无数的动物因为各种原因失去家园，流落街头。他和志愿者们努力救助，但力量毕竟有限。他希望能够唤起更多人的【attention/关注】。流浪动物需要帮助。这个问题【exist/存在】已久，需要【solve/解决】方案。他【deeply/深深】感受到了问题的【serious/严重】性。

手术后，张伟将小狗带回救助站，细心照料。他每天为它换药、喂食、陪伴。小狗逐渐恢复了健康，开始对人类重新建立信任。张伟看着小狗明亮的眼睛，感到一种深深的【satisfy/满足】。他知道自己的付出是有意义的。信任重新建立。小狗【gentle/温柔】地蹭着他的腿，表示感谢。这一刻让他感到无比【warm/温暖】。

救助站里，还有很多其他的动物：被遗弃的猫咪、走失的鸟类、受伤的兔子。每一只动物都需要关爱和【treatment/治疗】。张伟和团队为它们寻找新的家庭，组织领养活动，宣传动物保护理念。他希望通过教育改变人们的观念。每一个生命都需要家。救助站里总是【busy/忙碌】，但每个人都很【happy/开心】。他们【together/一起】为动物们创造更好的生活。

某次领养活动中，一位女士看中了一只残疾的猫咪。这只猫咪因为脊椎问题，后腿无法行走。女士没有因为残疾而嫌弃，反而决定【adopt/收养】它。她说："每一只动物都值得被爱，无论它们是否完美。"这份爱心让张伟深受感动。他看到了人性的善良。爱没有条件。女士的【kind/善良】让他看到了希望，也让他【realize/意识到】教育的【power/力量】。

他明白，动物保护不仅是救助，更是教育。他开始走进学校和社区，讲述动物保护的重要性。他告诉人们，动物也有感受和权利，人类应该尊重和善待它们。每一次演讲，都能引起一些人的思考和改变。他相信教育是最有效的途径。教育能改变观念。他经常【receive/收到】学校和社会组织的【invite/邀请】，分享他的【story/故事】和【experience/经历】。

工作中，张伟也遇到过不少困难。资金短缺、人员不足、场地有限，每一个问题都让救助工作变得更加艰难。但他从未动摇，而是用更大的热情去面对每一个挑战。他相信，只要坚持，就一定能带来改变。困难是暂时的。坚持就是力量。他从不【easily/轻易】【give up/放弃】，总是【find/寻找】新的【method/方法】来解决问题。

他开始培养新的志愿者，传授动物救助的知识和技能。他告诉他们："每一只动物都是生命，都有生存的权利。我们用行动守护它们，用爱心温暖它们。"他的精神感染了更多人，志愿者团队逐渐壮大。这给了他继续前进的动力。传承让力量延续。越来越多的人【join/加入】到这个【cause/事业】中，【share/分享】他的信念。他们【work together/共同努力】，为动物【fight/争取】更好的【future/未来】。

动物救援，成为张伟生活中最重要的部分。他知道，还有无数的动物需要帮助，还有很长的路要走。但他愿意一直坚持下去，为每一个生命带去希望和温暖。这份工作让他感受到了生命的真谛。这是他的使命。他【promise/承诺】会一直守护这些【innocent/无辜】的生命，【build/建立】一个更加【kind/友善】的世界。他【hope/希望】每个人都能【realize/认识到】动物的价值，【choose/选择】善待每一个生命。`,

  '考古发现': `考古研究所的实验室里，研究员陈文正在【clean/清理】一块刚出土的陶片。作为一名专业的考古学家，他已经在这个领域工作了十年。每一件【artifact/文物】都是历史的见证，每一片碎片都可能讲述着千年的故事。他对待每一件文物都充满了敬畏之心。历史在此凝固。他【careful/小心】地用工具【remove/移除】陶片上的泥土，每一个【action/动作】都十分【gentle/轻柔】。他【serious/认真地】对待每一项工作，从不【rush/匆忙】。

这次挖掘任务开始于一个月前。某建筑工地在施工时意外发现了古墓的【trace/痕迹】，考古队迅速赶到现场进行抢救性发掘。陈文带领团队小心翼翼地挖掘，记录每一个细节，保护每一件文物。他们工作在烈日下，从不懈怠。时间紧迫，必须尽快完成。每个人都知道这项工作的【important/重要】性。大家【work/工作】得非常【serious/认真】，每个人都【tirelessly/不知疲倦地】【dig/挖掘】。

墓室的规模超出了预期。通过初步分析，这是一座唐代的贵族墓葬。墓中出土了大量的陶器、铜器和玉器，每一件都制作精美，保存完好。陈文意识到，这次发现可能改写对这一时期历史的认知。他感到无比的兴奋和责任。历史在此重现。这些【valuable/珍贵】的文物需要【protect/保护】，他感到肩上的【burden/责任】很重。

清理工作持续了数周。陈文和团队在墓室中发现了壁画、墓志铭和随葬品。墓志铭上的文字【reveal/揭示】了墓主人的身份——一位在史书中鲜有记载的唐代官员。这个发现让陈文兴奋不已。每一个新发现都是对历史的补充。历史在此被填补。他们【discover/发现】了许多【unknown/未知】的历史细节，每【piece/块】碎片都【tell/讲述】着不同的故事。

他开始研究墓志铭的内容，结合其他文物，还原墓主人的生平。通过对比历史文献，他发现这位官员曾在某个重要的历史事件中扮演关键角色。这一发现填补了历史记录的空白。他感到自己的工作意义非凡。历史在此被还原。这项研究需要大量的【compare/对比】和分析，他【spend/花费】了很多时间在图书馆里。

实验室里，陈文对文物进行科学分析。通过碳十四测年、成分分析等方法，他进一步确认了墓葬的年代和文物的来源。每一项检测都提供了新的信息，让他对这段历史有了更深入的【understand/理解】。科学的方法让考古更加精准。科学在此助力。先进的【technology/技术】让考古工作更加高效，也【provide/提供】了更多的【evidence/证据】。

他撰写了详细的发掘报告，记录了整个挖掘过程和研究成果。报告提交给学术界后，引发了广泛的讨论。同行们对这次发现的重要性给予了高度评价，认为这是近年来最重要的考古成果之一。他的努力得到了认可。学术在此交流。许多学者都【praise/赞扬】他的专业【level/水平】，他【receive/收到】了许多【congratulate/祝贺】。这份报告【become/成为】学术界的重要【document/文献】。

考古发现的意义不仅在于文物本身，更在于它们承载的历史信息。陈文开始筹备展览，希望让公众了解这段历史，感受考古的魅力。他相信，考古不仅是学术研究，更是文化传承。他希望更多人能够关注历史。文化在此传播。展览将向公众【show/展示】这些【amazing/令人惊叹】的文物，让更多人【learn/了解】过去的【glory/辉煌】。

工作中，陈文也遇到过不少挑战。野外发掘条件艰苦，研究过程漫长而复杂。但他从未动摇，而是用更大的热情投入每一项工作。他知道，每一件文物都承载着先人的智慧和文明的记忆。这份责任让他更加努力。坚持在此体现。他【often/经常】在实验室工作到深夜，从不【complain/抱怨】辛苦。

考古发现，让陈文感受到历史的厚重和文化的魅力。他决定继续深耕这个领域，用专业的能力守护文化遗产，用科学的方法揭示历史真相。这是他的使命，也是他的追求。每一次发掘都是一次穿越时空的对话。这是他的选择。他【proud/自豪】地【continue/继续】他的考古之路，为后人【preserve/保存】这些珍贵的历史【memory/记忆】，【hope/希望】能【discover/发现】更多被时间掩埋的【secret/秘密】，【leave/留下】宝贵的遗产给下一代。`,

  '翻译人生': `翻译公司的办公室里，译员苏雅正在对一份复杂的合同进行翻译。作为一名专业的翻译，她每天都在【language/语言】之间穿梭，用文字搭建文化的桥梁。每一个词句都需要【precise/精准】的表达，每一种文化都需要细致的理解。她对待每一个字都十分认真。翻译需要严谨。她【always/总是】保持着高度的【focus/专注】，【careful/仔细】检查每一个细节。

这份合同涉及多个国家的法律条款，专业术语众多。苏雅需要准确理解原文的法律含义，同时用目标语言的法律术语进行表达。她查阅了大量的参考资料，咨询了法律专家，确保每一个条款都翻译准确。她深知翻译的【responsibility/责任】重大。每一个字都重要。她【spend/花费】了数小时【research/研究】每个【difficult/困难】的术语，【never/从不】允许自己有丝毫马虎。

翻译不仅是语言转换，更是文化传递。苏雅在翻译一部文学作品时，深深感受到了这一点。原著中有很多文化特定的表达，直译无法传达原文的韵味。她需要在目标语言中找到对应的表达，让读者感受到原著的魅力。这是一项充满挑战的工作。文化在此传递。她必须【creative/创造性】地处理每一个【culture/文化】差异，【bridge/架起】不同文化之间的【gap/鸿沟】。

她花费了大量时间研究作者的背景和作品的文化语境。她阅读了相关的文学评论，了解其他译者的处理方式。最终，她找到了一种既保留原著风格又符合目标语言习惯的翻译方法。每一次突破都让她感到【satisfy/满足】。研究在此深入。她【proud/自豪】于自己的【achieve/成就】，也【know/知道】这只是开始。她【continue/继续】【read/阅读】更多的【material/材料】，提升自己。

翻译过程中，苏雅也遇到了不少挑战。有些词汇在目标语言中没有完全对应的表达，有些句式结构差异巨大。她需要发挥创造力，找到最合适的解决方案。每一次困难都是一次学习和成长的机会。她从不畏惧挑战。创造在此展现。她【bravely/勇敢地】面对每一个【challenge/挑战】，【try/尝试】各种可能的【method/方法】。

她开始参与国际会议的口译工作。口译需要快速反应和准确表达，压力比笔译更大。她在会议前做了充分的准备，熟悉会议的主题和专业术语。会议中，她准确流畅地进行翻译，帮助不同语言的人顺利沟通。她的表现得到了与会者的赞赏。沟通在此实现。她【nervous/紧张】但【confident/自信】地完成了任务，【successfully/成功地】【build/建立】了自己的【reputation/声誉】。

口译工作让苏雅感受到了翻译的直接影响力。她的翻译能够促进国际合作，推动文化交流。每一次成功的翻译，都让她感到一种深深的成就感。她明白，翻译不仅是职业，更是使命。这份工作让她的人生充满意义。价值在此体现。她【realize/意识到】自己的工作对【global/全球】交流的【important/重要】贡献，也【feel/感受到】其中蕴含的【power/力量】。

她开始培养年轻的翻译，传授自己的经验和方法。她告诉他们："翻译需要语言能力和文化素养。不仅要准确理解原文，更要用目标语言自然表达。"她的指导帮助了许多新人成长。看到他们的进步，她感到无比欣慰。传承在此延续。她【patient/耐心】地【explain/解释】每一个细节，【encourage/鼓励】他们勇敢尝试，【share/分享】自己的经验。她【happily/愉快地】【teach/教授】每一个愿意学习的学生。

翻译人生，让苏雅感受到语言的魅力和文化的博大。她决定继续深耕这个领域，用专业的能力搭建沟通的桥梁，用细致的态度传递文化的精髓。这是她选择的道路，也是她热爱的生活。每一天都充满了新的挑战和收获。这是她的热爱。她【determine/决心】一生【devote/奉献】给翻译【career/事业】，让不同【nation/民族】的人能够更好地【understand/理解】彼此，为世界带来更多的【harmony/和谐】与【peace/和平】。她【believe/相信】语言能够【change/改变】世界，让【connection/连接】更加紧密。`
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

    const num = String(36 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 36 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 36 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事36-40）');
}

main();