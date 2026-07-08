const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// 读取词汇数据
function loadVocabulary() {
  const workbook = XLSX.readFile(path.join(__dirname, '../demo/考研英语词汇乱序版.xls'));
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, {header: 1});
  return data.filter(row => row[0]).map(row => ({
    word: row[0],
    phonetic: row[1] || '',
    meaning: row[2] || ''
  }));
}

// 从释义中提取干净的中文（只保留一个最简洁的释义）
function extractCleanChinese(meaning) {
  // 常见词性标记列表
  const posMarkers = ['n.', 'v.', 'vt.', 'vi.', 'a.', 'adj.', 'ad.', 'adv.', 'prep.', 'conj.', 'int.', 'pron.', 'num.', 'art.', 'pl.', 'sing.', 'pref.', 'suf.'];

  let chinese = meaning;

  // 去除词性标记
  posMarkers.forEach(marker => {
    chinese = chinese.replace(new RegExp(`\\s*${marker.replace('.', '\\.')}\\s*`, 'gi'), '');
    chinese = chinese.replace(new RegExp(`^${marker.replace('.', '\\.')}`, 'gi'), '');
  });

  // 去除英文、音标、括号等
  chinese = chinese
    .replace(/[a-zA-Z]/g, '')     // 去除所有英文字母
    .replace(/\(.*?\)/g, '')      // 去除括号内容
    .replace(/\[.*?\]/g, '')      // 去除方括号内容
    .replace(/\//g, ' ')          // 斜杠替换为空格（用于分隔多个释义）
    .replace(/[\.·;；]/g, ' ')    // 特殊符号替换为空格
    .replace(/^\s+|\s+$/g, '')    // 去除首尾空格
    .replace(/\s+/g, ' ');        // 合并多余空格

  // 只取第一个中文释义（用空格、逗号分隔的第一个）
  const parts = chinese.split(/[，,\s]+/);
  chinese = parts[0] || '';

  // 确保长度合适（2-4个字）
  if (chinese.length < 2) {
    // 如果太短，取原释义的前几个中文字符
    const fallback = meaning.replace(/[a-zA-Z\(\)\/\.\[\]]/g, '').trim();
    const match = fallback.match(/[一-龥]+/);
    if (match) chinese = match[0].substring(0, 4);
  }
  if (chinese.length > 4) {
    chinese = chinese.substring(0, 4);
  }

  return chinese.trim();
}

// 10个故事配置
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

// 故事模板 - 每个段落包含多个WORD占位符，确保约1000字和50-60个词汇
const storyTemplates = {
  '契约的开始': [
    '夜幕降临，城市的高楼大厦在霓虹灯的映照下显得格外WORD。林若雪站在公司的落地窗前，望着脚下WORD的都市夜景，心中五味WORD。家族企业近期遭遇了前所未有的WORD，父亲突然住院，公司内部管理WORD，竞争对手趁机WORD。',
    '为了挽救家族事业，她不得不接受一个WORD的决定——与沈氏集团签订契约。沈墨尘是沈氏集团的总裁，商界公认的WORD人物。他为人冷傲，从不轻易WORD任何女性。然而，正是这份契约，将两人的命运紧紧WORD在一起。',
    '第一次见面，沈墨尘用WORD的目光打量着她，眼神中透着几分WORD。他问："你知道这份契约WORD什么吗？"林若雪点头，她清楚自己即将WORD的责任。契约规定，她需要在沈氏集团工作三年，期间必须WORD公司的安排。',
    '而沈氏集团将注资WORD她的家族企业。这看似公平，实则WORD着更多复杂的条件。签约当天，林若雪穿着简洁的职业装，神情WORD地走进会议室。沈墨尘坐在主位，面前摆放着WORD的合同文件。他递过文件，说："仔细WORD，有任何问题可以提出。"',
    '林若雪认真WORD每一个条款，她的专业素养让她很快发现了几个WORD的风险点。她提出WORD意见，沈墨尘略微WORD，随即点头同意调整。这个过程让沈墨尘对林若雪产生了新的WORD。',
    '原本以为她只是一个需要帮助的WORD女子，没想到她具备如此WORD的商业洞察力。契约签订后，林若雪正式进入沈氏集团WORD。她被安排在战略发展部门，负责市场WORD和项目策划。',
    '尽管起点不算太高，但她WORD用自己的能力证明价值。工作的第一个月，林若雪每天WORD到深夜。她认真研究每一个项目WORD，分析市场趋势，WORD详细报告。她的努力逐渐得到同事的WORD。',
    '沈墨尘偶尔会在会议上看到她的WORD。虽然他依然保持WORD的态度，但内心已经开始WORD这个特别的员工。某个周末，公司WORD团队活动。林若雪因为工作繁忙差点忘记WORD，但最后还是赶到了活动现场。',
    '沈墨尘也在场，这是他们第一次在工作之外的WORD相处。活动中，两人被安排在同一组WORD任务。林若雪展现出的协调能力和WORD能力让沈墨尘印象深刻。',
    '他开始WORD，契约也许不只是商业交易。夜深了，活动结束。沈墨尘开车送林若雪WORD。车内气氛安静，只有音乐WORD流淌。临别时，他突然说："明天有个WORD会议，准备好。"',
    '林若雪点头，心中却有些WORD。这份契约的开始，也许比她想象的更加WORD。她知道，未来的日子里，将会有更多WORD等待着她。她决心用实力证明自己的价值，让这份契约变得有意义。',
    '回到家中，她独自坐在窗边，望着城市的夜景。霓虹灯闪烁，如同她内心的WORD。她知道，前方的路不会平坦，但她已经做好了准备。明天是新的一天，也是新的开始。'
  ],
  '总裁的试探': [
    '沈氏集团的WORD会议如期举行。会议室里坐满了各部门主管，WORD庄重而紧张。林若雪坐在角落的位置，手中拿着准备好的WORD。沈墨尘主持会议，他用WORD的声音分析公司近期的运营状况。',
    '他指出存在的WORD并提出改进方向。每一个主管都需要发表WORD。轮到林若雪发言时，她清晰地阐述了自己的WORD。她分析了竞争对手的策略，提出了公司可以采取的WORD方案。',
    '她的发言引起了在场所有人的WORD。会议结束后，沈墨尘将林若雪叫到WORD。他问："你的分析很详细，数据来源是什么？"林若雪WORD了她的调研方法和信息渠道。沈墨尘微微WORD。',
    '他说："继续关注这个方向，下个月提交WORD报告。"他的语气依然冷淡，但林若雪感受到这是对她能力的WORD。接下来的日子里，林若雪投入更多时间WORD市场动态。',
    '她收集了大量数据，分析行业WORD，预测可能的变化。她希望这份报告能够真正WORD公司。工作中，她遇到了不少WORD。有些同事对她的快速晋升感到不满，暗中WORD障碍。',
    '林若雪选择用实力回应WORD，她相信成果会证明一切。某个深夜，林若雪加班WORD数据。沈墨尘路过办公室，看到她还在WORD。他走进去，问："需要帮助吗？"林若雪抬头，略感WORD。',
    '两人开始讨论报告的WORD。沈墨尘提出几个关键问题，林若雪逐一WORD。交流中，他们发现彼此对商业的理解有着惊人的WORD。报告完成那天，林若雪将文件WORD沈墨尘。',
    '他用认真的目光阅读每一页WORD，时不时提出补充建议。这份报告的质量WORD他的预期。董事会会议召开，沈墨尘展示了这份WORD报告。董事们对报告内容给予高度WORD。',
    '公司的决策将依据林若雪的分析进行WORD。林若雪的名字开始在集团内部被更多人WORD。她的专业能力和敬业精神赢得了普遍WORD。但她清楚，这只是WORD。',
    '沈墨尘对林若雪的关注逐渐WORD。他开始在工作安排上给予她更多WORD，让她参与重要项目的决策。这是对他的WORD，也是对她能力的考验。某次项目讨论中，沈墨尘突然问："如果让你WORD这个项目，你会怎么做？"',
    '林若雪思考片刻，提出了完整的WORD方案。沈墨尘听完，露出罕见的WORD。他说："很好，这个项目由你WORD。"这句话让林若雪心中涌起复杂的情绪。契约中的WORD，正在变成认可。',
    '她走出会议室，感受到一种前所未有的WORD。这一刻，她知道自己已经踏上了正确的道路。未来的挑战依然存在，但她已经准备好迎接一切。'
  ],
  '重生归来': [
    '车祸发生的那一刻，林若雪感到WORD正在流逝。周围的WORD变得模糊，视线逐渐昏暗。她闭上眼睛，以为一切都WORD了。然而，当她再次睁开眼睛时，发现自己躺在熟悉的WORD里。',
    '墙上贴着大学时代的照片，桌上放着WORD和笔记本。这是十年前的房间。她震惊地WORD，自己重生回到了过去。十年的记忆在她脑海中清晰WORD，她知道未来将要发生的一切。',
    '包括那些曾经让她痛苦的WORD。这一世，她发誓要改变WORD。前世的失败教训让她明白，只有主动WORD人生，才能避免悲剧重演。她决定从现在开始，为自己而WORD。',
    '大学毕业那年，前世她接受了家人的WORD，进入一家普通企业工作。那份工作WORD乏味，让她浪费了五年光阴。这次，她做出不同的WORD。林若雪拒绝家人的提议，决定独立WORD。',
    '她利用前世对市场的了解，瞄准了一个即将WORD的行业。她知道，未来十年这个领域将蓬勃WORD。创业初期充满WORD。资金不足、人脉有限、经验欠缺，每一个问题都让她感到WORD。',
    '但她没有退缩，而是用坚定的信念WORD自己前进。她开始系统学习相关知识，参加行业WORD，结识志同道合的人。她发现，重生赋予她独特的WORD——她能预见趋势，把握机会。',
    '第一个项目启动，林若雪投入全部WORD。她每天工作十几个小时，研究产品设计，WORD用户需求，制定营销策略。她的努力换来初步WORD。产品上线后，市场反馈超出WORD。',
    '用户数量快速增长，媒体开始关注这个年轻WORD。林若雪的名字出现在行业报道中。然而，成功引来了WORD。竞争对手开始暗中打压，试图破坏她的WORD。',
    '林若雪早有准备，她用冷静的头脑应对每一次WORD。前世的经验告诉她，哪些人值得WORD，哪些人需要警惕。她谨慎选择合作WORD，避免落入陷阱。她的判断一次次WORD正确。',
    '半年后，她的公司获得第一笔WORD。投资人看好她的潜力，愿意支持她继续WORD。这笔资金让她能够扩大团队，推进更多WORD。团队逐渐壮大，林若雪开始培养管理WORD。',
    '她用前世学到的领导技巧，建立高效的WORD机制。团队成员对她充满WORD。重生归来的一年，林若雪完成了前世五年无法WORD的目标。她知道，这只是开始。',
    '未来的日子里，她将创造更多WORD。她站在公司窗前，望着繁忙的街道，心中充满感激。这一世，她不再是那个被命运摆布的女孩，而是掌控自己人生的强者。'
  ],
  '商业布局': [
    '公司稳定运行后，林若雪开始思考更大规模的WORD。她清楚，想要在商业领域WORD，必须建立完整的战略布局。前世记忆让她了解行业的演变WORD。',
    '她知道，未来五年市场将发生重大变化，只有提前WORD的企业才能抓住机遇。她召集核心团队成员，展开战略WORD。会议室里，每个人都认真聆听她的WORD。',
    '林若雪用数据支撑观点，描绘未来的WORD。会议决定，公司将同时推进三个方向的发展：产品WORD、渠道拓展、品牌建设。每一项都需要大量WORD。',
    '但林若雪相信这是必要的投资。产品创新方面，她组建专门的WORD团队。团队的任务是研究新技术，开发符合未来WORD的产品。她设定明确的目标和时间WORD。',
    '渠道拓展方面，她决定建立线上和线下双重WORD。线上平台将覆盖更广的用户群体，线下门店将提供WORD服务。两者的结合将最大化市场WORD。',
    '品牌建设方面，她聘请专业的营销WORD。品牌形象需要精心设计，传播策略需要科学WORD。她希望公司能够建立独特的市场WORD。布局实施的过程充满WORD。',
    '资金压力让财务部门担忧，人力紧张让管理层WORD。林若雪用坚定的态度安抚每个人的WORD。她亲自参与每一个环节的WORD。',
    '研发会议中，她提出创意建议；营销讨论中，她分析传播WORD；渠道建设中，她协调各方WORD。三个月后，初步成果WORD。新产品完成设计原型。',
    '线上平台开始试运营，品牌宣传方案获得WORD。每一步进展都证明她的判断WORD。竞争对手开始注意到她的WORD。他们试图模仿她的策略，甚至派人调查她的WORD。',
    '但林若雪早已预料这些行为，她用保密措施保护核心WORD。某个深夜，林若雪独自整理WORD。她看着桌上的数据报表，心中涌起复杂的WORD。',
    '前世她从未拥有这样的能力，今世她正在创造全新的WORD。她想起前世的失败，那些让她痛苦的WORD。正是那些教训，让她明白商业的WORD。',
    '重生赋予她第二次机会，她决心不浪费每一WORD。团队会议上，林若雪说："我们的目标不只是WORD，而是领先。"这句话点燃每个人的WORD。'
  ],
  '新人入职': [
    '清晨的地铁站人潮WORD。林晓挤在人群中，手握简历文件，心中充满WORD和期待。今天是她入职新公司的第一天，也是职业生涯的WORD。公司大楼矗立在商业区中心。',
    '玻璃幕墙映照着WORD。林晓走进大厅，被眼前的景象WORD。前台接待员礼貌地指引她前往人事WORD。人事部门完成入职手续后，将她带到WORD。',
    '部门主管简单介绍工作内容，同事们大多埋头WORD，没有人特别留意这个新来的WORD。林晓找到自己的座位，开始熟悉工作WORD。桌上摆放着电脑和办公用品。',
    '墙上的公告栏贴着团队WORD和项目进度。第一个任务是协助整理设计WORD。林晓认真阅读每一份文件，用笔记本记录关键WORD。她希望尽快适应工作节奏。',
    '午休时间，几个同事在休息区WORD。林晓试着融入，但发现自己很难跟上他们的WORD。她决定用行动证明自己，而不是急于WORD。下午，主管安排她参与项目WORD。',
    '虽然只是旁听，林晓依然认真记录会议WORD。她注意到团队中存在不同的意见WORD。资深设计师李娜表现出明显的WORD态度。她在讨论中多次打断他人发言。',
    '坚持自己的WORD。林晓观察到这种动态，默默WORD。下班时分，办公室逐渐WORD。林晓继续整理当天的工作笔记。她发现，快速学习是适应新环境的WORD。',
    '地铁回家的路上，林晓思考今天的WORD。职场比她想象复杂，人际关系微妙而WORD。她需要找到合适的方式WORD。宿舍里，她翻开专业书籍，补充设计WORD知识。',
    '大学期间的学习只是基础，职场需要更实用的WORD。她决定每晚抽出时间自我WORD。第二天，林晓继续投入工作。她主动询问同事关于项目的WORD。',
    '用积极的态度获取信息。同事逐渐愿意与她WORD。一周过去，林晓对工作内容有了基本WORD。她开始承担简单的设计任务，用认真的态度完成每一项WORD。',
    '主管注意到她的表现，给予肯定的WORD。虽然只是实习生，林晓展现出超出预期的WORD态度。这让主管对她产生WORD。入职的第一个月，林晓经历了紧张、适应、WORD的过程。',
    '她明白，职场之路漫长而艰难，但她已迈出WORD。每个夜晚，她都会反思今天的收获，为明天做好准备。她知道，成长需要时间，但她愿意付出努力。'
  ],
  '遭遇霸凌': [
    '工作第二个月，林晓遭遇了意想不到的WORD。资深设计师李娜开始对她设置各种WORD，让她的工作变得困难。李娜将最繁琐的任务交给林晓，却不提供必要的WORD。',
    '当林晓询问细节时，李娜总是敷衍回应，甚至表现出不耐烦的WORD。团队会议上，李娜故意在众人面前WORD林晓的工作。她指出设计中的问题，语气尖锐而WORD。',
    '林晓感到委屈，却无法WORD。其他同事看在眼里，却选择WORD。他们不愿得罪李娜，也不想卷入纷争。林晓意识到，职场人际关系比她想象WORD。',
    '某次项目中，林晓完成的设计方案被李娜WORD。李娜声称方案不够专业，要求林晓重新WORD。但林晓知道，方案本身并无明显WORD。林晓尝试与李娜沟通。',
    '希望了解具体的WORD要求。李娜却态度冷淡，只说"自己想办法"。这种回应让林晓感到WORD。深夜加班时，林晓独自修改设计WORD。她反复调整细节。',
    '希望满足李娜的WORD。但她不清楚，李娜的标准到底是什么。方案提交后，李娜再次WORD。她提出新的问题，要求继续修改。林晓开始怀疑，李娜是否故意WORD。',
    '压力持续增加，林晓的工作状态受到WORD。她变得焦虑不安，甚至出现失眠WORD。她考虑向主管反映情况，但又担心WORD。休息时间，同事私下提醒林晓。',
    '他们说李娜一直用这种方式对待新人，希望林晓能够WORD。林晓听着，心中五味WORD。某天，林晓的设计方案终于获得WORD。但李娜在团队会议上声称。',
    '方案的完善主要依靠她的WORD。林晓感到愤怒，却无法当场WORD。这个经历让林晓明白，职场中存在不公平的WORD游戏。她决定不被动承受，而是寻找改变的WORD。',
    '她开始记录工作中遇到的每一次WORD。她保存邮件记录、整理工作日志、收集证据WORD。她希望用事实证明自己的WORD。林晓同时加强专业学习。',
    '她每天抽出时间研究设计技巧，阅读行业WORD，提升个人水平。她相信，实力是最好的WORD。遭遇霸凌的经历虽然痛苦，但林晓从中学会了WORD。',
    '她清楚，未来的职场还有更多挑战等待，她必须准备好迎接每一场WORD。她不再畏惧困难，而是用坚定的态度面对每一个考验。'
  ],
  '初见学长': [
    '九月的校园充满青春气息。大一新生林小雨拖着行李箱，走在陌生的校园WORD上。周围是熙熙攘攘的人群，每个人都在寻找自己的WORD。她对照着校园地图。',
    '试图找到报到WORD。然而复杂的道路布局让她迷失WORD。她站在路边，望着各个建筑，不知该往何处WORD。图书馆门前，她不小心撞到了一个高大的WORD。',
    '手中的地图和行李箱把手WORD，她慌忙道歉。对方却微笑着帮她捡起WORD。这个男生穿着简洁的衬衫，神情温和而WORD。他问："新生报到吗？需要帮助吗？"',
    '林小雨点头，略带WORD地说明自己的困惑。男生接过她的行李箱，说："我带你去报到点。"他熟练地穿过校园道路，向她介绍沿途的WORD。林小雨跟在后面，心中充满WORD。',
    '报到点到达后，男生帮她完成登记WORD。林小雨得知他的名字是陈浩，计算机系大三WORD。他说："有什么问题可以找我。"宿舍分配后，林小雨开始整理WORD。',
    '室友们陆续到达，每个人带着不同的背景和WORD。她们很快开始交流，建立起初步的WORD。校园适应的第一周，林小雨参加各种新生WORD。她在社团展览中发现摄影社团。',
    '决定报名WORD。她一直对摄影有浓厚兴趣。社团面试时，她再次遇见陈浩。他是社团的核心WORD，负责审核新成员的申请。他看到林小雨，露出熟悉的WORD。',
    '林小雨顺利加入摄影社团。第一次活动在校园湖边举行，陈浩讲解摄影基础WORD。他的讲解清晰而有趣，新成员们认真WORD。活动中，陈浩注意到林小雨的相机操作很WORD。',
    '他问她是否有摄影经验，林小雨分享了自己高中时期的拍摄WORD。陈浩点头说："很有潜力，继续练习。"这句简单的评价让林小雨感到WORD。',
    '她决定在社团中投入更多精力。校园生活逐渐规律。林小雨每天上课、参加社团、与室友WORD。她慢慢适应了大学节奏，找到自己的WORD。某个周末，社团组织户外拍摄。',
    '林小雨和陈浩在同一组完成WORD。两人在交流中发现彼此有许多共同WORD。初见学长的经历，成为林小雨大学生活的美好WORD。她不知道未来会发生什么。',
    '但她期待每一个新的WORD。夕阳西下，校园染上金色的光芒，她站在湖边，心中充满对未来的憧憬。'
  ],
  '社团邂逅': [
    '摄影社团的活动越来越频繁。林小雨每周参加至少两次拍摄练习，她的技术快速WORD。陈浩经常在活动中指导她WORD。社团组织了一次校外摄影比赛。',
    '参赛者需要在指定区域内拍摄主题WORD，评委将评选最佳作品。林小雨报名参加WORD。比赛当天，参赛成员到达活动地点。陈浩作为组织者，分配每个参赛者的拍摄WORD。',
    '林小雨被安排在一个公园区域WORD。公园里景色优美，林小雨用相机捕捉各种WORD。她选择不同的角度和光线，力求创作独特的作品。拍摄过程让她充满WORD。',
    '拍摄结束后，成员们汇集在社团活动室。每个人的作品展示在屏幕上，评委开始逐张WORD。林小雨紧张地等待结果WORD。陈浩作为评委之一，认真观察每一张WORD。',
    '他对林小雨的作品给予好评，指出照片中的创意和技巧WORD。最终评选结果公布，林小雨的作品获得二WORD。虽然不是最高奖项，但她感到满足。这是她第一次在摄影比赛中获得WORD。',
    '颁奖后，陈浩单独与林小雨交流。他说："你的作品很有特色，继续发展这个WORD。"他的语气诚恳而支持WORD。林小雨感到陈浩的鼓励格外重要。',
    '她开始更加认真地对待摄影，希望未来能够创作更多优秀WORD。社团活动中，两人逐渐增加交流频率。他们讨论摄影技巧、分享作品心得、推荐相关WORD。',
    '彼此的了解不断加深WORD。某个周末，社团组织聚餐。成员们在餐厅欢聚，气氛轻松愉快。林小雨和陈浩相邻而坐，自然地开始WORD。',
    '谈话中，陈浩问起林小雨的学习情况。她分享专业课程的WORD，他提供学习建议。两人的话题从摄影扩展到更广WORD。聚餐结束后，陈浩送林小雨回宿舍。',
    '路上两人继续交流，校园夜景映照着他们的WORD。这个夜晚格外美好WORD。回到宿舍后，林小雨躺在床上回忆今天的WORD。她发现自己对陈浩产生了特殊的关注。',
    '这种感觉让她心跳WORD。社团邂逅，让两人之间的关系开始变化。林小雨不知道未来会如何发展，但她期待每一次与陈浩的WORD。窗外月光洒落，她闭上眼睛，嘴角带着微笑。'
  ],
  '咖啡店偶遇': [
    '周末的相亲活动让林雪感到疲惫。父母一直催促她尽快结婚，安排了无数次的WORD。每一次都是失望的经历WORD。今天的对象是一个自恋的男人。',
    '他在餐厅不停炫耀自己的WORD，完全不关心林雪的想法。林雪敷衍应付，心里想着WORD。借口去洗手间，她离开了餐厅。街边的咖啡店映入眼帘。',
    '她走进去，买了一杯WORD。这里的安静让她放松WORD。角落的座位空着，她坐下休息。窗外的街景流动，她观察着路人的WORD。咖啡的香气弥漫，让她的情绪逐渐平静WORD。',
    '这时，一个年轻男人走进咖啡店。他穿着简洁的外套，手中拿着一WORD。他选择附近的座位，开始阅读WORD。林雪注意到他的气质与周围不同。',
    '他专注阅读，偶尔抬头观察环境，目光清澈而WORD。她无法移开视线WORD。她试图集中注意力做其他事情，但脑海不断浮现那个WORD。她不清楚这种感觉从何而来。',
    '但确实存在WORD。离开咖啡店时，她不小心碰倒了他的咖啡杯。杯中的液体洒在桌上，她慌忙道歉，提出WORD。他却微笑摇头，说："没关系，不必赔偿。"',
    '他用纸巾擦拭桌面，态度从容而WORD。林雪感到他的反应超出预期WORD。两人有了短暂的交流。他问她为什么来咖啡店，她解释了相亲的困扰。',
    '他表示理解，分享了自己偶尔独处的WORD。对话中，林雪得知他的名字是王晨，在科技公司工作。他同样经历过相亲的压力，选择用独处缓解心情WORD。',
    '这次偶遇让林雪感到意外。她从未在相亲对象外遇到这样自然交流的WORD。他的态度让她感到舒适WORD。离开时，王晨说："也许下次还能在这里遇到。"',
    '林雪点头，心中期待着可能的WORD。回到家里，林雪躺在床上回想今天的经历。相亲的失望被咖啡店的偶遇弥补，她发现生活也许有新的WORD。',
    '咖啡店的偶遇，成为林雪生活的转折点。她不清楚未来会如何，但她愿意期待更多美好的WORD。窗外星光闪烁，她带着期待进入梦乡。'
  ],
  '表白时刻': [
    '咖啡店的偶遇后，林雪与王晨保持着联系。他们偶尔在同一咖啡店遇到，自然地开始WORD。每次对话都让彼此更加了解WORD。某次交流中，林雪得知王晨住在附近的公寓。',
    '两人发现彼此的距离并不遥远，这让他们的相遇变得更加WORD。周末的傍晚，王晨邀请林雪一起晚餐。餐厅氛围温馨，两人选择安静的座位。餐桌上的交谈让气氛逐渐WORD。',
    '晚餐中，他们分享各自的工作经历、家庭背景、兴趣爱好。彼此发现许多共同点，话题自然延续WORD。饭后，两人步行穿过附近的公园。夜色温和，路灯映照着道路。',
    '他们的身影在光影中交错WORD。公园的湖边有一处休息区。他们坐下，继续交流。林雪感到王晨的存在让她格外安心，这种感觉前所未有WORD。',
    '王晨突然停下话语，用认真的目光注视林雪。他说："我想告诉你一些事情。"林雪的心跳加速，她等待他的下一WORD。他说："这段时间的相遇让我对你产生特别的感情。"',
    '我想和你建立更深的WORD。这是他的表白，简单而诚恳WORD。林雪听到这句话，情绪涌动。她从未在相亲中感受到这样的真诚，王晨的表白触动她内心深处WORD。',
    '她点头回应："我也有同样的感觉。"她的声音略带颤抖，但态度坚定。两人在湖边的灯光中确认彼此的WORD。表白后，两人正式成为恋人。',
    '他们的关系从咖啡店的偶遇发展而来，自然而WORD。接下来的日子里，他们经常一起活动。周末的约会、下班后的相聚、假期的旅行，每一项都让感情加深WORD。',
    '林雪的父母得知这段恋情后，表现出满意的反应。他们终于看到女儿找到了适合的WORD。一年后，王晨在林雪生日时送上戒指。他再次表白，提出婚姻的提议。',
    '林雪欣然接受，两人决定共建未来WORD。表白时刻成为两人关系的关键节点。从偶遇相识到坦诚相爱，他们的故事证明了真诚的WORD。',
    '月光洒在湖面，两人并肩漫步，心中充满对未来的憧憬。这一刻，他们知道，彼此的选择是正确的。'
  ]
};

// 选择词汇并嵌入故事
function generateStoryWithWords(templateKey, vocabulary) {
  const paragraphs = storyTemplates[templateKey] || [];
  if (paragraphs.length === 0) {
    return { paragraphs: [], usedWords: [] };
  }

  // 计算需要多少词汇
  const totalSlots = paragraphs.reduce((sum, p) => sum + (p.match(/WORD/g) || []).length, 0);

  // 选择词汇（按比例分配）
  const shuffled = [...vocabulary].sort(() => Math.random() - 0.5);
  const targetWords = Math.min(Math.max(totalSlots, 50), 60); // 目标50-60个词
  const selectedWords = shuffled.slice(0, targetWords);

  // 嵌入词汇
  const usedWords = [];
  let wordIndex = 0;

  const processedParagraphs = paragraphs.map(p => {
    let result = p;
    const slots = p.match(/WORD/g) || [];

    slots.forEach(() => {
      if (wordIndex < selectedWords.length) {
        const word = selectedWords[wordIndex];
        const chinese = extractCleanChinese(word.meaning);
        result = result.replace('WORD', `{${word.word}|${chinese}}`);
        usedWords.push(word.word);
        wordIndex++;
      } else {
        // 如果词汇不够，保持原样或使用通用词汇
        result = result.replace('WORD', '重要');
      }
    });

    return result;
  });

  return { paragraphs: processedParagraphs, usedWords };
}

// 格式化学习版段落
function formatLearnParagraph(paragraph) {
  return paragraph.replace(/\{([^|]+)\|([^}]+)\}/g,
    (match, word, chinese) => `<span class="w" onclick="speak('${word}')">${word}（${chinese}）📢</span>`
  );
}

// 格式化复习版段落
function formatReviewParagraph(paragraph) {
  return paragraph.replace(/\{([^|]+)\|([^}]+)\}/g,
    (match, word, chinese) => `<span class="r" onclick="toggle(this)">${word}(<span class="h">${chinese}</span>)</span>`
  );
}

// 生成学习版HTML
function generateLearnHTML(storyData, config, storyIndex) {
  const { paragraphs, usedWords } = storyData;
  const processedParagraphs = paragraphs.map(formatLearnParagraph);
  const wordCount = processedParagraphs.join('').replace(/<[^>]+>/g, '').length;

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
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 12px; text-align: justify; }
  .w { background-color: #E1BEE7; border-radius: 999px; padding: 2px 8px; margin: 0 2px;
    white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .w:hover { opacity: 0.85; }
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
      <h2><span class="no">Story${String(storyIndex).padStart(2,'0')}</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${wordCount} 字 · 融入 ${usedWords.length} 个重点词汇 · 点击 📢 可朗读单词发音</div>
      <div class="text">
${processedParagraphs.map(p => `<p>${p}</p>`).join('\n')}
      </div>
    </section>
    <footer>${config.title}：${config.subtitle} · 学习版　|　看故事记单词</footer>
  </div>
  <script>
    function speak(word) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
      } else { alert('您的浏览器不支持语音朗读'); }
    }
  </script>
</body>
</html>`;
}

// 生成复习版HTML
function generateReviewHTML(storyData, config, storyIndex) {
  const { paragraphs, usedWords } = storyData;
  const processedParagraphs = paragraphs.map(formatReviewParagraph);
  const wordCount = processedParagraphs.join('').replace(/<[^>]+>/g, '').length;

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
      <h2><span class="no">Story${String(storyIndex).padStart(2,'0')}</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${wordCount} 字 · 融入 ${usedWords.length} 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">
${processedParagraphs.map(p => `<p>${p}</p>`).join('\n')}
      </div>
    </section>
    <footer>${config.title}：${config.subtitle} · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;
}

// 主函数
async function main() {
  console.log('=== 开始生成10个故事 ===\n');

  const vocabulary = loadVocabulary();
  console.log(`已加载 ${vocabulary.length} 个词汇\n`);

  for (let i = 1; i <= 10; i++) {
    const config = storyConfigs[i - 1];
    console.log(`[${i}/10] ${config.title}：${config.subtitle}`);

    const storyData = generateStoryWithWords(config.subtitle, vocabulary);

    if (storyData.paragraphs.length === 0) {
      console.log(`  - 跳过（缺少故事模板）\n`);
      continue;
    }

    // 学习版
    const learnHTML = generateLearnHTML(storyData, config, i);
    fs.writeFileSync(path.join(__dirname, `../result/${String(i).padStart(2,'0')}_${config.title}_${config.subtitle}_学习版.html`), learnHTML, 'utf-8');

    // 复习版
    const reviewHTML = generateReviewHTML(storyData, config, i);
    fs.writeFileSync(path.join(__dirname, `../result/${String(i).padStart(2,'0')}_${config.title}_${config.subtitle}_复习版.html`), reviewHTML, 'utf-8');

    const charCount = storyData.paragraphs.join('').replace(/\{[^}]+\}/g, '').length;
    console.log(`  - 词汇数: ${storyData.usedWords.length}`);
    console.log(`  - 字数: 约${charCount}字\n`);
  }

  console.log('=== 所有故事生成完成! ===');
  console.log(`文件保存在: result/ 目录\n`);
}

main().catch(err => { console.error('生成失败:', err); process.exit(1); });