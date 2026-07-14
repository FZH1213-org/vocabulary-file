const fs = require('fs');
const path = require('path');

// 故事98重新精简的保留词汇列表（约120个，更严格的筛选）
const KEEP_WORDS_98_STRICT = new Set([
  // H开头的高级词汇（精选）
  'happen', 'handle', 'harmony', 'harness', 'harvest', 'hasten',
  'hazard', 'head', 'headquarters', 'heal', 'hesitate',
  'highlight', 'hinder', 'historic', 'historical',
  'honor', 'honorable', 'hollow', 'holy',
  'homogeneous', 'humble', 'hurdle', 'hypothesis', 'hypothetical',

  // 团队合作核心词汇
  'organize', 'teamwork', 'opportunity', 'coordinate',
  'cooperation', 'collaborate', 'communication',
  'successfully', 'achieve', 'manage', 'leadership',
  'develop', 'strategy', 'effective', 'efficient',
  'implement', 'solution', 'challenge', 'overcome',
  'improve', 'progress', 'successful', 'goal', 'objective',
  'achievement', 'performance', 'productive', 'productivity',
  'quality', 'innovation', 'creative', 'establish',
  'maintain', 'sustain', 'expand', 'enhance',
  'optimize', 'facilitate', 'integrate',
  'collaborative', 'team', 'project', 'task',

  // 额外精选词汇
  'harsh', 'harassment', 'halt', 'hail', 'harden',
  'heavy', 'help', 'helpful', 'heroic', 'heroically',
  'hesitate', 'hike', 'hint', 'historic', 'historically',
  'honor', 'honorable', 'huge', 'humble', 'hurl'
]);

const resultDir = path.join(__dirname, '..', 'result');

console.log('重新处理故事98...\n');

const storyNum = '98';
const storyName = '团队协作_共同成长';

const learningFile = path.join(resultDir, `${storyNum}_${storyName}_学习版.html`);
const reviewFile = path.join(resultDir, `${storyNum}_${storyName}_复习版.html`);

// 处理学习版
let learningContent = fs.readFileSync(learningFile, 'utf-8');
let learningKept = 0;
let learningRemoved = 0;

let newLearningContent = learningContent.replace(/<span class="w"[^>]*>([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g, (fullMatch, word, chinese) => {
  const wordLower = word.toLowerCase();
  if (KEEP_WORDS_98_STRICT.has(wordLower)) {
    learningKept++;
    return fullMatch;
  } else {
    learningRemoved++;
    return chinese;
  }
});

const learningFinalCount = (newLearningContent.match(/class="w"[^>]*>/g) || []).length;
newLearningContent = newLearningContent.replace(
  /融入\s*\d+\s*个重点词汇/g,
  `融入 ${learningFinalCount} 个重点词汇`
);

fs.writeFileSync(learningFile, newLearningContent, 'utf-8');
console.log(`学习版: 保留${learningKept}个, 删除${learningRemoved}个, 最终${learningFinalCount}个`);

// 处理复习版
let reviewContent = fs.readFileSync(reviewFile, 'utf-8');
let reviewKept = 0;
let reviewRemoved = 0;

let newReviewContent = reviewContent.replace(/<span class="r" onclick="toggle\(this\)">([a-zA-Z]+)\(<span class="h">([^<]+)<\/span>\)<\/span>/g, (fullMatch, word, chinese) => {
  const wordLower = word.toLowerCase();
  if (KEEP_WORDS_98_STRICT.has(wordLower)) {
    reviewKept++;
    return fullMatch;
  } else {
    reviewRemoved++;
    return chinese;
  }
});

const reviewFinalCount = (newReviewContent.match(/class="r"[^>]*>/g) || []).length;
newReviewContent = newReviewContent.replace(
  /融入\s*\d+\s*个重点词汇/g,
  `融入 ${reviewFinalCount} 个重点词汇`
);

fs.writeFileSync(reviewFile, newReviewContent, 'utf-8');
console.log(`复习版: 保留${reviewKept}个, 删除${reviewRemoved}个, 最终${reviewFinalCount}个`);

console.log('\n处理完成！');