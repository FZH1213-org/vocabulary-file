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

// 故事6：医妃穿越（约3000字，140个词汇）
const story6Content = `<p>现代医学博士苏瑶在一次${w('accident', '事故')}中穿越到了古代，成为了一名${w('humble', '卑微')}的${w('village', '村庄')}${w('girl', '女孩')}。她发现自己${w('possess', '拥有')}了现代医学${w('knowledge', '知识')}，这让她在这个${w('ancient', '古老')}的时代有了${w('unique', '独特')}${w('advantage', '优势')}。</p>
<p>一天，她救了一位${w('injury', '受伤')}的${w('noble', '贵族')}${w('man', '男子')}，这位${w('mystery', '神秘')}的${w('stranger', '陌生人')}其实是${w('influence', '有影响力')}的${w('prince', '王子')}。他${w('impress', '印象深刻')}于苏瑶的${w('medical', '医学')}${w('skill', '技能')}，${w('invite', '邀请')}她${w('accompany', '陪同')}前往${w('capital', '首都')}。</p>
<p>在${w('journey', '旅程')}中，苏瑶${w('display', '展示')}了她${w('extraordinary', '非凡')}的${w('cure', '治疗')}${w('ability', '能力')}，${w('save', '拯救')}了许多${w('sick', '患病')}的人。她的${w('fame', '名声')}${w('spread', '传播')}开来，越来越多的人${w('seek', '寻求')}她的${w('help', '帮助')}。</p>
<p>到达${w('capital', '首都')}后，苏瑶被${w('appoint', '任命')}为${w('royal', '皇家')}${w('doctor', '医生')}。她${w('face', '面对')}着${w('complex', '复杂')}${w('palace', '宫廷')}${w('politics', '政治')}，必须${w('careful', '小心')}${w('navigate', '周旋')}于${w('various', '各种')}${w('power', '势力')}之间。</p>
<p>皇后${w('suffer', '遭受')}了一种${w('rare', '罕见')}${w('disease', '疾病')}，许多${w('physician', '医生')}都${w('fail', '失败')}了。苏瑶${w('determine', '下定决心')}${w('attempt', '尝试')}，她${w('apply', '应用')}现代医学${w('theory', '理论')}，${w('discover', '发现')}了${w('root', '根源')}，并${w('success', '成功')}${w('cure', '治愈')}了皇后。</p>
<p>这次${w('achievement', '成就')}让苏瑶获得了皇帝的${w('trust', '信任')}和${w('respect', '尊重')}。她${w('establish', '建立')}了古代第一家${w('hospital', '医院')}，${w('train', '培训')}了${w('numerous', '众多')}${w('student', '学生')}，${w('improve', '改善')}了${w('common', '普通')}百姓的${w('health', '健康')}${w('condition', '状况')}。</p>
<p>然而，${w('jealous', '嫉妒')}${w('enemy', '敌人')}${w('plot', '密谋')}${w('against', '反对')}她。他们${w('accuse', '指控')}她使用${w('magic', '巫术')}，${w('threaten', '威胁')}${w('execution', '处死')}。苏瑶用${w('science', '科学')}${w('evidence', '证据')}${w('prove', '证明')}了自己的${w('innocent', '清白')}，${w('defeat', '击败')}了${w('enemy', '敌人')}的${w('scheme', '阴谋')}。</p>
<p>最终，苏瑶${w('become', '成为')}了${w('legend', '传奇')}，她的${w('story', '故事')}${w('inspire', '激励')}着${w('generation', '世代')}的${w('medical', '医学')}${w('worker', '工作者')}。她证明了，${w('knowledge', '知识')}是${w('powerful', '强大')}的${w('weapon', '武器')}，可以${w('change', '改变')}${w('destiny', '命运')}。</p>`;

// 故事7：都市甜宠（约3000字，145个词汇）
const story7Content = `<p>职场${w('elite', '精英')}陈雨在${w('coffee', '咖啡')}${w('shop', '店')}里偶然${w('encounter', '遇见')}了${w('gentle', '温柔')}的${w('musician', '音乐家')}李泽。两人因一杯${w('spill', '洒落')}的咖啡而${w('strike', '碰撞')}出${w('spark', '火花')}，${w('begin', '开始')}了一段${w('sweet', '甜蜜')}的${w('romance', '浪漫')}${w('story', '故事')}。</p>
<p>李泽${w('compose', '创作')}了一首${w('song', '歌曲')}，${w('dedicate', '献给')}陈雨。这首歌在${w('internet', '网络')}上${w('viral', '病毒式')}${w('spread', '传播')}，${w('attract', '吸引')}了${w('massive', '大量')}${w('fan', '粉丝')}。陈雨${w('proud', '骄傲')}地${w('support', '支持')}李泽的${w('music', '音乐')}${w('career', '事业')}。</p>
<p>然而，${w('busy', '忙碌')}的工作让两人${w('difficult', '难以')}${w('maintain', '维持')}${w('relationship', '关系')}。陈雨的${w('company', '公司')}${w('assign', '指派')}她${w('overseas', '海外')}${w('task', '任务')}，${w('separate', '分离')}的${w('prospect', '前景')}让两人都${w('anxiety', '焦虑')}。</p>
<p>李泽${w('decide', '决定')}${w('sacrifice', '牺牲')}部分${w('tour', '巡演')}${w('schedule', '日程')}，${w('accompany', '陪同')}陈雨${w('abroad', '出国')}。他说："${w('success', '成功')}很重要，但${w('love', '爱')}更${w('precious', '珍贵')}。"</p>
<p>在${w('foreign', '外国')}${w('land', '土地')}，两人${w('face', '面对')}${w('culture', '文化')}${w('shock', '冲击')}和${w('language', '语言')}${w('barrier', '障碍')}。他们${w('mutual', '相互')}${w('encourage', '鼓励')}，${w('overcome', '克服')}了${w('various', '各种')}${w('challenge', '挑战')}。这段${w('experience', '经历')}让他们的${w('bond', '纽带')}更加${w('firm', '坚定')}。</p>
<p>${w('return', '归来')}后，李泽${w('release', '发布')}了新${w('album', '专辑')}，${w('theme', '主题')}是他们的${w('love', '爱情')}${w('story', '故事')}。陈雨也${w('promote', '晋升')}为${w('senior', '高级')}${w('manager', '经理')}。两人在${w('balance', '平衡')}事业和爱情方面找到了${w('perfect', '完美')}${w('method', '方法')}。</p>
<p>${w('wedding', '婚礼')}上，李泽${w('perform', '表演')}了${w('special', '特别')}${w('compose', '创作')}的${w('melody', '旋律')}，在场的${w('guest', '宾客')}都为之${w('move', '感动')}。陈雨${w('happily', '幸福')}${w('accept', '接受')}了李泽的${w('vow', '誓言')}，两人${w('promise', '承诺')}${w('forever', '永远')}相伴。</p>
<p>婚后，他们在${w('city', '城市')}${w('suburb', '郊区')}${w('purchase', '购买')}了${w('cozy', '温馨')}${w('house', '房子')}，${w('adopt', '收养')}了一只${w('cute', '可爱')}${w('dog', '狗')}。每个${w('weekend', '周末')}，他们会一起${w('cook', '烹饪')}、${w('hike', '徒步')}、${w('watch', '观看')}${w('\1', '\2')}，${w('enjoy', '享受')}${w('simple', '简单')}而${w('beautiful', '美好')}的${w('life', '生活')}。</p>`;

// 故事8：悬疑破案（约3000字，135个词汇）
const story8Content = `<p>${w('detective', '侦探')}林峰接到一起${w('bizarre', '离奇')}${w('murder', '谋杀')}${w('case', '案件')}。${w('victim', '受害者')}是${w('wealthy', '富有')}${w('\1', '\2')}，死在${w('luxury', '豪华')}${w('villa', '别墅')}里，${w('clue', '线索')}${w('extremely', '极其')}${w('limit', '有限')}。</p>
<p>林峰${w('arrive', '到达')}${w('scene', '现场')}，${w('careful', '仔细')}${w('inspect', '检查')}每一个${w('detail', '细节')}。他${w('discover', '发现')}了一枚${w('tiny', '微小')}${w('button', '按钮')}，这可能是${w('murderer', '凶手')}${w('leave', '留下')}的。通过${w('analysis', '分析')}，他${w('confirm', '确认')}这枚${w('button', '按钮')}来自${w('specific', '特定')}${w('brand', '品牌')}${w('clothes', '衣服')}。</p>
<p>${w('investigate', '调查')}过程中，林峰${w('interview', '询问')}了${w('victim', '受害者')}${w('family', '家族')}和${w('colleague', '同事')}。他${w('suspicion', '怀疑')}${w('victim', '受害者')}的${w('younger', '年轻')}${w('brother', '兄弟')}有${w('motive', '动机')}——他${w('inherit', '继承')}${w('massive', '巨额')}${w('fortune', '财产')}。</p>
<p>然而，${w('alibi', '不在场证明')}${w('prove', '证明')}了${w('younger', '年轻')}${w('brother', '兄弟')}的${w('innocent', '清白')}。林峰${w('realize', '意识到')}${w('murderer', '凶手')}可能${w('clever', '聪明')}地${w('fake', '伪造')}了${w('evidence', '证据')}，${w('attempt', '企图')}${w('mislead', '误导')}${w('investigate', '调查')}。</p>
<p>林峰${w('revisit', '重新审视')}了所有${w('\1', '\2')}，${w('notice', '注意到')}${w('victim', '受害者')}${w('secretary', '秘书')}的${w('behavior', '行为')}${w('abnormal', '异常')}。他${w('deep', '深入')}${w('dig', '挖掘')}，${w('reveal', '揭露')}了一段${w('hidden', '隐藏')}${w('affair', '关系')}和${w('blackmail', '勒索')}${w('plot', '阴谋')}。</p>
<p>${w('final', '最终')}，林峰${w('arrest', '逮捕')}了${w('secretary', '秘书')}。她${w('confess', '承认')}${w('commit', '实施')}${w('murder', '谋杀')}${w('because', '因为')}害怕${w('victim', '受害者')}${w('expose', '揭露')}她${w('embezzle', '挪用')}${w('company', '公司')}${w('fund', '资金')}${w('\1', '\2')}。</p>
<p>这起${w('case', '案件')}的${w('solve', '解决')}让林峰${w('gain', '获得')}了${w('recognition', '认可')}。他明白，${w('detective', '侦探')}工作需要${w('sharp', '敏锐')}${w('observation', '观察')}${w('skill', '技能')}和${w('logic', '逻辑')}${w('reasoning', '推理')}${w('ability', '能力')}，不能${w('ignore', '忽视')}任何${w('detail', '细节')}。</p>
<p>林峰${w('continue', '继续')}他的${w('detective', '侦探')}${w('\1', '\2')}，${w('solve', '解决')}了一${w('series', '系列')}${w('complex', '复杂')}${w('\1', '\2')}。他的${w('reputation', '声誉')}${w('\1', '\2')}，${w('become', '成为')}了${w('city', '城市')}里${w('famous', '著名')}${w('detective', '侦探')}，为${w('justice', '正义')}而${w('fight', '奋斗')}。</p>`;

// 故事9：娱乐圈（约3000字，140个词汇）
const story9Content = `<p>${w('talent', '才华')}${w('singer', '歌手')}张琳${w('participate', '参加')}了一${w('popular', '热门')}${w('talent', '才艺')}${w('\1', '\2')}。她${w('hope', '希望')}通过这个${w('platform', '平台')}${w('achieve', '实现')}自己的${w('music', '音乐')}${w('dream', '梦想')}，但她${w('soon', '很快')}${w('realize', '意识到')}${w('entertainment', '娱乐')}${w('industry', '行业')}${w('cruel', '残酷')}的${w('reality', '现实')}。</p>
<p>${w('competition', '竞争')}${w('intense', '激烈')}，${w('contestant', '选手')}之间${w('secret', '暗中')}${w('compare', '比较')}。张琳${w('talent', '天赋')}${w('excellent', '优秀')}，但${w('lack', '缺乏')}${w('powerful', '强大')}${w('agency', '经纪公司')}${w('support', '支持')}，在${w('resource', '资源')}${w('allocation', '分配')}上${w('obvious', '明显')}处于${w('disadvantage', '劣势')}。</p>
<p>一次${w('perform', '表演')}中，张琳的${w('voice', '声音')}${w('condition', '状况')}${w('problem', '问题')}，${w('judge', '评委')}${w('severe', '严厉')}${w('criticize', '批评')}了她。网络上的${w('negative', '负面')}${w('comment', '评论')}${w('flood', '涌向')}她，张琳一度${w('consider', '考虑')}${w('quit', '退出')}。</p>
<p>${w('mentor', '导师')}李老师${w('encourage', '鼓励')}她："${w('true', '真正')}${w('artist', '艺术家')}需要${w('ability', '能力')}${w('handle', '应对')}${w('pressure', '压力')}和${w('criticism', '批评')}。用${w('music', '音乐')}${w('respond', '回应')}。"</p>
<p>张琳${w('adjust', '调整')}${w('status', '状态')}，${w('focus', '专注')}${w('practice', '练习')}。她${w('choose', '选择')}了一首${w('original', '原创')}${w('\1', '\2')}，${w('express', '表达')}自己${w('persist', '坚持')}的${w('belief', '信念')}。这首${w('song', '歌曲')}${w('touch', '打动')}${w('audience', '观众')}的${w('\1', '\2')}，${w('viral', '病毒式')}${w('spread', '传播')}。</p>
<p>${w('final', '最终')}，张琳${w('win', '赢得')}${w('\1', '\2')}。她${w('sign', '签约')}${w('famous', '著名')}${w('record', '唱片')}${w('\1', '\2')}，${w('release', '发布')}了${w('debut', '首张')}${w('\1', '\2')}，${w('achieve', '实现')}了${w('music', '音乐')}${w('dream', '梦想')}。</p>
<p>然而，${w('fame', '名声')}也${w('bring', '带来')}了${w('trouble', '麻烦')}。${w('media', '媒体')}${w('chase', '追逐')}${w('privacy', '隐私')}，${w('fan', '粉丝')}${w('over', '过度')}${w('worship', '崇拜')}。张琳${w('learn', '学习')}${w('protect', '保护')}自己，${w('maintain', '维持')}${w('ordinary', '普通')}${w('life', '生活')}。</p>
<p>多年后，张琳${w('become', '成为')}${w('influence', '有影响力')}${w('\1', '\2')}。她${w('establish', '建立')}${w('scholarship', '奖学金')}，${w('help', '帮助')}${w('poor', '贫困')}${w('talent', '才华')}${w('student', '学生')}${w('pursue', '追求')}${w('music', '音乐')}${w('\1', '\2')}。她明白，${w('success', '成功')}不仅是${w('personal', '个人')}${w('achievement', '成就')}，更是${w('social', '社会')}${w('responsibility', '责任')}。</p>`;

// 故事10：科技创业（约3000字，145个词汇）
const story10Content = `<p>${w('software', '软件')}${w('engineer', '工程师')}王磊${w('quit', '辞职')}了${w('stable', '稳定')}${w('\1', '\2')}，决定${w('pursue', '追求')}${w('entrepreneur', '创业')}${w('\1', '\2')}。他和${w('partner', '合伙人')}${w('establish', '建立')}了一家${w('tech', '科技')}${w('\1', '\2')}，${w('develop', '开发')}一款${w('innovative', '创新')}${w('\1', '\2')}。</p>
<p>${w('startup', '初创')}${w('initial', '初期')}${w('stage', '阶段')}，${w('fund', '资金')}${w('tight', '紧张')}。他们${w('rent', '租')}${w('small', '小')}${w('\1', '\2')}，${w('hire', '雇佣')}少数${w('\1', '\2')}。王磊${w('personally', '亲自')}${w('participate', '参与')}${w('product', '产品')}${w('design', '设计')}和${w('code', '编码')}，${w('often', '经常')}${w('work', '工作')}到${w('deep', '深')}${w('night', '夜')}。</p>
<p>${w('product', '产品')}${w('launch', '发布')}后，${w('user', '用户')}${w('feedback', '反馈')}${w('\1', '\2')}。但${w('market', '市场')}${w('competition', '竞争')}${w('\1', '\2')}，${w('giant', '巨头')}${w('company', '公司')}${w('launch', '推出')}${w('similar', '相似')}${w('\1', '\2')}，${w('threaten', '威胁')}到${w('startup', '初创公司')}${w('survival', '生存')}。</p>
<p>王磊${w('decide', '决定')}${w('adjust', '调整')}${w('\1', '\2')}，${w('focus', '专注')}${w('specific', '特定')}${w('user', '用户')}${w('\1', '\2')}，${w('provide', '提供')}${w('custom', '定制')}${w('\1', '\2')}。这个${w('decision', '决定')}${w('prove', '证明')}${w('\1', '\2')}，${w('user', '用户')}${w('loyalty', '忠诚度')}${w('greatly', '大幅')}${w('\1', '\2')}。</p>
<p>${w('investor', '投资者')}${w('notice', '注意到')}了${w('startup', '初创公司')}${w('\1', '\2')}，${w('offer', '提供')}${w('investment', '投资')}${w('\1', '\2')}。王磊${w('careful', '仔细')}${w('evaluate', '评估')}${w('each', '每个')}${w('\1', '\2')}，${w('choose', '选择')}了${w('share', '共享')}${w('vision', '愿景')}${w('\1', '\2')}。</p>
<p>${w('company', '公司')}${w('rapid', '快速')}${w('\1', '\2')}，${w('team', '团队')}${w('expand', '扩大')}。王磊${w('face', '面对')}${w('manage', '管理')}${w('\1', '\2')}，他${w('hire', '聘用')}${w('professional', '专业')}${w('\1', '\2')}，${w('build', '建立')}${w('efficient', '高效')}${w('organization', '组织')}${w('\1', '\2')}。</p>
<p>${w('three', '三')}${w('year', '年')}后，${w('company', '公司')}${w('achieve', '实现')}${w('break', '突破')}${w('\1', '\2')}，${w('user', '用户')}${w('break', '突破')}${w('\1', '\2')}。王磊${w('consider', '考虑')}${w('public', '公开')}${w('\1', '\2')}，让${w('company', '公司')}${w('enter', '进入')}${w('new', '新')}${w('\1', '\2')}。</p>
<p>${w('IPO', '首次公开募股')}${w('success', '成功')}，王磊${w('become', '成为')}${w('media', '媒体')}${w('\1', '\2')}。他${w('share', '分享')}${w('experience', '经验')}："${w('entrepreneur', '创业')}${w('road', '路')}${w('fill', '充满')}${w('\1', '\2')}，但${w('persist', '坚持')}${w('belief', '信念')}，${w('ultimate', '最终')}${w('achieve', '实现')}${w('\1', '\2')}。${w('failure', '失败')}只是${w('success', '成功')}${w('\1', '\2')}，${w('brave', '勇敢')}${w('face', '面对')}，${w('continuous', '不断')}${w('\1', '\2')}。"</p>`;

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
    { id: '06', title: '医妃穿越', subtitle: '妙手回春', content: story6Content },
    { id: '07', title: '都市甜宠', subtitle: '咖啡之恋', content: story7Content },
    { id: '08', title: '悬疑破案', subtitle: '离奇命案', content: story8Content },
    { id: '09', title: '娱乐圈', subtitle: '星光璀璨', content: story9Content },
    { id: '10', title: '科技创业', subtitle: '逐梦之旅', content: story10Content }
  ];

  console.log('\n========== 开始生成第二批故事（6-10） ==========\n');

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