const fs = require('fs');
const path = require('path');

// 故事配置（故事56-60）
const storyConfigs = [
  { theme: '摄影', title: '光影记忆', subtitle: '镜头世界', tags: '摄影 · 艺术 · 记录' },
  { theme: '舞蹈', title: '舞动人生', subtitle: '舞台梦想', tags: '舞蹈 · 艺术 · 表演' },
  { theme: '消防', title: '火焰守护', subtitle: '消防英雄', tags: '消防 · 安全 · 英雄' },
  { theme: '快递', title: '使命必达', subtitle: '配送之路', tags: '快递 · 服务 · 奉献' },
  { theme: '养老', title: '夕阳关怀', subtitle: '温暖守护', tags: '养老 · 关爱 · 温暖' }
];

// 所有故事内容 - 每个故事约50个词汇
const storyContents = {
  '镜头世界': `摄影工作室里，摄影师李芳正【prepare/准备】着今天的拍摄设备。作为一名职业摄影师，她每天都在用镜头记录美好瞬间。每一张照片都需要【careful/仔细】的构图，每一个画面都承载着艺术的【value/价值】。她深知摄影的【important/重要性】。工作室里【quiet/安静】，她【focus/专注】于调试器材。她【early/早早】来到工作室，每天都很【busy/忙碌】。她【always/总是】保持创作的热情。

今天的拍摄任务是为客户拍摄人像作品。李芳注意到光线条件还不够【ideal/理想】，需要调整布光方案。她反复测试光线，寻找最佳的拍摄角度。这是一个需要【patient/耐心】尝试的过程。她【never/从不】放弃对完美的追求，【always/总是】力求更好的效果。她【try/尝试】各种光线组合，【experiment/实验】不同构图。摄影【require/需要】技术与艺术。

拍摄过程中，李芳遇到了一个难题。客户表情不够自然，无法捕捉理想状态。她【worried/担忧】地思考解决方案，尝试了多种引导方式。最终，她通过轻松的交流，让客户放松下来，捕捉到了完美的瞬间。突破需要坚持。她【patiently/耐心地】引导，【finally/终于】获得了理想画面。她【excited/兴奋】地按下快门。照片【perfectly/完美地】呈现神态。

作品完成后，李芳开始进行后期处理。她调整色彩平衡，修饰细节瑕疵，提升整体效果。每一张照片都需要精心打磨。后期需要投入。她【careful/仔细】地调整参数，【accurate/准确】把握风格。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间完善作品。

作品交付时，李芳看到客户满意的笑容，心中感到欣慰。精美的照片让她感到满足。客户对她的作品给予了高度评价，认为每一张都充满艺术感染力。交付【successful/成功】。她【nervous/紧张】但【confident/自信】，成功地完成了作品。客户【warm/热情】地感谢。她【proud/自豪】地看着照片展示。朋友们都【active/积极】点赞。

作品完成后，李芳感到一种深深的【satisfy/满足】。创作的喜悦让她感到欣慰，但她明白，这只是摄影生涯的一次拍摄。她【humbly/谦虚地】接受客户的认可。成功在此【mark/标记】。她【proud/自豪】地看着作品反响，知道这是艺术的回报。她【continue/继续】追求更高的创作境界。每个人都为这个【achieve/成就】感到高兴。

她明白，摄影不仅是职业，更是记忆的守护者。她开始学习各种摄影流派，了解不同的拍摄风格。她希望通过学习，让自己的作品更加多元。技术在此传递。她【respect/尊重】经典风格，【innovate/创新】拍摄理念，【share/分享】创作心得。她【active/积极】学习新知识。她【travel/旅行】各地拍摄采风。

李芳开始培养年轻的摄影师，传授拍摄技巧和后期技术。她告诉他们："摄影需要热爱和敏锐。我们用镜头的力量记录美好，用艺术的眼光发现世界。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。她【successfully/成功地】培养了多位优秀摄影师。年轻摄影师都受到她的【inspire/启发】。

光影记忆，让李芳感受到创作的魅力和记录的价值。她决定继续深耕这个领域，用镜头的能力捕捉美好，用艺术的态度记录世界。这是她选择的道路，也是她热爱的生活。每一次拍摄，都是一次对记忆的守护。这是她的使命。她【determine/决心】一生【devote/奉献】给摄影事业，【capture/捕捉】更多美好瞬间，让人们能够【enjoy/享受】艺术之美，【build/建立】属于自己的摄影传奇。她【firmly/坚定地】相信摄影的力量。她【promise/承诺】会一直坚持创作。

某次摄影作品展上，李芳分享了她创作理念："摄影是记忆的守护者。我们用镜头的力量，让美好瞬间永恒定格。"同行们深受启发，开始思考摄影的深层意义。她的故事激励着更多摄影师追求更高的境界。作品展现场【applaud/响起掌声】，大家热烈讨论。她用亲身经历证明，坚持的力量可以记录美好，艺术的眼光可以发现世界。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。摄影【industry/行业】需要这样的热爱。`,

  '舞台梦想': `舞蹈工作室的训练厅里，舞者王琳正【practice/练习】着新的舞蹈动作。作为一名专业舞者，她每天都在为舞台表演做准备。每一个动作都需要【perfect/完美的】执行，每一个舞步都承载着艺术的【hope/希望】。她深知舞蹈的【important/重要性】。训练厅里【quiet/安静】，她【focus/专注】于每一个细节。她【early/早早】来到训练厅，每天都很【busy/忙碌】。她【always/总是】保持高度的专业性。

今天的训练重点是完善一支现代舞作品。王琳注意到某个动作还不够【smooth/流畅】，需要反复练习。她不断调整身体姿态，感受节奏的变化。这是一个需要【patient/耐心】打磨的过程。她【never/从不】放弃对完美的追求，【always/总是】力求更好的表现。教练【guide/指导】她的动作，帮助她提升技巧。她【listen/倾听】教练的建议，认真执行。

训练过程中，王琳遇到了一个难题。某种动作组合与音乐节奏不协调，无法达到预期的效果。她【worried/担忧】地思考解决方案，尝试了多种调整方式。最终，她通过改变发力方式，成功让动作与音乐完美融合。突破需要坚持。她【patiently/耐心地】尝试，【finally/终于】找到了答案。她【excited/兴奋】地完成组合。动作【perfectly/完美地】呈现节奏。

演出临近，王琳开始进行彩排。她反复演练整支舞蹈，确保每一个细节都到位。每一次彩排都是对舞台的预演。准备需要投入。她【careful/仔细】地检查动作，【accurate/准确】把握节奏。她【nervous/紧张】但同时也【excited/兴奋】。她【spend/花费】大量时间彩排演练。

演出当天，王琳站在舞台边，等待上场时刻。观众席灯光暗下，舞台灯光亮起。演出开始后，她用优雅的动作诠释舞蹈的魅力。每一个转身，每一个跳跃，都是艺术的表达。演出【intense/精彩】。她【nervous/紧张】但【confident/自信】，成功地完成了表演。观众【warm/热情】地喝彩。她【proud/自豪】地看着掌声响起。媒体都【active/积极】报道。

演出结束后，王琳感到一种深深的【satisfy/满足】。舞台的成功让她感到欣慰，但她明白，这只是舞蹈生涯的一次演出。她【humbly/谦虚地】接受观众的掌声。成功在此【mark/标记】。她【proud/自豪】地看着演出反响，知道这是努力的回报。她【continue/继续】追求更高的艺术境界。每个人都为这个【achieve/成就】感到高兴。

她明白，舞蹈不仅是职业，更是艺术的表达者。她开始研究各种舞蹈流派，学习不同的表演风格。她希望通过学习，让自己的舞蹈更加多元。艺术在此传递。她【respect/尊重】经典舞种，【innovate/创新】表演理念，【share/分享】舞蹈心得。她【active/积极】学习新知识。她【travel/旅行】各地观摩演出。

王琳开始培养年轻的舞者，传授舞蹈技巧和表演理念。她告诉他们："舞蹈需要热爱和坚持。我们用身体的力量表达情感，用艺术的姿态诠释世界。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。她【successfully/成功地】培养了多位优秀舞者。年轻舞者都受到她的【inspire/启发】。

舞动人生，让王琳感受到表演的魅力和艺术的价值。她决定继续深耕这个领域，用身体的表达诠释情感，用艺术的姿态感动观众。这是她选择的道路，也是她热爱的生活。每一次表演，都是一次对艺术的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给舞蹈事业，【perform/表演】更多精彩作品，让观众能够【enjoy/享受】艺术之美，【build/建立】属于自己的舞蹈传奇。她【firmly/坚定地】相信艺术的力量。她【promise/承诺】会一直坚持舞台。

某次舞蹈交流会上，王琳分享了她表演理念："舞蹈是艺术的表达者。我们用身体的力量，让情感在舞台上绽放。"同行们深受启发，开始思考舞蹈的深层意义。她的故事激励着更多舞者追求更高的境界。交流会现场【applaud/响起掌声】，大家热烈讨论。她用亲身经历证明，坚持的力量可以成就艺术，身体的表达可以感动人心。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。舞蹈【industry/行业】需要这样的热爱。`,

  '消防英雄': `消防站的值班室里，消防员张勇正【check/检查】着消防设备的状态。作为一名资深消防员，他已经在这个岗位工作了十五年。每一次出动都需要【rapid/迅速】的反应，每一位被困者都承载着生命的【hope/希望】。他深知消防的【responsibility/责任】重大。消防站里【quiet/安静】，他【focus/专注】于检查器材。他【early/早早】来到消防站，每天都很【busy/忙碌】。他【always/总是】保持高度的警惕。

今天的训练任务是进行高空救援演练。张勇注意到某些队员的操作还不够【standard/标准】，需要加强训练。他反复示范动作，指导队员掌握技巧。这是一个需要【careful/细心】指导的过程。他【never/从不】放弃对安全的追求，【always/总是】力求更规范的执行。他【try/尝试】各种教学方法，【guide/指导】队员训练。救援【require/需要】技术与勇气。

训练过程中，张勇遇到了一个难题。某种复杂场景的救援方案还不成熟，需要反复演练。他【worried/担忧】地思考改进方案，尝试了多种应对策略。最终，他通过模拟演练，成功优化了救援流程。突破需要坚持。他【patiently/耐心地】演练，【finally/终于】完善了方案。他【excited/兴奋】地看到团队提升。救援【perfectly/完美地】保障安全。

警报响起时，张勇迅速穿戴装备，带领队员赶往现场。火场的情况复杂多变，需要冷静判断。每一次救援都是对生命的守护。行动需要果断。他【careful/仔细】地观察火情，【accurate/准确】判断风险。他【nervous/紧张】但同时也【confident/自信】。他【spend/花费】全力执行救援。

救援行动中，张勇冲进火场，搜索被困人员。浓烟滚滚，高温炙烤，他始终不放弃寻找。当成功救出被困者时，他感到一种深深的欣慰。救援【successful/成功】。他【nervous/紧张】但【confident/自信】，勇敢地完成了任务。被困者【warm/温暖】地感谢。他【proud/自豪】地看着生命获救。家属都【active/积极】表达感激。

救援结束后，张勇感到一种深深的【satisfy/满足】。生命的守护让他感到欣慰，但他明白，这只是消防员的一次任务。他【humbly/谦虚地】接受群众的赞誉。成功在此【mark/标记】。他【proud/自豪】地看着救援成果，知道这是勇气的回报。他【continue/继续】守护人民安全。每个人都为他的【achieve/成就】感到敬佩。

他明白，消防不仅是职业，更是生命的守护者。他开始研究先进的救援技术，了解科学的灭火方法。他希望通过学习，提升救援能力。技术在此传递。他【respect/尊重】职业规范，【innovate/创新】救援方法，【share/分享】安全经验。他【active/积极】学习新知识。他【travel/旅行】各地学习先进技术。

张勇开始培养年轻的消防员，传授救援技巧和安全意识。他告诉他们："消防需要勇气和责任。我们用专业的技能守护生命，用无畏的精神服务人民。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】勇敢。他【successfully/成功地】培养了多位优秀消防员。年轻消防员都受到他的【inspire/启发】。

火焰守护，让张勇感受到救援的意义和生命的价值。他决定继续深耕这个领域，用专业的技能守护生命，用无畏的精神服务人民。这是他选择的道路，也是他热爱的生活。每一次救援，都是一次对生命的守护。这是他的使命。他【determine/决心】一生【devote/奉献】给消防事业，【save/拯救】更多生命，让社会更加【safe/安全】，【build/建立】属于自己的消防传奇。他【firmly/坚定地】相信勇气的力量。他【promise/承诺】会一直坚守岗位。

某次消防培训会上，张勇分享了他救援理念："消防是生命的守护者。我们用专业的技能，让每一个生命得到保护。"同行们深受启发，开始思考消防的深层意义。他的故事激励着更多消防员追求更高的境界。培训会现场【applaud/响起掌声】，大家热烈讨论。他用亲身经历证明，坚持的力量可以拯救生命，勇气的精神可以守护家园。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。消防【industry/行业】需要这样的英雄。`,

  '配送之路': `快递配送站里，快递员刘伟正【prepare/准备】着今天的配送包裹。作为一名职业快递员，他每天都在为客户送达期待。每一个包裹都需要【careful/仔细】的处理，每一位客户都承载着信任的【hope/希望】。他深知配送的【responsibility/责任】重大。配送站里【busy/忙碌】，他【focus/专注】于分拣包裹。他【early/早早】来到配送站，每天都很【busy/忙碌】。他【always/总是】保持高度的责任心。

今天的配送任务是完成片区内的所有快递送达。刘伟注意到某些地址信息还不够【clear/清晰】，需要核实确认。他仔细核对地址，规划配送路线。这是一个需要【patient/耐心】处理的过程。他【never/从不】放弃对服务的追求，【always/总是】力求更高效的送达。他【try/尝试】各种路线优化，【choose/选择】最佳方案。配送【require/需要】效率与服务。

配送过程中，刘伟遇到了一个难题。某个包裹的收件人不在家，无法正常送达。他【worried/担忧】地思考解决方案，尝试了多种联系方式。最终，他通过电话沟通，成功与收件人约定了新的送达时间。突破需要灵活。他【patiently/耐心地】沟通，【finally/终于】完成了配送。他【excited/兴奋】地交付包裹。服务【perfectly/完美地】满足需求。

配送途中，刘伟始终保持专注。他观察路况变化，及时调整路线。每一个送达都需要关注。配送需要投入。他【careful/仔细】地核对收件人，【accurate/准确】交付包裹。他【nervous/紧张】但同时也【confident/自信】。他【spend/花费】大量精力完成配送。

一天配送结束后，刘伟看着所有包裹送达完成，心中感到欣慰。顺利的配送让他感到满足。客户们对他专业的服务给予了肯定，认为他是一位值得信赖的快递员。配送【successful/成功】。他【nervous/紧张】但【confident/自信】，顺利地完成了任务。客户【warm/热情】地感谢。他【proud/自豪】地看着任务完成。公司都【active/积极】表扬他。

配送结束后，刘伟感到一种深深的【satisfy/满足】。服务的完成让他感到欣慰，但他明白，这只是快递生涯的一天任务。他【humbly/谦虚地】接受客户的感谢。成功在此【mark/标记】。他【proud/自豪】地看着配送记录，知道这是责任的回报。他【continue/继续】追求更高的服务标准。每个人都为他的【achieve/成就】感到高兴。

他明白，快递不仅是职业，更是服务的传递者。他开始学习先进的配送方法，了解客户服务技巧。他希望通过学习，让自己成为更专业的快递员。技术在此传递。他【respect/尊重】服务规范，【innovate/创新】配送方法，【share/分享】配送经验。他【active/积极】学习新知识。他【travel/旅行】各地学习先进经验。

刘伟开始培养年轻的快递员，传授配送技巧和服务意识。他告诉他们："快递需要效率和责任。我们用专业的技能送达期待，用认真的态度服务客户。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】创新。他【successfully/成功地】培养了多位优秀快递员。年轻快递员都受到他的【inspire/启发】。

使命必达，让刘伟感受到配送的意义和服务的价值。他决定继续深耕这个领域，用专业的技能送达期待，用认真的态度服务客户。这是他选择的道路，也是他热爱的生活。每一次配送，都是一次对信任的守护。这是他的使命。他【determine/决心】一生【devote/奉献】给快递事业，【deliver/送达】更多包裹期待，让客户更加【satisfy/满意】，【build/建立】属于自己的配送传奇。他【firmly/坚定地】相信服务的力量。他【promise/承诺】会一直坚持使命。

某次快递培训会上，刘伟分享了他配送理念："快递是服务的传递者。我们用专业的技能，让每一个期待准时抵达。"同行们深受启发，开始思考快递的深层意义。他的故事激励着更多快递员追求更高的境界。培训会现场【applaud/响起掌声】，大家热烈讨论。他用亲身经历证明，坚持的力量可以送达期待，服务的意识可以赢得信任。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。快递【industry/行业】需要这样的责任。`,

  '温暖守护': `养老院的活动室里，护理员陈芳正【organize/组织】着今天的老年活动。作为一名专业护理员，她每天都在为老人送去温暖关怀。每一位老人都需要【careful/细心】的照顾，每一个笑容都承载着幸福的【hope/希望】。她深知养老服务的【important/重要性】。养老院里【quiet/温馨】，她【focus/专注】于照顾老人。她【early/早早】来到养老院，每天都很【busy/忙碌】。她【always/总是】保持高度的责任心。

今天的服务任务是组织老人进行康复活动。陈芳注意到某些老人的活动能力还不够【good/好】，需要个性化安排。她反复调整活动方案，确保每位老人都能参与。这是一个需要【patient/耐心】陪伴的过程。她【never/从不】放弃对关爱的追求，【always/总是】力求更好的服务。她【try/尝试】各种活动形式，【choose/选择】适合方案。养老服务【require/需要】爱心与耐心。

服务过程中，陈芳遇到了一个难题。某位老人情绪低落，不愿参与集体活动。她【worried/担忧】地思考解决方案，尝试了多种沟通方式。最终，她通过耐心的陪伴和真诚的交流，让老人敞开心扉，重新融入集体。突破需要坚持。她【patiently/耐心地】陪伴，【finally/终于】获得了信任。她【excited/兴奋】地看到老人笑容。服务【perfectly/完美地】传递温暖。

日常护理中，陈芳始终保持专注。她关注老人的身体状况，及时调整护理方案。每一个细节都需要关注。护理需要投入。她【careful/仔细】地观察老人，【accurate/准确】判断需求。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量精力照顾老人。

活动结束后，陈芳看到老人脸上的笑容，心中感到欣慰。温暖的关怀让她感到满足。老人和家属对她的服务给予了肯定，认为她是一位值得信赖的护理员。活动【successful/成功】。她【nervous/紧张】但【confident/自信】，成功地举办了活动。老人【warm/热情】地参与。她【proud/自豪】地看着老人快乐。家属都【active/积极】感谢她。

服务结束后，陈芳感到一种深深的【satisfy/满足】。关爱的传递让她感到欣慰，但她明白，这只是养老服务的一天。她【humbly/谦虚地】接受老人和家属的认可。成功在此【mark/标记】。她【proud/自豪】地看着老人幸福，知道这是关爱的回报。她【continue/继续】追求更高的服务品质。每个人都为她的【achieve/成就】感到敬佩。

她明白，养老服务不仅是职业，更是温暖的传递者。她开始学习先进的护理技术，了解老年心理学知识。她希望通过学习，让自己成为更专业的护理员。技术在此传递。她【respect/尊重】老人尊严，【innovate/创新】服务方法，【share/分享】护理经验。她【active/积极】学习新知识。她【travel/旅行】各地学习先进技术。

陈芳开始培养年轻的护理员，传授护理技巧和服务理念。她告诉他们："养老服务需要爱心和耐心。我们用专业的技能守护晚年，用真诚的态度传递温暖。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【share/分享】经验，【encourage/鼓励】爱心。她【successfully/成功地】培养了多位优秀护理员。年轻护理员都受到她的【inspire/启发】。

夕阳关怀，让陈芳感受到服务的意义和温暖的价值。她决定继续深耕这个领域，用专业的技能守护晚年，用真诚的态度传递温暖。这是她选择的道路，也是她热爱的生活。每一次护理，都是一次对温暖的守护。这是她的使命。她【determine/决心】一生【devote/奉献】给养老事业，【care/照顾】更多老人，让晚年更加【happy/幸福】，【build/建立】属于自己的护理传奇。她【firmly/坚定地】相信温暖的力量。她【promise/承诺】会一直坚守岗位。

某次养老服务培训会上，陈芳分享了她服务理念："养老是温暖的传递者。我们用专业的技能，让每一位老人享受幸福的晚年。"同行们深受启发，开始思考养老服务的深层意义。她的故事激励着更多护理员追求更高的境界。培训会现场【applaud/响起掌声】，大家热烈讨论。她用亲身经历证明，坚持的力量可以传递温暖，关爱的态度可以照亮晚年。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。养老【industry/行业】需要这样的爱心。`
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

    const num = String(56 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 56 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 56 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事56-60）');
}

main();