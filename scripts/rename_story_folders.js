const fs = require('fs');
const path = require('path');

const resultDir = path.join(__dirname, '..', 'kaoyan', 'result');

// 读取所有文件夹
const folders = fs.readdirSync(resultDir).filter(f => {
  return fs.statSync(path.join(resultDir, f)).isDirectory();
});

console.log(`找到 ${folders.length} 个文件夹\n`);

// 重命名每个文件夹
folders.sort().forEach(folder => {
  const folderPath = path.join(resultDir, folder);

  // 读取文件夹内的文件
  const files = fs.readdirSync(folderPath);

  if (files.length > 0) {
    // 从第一个文件名中提取"序号_故事名"
    const firstFile = files[0];
    const match = firstFile.match(/^(\d+_[^_]+_[^_]+)_/);

    if (match) {
      const newFolderName = match[1]; // 例如：01_豪门契约_总裁的替身新娘
      const newFolderPath = path.join(resultDir, newFolderName);

      if (folder !== newFolderName) {
        fs.renameSync(folderPath, newFolderPath);
        console.log(`${folder} -> ${newFolderName}`);
      } else {
        console.log(`${folder} (无需重命名)`);
      }
    }
  }
});

console.log('\n文件夹重命名完成！');