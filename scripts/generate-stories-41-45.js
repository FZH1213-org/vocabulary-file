const fs = require('fs');
const path = require('path');

// 故事配置（故事41-45）
const storyConfigs = [
  { theme: '电影', title: '光影梦想', subtitle: '导演之路', tags: '电影 · 创作 · 艺术' },
  { theme: '美食', title: '味觉盛宴', subtitle: '美食之旅', tags: '美食 · 烹饪 · 味道' },
  { theme: '航天', title: '星辰大海', subtitle: '航天梦想', tags: '航天 · 探索 · 宇宙' },
  { theme: '音乐', title: '琴声飞扬', subtitle: '音乐人生', tags: '音乐 · 艺术 · 表达' },
  { theme: '心理', title: '心灵港湾', subtitle: '心理疗愈', tags: '心理 · 治愈 · 成长' }
];

// 所有故事内容 - 每个故事约50个词汇
const storyContents = {
  '导演之路': `电影工作室里，导演林晨正【stare/凝视】着监视器上的画面，眉头紧锁。作为一名独立电影【director/导演】，他正在拍摄自己的第一部【feature/长片】。每一个【shot/镜头】都承载着他的【dream/梦想】和期待，每一帧画面都需要精心的【design/设计】。他深知这部作品的【important/重要性】。工作室里【quiet/安静】，他【focus/专注】于调整灯光和构图。他【early/早早】来到工作室，每天都很【busy/忙碌】。

今天的拍摄进展【smoothly/顺利】。林晨注意到，演员的表演还不够【natural/自然】，需要更细腻的情感【express/表达】。他走到演员身边，耐心地讲解角色的内心世界，帮助他们理解人物的动机和情感。这是一个需要【careful/细心】打磨的过程。他【never/从不】放弃对完美的追求，【always/总是】力求更好。演员们都被他的【passion/热情】所感染，愿意跟随他的【lead/引领】。

拍摄结束后，林晨回到剪辑室开始后期制作。他需要从数百小时的素材中【select/挑选】出最精彩的片段，用专业的剪辑技巧【build/构建】完整的叙事结构。剪辑是一门【complex/复杂】的艺术，需要节奏感和创造力。他【spend/花费】了大量时间调整画面，确保每一个【scene/场景】都流畅自然。这项工作【require/需要】极大的耐心和【skill/技能】。

影片的主题是关于人生的【choice/选择】和坚持。林晨希望通过这个故事，让观众思考自己的人生道路。他相信，电影不仅是娱乐，更是引发思考的媒介。每个观众都能从中看到自己的影子。他【creative/创造性地】处理故事，【bridge/架起】角色与观众之间的情感【bridge/桥梁】。他【deeply/深深地】理解观众的【need/需求】。

某次深夜剪辑时，林晨遇到了创作瓶颈。故事的结构还不够完美，某些情节的衔接显得生硬。他【frustrated/沮丧】地放下鼠标，走到窗前望着夜空。这时，一段回忆涌上心头，让他找到了新的灵感。他【suddenly/突然】明白了故事的核心。突破在此【happen/发生】。他【excited/兴奋】地回到工作台，重新开始。

他重新调整了故事的结构，增加了几个关键的情感节点。新的版本让人物更加立体，情节更加动人。他感到一种深深的【satisfy/满足】。创作终于有了突破。他【proud/自豪】地看着最终版本，知道这是自己的心血结晶。他【continue/继续】完善细节，追求极致。团队成员都为他的【achieve/成就】感到高兴。

电影完成后，林晨开始参加各种电影节。他的作品在某个国际电影节上获得了评委的认可，被评为最佳新人导演奖。这个【achieve/成就】让他感到欣慰，但他明白，这只是开始。他【humbly/谦虚地】接受了大家的祝贺。成功在此【arrive/到来】。他的【reputation/声誉】开始建立起来，更多人开始认识他。

他开始筹备下一部作品。这次他想尝试不同的题材和风格，挑战自己的创作边界。他知道，导演之路永无止境，每一次创作都是新的【journey/旅程】。他【excited/兴奋】地构思新想法。探索在此【continue/继续】。他【firmly/坚定地】相信自己的能力。

导演之路充满挑战，但林晨愿意一直走下去。他相信，只要坚持创作，就能用光影讲述动人的故事，触达观众的心灵。每一部作品，都是对生活和人性的深刻思考。他将【bravely/勇敢地】前行，【realize/实现】自己的艺术理想。他【know/知道】这条路【worth/值得】所有的付出，也会让他【become/成为】一个更成熟的导演。他【promise/承诺】会一直坚持创作。

某次观众见面会上，林晨分享了他的创作心得："电影是导演与观众的心灵对话。我们用画面和声音，讲述着生活的真相。"观众们被他的话语深深打动。他的故事激励着更多年轻人追逐电影梦。会议室里【applaud/响起掌声】。他【inspire/启发】了无数追梦人，用自己的经历证明，坚持终会【succeed/成功】。每个人都【warm/热情】地与他交流。`,

  '美食之旅': `餐厅的厨房里，厨师张敏正【prepare/准备】着今天的食材。作为一名追求极致的厨师，她对每一道菜品都有着严格的要求。食材的【fresh/新鲜】度、火候的【control/控制】、调味的【balance/平衡】，每一个细节都【affect/影响】着最终的味道。她深知烹饪的【responsibility/责任】重大。厨房里【busy/忙碌】，她【focus/专注】地处理着每一样食材。她【careful/仔细】地检查，确保一切完美。每天早上她都会【early/早】来到厨房，【organize/整理】所有工具。她总是第一个【arrive/到达】。

今天的菜单是一道创新菜品。张敏决定将传统菜系与现代技法结合，创造全新的味觉体验。她经过多次【experiment/实验】，终于找到了最佳的配比。这道菜既保留了传统的风味，又带有现代的惊喜。创新需要勇气。她【creative/创造性地】搭配食材，尝试各种【method/方法】。她【confident/自信】地展示自己的想法，【patiently/耐心地】等待大家的反馈。她【believe/相信】创新的价值。

烹饪过程中，张敏遇到了一个难题。某种食材的【process/处理】方式影响了整体的口感。她【worried/担忧】地思考着解决方案，查阅了大量资料，咨询了同行前辈。最终，她发现了一种特殊的处理技巧，完美解决了这个问题。突破需要坚持。她【patiently/耐心地】研究，【finally/终于】找到了答案。她【happily/开心】地接受了这个挑战。这个问题让她【learn/学到】了很多。

菜品完成后，张敏请同事们品尝。大家对这道创新菜给予了【high/高度】评价，认为味道层次丰富，口感独特。张敏感到一种深深的【satisfy/满足】。创作的努力得到了回报。她【happy/开心】地接受赞誉，也【know/知道】还有进步空间。她【continue/继续】改进，追求完美。每个人都【enjoy/享受】这道美食。同事们纷纷【congratulate/祝贺】她。

她开始参加各种烹饪比赛，展示自己的作品。在一次国际厨艺大赛中，她的菜品获得了评委的认可，被评为最佳创意奖。这个荣誉让她感到【proud/骄傲】，但她明白，烹饪之路永无止境。她【humbly/谦虚地】接受掌声。成就在此【mark/标记】。比赛让她【realize/认识到】自己的潜力。她【successfully/成功地】完成了比赛。

张敏明白，烹饪不仅是技艺，更是文化传承。她开始研究各地的传统菜系，了解背后的历史和文化。每一道传统菜都有着自己的故事，承载着地方的记忆和情感。她希望通过创新，让传统美食焕发新的生命力。文化在此传递。她【deeply/深深地】理解美食的价值，【respect/尊重】传统。她【active/积极】地推广地方美食。她【travel/旅行】各地学习传统技艺。

她开始培养年轻的厨师，传授自己的经验和方法。她告诉他们："烹饪需要热爱和耐心。每一道菜都是对食材和食客的尊重。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【encourage/鼓励】他们创新，【share/分享】自己的心得。她【willing/愿意】倾囊相授。她【successfully/成功地】培养了多位优秀厨师。

美食之旅，让张敏感受到烹饪的魅力和创造的快乐。她决定继续深耕这个领域，用精湛的技艺呈现美味，用创新的理念传承文化。这是她选择的道路，也是她热爱的生活。每一道菜品，都是一次艺术的创作。这是她的使命。她【determine/决心】一生【devote/奉献】给烹饪事业，【create/创造】更多令人惊艳的美食，让更多人能够【experience/体验】味觉的奇迹，【build/建立】属于自己的美食传奇。她【firmly/坚定地】相信美食的力量。

某次美食讲座上，张敏分享了她的人生感悟："美食是连接人与人的桥梁。我们用味道传递情感，用烹饪表达热爱。"听众们深受启发，开始重新思考美食的意义。她的故事激励着更多人投身烹饪事业。讲座现场【warm/温暖】，大家【happily/愉快地】交流。她用自己的经历证明，热爱是最好的老师，坚持终会带来回报。每个人都被她的故事【inspire/启发】。`,

  '航天梦想': `航天研究所的实验室里，工程师陈明正【analyze/分析】着最新的飞行数据。作为一名航天工程师，他负责设计新型航天器的关键系统。每一个参数都需要精确计算，每一个设计都承载着探索宇宙的【dream/梦想】。他深知这份工作的【responsibility/责任】重大。实验室里【quiet/安静】，他【focus/专注】地研究着每一组数据。他【serious/认真地】对待每个细节。他每天都很【busy/忙碌】。

这次项目的目标是设计一款能够长期在太空运行的航天器。陈明和团队面临着巨大的挑战：如何保证系统在极端环境下的稳定运行，如何解决能源供应和生命维持的问题。这需要跨学科的知识和创新的思维。挑战在前方。他【careful/仔细】地设计方案，考虑各种可能性。团队【work/工作】得非常努力。大家都【active/积极】参与讨论。

设计过程中，陈明遇到了一个技术难题。某个关键系统的【reliable/可靠性】达不到预期标准。他【worried/担忧】地反复计算，尝试了多种方案，但始终无法突破。就在他快要放弃时，一次意外的发现让他找到了新的思路。创新需要坚持。他【patiently/耐心地】研究，【finally/终于】找到了答案。他【excited/兴奋】地分享这个发现。这个突破让他感到【relieve/释然】。

他改进了系统的设计，引入了新的材料和技术方案。经过反复测试，新系统的性能达到了预期目标。团队对这个突破感到振奋，项目的进展向前迈进了一大步。陈明感到一种深深的【satisfy/满足】。突破在此【happen/发生】。他【proud/自豪】地看着测试结果，知道这是团队的胜利。他【continue/继续】优化设计，追求完美。团队【successfully/成功地】完成了这一阶段。每个人都为这个【achieve/成就】感到骄傲。

航天器制造完成后，陈明参与了发射准备工作。发射前的检查和测试紧张而细致，每一个细节都不能遗漏。发射当天，他站在控制室里，心跳加速地等待着倒计时。当火箭升空的瞬间，他感到无比的自豪。梦想在此起飞。他【nervous/紧张】但【confident/自信】，【watch/注视】着历史时刻。整个团队都【excited/激动】不已。发射【successfully/成功地】完成。

航天器成功进入轨道，开始执行预定任务。各项系统运行正常，数据传输稳定。这个成功让整个团队感到欣慰，多年的努力终于得到了回报。陈明明白，这只是探索的开始。他【humbly/谦虚地】接受大家的祝贺。成功在此【mark/标记】。项目【officially/正式】进入运行阶段。这个【milestone/里程碑】意义重大。

他开始参与下一阶段的研究工作。这次的目标是设计更先进的深空探测器，探索更远的宇宙。他知道，航天之路永无止境，每一次任务都是新的挑战。他【excited/兴奋】地投入新项目。探索在此【continue/继续】。团队【active/积极】地规划未来任务。他【firmly/坚定地】相信团队的能力。

陈明开始培养年轻的工程师，传授自己的经验和方法。他告诉他们："航天是人类的共同梦想。我们用科学的力量，探索未知的宇宙。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。他【successfully/成功地】建立了人才培养体系。年轻工程师们都受到他的【inspire/启发】。

航天梦想，让陈明感受到探索的意义和科学的魅力。他决定继续深耕这个领域，用专业的知识推动航天技术发展，用创新的思维探索宇宙奥秘。这是他的使命，也是他的追求。每一次突破，都是对人类智慧的证明。这是他的选择。他【determine/决心】一生【devote/奉献】给航天事业，【explore/探索】未知的宇宙空间，为人类的未来【open/打开】新的可能，【build/建立】通往星辰的桥梁。他【firmly/坚定地】相信探索的价值。他【promise/承诺】会一直追求这个梦想。

某次科普讲座上，陈明分享了他的航天故事："探索宇宙是人类的共同梦想。我们用科技的力量，一步步靠近星辰大海。"听众们被他的话语深深打动，许多孩子开始向往航天事业。他的故事激励着新一代追梦人。讲座现场【applaud/响起掌声】，大家【warm/热情】地提问。他用亲身经历证明，梦想的力量可以推动人类走向更远的未来。每个人都被他【inspire/启发】。`,

  '音乐人生': `音乐学院的琴房里，钢琴教师刘静正【teach/教授】学生弹奏技巧。作为一名资深的钢琴教育者，她已经培养了无数优秀的音乐人才。每一个音符都需要【precise/精准】的表达，每一个乐句都需要情感的投入。她深知教育的【important/重要性】。琴房里【quiet/安静】，她【focus/专注】地指导着学生。她【patient/耐心】地纠正，【careful/仔细】讲解。她每天都【arrive/到达】得很早，准备工作做得非常【well/好】。

今天的教学中，刘静发现一位学生的演奏缺乏情感表达。虽然技术娴熟，但音乐显得空洞。她决定引导学生理解作品背后的情感和故事。音乐不仅是技巧，更是心灵的对话。她【sincere/真诚】地分享自己对作品的理解，帮助学生感受音乐的温度。她【gentle/温和】地启发，让音乐【flow/流淌】出来。她【deeply/深深地】理解音乐的情感内涵。

课后，刘静回到自己的工作室练习。作为一名演奏者，她保持着每日练习的习惯。即使已经功成名就，她依然追求更高的艺术境界。每一次练习都是与音乐的深度对话。她【serious/认真】对待每一个音符，追求极致的表达。她【continue/继续】提升自己的艺术水平。她【spend/花费】大量时间练习。

她开始准备一场重要的音乐会。这次她要演奏一组难度极高的作品，需要精湛的技巧和深厚的理解。她花费了大量时间研究作曲家的生平和创作背景，深入理解每首作品的内涵。准备需要投入。她【deeply/深深地】理解作品，【try/努力】还原作曲家的情感。她【nervous/紧张】但同时也【excited/兴奋】。

音乐会当天，刘静走上舞台，面对台下观众。灯光柔和地洒在钢琴上，她开始演奏。每一个音符都充满了情感，每一个乐句都讲述着故事。观众沉浸在音乐的海洋中，感受着艺术的魅力。演出获得了巨大的成功。她【nervous/紧张】但【confident/自信】，成功地完成了演出。舞台【applaud/响起掌声】。观众都【warm/热情】地为她喝彩。

演出结束后，许多观众来到台前，表达对她的敬意。有人说，这场音乐会改变了他们对音乐的理解。刘静感到一种深深的【satisfy/满足】。艺术的力量在此体现。她【happy/开心】地接受赞誉，也【know/知道】这只是艺术道路上的一站。她【continue/继续】追求更高的艺术境界。每个人都为她的【achieve/成就】感到高兴。

她明白，音乐教育不仅是培养技能，更是传递文化和情感。她开始整理自己的教学经验，编写教材，帮助更多的音乐教师提升教学水平。她希望通过教育，让更多人感受音乐的魅力。文化在此传递。她【respect/尊重】传统，【innovate/创新】教学，【share/分享】经验。她【active/积极】推广音乐教育。她【write/编写】了多本教材。她【love/热爱】音乐教育事业。每个学生都是她的【treasure/珍宝】。

刘静开始培养年轻的音乐教师，传授自己的经验和方法。她告诉他们："音乐教育是灵魂的培育。我们用音符传递情感，用旋律滋养心灵。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。她【successfully/成功地】培养了多位优秀教师。年轻教师们都受到她的【inspire/启发】。

音乐人生，让刘静感受到艺术的魅力和教育的价值。她决定继续深耕这个领域，用精湛的技艺呈现音乐之美，用专业的教育培养更多人才。这是她选择的道路，也是她热爱的生活。每一次演奏，都是一次心灵的对话。这是她的使命。她【determine/决心】一生【devote/奉献】给音乐事业，【create/创造】更多动人的旋律，让更多人能够【experience/体验】音乐的力量，【build/建立】属于自己的艺术人生。她【firmly/坚定地】相信音乐教育的价值。她【promise/承诺】会一直坚持教育事业。

某次音乐教育论坛上，刘静分享了她的教学理念："音乐教育是灵魂的培育。我们用音符传递情感，用旋律滋养心灵。"同行们深受启发，开始重新思考音乐教育的本质。她的故事激励着更多教育者追求更高的艺术境界。论坛现场【warm/温暖】，大家积极交流。她用亲身经历证明，教育的力量可以改变一个人的生命。每个人都被她【inspire/启发】。`,

  '心理疗愈': `心理咨询室的沙发上，咨询师王芳正【listen/倾听】着来访者的倾诉。作为一名专业的心理咨询师，她已经帮助了无数人走出心理困境。每一个故事都需要【careful/细心】的理解，每一个案例都需要专业的干预。她深知这份工作的【responsibility/责任】重大。房间里【warm/温暖】，她【focus/专注】地倾听着。她【patient/耐心】地陪伴，给予支持。她每天都【prepare/准备】得很充分。她【always/总是】保持专业态度。

今天的来访者是一位陷入焦虑的年轻人。工作压力和生活困扰让他感到窒息，找不到生活的方向。王芳用专业的技巧引导他表达情绪，帮助他认识自己的内心世界。咨询需要建立信任。她【sincere/真诚】地理解他的痛苦，用【gentle/温和】的方式引导。她【deeply/深深地】共情，建立连接。她【skillfully/熟练地】运用咨询技巧。她【help/帮助】他打开心扉。

咨询过程中，王芳运用多种心理技术帮助来访者。她引导他认识焦虑的根源，学习情绪调节的方法，建立积极的心理应对机制。每一步都需要耐心和专业。干预需要技巧。她【careful/仔细】地设计方案，根据个体需求调整。她【skillfully/熟练地】应用专业技术。她【explain/解释】得很清楚。她【guide/引导】他逐步探索内心。

几次咨询后，来访者的状况开始改善。他学会了管理情绪的方法，重新找到了生活的方向。他感谢王芳的帮助，说他重新看到了希望。王芳感到一种深深的【satisfy/满足】。治愈在此【begin/开始】。她【happy/开心】地看着他的变化，也【know/知道】这是长期的过程。她【continue/继续】陪伴和支持。来访者感到【relieve/释然】和希望。咨询【successfully/成功地】达到了预期效果。王芳感到自己的【achieve/成就】很重大。她【proud/自豪】地看着来访者的成长。每个案例都是一次【learn/学习】的机会。

她开始整理自己的咨询经验，撰写专业文章。她希望通过分享，帮助更多同行提升专业水平，也让公众了解心理健康的重要性。知识在此传播。她【write/撰写】文章，【share/分享】案例，【educate/教育】公众。她【active/积极】地推动心理健康意识的普及。她【publish/发表】了多篇专业文章。

某次心理健康讲座上，王芳向公众讲解压力管理的技巧。她用通俗易懂的语言，传授实用的方法。讲座吸引了大量听众，许多人开始重视心理健康。她看到了改变的可能。讲座现场【warm/温暖】，大家积极提问。她【patient/耐心】地回答，【encourage/鼓励】大家关注心理健康。每个人都【benefit/受益】于她的分享。

她明白，心理咨询不仅是职业，更是使命。她开始培养新的咨询师，传授专业知识和技能。她告诉他们："心理咨询需要专业和爱心。我们用科学的方法帮助他人，用真诚的态度温暖心灵。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。她【successfully/成功地】培养了多位咨询师。年轻咨询师们都受到她的【inspire/启发】。

心理疗愈，让王芳感受到帮助他人的意义和专业的价值。她决定继续深耕这个领域，用专业的能力治愈心灵创伤，用真诚的态度传递温暖关怀。这是她选择的道路，也是她热爱的生活。每一次咨询，都是一次心灵的陪伴。这是她的使命。她【determine/决心】一生【devote/奉献】给心理咨询事业，【help/帮助】更多人走出困境，让社会更加【harmony/和谐】与温暖，【build/建立】一个充满理解和关爱的心灵港湾。她【firmly/坚定地】相信心理咨询的价值。她【promise/承诺】会一直坚持这份事业。

某次专业论坛上，王芳分享了她的咨询理念："心理疗愈是心灵的重建。我们用专业的力量，帮助人们重新拥抱生活。"同行们深受启发，开始思考咨询的深层意义。她的故事激励着更多专业人士追求更高的境界。论坛现场【applaud/响起掌声】，大家热烈讨论。她用亲身经历证明，专业的力量可以改变一个人的命运，温暖的力量可以照亮一个人的生命。每个人都被她【inspire/启发】。`
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

    const num = String(41 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 41 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 41 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事41-45）');
}

main();