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

// 处理复习版文件
let reviewFile = path.join(resultDir, '94_宿舍闺蜜_青春友谊_复习版.html');
let reviewContent = fs.readFileSync(reviewFile, 'utf-8');

let kept = 0;
let removed = 0;

// 复习版格式：<span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
// 将删除的词汇替换为只保留中文
reviewContent = reviewContent.replace(/<span class="r" onclick="toggle\(this\)">([a-zA-Z]+)\(<span class="h">([^<]+)<\/span>\)<\/span>/g, (fullMatch, word, chinese) => {
  const wordLower = word.toLowerCase();
  if (KEEP_WORDS.has(wordLower)) {
    kept++;
    return fullMatch; // 保留标记
  } else {
    removed++;
    return chinese; // 只保留中文
  }
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
console.log(`复习版文件已更新:`);
console.log(`  保留词汇: ${kept}个`);
console.log(`  删除词汇: ${removed}个`);
console.log(`  最终数量: ${reviewFinalCount}个`);