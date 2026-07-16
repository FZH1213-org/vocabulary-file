const fs = require('path');
const path = require('path');
const { selectVocab, generateLearnHTML, generateReviewHTML } = require('./html_generator.js');

// 确保 result 目录存在
const resultDir = path.join(__dirname, 'result');
if (!fs.existsSync(resultDir)) {
  fs.mkdirSync(resultDir, { recursive: true });
}

// 故事主题配置
const stories = [
  {
    id: '01',
    title: '重生之商业女王',
    subtitle: '命运重启',
    theme: '重生穿越 · 大女主 · 商战',
    startIndex: 0,
    vocabCount: 150
  },
  {
    id: '02',
    title: '霸总的契约新娘',
    subtitle: '意外邂逅',
    theme: '霸总 · 恋爱 · 都市',
    startIndex: 150,
    vocabCount: 150
  },
  {
    id: '03',
    title: '校园里的秘密',
    subtitle: '青葱岁月',
    theme: '校园 · 青春 · 成长',
    startIndex: 300,
    vocabCount: 150
  },
  {
    id: '04',
    title: '职场逆袭记',
    subtitle: '初入职场',
    theme: '职场 · 励志 · 都市',
    startIndex: 450,
    vocabCount: 150
  },
  {
    id: '05',
    title: '修仙之路',
    subtitle: '踏入仙门',
    theme: '修仙 · 玄幻 · 成长',
    startIndex: 600,
    vocabCount: 150
  }
];

// 故事内容生成函数（这里使用示例故事，实际应用中可以使用AI生成）
function generateStoryContent(storyConfig, vocabList) {
  // 这里返回故事内容，词汇已经被嵌入
  // 实际应用中，这里应该是AI生成的内容
  return '<p>故事内容将在这里...</p>';
}

// 主生成函数
function generateAllStories() {
  console.log('开始生成故事...');

  stories.forEach(story => {
    console.log(`\n生成故事 ${story.id}: ${story.title}`);

    // 选择词汇
    const selectedVocab = selectVocab(story.startIndex, story.vocabCount);
    console.log(`  - 已选择 ${selectedVocab.length} 个词汇`);

    // 生成故事内容（这里需要手动或通过AI生成）
    const storyContent = generateStoryContent(story, selectedVocab);

    // 生成学习版HTML
    const learnHTML = generateLearnHTML(
      story.title,
      story.subtitle,
      storyContent,
      story.vocabCount
    );

    // 生成复习版HTML
    const reviewHTML = generateReviewHTML(
      story.title,
      story.subtitle,
      storyContent,
      story.vocabCount
    );

    // 保存文件
    const learnFileName = `${story.id}_${story.title}_${story.subtitle}_学习版.html`;
    const reviewFileName = `${story.id}_${story.title}_${story.subtitle}_复习版.html`;

    fs.writeFileSync(
      path.join(resultDir, learnFileName),
      learnHTML,
      'utf-8'
    );

    fs.writeFileSync(
      path.join(resultDir, reviewFileName),
      reviewHTML,
      'utf-8'
    );

    console.log(`  - 已生成: ${learnFileName}`);
    console.log(`  - 已生成: ${reviewFileName}`);
  });

  console.log('\n所有故事生成完成！');
  console.log(`文件保存在: ${resultDir}`);
}

// 运行生成
generateAllStories();