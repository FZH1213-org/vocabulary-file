const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'result');

// 处理故事的函数
function processStoryStrict(storyNum, storyName, keepWords) {
  console.log(`\n处理故事${storyNum}: ${storyName}`);

  const learningFile = path.join(resultDir, `${storyNum}_${storyName}_学习版.html`);
  const reviewFile = path.join(resultDir, `${storyNum}_${storyName}_复习版.html`);

  // 处理学习版
  let learningContent = fs.readFileSync(learningFile, 'utf-8');
  let learningKept = 0;
  let learningRemoved = 0;

  let newLearningContent = learningContent.replace(/<span class="w"[^>]*>([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g, (fullMatch, word, chinese) => {
    const wordLower = word.toLowerCase();
    if (keepWords.has(wordLower)) {
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
  console.log(`  学习版: 保留${learningKept}个, 删除${learningRemoved}个, 最终${learningFinalCount}个`);

  // 处理复习版
  let reviewContent = fs.readFileSync(reviewFile, 'utf-8');
  let reviewKept = 0;
  let reviewRemoved = 0;

  let newReviewContent = reviewContent.replace(/<span class="r" onclick="toggle\(this\)">([a-zA-Z]+)\(<span class="h">([^<]+)<\/span>\)<\/span>/g, (fullMatch, word, chinese) => {
    const wordLower = word.toLowerCase();
    if (keepWords.has(wordLower)) {
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
  console.log(`  复习版: 保留${reviewKept}个, 删除${reviewRemoved}个, 最终${reviewFinalCount}个`);

  return { learning: learningFinalCount, review: reviewFinalCount };
}

// 故事98保留词汇（约120个精选高级词汇）
const KEEP_WORDS_98 = new Set([
  // 团队合作核心词汇
  'teamwork', 'collaborate', 'collaboration', 'coordinate', 'coordination',
  'cooperation', 'communication', 'organize', 'organization', 'manage',
  'management', 'leadership', 'leader', 'lead', 'achieve', 'achievement',
  'accomplish', 'accomplishment', 'success', 'successful', 'successfully',
  'goal', 'objective', 'target', 'strategy', 'strategic', 'plan', 'planning',
  'project', 'task', 'mission', 'challenge', 'overcome', 'resolve', 'solution',
  'problem', 'issue', 'opportunity', 'chance', 'possibility', 'potential',
  'develop', 'development', 'improve', 'improvement', 'enhance', 'enhancement',
  'progress', 'advance', 'advancement', 'effective', 'efficient', 'efficiency',
  'performance', 'productive', 'productivity', 'quality', 'innovate',
  'innovation', 'innovative', 'creative', 'creativity', 'implement',
  'implementation', 'establish', 'establishment', 'maintain', 'maintenance',
  'sustain', 'sustainable', 'expand', 'expansion', 'optimize', 'optimization',
  'facilitate', 'facilitation', 'integrate', 'integration', 'happen', 'handle',
  'harmony', 'harness', 'hesitate', 'hesitation', 'highlight', 'hinder',
  'hurdle', 'obstacle', 'barrier', 'hypothesis', 'hypothetical', 'harsh',
  'hardship', 'difficulty', 'hardship', 'hazard', 'risk', 'heal', 'healing',
  'health', 'healthy', 'help', 'helpful', 'hero', 'heroic', 'heroically',
  'honor', 'honorable', 'honorable', 'huge', 'enormous', 'vast', 'humble',
  'humility', 'modest', 'harvest', 'yield', 'result', 'outcome'
]);

// 故事99保留词汇（约100个精选高级词汇）
const KEEP_WORDS_99 = new Set([
  // 阅读与学习核心词汇
  'library', 'literary', 'literature', 'classic', 'wisdom', 'knowledge',
  'understanding', 'comprehension', 'intellectual', 'intelligence',
  'intelligent', 'academic', 'education', 'educational', 'learning',
  'study', 'reading', 'poetry', 'poem', 'poetic', 'enthusiasm',
  'enthusiast', 'passionate', 'passion', 'devotion', 'devote', 'appreciate',
  'appreciation', 'admire', 'admiration', 'respect', 'affection', 'emotion',
  'emotional', 'feeling', 'sentiment', 'romance', 'romantic', 'love',
  'relationship', 'connection', 'bond', 'attachment', 'cherish', 'treasure',
  'share', 'sharing', 'communicate', 'communication', 'conversation',
  'discuss', 'discussion', 'exchange', 'mutual', 'encounter', 'meeting',
  'introduce', 'introduction', 'destiny', 'fate', 'fortune', 'coincidence',
  'opportunity', 'chance', 'moment', 'occasion', 'lack', 'absence',
  'language', 'communication', 'expression', 'meaning', 'interpretation',
  'comprehend', 'understand', 'grasp', 'perceive', 'perception', 'insight',
  'perspective', 'viewpoint', 'standpoint', 'latter', 'launch', 'launch',
  'layout', 'design', 'structure', 'leadership', 'leading', 'learned',
  'scholar', 'scholarship', 'legacy', 'heritage', 'legend', 'legendary',
  'legal', 'lawful', 'legitimate', 'legitimacy', 'leisure', 'relaxation',
  'length', 'duration', 'extent', 'lens', 'perspective', 'level', 'degree',
  'liberty', 'freedom', 'independence', 'license', 'permit', 'lifetime',
  'lifespan', 'duration', 'lightning', 'thunder', 'likelihood', 'probability',
  'likelihood', 'limit', 'limitation', 'restricted', 'limited'
]);

console.log('开始处理故事98和99...');

const result98 = processStoryStrict(98, '团队协作_共同成长', KEEP_WORDS_98);
const result99 = processStoryStrict(99, '图书馆邂逅_书缘情缘', KEEP_WORDS_99);

console.log('\n全部处理完成！');
console.log(`故事98: 学习版${result98.learning}个, 复习版${result98.review}个`);
console.log(`故事99: 学习版${result99.learning}个, 复习版${result99.review}个`);