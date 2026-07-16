const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'kaoyan', 'result');

// 读取所有文件
const files = fs.readdirSync(resultDir);

// 按故事序号分组
const storyGroups = {};

files.forEach(file => {
  // 提取故事序号（如 01, 02, 03...）
  const match = file.match(/^(\d+)_/);
  if (match) {
    const storyNum = match[1];
    if (!storyGroups[storyNum]) {
      storyGroups[storyNum] = [];
    }
    storyGroups[storyNum].push(file);
  }
});

console.log(`找到 ${Object.keys(storyGroups).length} 个故事`);

// 为每个故事创建文件夹并移动文件
Object.keys(storyGroups).sort((a, b) => parseInt(a) - parseInt(b)).forEach(storyNum => {
  const folderName = `story_${storyNum}`;
  const folderPath = path.join(resultDir, folderName);

  // 创建文件夹
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`创建文件夹: ${folderName}`);
  }

  // 移动文件
  storyGroups[storyNum].forEach(file => {
    const oldPath = path.join(resultDir, file);
    const newPath = path.join(folderPath, file);
    fs.renameSync(oldPath, newPath);
    console.log(`  移动: ${file} -> ${folderName}/`);
  });
});

console.log('\n文件重组完成！');