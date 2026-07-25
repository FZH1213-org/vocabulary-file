const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// 读取汇总Excel
const excelPath = 'cet4/result/CET4全部词汇汇总.xlsx';
console.log('读取文件:', excelPath);

const workbook = XLSX.readFile(excelPath);

// 读取全部词汇工作表
const vocabSheet = workbook.Sheets['全部词汇'];
const vocabData = XLSX.utils.sheet_to_json(vocabSheet);

console.log(`总词汇数: ${vocabData.length}`);

// 读取故事统计工作表
const statsSheet = workbook.Sheets['故事统计'];
const statsData = XLSX.utils.sheet_to_json(statsSheet);

// 过滤出真正的故事数据（排除总计和空行）
const storyList = statsData
    .filter(row => row['故事编号'] && row['故事名称'])
    .map(row => row['故事名称']);

console.log(`故事数量: ${storyList.length}`);

// 由于汇总文件中没有故事列，我们需要从单个文件重新读取
// 或者直接使用高频词汇的数据

// 读取高频词汇工作表
const freqSheet = workbook.Sheets['高频词汇Top100'];
const freqData = XLSX.utils.sheet_to_json(freqSheet);

console.log(`高频词汇数: ${freqData.length}`);

// 创建词汇数据（从高频词汇中提取，因为这里有完整信息）
// 如果需要全部词汇，需要重新生成Excel或者修改脚本

// 暂时使用全部词汇工作表的数据，添加故事信息
// 由于没有故事信息，我们标记为"汇总词汇"

const vocabularyData = vocabData.map((row, idx) => {
    return {
        id: idx + 1,
        word: row['单词'] || '',
        translation: row['中文释义'] || '',
        storyName: 'CET4全部词汇汇总',
        count: 1
    };
});

console.log(`准备生成HTML，词汇数: ${vocabularyData.length}`);

// 生成HTML
const htmlContent = generateHTML(vocabularyData, storyList, vocabData.length);

// 保存文件
const outputPath = 'cet4/result/CET4词汇学习表_完整版.html';
fs.writeFileSync(outputPath, htmlContent, 'utf-8');

console.log(`\n生成完成: ${outputPath}`);
console.log(`文件大小: ${(htmlContent.length / 1024).toFixed(2)} KB`);

// 生成HTML函数
function generateHTML(vocabData, storyList, totalWords) {
    const vocabDataJSON = JSON.stringify(vocabData);

    const storyOptions = storyList.slice(0, 20).map(s =>
        `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`
    ).join('\n                    ');

    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CET4词汇学习表 - ${totalWords}个词汇 - ${storyList.length}个故事</title>
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
        .search-input{flex:2;min-width:200px;padding:12px 20px;border:2px solid #e0e0e0;border-radius:25px;font-size:16px;}
        .search-input:focus{outline:none;border-color:#667eea;box-shadow:0 0 10px rgba(102,126,234,0.3);}
        select{flex:1;min-width:150px;padding:12px 20px;border:2px solid #e0e0e0;border-radius:25px;font-size:16px;background:white;cursor:pointer;}
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
        .count-badge{background:#ffeaa7;color:#6c5ce7;padding:3px 8px;border-radius:10px;font-weight:bold;}
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
        <h1>📚 CET4词汇学习表</h1>
        <div class="stats">
            <div class="stat-item"><div class="stat-number" id="total-words">${totalWords}</div><div class="stat-label">总词汇数</div></div>
            <div class="stat-item"><div class="stat-number" id="total-stories">${storyList.length}</div><div class="stat-label">故事数量</div></div>
            <div class="stat-item"><div class="stat-number" id="filtered-words">${totalWords}</div><div class="stat-label">筛选结果</div></div>
        </div>
        <div class="search-box">
            <div class="search-controls">
                <input type="text" class="search-input" id="searchInput" placeholder="搜索单词或中文释义...">
                <select id="sortFilter">
                    <option value="id">按序号排序</option>
                    <option value="word">按字母排序</option>
                </select>
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
    html+='<button class="page-btn" onclick="changePage(1)" '+(currentPage===1?'disabled':'')+'>首页</button>';
    html+='<button class="page-btn" onclick="changePage('+(currentPage-1)+')" '+(currentPage===1?'disabled':'')+'>上一页</button>';
    html+='<span class="page-info">第 '+currentPage+' / '+totalPages+' 页</span>';
    html+='<button class="page-btn" onclick="changePage('+(currentPage+1)+')" '+(currentPage===totalPages?'disabled':'')+'>下一页</button>';
    html+='<button class="page-btn" onclick="changePage('+totalPages+')" '+(currentPage===totalPages?'disabled':'')+'>末页</button>';

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
    if(!text) return '';
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

document.getElementById('sortFilter').addEventListener('change',function(e){
    const sortFilter=e.target.value;

    if(sortFilter==='word'){
        filteredData.sort((a,b)=>a.word.localeCompare(b.word));
    }else{
        filteredData.sort((a,b)=>a.id-b.id);
    }

    currentPage=1;
    renderVocabulary();
    renderPagination();
});

renderVocabulary();
renderPagination();
    </script>
</body>
</html>`;
}

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}