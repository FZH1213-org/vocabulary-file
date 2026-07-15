const fs = require('fs');
const path = require('path');

// 读取CSV文件
const csvPath = path.join(__dirname, '所有故事词汇汇总_按首次出现排序.csv');
const content = fs.readFileSync(csvPath, 'utf-8');
const lines = content.split('\n');

// 解析数据
const vocabularyData = [];
let foundHeader = false;

for (const line of lines) {
    if (line.includes('序号,词汇')) {
        foundHeader = true;
        continue;
    }

    if (!foundHeader || line.trim() === '' || line.includes('统计')) {
        continue;
    }

    // 解析CSV行（考虑引号）
    const parts = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            parts.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    parts.push(current.trim());

    if (parts.length >= 6) {
        const id = parseInt(parts[0]);
        if (!isNaN(id) && id > 0) {
            vocabularyData.push({
                id: id,
                word: parts[1],
                translation: parts[2],
                storyName: parts[4],
                count: parseInt(parts[5])
            });
        }
    }
}

console.log(`解析到 ${vocabularyData.length} 个词汇`);

// 生成JavaScript数组
const jsArray = vocabularyData.map(v =>
    `{id:${v.id},word:"${v.word}",translation:"${v.translation}",storyName:"${v.storyName}",count:${v.count}}`
).join(',\n');

// 生成完整HTML
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>故事词汇学习表 - ${vocabularyData.length}个词汇</title>
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
        .vocab-example{background:#f9f9f9;padding:10px;border-radius:8px;margin-bottom:10px;}
        .example-en{color:#333;font-style:italic;margin-bottom:5px;}
        .example-cn{color:#666;font-size:0.9em;}
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
        <h1>📚 故事词汇学习表</h1>
        <div class="stats">
            <div class="stat-item"><div class="stat-number" id="total-words">${vocabularyData.length}</div><div class="stat-label">总词汇数</div></div>
            <div class="stat-item"><div class="stat-number" id="total-stories">0</div><div class="stat-label">故事数量</div></div>
            <div class="stat-item"><div class="stat-number" id="filtered-words">${vocabularyData.length}</div><div class="stat-label">筛选结果</div></div>
        </div>
        <div class="search-box">
            <div class="search-controls">
                <input type="text" class="search-input" id="searchInput" placeholder="搜索单词或中文释义...">
                <select id="storyFilter"><option value="">所有故事</option></select>
                <select id="sortFilter"><option value="id">按序号排序</option><option value="count">按出现次数排序</option><option value="word">按字母排序</option></select>
            </div>
        </div>
        <div class="vocabulary-list" id="vocabularyList"></div>
        <div class="pagination" id="pagination"></div>
    </div>
    <script>
const vocabularyData=[${jsArray}];
let currentPage=1;const itemsPerPage=50;let filteredData=[];
function getPOS(w,t){const s=w.toLowerCase();if(s.endsWith('tion')||s.endsWith('sion')||s.endsWith('ment')||s.endsWith('ness')||s.endsWith('ity')||s.endsWith('ance')||s.endsWith('ence'))return'n.';if(s.endsWith('ly'))return'adv.';if(s.endsWith('ful')||s.endsWith('less')||s.endsWith('ous')||s.endsWith('ive')||s.endsWith('able')||s.endsWith('al'))return'adj.';if(s.endsWith('ize')||s.endsWith('ify')||s.endsWith('ate'))return'v.';if(t.includes('的'))return'adj.';return'v./n.';}
function getPhonetic(w){return'/'+w+'/';}
function genEx(w){return{en:w.charAt(0).toUpperCase()+w.slice(1)+' is important.',cn:w+'很重要。'};}
function init(){vocabularyData.forEach(v=>{v.pos=getPOS(v.word,v.translation);v.phonetic=getPhonetic(v.word);v.example=genEx(v.word);});filteredData=[...vocabularyData];initFilter();render();document.getElementById('searchInput').addEventListener('input',debounce(search,300));document.getElementById('storyFilter').addEventListener('change',filter);document.getElementById('sortFilter').addEventListener('change',sort);}
function debounce(f,w){let t;return function(...a){clearTimeout(t);t=setTimeout(()=>f(...a),w);};}
function initFilter(){const s=document.getElementById('storyFilter');const stories=[...new Set(vocabularyData.map(v=>v.storyName))];stories.forEach(n=>{const o=document.createElement('option');o.value=n;o.textContent=n;s.appendChild(o);});document.getElementById('total-stories').textContent=stories.length;}
function render(){const c=document.getElementById('vocabularyList');c.innerHTML='';const start=(currentPage-1)*itemsPerPage;const data=filteredData.slice(start,start+itemsPerPage);if(!data.length){c.innerHTML='<div class="no-results">未找到匹配的词汇 😢</div>';document.getElementById('pagination').innerHTML='';return;}
data.forEach(v=>{const card=document.createElement('div');card.className='vocab-card';card.innerHTML='<div class="vocab-number">#'+v.id+'</div><div class="vocab-word">'+v.word+'</div><div class="vocab-phonetic"><span class="phonetic-text">'+v.phonetic+'</span><button class="speak-btn" onclick="speak(\\''+v.word+'\\')">🔊 朗读</button></div><div class="vocab-pos"><div class="pos-label">'+v.pos+'</div><div class="pos-meaning">'+v.translation+'</div></div><div class="vocab-example"><div class="example-en">'+v.example.en+'</div><div class="example-cn">'+v.example.cn+'</div></div><div class="vocab-story"><span class="story-name">'+v.storyName+'</span><span class="count-badge">出现 '+v.count+' 次</span></div>';c.appendChild(card);});paginate();}
function paginate(){const total=Math.ceil(filteredData.length/itemsPerPage);const p=document.getElementById('pagination');if(total<=1){p.innerHTML='<span class="page-info">共 '+filteredData.length+' 个词汇</span>';return;}
p.innerHTML='<button class="page-btn" onclick="go(1)" '+currentPage===1?'disabled':''+'>首页</button><button class="page-btn" onclick="go('+(currentPage-1)+')" '+(currentPage===1?'disabled':'')+'>上一页</button><span class="page-info">第 '+currentPage+'/'+total+' 页</span><button class="page-btn" onclick="go('+(currentPage+1)+')" '+(currentPage===total?'disabled':'')+'>下一页</button><button class="page-btn" onclick="go('+total+')" '+(currentPage===total?'disabled':'')+'>尾页</button>';}
function go(p){const max=Math.ceil(filteredData.length/itemsPerPage);if(p<1||p>max)return;currentPage=p;render();scrollTo({top:0,behavior:'smooth'});}
function search(e){const q=e.target.value.toLowerCase().trim();filt(q,document.getElementById('storyFilter').value);currentPage=1;render();}
function filter(e){const s=e.target.value;const q=document.getElementById('searchInput').value.toLowerCase().trim();filt(q,s);currentPage=1;render();}
function sort(e){const by=e.target.value;filteredData.sort((a,b)=>{if(by==='id')return a.id-b.id;if(by==='count')return b.count-a.count;if(by==='word')return a.word.localeCompare(b.word);return 0;});currentPage=1;render();}
function filt(q,s){filteredData=vocabularyData.filter(v=>{const mq=!q||v.word.toLowerCase().includes(q)||v.translation.includes(q);const ms=!s||v.storyName===s;return mq&&ms;});document.getElementById('filtered-words').textContent=filteredData.length;}
function speak(w){if('speechSynthesis' in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(w);u.lang='en-US';u.rate=0.8;speechSynthesis.speak(u);}else{alert('您的浏览器不支持语音朗读 😔');}}
window.addEventListener('load',init);
    </script>
</body>
</html>`;

// 保存HTML文件
const outputPath = path.join(__dirname, '词汇学习表_完整版.html');
fs.writeFileSync(outputPath, html, 'utf-8');
console.log(`HTML文件已生成: ${outputPath}`);
console.log(`文件大小: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);