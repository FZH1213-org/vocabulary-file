const fs = require('fs');
const path = require('path');

// 读取标题映射
const mappingData = JSON.parse(fs.readFileSync('cet4/demo/title_mapping.json', 'utf-8'));
const titleMapping = mappingData.titleMapping;

// 工作目录
const resultDir = 'cet4/result';

// 获取所有html文件
const files = fs.readdirSync(resultDir);
const htmlFiles = files.filter(f => f.endsWith('.html') && f !== 'temp.html');

console.log(`找到 ${htmlFiles.length} 个文件需要处理`);

// 处理每个文件
htmlFiles.sort().forEach(oldFilename => {
    // 提取编号和版本
    const match = oldFilename.match(/^(\d+)_(.+)_(复习版|学习版)\.html$/);
    if (!match) {
        console.log(`跳过无法匹配的文件: ${oldFilename}`);
        return;
    }

    const [, num, oldTitle, version] = match;
    const mappingKey = `${num}_${oldTitle}`;

    // 查找新的标题
    if (!titleMapping[mappingKey]) {
        console.log(`未找到映射: ${mappingKey}`);
        return;
    }

    const newTitle = titleMapping[mappingKey];

    // 读取文件内容
    const filepath = path.join(resultDir, oldFilename);
    let content = fs.readFileSync(filepath, 'utf-8');

    // 替换title标签中的标题
    const versionText = version;
    const titleRegex = new RegExp(`<title>.+? · ${versionText}</title>`, 'g');
    content = content.replace(titleRegex, `<title>${newTitle} · ${versionText}</title>`);

    // 替换h1标签中的标题
    content = content.replace(/<h1>.+?<\/h1>/g, `<h1>${newTitle}</h1>`);

    // 构造新文件名
    const newFilename = `${num}_${newTitle.replace(/：/g, '_')}_${version}.html`;
    const newFilepath = path.join(resultDir, newFilename);

    // 写入新文件
    fs.writeFileSync(newFilepath, content, 'utf-8');

    // 删除旧文件（如果文件名不同）
    if (oldFilename !== newFilename) {
        fs.unlinkSync(filepath);
        console.log(`已重命名: ${oldFilename} -> ${newFilename}`);
    } else {
        console.log(`已更新: ${oldFilename}`);
    }
});

console.log('\n所有文件处理完成！');