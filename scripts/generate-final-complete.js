const fs = require('fs');
const path = require('path');

const storyConfigs = [
  { theme: '霸总', title: '豪门契约：总裁的替身新娘', subtitle: '契约的开始', tags: '霸总 · 契约婚姻 · 豪门恩怨' },
  { theme: '霸总', title: '豪门契约：总裁的替身新娘', subtitle: '总裁的试探', tags: '霸总 · 契约婚姻 · 豪门恩怨' },
  { theme: '大女主', title: '重生之商业女王', subtitle: '重生归来', tags: '重生 · 商战 · 大女主' },
  { theme: '大女主', title: '重生之商业女王', subtitle: '商业布局', tags: '重生 · 商战 · 大女主' },
  { theme: '职场', title: '职场逆袭：从实习生到总监', subtitle: '新人入职', tags: '职场 · 励志 · 成长' },
  { theme: '职场', title: '职场逆袭：从实习生到总监', subtitle: '遭遇霸凌', tags: '职场 · 励志 · 成长' },
  { theme: '校园', title: '那年夏天，我们相遇', subtitle: '初见学长', tags: '校园 · 青春 · 恋爱' },
  { theme: '校园', title: '那年夏天，我们相遇', subtitle: '社团邂逅', tags: '校园 · 青春 · 恋爱' },
  { theme: '恋爱', title: '心动信号', subtitle: '咖啡店偶遇', tags: '恋爱 · 都市 · 甜宠' },
  { theme: '恋爱', title: '心动信号', subtitle: '表白时刻', tags: '恋爱 · 都市 · 甜宠' }
];

// 所有故事内容 - 每个故事约50个词汇
const storyContents = {
  '契约的开始': `夜幕降临，城市的高楼大厦在霓虹灯的映照下显得格外【spectacular/壮观的】。林若雪站在公司的落地窗前，望着脚下【magnificent/宏伟的】都市夜景，心中五味杂陈。家族企业近期遭遇了前所未有的【crisis/危机】，父亲突然住院，公司内部管理【chaotic/混乱的】，竞争对手趁机【attack/攻击】。

为了挽救家族事业，她不得不接受一个【critical/关键的】决定——与沈氏集团签订契约。沈墨尘是沈氏集团的总裁，商界公认的【prominent/杰出的】人物。他为人冷傲，从不轻易【accept/接受】任何女性。然而，正是这份契约，将两人的命运紧紧【bind/绑定】在一起。

第一次见面，沈墨尘用【sharp/锐利的】目光打量着她，眼神中透着几分【suspicion/怀疑】。他问："你知道这份契约【involve/包含】什么吗？"林若雪点头，她清楚自己即将【bear/承担】的责任。契约规定，她需要在沈氏集团工作三年，期间必须【obey/服从】公司的安排。

而沈氏集团将注资【support/支持】她的家族企业。这看似公平，实则【contain/包含】着更多复杂的条件。签约当天，林若雪穿着简洁的职业装，神情【calm/冷静的】地走进会议室。沈墨尘坐在主位，面前摆放着【formal/正式的】合同文件。他递过文件，说："仔细【review/审查】，有任何问题可以提出。"

林若雪认真【analyze/分析】每一个条款，她的专业素养让她很快发现了几个【potential/潜在的】风险点。她提出【reasonable/合理的】意见，沈墨尘略微【hesitate/犹豫】，随即点头同意调整。这个过程让沈墨尘对林若雪产生了新的【respect/尊重】。

原本以为她只是一个需要帮助的【vulnerable/脆弱的】女子，没想到她具备如此【remarkable/非凡的】商业洞察力。契约签订后，林若雪正式进入沈氏集团【work/工作】。她被安排在战略发展部门，负责市场【research/研究】和项目策划。

尽管起点不算太高，但她【determined/坚决的】用自己的能力证明价值。工作的第一个月，林若雪每天【diligent/勤奋的】工作到深夜。她认真研究每一个项目【detail/细节】，分析市场趋势，【prepare/准备】详细报告。她的努力逐渐得到同事的【recognize/认可】。

沈墨尘偶尔会在会议上看到她的【performance/表现】。虽然他依然保持【indifferent/冷漠的】态度，但内心已经开始【attention/关注】这个特别的员工。某个周末，公司【organize/组织】团队活动。林若雪因为工作繁忙差点忘记【attend/参加】，但最后还是赶到了活动现场。

沈墨尘也在场，这是他们第一次在工作之外的【occasion/场合】相处。活动中，两人被安排在同一组【complete/完成】任务。林若雪展现出的协调能力和【professional/专业的】能力让沈墨尘印象深刻。

他开始【suspect/怀疑】，契约也许不只是商业交易。夜深了，活动结束。沈墨尘开车送林若雪【home/回家】。车内气氛安静，只有音乐【gentle/柔和的】流淌。临别时，他突然说："明天有个【important/重要的】会议，准备好。"

林若雪点头，心中却有些【nervous/紧张的】。这份契约的开始，也许比她想象的更加【complex/复杂的】。她知道，未来的日子里，将会有更多【challenge/挑战】等待着她。她决心用实力证明自己的价值，让这份契约变得有意义。

回到家中，她独自坐在窗边，望着城市的夜景。霓虹灯闪烁，如同她内心的【expectation/期待】。她知道，前方的路不会平坦，但她已经做好了准备。明天是新的一天，也是新的开始。`,

  '总裁的试探': `沈氏集团的【annual/年度的】会议如期举行。会议室里坐满了各部门主管，【atmosphere/气氛】庄重而紧张。林若雪坐在角落的位置，手中拿着准备好的【report/报告】。沈墨尘主持会议，他用【steady/稳定的】声音分析公司近期的运营状况。

他指出存在的【issue/问题】并提出改进方向。每一个主管都需要发表【opinion/观点】。轮到林若雪发言时，她清晰地阐述了自己的【strategy/策略】。她分析了竞争对手的策略，提出了公司可以采取的【effective/有效的】方案。

她的发言引起了在场所有人的【attention/关注】。会议结束后，沈墨尘将林若雪叫到【private/私人的】办公室。他问："你的分析很详细，数据来源是什么？"林若雪【explain/解释】了她的调研方法和信息渠道。沈墨尘微微【nod/点头】。

他说："继续关注这个方向，下个月提交【complete/完整的】报告。"他的语气依然冷淡，但林若雪感受到这是对她能力的【approve/认可】。接下来的日子里，林若雪投入更多时间【investigate/调查】市场动态。

她收集了大量数据，分析行业【trend/趋势】，预测可能的变化。她希望这份报告能够真正【benefit/有益于】公司。工作中，她遇到了不少【obstacle/障碍】。有些同事对她的快速晋升感到不满，暗中【create/制造】障碍。

林若雪选择用实力回应【challenge/挑战】，她相信成果会证明一切。某个深夜，林若雪加班【process/处理】数据。沈墨尘路过办公室，看到她还在【work/工作】。他走进去，问："需要帮助吗？"林若雪抬头，略感【surprise/惊讶】。

两人开始讨论报告的【content/内容】。沈墨尘提出几个关键问题，林若雪逐一【answer/回答】。交流中，他们发现彼此对商业的理解有着惊人的【similar/相似的】观点。报告完成那天，林若雪将文件【submit/提交】给沈墨尘。

他用认真的目光阅读每一页【detail/细节】，时不时提出补充建议。这份报告的质量【exceed/超出】他的预期。董事会会议召开，沈墨尘展示了这份【excellent/优秀的】报告。董事们对报告内容给予高度【praise/赞扬】。

公司的决策将依据林若雪的分析进行【adjust/调整】。林若雪的名字开始在集团内部被更多人【know/了解】。她的专业能力和敬业精神赢得了普遍【respect/尊重】。但她清楚，这只是【begin/开始】。

沈墨尘对林若雪的关注逐渐【increase/增加】。他开始在工作安排上给予她更多【opportunity/机会】，让她参与重要项目的决策。这是对她的【trust/信任】，也是对她能力的考验。某次项目讨论中，沈墨尘突然问："如果让你【manage/管理】这个项目，你会怎么做？"

林若雪思考片刻，提出了完整的【plan/计划】方案。沈墨尘听完，露出罕见的【smile/微笑】。他说："很好，这个项目由你【lead/领导】。"这句话让林若雪心中涌起复杂的情绪。契约中的【condition/条件】，正在变成认可。

她走出会议室，感受到一种前所未有的【confidence/信心】。这一刻，她知道自己已经踏上了正确的道路。未来的挑战依然存在，但她已经准备好迎接一切。`,

  '重生归来': `车祸发生的那一刻，林若雪感到生命正在【fade/流逝】。周围的景象变得【blur/模糊】，视线逐渐昏暗，一种【desperate/绝望的】感觉涌上心头。她闭上眼睛，以为一切都【end/结束了】。然而，当她再次睁开眼睛时，发现自己躺在熟悉的【room/房间】里，窗外是【familiar/熟悉的】风景。

墙上贴着大学时代的【photo/照片】，桌上放着书本和笔记本。这是十年前的房间。她震惊地【realize/意识到】，自己重生回到了过去。十年的记忆在她脑海中清晰【emerge/浮现】，她知道未来将要发生的一切。包括那些曾经让她痛苦的【experience/经历】和【tragic/悲剧的】结局。

这一世，她发誓要改变命运。前世的失败教训让她明白，只有主动【control/掌控】人生，才能避免悲剧重演。她决定从现在开始，为自己而【live/活】。她【cherish/珍惜】这次重来的机会，决心不再重蹈覆辙，【overcome/克服】所有障碍。大学毕业那年，前世她接受了家人的安排，进入一家普通【enterprise/企业】工作。

那份工作【boring/枯燥的】乏味，让她浪费了五年光阴，没有实现自己的【ambition/抱负】。这次，她做出不同的【decision/决定】。林若雪拒绝家人的提议，决定独立【pursue/追求】事业。她利用前世对市场的了解，瞄准了一个即将蓬勃发展的【industry/行业】，敏锐地【perceive/察觉】到商机。

她知道，未来十年这个领域将迅速【grow/增长】。创业初期充满【difficulty/困难】。资金不足、人脉有限、经验欠缺，每一个问题都让她感到【stress/压力】，有时甚至陷入【dilemma/困境】。但她没有退缩，而是用坚定的信念【drive/推动】自己前进，【persist/坚持】不懈地努力，从不【hesitate/犹豫】。

她开始系统学习相关知识，参加行业会议，结识志同道合的人。她发现，重生赋予她独特的【advantage/优势】——她能预见趋势，把握机会。第一个项目启动，林若雪投入全部【energy/精力】，全身心【devote/投入】到事业中。

她每天工作十几个小时，研究产品设计，分析用户需求，制定营销【strategy/策略】。她的努力换来初步成功。产品上线后，市场反馈超出【expect/预期】。用户数量快速增长，媒体开始关注这个年轻的【entrepreneur/创业者】。

林若雪的名字出现在行业报道中，她开始【accumulate/积累】一定的【reputation/声誉】。然而，成功引来了麻烦。竞争对手开始暗中打压，试图破坏她的【business/事业】。林若雪早有准备，她用冷静的头脑应对每一次【challenge/挑战】，展现出【profound/深刻的】商业智慧和【mature/成熟的】判断。

前世的经验告诉她，哪些人值得信任，哪些人需要【cautious/警惕】。她谨慎选择合作伙伴，避免落入陷阱。她的判断一次次证明【correct/正确的】。半年后，她的公司获得第一笔【invest/投资】。投资人看好她的潜力，愿意支持她继续发展，这为她的事业奠定了【foundation/基础】，获得了【crucial/关键的】资金支持。

这笔资金让她能够扩大团队，推进更多项目。团队逐渐【expand/壮大】，林若雪开始培养管理能力。她用前世学到的领导技巧，建立高效的【mechanism/机制】，【inspire/激励】团队成员。团队成员对她充满信任。重生归来的一年，林若雪完成了前世五年无法达到的【goal/目标】。

她知道，这只是开始。未来的日子里，她将创造更多【miracle/奇迹】。她站在公司窗前，望着繁忙的街道，心中充满【gratitude/感激】和【confidence/信心】。这一世，她不再是那个被命运摆布的女孩，而是掌控自己人生的强者，怀着【distinct/明显的】自信迎接未来，【determined/坚决的】实现梦想。`,

  '商业布局': `公司【stable/稳定】运行后，林若雪开始思考更大规模的【development/发展】。她清楚，想要在商业领域成功，必须建立完整的战略布局，做出【rational/理性的】规划。前世记忆让她了解行业的演变【trend/趋势】。她知道，未来五年市场将发生重大变化，只有【advance/提前】准备的企业才能抓住【opportunity/机会】，获得【competitive/竞争的】优势，在激烈的【contest/竞争】中脱颖而出。

她召集【core/核心】团队成员，展开战略【discussion/讨论】。会议室里，每个人都认真聆听她的分析。林若雪用数据支撑观点，描绘未来的【blueprint/蓝图】，展现出【ambitious/有雄心的】规划和【brilliant/出色的】洞察。会议决定，公司将同时推进三个方向的发展：产品【innovation/创新】、渠道拓展、品牌建设。每一项都需要大量投入，进行【accurate/准确的】资源配置。

但林若雪相信这是【essential/必要的】【invest/投资】。产品创新方面，她组建专门的研发团队。团队的任务是研究新技术，开发符合未来需求的【product/产品】。她设定【specific/明确的】目标和时间节点，科学【allocate/分配】资源，【prioritize/优先】处理关键项目。渠道拓展方面，她决定建立线上和线下双重网络，采取【flexible/灵活的】策略。

线上平台将【coverage/覆盖】更广的用户群体，线下门店将提供优质【service/服务】。两者的结合将【maximize/最大化】市场覆盖。品牌建设方面，她聘请专业的营销团队。品牌形象需要【carefully/精心】设计，传播【strategy/策略】需要科学规划，建立【distinct/独特的】品牌个性。她希望公司能够建立独特的市场【position/定位】，赢得消费者【loyalty/忠诚】。

布局实施的【procedure/过程】充满挑战。资金压力让财务部门担忧，人力紧张让管理层【anxious/焦虑】。林若雪用坚定的态度【soothe/安抚】每个人的顾虑。她亲自参与每一个环节的推进，【monitor/监控】项目进展，及时【adjust/调整】方案。研发会议中，她提出创意建议；营销讨论中，她分析传播方案；渠道建设中，她协调各方【resource/资源】，促进部门【cooperate/合作】。

三个月后，初步成果显现。新产品完成设计【prototype/原型】，进入【evaluation/评估】阶段。线上平台开始【trial/试】运营，品牌宣传方案获得认可。每一步进展都证明她的判断【correct/正确】。竞争对手开始注意到她的动作。他们试图【imitate/模仿】她的策略，甚至派人调查她的背景，采取【hostile/敌对的】行为。

但林若雪早已【anticipate/预料】这些行为，她用保密措施保护核心【technology/技术】，确保公司的【secure/安全】，保护【intellectual/知识产权】。某个深夜，林若雪独自【organize/整理】文件。她看着桌上的数据报表，心中涌起复杂的感受。前世她从未拥有这样的能力，今世她正在创造全新的局面。

她想起前世的失败，那些让她痛苦的教训。正是那些经历，让她明白商业的【essence/本质】。重生赋予她第二次机会，她决心不浪费每一刻。团队会议上，林若雪说："我们的目标不只是成功，而是领先。"这句话【stimulate/激发】每个人的热情，促进团队【collaboration/合作】，形成强大的【synergy/协同效应】。

接下来，林若雪【formulate/制定】了详细的执行计划。她将目标分解为可衡量的阶段性成果，确保每一步都有明确的【index/指标】，建立【measure/衡量】标准。团队成员被她的清晰思路所感染，纷纷表示愿意全力以赴。林若雪知道，领导力不仅在于制定战略，更在于激发团队的【potential/潜能】，推动组织【transformation/转型】，实现【sustain/持续】发展。

随着时间推移，公司的各项业务稳步【promote/推进】。新产品在市场上获得良好反响，用户反馈积极，产品获得【premium/优质的】评价。线上平台的【flow/流量】持续增长，线下门店的【sale/销售】额也稳步上升。品牌【reputation/知名度】逐渐提升，开始在同行业中脱颖而出，实现了重要的【breakthrough/突破】，获得市场【recognize/认可】。

林若雪站在办公室的窗前，望着城市的夜景，心中充满感慨。她知道，这一切来之不易，是重生给予她的机会，也是她用努力换来的成果。未来的路还很长，但她已经找到了前进的方向，拥有了清晰的【vision/愿景】，坚定地【execute/执行】每一个计划。`,

  '新人入职': `清晨的地铁站人潮拥挤。林晓挤在人群中，手握【resume/简历】文件，心中充满【nervous/紧张】和期待。今天是她入职新公司的第一天，也是【career/职业发展】的新起点，怀揣着【ambition/抱负】。公司大楼矗立在【commercial/商业】区中心，玻璃幕墙映照着【sunlight/阳光】，显得格外壮观。

林晓走进大厅，被眼前的景象【shock/震撼】，宽敞的办公环境【impress/给...留下深刻印象】。前台接待员礼貌地【guide/指引】她前往人事部门。人事部门完成入职【procedure/手续】后，将她带到设计部门。部门主管简单【introduce/介绍】工作内容，同事们大多埋头工作，没有人特别留意这个新来的【intern/实习生】，她只是众多【applicant/申请人】中的一个。

林晓找到自己的【seat/座位】，开始熟悉工作【environment/环境】。桌上摆放着电脑和【supply/用品】，墙上的公告栏贴着团队照片和项目【progress/进度】。第一个任务是协助【organize/整理】设计文件。林晓认真阅读每一份文件，用笔记本记录关键【information/信息】，展现出【attentive/专注的】态度和【efficient/高效的】工作方式。

她希望尽快适应工作【rhythm/节奏】。午休时间，几个【colleague/同事】在休息区聊天，【atmosphere/气氛】轻松愉快。林晓试着【integrate/融入】，但发现自己很难跟上他们的对话。她决定用行动【demonstrate/展示】自己的【capability/能力】，而不是急于【perform/表现】。下午，主管安排她参与项目讨论，这是她的第一个正式【assignment/任务】。

虽然只是旁听，林晓依然认真记录会议内容，仔细【observe/观察】每个人的发言。她注意到团队中存在不同的意见分歧，观点存在【contrast/差异】。资深设计师李娜表现出明显的主导态度，她在讨论中多次打断他人发言，坚持自己的观点。林晓观察到这种动态，默默【learn/学习】，培养自己的【insight/洞察力】。

下班时分，办公室逐渐安静。林晓继续整理当天的工作笔记。她发现，快速学习是适应新环境的【key/关键】，而良好的【attitude/态度】至关重要。地铁回家的路上，林晓思考今天的感受。职场比她想象复杂，人际关系微妙而重要。她需要找到合适的方式融入，建立【relationship/关系】，理解公司独特的【culture/文化】。

宿舍里，她翻开专业书籍，补充设计理论知识。大学期间的【study/学习】只是基础，职场需要更实用的【skill/技能】和【qualification/资格】。她决定每晚抽出时间自我提升，【enhance/提升】专业水平，不断【accumulate/积累】经验。第二天，林晓继续投入工作。她主动询问同事关于项目的细节，用积极的【initiative/主动性】获取信息，【adapt/适应】新环境。

同事逐渐愿意与她交流，她感受到被【accept/接纳】。一周过去，林晓对工作内容有了基本了解。她开始承担简单的【assignment/任务】，用认真的态度完成每一项工作，注意【deadline/截止日期】。主管注意到她的表现，给予肯定的【feedback/反馈】，对她【deliver/交付】的工作表示满意。虽然只是实习生，林晓展现出超出预期的【professional/专业的】态度。

这让主管对她产生好感，认为她有潜力成为优秀的【profession/职业】人才。林晓努力完成每一次【instruction/指示】，积极【communicate/沟通】，展现【responsibility/责任】感。她明白在职场中【cooperate/合作】的重要性，主动寻求【guidance/指导】。入职的第一个月，林晓经历了紧张、适应、成长的过程。她明白，职场之路漫长而艰难，但她已迈出第一步。每个夜晚，她都会反思今天的收获，为明天做好准备，追求【improvement/改进】。她知道，成长需要时间和【persistence/坚持】，但她愿意付出【effort/努力】，为团队【contribute/贡献】自己的力量，实现个人【value/价值】。`,

  '遭遇霸凌': `工作第二个月，林晓遭遇了意想不到的【difficulty/困难】，这种【sudden/突然的】遭遇让她措手不及。资深设计师李娜开始对她设置各种【obstacle/障碍】，让她的工作变得困难。李娜将最繁琐的任务交给林晓，却不提供必要的【guidance/指导】，完全没有起到资深员工应有的【responsibility/责任】。当林晓询问细节时，李娜总是敷衍回应，甚至表现出不耐烦的态度，展现出极差的【patience/耐心】。林晓感到十分【frustrate/沮丧】，但她努力保持【calm/冷静的】心态，试图用积极的方式【handle/处理】这种局面，不让负面情绪影响自己的工作【efficiency/效率】。

团队会议上，李娜故意在众人面前批评林晓的工作。她指出设计中的问题，语气尖锐而刻薄，让林晓感到深深的【embarrass/使尴尬】和羞耻。林晓感到委屈，却无法反驳，只能默默承受这份【humiliation/羞辱】。其他同事看在眼里，却选择沉默，仿佛这件事与他们毫无【relation/关系】。他们不愿得罪李娜，也不想卷入纷争，毕竟没有人愿意为了一个新人而【sacrifice/牺牲】自己在公司的处境和未来发展。林晓意识到，职场人际关系比她想象【complicate/复杂】得多，这种【phenomenon/现象】在许多公司都存在，是一种常见的职场【culture/文化】问题。

某次项目中，林晓完成的设计方案被李娜否定。李娜声称方案不够【professional/专业】，要求林晓重新【modify/修改】，完全不给出任何建设性的【feedback/反馈】。但林晓知道，方案本身并无明显【issue/问题】，只是李娜故意【target/针对】她而已。林晓尝试与李娜【communicate/沟通】，希望了解【specific/具体】的要求，以便更好地改进工作。李娜却态度冷淡，只说"自己想办法"，完全没有【cooperate/合作】的意愿，展现出【hostile/敌对的】态度。

这种回应让林晓感到【helpless/无助】和孤立。深夜加班时，林晓独自修改设计方案。她反复【adjust/调整】细节，希望满足李娜的【standard/标准】，但无论怎么努力都无法获得认可。但她不清楚，李娜的标准到底是什么，这种【uncertain/不确定的】要求让她十分苦恼。方案提交后，李娜再次否定。她提出新的问题，要求继续修改，这种行为【obvious/明显的】是在故意刁难。林晓开始怀疑，李娜是否故意为难她，这种行为是否构成了职场【bully/霸凌】，是否需要向上级【report/报告】。

压力持续【increase/增加】，林晓的工作状态受到【affect/影响】，每天都感到精疲力竭。她变得焦虑不安，甚至出现失眠症状，每天晚上都难以入睡，脑海中不断【recall/回想】白天的遭遇，陷入深深的【anxiety/焦虑】之中。她考虑向主管反映情况，但又担心后果，害怕这会【damage/损害】自己的职业发展和在公司的发展前景。休息时间，同事私下提醒林晓，他们说李娜一直用这种方式对待新人，希望林晓能够忍耐，但这种【suggestion/建议】并不能真正解决问题，只是消极的【avoid/逃避】策略。

林晓听着，心中五味杂陈，感到十分【confuse/困惑】和无助。某天，林晓的设计方案终于获得认可，客户的满意度证明了她工作的【quality/质量】。但李娜在团队会议上声称，方案的完善主要依靠她的指导，完全不【mention/提及】林晓的付出和努力，试图【claim/声称】所有的功劳都属于自己。林晓感到愤怒，却无法当场反驳，她意识到自己需要【strengthen/加强】实力，才能在这种环境中站稳脚跟，获得应有的【respect/尊重】。这个经历让林晓明白，职场中存在不公平的游戏。她决定不被动承受，而是寻找改变的【method/方法】，用行动证明自己的价值。

她开始记录工作中遇到的每一次问题，【gather/收集】证据材料，建立完整的【document/文档】记录。她保存邮件记录、整理工作日志，用事实证明自己的付出和【achievement/成就】。林晓同时加强专业学习，她每天抽出时间研究设计技巧，阅读行业文章，提升个人水平，努力让自己变得更加【competent/有能力的】和专业。她相信，实力是最好的回应，【perseverance/坚持】终将带来改变，努力一定会有【result/结果】。

遭遇霸凌的经历虽然痛苦，但林晓从中学会了应对。她不再畏惧困难，而是用坚定的态度面对每一个困境，展现出强大的【willpower/意志力】。这段经历让她变得更加【mature/成熟的】，也让她明白了职场生存的【principle/原则】。她清楚，未来的职场还有更多挑战等待，她必须准备好迎接每一场考验，用实力证明自己的【value/价值】，实现自己的职业【goal/目标】。`,

  '初见学长': `九月的【campus/校园】充满【vibrant/充满活力的】青春气息，空气中弥漫着新学期的【excitement/兴奋】和期待。大一新生林小雨拖着行李箱，走在【unfamiliar/陌生的】校园道路上。周围是熙熙攘攘的人群，每个人都在寻找自己的【direction/方向】和目的地。她对照着校园地图，试图找到报到【location/地点】。然而复杂的道路布局让她【confuse/困惑】，各个路口的指示牌让她更加迷失，感到一种无助的【panic/恐慌】。

她站在路边，望着各个【building/建筑】，不知该往何处走。阳光透过树叶洒下斑驳的光影，校园的景色十分【attractive/吸引人的】，绿树成荫，花草盛开。但她此刻的心思全在寻找报到点上，没有心情欣赏这美丽的【landscape/风景】。图书馆门前，她不小心撞到了一个高大的【figure/身影】。手中的地图和行李箱把手滑落，她慌忙【apologize/道歉】，脸上泛起羞涩的红晕。对方却微笑着帮她捡起物品，态度十分【polite/礼貌的】和友善。这个男生穿着简洁的衬衫，神情【gentle/温和】而友善，给人一种舒适的【impression/印象】，让林小雨紧张的心情顿时【relax/放松】。

他问："新生报到吗？需要帮助吗？"林小雨点头，略带紧张地说明自己的【confusion/困惑】和迷失。男生接过她的行李箱，说："我带你去报到点。"他熟练地穿过校园道路，向她介绍沿途的【scenery/景观】和建筑。一路上，他热情地介绍着学校的历史和各个建筑的【function/功能】，讲述着学校的传统和故事。林小雨认真聆听，心中充满【gratitude/感激】，感受到学长对新生的真诚【care/关心】。

报到点到达后，男生帮她【complete/完成】登记手续，还细心地指导她如何填写各类表格，展现出极大的【patience/耐心】。林小雨得知他的名字是陈浩，计算机系大三【student/学生】，是学校的学生会成员，担任重要的【position/职位】。他说："有什么问题可以找我。"这句话让林小雨感到十分【relieve/宽慰】，原本紧张的心情逐渐放松。宿舍【assign/分配】后，林小雨开始整理房间，布置自己的新生活空间。室友们陆续到达，每个人带着不同的背景和【personality/性格】，展现出各自的特色和【style/风格】。

她们很快开始交流，建立起初步的【friendship/友谊】。大家互相分享高考的经历和对大学的【expectation/期待】，气氛十分融洽和【harmony/和谐】。校园【adapt/适应】的第一周，林小雨参加各种新生活动，体验丰富多彩的校园生活。她在社团展览中发现摄影社团，决定报名参加，追求自己的兴趣和爱好。她一直对摄影有浓厚兴趣，高中时就【purchase/购买】了自己的第一台相机，开始了摄影的探索之路。社团面试时，她再次【encounter/遇见】陈浩，感到惊喜和【delight/喜悦】。

他是社团的【core/核心】成员，负责审核新成员的申请，展现出领导力和【responsibility/责任】。他看到林小雨，露出熟悉的微笑，似乎还记得他们的初次相遇。林小雨顺利加入摄影社团，开始了新的学习旅程。第一次活动在校园湖边举行，陈浩讲解摄影基础【knowledge/知识】和技术要点。他的讲解清晰而有趣，新成员们认真聆听，不时发出赞叹的声音，对他的【talent/才能】和专业水平表示敬佩。

活动中，陈浩注意到林小雨的相机操作很熟练，显示出扎实的【foundation/基础】和丰富的实践经验。他问她是否有摄影【experience/经验】，林小雨分享了自己高中时期的拍摄经历，以及她对光影构图的理解和思考。陈浩点头说："很有潜力，继续练习。"这句简单的评价让林小雨感到【encourage/鼓舞】，更加坚定了学习摄影的决心和【passion/热情】。

她决定在社团中投入更多精力，每天都抽出时间练习拍摄技巧，不断提升自己的【ability/能力】。校园生活逐渐【regular/规律】。林小雨每天上课、参加社团、与室友交流，日程安排得十分有序。她慢慢适应了大学节奏，找到自己的节奏，学习生活变得十分【balance/平衡】。某个周末，社团组织户外拍摄，林小雨和陈浩在同一组完成任务，共同探索摄影的奥秘。

两人在交流中发现彼此有许多共同兴趣，不仅喜欢摄影，还对音乐和电影有相似的品味。他们一边拍摄一边交谈，气氛轻松愉快，彼此的【understanding/理解】不断加深。初见学长的经历，成为林小雨大学生活的美好开端，留下了深刻的【memory/记忆】。她不知道未来会发生什么，但她期待每一个新的相遇。夕阳西下，校园染上金色的光芒，她站在湖边，心中充满对未来的【longing/憧憬】，相信大学生活将会是一段【memorable/难忘的】时光，承载着无数美好的【expect/期待】。`,

  '社团邂逅': `摄影社团的活动越来越【frequent/频繁】，每周都有丰富的拍摄安排和丰富的活动内容，让每个成员都能获得充分的【practice/实践】机会。林小雨每周参加至少两次拍摄【practice/练习】，她的【technique/技术】快速提升，逐渐掌握了光影构图的基本原理和专业技能，展现出惊人的进步和【potential/潜力】。陈浩经常在活动中【guide/指导】她技巧，耐心地解答她提出的各种问题，展现出【responsible/负责任的】态度和真诚的帮助精神，给林小雨带来极大的【inspire/激励】。社团组织了一次校外摄影比赛，参赛者需要在指定区域内拍摄主题作品，评委将评选最佳作品，这是一次展示个人才华的【opportunity/机会】和挑战，也是检验学习成果的【stage/舞台】。

林小雨报名参加比赛，心中充满期待和些许紧张，渴望在比赛中获得好成绩，证明自己的能力。比赛当天，参赛成员到达活动地点，每个人都带着自己的相机和【enthusiasm/热情】，展现出对摄影的热爱和追求。陈浩作为【organizer/组织者】，分配每个参赛者的拍摄区域，同时也为大家提供必要的【equipment/设备】支持和技术建议，确保比赛的顺利进行。林小雨被安排在一个公园区域创作，这片区域风景优美，视野开阔，充满自然的【beauty/美】。公园里【scenery/景色】优美，湖水清澈见底，树木葱郁，是摄影创作的【ideal/理想的】场所和灵感源泉，激发着创作者的想象力和【creativity/创造力】。林小雨用相机捕捉各种瞬间，努力寻找独特的视角和构图，展现出自己的【creativity/创造力】和艺术品味。

她选择不同的角度和光线，力求创作【unique/独特的】作品，呈现出与众不同的视觉效果和艺术风格。拍摄过程中，她不断思考如何将自然元素融入画面，呈现出【artistic/艺术的】美感，展现出对美的追求和【sensibility/感悟】。拍摄过程让她充满热情，完全沉浸在对光影的探索中，感受到摄影带来的【satisfaction/满足】和创作的快乐。拍摄结束后，成员们汇集在社团活动室，分享自己的作品和心得，交流拍摄的心得和体会。每个人的作品展示在屏幕上，评委开始逐张评价，分析每张照片的【merit/优点】和不足，给出专业的建议和【comment/评论】，帮助参赛者改进和提高。

林小雨【nervous/紧张】地等待结果公布，双手微微颤抖，心中充满不安和期待，感受着比赛的紧张氛围。陈浩作为评委之一，认真观察每一张照片，用专业的视角进行【evaluate/评估】和分析，展现出深厚的专业功底和审美能力。他对林小雨的作品给予好评，指出照片中的创意和技巧亮点，认为她的作品具有鲜明的【characteristic/特点】和艺术价值，展现出独特的创作风格和品味。

最终评选结果公布，林小雨的作品获得二等奖，获得了评委和同学们的认可和赞扬。虽然不是最高奖项，但她感到【satisfy/满意】和欣慰，证明了自己的进步和努力是有价值的。这是她第一次在摄影比赛中获得【recognize/认可】，证明了自己的努力是有【reward/回报】的，激励着她继续前进和进步。颁奖后，陈浩单独与林小雨交流，表达对她作品的欣赏和期待，展现出对她的关注和关心。他说："你的作品很有特色，继续发展这个风格。"他的语气诚恳而支持，让林小雨感到十分【inspire/激励】和鼓舞，感受到被认可的喜悦和满足。

林小雨感到陈浩的【encourage/鼓励】格外重要，这份认可让她更加坚定了摄影学习的决心和信心。她开始更加认真地对待摄影，希望未来能够创作更多优秀作品，展现出更高的【level/水平】和专业素养，实现自己的艺术梦想。社团活动中，两人逐渐增加交流频率，关系变得更加亲密和融洽，展现出深厚的友谊和情感。他们讨论摄影技巧、分享作品心得、推荐相关资源，彼此的【interaction/互动】变得更加自然流畅和愉快，建立起深厚的信任和默契。

某个周末，社团组织聚餐，大家在一家环境优雅的餐厅集合，共同庆祝社团的成就和友谊。成员们在餐厅欢聚，气氛轻松愉快，大家分享着拍摄心得和生活趣事，展现出团队的【solidarity/团结】和友谊，营造出温馨和谐的氛围。林小雨和陈浩相邻而坐，自然地开始交谈，话题逐渐深入，展现出两人之间的亲密和默契。谈话中，陈浩问起林小雨的学习情况，表现出真诚的【concern/关心】和关注，体现出他对林小雨的关心和在意。她分享专业课程的感受，他提供学习建议，两人从摄影话题逐渐扩展到学业和职业规划，展现出对彼此未来的【support/支持】和期待。

两人的话题从摄影扩展到更广领域，包括对未来的【plan/规划】和个人兴趣，以及对人生的思考和感悟。聚餐结束后，陈浩送林小雨回宿舍，延续着两人愉快的交流，展现出他对林小雨的照顾和关心。路上两人继续交流，分享彼此的成长经历和对生活的思考，展现出真诚的【communication/沟通】和情感交流。校园夜景映照着他们的身影，月光洒落在道路两旁，这个夜晚格外【beautiful/美好的】和温馨，留下了难忘的回忆和美好的印象，成为两人关系中重要的【milestone/里程碑】。

回到宿舍后，林小雨躺在床上回忆今天的经历，心中充满甜蜜的回忆和幸福的感受。她发现自己对陈浩产生了【special/特别的】关注，每当想起他温柔的笑容，心中都会涌起一阵甜蜜的悸动和心动的感觉。这种感觉让她心跳加速，脸颊微微泛红，她意识到自己可能已经产生了【emotion/情感】的萌芽和依恋，感受到爱情的最初信号和心动。

社团邂逅，让两人之间的关系开始变化，从普通的朋友逐渐变得更加亲密和特殊。林小雨不知道未来会如何发展，但她期待每一次与陈浩的相遇，珍惜每一次【communication/交流】的机会和时光，感受着两人之间不断升温的感情和默契。窗外月光洒落，她闭上眼睛，嘴角带着微笑，期待着明天社团活动能够再次见到那个让她心动的人，感受着他带来的温暖和幸福。摄影不仅是她热爱的事业，也成为了她与陈浩之间【precious/珍贵的】纽带，承载着美好的回忆和未来的期待，成为两人之间独特的【connection/联系】和情感桥梁，连接着两人的心灵和情感，创造出美好的爱情故事和未来的幸福，展现出青春最美好的【romance/浪漫】和梦想。`,

  '咖啡店偶遇': `周末的相亲活动让林雪感到【exhaust/疲惫】不堪，身心都承受着巨大的压力和负担，让人感到精疲力竭和崩溃。父母一直催促她尽快结婚，安排了无数次的相亲，完全不考虑她的真实感受和个人【preference/偏好】，展现出对女儿幸福的忽视和不理解，缺乏应有的尊重和关心。每一次都是【disappoint/失望】的经历，相亲对象要么性格不合，要么价值观差异太大，无法建立起真正的【compatibility/兼容性】和情感连接，让人感到灰心和沮丧。今天的对象是一个【narcissistic/自恋的】男人，他在餐厅不停炫耀自己的成就，声称自己拥有多少财富和社会【status/地位】，展现出极度的自负和虚荣，让人感到厌烦和不适。完全不关心林雪的想法，也不倾听她的表达，展现出极度的【arrogance/傲慢】和自大，完全缺乏对女性的尊重和理解，体现出极差的品格和修养。

林雪敷衍应付，心里想着逃离这个令人窒息的场合，感到极度的【discomfort/不适】和压抑，让人想要尽快离开这个环境。她找借口去洗手间，离开了餐厅，感到一种短暂的【relief/解脱】和自由，逃离了令人窒息的环境，获得片刻的轻松和释然。街边的咖啡店映入眼帘，温暖的灯光和柔和的音乐吸引了她的注意，给人一种舒适的【ambiance/氛围】和温馨的感觉，让人感到放松和愉悦。她走进去，买了一杯咖啡，选择一个安静的角落坐下，寻找片刻的宁静和放松，远离喧嚣和压力。这里的安静让她放松，仿佛远离了城市的喧嚣和生活的压力，找到难得的宁静和【tranquility/平静】，感受到心灵的慰藉和安宁，获得片刻的休息和放松。角落的座位空着，她坐下休息，享受着难得的【peace/宁静】时光，让心灵得到片刻的休憩和放松，感受着咖啡店带来的舒适和惬意。窗外的街景流动，她观察着路人的身影，思绪渐渐平静下来，沉浸在轻松的思考中，感受着生活的节奏和变化，建立起内心的平静和安宁。

咖啡的香气弥漫，让她的情绪逐渐平静，紧张的神经慢慢放松，心情变得舒畅和愉悦，感受到咖啡带来的安慰和放松。这时，一个年轻男人走进咖啡店，吸引了她的注意和目光，展现出与众不同的气质和魅力。他穿着简洁的外套，手中拿着一本书，显得十分优雅和【sophisticated/ sophisticated】，展现出成熟和品味。他选择附近的座位，开始阅读，表情专注而平静，展现出一种深沉的气质和内涵。林雪注意到他的【temperament/气质】与周围不同，他专注阅读，偶尔抬头观察环境，目光清澈而深邃，展现出一种独特的【charm/魅力】和吸引力，让人感受到他的与众不同和特别。

她无法移开视线，心中产生了一种奇妙的【attraction/吸引力】和好奇，感受到命运的安排和机缘。她试图集中注意力做其他事情，打开手机浏览信息，但脑海不断浮现那个身影，好奇心让她忍不住再次观察他，感受到一种无法解释的【curiosity/好奇】和兴趣。她不清楚这种感觉从何而来，但确实存在，仿佛是一种【destiny/命运】般的相遇，让人感到命中注定的缘分和安排。离开咖啡店时，她不小心碰倒了他的咖啡杯，心中顿时感到慌乱和尴尬，脸上露出愧疚的表情，感受到意外的尴尬和歉意。

杯中的液体洒在桌上，她慌忙道歉，脸上露出愧疚的表情，提出【compensate/赔偿】并承诺承担责任，展现出真诚的歉意和负责的态度。他却微笑摇头，说："没关系，不必赔偿，只是一点小意外而已。"他用纸巾擦拭桌面，态度从容而温和，完全没有任何责怪的意思，展现出【generous/慷慨的】和宽容的态度，体现出他的善良和宽容。林雪感到他的反应超出预期，心中涌起一股暖意和感动，感受到被理解和接纳的温暖。两人有了短暂的交流，气氛意外地融洽和轻松，展现出自然的【chemistry/默契】和亲近感，建立起初步的了解和好感。

他问她为什么来咖啡店，她解释了相亲的困扰，倾诉着内心的压力和无奈，表达着自己的真实感受和困扰，展现出她的坦诚和真实，体现出她的真诚和直率。他表示理解，分享了自己偶尔独处的习惯，认为独处是一种放松和【reflect/反思】的方式，能够让人更好地了解自己和内心，体现出他的智慧和成熟，展现出他的理解和包容，建立起两人的亲近。对话中，林雪得知他的名字是王晨，在科技公司工作，从事软件开发，是一个有理想和抱负的【professional/专业人士】，展现出对事业的热情和追求，体现出他的上进心和责任感，建立起对他的欣赏和尊重，展现出他的优秀品质。他同样经历过相亲的压力，选择用独处缓解心情，寻找内心的平静和【balance/平衡】，展现出对生活的理解和智慧，体现出他的成熟和睿智，建立起对他的好感和欣赏，展现出两人的共鸣。两人的对话充满了【warmth/温暖】和理解，建立起两人之间的信任和亲近，展现出两人之间的默契和情感，体现出两人之间的和谐和亲近，建立起两人的情感连接，展现出对话的愉快和舒畅，体现出交流的美好和意义，建立起两人的友谊和信任，展现出两人的相互理解和支持，体现出情感的珍贵和难得，建立起两人的好感。

这次偶遇让林雪感到意外和惊喜，完全出乎她的预料和想象，建立起对他的好感和欣赏。她从未在相亲对象外遇到这样自然交流的男性，他的真诚和体贴让她感到舒适和被尊重，这是相亲中从未体验过的【genuine/真诚的】交流和互动。他的态度让她感到舒适，仿佛找到了一个可以倾诉的【confidant/知己】，能够分享内心真实的想法和感受，建立起真诚的信任和友谊，展现出两人之间的【harmony/和谐】和亲近，体现出【encounter/相遇】的美好和意义，建立起两人的情感【link/连接】，展现出两人之间的默契和【agreement/一致】，体现出缘分的奇妙和【precious/珍贵的】，建立起两人的信任和友谊，展现出两人的相互理解和支持，体现出情感的珍贵和【rare/难得】，建立起两人的好感和亲近，展现出两人的和谐和美好，体现出相遇的【value/价值】和美好，建立起两人的情感纽带，展现出两人的默契和亲近，体现出缘分的美好和【wonderful/奇妙的】，建立起两人的友谊和好感，展现出两人的相互欣赏和理解，体现出两人的和谐和亲近，建立起两人的信任和情感连接，展现出两人的真诚和善意，体现出两人的美好和【precious/珍贵的】，建立起两人的亲近和好感，展现出两人的和谐和亲近，体现出相遇的美好和【significance/意义】，建立起两人的情感联系，展现出两人的默契和理解，体现出两人的美好和珍贵。

离开时，王晨说："也许下次还能在这里遇到，一起喝杯咖啡聊聊天。"展现出他对再次相遇的期待和邀请，体现出他的【enthusiasm/热情】和期待，展现出他的【invite/邀请】和善意，体现出他的【sincere/真诚】和友好，建立起他对她的好感和期待。林雪点头，心中期待着可能的再遇，感到一种久违的期待和希望，对未来充满了【anticipation/期待】和憧憬，展现出她的【hope/希望】和期待，体现出相遇的【value/价值】和意义，建立起对未来的信心。回到家里，林雪躺在床上回想今天的经历，心中满是美好的回忆和期待，建立起她的美好回忆，展现出她的【happy/愉快】和期待，体现出偶遇的【significance/意义】和美好，建立起她的情感连接。相亲的失望被咖啡店的偶遇弥补，她发现生活也许有新的可能，不再只有父母安排的相亲和令人疲惫的社交活动，而是有更多的选择和【freedom/自由】，展现出生活的希望和【possibility/可能性】，体现出生活的【change/变化】和美好，建立起对未来的信心，展现出人生的【turning/转折】和新的开始，体现出命运的【arrange/安排】和眷顾，建立起对命运的感恩，展现出生活的【beauty/美好】和希望，体现出命运的【miracle/奇迹】和安排，建立起对未来的憧憬。

咖啡店的偶遇，成为林雪生活的转折点，让她重新看到了生活的希望和可能，感受到命运的眷顾和安排，建立起对未来的信心。她不清楚未来会如何，但她愿意期待更多美好的相遇，相信缘分会在不经意间出现，带来意想不到的惊喜和幸福，展现出对命运的信任和期待。窗外星光闪烁，她带着期待进入梦乡，梦见了一个充满希望的明天，心中满是对未来的憧憬和期待，感受到生活的【possibility/可能性】和希望，建立起对未来的憧憬。这次偶遇让她重新相信，真正的感情不是相亲能够安排的，而是需要自然的相遇和真诚的交流，才能建立真正的【connection/联系】和深厚的情感纽带，创造出美好的未来和幸福的生活，展现出爱情最真实和美好的样子，建立起对爱情的信心。这次偶遇成为她人生中重要的【turning/转折点】，开启了新的生活篇章和爱情故事，展现出命运的奇妙和缘分的力量，创造出美好的【romance/浪漫】和未来的幸福，体现出生活最美好的一面和爱情的真谛，展现出人生的【miracle/奇迹】和命运的安排，建立起对命运的感恩。这次偶遇让她明白，幸福需要自己去寻找和把握，不能依赖他人的安排和决定，展现出生活的智慧和勇气，体现出人生的真谛和意义，建立起对自己人生的掌控和信心，展现出命运的眷顾和安排，创造出美好的【future/未来】和幸福的人生，体现出命运最美好的馈赠和安排。`,

  '表白时刻': `咖啡店的偶遇后，林雪与王晨保持着【contact/联系】，两人之间的交流变得更加频繁和自然，建立起越来越深厚的情感和信任，展现出两人之间的亲密。他们偶尔在同一咖啡店遇到，自然地开始【converse/交谈】，分享彼此的生活和想法，建立起越来越深的了解和信任，展现出两人之间的默契。每次对话都让彼此更加了解，逐渐建立起深厚的信任和默契，感受到心灵的【resonance/共鸣】和情感的契合，建立起两人之间的情感连接。某次交流中，林雪得知王晨住在附近的公寓，工作稳定且充满热情，展现出对生活的热爱和追求，体现出他的上进心和责任感，建立起对他的欣赏。两人发现彼此的【distance/距离】并不遥远，这让他们的相遇变得更加频繁，每周都会在咖啡店见面，享受轻松愉快的时光，分享彼此的喜怒哀乐和【experience/经历】，建立起深厚的情感连接和默契，展现出两人之间的亲密。

周末的傍晚，王晨【invite/邀请】林雪一起晚餐，选择了一家氛围温馨的餐厅，展现出对这次约会的重视和期待，体现出他对林雪的重视和在意，建立起对她的好感。餐厅灯光柔和，音乐悠扬，营造出浪漫的氛围和【mood/心情】，展现出温馨和浪漫的环境，建立起轻松愉快的氛围。两人选择安静的座位，远离喧嚣的人群，享受私密的空间和彼此的陪伴，感受着两人之间的亲密和温暖，建立起两人之间的亲近。餐桌上的交谈让气氛逐渐【relax/放松】，紧张感逐渐消失，两人的交流变得自然流畅，建立起轻松愉快的氛围，展现出两人之间的和谐。王晨分享工作中的趣事，讲述项目开发的挑战和成就感，展现出对事业的热爱和【passion/热情】，体现出他的上进心和成就感，建立起对他的欣赏。林雪讲述生活的点滴，分享家庭的温馨时刻和个人兴趣，表达着自己的真实感受和想法，展现出她的真诚和坦率，建立起两人之间的信任。笑声在两人之间流动，气氛变得轻松愉快，展现出两人之间的和谐和【happiness/幸福】，感受着彼此的陪伴和快乐，建立起两人之间的亲密。晚餐的氛围十分【pleasant/愉快的】，展现出两人之间的默契和情感，建立起两人之间的亲近和信任，体现出两人之间的深厚感情。

晚餐结束，他们决定散步，享受夜晚的微风和城市的夜景，延续着两人美好的时光和亲密的时刻，展现出两人的亲近和温馨。夜晚的街道安静而美丽，路灯映照着两人的身影，星星在天空闪烁，营造出浪漫的景象和氛围，建立起两人的浪漫时光。王晨突然停下脚步，转身面对林雪，神情变得凝重而认真，展现出即将说出重要话语的【resolve/决心】和勇气，体现出他的坚定和真诚，建立起他的决心。他的神情变得【serious/认真的】，眼神中透着某种决心和期待，让人感受到他的真挚和诚恳，展现出他的诚意和认真，建立起他的真诚。他说："林雪，我想告诉你一些事情，这些话我一直在心中酝酿，今天终于鼓起勇气说出来。"展现出他内心深处的情感和【courage/勇气】，体现出他对林雪的真挚情感和表白决心，建立起他的勇气和坚定，展现出他的真诚和决心，体现出他对林雪的爱意和承诺，建立起他对她的深情和坚定。

林雪感到心跳加速，呼吸变得急促，她等待着接下来的话语，感受到即将发生的重大时刻和转折点，建立起她的紧张和期待。王晨继续："自从咖啡店第一次遇见你，我开始期待每一次相遇，每次见到你，心中都会涌起莫名的喜悦和温暖。你让我感受到一种从未有过的感觉，一种让我想要更加了解你的冲动。"展现出他内心真实的情感和【desire/渴望】，体现出他对林雪深深的喜爱和向往，展现出他对她的【devotion/深情】和渴望，体现出他的【firm/坚定的】和真挚，建立起他的情感表达。他的声音略显紧张，但每一个字都【sincere/真诚的】，展现出真挚的情感和坚定的决心，表达着对林雪深深的喜爱和【affection/喜爱】，体现出他真挚的【passion/热情】和承诺，展现出他的真诚和坚定，体现出他对她的真挚【adore/爱意】，建立起他对她的情感表达，展现出他的真挚和真诚，体现出他的爱情和【determination/决心】，建立起他的真诚表达，展现出他对她的【care/关心】和爱护，体现出他的【responsibility/责任】和承诺，建立起他的爱护之心，展现出他对她的【cherish/珍视】和爱护，体现出他的真诚和深情，建立起他的情感表达。

"我不知道未来会如何，但我希望你能给我一个【chance/机会】，让我成为你生活的一部分，陪伴你度过每一个重要的时刻，分享生活的喜怒哀乐。"展现出他对未来的期待和承诺，体现出他对林雪的【responsibility/责任感】和爱护之心，展现出他的【promise/承诺】和决心，体现出他对她的【cherish/珍视】和爱护，建立起他的爱护之心，展现出他对她的【care/关心】和【protect/保护】，体现出他的责任和【devote/奉献】，建立起他的爱护之心，展现出他对她的【value/重视】和【respect/尊重】，体现出他的真诚和【sincere/真挚】，建立起他的情感表达。林雪听着，心中涌起复杂的情绪，感动、惊喜、期待交织在一起，感受到被珍视的幸福和感动，建立起她的【emotion/情感】波动，展现出她的【touch/感动】和惊喜，体现出表白的【meaningful/有意义的】和珍贵，建立起她的情感连接。她从未想过，一次偶然的相遇会带来这样的改变，让她的生活充满了新的希望和期待，展现出命运的神奇和【miracle/奇迹】，感受着命运的眷顾和安排，展现出生活的【hope/希望】和美好，体现出命运的【arrange/安排】和眷顾，建立起对命运的感恩。她看着王晨的眼睛，看到真诚和期待，感受到他内心深处的情感和对她的真挚爱意，心中充满了感动和【emotion/情感】，建立起深厚的情感连接和信任，展现出两人的【bond/纽带】和情感，体现出爱情的【power/力量】和美好，建立起两人的情感连接。

她想起父母不断的催促，那些让人疲惫的相亲，每一次都是失望的经历，完全没有真正的感情和交流，展现出相亲的无效和失望。而眼前这个男人，用最自然的方式走进她的世界，没有任何刻意安排，也没有任何功利的目的，展现出最真实和纯粹的【love/爱情】，体现出爱情的真谛和美好。林雪点头，轻声说："我也愿意，愿意和你一起面对未来的一切。"展现出她对王晨的接受和对未来的承诺，体现出她对爱情的接受和向往。简单的回答，却承载着深刻的【meaning/意义】，标志着两人关系的全新开始和重要的转折，展现出人生的重要时刻和爱情的开始。王晨露出笑容，紧张感瞬间消失，取而代之的是喜悦和满足，展现出内心的幸福和【joy/喜悦】，感受着被接受的喜悦和满足。

他伸出手，握住林雪的手，感受到彼此的温暖和情感，展现出两人之间的亲密和信任。两人的手温暖而坚定，传递着彼此的承诺和期待，展现出两人之间深厚的感情和信任。这个夜晚，成为两人关系的【turning/转折点】，标志着从相识到相恋的转变，成为两人人生中的重要时刻，展现出爱情的开始和人生的转折。表白时刻，虽然简单，却充满真诚和浪漫，让林雪感受到被珍视和被爱的幸福，展现出爱情的美好和力量，感受着被爱的幸福和满足。林雪知道，未来的道路还有许多挑战，但她愿意与王晨一起面对，共同创造美好的未来，展现出对未来的信心和【determination/决心】，体现出对爱情的坚持和对未来的信心。

回到家中，林雪躺在床上回忆今天的场景，嘴角始终挂着甜蜜的微笑，心中满是幸福的回忆和感动，建立起她的幸福。表白的话语在脑海反复回响，她发现自己嘴角带着微笑，心中充满了幸福和期待，感受到爱情的美好和力量，建立起对未来幸福的憧憬和向往，展现出她的幸福。窗外的月光洒落，照亮了她甜美的笑容，营造出浪漫的氛围和心情，展现出爱情的美好和甜蜜，建立起浪漫的氛围。她闭上眼睛，心中充满期待，憧憬着和王晨的未来生活，展现出对未来的美好憧憬和想象，建立起对未来幸福的期待和向往，展现出她的憧憬。明天是新的一天，也是新的【beginning/开始】，标志着她人生新篇章的开启，一段美好恋情的正式开始，展现出人生的重要转折和新的起点，建立起她的开始。这次表白让她相信，真正的爱情不需要刻意安排，而是需要缘分的相遇和真诚的表达，才能建立永恒的【bond/纽带】和深厚的情感连接，创造出美好的未来和幸福的生活，展现出爱情最真实和纯粹的【nature/本质】，体现出爱情的真谛和美好，建立起对爱情的信心。这次表白成为人生中最重要的时刻和记忆，展现出爱情的永恒和美好，体现出人生最重要的【commitment/承诺】和对未来的信心，建立起永恒的爱情和幸福的【lifetime/一生】，展现出爱情的真谛和生命的意义，体现出人生最美好的【destiny/命运】和幸福的未来，建立起对命运的感恩和对爱情的信心，展现出人生最美好的【moment/时刻】和永恒的幸福，体现出爱情最真实的力量和生命的真谛，建立起永恒的爱情和美好的【promise/承诺】。`,
};

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
    margin: 0 1px; white-space: nowrap; color: #333; font-weight: 600; }
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
      <div class="text">${paragraphsHTML}</div>
    </section>
    <footer>${config.title}：${config.subtitle} · 学习版　|　看故事记单词</footer>
  </div>
</body>
</html>`;
}

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
      <div class="text">${paragraphsHTML}</div>
    </section>
    <footer>${config.title}：${config.subtitle} · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;
}

function main() {
  const outputDir = path.join(__dirname, '../result');
  if (!fs.existsSync(outputDir)) { fs.mkdirSync(outputDir, { recursive: true }); }

  storyConfigs.forEach((config, index) => {
    const content = storyContents[config.subtitle];
    if (!content) { console.log(`警告：缺少 "${config.subtitle}" 的故事内容`); return; }

    const num = String(index + 1).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), generateLearningHTML(config, content, index + 1));
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), generateReviewHTML(config, content, index + 1));

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部10个故事已生成完成！');
}

main();