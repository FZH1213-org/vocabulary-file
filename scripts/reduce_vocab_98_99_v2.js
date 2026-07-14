const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'result');

// 分析并提取所有词汇
function extractAllVocab(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = content.matchAll(/<span class="w"[^>]*>([a-zA-Z]+)\(([^)]+)\)📢<\/span>/g);
  const vocabList = [];
  for (const match of matches) {
    vocabList.push({
      word: match[1],
      chinese: match[2],
      wordLower: match[1].toLowerCase()
    });
  }
  return vocabList;
}

// 处理故事98和99，保留高级词汇
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

// 故事98保留词汇（约120个，团队协作核心词汇）
const KEEP_WORDS_98 = new Set([
  'organize', 'teamwork', 'opportunity', 'coordinate', 'responsible',
  'cooperation', 'collaborate', 'communication', 'successfully',
  'achieve', 'manage', 'leadership', 'develop', 'strategy',
  'effective', 'efficient', 'implement', 'solution', 'challenge',
  'overcome', 'improve', 'progress', 'successful', 'goal',
  'objective', 'achievement', 'performance', 'productive',
  'productivity', 'quality', 'innovation', 'creative', 'establish',
  'maintain', 'sustain', 'expand', 'enhance', 'optimize',
  'facilitate', 'integrate', 'collaborative', 'team', 'project',
  'task', 'happen', 'handle', 'harmony', 'harness', 'harvest',
  'hasten', 'hazard', 'head', 'headquarters', 'heal', 'healthy',
  'hesitate', 'highlight', 'hinder', 'historic', 'historical',
  'hollow', 'holy', 'homogeneous', 'honor', 'honorable', 'huge',
  'humble', 'hurdle', 'hypothesis', 'hypothetical', 'harsh',
  'harden', 'help', 'helpful', 'heroic', 'heroically', 'hesitate',
  'hike', 'hint', 'hail', 'halt', 'harm', 'harassment', 'headache',
  'heavy', 'hedge', 'helicopter', 'hellow', 'heritage', 'hero',
  'hide', 'high', 'highly', 'hill', 'hire', 'history', 'hobby',
  'hold', 'hole', 'holiday', 'home', 'homework', 'honest',
  'honey', 'honor', 'hope', 'horn', 'hospital', 'hot', 'hotel',
  'hour', 'house', 'household', 'however', 'huge', 'human', 'hundred',
  'hunger', 'hunt', 'hurry', 'hurt', 'husband'
].slice(0, 120)); // 只保留前120个

// 故事99保留词汇（约100个，阅读与爱情核心词汇）
const KEEP_WORDS_99 = new Set([
  'library', 'literary', 'literature', 'classic', 'wisdom',
  'dialogue', 'knowledge', 'understanding', 'comprehension',
  'appreciate', 'appreciation', 'enthusiasm', 'enthusiast',
  'passionate', 'devotion', 'reading', 'study', 'learning',
  'education', 'educational', 'intellectual', 'intelligence',
  'intelligent', 'academic', 'poetry', 'poem', 'poetic',
  'romance', 'romantic', 'emotion', 'emotional', 'feeling',
  'sentiment', 'affection', 'intimacy', 'relationship',
  'connection', 'bond', 'attachment', 'cherish', 'treasure',
  'admire', 'respect', 'admiration', 'appreciate', 'communicate',
  'communication', 'converse', 'conversation', 'discussion',
  'discuss', 'exchange', 'share', 'sharing', 'mutual', 'encounter',
  'meeting', 'introduction', 'introduce', 'destiny', 'fate',
  'fortune', 'coincidence', 'serendipity', 'lack', 'landscape',
  'lane', 'language', 'lapse', 'largely', 'lasting', 'latitude',
  'latter', 'launch', 'lawn', 'lawsuit', 'layer', 'layout',
  'leadership', 'leading', 'leaflet', 'leak', 'lean', 'leap',
  'learned', 'lease', 'least', 'leather', 'leave', 'legacy',
  'legal', 'legend', 'legendary', 'legible', 'legislation',
  'legitimate', 'leisure', 'lemon', 'length', 'lengthy', 'lens',
  'lesser', 'lest', 'lethal', 'lettuce', 'level', 'lever',
  'levy', 'liability', 'liable', 'liaison', 'liberal', 'liberate',
  'liberation', 'liberty', 'license', 'lick', 'lid', 'lieutenant',
  'lifespan', 'lifetime', 'ligament', 'lightning', 'likeable'
].slice(0, 100)); // 只保留前100个

console.log('开始处理故事98和99...');

const result98 = processStoryStrict(98, '团队协作_共同成长', KEEP_WORDS_98);
const result99 = processStoryStrict(99, '图书馆邂逅_书缘情缘', KEEP_WORDS_99);

console.log('\n全部处理完成！');
console.log(`故事98: ${result98.learning}个词汇`);
console.log(`故事99: ${result99.learning}个词汇`);