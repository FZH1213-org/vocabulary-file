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
  const posMarkers = ['n.', 'v.', 'vt.', 'vi.', 'a.', 'adj.', 'ad.', 'adv.', 'prep.', 'conj.', 'int.', 'pron.', 'num.', 'art.', 'pl.', 'sing.', 'pref.', 'suf.'];
  let chinese = meaning;
  posMarkers.forEach(marker => {
    chinese = chinese.replace(new RegExp(`\\s*${marker.replace('.', '\\.')}\\s*`, 'gi'), '');
    chinese = chinese.replace(new RegExp(`^${marker.replace('.', '\\.')}`, 'gi'), '');
  });
  chinese = chinese
    .replace(/[a-zA-Z]/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/\[.*?\]/g, '')
    .replace(/\//g, ' ')
    .replace(/[\.·;；]/g, ' ')
    .replace(/^\s+|\s+$/g, '')
    .replace(/\s+/g, ' ');
  const parts = chinese.split(/[，,\s]+/);
  chinese = parts[0] || '';
  if (chinese.length < 2) {
    const fallback = meaning.replace(/[a-zA-Z\(\)\/\.\[\]]/g, '').trim();
    const match = fallback.match(/[一-龥]+/);
    if (match) chinese = match[0].substring(0, 4);
  }
  if (chinese.length > 4) chinese = chinese.substring(0, 4);
  return chinese.trim();
}

// 20个新故事配置（11-30）
const storyConfigs = [
  { theme: '霸总', title: '豪门契约：总裁的替身新娘', subtitle: '前女友回归', tags: '霸总 · 契约婚姻 · 豪门恩怨' },
  { theme: '霸总', title: '豪门契约：总裁的替身新娘', subtitle: '误会重重', tags: '霸总 · 契约婚姻 · 豪门恩怨' },
  { theme: '霸总', title: '豪门契约：总裁的替身新娘', subtitle: '真相揭晓', tags: '霸总 · 契约婚姻 · 豪门恩怨' },
  { theme: '大女主', title: '重生之商业女王', subtitle: '仇人现身', tags: '重生 · 商战 · 大女主' },
  { theme: '大女主', title: '重生之商业女王', subtitle: '暗中较量', tags: '重生 · 商战 · 大女主' },
  { theme: '大女主', title: '重生之商业女王', subtitle: '女王加冕', tags: '重生 · 商战 · 大女主' },
  { theme: '职场', title: '职场逆袭：从实习生到总监', subtitle: '项目机遇', tags: '职场 · 励志 · 成长' },
  { theme: '职场', title: '职场逆袭：从实习生到总监', subtitle: '实力证明', tags: '职场 · 励志 · 成长' },
  { theme: '职场', title: '职场逆袭：从实习生到总监', subtitle: '晋升之路', tags: '职场 · 励志 · 成长' },
  { theme: '校园', title: '那年夏天，我们相遇', subtitle: '学长的关怀', tags: '校园 · 青春 · 恋爱' },
  { theme: '校园', title: '那年夏天，我们相遇', subtitle: '前女友风波', tags: '校园 · 青春 · 恋爱' },
  { theme: '校园', title: '那年夏天，我们相遇', subtitle: '毕业承诺', tags: '校园 · 青春 · 恋爱' },
  { theme: '恋爱', title: '心动信号', subtitle: '甜蜜约会', tags: '恋爱 · 都市 · 甜宠' },
  { theme: '恋爱', title: '心动信号', subtitle: '父母认可', tags: '恋爱 · 都市 · 甜宠' },
  { theme: '恋爱', title: '心动信号', subtitle: '求婚时刻', tags: '恋爱 · 都市 · 甜宠' },
  { theme: '穿越', title: '穿越时空的爱恋', subtitle: '意外穿越', tags: '穿越 · 古代 · 恋爱' },
  { theme: '穿越', title: '穿越时空的爱恋', subtitle: '宫廷生存', tags: '穿越 · 古代 · 恋爱' },
  { theme: '穿越', title: '穿越时空的爱恋', subtitle: '王子相遇', tags: '穿越 · 古代 · 恋爱' },
  { theme: '悬疑', title: '迷雾中的真相', subtitle: '神秘事件', tags: '悬疑 · 推理 · 都市' },
  { theme: '悬疑', title: '迷雾中的真相', subtitle: '线索追踪', tags: '悬疑 · 推理 · 都市' }
];

// 20个新故事模板
const storyTemplates = {
  '前女友回归': [
    '契约婚姻进行到第三个月，林若雪逐渐适应了沈氏集团的WORD。她用专业能力赢得了同事的WORD，沈墨尘对她也开始有了新的WORD。',
    '然而，一个意外的消息打破了这份平静。沈墨尘的前女友白晶晶从国外WORD归来。她是沈墨尘大学时期的初恋，两人曾有过一段深刻的WORD。',
    '白晶晶的出现让林若雪感到不安。媒体开始WORD两人的关系，各种猜测和传闻在集团内部WORD。林若雪试图保持冷静，但内心的WORD难以压制。',
    '某次商务晚宴上，白晶晶主动接近沈墨尘。她用温柔的话语唤起往日的WORD，沈墨尘的反应让林若雪感到WORD。她开始怀疑自己在这段关系中的WORD。',
    '回到家中，林若雪独自思考。她清楚契约只是商业交易，但内心却萌生了WORD。她不知道沈墨尘对她的态度究竟是什么WORD。',
    '第二天，林若雪专注于工作。她用忙碌来转移注意力，同时WORD自己的专业能力。她希望用实力证明自己的WORD。',
    '沈墨尘注意到林若雪的态度变化。他主动询问是否有什么WORD，林若雪选择保持沉默。她不想让契约关系变得更加WORD。',
    '周末，白晶晶邀请沈墨尘参加私人聚会。林若雪从同事口中得知这个消息，心中感到WORD。她开始思考自己在沈氏集团的WORD。',
    '然而，聚会当天，沈墨尘没有出席。他选择留在公司处理WORD项目。这个决定让林若雪感到意外，也让她心中产生了WORD。',
    '沈墨尘对林若雪说："契约中的责任比过去的感情更重要。"这句话让林若雪明白，她在这段关系中确实有WORD。',
    '接下来的日子里，白晶晶多次尝试接近沈墨尘，但每次都被WORD。沈墨尘的态度表明，他已经把过去的感情放在了WORD。',
    '林若雪感受到沈墨尘的坚定态度。她开始重新审视这段契约婚姻，也许它不只是商业交易，还有更多的WORD等待发现。',
    '某次偶然机会，林若雪和白晶晶在公司电梯相遇。白晶晶主动开口："我知道媒体的报道给你带来了困扰，我想解释一些WORD。"',
    '白晶晶说："我回来只是为了商业合作，不是试图重新开始过去的感情。我对沈墨尘已经没有那种WORD了。"',
    '林若雪听后，心中的不安有所缓解。她开始相信，白晶晶的出现确实只是商业行为的WORD。',
    '两人坦诚交流后，气氛变得轻松。白晶晶甚至表示愿意支持林若雪在沈氏集团的发展，提供必要的WORD。',
    '林若雪感激白晶晶的理解。她说："谢谢你的解释，这让我对当前的情况有了更清晰的WORD。"',
    '这场对话让林若雪明白，沟通是解决误解的最佳方式。她决定用更开放的态度面对未来的WORD。',
    '沈墨尘得知两人的交流后，感到欣慰。他说："你的成熟态度让我更加确认，选择你是正确的WORD。"'
  ],
  '误会重重': [
    '白晶晶的回归虽然被沈墨尘拒绝，但媒体的报道依然持续WORD。各种猜测让林若雪感到压力，她开始WORD自己的处境。',
    '某天，林若雪在公司看到沈墨尘和白晶晶在会议室单独WORD。虽然只是普通的工作交流，但林若雪心中产生了WORD。',
    '她选择暂时回避，专注于自己的项目。然而，同事们的议论让她无法完全WORD。各种流言在办公室中WORD。',
    '晚餐时间，林若雪独自在食堂用餐。沈墨尘走进来，坐在她对面。他问她最近是否有什么WORD，林若雪勉强回应说一切WORD。',
    '沈墨尘察觉到她的异常，直接问："你在担心什么？"林若雪犹豫片刻，最终决定坦诚自己的WORD。',
    '她说："媒体的报道让我感到不安，我不清楚你和白晶晶之间的WORD。"沈墨尘听后，表情变得WORD。',
    '他解释说："白晶晶是公司新项目的合作方，我们只是在讨论WORD。过去的感情已经结束，我现在关注的是WORD。"',
    '林若雪听后，心中的不安逐渐WORD。她意识到自己可能误解了沈墨尘的WORD。',
    '然而，第二天媒体刊登了沈墨尘和白晶晶在餐厅的照片。标题暗示两人可能WORD。林若雪看到报道，心中再次产生WORD。',
    '她不知道照片的真相，但她决定不主动询问。契约婚姻的本质让她觉得，她没有权利干涉沈墨尘的WORD。',
    '沈墨尘看到报道后，立即发布声明澄清事实。他强调两人只是商业合作，没有任何WORD关系。这个举动让林若雪感到WORD。',
    '误会虽然澄清，但林若雪明白，这段契约婚姻中的情感纠葛远比她想象的WORD。她需要更坚定地面对未来。'
  ],
  '真相揭晓': [
    '媒体的误会虽然澄清，但林若雪心中的WORD依然存在。她决定主动了解沈墨尘和白晶晶之间的WORD。',
    '通过调查，她发现白晶晶当年离开沈墨尘的原因。原来，白晶晶的家族企业面临WORD，她被迫出国寻求WORD。',
    '当年沈墨尘曾试图帮助她，但白晶晶选择独自承担WORD。这段感情的结束，并非因为两人之间的WORD。',
    '林若雪明白真相后，对白晶晶的态度发生了WORD。她开始理解白晶晶回归的真正WORD。',
    '某次偶然的机会，林若雪和白晶晶在咖啡店相遇。白晶晶主动走向她，表达了道歉的WORD。',
    '白晶晶说："我知道媒体报道给你带来了WORD，我的出现确实造成了误解。但我只是想完成家族企业的WORD。"',
    '林若雪听后，心中的芥蒂逐渐WORD。她开始相信，白晶晶对沈墨尘已经没有感情的WORD。',
    '两人坦诚交流后，关系变得缓和。林若雪甚至开始理解白晶晶的处境，她们之间产生了某种WORD。',
    '沈墨尘得知两人的交流后，感到欣慰。他对林若雪说："你的理解让我看到了你的WORD。"',
    '这句话让林若雪心中涌起复杂的WORD。她开始意识到，契约婚姻中也许存在真正的情感WORD。',
    '接下来的日子里，三人之间的关系逐渐清晰。白晶晶专注于项目合作，不再试图接近沈墨尘的WORD。',
    '真相揭晓后，林若雪对这段契约婚姻有了新的认识。她决定用心经营这段关系，也许它能变成真正的WORD。'
  ],
  '仇人现身': [
    '林若雪的公司逐渐壮大，市场地位稳固WORD。然而，前世记忆中的仇人刘华宇开始出现在她的WORD中。',
    '刘华宇是前世陷害她父亲、导致家族企业破产的WORD。今生，他依然在商界活动，试图扩张自己的WORD。',
    '林若雪通过调查发现，刘华宇正在策划针对她公司的WORD。他暗中收购竞争对手，准备发动市场WORD。',
    '她决定主动应对这个挑战。前世的经验让她清楚刘华宇的手段，她必须提前做好WORD。',
    '林若雪召开紧急会议，向核心团队透露了部分WORD。她要求加强信息安全，防止刘华宇获取公司的WORD。',
    '团队成员认真听取她的建议，开始制定应对WORD。每个人都明白，这场商业较量关乎公司的WORD。',
    '某次行业论坛上，林若雪与刘华宇正式相遇。刘华宇用虚伪的笑容接近她，试图建立表面上的WORD。',
    '林若雪保持冷静，用专业的态度应对他的WORD。她清楚，刘华宇的友好只是表面的伪装。',
    '论坛结束后，刘华宇私下邀请林若雪合作。他提出看似诱人的条件，试图让她陷入WORD。',
    '林若雪婉拒了他的提议。她清楚刘华宇的真正目的，合作只会让她失去公司的WORD。',
    '刘华宇的表情变得阴沉，他说："拒绝合作，后果自负。"这句威胁让林若雪感受到前世熟悉的WORD。',
    '她坚定回应："我的公司不需要你的WORD。"两人之间的较量正式开始，林若雪准备迎接这场WORD。'
  ],
  '暗中较量': [
    '刘华宇的威胁让林若雪意识到，她必须做好全面应对的WORD。前世记忆让她清楚他的手段WORD。',
    '她开始系统调查刘华宇的商业活动。通过数据分析，她发现刘华宇存在多项违规WORD。',
    '这些违规行为包括：财务造假、商业欺诈、不正当竞争。林若雪收集了充分的WORD证据。',
    '同时，她加强公司的内部管理，确保每个环节都不出现WORD。团队成员严格执行她的WORD。',
    '刘华宇开始暗中打压林若雪的公司。他收购媒体发布负面报道，试图破坏公司的WORD。',
    '林若雪迅速回应，发布声明澄清事实。她的专业态度让负面报道的WORD迅速消散。',
    '刘华宇又尝试从供应商渠道切断林若雪的WORD。他联系主要供应商，试图让他们停止WORD。',
    '然而，林若雪早已建立了多元化的供应WORD。刘华宇的举动无法真正影响公司的运营WORD。',
    '她同时拓展新的合作渠道，与更多供应商建立WORD。公司的供应链变得更加稳固WORD。',
    '刘华宇的多次尝试都未能成功。他开始感到焦虑，林若雪的应对能力超出他的WORD。',
    '某次深夜，林若雪独自整理证据材料。她准备在合适的时机揭露刘华宇的WORD。',
    '这场暗中较量持续进行。林若雪用冷静的头脑应对每一个挑战，她相信最终能够战胜WORD。'
  ],
  '女王加冕': [
    '与刘华宇的较量进入关键阶段。林若雪掌握了充分的证据，准备发起最后的WORD。',
    '她联系监管部门，提交了刘华宇违规经营的详细WORD。监管部门开始正式调查刘华宇的企业。',
    '调查结果证实了林若雪的指控。刘华宇的企业存在严重的违规行为，面临巨额罚款和WORD。',
    '同时，林若雪的产品在市场取得突破性成功。用户数量大幅增长，公司业绩超过WORD。',
    '媒体开始关注这位年轻的女创业者。林若雪的故事登上商业杂志的封面，被称为行业WORD。',
    '投资人纷纷寻求与她合作。林若雪的公司获得新一轮融资，估值达到WORD。',
    '她站在公司窗前，望着繁忙的城市。五年前，她重生回到这里，如今她已创造了属于自己的WORD。',
    '团队会议上，林若雪感谢每一位成员的付出。她说："我们的成功源于共同的WORD。"',
    '沈墨尘主动联系她，表达祝贺的WORD。两人之间的交流让林若雪感受到商业之外的WORD。',
    '某次商务晚宴上，林若雪被邀请上台发言。她分享了自己的创业历程，激励更多的年轻WORD。',
    '晚宴结束后，媒体称她为商业女王。这个称呼代表她在行业中的地位和WORD。',
    '林若雪微笑接受这份荣誉。她知道，前世的女王梦想今生已经实现，这只是她人生的WORD。'
  ],
  '项目机遇': [
    '遭遇霸凌后，林晓决定用实力证明自己的WORD。她主动学习设计技巧，每天花额外时间提升WORD。',
    '公司宣布启动一个重要项目：年度产品包装设计WORD。这个项目将决定公司品牌形象的未来WORD。',
    '每个设计师都可以提交方案，最终的胜出者将获得晋升WORD。林晓决定全力参与这场WORD。',
    '李娜作为资深设计师，自然成为主要竞争者。她自信自己的经验能够确保WORD。',
    '林晓认真研究项目要求，分析目标用户的审美WORD。她发现年轻用户更偏爱简洁时尚的WORD。',
    '她开始设计自己的方案。每天下班后，她在宿舍里反复修改，力求达到完美的WORD。',
    '某次深夜，主管偶然看到林晓加班。他惊讶于她的努力态度，开始对她的WORD产生好感。',
    '主管主动询问她的设计思路。林晓详细解释了自己的创意和WORD。主管点头表示认可。',
    '提交截止日，林晓完成了自己的方案。她用专业的展示方式呈现设计WORD。',
    '李娜的方案同样出色。她用复杂华丽的风格展示自己的WORD。两种风格形成鲜明对比WORD。',
    '评审会议上，高层领导认真比较每个方案。他们发现林晓的设计更符合市场WORD。',
    '最终结果尚未公布，但林晓的努力已经得到认可。她知道，这是改变职场处境的关键WORD。'
  ],
  '实力证明': [
    '项目评审结果公布，林晓的设计方案获得最佳WORD。公司决定采用她的方案进行产品WORD。',
    '李娜的表情变得僵硬。她无法接受一个新人战胜自己的WORD。但她无法反驳评审的决定WORD。',
    '主管在会议上表扬林晓的努力。他说："林晓的方案展现了出色的创意和WORD。"',
    '同事们开始改变对林晓的态度。他们意识到这个新人确实具备真正的WORD。',
    '林晓谦虚接受这份荣誉。她说："感谢团队的支持，我只是尽力做好自己的WORD。"',
    '产品按照林晓的设计进行生产。新包装上市后，市场反应超出预期WORD。',
    '销售数据显示，年轻用户对新产品包装表现出强烈的喜爱WORD。公司业绩明显提升WORD。',
    '高层领导再次肯定林晓的贡献。他们认为这次成功证明了公司的投资WORD。',
    '林晓的名字在公司内部传开。她不再只是一个默默无闻的实习生，而是具备实力的WORD。',
    '李娜开始感到压力。她的资深地位受到挑战，她必须重新证明自己的WORD。',
    '某次团队会议上，李娜主动承认之前的错误态度。她说："我对林晓的判断有误，她的能力确实WORD。"',
    '林晓听后，心中的委屈逐渐消散。她明白，实力是赢得尊重的最佳WORD。'
  ],
  '晋升之路': [
    '林晓的实力得到认可后，公司给予她更多的WORD机会。她开始参与重要项目的决策WORD。',
    '主管建议她申请正式设计师职位。林晓认真准备申请材料，展示自己的专业WORD。',
    '人事部门审核她的申请。基于她的项目成果和工作态度，职位晋升顺利通过WORD。',
    '林晓正式成为公司的设计师，不再只是实习生WORD。这个变化让她的职场地位明显提升WORD。',
    '薪酬也随之调整，林晓的经济状况得到改善WORD。她终于可以搬出宿舍，租住独立的公寓WORD。',
    '新的工作职责让她面临更多挑战。她必须独立负责设计项目，确保每个方案的WORD。',
    '林晓用专业态度应对每项任务。她的设计作品持续获得客户认可，公司业绩稳步WORD。',
    '某次客户会议上，林晓被邀请单独发言。她展示自己的设计理念，赢得客户的WORD。',
    '高层领导注意到她的成长速度。他们开始考虑给予她更大的发展WORD。',
    '半年后，林晓被提拔为设计团队的主管。她将负责指导新设计师的WORD。',
    '这个晋升速度超出常规，但林晓的实力证明了决定的WORD。她成为公司最年轻的主管WORD。',
    '林晓站在新的起点，望着前方更广阔的道路。她知道，职场逆袭只是开始，未来还有更多WORD。'
  ],
  '学长的关怀': [
    '社团活动让林小雨和陈浩的关系逐渐亲密WORD。他们开始在工作之外有更多的交流WORD。',
    '某次考试周，林小雨感到压力巨大。她独自在图书馆复习，面对繁重的学业WORD。',
    '陈浩偶然看到她疲惫的样子。他主动走近，询问是否需要帮助的WORD。',
    '林小雨点头，她确实需要一些学习建议。陈浩分享了自己的复习方法和WORD。',
    '他陪她一起复习，帮助整理重点知识WORD。林小雨感受到学长真诚的关怀WORD。',
    '复习过程中，两人交流了各自的学习经历。陈浩分享了大学时期的成长WORD。',
    '林小雨发现学长不只是外表温和，内在也具备深厚的知识WORD。她对他的印象更加深刻WORD。',
    '考试结束，林小雨的成绩超出预期。她感激陈浩的帮助，决定表达感谢的WORD。',
    '某次社团活动中，她准备了小礼物送给陈浩。陈浩微笑接受，说："这只是学长应有的WORD。"',
    '林小雨感受到这句话背后的含义。她开始思考两人之间的关系是否不只是普通的WORD。',
    '室友们注意到她的变化。她们开玩笑地问："你是不是对学长有了特别的WORD？"',
    '林小雨摇头否认，但内心却开始动摇。陈浩的关怀确实让她产生了不同的WORD。'
  ],
  '前女友风波': [
    '陈浩的关怀让林小雨感到温暖，但她偶然得知陈浩曾有前任女友的WORD。这个消息让她心中产生不安WORD。',
    '前任女友是陈浩高中时期的同学，两人曾有短暂的恋爱WORD。林小雨不知道这段经历是否还影响陈浩的WORD。',
    '某次社团活动中，前任女友突然出现。她是本校的学姐，特意来看社团的展示WORD。',
    '林小雨看到陈浩和前任女友交谈，心中涌起复杂的情绪WORD。她不确定两人之间是否还有情感的WORD。',
    '陈浩注意到林小雨的反应。活动结束后，他主动解释："我和她已经结束，现在只是普通的WORD。"',
    '林小雨听后，心中的不安稍有缓解WORD。但她依然担忧，过去的感情是否会影响现在的WORD。',
    '接下来几天，林小雨刻意保持距离WORD。她不确定自己应该如何面对这段关系WORD。',
    '陈浩察觉到她的疏远。他主动询问："最近你是否有什么顾虑？"林小雨犹豫片刻，坦白自己的WORD。',
    '她说："前任女友的出现让我感到不安，我不知道我们之间的关系是什么WORD。"',
    '陈浩认真回应："过去的感情已经结束，我现在关注的是和你之间的WORD。"',
    '这句话让林小雨感受到陈浩的真诚WORD。她开始相信，两人的关系可以继续发展WORD。',
    '前女友风波虽然带来短暂困扰，但最终让两人坦诚了彼此的WORD。关系变得更加清晰WORD。'
  ],
  '毕业承诺': [
    '大学毕业季来临，林小雨和陈浩都面临人生的重要选择WORD。他们必须决定未来的方向和WORD。',
    '陈浩已经获得科技公司的职位邀请。他将开始职业生涯，追求自己的专业WORD。',
    '林小雨还在思考自己的方向。她可以选择继续深造，或者进入社会工作WORD。',
    '某次深夜，两人在校园湖边漫步。陈浩问她："毕业后的打算是什么？"林小雨犹豫地表达自己的WORD。',
    '她说："我想继续学习摄影，但也不确定是否应该先工作积累WORD。"',
    '陈浩听后，表达了自己的想法："无论你选择什么，我都会支持你的WORD。"',
    '这句话让林小雨感受到陈浩的坚定态度WORD。她开始思考两人的关系在未来应该如何WORD。',
    '毕业典礼当天，陈浩在人群中等待林小雨。典礼结束后，他走近她，说："我有个重要的WORD。"',
    '林小雨心跳加速，她等待陈浩的下一句话WORD。陈浩说："毕业后，我们正式在一起吧WORD。"',
    '林小雨点头，眼中涌出喜悦的泪水WORD。这是她期待已久的承诺，终于在这一刻实现WORD。',
    '两人拥抱在毕业典礼的人群中。周围的毕业生为他们欢呼，这个场景成为校园的美好WORD。',
    '毕业承诺让两人的关系正式确立。他们将共同面对未来，追求各自的梦想和WORD。'
  ],
  '甜蜜约会': [
    '表白成功后，林雪和王晨开始频繁约会WORD。他们探索城市中的各种有趣地点，享受彼此的WORD。',
    '周末的早晨，王晨邀请林雪去公园晨跑。两人并肩跑步，呼吸清新的空气WORD。运动后的早餐让约会更加美好WORD。',
    '某次下午，他们参观城市美术馆。王晨对艺术有独特的见解，林雪欣赏他的审美WORD。两人在作品前交流想法，增进了彼此的了解WORD。',
    '晚餐时间，他们选择安静的餐厅。烛光下的交谈让气氛变得浪漫WORD。王晨分享工作中的趣事，林雪笑得开心WORD。',
    '约会结束后，王晨送林雪回家。路上两人牵着手，感受彼此的温度WORD。这个简单的动作让林雪感到安心WORD。',
    '接下来几周，他们尝试各种约会方式。电影院的观影、书店的阅读、咖啡馆的闲聊WORD。每一种体验都让感情加深WORD。',
    '林雪发现王晨不只是外表温和，性格也充满体贴WORD。他总能注意到她的需求，给予适当的关怀WORD。',
    '王晨同样感受到林雪的独特魅力。她的独立思考和温柔性格让他产生深厚的情感WORD。',
    '某次旅行，他们去海边度假。沙滩上的漫步让两人更加亲密WORD。夕阳下，王晨说："和你在一起，生活变得美好WORD。"',
    '林雪回应："我也是，这段关系让我感受到真正的幸福WORD。"',
    '甜蜜约会持续进行。两人用行动证明彼此的感情，每一刻都成为珍贵的回忆WORD。',
    '朋友们注意到林雪的变化。她变得更加开朗，生活充满期待和WORD。'
  ],
  '父母认可': [
    '林雪和王晨的关系稳定发展，两人决定向父母介绍彼此的WORD。这是关系进一步发展的重要步骤WORD。',
    '林雪邀请王晨到家中晚餐。父母准备了丰盛的菜肴，等待这位年轻人的到来WORD。',
    '王晨准时到达，他带着礼物，礼貌地问候林雪的父母WORD。他的举止让父母产生好感WORD。',
    '晚餐中，王晨分享自己的工作和成长经历。林雪的父亲对他的事业态度表示认可WORD。母亲则欣赏他的温和性格WORD。',
    '晚餐结束后，父母私下与林雪交流。他们说："这个年轻人值得信任，你们的相处让人感到放心WORD。"',
    '林雪听后，心中充满喜悦WORD。父母的认可让这段关系更加稳固WORD。',
    '接下来周末，王晨邀请林雪去他家。他的父母同样温和友好，对林雪表现出热情的欢迎WORD。',
    '王晨的母亲说："我们听过你的故事，很高兴认识你WORD。"这句话让林雪感受到家庭的温暖WORD。',
    '两家人开始建立联系。某次聚餐中，父母们交流彼此的生活，气氛和谐融洽WORD。',
    '林雪和王晨观察父母的互动。他们发现彼此的家庭价值观相似，这让他们对未来的关系更有信心WORD。',
    '父母认可成为关系发展的重要里程碑WORD。两人开始思考更长远的计划，比如共同的生活和WORD。',
    '家庭的祝福让林雪和王晨的关系更加稳固。他们准备迈向下一个阶段的WORD。'
  ],
  '求婚时刻': [
    '恋爱一年后，王晨开始思考更长远的关系WORD。他决定向林雪求婚，建立正式的家庭关系WORD。',
    '他秘密准备求婚计划。选择林雪生日当天作为特殊的时刻WORD。这天对两人都有重要的意义WORD。',
    '王晨联系林雪的朋友，共同策划惊喜WORD。他们布置场地，准备戒指和鲜花WORD。',
    '生日当天，王晨邀请林雪去他们初次相遇的咖啡店WORD。林雪以为只是普通的生日约会WORD。',
    '咖啡店的服务员配合演出，引导林雪到布置好的区域WORD。王晨站在那里，手捧鲜花和戒指WORD。',
    '林雪看到这个场景，心中涌起惊喜和感动WORD。她意识到这是一个重要的时刻WORD。',
    '王晨走向她，用认真的目光注视。他说："一年前我们在这里相遇，今天我想问你一个重要的WORD。"',
    '他单膝跪下，展示戒指："你愿意嫁给我吗？"林雪的眼泪涌出，她点头回应："我愿意WORD。"',
    '周围的朋友和顾客为两人欢呼。咖啡店的氛围变得温馨浪漫WORD。',
    '王晨把戒指戴在林雪的手上。两人拥抱，感受彼此的温度和情感WORD。',
    '求婚成功后，两人开始筹备婚礼。父母们表示支持，朋友们愿意协助WORD。',
    '求婚时刻成为两人关系的转折点。从相遇、表白到求婚，他们的故事证明了真诚爱情的WORD。'
  ],
  '意外穿越': [
    '历史系学生苏晴在博物馆参观古代文物WORD。她被一件神秘的玉佩吸引，伸手触摸它的表面WORD。',
    '突然，一道光芒闪过。苏晴感到意识模糊，周围的场景开始变化WORD。她睁开眼睛，发现自己身处陌生的环境WORD。',
    '这里是古代的宫殿建筑，周围是穿着古装的人群WORD。苏晴震惊地意识到，她穿越到了古代时代WORD。',
    '她检查自己的衣着，发现身穿古代女子的服装WORD。玉佩依然在手中，似乎是穿越的关键物品WORD。',
    '苏晴必须隐藏自己的身份。她不能暴露来自现代的事实，否则可能引发严重后果WORD。',
    '她观察周围的环境，试图了解这个时代的基本情况WORD。通过听闻，她知道这里是古代王国的皇宫WORD。',
    '苏晴被误认为是新来的宫女。她必须适应宫廷的生活方式，学习古代的礼仪和规则WORD。',
    '宫廷生存远比想象复杂。各种规矩和等级制度让她感到压力WORD。但她决心努力适应这个新的世界WORD。',
    '她开始学习宫廷礼仪，模仿其他宫女的言行举止WORD。逐渐，她能够基本融入这个环境WORD。',
    '然而，宫廷中的竞争和纷争让她感受到生存的艰难WORD。她必须小心应对每一个挑战WORD。',
    '苏晴思考如何回到现代。玉佩是关键物品，她必须找到使用它的正确方法WORD。',
    '意外穿越让她进入全新的世界。她决心在宫廷中生存，同时寻找回家的方法WORD。'
  ],
  '宫廷生存': [
    '宫廷生活远比苏晴想象的复杂WORD。各种等级制度和礼仪规则让她感到压力WORD。',
    '她被分配到皇后身边工作。这个位置让她接触到宫廷的核心权力圈WORD。但也面临更大的风险WORD。',
    '皇后是一位温和但严谨的女性。她对新来的宫女有高标准的要求WORD。苏晴必须努力满足她的期望WORD。',
    '某次工作中，苏晴因为不熟悉古代礼仪出现错误WORD。皇后的表情变得严厉，她感到紧张WORD。',
    '然而，皇后最终只是轻声提醒："认真学习，不要再次出错WORD。"',
    '苏晴点头表示理解。她决心加倍努力，掌握宫廷的所有规则WORD。',
    '她观察其他宫女的工作方式，学习她们的经验和技巧WORD。逐渐，她能够熟练完成各项任务WORD。',
    '宫廷中存在各种人际关系。有些宫女愿意帮助她，有些则保持距离甚至设置障碍WORD。',
    '苏晴选择谨慎应对。她用真诚的态度对待每个人，但不轻易暴露自己的真实想法WORD。',
    '某次夜晚，她独自在房间思考。现代生活与古代宫廷的差异让她感到困惑WORD。',
    '她怀念现代的便利和自由，但也开始理解古代生活的节奏和意义WORD。',
    '宫廷生存让她学会适应和谨慎。她知道，只有融入这个环境，才能寻找回家的机会WORD。'
  ],
  '王子相遇': [
    '宫廷工作让苏晴逐渐适应古代生活WORD。然而，一次意外让她与王子产生交集WORD。',
    '某次花园散步中，苏晴不小心撞到了一位年轻男子WORD。她慌忙道歉，发现对方是王国的王子WORD。',
    '王子名叫李轩，是王国的继承人。他外表英俊，举止温和WORD。他对苏晴的态度出乎她的意料WORD。',
    '李轩微笑说："没关系，你是新来的宫女吧？"苏晴点头，内心紧张WORD。',
    '他询问她的名字和背景。苏晴谨慎回答，不暴露自己的真实身份WORD。',
    '李轩注意到她的特殊气质。他说："你的言行和普通宫女有些不同WORD。"',
    '苏晴心中紧张，她不知道王子是否察觉到她的秘密WORD。',
    '然而，李轩只是表达好奇。他说："有空可以多交流，我想了解更多关于你的事WORD。"',
    '接下来的日子里，苏晴偶尔在宫廷中遇到李轩。他总是主动与她交谈，态度友好WORD。',
    '苏晴开始理解王子的性格。他不只是外表温和，内在也充满智慧和对人民的关心WORD。',
    '两人之间的交流逐渐深入。李轩分享王国的历史和现状，苏晴提供她的见解WORD。',
    '王子相遇让苏晴在宫廷中有了特殊的联系。但她依然谨慎，不暴露自己来自现代的WORD。'
  ],
  '神秘事件': [
    '都市夜晚，年轻记者陈默接到一个神秘的电话WORD。来电者声称有一件重要事件需要调查WORD。',
    '来电者说："城市中心发生了一起离奇的失踪案件，媒体没有报道真相WORD。"',
    '陈默作为独立记者，对神秘事件有浓厚的兴趣WORD。他决定亲自调查这个案件WORD。',
    '他前往失踪案件的发生地点。这是一座老旧的建筑，外观显得阴沉WORD。',
    '附近的居民对这里表现出回避的态度。他们说："这座建筑有奇怪的传闻，没人敢靠近WORD。"',
    '陈默进入建筑内部。走廊昏暗，空气中弥漫着陈旧的气息WORD。他用手电筒照亮前方WORD。',
    '在建筑的深处，他发现一间封闭的房间WORD。门上有奇怪的符号，似乎有特殊的含义WORD。',
    '他推开门，发现房间内有大量的文件和照片WORD。这些材料似乎与失踪案件相关WORD。',
    '陈默开始阅读文件内容。材料显示，失踪者都与某个组织有联系WORD。这个组织似乎在进行秘密活动WORD。',
    '他决定深入调查。拍摄了关键材料，准备后续分析WORD。',
    '离开建筑时，他注意到有人在跟踪他WORD。陈默迅速离开现场，返回家中整理线索WORD。',
    '神秘事件让他进入一个危险的调查领域。但他决心揭开真相，无论面临什么WORD。'
  ],
  '线索追踪': [
    '神秘事件的调查让陈默发现关键的线索WORD。文件材料显示失踪者都与名为"暗影"的组织有联系WORD。',
    '他开始追踪这个组织的背景WORD。通过数据库搜索，他发现"暗影"是一个秘密的商业集团WORD。',
    '这个集团涉及多项可疑活动：非法交易、数据窃取、人员失踪WORD。陈默意识到案件的复杂性WORD。',
    '他联系其他记者朋友，分享调查进展WORD。朋友们愿意协助，共同追踪线索WORD。',
    '某次调查中，陈默发现一位失踪者的家属WORD。家属愿意提供更多信息，协助调查WORD。',
    '家属说："我的亲人失踪前曾收到威胁，警告他不要揭露某些事实WORD。"',
    '陈默记录这个信息。他开始理解失踪案件的真正原因：某些人试图隐藏重要真相WORD。',
    '他继续追踪线索，发现更多失踪者都有类似的经历WORD。他们都被威胁，然后神秘消失WORD。',
    '调查进入危险阶段。陈默注意到有陌生人在监视他WORD。他必须小心行动，避免暴露WORD。',
    '某次夜晚，他收到匿名信息。信息警告："停止调查，否则后果自负WORD。"',
    '陈默没有退缩。他认为真相必须揭露，无论面临什么威胁WORD。',
    '线索追踪持续进行。他用专业记者的态度应对每个挑战，决心揭开事件的真相WORD。'
  ]
};

// 选择词汇并嵌入故事
function generateStoryWithWords(templateKey, vocabulary) {
  const paragraphs = storyTemplates[templateKey] || [];
  if (paragraphs.length === 0) return { paragraphs: [], usedWords: [] };

  const totalSlots = paragraphs.reduce((sum, p) => sum + (p.match(/WORD/g) || []).length, 0);
  const shuffled = [...vocabulary].sort(() => Math.random() - 0.5);
  const targetWords = Math.min(Math.max(totalSlots, 50), 60);
  const selectedWords = shuffled.slice(0, targetWords);

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
        result = result.replace('WORD', '重要');
      }
    });
    return result;
  });

  return { paragraphs: processedParagraphs, usedWords };
}

function formatLearnParagraph(paragraph) {
  return paragraph.replace(/\{([^|]+)\|([^}]+)\}/g,
    (match, word, chinese) => `<span class="w" onclick="speak('${word}')">${word}（${chinese}）📢</span>`
  );
}

function formatReviewParagraph(paragraph) {
  return paragraph.replace(/\{([^|]+)\|([^}]+)\}/g,
    (match, word, chinese) => `<span class="r" onclick="toggle(this)">${word}(<span class="h">${chinese}</span>)</span>`
  );
}

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

async function main() {
  console.log('=== 开始生成20个新故事（11-30） ===\n');

  const vocabulary = loadVocabulary();
  console.log(`已加载 ${vocabulary.length} 个词汇\n`);

  for (let i = 0; i < 20; i++) {
    const config = storyConfigs[i];
    const storyIndex = 11 + i;
    console.log(`[${storyIndex}/30] ${config.title}：${config.subtitle}`);

    const storyData = generateStoryWithWords(config.subtitle, vocabulary);

    if (storyData.paragraphs.length === 0) {
      console.log(`  - 跳过（缺少故事模板）\n`);
      continue;
    }

    const learnHTML = generateLearnHTML(storyData, config, storyIndex);
    fs.writeFileSync(path.join(__dirname, `../result/${String(storyIndex).padStart(2,'0')}_${config.title}_${config.subtitle}_学习版.html`), learnHTML, 'utf-8');

    const reviewHTML = generateReviewHTML(storyData, config, storyIndex);
    fs.writeFileSync(path.join(__dirname, `../result/${String(storyIndex).padStart(2,'0')}_${config.title}_${config.subtitle}_复习版.html`), reviewHTML, 'utf-8');

    const charCount = storyData.paragraphs.join('').replace(/\{[^}]+\}/g, '').length;
    console.log(`  - 词汇数: ${storyData.usedWords.length}`);
    console.log(`  - 字数: 约${charCount}字\n`);
  }

  console.log('=== 20个新故事生成完成! ===');
  console.log(`文件保存在: result/ 目录\n`);
}

main().catch(err => { console.error('生成失败:', err); process.exit(1); });