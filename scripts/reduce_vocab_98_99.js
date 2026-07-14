const fs = require('fs');
const path = require('path');

// 故事98保留的高级词汇列表（约120个）
const KEEP_WORDS_98 = new Set([
  // H开头的核心词汇
  'happen', 'handle', 'harmony', 'harness', 'harvest', 'hasten',
  'hazard', 'head', 'headquarters', 'heal', 'healthy', 'hesitate',
  'highlight', 'hinder', 'hinge', 'historic', 'historical', 'hollow',
  'holy', 'homogeneous', 'honor', 'honorable', 'horizontal', 'hormone',
  'hospitable', 'hostile', 'household', 'hover', 'huge', 'hull',
  'humble', 'humid', 'humiliate', 'hurdle', 'hurl', 'hypothesis',
  'hypothetical', 'hail', 'halt', 'hammer', 'harm', 'harsh',

  // 其他高级词汇
  'organize', 'teamwork', 'opportunity', 'coordinate', 'responsible',
  'cooperation', 'collaborate', 'collaboration', 'communication',
  'successfully', 'achieve', 'accomplish', 'manage', 'management',
  'leadership', 'develop', 'development', 'strategy', 'strategic',
  'effective', 'efficient', 'efficiency', 'implement', 'implementation',
  'solution', 'resolve', 'challenge', 'overcome', 'improve', 'improvement',
  'progress', 'successful', 'success', 'goal', 'objective', 'target',
  'achievement', 'accomplishment', 'performance', 'productive', 'productivity',
  'quality', 'innovation', 'innovative', 'creative', 'creativity',
  'establish', 'establishment', 'maintain', 'maintenance', 'sustain',
  'sustainable', 'expand', 'expansion', 'enhance', 'enhancement',
  'optimize', 'optimization', 'streamline', 'facilitate', 'integration',
  'integrate', 'coordinate', 'coordination', 'collaborative', 'team'
]);

// 故事99保留的高级词汇列表（约120个）
const KEEP_WORDS_99 = new Set([
  // L开头的核心词汇
  'lack', 'landscape', 'lane', 'language', 'lapse', 'largely',
  'lasting', 'latitude', 'latter', 'launch', 'lawn', 'lawsuit',
  'layer', 'layout', 'leadership', 'leading', 'leaflet', 'leak',
  'lean', 'leap', 'learned', 'lease', 'least', 'leather',
  'leave', 'legacy', 'legal', 'legend', 'legendary', 'legible',
  'legislation', 'legitimate', 'leisure', 'lemon', 'length',
  'lengthy', 'lens', 'lesser', 'lest', 'lethal', 'lettuce',
  'level', 'lever', 'levy', 'liability', 'liable', 'liaison',
  'liberal', 'liberate', 'liberation', 'liberty', 'library',
  'license', 'lick', 'lid', 'lieutenant', 'lifespan', 'lifetime',
  'ligament', 'lightning', 'likeable', 'likelihood', 'likely',
  'limb', 'lime', 'limitation', 'limited', 'limp', 'lineage',
  'linear', 'linen', 'liner', 'linger', 'linguistic', 'link',

  // 其他高级词汇
  'literary', 'literature', 'classic', 'wisdom', 'dialogue',
  'knowledge', 'understanding', 'comprehension', 'appreciate',
  'appreciation', 'enthusiasm', 'enthusiast', 'passionate', 'devotion',
  'reading', 'study', 'learning', 'education', 'educational',
  'intellectual', 'intelligence', 'intelligent', 'academic',
  'poetry', 'poem', 'poetic', 'romance', 'romantic', 'emotion',
  'emotional', 'feeling', 'sentiment', 'affection', 'intimacy',
  'relationship', 'connection', 'bond', 'attachment', 'cherish',
  'treasure', 'admire', 'respect', 'admiration', 'appreciate',
  'communicate', 'communication', 'converse', 'conversation',
  'discussion', 'discuss', 'exchange', 'share', 'sharing', 'mutual',
  'encounter', 'meeting', 'introduction', 'introduce', 'encounter',
  'destiny', 'fate', 'fortune', 'coincidence', 'serendipity'
]);

const resultDir = path.join(__dirname, '..', 'result');

// 处理单个故事的函数
function processStory(storyNum, storyName, keepWords, targetCount) {
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

// 处理故事98和99
console.log('开始处理故事98和99...\n');

const result98 = processStory(98, '团队协作_共同成长', KEEP_WORDS_98, 120);
const result99 = processStory(99, '图书馆邂逅_书缘情缘', KEEP_WORDS_99, 120);

console.log('\n处理完成！');
console.log(`故事98最终词汇数: 学习版${result98.learning}个, 复习版${result98.review}个`);
console.log(`故事99最终词汇数: 学习版${result99.learning}个, 复习版${result99.review}个`);