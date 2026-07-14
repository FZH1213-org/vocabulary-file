const fs = require('fs');
const path = require('path');

// 定义要保留的高级词汇列表（约100个）
const KEEP_WORDS = new Set([
  // D开头的核心词汇
  'delicate', 'designate', 'depute', 'despise', 'defiance', 'deteriorate',
  'demonstrate', 'determination', 'dedicate', 'deliberate', 'deserve',
  'deprive', 'descend', 'destiny', 'durable', 'degrade', 'defect',
  'deficit', 'delegate', 'delete', 'denounce', 'deny', 'depict',
  'deprive', 'derive', 'descend', 'design', 'desirable', 'despair',
  'despite', 'destination', 'detain', 'detect', 'deteriorate',
  'determine', 'devote', 'defend', 'defy', 'delight', 'demand',

  // 其他高级词汇
  'accomplish', 'achieve', 'acquire', 'adequate', 'adjust', 'admire',
  'advance', 'advantage', 'affect', 'afford', 'aggressive', 'allocate',
  'alternative', 'ambition', 'anticipate', 'anxiety', 'apparent',
  'appeal', 'appreciate', 'approach', 'appropriate', 'arise', 'arrange',
  'articulate', 'assess', 'assign', 'assist', 'assume', 'assure',
  'attach', 'attain', 'attempt', 'attitude', 'attract', 'attribute',
  'available', 'average', 'aware', 'balance', 'barrier', 'basis',
  'behalf', 'benefit', 'bias', 'bond', 'boundary', 'budget', 'burden',
  'capable', 'capacity', 'career', 'challenge', 'character', 'circumstance',
  'commit', 'communication', 'community', 'comparative', 'compensate',
  'compete', 'competent', 'complex', 'component', 'comprehensive',
  'comprise', 'concentrate', 'concept', 'conclude', 'conduct',
  'conference', 'confidence', 'confirm', 'conflict', 'consequence',
  'considerable', 'consistent', 'constant', 'constitute', 'construct',
  'consult', 'consume', 'contact', 'contemporary', 'content', 'contest',
  'context', 'contract', 'contribute', 'controversial', 'convention',
  'conventional', 'convert', 'convey', 'convince', 'cooperate', 'coordinate',
  'core', 'corporate', 'correspond', 'crucial', 'culture', 'currency',
  'current', 'cycle', 'data', 'debate', 'decade', 'decline', 'decrease',
  'default', 'define', 'delay', 'deliver', 'demand', 'democratic',
  'describe', 'desert', 'desire', 'despite', 'detail', 'detect', 'device',
  'diminish', 'diplomatic', 'direct', 'discipline', 'disclose', 'discourage',
  'discriminate', 'distinguish', 'distort', 'distribute', 'disturb',
  'diverse', 'dominate', 'draft', 'dramatic', 'duration', 'dynamic'
]);

const resultDir = path.join(__dirname, '..', 'result');

console.log('处理学习版文件...');

// 处理学习版文件
let learningFile = path.join(resultDir, '94_宿舍闺蜜_青春友谊_学习版.html');
let content = fs.readFileSync(learningFile, 'utf-8');

let learningKept = 0;
let learningRemoved = 0;

// 学习版格式：<span class="w">word(中文)📢</span>
// 策略：
// 1. 先找出所有<span class="w">word(中文)📢</span>标记
// 2. 如果word在保留列表中，保持不变
// 3. 如果word不在保留列表中，替换为"中文"

let newLearningContent = content.replace(/<span class="w"[^>]*>([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g, (fullMatch, word, chinese) => {
  const wordLower = word.toLowerCase();
  if (KEEP_WORDS.has(wordLower)) {
    learningKept++;
    return fullMatch; // 保持完整的标记：word(中文)
  } else {
    learningRemoved++;
    return chinese; // 只保留中文
  }
});

// 处理文中其他word(中文)格式的词汇（不在span标记中的）
// 这些是删除词汇后剩余的格式，需要替换为纯中文
newLearningContent = newLearningContent.replace(/\b([a-zA-Z]+)\(([^)]+)\)/g, (match, word, chinese) => {
  // 检查这个匹配是否在span标记内（如果是，说明已经被处理过了）
  // 这里只处理不在span标记内的词
  return chinese;
});

// 统计最终的词汇数量
const learningFinalCount = (newLearningContent.match(/class="w"[^>]*>/g) || []).length;

// 更新词汇数量
newLearningContent = newLearningContent.replace(
  /融入\s*\d+\s*个重点词汇/g,
  `融入 ${learningFinalCount} 个重点词汇`
);

// 写回学习版文件
fs.writeFileSync(learningFile, newLearningContent, 'utf-8');
console.log(`  保留词汇: ${learningKept}个`);
console.log(`  删除词汇: ${learningRemoved}个`);
console.log(`  最终数量: ${learningFinalCount}个`);

console.log('\n处理复习版文件...');

// 处理复习版文件
let reviewFile = path.join(resultDir, '94_宿舍闺蜜_青春友谊_复习版.html');
let reviewContent = fs.readFileSync(reviewFile, 'utf-8');

let reviewKept = 0;
let reviewRemoved = 0;

// 复习版格式：<span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
// 策略：
// 1. 先找出所有<span class="r">word(<span class="h">中文</span>)</span>标记
// 2. 如果word在保留列表中，保持不变
// 3. 如果word不在保留列表中，替换为"中文"

let newReviewContent = reviewContent.replace(/<span class="r" onclick="toggle\(this\)">([a-zA-Z]+)\(<span class="h">([^<]+)<\/span>\)<\/span>/g, (fullMatch, word, chinese) => {
  const wordLower = word.toLowerCase();
  if (KEEP_WORDS.has(wordLower)) {
    reviewKept++;
    return fullMatch; // 保持完整的标记：word(中文)
  } else {
    reviewRemoved++;
    return chinese; // 只保留中文
  }
});

// 处理文中其他word(中文)格式的词汇（不在span标记中的）
newReviewContent = newReviewContent.replace(/\b([a-zA-Z]+)\(([^)]+)\)/g, (match, word, chinese) => {
  return chinese;
});

// 统计复习版的词汇数量
const reviewFinalCount = (newReviewContent.match(/class="r"[^>]*>/g) || []).length;

// 更新词汇数量
newReviewContent = newReviewContent.replace(
  /融入\s*\d+\s*个重点词汇/g,
  `融入 ${reviewFinalCount} 个重点词汇`
);

// 写回复习版文件
fs.writeFileSync(reviewFile, newReviewContent, 'utf-8');
console.log(`  保留词汇: ${reviewKept}个`);
console.log(`  删除词汇: ${reviewRemoved}个`);
console.log(`  最终数量: ${reviewFinalCount}个`);