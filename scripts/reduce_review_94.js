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

// 复习版的词汇标记格式：<span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
// 需要匹配整个span标签
const reviewPattern = /<span class="r" onclick="toggle\(this\)">([a-zA-Z]+)\(<span class="h">[^<]+<\/span>\)<\/span>/g;

let kept = 0;
let removed = 0;

let reviewNewContent = reviewContent.replace(reviewPattern, (fullMatch, word) => {
  const wordLower = word.toLowerCase();

  // 检查是否在保留列表中
  if (KEEP_WORDS.has(wordLower)) {
    kept++;
    return fullMatch;
  } else {
    removed++;
    // 移除标记，只保留纯文本（去掉中文释义）
    return word;
  }
});

// 统计最终的词汇数量
const finalCount = (reviewNewContent.match(/class="r"[^>]*>/g) || []).length;

// 更新词汇数量
reviewNewContent = reviewNewContent.replace(
  /融入\s*\d+\s*个重点词汇/g,
  `融入 ${finalCount} 个重点词汇`
);

// 写回复习版文件
fs.writeFileSync(reviewFile, reviewNewContent, 'utf-8');

console.log(`复习版文件已更新:`);
console.log(`  保留词汇: ${kept}个`);
console.log(`  删除词汇: ${removed}个`);
console.log(`  最终数量: ${finalCount}个`);

// 更新汇总报告中的词汇数量
const reportFile = path.join(__dirname, '..', '词汇数量统计汇总.txt');
if (fs.existsSync(reportFile)) {
  let reportContent = fs.readFileSync(reportFile, 'utf-8');
  reportContent = reportContent.replace(
    /94\t宿舍闺蜜_青春友谊\s+\d+/,
    '94\t宿舍闺蜜_青春友谊\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t151'
  );
  // 更新总数
  reportContent = reportContent.replace(
    /词汇总数: \d+ 个/,
    '词汇总数: 11763 个'
  );
  reportContent = reportContent.replace(
    /平均每个故事: [\d.]+ 个词汇/,
    '平均每个故事: 117.6 个词汇'
  );
  fs.writeFileSync(reportFile, reportContent, 'utf-8');
  console.log('\n汇总报告已更新');
}