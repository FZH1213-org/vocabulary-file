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

// 从释义中提取简洁中文（取第一个核心释义）
function extractMeaning(meaning) {
  // 去除词性标记
  let chinese = meaning
    .replace(/[a-z]+\.\s*/gi, '')  // 去除词性标记如 n. v. adj. 等
    .replace(/\(.*?\)/g, '')       // 去除括号内容
    .replace(/\[.*?\]/g, '')       // 去除方括号内容
    .replace(/\//g, ' ')           // 斜杠替换为空格
    .replace(/[\.·;；]/g, ' ')     // 特殊符号替换为空格
    .trim();

  // 只取第一个释义（用空格、逗号分隔的第一个）
  const parts = chinese.split(/[，,\s]+/);
  chinese = parts[0] || '';

  // 如果太短，尝试取原释义的前几个中文字符
  if (chinese.length < 2) {
    const fallback = meaning.replace(/[a-zA-Z\(\)\/\.\[\]]/g, '').trim();
    const match = fallback.match(/[一-龥]+/);
    if (match) chinese = match[0].substring(0, 4);
  }

  // 限制长度
  if (chinese.length > 6) {
    chinese = chinese.substring(0, 6);
  }

  return chinese.trim();
}

// 词汇分类系统 - 根据释义关键词分类
function categorizeVocabulary(vocab) {
  const categories = {
    '商业职场': {
      keywords: ['商业', '企业', '公司', '市场', '投资', '利润', '资产', '竞争', '合作', '管理', '职位', '收入', '预算', '计划', '目标', '战略', '谈判', '合同', '交易', '评估', '分析', '项目', '发展', '增长', '成功', '失败', '风险', '机会'],
      words: []
    },
    '情感心理': {
      keywords: ['感情', '情感', '爱', '恨', '喜欢', '厌恶', '快乐', '悲伤', '愤怒', '恐惧', '焦虑', '平静', '激动', '感动', '浪漫', '温柔', '热情', '冷漠', '关心', '体贴', '信任', '怀疑', '希望', '失望', '期待', '遗憾', '幸福', '痛苦'],
      words: []
    },
    '人物特质': {
      keywords: ['性格', '品质', '特征', '勇敢', '胆怯', '聪明', '愚蠢', '勤奋', '懒惰', '诚实', '虚伪', '善良', '残忍', '谦虚', '骄傲', '坚强', '软弱', '果断', '犹豫', '自信', '自卑', '成熟', '幼稚', '稳重', '轻浮', '可靠', '正直'],
      words: []
    },
    '动作行为': {
      keywords: ['动作', '行为', '走', '跑', '站', '坐', '看', '听', '说', '写', '读', '想', '做', '拿', '放', '推', '拉', '打', '骂', '抱', '吻', '笑', '哭', '喊', '叫', '问', '答', '请求', '拒绝', '同意'],
      words: []
    },
    '环境场景': {
      keywords: ['环境', '场景', '地点', '位置', '房间', '建筑', '街道', '城市', '乡村', '山', '水', '天', '地', '天气', '时间', '白天', '夜晚', '早晨', '傍晚', '季节', '春夏秋冬', '光线', '声音', '气味'],
      words: []
    },
    '状态形容': {
      keywords: ['状态', '形容', '大', '小', '高', '低', '长', '短', '快', '慢', '好', '坏', '新', '旧', '美', '丑', '亮', '暗', '热', '冷', '湿', '干', '软', '硬', '厚', '薄', '深', '浅', '宽', '窄', '重', '轻', '贵', '贱', '富', '贫'],
      words: []
    },
    '社交人际': {
      keywords: ['社交', '人际', '朋友', '敌人', '同事', '上司', '下属', '家人', '亲戚', '邻居', '同学', '老师', '学生', '男女', '夫妻', '父子', '母子', '兄弟', '姐妹', '聚会', '会议', '沟通', '交流', '冲突', '和解', '团结', '分歧'],
      words: []
    },
    '校园学习': {
      keywords: ['学习', '校园', '学校', '大学', '课程', '考试', '成绩', '专业', '知识', '技能', '练习', '研究', '论文', '毕业', '入学', '教室', '图书馆', '宿舍', '食堂', '操场', '社团', '活动', '比赛', '奖项', '证书', '学历'],
      words: []
    }
  };

  // 对词汇进行分类
  vocab.forEach(v => {
    const meaning = v.meaning.toLowerCase();
    let matched = false;

    for (const [category, data] of Object.entries(categories)) {
      for (const keyword of data.keywords) {
        if (meaning.includes(keyword.toLowerCase()) || meaning.includes(keyword)) {
          data.words.push(v);
          matched = true;
          break;
        }
      }
      if (matched) break;
    }

    // 未分类的词汇放入通用池
    if (!matched) {
      if (!categories['通用']) categories['通用'] = { keywords: [], words: [] };
      categories['通用'].words.push(v);
    }
  });

  return categories;
}

// 故事配置 - 10个故事，每篇约1200字，50-60个词汇
const storyConfigs = [
  { theme: '霸总', title: '豪门契约：总裁的替身新娘', subtitle: '契约的开始', tags: '霸总 · 契约婚姻 · 豪门恩怨',
    requiredCategories: ['商业职场', '情感心理', '人物特质', '状态形容'] },
  { theme: '霸总', title: '豪门契约：总裁的替身新娘', subtitle: '总裁的试探', tags: '霸总 · 契约婚姻 · 豪门恩怨',
    requiredCategories: ['商业职场', '情感心理', '人物特质', '动作行为'] },
  { theme: '大女主', title: '重生之商业女王', subtitle: '重生归来', tags: '重生 · 商战 · 大女主',
    requiredCategories: ['商业职场', '人物特质', '状态形容', '情感心理'] },
  { theme: '大女主', title: '重生之商业女王', subtitle: '商业布局', tags: '重生 · 商战 · 大女主',
    requiredCategories: ['商业职场', '动作行为', '状态形容', '人物特质'] },
  { theme: '职场', title: '职场逆袭：从实习生到总监', subtitle: '新人入职', tags: '职场 · 励志 · 成长',
    requiredCategories: ['商业职场', '社交人际', '状态形容', '动作行为'] },
  { theme: '职场', title: '职场逆袭：从实习生到总监', subtitle: '遭遇霸凌', tags: '职场 · 励志 · 成长',
    requiredCategories: ['社交人际', '情感心理', '动作行为', '人物特质'] },
  { theme: '校园', title: '那年夏天，我们相遇', subtitle: '初见学长', tags: '校园 · 青春 · 恋爱',
    requiredCategories: ['校园学习', '情感心理', '社交人际', '环境场景'] },
  { theme: '校园', title: '那年夏天，我们相遇', subtitle: '社团邂逅', tags: '校园 · 青春 · 恋爱',
    requiredCategories: ['校园学习', '社交人际', '情感心理', '动作行为'] },
  { theme: '恋爱', title: '心动信号', subtitle: '咖啡店偶遇', tags: '恋爱 · 都市 · 甜宠',
    requiredCategories: ['情感心理', '社交人际', '环境场景', '状态形容'] },
  { theme: '恋爱', title: '心动信号', subtitle: '表白时刻', tags: '恋爱 · 都市 · 甜宠',
    requiredCategories: ['情感心理', '社交人际', '动作行为', '状态形容'] }
];

// 为每个故事选择合适的词汇
function selectWordsForStory(categories, config, vocabPool, count = 50) {
  const selectedWords = [];
  const usedWords = new Set();

  // 从每个要求的分类中选择词汇
  for (const categoryName of config.requiredCategories) {
    const category = categories[categoryName];
    if (category && category.words.length > 0) {
      // 从该分类中随机选择词汇
      const shuffled = [...category.words].sort(() => Math.random() - 0.5);
      const neededCount = Math.ceil(count / config.requiredCategories.length);
      const toSelect = shuffled.slice(0, Math.min(neededCount, shuffled.length));

      toSelect.forEach(v => {
        if (!usedWords.has(v.word) && selectedWords.length < count) {
          selectedWords.push(v);
          usedWords.add(v.word);
        }
      });
    }
  }

  // 如果词汇不足，从通用池补充
  if (selectedWords.length < count && categories['通用']) {
    const shuffled = [...categories['通用'].words].sort(() => Math.random() - 0.5);
    shuffled.forEach(v => {
      if (!usedWords.has(v.word) && selectedWords.length < count) {
        selectedWords.push(v);
        usedWords.add(v.word);
      }
    });
  }

  return selectedWords;
}

// 故事内容 - 已经根据语境嵌入词汇（这里需要手动编写符合语境的故事）
const storyContents = {
  '契约的开始': `夜幕降临，城市的高楼大厦在霓虹灯的映照下显得格外【spectacular/壮观的】。林若雪站在公司的落地窗前，望着脚下【magnificent/宏伟的】都市夜景，心中五味杂陈。家族企业近期遭遇了前所未有的【crisis/危机】，父亲突然住院，公司内部管理【chaotic/混乱的】，竞争对手趁机【attack/攻击】。

为了挽救家族事业，她不得不接受一个【critical/关键的】决定——与沈氏集团签订契约。沈墨尘是沈氏集团的总裁，商界公认的【prominent/杰出的】人物。他为人冷傲，从不轻易【accept/接受】任何女性。然而，正是这份契约，将两人的命运紧紧【bind/绑在一起】。

第一次见面，沈墨尘用【sharp/锐利的】目光打量着她，眼神中透着几分【suspicion/怀疑】。他问："你知道这份契约【involve/包含】什么吗？"林若雪点头，她清楚自己即将【bear/承担】的责任。契约规定，她需要在沈氏集团工作三年，期间必须【obey/服从】公司的安排。

而沈氏集团将注资【support/支持】她的家族企业。这看似公平，实则【contain/包含】着更多复杂的条件。签约当天，林若雪穿着简洁的职业装，神情【calm/冷静的】地走进会议室。沈墨尘坐在主位，面前摆放着【formal/正式的】合同文件。他递过文件，说："仔细【review/审查】，有任何问题可以提出。"

林若雪认真【analyze/分析】每一个条款，她的专业素养让她很快发现了几个【potential/潜在的】风险点。她提出【reasonable/合理的】意见，沈墨尘略微【hesitate/犹豫】，随即点头同意调整。这个过程让沈墨尘对林若雪产生了新的【respect/尊重】。

原本以为她只是一个需要帮助的【vulnerable/脆弱的】女子，没想到她具备如此【remarkable/非凡的】商业洞察力。契约签订后，林若雪正式进入沈氏集团【work/工作】。她被安排在战略发展部门，负责市场【research/研究】和项目策划。

尽管起点不算太高，但她【determined/坚决的】用自己的能力证明价值。工作的第一个月，林若雪每天【diligent/勤奋的】到深夜。她认真研究每一个项目【detail/细节】，分析市场趋势，【prepare/准备】详细报告。她的努力逐渐得到同事的【recognize/认可】。

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

她走出会议室，感受到一种前所未有的【confidence/信心】。这一刻，她知道自己已经踏上了正确的道路。未来的挑战依然存在，但她已经准备好迎接一切。`
};

// 继续编写其他故事内容...

// 生成学习版HTML
function generateLearningHTML(config, storyContent) {
  // 将故事中的词汇标记转换为HTML格式
  let processedContent = storyContent.replace(/【(\w+)\/([^\]]+)】/g, (match, word, meaning) => {
    return `<span class="w">${word}(${meaning})📢</span>`;
  });

  // 将内容分割成段落
  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');

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
      <h2><span class="no">Story01</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${storyContent.length} 字 · 融入 50 个重点词汇 · 点击📢可朗读发音</div>
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
function generateReviewHTML(config, storyContent) {
  // 将故事中的词汇标记转换为复习版HTML格式（中文默认隐藏）
  let processedContent = storyContent.replace(/【(\w+)\/([^\]]+)】/g, (match, word, meaning) => {
    return `<span class="r" onclick="toggle(this)">${word}(<span class="h">${meaning}</span>)</span>`;
  });

  // 将内容分割成段落
  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');

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
      <h2><span class="no">Story01</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${storyContent.length} 字 · 融入 50 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
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

// 主函数 - 仅生成前两个故事作为示例
function main() {
  const vocab = loadVocabulary();
  const categories = categorizeVocabulary(vocab);

  console.log('词汇分类统计:');
  for (const [name, data] of Object.entries(categories)) {
    console.log(`  ${name}: ${data.words.length} 个词汇`);
  }

  // 创建输出目录
  const outputDir = path.join(__dirname, '../result');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 生成故事（目前只生成了前2个）
  const generatedStories = ['契约的开始', '总裁的试探'];

  generatedStories.forEach((subtitle, index) => {
    const config = storyConfigs[index];
    const content = storyContents[subtitle];

    if (!content) {
      console.log(`警告：缺少 "${subtitle}" 的故事内容`);
      return;
    }

    const num = String(index + 1).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    console.log(`已生成：${config.title} - ${subtitle}`);
  });

  console.log('\n提示：目前只生成了前2个故事，需要继续编写其余8个故事的内容');
}

main();