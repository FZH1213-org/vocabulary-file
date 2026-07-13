#!/usr/bin/env node
/**
 * 提取所有故事中的词汇，统计并生成Excel表格
 */

const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// 结果目录
const RESULT_DIR = path.join(__dirname, '..', 'result');
const OUTPUT_DIR = path.join(__dirname, '..', 'statistics');

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * 从HTML文件中提取词汇信息
 */
function extractVocabFromHtml(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    // 提取词汇，格式: <span class="w">word(中文)📢</span>
    const vocabRegex = /<span class="w">([a-zA-Z\-]+)\((.+?)\)📢<\/span>/g;
    const vocabList = [];

    // 提取文本内容（用于获取例句）
    const textMatch = content.match(/<div class="text">(.*?)<\/div>/s);
    const textContent = textMatch ? textMatch[1] : '';

    let match;
    while ((match = vocabRegex.exec(content)) !== null) {
        const word = match[1].toLowerCase();
        const chinese = match[2];

        // 提取例句（包含该单词的句子）
        // 找到包含这个词的段落
        const paragraphRegex = new RegExp(`<p>[^<]*${match[0]}[^<]*</p>`, 'g');
        const paragraphMatch = content.match(paragraphRegex);

        let exampleSentence = '';
        if (paragraphMatch && paragraphMatch.length > 0) {
            // 提取段落中的纯文本
            const paragraphText = paragraphMatch[0]
                .replace(/<[^>]+>/g, '') // 移除HTML标签
                .replace(/[这么，那这][。！？]/g, match => match) // 分句
                .trim();

            // 找到包含单词的句子
            const sentences = paragraphText.split(/[。！？]/);
            for (const sentence of sentences) {
                if (sentence.toLowerCase().includes(word)) {
                    exampleSentence = sentence.trim();
                    break;
                }
            }
        }

        vocabList.push({
            word,
            chinese,
            example: exampleSentence
        });
    }

    return vocabList;
}

/**
 * 获取文件编号
 */
function getFileNumber(filename) {
    const match = filename.match(/^(\d+)_/);
    return match ? parseInt(match[1]) : 0;
}

/**
 * 主函数
 */
function main() {
    // 获取所有学习版HTML文件
    const files = fs.readdirSync(RESULT_DIR)
        .filter(f => f.endsWith('_学习版.html'))
        .sort((a, b) => getFileNumber(a) - getFileNumber(b));

    console.log(`找到 ${files.length} 个学习版文件`);

    // 存储所有词汇
    const allVocab = new Map();
    let position = 0;

    // 处理每个文件
    files.forEach((filename, index) => {
        const filePath = path.join(RESULT_DIR, filename);
        console.log(`处理文件 ${index + 1}/${files.length}: ${filename}`);

        const vocabList = extractVocabFromHtml(filePath);

        vocabList.forEach(vocabInfo => {
            const { word, chinese, example } = vocabInfo;

            if (!allVocab.has(word)) {
                allVocab.set(word, {
                    word,
                    chinese,
                    count: 0,
                    firstPosition: position,
                    example: example
                });
                position++;
            }

            const vocabData = allVocab.get(word);
            vocabData.count++;

            // 如果没有例句，使用这个例句
            if (!vocabData.example && example) {
                vocabData.example = example;
            }
        });
    });

    console.log(`\n共提取到 ${allVocab.size} 个不同的词汇`);

    // 准备Excel数据
    const excelData = [];
    const sortedVocab = Array.from(allVocab.values())
        .sort((a, b) => a.firstPosition - b.firstPosition);

    sortedVocab.forEach(vocab => {
        excelData.push({
            '单词': vocab.word,
            '音标': '',  // 需要单独获取
            '词性': '',  // 需要单独获取
            '中文释义': vocab.chinese,
            '出现次数': vocab.count,
            '例句': vocab.example
        });
    });

    // 生成Excel文件
    console.log('\n生成Excel文件...');
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    // 设置列宽
    worksheet['!cols'] = [
        { wch: 20 }, // 单词
        { wch: 20 }, // 音标
        { wch: 15 }, // 词性
        { wch: 30 }, // 中文释义
        { wch: 10 }, // 出现次数
        { wch: 60 }  // 例句
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '词汇汇总');

    const outputFile = path.join(OUTPUT_DIR, '词汇汇总表.xlsx');
    XLSX.writeFile(workbook, outputFile);

    console.log(`\n✅ 成功生成词汇汇总表: ${outputFile}`);
    console.log(`总共汇总了 ${excelData.length} 个词汇`);
    console.log('\n注意: 音标和词性信息需要后续补充，请使用词典API或手动补充');

    // 生成JSON文件（用于后续补充音标和词性）
    const jsonFile = path.join(OUTPUT_DIR, '词汇汇总表.json');
    fs.writeFileSync(jsonFile, JSON.stringify(excelData, null, 2), 'utf-8');
    console.log(`已生成JSON文件: ${jsonFile}`);
}

main();