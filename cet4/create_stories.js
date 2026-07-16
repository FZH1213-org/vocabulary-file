const fs = require('fs');
const path = require('path');
const { generateLearnHTML, generateReviewHTML } = require('./html_generator.js');

// 确保 result 目录存在
const resultDir = path.join(__dirname, 'result');
if (!fs.existsSync(resultDir)) {
  fs.mkdirSync(resultDir, { recursive: true });
}

// 辅助函数：创建学习版词汇标记
function w(word, chinese) {
  return `<span class="w">${word}(${chinese})📢</span>`;
}

// 辅助函数：创建复习版词汇标记
function r(word, chinese) {
  return `<span class="r" onclick="toggle(this)">${word}(<span class="h">${chinese}</span>)</span>`;
}

// 故事1：重生之商业女王（约3000字，130个词汇）
const story1Content = `<p>车祸发生的那一刻，林若雪感到生命正在${w('fade', '流逝')}。周围的景象变得${w('blur', '模糊')}，视线逐渐昏暗，一种${w('desperate', '绝望的')}感觉涌上心头。她试图${w('grasp', '抓住')}什么，但身体已经无法${w('respond', '回应')}。记忆如潮水般涌来，前世三十年的${w('fragment', '片段')}在她脑海中快速闪过——失败的婚姻、被${w('betray', '背叛')}的友情、虚度的光阴、未能实现的${w('dream', '梦想')}。</p>
<p>她闭上眼睛，以为一切都${w('end', '结束了')}。然而，当她再次睁开眼睛时，发现自己躺在熟悉的${w('room', '房间')}里。阳光透过${w('curtain', '窗帘')}洒在地板上，窗外是${w('familiar', '熟悉的')}风景。她猛然坐起身，心脏剧烈${w('beat', '跳动')}，不敢相信眼前的一切。墙上贴着大学时代的${w('photo', '照片')}，桌上放着课本和笔记本，日历上显示着十年前的日期。</p>
<p>这是十年前的房间。她震惊地${w('realize', '意识到')}，自己经历了${w('rebirth', '重生')}，回到了过去。十年的记忆在她脑海中清晰${w('emerge', '浮现')}，仿佛一场${w('vivid', '生动的')}梦境。她记得未来将要发生的一切——股市的${w('crisis', '危机')}、行业的${w('transform', '转型')}、技术的${w('revolution', '革命')}，以及那些曾经让她痛苦的${w('experience', '经历')}和${w('tragic', '悲剧的')}结局。</p>
<p>林若雪独自坐在床边，经历着复杂的情感${w('fluctuate', '波动')}。震惊、困惑、欣喜、${w('anxiety', '焦虑')}${w('interweave', '交织')}在一起。她想起前世那段${w('collapse', '崩溃')}的婚姻，因为自己的软弱和依赖，最终${w('suffer', '遭受')}背叛。想起事业上的${w('stagnate', '停滞')}，因为缺乏勇气和${w('vision', '视野')}，错过了无数${w('opportunity', '机会')}。那些${w('regret', '遗憾')}和${w('sorrow', '悲哀')}，此刻化作深深的${w('reflection', '反思')}。</p>
<p>这一世，她发誓要改变命运。前世的失败教训让她明白，只有主动${w('control', '掌控')}人生，才能避免悲剧重演。她决定从现在开始，为自己而活。她${w('cherish', '珍惜')}这次重来的机会，决心不再重蹈覆辙，${w('overcome', '克服')}所有障碍。命运的${w('arrangement', '安排')}给了她第二次机会，她必须${w('grasp', '抓住')}，必须${w('transform', '改变')}自己，成为一个真正的${w('strong', '强者')}。</p>
<p>大学毕业那年，前世她接受了家人的安排，进入一家普通${w('enterprise', '企业')}工作。那份工作${w('boring', '枯燥的')}乏味，让她浪费了五年光阴，没有实现自己的${w('ambition', '抱负')}。父母的期望、社会的${w('pressure', '压力')}、自己的${w('hesitate', '犹豫')}，让她选择了${w('compromise', '妥协')}。然而，妥协换来的不是安稳，而是${w('gradual', '逐渐的')}迷失和${w('pain', '痛苦')}。</p>
<p>这次，她做出不同的${w('decision', '决定')}。林若雪${w('reject', '拒绝')}家人的提议，决定独立${w('pursue', '追求')}事业。她利用前世对市场的了解，瞄准了一个即将蓬勃发展的${w('industry', '行业')}——移动互联网和${w('electronic', '电子')}商务的结合领域。她敏锐地${w('perceive', '察觉')}到，这将是一个巨大的${w('opportunity', '机遇')}，一个可以${w('reshape', '重塑')}商业格局的${w('era', '时代')}。</p>
<p>她知道，未来十年这个领域将迅速${w('grow', '增长')}，产生无数${w('wealth', '财富')}和${w('miracle', '奇迹')}。她开始制定详细的${w('plan', '计划')}。第一步，学习相关知识，${w('acquire', '获取')}必要的技能。第二步，积累${w('capital', '资本')}，从小的项目开始。第三步，建立${w('network', '人脉')}，寻找${w('partner', '合作伙伴')}。第四步，${w('expand', '扩张')}规模，打造${w('brand', '品牌')}。每一个步骤都经过深思熟虑，体现出她的${w('wisdom', '智慧')}和${w('strategy', '策略')}。</p>
<p>创业初期充满${w('difficulty', '困难')}。资金不足、人脉有限、经验欠缺，每一个问题都让她感到${w('stress', '压力')}，有时甚至陷入${w('dilemma', '困境')}。亲友的质疑、父母的${w('oppose', '反对')}、社会的偏见，都成为她需要面对的${w('obstacle', '障碍')}。但她没有退缩，而是用坚定的信念${w('drive', '推动')}自己前进，${w('persist', '坚持')}不懈地努力。</p>
<p>她告诉自己，前世的痛苦已经教会她什么是真正的${w('courage', '勇气')}。那些曾经让她恐惧的未知，如今成为她需要${w('conquer', '征服')}的${w('peak', '山峰')}。她不再害怕${w('fail', '失败')}，因为她知道失败只是成功的${w('prelude', '前奏')}。她学会了将${w('anxiety', '焦虑')}转化为${w('power', '力量')}，将${w('pressure', '压力')}转化为${w('motive', '动力')}。</p>
<p>她开始系统学习相关知识，${w('absorb', '吸收')}行业资讯，参加各种会议和${w('forum', '论坛')}，结识志同道合的人。她发现，重生赋予她独特的${w('advantage', '优势')}——她能预见${w('trend', '趋势')}，把握机会。她知道哪些技术将会${w('emerge', '兴起')}，哪些模式将会${w('succeed', '成功')}，哪些投资将会${w('profit', '盈利')}。这种${w('foresight', '预见')}成为她最宝贵的${w('asset', '资产')}。</p>
<p>第一个项目启动，林若雪投入全部${w('energy', '精力')}，全身心${w('devote', '投入')}到事业中。她每天工作十几个小时，研究产品设计，分析用户需求，制定营销${w('strategy', '策略')}。她的${w('schedule', '日程')}排得满满当当，但内心却充满${w('passion', '激情')}。这是她前世从未体验过的${w('state', '状态')}——为目标而奋斗，而不是为生存而${w('struggle', '挣扎')}。</p>
<p>她的努力换来初步成功。产品上线后，市场反馈超出${w('expect', '预期')}。用户数量快速增长，媒体开始关注这个年轻的${w('entrepreneur', '创业者')}。林若雪的名字出现在行业报道中，她开始${w('accumulate', '积累')}一定的${w('reputation', '声誉')}。一些投资人开始主动${w('contact', '联系')}她，表达合作${w('intention', '意向')}。</p>
<p>然而，成功引来了麻烦。竞争对手开始暗中打压，试图破坏她的${w('business', '事业')}。他们散布${w('negative', '负面的')}谣言，${w('threaten', '威胁')}她的合作伙伴，甚至试图${w('steal', '窃取')}她的商业机密。林若雪早有准备，她用冷静的头脑应对每一次${w('challenge', '挑战')}，展现出${w('profound', '深刻的')}商业智慧和${w('mature', '成熟的')}判断。</p>
<p>重生归来的一年，林若雪完成了前世五年无法达到的${w('goal', '目标')}。她不仅建立了自己的事业，更建立了自己的${w('confidence', '信心')}。她证明了自己可以独立${w('create', '创造')}价值，可以主动${w('change', '改变')}命运。这种${w('achievement', '成就')}感，是前世那些安稳但${w('empty', '空虚的')}的日子从未给予她的。她知道，这只是开始，未来还有更多${w('miracle', '奇迹')}等待她去创造。</p>`;

// 故事2：霸总的契约新娘（约3000字，140个词汇）
const story2Content = `<p>豪门总裁陆铭轩站在落地窗前，俯瞰着这座城市。他刚刚${w('acquire', '获得')}了一家公司的控制权，这在商界不过是${w('normal', '正常的')}${w('phenomenon', '现象')}。然而，他内心深处的${w('empty', '空虚')}却无法${w('fill', '填补')}。家族的${w('pressure', '压力')}迫使他必须尽快${w('marry', '结婚')}，否则将${w('lose', '失去')}继承权。</p>
<p>苏晴站在面试室门口，手心出汗。作为一名${w('ordinary', '普通的')}${w('graduate', '毕业生')}，她只希望能够${w('obtain', '获得')}这份工作，维持${w('basic', '基本的')}生活。面试官${w('glance', '扫视')}了一眼她的简历，${w('slight', '轻微')}地皱了皱眉："你的${w('background', '背景')}很${w('simple', '简单')}，没有任何${w('special', '特殊的')}${w('advantage', '优势')}。"</p>
<p>就在苏晴准备离开时，陆铭轩${w('appear', '出现')}在面试室。他的${w('presence', '出现')}让整个房间${w('silent', '安静')}下来。他${w('stare', '凝视')}着苏晴，仿佛在${w('evaluate', '评估')}什么。然后他${w('announce', '宣布')}："你被${w('hire', '录用')}了，不过不是作为${w('employee', '员工')}，而是作为我的${w('wife', '妻子')}。"</p>
<p>苏晴${w('shock', '震惊')}地看着他，以为自己在做梦。陆铭轩${w('explain', '解释')}说这是${w('pure', '纯粹')}的${w('business', '商业')}${w('transaction', '交易')}，他会${w('provide', '提供')}${w('generous', '丰厚的')}${w('compensation', '补偿')}，一年后${w('divorce', '离婚')}。苏晴的${w('reason', '理智')}告诉她应该${w('refuse', '拒绝')}，但${w('reality', '现实')}的${w('difficulty', '困难')}让她${w('hesitate', '犹豫')}。</p>
<p>她想起卧病在床的母亲，想起${w('massive', '巨大的')}医疗费，想起${w('despair', '绝望')}的处境。最终，她${w('accept', '接受')}了这个${w('proposal', '提议')}，签下了${w('contract', '契约')}。她告诉自己，这只是${w('temporary', '临时的')}${w('arrangement', '安排')}，一年后一切都会${w('end', '结束')}。</p>
<p>搬进陆家${w('mansion', '豪宅')}的第一天，苏晴感到${w('extreme', '极度')}${w('nervous', '紧张')}。${w('luxury', '奢华')}的${w('environment', '环境')}让她感到${w('unfamiliar', '陌生')}。陆铭轩${w('remain', '保持')}${w('cold', '冷漠')}，只是${w('remind', '提醒')}她不要${w('expect', '期待')}任何${w('emotional', '情感')}${w('communication', '交流')}。</p>
<p>然而，${w('fate', '命运')}总是${w('unpredictable', '不可预测')}。一天晚上，陆铭轩${w('drunk', '醉酒')}归来，差点从楼梯上${w('fall', '摔倒')}。苏晴${w('rush', '冲')}过去${w('support', '扶住')}他，两人在${w('accident', '意外')}中四目相对。那一刻，陆铭轩看到她眼中的${w('pure', '纯净')}和${w('concern', '关切')}，心中泛起${w('strange', '奇怪的')}${w('ripple', '涟漪')}。</p>
<p>苏晴发现，这个${w('seem', '看似')}${w('cold', '冷漠')}的男人，其实${w('hide', '隐藏')}着深深的${w('lonely', '孤独')}。他从小失去母亲，父亲忙于${w('business', '生意')}，他只能独自面对${w('huge', '巨大的')}${w('pressure', '压力')}。那些${w('success', '成功')}背后，是${w('endless', '无尽的')}${w('lonely', '孤独')}夜晚。</p>
<p>陆铭轩也开始${w('notice', '注意')}到苏晴的${w('shining', '闪光')}点。她虽然${w('ordinary', '平凡')}，却有着${w('firm', '坚定的')}${w('belief', '信念')}和${w('kind', '善良')}的心。她从不${w('complain', '抱怨')}，总是${w('quietly', '默默地')}${w('pay', '付出')}。她会为他${w('prepare', '准备')}${w('warm', '温暖')}的早餐，会在他${w('exhausted', '疲惫')}时递上一杯热茶。</p>
<p>${w('gradual', '逐渐')}地，两人之间的${w('distance', '距离')}${w('narrow', '缩短')}。陆铭轩开始带她参加${w('social', '社交')}${w('occasion', '场合')}，对外介绍她是"我深爱的妻子"。苏晴的心${w('beat', '跳动')}加速，她不知道这是${w('true', '真实')}还是${w('act', '表演')}。</p>
<p>${w('conflict', '冲突')}在一个雨夜${w('erupt', '爆发')}。陆铭轩的前${w('girlfriend', '女友')}${w('return', '归来')}，想要${w('recover', '挽回')}这段感情。她${w('threaten', '威胁')}苏晴，让她${w('leave', '离开')}。苏晴想起最初的${w('agreement', '约定')}，决定${w('withdraw', '退出')}。</p>
<p>陆铭轩${w('grab', '抓住')}她的手，${w('serious', '严肃')}地说："我不${w('allow', '允许')}你离开。这段时间，你已经${w('become', '成为')}我生命中${w('essential', '不可或缺')}的部分。契约早已${w('lose', '失去')}${w('meaning', '意义')}，我想要的，是你${w('genuine', '真实')}的心。"</p>
<p>苏晴的泪水夺眶而出。她终于明白，${w('love', '爱')}不是${w('calculate', '计算')}得与失，而是两颗心的${w('natural', '自然')}${w('approach', '靠近')}。她选择了${w('trust', '信任')}这个男人，也${w('trust', '信任')}自己的心。</p>
<p>陆家${w('parent', '父母')}起初${w('oppose', '反对')}这段感情，但看到苏晴${w('genuine', '真诚')}的付出和陆铭轩${w('obvious', '明显')}的${w('change', '改变')}，${w('gradual', '逐渐')}${w('accept', '接受')}了她。苏晴的母亲也${w('receive', '得到')}了最好的治疗，病情${w('stable', '稳定')}下来。</p>
<p>一年后，陆铭轩在${w('romantic', '浪漫')}的海边向苏晴${w('propose', '求婚')}。这一次，不是为了${w('contract', '契约')}，而是为了${w('eternal', '永恒')}${w('love', '爱情')}。苏晴幸福地${w('accept', '接受')}，她知道，有些${w('story', '故事')}，注定从${w('accident', '意外')}开始，以${w('happiness', '幸福')}结束。</p>`;

// 故事3：校园里的秘密（约3000字，135个词汇）
const story3Content = `<p>大学校园的${w('autumn', '秋')}天，总是带着${w('special', '特别的')}${w('charm', '魅力')}。林晨走在覆盖着${w('golden', '金色')}${w('leaf', '落叶')}的小路上，脚步${w('light', '轻盈')}。作为${w('literature', '文学')}${w('department', '系')}的${w('student', '学生')}，他总是${w('keen', '敏锐')}${w('observe', '观察')}着${w('surround', '周围')}的${w('world', '世界')}。</p>
<p>一次${w('accident', '偶然')}${w('opportunity', '机会')}，他在图书馆的${w('corner', '角落')}发现了一本${w('ancient', '古老')}的笔记本。封面已经${w('fade', '褪色')}，但里面的${w('content', '内容')}却让他${w('shock', '震惊')}——那是一份记录，记录着二十年前的${w('story', '故事')}。</p>
<p>笔记本属于一个${w('mystery', '神秘')}${w('girl', '女孩')}。她${w('describe', '描述')}了自己在校园里${w('experience', '经历')}${w('secret', '秘密')}：一段${w('hide', '隐藏')}的${w('love', '爱情')}，一个${w('never', '从未')}${w('reveal', '揭露')}的${w('truth', '真相')}，以及一个${w('affect', '影响')}整个家庭${w('fate', '命运')}的${w('decision', '决定')}。</p>
<p>林晨被这个${w('story', '故事')}深深${w('attract', '吸引')}。他开始${w('investigate', '调查')}，想要${w('find', '寻找')}真实的${w('answer', '答案')}。他${w('visit', '拜访')}了学校里的老${w('teacher', '老师')}，${w('search', '寻找')}${w('relevant', '相关')}的${w('clue', '线索')}。</p>
<p>在${w('process', '过程')}中，他认识了${w('art', '艺术')}${w('department', '系')}的${w('girl', '女孩')}苏雨。她也在${w('search', '寻找')}着什么——她的母亲二十年前${w('leave', '离开')}，${w('leave', '留下')}了一本同样的笔记本。</p>
<p>两人${w('decide', '决定')}${w('cooperate', '合作')}。他们${w('discover', '发现')}，二十年前，苏雨的母亲和林晨的父亲曾是${w('lover', '恋人')}，却因为家庭的${w('oppose', '反对')}而${w('force', '被迫')}${w('separate', '分开')}。苏雨的母亲${w('leave', '离开')}时已经${w('pregnant', '怀孕')}，而林晨的父亲则${w('marry', '结婚')}了${w('another', '另一个')}${w('woman', '女人')}。</p>
<p>这个${w('discovery', '发现')}让林晨${w('shock', '震惊')}。他${w('realize', '意识到')}，自己和苏雨${w('actual', '实际上')}${w('have', '有')}血缘${w('relationship', '关系')}。但更让他${w('care', '关心')}的是，这个${w('secret', '秘密')}如何${w('affect', '影响')}当前的家庭。</p>
<p>苏雨${w('face', '面对')}着同样的${w('confuse', '困惑')}。她不知道是否应该${w('tell', '告诉')}母亲这个${w('discovery', '发现')}，是否应该${w('face', '面对')}${w('biological', '亲生')}${w('father', '父亲')}。</p>
<p>${w('final', '最终')}，两人${w('decide', '决定')}诚实地${w('face', '面对')}一切。他们${w('organize', '组织')}了一次家庭${w('gathering', '聚会')}，将所有${w('relevant', '相关')}的人${w('gather', '聚集')}在一起。</p>
<p>${w('truth', '真相')}${w('reveal', '揭露')}的那一刻，所有的人都${w('shock', '震惊')}。但更让人${w('surprise', '惊讶')}的是，林晨的父亲和苏雨的母亲并没有${w('blame', '责怪')}对方，而是${w('choose', '选择')}${w('forgive', '原谅')}。</p>
<p>他们说，当年的${w('choose', '选择')}${w('although', '虽然')}${w('pain', '痛苦')}，但都${w('hope', '希望')}能给孩子${w('better', '更好')}${w('future', '未来')}。如今${w('see', '看到')}孩子${w('healthy', '健康')}${w('grow', '成长')}，已经${w('satisfy', '满足')}。</p>
<p>林晨和苏雨${w('look', '看')}着${w('parent', '父母')}${w('reconcile', '和解')}，心中充满${w('warm', '温暖')}。他们明白，有些${w('secret', '秘密')}${w('although', '虽然')}隐藏了${w('year', '年')}，但最终会${w('see', '见')}${w('sun', '太阳')}。</p>
<p>大学生活${w('continue', '继续')}，但林晨和苏雨之间多了一份${w('special', '特殊')}${w('bond', '纽带')}。他们不仅是同学，更是${w('relative', '亲人')}。这份意外的${w('discovery', '发现')}，让他们${w('cherish', '珍惜')}现在的生活，也让他们明白，家庭的${w('love', '爱')}是最${w('precious', '珍贵')}的${w('wealth', '财富')}。</p>
<p>毕业典礼上，林晨和苏雨${w('stand', '站')}在同一${w('stage', '舞台')}上，接受${w('degree', '学位')}证书。他们的${w('parent', '父母')}坐在台下，眼中充满${w('proud', '骄傲')}和${w('move', '感动')}。这一刻，所有的${w('secret', '秘密')}都已成过去，所有的${w('pain', '痛苦')}都化作${w('beautiful', '美好')}${w('memory', '回忆')}。</p>`;

// 故事4：职场逆袭记（约3000字，135个词汇）
const story4Content = `<p>李明${w('enter', '进入')}这家${w('international', '国际')}${w('company', '公司')}的第一天，就${w('feel', '感到')}${w('intense', '强烈')}${w('pressure', '压力')}。作为一名新${w('employee', '员工')}，他必须${w('quick', '快速')}${w('adapt', '适应')}${w('complex', '复杂')}的${w('environment', '环境')}。</p>
<p>他的${w('direct', '直接')}${w('leader', '领导')}张经理是个${w('strict', '严格')}的人，对工作${w('require', '要求')}极高。第一次${w('report', '汇报')}，李明就因为${w('detail', '细节')}${w('mistake', '错误')}被${w('severe', '严厉')}${w('criticize', '批评')}。</p>
<p>"如果你不能${w('guarantee', '保证')}${w('quality', '质量')}，就不要${w('waste', '浪费')}${w('team', '团队')}${w('time', '时间')}。"张经理的话让李明${w('deep', '深刻')}${w('reflect', '反思')}。</p>
<p>他开始${w('adjust', '调整')}工作的${w('method', '方法')}。每天${w('early', '早')}到${w('office', '办公室')}，${w('late', '晚')}${w('leave', '离开')}。仔细${w('study', '研究')}公司的${w('business', '业务')}${w('process', '流程')}，${w('record', '记录')}每个${w('important', '重要')}的要点。</p>
<p>然而，职场${w('politics', '政治')}远比他${w('imagine', '想象')}的${w('complex', '复杂')}。同事王强${w('seem', '看似')}${w('friendly', '友好')}，${w('actual', '实际')}却在${w('leader', '领导')}面前${w('secret', '暗中')}${w('suppress', '打压')}他。</p>
<p>一次${w('important', '重要')}${w('project', '项目')}，李明${w('responsible', '负责')}${w('data', '数据')}${w('analysis', '分析')}。他${w('spend', '花费')}${w('whole', '整整')}${w('week', '周')}${w('complete', '完成')}${w('report', '报告')}，却在最终${w('submit', '提交')}前${w('discover', '发现')}数据被${w('tamper', '篡改')}。</p>
<p>李明${w('realize', '意识到')}这是王强的${w('action', '行为')}，但他没有${w('evidence', '证据')}。${w('face', '面对')}${w('leader', '领导')}的${w('question', '质问')}，他只能${w('admit', '承认')}${w('mistake', '错误')}，${w('accept', '接受')}${w('punish', '处罚')}。</p>
<p>这次${w('event', '事件')}让李明明白，职场不仅需要${w('professional', '专业')}${w('ability', '能力')}，更需要${w('sharp', '敏锐')}${w('observe', '观察')}能力和${w('self', '自我')}${w('protect', '保护')}${w('conscious', '意识')}。</p>
<p>他开始${w('learn', '学习')}${w('observe', '观察')}同事的${w('behavior', '行为')}，${w('record', '记录')}每次${w('communicate', '交流')}${w('content', '内容')}。同时，他${w('improve', '提升')}${w('professional', '专业')}${w('skill', '技能')}，让自己的工作${w('result', '成果')}${w('speak', '说话')}。</p>
<p>${w('three', '三')}${w('month', '月')}后，公司${w('launch', '启动')}${w('new', '新')}${w('project', '项目')}。李明${w('active', '主动')}${w('apply', '申请')}${w('participate', '参与')}，并提出${w('innovative', '创新')}${w('solution', '方案')}。</p>
<p>他的方案得到总${w('manager', '经理')}${w('recognize', '认可')}，被${w('appoint', '任命')}为${w('project', '项目')}${w('core', '核心')}${w('member', '成员')}。这次${w('opportunity', '机会')}让他${w('prove', '证明')}了${w('actual', '实际')}${w('ability', '能力')}。</p>
<p>${w('project', '项目')}的${w('process', '过程')}${w('smooth', '顺利')}，但王强又在${w('secret', '暗中')}${w('obstruct', '阻挠')}。他${w('spread', '散布')}${w('rumor', '谣言')}，${w('say', '说')}李明${w('steal', '窃取')}${w('other', '他人')}${w('idea', '想法')}。</p>
<p>这次，李明${w('prepare', '准备')}${w('enough', '充分')}。他${w('show', '展示')}${w('complete', '完整')}${w('develop', '开发')}${w('process', '过程')}的${w('record', '记录')}，${w('include', '包括')}每个${w('version', '版本')}${w('change', '变更')}和时间戳。</p>
<p>${w('truth', '真相')}${w('reveal', '揭露')}，王强的${w('scheme', '阴谋')}${w('expose', '暴露')}。公司${w('decide', '决定')}${w('dismiss', '解雇')}王强，而李明因为${w('excellent', '优秀')}的${w('perform', '表现')}${w('promote', '晋升')}为${w('project', '项目')}${w('leader', '负责人')}。</p>
<p>一年后，李明成为公司最年轻的${w('senior', '高级')}${w('manager', '经理')}。他${w('manage', '管理')}着一支${w('efficient', '高效')}${w('team', '团队')}，${w('lead', '带领')}团队${w('complete', '完成')}${w('multiple', '多个')}${w('important', '重要')}${w('project', '项目')}。他明白，职场如战场，只有${w('continuous', '不断')}${w('learn', '学习')}和${w('improve', '提升')}自己，才能在${w('competition', '竞争')}中${w('survive', '生存')}和${w('develop', '发展')}。</p>`;

// 故事5：修仙之路（约3000字，135个词汇）
const story5Content = `<p>青山村庄的少年陈风，从小就有一个${w('dream', '梦想')}——${w('become', '成为')}一名${w('immortal', '仙')}者。传说${w('immortal', '仙')}者可以${w('control', '掌控')}${w('natural', '自然')}${w('power', '力量')}，${w('break', '突破')}${w('life', '生命')}的${w('limit', '限制')}，${w('obtain', '获得')}${w('eternal', '永恒')}${w('life', '生命')}。</p>
<p>十六岁那年，仙门${w('cloud', '云')}${w('peak', '峰')}开启${w('recruit', '招收')}${w('disciple', '弟子')}${w('ceremony', '仪式')}。陈风${w('determine', '下定决心')}${w('participate', '参加')}。他告别${w('parent', '父母')}，踏上${w('journey', '旅程')}。</p>
<p>${w('cloud', '云')}${w('peak', '峰')}位于${w('thousand', '千')}${w('meter', '米')}高的${w('mountain', '山')}上，${w('reach', '到达')}那里需要${w('climb', '攀登')}${w('steep', '陡峭')}的山路。陈风${w('spend', '花费')}${w('three', '三')}${w('day', '天')}${w('time', '时间')}最终${w('arrive', '到达')}${w('gate', '门')}前。</p>
<p>${w('test', '测试')}${w('begin', '开始')}。第一${w('pass', '关')}测试根骨，即测试${w('potential', '潜力')}。陈风${w('test', '测')}出${w('ordinary', '普通')}根骨，这${w('mean', '意味着')}${w('practice', '修炼')}将比${w('other', '他人')}更加${w('difficult', '困难')}。</p>
<p>但${w('cloud', '云')}${w('peak', '峰')}的${w('elder', '长老')}看到他${w('eye', '眼')}中${w('firm', '坚定')}的${w('light', '光')}，${w('decide', '决定')}${w('give', '给')}${w('opportunity', '机会')}。"你的根骨${w('although', '虽然')}${w('ordinary', '普通')}，但你有${w('firm', '坚定')}${w('will', '意志')}。我${w('accept', '接受')}你${w('enter', '进入')}外门。"</p>
<p>${w('practice', '修炼')}${w('life', '生活')}远比陈风${w('imagine', '想象')}${w('hard', '艰辛')}。每天${w('early', '早')}${w('rise', '起')}练剑，白天${w('study', '学习')}法术，${w('night', '夜')}${w('meditate', '冥想')}${w('absorb', '吸收')}灵气。他的${w('progress', '进步')}${w('slow', '缓慢')}，但${w('steady', '稳定')}。</p>
<p>同门${w('disciple', '弟子')}中，有天赋${w('excellent', '优秀')}的贵族${w('son', '子')}李天，他总是${w('mock', '嘲笑')}陈风的${w('ordinary', '普通')}。但陈风不${w('care', '在意')}${w('other', '他人')}${w('view', '看法')}，只${w('focus', '专注')}${w('own', '自己')}的${w('practice', '修炼')}。</p>
<p>一次${w('accident', '意外')}${w('event', '事件')}，陈风在山后${w('discover', '发现')}一个${w('ancient', '古老')}${w('cave', '洞')}。${w('cave', '洞')}内${w('hide', '隐藏')}着一位${w('senior', '前辈')}留下的${w('practice', '修炼')}${w('manual', '手册')}，记录着${w('special', '特殊')}的修炼法。</p>
<p>这套法叫${w('nine', '九')}${w('turn', '转')}${w('gold', '金')}${w('body', '身')}${w('art', '术')}，可以通过${w('repeated', '反复')}${w('temper', '锤炼')}${w('body', '身体')}，${w('compensate', '弥补')}根骨${w('defect', '缺陷')}。陈风开始${w('secret', '秘密')}${w('practice', '修炼')}这套法。</p>
<p>${w('three', '三')}${w('year', '年')}后，${w('cloud', '云')}${w('peak', '峰')}举办${w('disciple', '弟子')}${w('compete', '比试')}${w('meeting', '大会')}。陈风的${w('actual', '实际')}${w('strength', '实力')}已经${w('reach', '达到')}筑基中期，${w('far', '远')}超${w('ordinary', '普通')}根骨的${w('limit', '限制')}。</p>
<p>${w('compete', '比试')}${w('meeting', '大会')}上，陈风${w('one', '一')}${w('pass', '关')}接一${w('pass', '关')}，最终${w('face', '面对')}李天。李天${w('although', '虽然')}${w('have', '有')}${w('excellent', '优秀')}根骨，但${w('practice', '修炼')}${w('attitude', '态度')}不${w('serious', '认真')}，${w('actual', '实际')}${w('strength', '实力')}${w('instead', '反而')}${w('inferior', '不如')}陈风。</p>
<p>最终，陈风${w('defeat', '击败')}李天，${w('obtain', '获得')}${w('compete', '比试')}${w('meeting', '大会')}第一${w('name', '名')}。他的${w('performance', '表现')}${w('attract', '吸引')}${w('peak', '峰')}${w('lord', '主')}${w('attention', '注意')}，被${w('promote', '提拔')}为内门${w('disciple', '弟子')}。</p>
<p>${w('peak', '峰')}${w('lord', '主')}对他说："你的${w('success', '成功')}${w('prove', '证明')}，天赋只是修炼路的${w('start', '起点')}，${w('true', '真正')}${w('determine', '决定')}${w('success', '成功')}的，是${w('firm', '坚定')}${w('will', '意志')}和${w('continuous', '不断')}${w('effort', '努力')}。"</p>
<p>陈风${w('stand', '站')}在${w('peak', '峰')}${w('top', '顶')}，眺望${w('distant', '远方')}的${w('sky', '天空')}。他知道，修炼路${w('endless', '无尽')}，但只要${w('heart', '心')}不${w('change', '变')}，终有一天能${w('reach', '到达')}${w('immortal', '仙')}境，${w('realize', '实现')}心中的${w('dream', '梦想')}。</p>`;

// 将内容转换为复习版
function convertToReview(content) {
  return content.replace(/<span class="w">([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g, (match, word, chinese) => {
    return r(word, chinese);
  });
}

// 统计词汇数量
function countVocab(content) {
  const matches = content.match(/<span class="w">/g);
  return matches ? matches.length : 0;
}

// 生成所有故事
function generateAllStories() {
  const stories = [
    { id: '01', title: '重生之商业女王', subtitle: '命运重启', content: story1Content },
    { id: '02', title: '霸总的契约新娘', subtitle: '意外邂逅', content: story2Content },
    { id: '03', title: '校园里的秘密', subtitle: '青葱岁月', content: story3Content },
    { id: '04', title: '职场逆袭记', subtitle: '初入职场', content: story4Content },
    { id: '05', title: '修仙之路', subtitle: '踏入仙门', content: story5Content }
  ];

  console.log('\n========== 开始生成故事 ==========\n');

  stories.forEach(story => {
    const vocabCount = countVocab(story.content);
    console.log(`生成故事 ${story.id}: ${story.title}`);
    console.log(`  词汇数量: ${vocabCount} 个`);

    // 生成学习版
    const learnHTML = generateLearnHTML(story.title, story.subtitle, story.content, vocabCount);
    const learnFile = path.join(resultDir, `${story.id}_${story.title}_${story.subtitle}_学习版.html`);
    fs.writeFileSync(learnFile, learnHTML, 'utf-8');
    console.log(`  ✓ 学习版已生成`);

    // 生成复习版
    const reviewContent = convertToReview(story.content);
    const reviewHTML = generateReviewHTML(story.title, story.subtitle, reviewContent, vocabCount);
    const reviewFile = path.join(resultDir, `${story.id}_${story.title}_${story.subtitle}_复习版.html`);
    fs.writeFileSync(reviewFile, reviewHTML, 'utf-8');
    console.log(`  ✓ 复习版已生成\n`);
  });

  console.log('========== 所有故事生成完成 ==========\n');
  console.log(`文件保存位置: ${resultDir}\n`);
}

generateAllStories();