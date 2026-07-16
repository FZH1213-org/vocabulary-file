const fs = require('fs');
const path = require('path');

// 故事题材配置
const storyThemes = [
  { title: '职场女王_从实习生到总监', theme: '职场 · 大女主 · 成长励志', subtitle: '蜕变之路' },
  { title: '那年夏天_我们相遇', theme: '校园 · 恋爱 · 青春成长', subtitle: '初见与相知' },
  { title: '凤临天下_女帝归来', theme: '重生穿越 · 大女主 · 权谋逆袭', subtitle: '浴火重生' },
  { title: '商业帝国_女强崛起', theme: '商战 · 女强 · 都市', subtitle: '商海沉浮' },
  { title: '穿越王妃_医女当道', theme: '穿越 · 古代言情 · 医术', subtitle: '妙手仁心' },
  { title: '霸总追妻_悔婚后', theme: '霸总 · 追妻 · 言情', subtitle: '再续前缘' },
  { title: '办公室恋情_禁忌之爱', theme: '职场 · 恋爱 · 禁忌', subtitle: '心动时刻' },
  { title: '千金归来_复仇计划', theme: '重生 · 复仇 · 豪门', subtitle: '绝地反击' },
  { title: '校园暗恋_心动时刻', theme: '校园 · 暗恋 · 青春', subtitle: '怦然心动' },
  { title: '契约婚姻_先婚后爱', theme: '契约 · 言情 · 豪门', subtitle: '契约情缘' }
];

// 获取所有词汇文件
const vocabDir = 'master/demo/vocabulary_split';
const vocabFiles = fs.readdirSync(vocabDir)
  .filter(f => f.endsWith('.json'))
  .sort();

console.log(`找到 ${vocabFiles.length} 个词汇文件\n`);

// 处理每个词汇文件
vocabFiles.forEach((vocabFile, index) => {
  const vocabPath = path.join(vocabDir, vocabFile);
  const vocabData = JSON.parse(fs.readFileSync(vocabPath, 'utf-8'));

  console.log(`\n[${index + 1}/${vocabFiles.length}] 处理: ${vocabFile}`);
  console.log(`   词汇范围: ${vocabData.range}, 数量: ${vocabData.count}`);

  // 选择故事主题（循环使用）
  const themeIndex = index % storyThemes.length;
  const storyTheme = storyThemes[themeIndex];

  console.log(`   故事主题: ${storyTheme.title}`);
  console.log(`   ✗ 跳过生成（需要手动编写故事内容）`);
});

console.log(`\n\n========== 统计信息 ==========`);
console.log(`总词汇文件数: ${vocabFiles.length}`);
console.log(`已生成故事数: 3`);
console.log(`待生成故事数: ${vocabFiles.length - 3}`);
console.log(`\n建议: 使用脚本批量生成需要预先编写故事内容模板`);