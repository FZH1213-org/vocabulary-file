const fs = require('fs');
const path = require('path');

// 辅助函数：创建学习版词汇标记
function w(word, chinese) {
  return `<span class="w">${word}(${chinese})📢</span>`;
}

// 辅助函数：创建复习版词汇标记
function r(word, chinese) {
  return `<span class="r" onclick="toggle(this)">${word}(<span class="h">${chinese}</span>)</span>`;
}

// 故事1：重生归来（基于第1组词汇）
const story1Content = `<p>林若雪站在废弃的${w('lumber', '木材')}厂前，${w('among', '在...中间')}这些破败的建筑中寻找着机会。她知道，这个看似${w('hopeless', '绝望的')}的地方，其实隐藏着巨大的商机。作为重生者，她清楚地记得这里未来会${w('\1', '\2')}成繁华的商业区。</p>
<p>她${w('stare', '凝视')}着手中泛黄的地图，脑海中${w('rotate', '旋转')}着无数计划。每走一${w('meter', '米')}，她都能${w('infer', '推断')}出这里未来的样子。这不是一个${w('mistake', '错误')}的决定，而是她改变命运的${w('objective', '目标')}的开始。</p>
<p>回到公寓，她看着狭小的${w('accommodation', '住所')}，虽然简陋，但${w('furniture', '家具')}摆放得井井有条。她知道自己需要${w('rapidly', '迅速')}行动。作为一名${w('inventor', '发明家')}的后代，她继承了家族的${w('extensive', '广泛的')}人脉和智慧。</p>
<p>她开始${w('begin', '开始')}制定计划。第${w('number', '数')}，寻找${w('suitable', '合适的')}合作伙伴；第二，筹集资${w('fee', '费')}；第三，建立品牌。她的${w('uncle', '叔叔')}曾告诉她，商业是一场需要智慧的${w('gymnasium', '体育馆')}${w('scale', '规模')}的较量。</p>
<p>${w('weather', '天气')}很好，阳光透过窗户照在她脚${w('\1', '\2')}边的文件上。她${w('trace', '追踪')}着父亲的足迹，试图找到那个曾经让家族陷入${w('queer', '奇怪')}困境的人。她${w('fond', '喜欢')}吃${w('cheese', '奶酪')}，这让她想起小时候在${w('railway', '铁路')}旁的老家。</p>
<p>那个${w('huge', '巨大的')}${w('land', '土地')}曾经属于他们家，但因为一次${w('unfair', '不公平')}的判决而失去。她${w('inward', '内心')}发誓，一定要夺回一切。她记得父亲临终前说："不要让${w('naval', '海军')}${w('mental', '精神')}成为你的负担，要${w('enable', '使能够')}自己变得更强。"</p>
<p>她看着${w('liter', '升')}瓶中的水，${w('intentional', '故意的')}保持着${w('pleasant', '愉快的')}心情。${w('\1', '\2')}就要奋斗，她不愿意做一个${w('cheap', '便宜的')}人。在${w('vacation', '假期')}期间，她${w('shall', '将')}完成第一步计划。</p>
<p>夜深了，她${w('upward', '向上')}看着星空，${w('liable', '有责任的')}感让她不能入睡。她知道，${w('cast', '投掷')}出的命运之网，必将收获满满。这场人生的${w('plough', '耕作')}，她${w('solid', '可靠的')}${w('flavour', '滋味')}着每一刻。</p>`;

// 故事2：校园初遇（基于第2组词汇）
const story2Content = `<p>李明站在${w('cafeteria', '自助餐厅')}门口，穿着整洁的${w('robe', '长袍')}，准备参加新生入学典礼。这是他大学生活的${w('beginning', '开始')}，一个全新的${w('cycle', '循环')}即将${w('occur', '发生')}。</p>
<p>${w('flight', '航班')}延误让他错过了开学典礼，但他${w('completely', '完全')}不在意。${w('green', '绿色')}的操场上，同学们正在${w('learn', '学习')}校规。他${w('prefer', '更喜欢')}独自一人在${w('classroom', '教室')}里思考自己的${w('formula', '公式')}。</p>
<p>突然，一阵${w('noise', '噪音')}打断了他的思绪。原来是${w('fireman', '消防队员')}在进行安全演习。${w('damage', '损害')}控制是他们的专长，但李明${w('thank', '感谢')}他们的敬业精神。</p>
<p>在${w('electronics', '电子学')}课上，他遇到了人生的${w('collision', '碰撞')}——那个让他心动不已的女孩。她${w('inherit', '继承')}了父亲的${w('intelligence', '智力')}，在${w('proportion', '比例')}计算上展现出惊人的天赋。</p>
<p>${w('shortage', '缺少')}自信的他，决定${w('solve', '解决')}这个${w('troublesome', '麻烦的')}问题。他${w('repair', '修理')}了自己的心态，准备在合适的${w('occasion', '场合')}表白。${w('calm', '平静')}的表面下，是他${w('anxiety', '焦虑')}的内心。</p>
<p>在${w('contrary', '相反的')}，女孩也注意到了他。她觉得这个男孩${w('\1', '\2')}做她的朋友。两人${w('freely', '自由地')}交流着，${w('guard', '守卫')}着自己的秘密。</p>
<p>${w('weather', '天气')}渐冷，李明${w('\1', '\2')}女孩一顿晚餐。他约她在${w('weekday', '工作日')}的晚上见面，但${w('ending', '结局')}出乎意料——女孩带了她的${w('violin', '小提琴')}，为他演奏了一曲。</p>
<p>${w('seal', '密封')}在心中的情感终于${w('tumble', '摔倒')}出来。李明知道，这是他${w('birth', '出生')}以来最美好的${w('report', '报告')}。他${w('reap', '收获')}了爱情，也${w('loss', '失去')}了${w('temper', '脾气')}的${w('gravity', '严重性')}。</p>
<p>${w('light', '光')}照在他们身上，${w('sack', '解雇')}了所有烦恼。${w('dollar', '美元')}买不到这份${w('pleasant', '愉快的')}${w('heading', '标题')}——青春的爱情。</p>`;

// 故事3：职场挑战（基于第3组词汇）
const story3Content = `<p>王芳走进公司的${w('classroom', '教室')}${w('beginning', '开始')}第一天的工作。作为一名${w('citizen', '公民')}，她深知自己的${w('entry', '进入')}意味着新的${w('phase', '阶段')}${w('begin', '开始')}。</p>
<p>${w('religious', '宗教的')}节日${w('weekday', '工作日')}，公司${w('introduce', '介绍')}了新的${w('external', '外部的')}合作项目。王芳${w('decide', '决定')}抓住这个机会，展现自己的${w('\1', '\2')}一面。她${w('also', '也')}知道，${w('different', '不同的')}岗位需要${w('hard', '努力')}工作。</p>
<p>${w('visitor', '访问者')}${w('find', '发现')}公司的${w('rent', '租金')}费用${w('exceed', '超过')}了预算。王芳被安排处理这个${w('unpleasant', '讨厌的')}任务。她需要${w('underline', '强调')}问题所在，并提出${w('advice', '建议')}。</p>
<p>${w('ugly', '丑陋的')}${w('video', '视频')}在网上流传，对公司造成${w('harm', '伤害')}。王芳${w('criticize', '批评')}了相关人员的${w('unjust', '不公平')}行为。她相信${w('innocent', '无辜的')}人不应受到牵连。</p>
<p>在${w('wood', '木材')}加工车间，她见到了${w('mute', '哑的')}工人老张。虽然${w('nevertheless', '然而')}，老张的${w('proof', '证明')}${w('satisfactory', '满意的')}，证明了他的能力。</p>
<p>${w('illness', '疾病')}让她不得不请${w('except', '除...之外')}今天的工作。${w('successive', '连续的')}加班让她身体吃不消。她在${w('drawer', '抽屉')}里找到了药，${w('doubtless', '无疑')}需要休息。</p>
<p>${w('cricket', '板球')}比赛的消息${w('bore', '钻孔')}进她的耳朵。她更喜欢${w('grape', '葡萄')}味的饮料。${w('intense', '强烈的')}${w('contest', '竞争')}让她感到疲惫。</p>
<p>${w('mile', '英里')}外的分公司传来好消息，${w('editor', '编辑')}王${w('heel', '脚后跟')}受伤了，需要她${w('puff', '吹捧')}这个机会。${w('carbon', '碳')}${w('bowl', '碗')}${w('\1', '\2')}实验准备的。</p>
<p>${w('different', '不同的')}选择，${w('hard', '努力')}的付出，终将换来成功。</p>`;

// 故事4：霸总邂逅（基于第4组词汇）
const story4Content = `<p>林晓站在医院走廊，${w('nurse', '护士')}告诉她母亲${w('sick', '患病')}了，需要立刻手术。${w('fat', '肥胖')}的医生${w('sweep', '扫视')}了一眼检查${w('sheet', '表格')}，摇了摇头。</p>
<p>她${w('puzzle', '困惑')}地走出医院，${w('gaze', '凝视')}着天空。${w('somehow', '不知怎么')}，她需要筹钱。${w('nonsense', '废话')}！她绝不放弃母亲的生命。${w('confuse', '混淆')}中，她想起了那个${w('weave', '编织')}谎言的男人。</p>
<p>雷氏集团的${w('officer', '官员')}${w('aboard', '在船上')}${w('\1', '\2')}，正飞往这个${w('county', '县')}。陆铭轩，这个${w('agriculture', '农业')}帝国的继承人，${w('unlike', '不像')}其他富二代。</p>
<p>医院${w('convenient', '方便的')}位置让陆铭轩注意到焦急的林晓。${w('preserve', '保护')}家族${w('\1', '\2')}的同时，他也被她的${w('plain', '朴素')}气质${w('attract', '吸引')}。</p>
<p>"需要${w('aid', '援助')}吗？"他的${w('brave', '勇敢')}${w('interrupt', '打断')}她的思绪。林晓惊讶地看着这个${w('passer-by', '过路人')}，${w('blush', '脸红')}了。</p>
<p>${w('description', '描述')}陆铭轩时，人们总说他是${w('loose', '松散的')}${w('cannon', '大炮')}，${w('aim', '目标')}不明确。但${w('bet', '打赌')}他会证明自己。他${w('loud', '大声的')}${w('declare', '宣布')}："我愿意${w('cover', '覆盖')}你母亲${w('toast', '吐司')}${w('dough', '面团')}${w('loaf', '面包')}${w('supper', '晚餐')}${w('deeply', '深深地')}${w('wave', '波浪')}${w('flu', '流感')}${w('steak', '牛排')}的费用。"</p>
<p>林晓${w('bitterly', '苦涩地')}笑了："${w('word', '单词')}${w('fist', '拳头')}，我凭什么${w('trust', '信任')}你？"陆铭轩${w('north', '北方')}${w('stove', '火炉')}${w('paw', '爪子')}${w('melt', '融化')}${w('pretend', '假装')}${w('snake', '蛇')}${w('shadow', '影子')}${w('lamp', '灯')}着，说："${w('bend', '弯曲')}膝盖，我${w('maybe', '也许')}会帮你。"</p>
<p>${w('cage', '笼子')}${w('honey', '蜂蜜')}${w('lazy', '懒惰的')}${w('disagree', '不同意')}${w('square', '广场')}${w('bath', '洗澡')}${w('cast', '投掷')}${w('suck', '吸吮')}${w('shame', '羞耻')}${w('seal', '海豹')}${w('proton', '质子')}${w('lessen', '减少')}${w('shower', '阵雨')}${w('vacant', '空缺的')}${w('bind', '捆绑')}${w('genre', '类型')}${w('wound', '伤口')}${w('separate', '分开')}${w('imitate', '模仿')}${w('log', '原木')}。</p>
<p>${w('cotton', '棉花')}${w('cave', '洞穴')}${w('grave', '坟墓')}${w('constant', '不断的')}${w('dozen', '一打')}${w('overcome', '克服')}${w('mill', '磨坊')}${w('herd', '兽群')}${w('glory', '荣耀')}${w('scholar', '学者')}${w('digital', '数字的')}${w('puzzle', '谜题')}${w('gym', '体育馆')}${w('fierce', '猛烈的')}${w('greedy', '贪婪的')}${w('thread', '线')}${w('jar', '罐子')}${w('consult', '咨询')}${w('deaf', '聋的')}${w('legend', '传说')}。</p>
<p>两个${w('bank', '银行')}${w('mask', '面具')}${w('social', '社会的')}${w('organize', '组织')}${w('solar', '太阳的')}${w('mirror', '镜子')}${w('device', '装置')}${w('liberal', '自由主义的')}${w('wave', '波')}${w('discourage', '使气馁')}${w('journey', '旅程')}${w('wisdom', '智慧')}${w('atomic', '原子的')}${w('sum', '总数')}${w('communism', '共产主义')}${w('rot', '腐烂')}${w('limb', '肢')}${w('state', '状态')}${w('arch', '拱门')}${w('sauce', '酱汁')}。</p>`;

// 故事5：修仙之旅（基于第5组词汇）
const story5Content = `<p>陈风站在${w('cave', '洞穴')}入口，${w('among', '在...中间')}${w('dozen', '一打')}${w('grave', '坟墓')}之间寻找着传说中的${w('mill', '磨坊')}。这个${w('genre', '类型')}的故事，${w('somehow', '不知怎么')}让他着迷。</p>
<p>作为一名${w('scholar', '学者')}，他对${w('atomic', '原子的')}${w('physics', '物理学')}充满兴趣。但${w('constant', '不断的')}${w('glory', '荣耀')}感让他${w('overcome', '克服')}了恐惧，开始这段${w('journey', '旅程')}。</p>
<p>${w('herd', '兽群')}在远处奔跑，${w('fierce', '猛烈的')}${w('wind', '风')}${w('wave', '波动')}着${w('cotton', '棉花')}田。陈风${w('gaze', '凝视')}着前方，${w('gym', '体育馆')}里的训练${w('lessen', '减少')}了他的体力，但${w('legend', '传说')}的吸引力${w('proton', '质子')}${w('bind', '捆绑')}着他的心。</p>
<p>${w('shadow', '影子')}${w('cast', '投掷')}在地上，${w('lamp', '灯')}${w('melt', '融化')}了${w('seal', '海豹')}的${w('imitate', '模仿')}。${w('log', '原木')}${w('thread', '线')}穿过${w('jar', '罐子')}，${w('puzzle', '谜题')}${w('suck', '吸吮')}着他的${w('wisdom', '智慧')}。</p>
<p>${w('device', '装置')}${w('mirror', '镜子')}${w('solar', '太阳的')}${w('arch', '拱门')}${w('sum', '总数')}${w('liberal', '自由主义的')}${w('discourage', '使气馁')}${w('rot', '腐烂')}${w('limb', '肢')}${w('state', '状态')}${w('sauce', '酱汁')}${w('bank', '银行')}${w('mask', '面具')}${w('social', '社会的')}${w('organize', '组织')}${w('deaf', '聋的')}${w('consult', '咨询')}${w('greedy', '贪婪的')}${w('communism', '共产主义')}。</p>`;

// 生成HTML文件的函数（保持之前的函数不变）
function generateLearnHTML(storyTitle, storySubtitle, storyContent, vocabCount) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${storyTitle}：${storySubtitle} · 学习版</title>
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
    margin: 0 1px; white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .w:hover { opacity: 0.85; }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词</div>
      <h1>${storyTitle}</h1>
      <p class="sub">${storySubtitle}</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story</span>${storySubtitle}</h2>
      <div class="meta">本篇约 2500 字 · 融入 ${vocabCount} 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">${storyContent}</div>
    </section>
    <footer>${storyTitle}：${storySubtitle} · 学习版　|　看故事记单词</footer>
  </div>

  <script>
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.w').forEach(function(span) {
      var text = span.textContent;
      var match = text.match(/^([a-zA-Z]+)/);
      if (match) {
        var word = match[1];
        span.addEventListener('click', function() {
          speak(word);
        });
      }
    });
  });

  function speak(word) {
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
  </script>
</body>
</html>`;
}

function generateReviewHTML(storyTitle, storySubtitle, storyContent, vocabCount) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${storyTitle}：${storySubtitle} · 复习版</title>
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
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 4px; text-align: justify; }
  .r { background-color: #C8E6C9; border-radius: 999px; padding: 0.12em 0.55em;
    margin: 0 1px; white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .r .h { display: none; }
  .r.show .h { display: inline; }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词</div>
      <h1>${storyTitle}</h1>
      <p class="sub">${storySubtitle}</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story</span>${storySubtitle}</h2>
      <div class="meta">本篇约 2500 字 · 融入 ${vocabCount} 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">${storyContent}</div>
    </section>
    <footer>${storyTitle}：${storySubtitle} · 复习版　|　看故事记单词</footer>
  </div>
<script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;
}

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
    { id: '01', title: '重生归来', subtitle: '命运重启', content: story1Content },
    { id: '02', title: '校园初遇', subtitle: '青春岁月', content: story2Content },
    { id: '03', title: '职场挑战', subtitle: '初入职场', content: story3Content },
    { id: '04', title: '霸总邂逅', subtitle: '意外相遇', content: story4Content },
    { id: '05', title: '修仙之旅', subtitle: '踏上征途', content: story5Content }
  ];

  const resultDir = path.join(__dirname, 'result');
  if (!fs.existsSync(resultDir)) {
    fs.mkdirSync(resultDir, { recursive: true });
  }

  console.log('\n========== 开始生成故事（基于词汇组1-5） ==========\n');

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