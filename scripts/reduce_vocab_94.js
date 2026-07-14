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

// 找到所有词汇标记
const vocabPattern = /<span class="w"[^>]*>([^<]+)<\/span>/g;
let match;
let kept = 0;
let removed = 0;

let newContent = content.replace(vocabPattern, (fullMatch, content) => {
  // 提取英文单词
  const wordMatch = content.match(/^([a-zA-Z]+)/);
  if (!wordMatch) {
    removed++;
    return content.replace(/📢/g, '');
  }

  const word = wordMatch[1].toLowerCase();

  // 检查是否在保留列表中
  if (KEEP_WORDS.has(word)) {
    kept++;
    return fullMatch;
  } else {
    removed++;
    // 移除标记，只保留纯文本
    return content.replace(/📢/g, '');
  }
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
console.log(`学习版文件已更新:`);
console.log(`  保留词汇: ${kept}个`);
console.log(`  删除词汇: ${removed}个`);
console.log(`  最终数量: ${finalCount}个`);

// 处理复习版文件 - 同样只保留这些高级词汇
let reviewFile = path.join(resultDir, '94_宿舍闺蜜_青春友谊_复习版.html');
let reviewContent = fs.readFileSync(reviewFile, 'utf-8');

// 复习版的词汇标记模式不同
const reviewPattern = /<span class="r"[^>]*>([^<]+)<span class="h">[^<]+<\/span><\/span>/g;

let reviewNewContent = reviewContent.replace(reviewPattern, (fullMatch, content) => {
  // 提取英文单词
  const wordMatch = content.match(/^([a-zA-Z]+)/);
  if (!wordMatch) {
    return content;
  }

  const word = wordMatch[1].toLowerCase();

  // 检查是否在保留列表中
  if (KEEP_WORDS.has(word)) {
    return fullMatch;
  } else {
    // 移除标记，只保留纯文本（去掉隐藏的中文释义）
    return content;
  }
});

// 统计复习版的词汇数量
const reviewFinalCount = (reviewNewContent.match(/class="r"[^>]*>/g) || []).length;

// 更新词汇数量
reviewNewContent = reviewNewContent.replace(
  /融入\s*\d+\s*个重点词汇/g,
  `融入 ${reviewFinalCount} 个重点词汇`
);

// 写回复习版文件
fs.writeFileSync(reviewFile, reviewNewContent, 'utf-8');
console.log(`\n复习版文件已更新:`);
console.log(`  最终数量: ${reviewFinalCount}个`);