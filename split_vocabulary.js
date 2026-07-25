/**
 * 随机打乱CET6词汇表并按每50个拆分到JSON文件
 */

const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Fisher-Yates 洗牌算法
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function main() {
  // 文件路径
  const inputFile = path.join(__dirname, 'cet6', 'demo', '大学英语六级词汇完整-正序版.xls');
  const outputDir = path.join(__dirname, 'cet6', 'demo', 'split_json');

  // 创建输出目录
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 读取Excel文件
  console.log(`正在读取文件: ${inputFile}`);
  const workbook = XLSX.readFile(inputFile);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // 转换为JSON
  const data = XLSX.utils.sheet_to_json(worksheet);

  console.log(`总词汇数: ${data.length}`);
  if (data.length > 0) {
    console.log(`列名: ${Object.keys(data[0]).join(', ')}`);
    console.log(`\n前3条数据:`);
    data.slice(0, 3).forEach((item, idx) => {
      console.log(`${idx + 1}. ${JSON.stringify(item)}`);
    });
  }

  // 随机打乱顺序
  console.log('\n正在随机打乱顺序...');
  const shuffledData = shuffle(data);

  // 按每50个拆分
  const chunkSize = 50;
  const totalWords = shuffledData.length;
  const numChunks = Math.ceil(totalWords / chunkSize);

  console.log(`拆分成 ${numChunks} 个文件，每个最多 ${chunkSize} 个词汇`);

  // 保存到JSON文件
  for (let i = 0; i < numChunks; i++) {
    const startIdx = i * chunkSize;
    const endIdx = Math.min((i + 1) * chunkSize, totalWords);
    const chunk = shuffledData.slice(startIdx, endIdx);

    // 生成文件名
    const outputFile = path.join(outputDir, `cet6_words_${String(i + 1).padStart(3, '0')}.json`);

    // 保存JSON文件
    fs.writeFileSync(outputFile, JSON.stringify(chunk, null, 2), 'utf8');

    console.log(`已保存: ${outputFile} (${chunk.length} 个词汇)`);
  }

  console.log(`\n完成！共生成 ${numChunks} 个JSON文件`);
  console.log(`输出目录: ${outputDir}`);
}

main();