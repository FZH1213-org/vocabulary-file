const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// 结果目录
const resultDir = 'cet4/result';

// 获取所有Excel词汇表
const files = fs.readdirSync(resultDir);
const excelFiles = files.filter(f =>
    f.endsWith('_学习版.xlsx') && !f.includes('汇总')
).sort();

console.log(`找到 ${excelFiles.length} 个Excel文件需要处理\n`);

// 处理每个Excel文件
excelFiles.forEach((excelFile, index) => {
    console.log(`[${index + 1}/${excelFiles.length}] 处理: ${excelFile}`);

    const excelPath = path.join(resultDir, excelFile);

    // 读取Excel
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    // 提取故事名（从文件名）
    const storyMatch = excelFile.match(/^\d+_(.+?)_学习版\.xlsx$/);
    const storyName = storyMatch ? storyMatch[1] : excelFile;

    // 准备词汇数据
    const vocabData = data.map((row, idx) => ({
        id: idx + 1,
        word: row['单词'],
        translation: row['中文释义'],
        storyName: storyName,
        count: 1
    }));

    // 生成HTML
    const htmlContent = generateHTML(vocabData, storyName);

    // 保存HTML文件
    const htmlFile = excelFile.replace('.xlsx', '_词汇表.html');
    const htmlPath = path.join(resultDir, htmlFile);
    fs.writeFileSync(htmlPath, htmlContent, 'utf-8');

    console.log(`  ✓ 生成 ${htmlFile} (${vocabData.length}个词汇)`);
});

console.log(`\n========== 处理完成 ==========`);
console.log(`生成HTML: ${excelFiles.length} 个`);

// 生成HTML函数
function generateHTML(vocabData, storyName) {
    const totalWords = vocabData.length;
    const vocabDataJSON = JSON.stringify(vocabData).replace(/'/g, "\\'");

    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>词汇学习表 - ${escapeHtml(storyName)} - ${totalWords}个词汇</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box;}
        body{font-family:'Segoe UI',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);min-height:100vh;padding:20px;}
        .container{max-width:1400px;margin:0 auto;}
        h1{color:white;text-align:center;margin-bottom:20px;font-size:2.5em;text-shadow:2px 2px 4px rgba(0,0,0,0.3);}
        .stats{background:white;padding:15px 25px;border-radius:10px;margin-bottom:20px;display:flex;justify-content:space-around;flex-wrap:wrap;gap:10px;box-shadow:0 4px 6px rgba(0,0,0,0.1);}
        .stat-item{text-align:center;}
        .stat-number{font-size:2em;color:#667eea;font-weight:bold;}
        .stat-label{color:#666;font-size:0.9em;}
        .search-box{background:white;padding:20px;border-radius:10px;margin-bottom:20px;box-shadow:0 4px 6px rgba(0,0,0,0.1);}
        .search-controls{display:flex;gap:15px;flex-wrap:wrap;}
        .search-input{flex:1;min-width:200px;padding:12px 20px;border:2px solid #e0e0e0;border-radius:25px;font-size:16px;}
        .search-input:focus{outline:none;border-color:#667eea;box-shadow:0 0 10px rgba(102,126,234,0.3);}
        .vocabulary-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:20px;}
        .vocab-card{background:white;border-radius:15px;padding:20px;box-shadow:0 4px 6px rgba(0,0,0,0.1);transition:all 0.3s;}
        .vocab-card:hover{transform:translateY(-5px);box-shadow:0 8px 15px rgba(0,0,0,0.2);}
        .vocab-number{background:#667eea;color:white;padding:3px 10px;border-radius:12px;font-size:0.85em;font-weight:bold;}
        .vocab-word{font-size:1.8em;color:#333;font-weight:bold;margin:10px 0 5px 0;}
        .vocab-phonetic{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;}
        .phonetic-text{color:#667eea;font-size:1.1em;font-style:italic;}
        .speak-btn{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;border:none;padding:8px 15px;border-radius:20px;cursor:pointer;font-size:0.9em;transition:all 0.3s;display:flex;align-items:center;gap:5px;}
        .speak-btn:hover{transform:scale(1.05);box-shadow:0 4px 10px rgba(102,126,234,0.4);}
        .vocab-pos{background:#f0f0f0;padding:8px 12px;border-radius:8px;margin-bottom:10px;}
        .pos-label{color:#764ba2;font-weight:bold;font-size:0.85em;}
        .pos-meaning{color:#333;margin-top:3px;}
        .vocab-story{display:flex;justify-content:space-between;font-size:0.85em;color:#888;border-top:1px solid #e0e0e0;padding-top:10px;margin-top:10px;flex-wrap:wrap;gap:5px;}
        .story-name{color:#667eea;font-weight:500;}
        .no-results{text-align:center;color:white;font-size:1.2em;padding:40px;grid-column:1/-1;}
        .pagination{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:30px;flex-wrap:wrap;}
        .page-btn{background:white;color:#667eea;border:none;padding:10px 20px;border-radius:20px;cursor:pointer;font-size:16px;transition:all 0.3s;}
        .page-btn:hover:not(:disabled){background:#667eea;color:white;}
        .page-btn:disabled{opacity:0.5;cursor:not-allowed;}
        .page-info{background:white;padding:10px 20px;border-radius:20px;color:#667eea;font-weight:bold;}
        @media(max-width:768px){.vocabulary-list{grid-template-columns:1fr;}.search-controls{flex-direction:column;}h1{font-size:1.8em;}}
    </style>
</head>
<body>
    <div class="container">
        <h1>📚 ${escapeHtml(storyName)}</h1>
        <div class="stats">
            <div class="stat-item"><div class="stat-number" id="total-words">${totalWords}</div><div class="stat-label">总词汇数</div></div>
            <div class="stat-item"><div class="stat-number" id="filtered-words">${totalWords}</div><div class="stat-label">筛选结果</div></div>
        </div>
        <div class="search-box">
            <div class="search-controls">
                <input type="text" class="search-input" id="searchInput" placeholder="搜索单词或中文释义...">
            </div>
        </div>
        <div class="vocabulary-list" id="vocabularyList"></div>
        <div class="pagination" id="pagination"></div>
    </div>
    <script>
const vocabularyData=${vocabDataJSON};

let currentPage=1;
const itemsPerPage=50;
let filteredData=[...vocabularyData];

function renderVocabulary(){
    const vocabularyList=document.getElementById('vocabularyList');
    const start=(currentPage-1)*itemsPerPage;
    const end=start+itemsPerPage;
    const pageData=filteredData.slice(start,end);

    if(pageData.length===0){
        vocabularyList.innerHTML='<div class="no-results">未找到匹配的词汇</div>';
        return;
    }

    vocabularyList.innerHTML=pageData.map(v=>{
        return '<div class="vocab-card">'+
            '<span class="vocab-number">#'+v.id+'</span>'+
            '<div class="vocab-word">'+escapeHtml(v.word)+'</div>'+
            '<div class="vocab-phonetic">'+
                '<span class="phonetic-text">'+escapeHtml(v.word)+'</span>'+
                '<button class="speak-btn" onclick="speak(\\''+escapeHtml(v.word)+'\\')">'+
                    '🔊 发音'+
                '</button>'+
            '</div>'+
            '<div class="vocab-pos">'+
                '<div class="pos-label">中文释义</div>'+
                '<div class="pos-meaning">'+escapeHtml(v.translation)+'</div>'+
            '</div>'+
            '<div class="vocab-story">'+
                '<span class="story-name">'+escapeHtml(v.storyName)+'</span>'+
            '</div>'+
        '</div>';
    }).join('');
}

function renderPagination(){
    const pagination=document.getElementById('pagination');
    const totalPages=Math.ceil(filteredData.length/itemsPerPage);

    if(totalPages<=1){
        pagination.innerHTML='';
        return;
    }

    let html='';
    html+='<button class="page-btn" onclick="changePage('+(currentPage-1)+')" '+(currentPage===1?'disabled':'')+'>上一页</button>';
    html+='<span class="page-info">第 '+currentPage+' / '+totalPages+' 页</span>';
    html+='<button class="page-btn" onclick="changePage('+(currentPage+1)+')" '+(currentPage===totalPages?'disabled':'')+'>下一页</button>';

    pagination.innerHTML=html;
}

function changePage(page){
    const totalPages=Math.ceil(filteredData.length/itemsPerPage);
    if(page<1||page>totalPages)return;
    currentPage=page;
    renderVocabulary();
    renderPagination();
    window.scrollTo(0,0);
}

function speak(word){
    const utterance=new SpeechSynthesisUtterance(word);
    utterance.lang='en-US';
    utterance.rate=0.8;
    speechSynthesis.speak(utterance);
}

function escapeHtml(text){
    const div=document.createElement('div');
    div.textContent=text;
    return div.innerHTML;
}

document.getElementById('searchInput').addEventListener('input',function(e){
    const searchTerm=e.target.value.toLowerCase();
    filteredData=vocabularyData.filter(v=>{
        return v.word.toLowerCase().includes(searchTerm)||v.translation.includes(searchTerm);
    });
    currentPage=1;
    renderVocabulary();
    renderPagination();
    document.getElementById('filtered-words').textContent=filteredData.length;
});

renderVocabulary();
renderPagination();
    </script>
</body>
</html>`;

    return html;
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}