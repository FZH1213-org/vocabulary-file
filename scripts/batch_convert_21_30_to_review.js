const fs = require('fs');
const path = require('path');

// Files to convert (stories 21-30)
const files = [
  '21_商海沉浮_女强崛起_学习版_扩充.html',
  '22_甜宠日常_霸道温柔_学习版_扩充.html',
  '23_暗箭难防_职场逆袭_学习版_扩充.html',
  '24_怦然心动_初遇之恋_学习版_扩充.html',
  '25_闪婚之后_意外之爱_学习版_扩充.html',
  '26_医妃当道_医女逆袭_学习版_扩充.html',
  '27_独宠一人_唯一之爱_学习版_扩充.html',
  '28_步步高升_奋斗之路_学习版_扩充.html',
  '29_情敌出现_爱情争夺_学习版_扩充.html',
  '30_婚后才爱_先婚后恋_学习版_扩充.html'
];

const resultDir = 'E:/FZH/vocabulary-file/vocabulary-file/result';

// Convert learning version to review version
function convertToReview(content) {
  // 1. Change title from 学习版（扩充版） to 复习版（扩充版）
  content = content.replace(/学习版（扩充版）/g, '复习版（扩充版）');

  // Also handle the format with " · " separator
  content = content.replace(/学习版 · 扩充版/g, '复习版 · 扩充版');

  // 2. Change step
  content = content.replace(/Step 1：在语境中认识单词/g, 'Step 2：看单词回忆中文释义');

  // 3. Change CSS colors from purple to green
  content = content.replace(/--pill:#E1BEE7/g, '--pill-review:#C8E6C9');
  content = content.replace(/--accent:#9C27B0/g, '--accent:#4CAF50');
  content = content.replace(/--bg-soft:#F3E5F5/g, '--bg-soft:#E8F5E9');

  // 4. Update badge text
  content = content.replace('<div class="badge">看故事记单词</div>', '<div class="badge">看故事记单词 · 复习版</div>');

  // 5. Convert vocabulary markup
  // From: <span class="w">word(中文)📢</span>
  // To: <span class="r" onclick="toggle(this)">word(<span class="h">中文</span>)</span>
  content = content.replace(/<span class="w">([^(]+)\(([^)]+)\)📢<\/span>/g,
    '<span class="r" onclick="toggle(this)">$1(<span class="h">$2</span>)</span>');

  // 6. Update CSS for .w to .r
  // Replace the .w style with .r style
  const oldStyle = /\.w\{background-color:#E1BEE7;border-radius:999px;padding:\.12em \.55em;margin:0 1px;white-space:nowrap;color:#333;font-weight:600\}/;
  const newStyle = `.r{background-color:#C8E6C9;border-radius:999px;padding:2px 8px;margin:0 2px;white-space:nowrap;color:#333;font-weight:600;cursor:pointer}.r:hover{opacity:.85}.r .h{color:transparent;user-select:none}.r.show .h{color:#333}`;
  content = content.replace(oldStyle, newStyle);

  // 7. Update meta text
  content = content.replace(/点击📢可朗读发音/g, '点击词汇显示/隐藏中文释义');

  // 8. Add toggle function before </body>
  if (!content.includes('function toggle')) {
    content = content.replace('</body>', '<script>function toggle(el){el.classList.toggle(\'show\')}</script>\n</body>');
  }

  return content;
}

// Process each file
files.forEach(file => {
  const inputPath = path.join(resultDir, file);
  const outputFile = file.replace('_学习版_扩充.html', '_复习版_扩充.html');
  const outputPath = path.join(resultDir, outputFile);

  try {
    console.log(`Processing: ${file}`);

    // Read the file
    const content = fs.readFileSync(inputPath, 'utf8');

    // Convert to review version
    const reviewContent = convertToReview(content);

    // Write the output file
    fs.writeFileSync(outputPath, reviewContent, 'utf8');

    console.log(`✓ Created: ${outputFile}`);
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
});

console.log('\nBatch conversion completed!');