const fs = require('fs');
const path = require('path');

// 统计所有故事的词汇数量
const resultDir = path.join(__dirname, '..', 'result');
const files = fs.readdirSync(resultDir)
  .filter(f => f.endsWith('_学习版.html'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/^(\d+)/)?.[1] || '0');
    const numB = parseInt(b.match(/^(\d+)/)?.[1] || '0');
    return numA - numB;
  });

console.log('开始统计所有故事的词汇数量...\n');

const storyData = [];
let totalVocab = 0;

files.forEach(file => {
  const filePath = path.join(resultDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // 提取序号和故事名
  const match = file.match(/^(\d+)_(.+)_学习版\.html$/);
  if (!match) return;

  const num = parseInt(match[1]);
  const storyName = match[2];

  // 统计学习版词汇数量
  const learningVocab = (content.match(/class="w"[^>]*>/g) || []).length;

  // 统计复习版词汇数量
  const reviewFile = path.join(resultDir, file.replace('_学习版.html', '_复习版.html'));
  let reviewVocab = 0;
  if (fs.existsSync(reviewFile)) {
    const reviewContent = fs.readFileSync(reviewFile, 'utf-8');
    reviewVocab = (reviewContent.match(/class="r"[^>]*>/g) || []).length;
  }

  totalVocab += learningVocab;

  storyData.push({
    序号: num,
    故事名称: storyName,
    学习版词汇数: learningVocab,
    复习版词汇数: reviewVocab,
    一致性: learningVocab === reviewVocab ? '✓' : '❌'
  });

  console.log(`${num}. ${storyName}: ${learningVocab}个词汇`);
});

console.log(`\n统计完成！`);
console.log(`总故事数: ${storyData.length}`);
console.log(`词汇总数: ${totalVocab}`);
console.log(`平均每故事: ${(totalVocab / storyData.length).toFixed(1)}个词汇\n`);

// 生成Excel文件
console.log('生成Excel文件...');
generateExcel(storyData, totalVocab);

function generateExcel(data, total) {
  const xlsxPath = path.join(__dirname, '..', 'statistics', '故事考研词汇汇总.xlsx');

  // 使用简单的CSV格式，然后转换为xlsx
  // Excel文件格式（XML Spreadsheet）
  let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Header">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:Bold="1" ss:Size="12"/>
   <Interior ss:Color="#4472C4" ss:Pattern="Solid"/>
   <Font ss:Color="#FFFFFF"/>
  </Style>
  <Style ss:ID="Title">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:Bold="1" ss:Size="14"/>
  </Style>
  <Style ss:ID="Data">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
  </Style>
  <Style ss:ID="Number">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <NumberFormat ss:Format="0"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="词汇统计">
  <Table>
   <Column ss:Width="60"/>
   <Column ss:Width="400"/>
   <Column ss:Width="120"/>
   <Column ss:Width="120"/>
   <Column ss:Width="80"/>

   <Row>
    <Cell ss:StyleID="Title" ss:MergeAcross="4">
     <Data ss:Type="String">故事考研词汇数量统计汇总</Data>
    </Cell>
   </Row>

   <Row>
    <Cell ss:StyleID="Header"><Data ss:Type="String">序号</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">故事名称</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">学习版词汇数</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">复习版词汇数</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">一致性</Data></Cell>
   </Row>`;

  data.forEach(row => {
    xmlContent += `
   <Row>
    <Cell ss:StyleID="Number"><Data ss:Type="Number">${row.序号}</Data></Cell>
    <Cell ss:StyleID="Data"><Data ss:Type="String">${row.故事名称}</Data></Cell>
    <Cell ss:StyleID="Number"><Data ss:Type="Number">${row.学习版词汇数}</Data></Cell>
    <Cell ss:StyleID="Number"><Data ss:Type="Number">${row.复习版词汇数}</Data></Cell>
    <Cell ss:StyleID="Data"><Data ss:Type="String">${row.一致性}</Data></Cell>
   </Row>`;
  });

  xmlContent += `
   <Row>
    <Cell ss:StyleID="Data" ss:MergeAcross="1"><Data ss:Type="String">统计汇总</Data></Cell>
    <Cell ss:StyleID="Number"><Data ss:Type="Number">${total}</Data></Cell>
    <Cell ss:StyleID="Number"><Data ss:Type="Number">${total}</Data></Cell>
    <Cell ss:StyleID="Data"><Data ss:Type="String">-</Data></Cell>
   </Row>

   <Row>
    <Cell ss:StyleID="Data" ss:MergeAcross="4">
     <Data ss:Type="String">总故事数: ${data.length}个 | 词汇总数: ${total}个 | 平均每故事: ${(total / data.length).toFixed(1)}个</Data>
    </Cell>
   </Row>
  </Table>
 </Worksheet>
</Workbook>`;

  // 确保statistics目录存在
  const statisticsDir = path.join(__dirname, '..', 'statistics');
  if (!fs.existsSync(statisticsDir)) {
    fs.mkdirSync(statisticsDir, { recursive: true });
  }

  fs.writeFileSync(xlsxPath, xmlContent, 'utf-8');
  console.log(`Excel文件已生成: ${xlsxPath}`);
}