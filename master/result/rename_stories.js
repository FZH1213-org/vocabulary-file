const fs = require('fs');
const path = require('path');

// 读取标题映射
const titleMapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'title_mapping.json'), 'utf-8'));

const resultDir = __dirname;

// 获取所有包含PDF的文件夹
function getFoldersWithPDF(dir) {
  const folders = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      const folderPath = path.join(dir, item.name);
      const files = fs.readdirSync(folderPath);
      const hasPDF = files.some(f => f.endsWith('.pdf'));
      if (hasPDF) {
        folders.push({
          name: item.name,
          path: folderPath,
          files: files.filter(f => f.endsWith('.pdf'))
        });
      } else {
        // 删除空文件夹
        console.log(`删除空文件夹: ${item.name}`);
        fs.rmdirSync(folderPath);
      }
    }
  }

  return folders;
}

// 提取故事编号和标题
function parseFolderName(folderName) {
  const match = folderName.match(/^(\d+)_(.+)$/);
  if (match) {
    return {
      number: match[1],
      title: match[2]
    };
  }
  return null;
}

// 查找匹配的新标题
function findNewTitle(oldTitle) {
  // 标准化标题用于匹配
  const normalizedOldTitle = oldTitle.replace(/_/g, '：').replace(/_/g, ' ');

  const mapping = titleMapping.find(m => {
    const normalizedMappingOld = m.old_title.replace(/：/g, '：').replace(/_/g, ' ');
    return normalizedOldTitle.includes(m.old_title) || m.old_title.includes(normalizedOldTitle);
  });

  return mapping ? mapping.new_title : oldTitle;
}

// 重命名文件夹和文件
function renameFoldersAndFiles() {
  const folders = getFoldersWithPDF(resultDir);

  console.log(`\n找到 ${folders.length} 个包含PDF的文件夹\n`);

  for (const folder of folders) {
    const parsed = parseFolderName(folder.name);
    if (!parsed) {
      console.log(`跳过（无法解析）: ${folder.name}`);
      continue;
    }

    const newTitle = findNewTitle(parsed.title);
    const newFolderName = `${parsed.number}_${newTitle}`;

    if (newFolderName !== folder.name) {
      console.log(`重命名: ${folder.name} -> ${newFolderName}`);

      // 重命名文件夹
      const newFolderPath = path.join(resultDir, newFolderName);
      if (fs.existsSync(newFolderPath)) {
        console.log(`  警告: 目标文件夹已存在，跳过: ${newFolderName}`);
        continue;
      }

      fs.renameSync(folder.path, newFolderPath);

      // 重命名文件夹内的PDF文件
      for (const file of folder.files) {
        const oldFilePath = path.join(newFolderPath, file);
        const newFileName = file.replace(folder.name, newFolderName);
        const newFilePath = path.join(newFolderPath, newFileName);

        if (oldFilePath !== newFilePath) {
          console.log(`  重命名文件: ${file} -> ${newFileName}`);
          fs.renameSync(oldFilePath, newFilePath);
        }
      }
    } else {
      console.log(`保持不变: ${folder.name}`);
    }
  }

  console.log('\n重命名完成！');
}

// 执行
renameFoldersAndFiles();