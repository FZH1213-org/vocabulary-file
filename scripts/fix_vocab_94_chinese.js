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

// 处理学习版文件
let learningFile = path.join(resultDir, '94_宿舍闺蜜_青春友谊_学习版.html');
let content = fs.readFileSync(learningFile, 'utf-8');

// 学习版模式：<span class="w">word(中文)📢</span> 或者 word(中文)
// 对于保留的词汇，保持原有的span标记
// 对于删除的词汇，只保留中文部分

let newContent = content;

// 处理带span标记的词汇
newContent = newContent.replace(/<span class="w"[^>]*>([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g, (fullMatch, word, chinese) => {
  const wordLower = word.toLowerCase();
  if (KEEP_WORDS.has(wordLower)) {
    return fullMatch; // 保留标记
  } else {
    return chinese; // 只保留中文
  }
});

// 处理没有span标记的词汇（word(中文)格式）
newContent = newContent.replace(/\b([a-zA-Z]+)\(([^)]+)\)/g, (fullMatch, word, chinese) => {
  const wordLower = word.toLowerCase();
  // 如果这个词在保留列表中，应该已经被span标记处理过了
  // 这里处理的是那些没有被标记的词，直接替换为中文
  return chinese;
});

// 统计最终的词汇数量
const finalCount = (newContent.match(/class="w"[^>]*>/g) || []).length;

// 更新词汇数量
newContent = newContent.replace(
  /融入\s*\d+\s*个重点词汇/g,
  `融入 ${finalCount} 个重点词汇`
);

// 写回学习版文件
fs.writeFileSync(learningFile, newContent, 'utf-8');
console.log(`学习版文件已更新: ${finalCount}个词汇`);

// 处理复习版文件
let reviewFile = path.join(resultDir, '94_宿舍闺蜜_青春友谊_复习版.html');
let reviewContent = fs.readFileSync(reviewFile, 'utf-8');

// 复习版的词汇标记格式：<span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
reviewContent = reviewContent.replace(/<span class="r" onclick="toggle\(this\)">([a-zA-Z]+)\(<span class="h">([^<]+)<\/span>\)<\/span>/g, (fullMatch, word, chinese) => {
  const wordLower = word.toLowerCase();
  if (KEEP_WORDS.has(wordLower)) {
    return fullMatch; // 保留标记
  } else {
    return chinese; // 只保留中文
  }
});

// 处理没有span标记的词汇（word(中文)格式）
reviewContent = reviewContent.replace(/\b([a-zA-Z]+)\(([^)]+)\)/g, (fullMatch, word, chinese) => {
  return chinese; // 只保留中文
});

// 统计复习版的词汇数量
const reviewFinalCount = (reviewContent.match(/class="r"[^>]*>/g) || []).length;

// 更新词汇数量
reviewContent = reviewContent.replace(
  /融入\s*\d+\s*个重点词汇/g,
  `融入 ${reviewFinalCount} 个重点词汇`
);

// 写回复习版文件
fs.writeFileSync(reviewFile, reviewContent, 'utf-8');
console.log(`复习版文件已更新: ${reviewFinalCount}个词汇`);