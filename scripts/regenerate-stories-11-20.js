const fs = require('fs');
const path = require('path');

// 故事配置（故事11-20）- 大学生喜爱的题材
const storyConfigs = [
  { theme: '大女主穿越', title: '凤临天下', subtitle: '逆袭重生', tags: '穿越 · 逆袭 · 权谋' },
  { theme: '霸总虐恋', title: '错爱成瘾', subtitle: '虐心情缘', tags: '霸总 · 虐恋 · 救赎' },
  { theme: '职场斗争', title: '明争暗斗', subtitle: '升职之路', tags: '职场 · 斗争 · 成长' },
  { theme: '校园暗恋', title: '那年夏天', subtitle: '暗恋心事', tags: '校园 · 暗恋 · 青春' },
  { theme: '契约婚姻', title: '假戏真做', subtitle: '契约情缘', tags: '契约 · 爱情 · 转变' },
  { theme: '大女主重生', title: '千金归来', subtitle: '重生复仇', tags: '重生 · 复仇 · 正义' },
  { theme: '霸总追妻', title: '追妻火葬场', subtitle: '悔婚之后', tags: '霸总 · 追妻 · 悔改' },
  { theme: '职场爱情', title: '办公室恋情', subtitle: '禁忌之爱', tags: '职场 · 恋情 · 禁忌' },
  { theme: '校园误会', title: '误会重重', subtitle: '破冰之旅', tags: '校园 · 误会 · 和解' },
  { theme: '穿越时空', title: '跨越千年', subtitle: '穿越情缘', tags: '穿越 · 爱情 · 宿命' }
];

// 所有故事内容 - 词汇量控制在50-60个
const storyContents = {
  '逆袭重生': `华丽的古代宫殿里，苏瑶正【recall/回忆】着前世的惨死。作为现代女总裁穿越而来的她，决心这一世不再被人【trample/践踏】。曾经那些陷害她的人，现在都要付出代价。她深知宫廷斗争的残酷。宫殿里【luxurious/奢华】，她【disguise/伪装】着自己的真实实力。她表面【calm/平静】，内心却【burning/燃烧】着复仇的火焰。她【always/总是】保持着清醒。

今天的任务是应对皇后的试探。苏瑶注意到皇后话中带刺，想要找出她的【weakness/弱点】。她反复分析每一句话，寻找最佳应对策略。这是一个需要【wisdom/智慧】和隐忍的过程。她【never/从不】暴露真实想法，【always/总是】以退为进。她【observe/观察】细节，【analyze/分析】局势。

应对过程中，苏瑶遇到了一个难题。皇后突然提起前世的旧事，似乎察觉到什么。她【shocked/震惊】但表面保持镇定，努力寻找突破口。最终，她通过【smart/聪明】的话术转移了话题。突破需要冷静。她【finally/终于】化解危机。她【relieved/释然】地看着皇后离开。试探【safely/安全】度过。

危机后，苏瑶开始布局更大的计划。她要一步步【remove/除掉】那些敌人，夺回属于自己的【glory/荣耀】。复仇需要耐心。她【careful/小心】布局每一步，【patient/耐心】等待时机。她【nervous/紧张】但同时也【determined/坚定】。她【spend/花费】大量时间策划。

最终，苏瑶成功揭露了所有阴谋，成为了真正的宫斗胜利者。曾经的仇人都在她面前倒下，她站在权力的顶峰。复仇【successful/成功】。她【proud/自豪】地看着胜利。每个人都为她的【achieve/成就】感到震惊。

成功后，苏瑶感到一种深深的【satisfaction/满足】。重生的喜悦让她感到欣慰，但她明白，这只是新人生的开始。她【calmly/平静地】接受胜利。成功在此【mark/标记】。她【continue/继续】治理国家。

她明白，权力不是终点，而是守护的工具。她开始用自己的能力治理国家，让百姓过上好日子。责任在此诞生。她【respect/尊重】贤臣，【care/关爱】百姓，【rule/治理】国家。她【active/积极】推行新政。

苏瑶成为了历史上最伟大的女帝，她的故事激励了无数女性。她告诉她们："命运掌握在自己手中。我们用智慧的力量，书写属于自己的传奇。"她的故事成为【legend/传奇】。她【patient/耐心】地教导，【encourage/鼓励】女性自立。后人都受到她的【inspire/启发】。

凤临天下，让苏瑶感受到重生的力量和逆袭的价值。她决定继续治理国家，用智慧守护权力，用能力证明自己。这是她选择的道路，也是她重生的人生。每一次斗争，都是一次对命运的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给国家，【create/创造】盛世，让百姓更加【happy/幸福】，【build/建立】属于自己的王朝。她【firmly/坚定地】相信自己的力量。她【promise/承诺】会一直守护这片土地。

某次朝会上，苏瑶分享了她人生理念："穿越是命运的馈赠，逆袭是灵魂的选择。"臣子们深受启发，开始思考自己的人生。朝会现场【applaud/响起掌声】。她用亲身经历证明，智慧的力量可以改变命运，逆袭的精神可以创造奇迹。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '虐心情缘': `豪华的总裁办公室里，顾辰正【stare/注视】着桌上的离婚协议书。作为商界的霸主，他亲手毁掉了自己的【marriage/婚姻】，此刻后悔莫及。他深知是自己的一意孤行【hurt/伤害】了她。办公室里【cold/冰冷】，他【recall/回忆】着过往。他内心充满了【regret/悔恨】，却不知如何挽回。他【always/总是】用冷漠掩饰脆弱。

今天是他和她分开后的第一百天。顾辰注意到自己越来越无法【concentrate/集中】精力工作，总是想起她的笑容。他反复回忆过去的点点滴滴，意识到自己深深爱着她。这是一个【painful/痛苦】的过程。他【never/从不】承认错误，【always/总是】用高傲掩饰。他【reflect/反思】过去，【admit/承认】错误。

反思过程中，顾辰遇到了一个难题。他发现她已经离开这座城市，彻底从他的世界消失。他【panicked/恐慌】地寻找她的踪迹，尝试了各种方法。最终，他决定放下所有骄傲，亲自去找她。改变需要勇气。他【finally/终于】做出决定。他【determined/坚定】地开始寻找。寻妻之旅【start/开始】。

寻找后，顾辰历经千辛万苦终于找到她。他发现她虽然表面坚强，但内心也在【suffer/痛苦】。寻找需要坚持。他【patient/耐心】等待机会，【sincere/真诚】表达悔意。他【nervous/紧张】但同时也【hopeful/充满希望】。他【spend/花费】大量时间追求。

终于，在一个雨天，他单膝跪地，向她道歉并求婚。所有的骄傲都放下，只为了挽回她。告白【successful/成功】。她【moved/感动】地原谅他。爱情终于【return/回来】。

他明白，爱情不能践踏，需要珍惜和尊重。他开始用真心经营这段感情，永远不再伤害她。爱情在此重生。他【respect/尊重】她的感受，【cherish/珍惜】她的存在，【protect/保护】她的心。他【active/积极】经营感情。

顾辰彻底改变自己，成为了真正的暖男。他告诉她："爱情需要【cherish/珍惜】和【respect/尊重】。我愿意用余生弥补你。"他的改变让所有人惊讶。爱情在此升华。他【patient/耐心】地守护，【encourage/鼓励】彼此成长。他们的爱情成为【legend/传奇】。

错爱成瘾，让顾辰感受到悔改的痛苦和救赎的美好。他决定用余生守护她，用真心弥补过去的错误。这是他选择的道路，也是他赎罪的开始。每一次付出，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】幸福生活，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的家。他【firmly/坚定地】相信救赎的力量。他【promise/承诺】会一直守护她。

某次婚礼上，顾辰分享了他爱情理念："失去才懂得珍惜，悔改才获得救赎。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。他用亲身经历证明，悔改的力量可以挽回爱情，真诚的付出可以获得原谅。每个人都被他【inspire/启发】。他感到无比【happy/幸福】和【fulfill/充实】。`,

  '升职之路': `竞争激烈的办公室里，林悦正【organize/整理】着重要会议的资料。作为一名职场新人，她每天都在努力证明自己的【ability/能力】。每一项任务都是一次机会，每一份努力都承载着升职的【hope/希望】。她深知职场竞争的残酷。办公室里【tense/紧张】，她【focus/专注】于工作。她内心有些【nervous/紧张】，但充满斗志。她【always/总是】保持积极的形象。

今天的任务是完成部门的重要汇报。林悦注意到同事们的眼神充满竞争意味，都在等着看她【fail/失败】。她反复准备每一个细节，寻找最完美的呈现。这是一个需要【confidence/自信】和实力的过程。她【never/从不】轻言放弃，【always/总是】全力以赴。她【prepare/准备】充分，【rehearse/排练】多次。

汇报过程中，林悦遇到了一个难题。有同事故意刁难，提出尖锐的问题想要让她出丑。她【shocked/震惊】但表面保持冷静，努力寻找应对方案。最终，她通过【professional/专业】的回答化解了危机。突破需要智慧。她【finally/终于】完成任务。她【excited/激动】地看到领导的认可。汇报【perfectly/完美】结束。

汇报后，林悦开始主动承担更多责任。她发现，只有主动出击，才能获得更多机会。成长需要行动。她【active/积极】接受挑战，【brave/勇敢】面对竞争。她【nervous/紧张】但同时也【confident/自信】。她【spend/投入】大量时间提升。

年终考核时，林悦的努力得到了回报，她成功击败所有竞争对手获得晋升。那些曾经刁难她的人，只能眼睁睁看着她【succeed/成功】。升职【successful/成功】。她【proud/自豪】地看着晋升通知。同事们都为她的【achieve/成就】感到敬佩。

升职后，林悦感到一种深深的【satisfaction/满足】。成功的喜悦让她感到欣慰，但她明白，这只是职场的新起点。她【humbly/谦逊地】接受大家的祝贺。成功在此【mark/标记】。她【continue/继续】追求更高目标。

她明白，职场不仅是竞争，更是成长的平台。她开始用自己的经验帮助新人，让他们少走弯路。经验在此传递。她【respect/尊重】对手，【share/分享】经验，【help/帮助】新人。她【active/积极】参与团队建设。

林悦成为了部门最年轻的经理，她的故事激励了无数职场新人。她告诉他们："职场需要【strength/实力】和【wisdom/智慧】。我们用能力证明自己，用努力赢得尊重。"她的故事帮助了许多人成长。传承在此延续。她【patient/耐心】地指导，【encourage/鼓励】奋斗精神。年轻人都受到她的【inspire/启发】。

明争暗斗，让林悦感受到竞争的残酷和成长的价值。她决定继续深耕职业发展，用实力赢得尊重，用努力证明价值。这是她选择的道路，也是她奋斗的人生。每一次竞争，都是一次对自己的证明。这是她的使命。她【determine/决心】一生【devote/奉献】给事业，【achieve/实现】职业目标，让人生更加【meaningful/有意义】，【build/建立】属于自己的传奇。她【firmly/坚定地】相信努力的力量。她【promise/承诺】会一直坚持奋斗。

某次职场分享会上，林悦分享了她成长理念："职场不相信眼泪，只相信实力。"台下新人深受启发，开始思考自己的职业规划。分享会现场【applaud/响起掌声】。她用亲身经历证明，实力的力量可以获得晋升，奋斗的精神可以赢得尊重。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '暗恋心事': `炎热的夏天，李明正【walk/漫步】在校园的林荫道上。作为一名大一新生，他暗恋着学生会主席苏瑶。每一次相遇都让心跳加速，每一个眼神都是幸福的【witness/见证】。他深知暗恋的甜蜜与苦涩。校园里【vibrant/生机勃勃】，他【observe/观察】着她的身影。他内心充满了【shy/羞涩】，不敢表白。他【always/总是】保持朋友的距离。

今天他决定鼓起勇气接近她。李明注意到她正在图书馆自习，他反复【practice/练习】着想说的话，寻找最合适的时机。这是一个需要【courage/勇气】和真诚的过程。他【never/从不】放弃暗恋的心，【always/总是】默默关注。他【prepare/准备】自己，【wait/等待】时机。

接近过程中，李明遇到了一个难题。他发现有一个优秀的学长也在追求她，他感到自卑和退缩。他【disappointed/失望】地想要放弃，觉得配不上她。最终，他决定即使失败也要试一试，不留遗憾。改变需要勇气。他【finally/终于】做出决定。他【determined/坚定】地表白。暗恋即将【end/结束】。

表白那天，李明准备了很久。他手写了一封信，表达所有的【emotion/情感】。表白需要勇气。他【sincere/真诚】地表达心意，【nervous/紧张】等待回复。他【shy/羞涩】但同时也【hopeful/充满希望】。他【hold/屏住】呼吸等待。

终于，苏瑶红着脸说："其实我也一直在关注你。"那一刻，李明感觉整个夏天都变得美好。暗恋变成明恋。告白【successful/成功】。他【surprised/惊喜】地看着她。两颗心终于【together/在一起】。

他明白，暗恋需要勇气打破，爱情需要真心对待。他们开始交往，珍惜这段来之不易的感情。爱情在此绽放。他们【respect/尊重】彼此，【support/支持】对方，【share/分享】心事。他们【active/积极】经营感情。

李明开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："暗恋是最美的等待，表白是最勇敢的选择。"他们的爱情从暗恋开始，在夏天绽放。爱情在此升华。他【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

暗恋心事，让李明感受到暗恋的甜蜜和表白的勇气。他决定珍惜这段感情，用真心守护爱情，用勇气证明自己。这是他选择的道路，也是他青春的浪漫。每一次心动，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】美好回忆，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的家。他【firmly/坚定地】相信爱情的力量。他【promise/承诺】会一直守护她。

某次校园活动上，李明分享了他爱情理念："暗恋是最美的青春印记。"台下同学深受启发，开始思考自己的爱情。活动现场【applaud/响起掌声】。他用亲身经历证明，勇气的力量可以收获爱情，真诚的付出可以获得幸福。每个人都被他【inspire/启发】。他感到无比【happy/幸福】和【fulfill/充实】。`,

  '契约情缘': `豪华的公寓里，叶婉正【sign/签署】着那份契约。作为顾总的"契约妻子"，她知道这只是一场【business/交易】。然而内心深处，她对他有着复杂的【feeling/感觉】。公寓里【spacious/宽敞】，她【organize/整理】着行李。她内心有些【awkward/尴尬】，充满无奈。她【always/总是】保持专业的态度。

今天是她住进来的第一天。叶婉注意到顾总的态度冷淡，似乎只是完成任务。她反复提醒自己，这只是契约，不能有其他想法。这是一个需要【rationality/理智】和距离的过程。她【try/尝试】适应环境，【maintain/保持】界限。她【remind/提醒】自己，【control/控制】情绪。

相处过程中，叶婉遇到了一个难题。顾总偶尔流露的温柔让她心动，她发现自己爱上了他。她【confused/困惑】地分析自己的感情，试图保持理智。最终，她决定顺其自然，不再刻意隐藏。发现需要勇气。她【finally/终于】承认感情。她【surprised/惊讶】于自己的变化。契约变得【complicate/复杂】。

随后的日子里，叶婉发现顾总也在默默关心她。比如下雨天为她撑伞，生病时送来药品。她开始注意到他的好。观察需要时间。她【careful/仔细】观察细节，【moved/感动】于他的关怀。她【nervous/紧张】但同时也【happy/开心】。她【spend/花费】时间了解真实的他。

某次意外中，叶婉遇到危险，顾总不顾一切地保护了她。那一刻，她的心彻底融化。原来他一直在默默守护她。感情在此【blossom/萌芽】。她【touched/感动】地看着他。两颗心终于【close/靠近】。

告白的那一天，顾总撕毁契约，说他想给她真正的婚姻。告白【successful/成功】。她【happily/幸福地】接受他的心意。契约变成了【real/真实】的爱情。

她明白，爱情不能被契约定义，需要真心去经营。他们开始真正相爱，珍惜彼此。爱情在此重生。她【respect/尊重】他的付出，【support/支持】他的事业，【share/分享】生活。她【active/积极】经营感情。

叶婉开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："契约可以变成真情，真心可以融化冰冷。"他们的爱情从契约开始，却以真心结束。爱情在此升华。她【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

假戏真做，让叶婉感受到契约的无奈和真爱的美好。她决定用真心经营这段感情，用珍惜守护眼前的幸福。这是她选择的道路，也是她爱情的开始。每一次付出，都是一次对爱情的诠释。这是她的承诺。她【determine/决心】一生【devote/奉献】给他，【create/创造】幸福生活，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的家。她【firmly/坚定地】相信爱情的力量。她【promise/承诺】会一直珍惜彼此。

某次婚礼上，叶婉分享了她爱情理念："契约是开始，真情是永恒。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。她用亲身经历证明，真心的力量可以超越契约，爱情的精神可以融化冰雪。每个人都被她【inspire/启发】。她感到无比【happy/幸福】和【fulfill/充实】。`,

  '重生复仇': `豪华的别墅里，苏瑶正【plan/策划】着她的复仇计划。作为重生归来的千金，她深知前世是如何被【betray/背叛】的。曾经那些陷害她的人，现在都要付出代价。她深知复仇的艰辛。别墅里【luxurious/奢华】，她【organize/组织】着计划。她表面【calm/平静】，内心却【burning/燃烧】着怒火。她【always/总是】保持着清醒。

今天的任务是接近当年的仇人集团。苏瑶注意到必须小心行事，不能暴露真实【identity/身份】。她反复推敲每一个步骤，寻找最佳的突破口。这是一个需要【patience/耐心】和智慧的过程。她【never/从不】忘记仇恨，【always/总是】等待时机。她【disguise/伪装】自己，【approach/接近】目标。

接近过程中，苏瑶遇到了一个难题。她发现当年的仇人已经成为了商业巨头，势力庞大。她【worried/担忧】地思考对策，尝试了多种方法。最终，她通过【smart/聪明】的商业手段，成功打入对方内部。突破需要智慧。她【finally/终于】获得信任。她【excited/激动】地开始计划。复仇【smoothly/顺利】进行。

获得信任后，苏瑶开始收集证据。她发现真相远比想象中更加【cruel/残酷】。调查需要耐心。她【secret/暗中】收集证据，【careful/小心】保护自己。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间调查真相。

证据收集完成后，苏瑶选择了一个重要的商业晚宴公开真相。当所有证据摆在众人面前，当年陷害她的人终于得到了应有的【punish/惩罚】。复仇【successful/成功】。她【proud/自豪】地看着正义伸张。所有人都为她的【courage/勇气】感到敬佩。

复仇后，苏瑶感到一种深深的【relief/释然】。正义的喜悦让她感到欣慰，但她明白，这只是人生的新开始。她【calmly/平静地】接受真相大白。成功在此【mark/标记】。她【continue/继续】追求新的生活。

她明白，复仇不是终点，而是放下过去重新开始。她开始用余生创造更多价值，帮助更多被冤枉的人。责任在此诞生。她【respect/尊重】法律正义，【help/帮助】弱势群体，【share/分享】人生经验。她【active/积极】参与公益。

苏瑶成为了商界的传奇人物，她的故事激励了无数被冤枉的人。她告诉他们："正义需要【brave/勇敢】和【wisdom/智慧】。我们用法律维护权益，用真相伸张正义。"她的故事帮助了许多人。希望在此传递。她【patient/耐心】地倾听，【encourage/鼓励】追求正义。受害者都受到她的【inspire/启发】。

重生复仇，让苏瑶感受到正义的魅力和人生的价值。她决定继续追求正义，用能力帮助他人，用智慧改变命运。这是她选择的道路，也是她重生的人生。每一次坚持，都是一次对正义的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给正义事业，【help/帮助】更多受害者，让社会更加【fair/公平】，【build/建立】属于自己的传奇。她【firmly/坚定地】相信正义的力量。她【promise/承诺】会一直坚守信念。

某次公益论坛上，苏瑶分享了她人生理念："重生是第二次机会，正义是永恒的选择。"台下观众深受启发，开始思考正义的意义。论坛现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以伸张正义，勇敢的精神可以改变命运。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '悔婚之后': `豪华的总裁办公室里，顾辰正【regret/后悔】着自己的冲动决定。作为商界的霸总，他因为误会而亲手毁了和苏瑶的【wedding/婚礼】。此刻他终于意识到自己错了。办公室里【cold/冰冷】，他【recall/回忆】着过往。他内心充满了【guilt/愧疚】，不知如何弥补。他【always/总是】用高傲掩饰脆弱。

今天是他悔婚后的第三十天。顾辰注意到自己越来越无法集中精力，总是想起她含泪离开的样子。他反复反思自己的错误，意识到必须挽回她。这是一个【painful/痛苦】的过程。他【never/从不】放下骄傲，【always/总是】用冷漠掩饰。他【reflect/反思】过去，【admit/承认】错误。

反思过程中，顾辰遇到了一个难题。他发现她已经彻底离开，不再相信爱情。他【panicked/恐慌】地寻找她的踪迹，尝试了各种方法。最终，他决定放下所有尊严，展开追妻行动。改变需要勇气。他【finally/终于】做出决定。他【determined/坚定】地开始追妻。追妻之旅【start/开始】。

追妻后，顾辰历经千辛万苦。他放下所有的骄傲，只为博她一笑。追妻需要坚持。他【patient/耐心】等待机会，【sincere/真诚】表达悔意。他【nervous/紧张】但同时也【hopeful/充满希望】。他【spend/花费】大量时间追求。

终于，在无数次的努力后，苏瑶终于被他的真心打动，答应给他一次机会。告白【successful/成功】。她【moved/感动】地原谅他。爱情终于【return/回来】。

他明白，爱情不能践踏，需要用真心去珍惜。他开始彻底改变自己，永远不再伤害她。爱情在此重生。他【respect/尊重】她的感受，【cherish/珍惜】她的存在，【protect/保护】她的心。他【active/积极】经营感情。

顾辰彻底改变，成为了真正的暖男。他告诉她："伤害让我失去你，悔改让我找回你。"他的改变让所有人惊讶。爱情在此升华。他【patient/耐心】地守护，【encourage/鼓励】彼此成长。他们的爱情成为【legend/传奇】。

追妻火葬场，让顾辰感受到悔改的痛苦和救赎的美好。他决定用余生守护她，用真心弥补过去的错误。这是他选择的道路，也是他赎罪的开始。每一次付出，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】幸福生活，让爱情更加【sweet/甜蜜】，【build/建立】属于他们的家。他【firmly/坚定地】相信救赎的力量。他【promise/承诺】会一直守护她。

某次婚礼上，顾辰分享了他爱情理念："失去才懂得珍惜，悔改才获得救赎。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。他用亲身经历证明，悔改的力量可以挽回爱情，真诚的付出可以获得原谅。每个人都被他【inspire/启发】。他感到无比【happy/幸福】和【fulfill/充实】。`,

  '禁忌之爱': `忙碌的写字楼里，陈悦正【prepare/准备】着部门会议的资料。作为部门经理的助理，她发现自己对上司产生了【special/特别】的感情。每一次相处都心跳加速，每一份工作都承载着暗恋的【secret/秘密】。她深知职场恋情的禁忌。办公室里【busy/忙碌】，她【focus/专注】于工作。她内心有些【conflict/矛盾】，充满挣扎。她【always/总是】保持专业的态度。

今天的任务是陪同经理出席重要晚宴。陈悦注意到他的眼神偶尔停留在自己身上，她努力控制心跳。她反复提醒自己，这不仅是同事，更是上司。这是一个需要【rationality/理智】和克制的过程。她【never/从不】表达心意，【always/总是】隐藏感情。她【control/控制】情绪，【maintain/保持】距离。

相处过程中，陈悦遇到了一个难题。她发现他也对自己有好感，经常在关键时刻保护她。她【confused/困惑】地分析自己的感情，试图保持理智。最终，她决定勇敢面对这份感情。发现需要勇气。她【finally/终于】承认感情。她【surprised/惊讶】于他的回应。感情开始【blossom/萌芽】。

发现彼此心意后，他们开始暗中交往。她发现，真正的爱情值得冒险。爱情需要勇气。她【brave/勇敢】面对挑战，【sincere/真诚】对待感情。她【nervous/紧张】但同时也【happy/幸福】。她【spend/花费】时间经营爱情。

终于，他们决定公开恋情。虽然面临职场压力，但他们相信彼此。告白【successful/成功】。她【moved/感动】地看着他。两颗心终于【together/在一起】。

她明白，爱情需要勇气打破禁忌，需要真心去守护。他们开始公开相处，面对所有挑战。爱情在此重生。她【respect/尊重】他的工作，【support/支持】他的事业，【share/分享】生活。她【active/积极】经营感情。

陈悦开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："禁忌的爱情更需要勇气守护。"他们的爱情从暗恋开始，在勇气中绽放。爱情在此升华。她【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

办公室恋情，让陈悦感受到禁忌的挣扎和爱情的美好。她决定用勇气守护这段感情，用真心面对所有挑战。这是她选择的道路，也是她爱情的开始。每一次付出，都是一次对爱情的诠释。这是她的承诺。她【determine/决心】一生【devote/奉献】给他，【create/创造】幸福生活，让爱情更加【brave/勇敢】，【build/建立】属于他们的家。她【firmly/坚定地】相信爱情的力量。她【promise/承诺】会一直珍惜彼此。

某次婚礼上，陈悦分享了她爱情理念："爱情值得打破禁忌，真心值得所有勇气。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。她用亲身经历证明，勇气的力量可以守护爱情，真诚的付出可以打破禁忌。每个人都被她【inspire/启发】。她感到无比【happy/幸福】和【fulfill/充实】。`,

  '破冰之旅': `热闹的大学校园里，林明和苏瑶是公认的【enemy/冤家】。作为同班同学，他们因为一次误会而成为敌人。每一次相遇都充满火药味，每一句话都带着刺。他们深知彼此的敌意。校园里【vibrant/生机勃勃】，他们【avoid/避免】接触。他们内心充满了【pride/骄傲】，不愿低头。他们【always/总是】保持对立的姿态。

今天是一场重要的团队作业。林明注意到被迫和苏瑶一组，气氛十分尴尬。他们反复争论，无法达成一致。这是一个需要【cooperation/合作】和妥协的过程。他们【never/从不】轻易让步，【always/总是】坚持己见。他们【argue/争论】观点，【refuse/拒绝】妥协。

合作过程中，他们遇到了一个难题。项目需要两人的共同努力，否则都会失败。他们【forced/被迫】开始沟通，慢慢了解彼此。最终，他们发现之前的误会只是一场乌龙。改变需要真相。他们【finally/终于】解除误会。他们【surprised/惊讶】于真相。误会开始【clear/消除】。

误会解除后，他们开始重新认识彼此。她发现他其实很细心，他发现她其实很善良。和解需要时间。他们【slowly/慢慢】接纳彼此，【gradually/逐渐】放下戒备。他们【nervous/紧张】但同时也【relieved/释然】。他们【spend/花费】时间了解。

终于，在一次深夜的讨论中，他们彻底解开了心结，成为了朋友。和解【successful/成功】。他们【moved/感动】地看着彼此。误会终于【resolve/化解】。

他们明白，误会需要勇气去解开，友谊需要真心去守护。他们开始真正相处，珍惜这份来之不易的友谊。友谊在此重生。他们【respect/尊重】彼此，【support/支持】对方，【share/分享】心事。他们【active/积极】经营友谊。

林明和苏瑶成为了最好的朋友，他们的故事激励了很多人。他们告诉同学们："误会需要勇气解开，友谊需要真心守护。"他们的故事帮助了许多人。经验在此传递。他们【patient/耐心】地解释，【encourage/鼓励】和解精神。同学们都受到他们的【inspire/启发】。

误会重重，让他们感受到误会的痛苦和和解的美好。他们决定用真心守护这份友谊，用勇气面对所有误会。这是他们选择的道路，也是他们和解的开始。每一次沟通，都是一次对友谊的诠释。这是他们的承诺。他们【determine/决心】一生【devote/奉献】给友谊，【create/创造】美好回忆，让友谊更加【sincere/真诚】，【build/建立】属于他们的羁绊。他们【firmly/坚定地】相信友谊的力量。他们【promise/承诺】会一直珍惜彼此。

某次班会上，他们分享了友谊理念："误会是友谊的试金石。"台下同学深受启发，开始思考自己的友谊。班会现场【applaud/响起掌声】。他们用亲身经历证明，勇气的力量可以解开误会，真诚的付出可以获得友谊。每个人都被他们【inspire/启发】。他们感到无比【happy/快乐】和【fulfill/充实】。`,

  '穿越情缘': `神秘的古宅里，张明正【observe/观察】着周围陌生的环境。作为意外穿越而来的现代人，他发现自己来到了古代。眼前的一切都是那么【strange/陌生】，他必须找到回去的方法。古宅里【ancient/古老】，他【explore/探索】着环境。他内心充满了【confuse/困惑】，不知所措。他【always/总是】保持谨慎。

今天他遇到了这家的千金苏瑶。张明注意到她的美丽和善良，心中升起异样的感觉。他反复思考如何融入这个时代，如何找到回去的路。这是一个需要【adapt/适应】和智慧的过程。他【never/从不】放弃回家的希望，【always/总是】努力适应。他【learn/学习】古代礼仪，【integrate/融入】时代。

适应过程中，张明遇到了一个难题。他发现自己爱上了苏瑶，但不知能否长相厮守。他【struggle/挣扎】地面对感情，尝试了多种选择。最终，他决定珍惜当下，即使未来未知。改变需要勇气。他【finally/终于】做出选择。他【determined/坚定】地面对感情。爱情开始【blossom/萌芽】。

接受感情后，张明开始珍惜和苏瑶在一起的每一天。他发现，爱情超越了时空。爱情需要珍惜。他【sincere/真诚】对待感情，【cherish/珍惜】每一天。他【nervous/紧张】但同时也【happy/幸福】。他【spend/花费】时间陪伴。

终于，在一个满月之夜，他面临选择：回去还是留下。最终，他选择了爱情。告白【successful/成功】。他【firmly/坚定】地选择留下。爱情战胜了时空。

他明白，爱情超越了时空，需要勇气去守护。他开始真正融入这个时代，和苏瑶共度一生。爱情在此重生。他【respect/尊重】她的时代，【adapt/适应】新的生活，【share/分享】所有。他【active/积极】经营爱情。

张明开始珍惜每一天的相处，用心感受爱情的美好。他告诉她："穿越千年只为遇见你。"他们的爱情跨越时空，在宿命中绽放。爱情在此升华。他【patient/耐心】地陪伴，【encourage/鼓励】彼此成长。他们的故事成为【legend/传奇】。

跨越千年，让张明感受到穿越的神奇和爱情的宿命。他决定用余生守护她，用勇气面对所有挑战。这是他选择的道路，也是他穿越的宿命。每一次付出，都是一次对爱情的诠释。这是他的承诺。他【determine/决心】一生【devote/奉献】给她，【create/创造】幸福生活，让爱情更加【eternal/永恒】，【build/建立】属于他们的家。他【firmly/坚定地】相信爱情的力量。他【promise/承诺】会一直守护她。

某次婚礼上，张明分享了他爱情理念："爱情穿越千年，只为遇见你。"台下宾客感动落泪。婚礼现场【applaud/响起掌声】。他用亲身经历证明，爱情的力量可以跨越时空，真心的付出可以战胜命运。每个人都被他【inspire/启发】。他感到无比【happy/幸福】和【fulfill/充实】。`
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

    const num = String(11 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 11 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 11 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n故事11-20已重新生成完成！（大学生喜爱题材，情节跌宕起伏）');
}

main();