#!/usr/bin/env node
/**
 * 改进版：提取所有故事中的词汇，统计并生成Excel表格（包含完整例句）
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

    // 提取所有段落
    const paragraphsRegex = /<p>([^<]*(?:<[^>]+>[^<]*)*)<\/p>/g;
    const paragraphs = [];
    let paraMatch;

    while ((paraMatch = paragraphsRegex.exec(content)) !== null) {
        const paraHtml = paraMatch[1];
        // 移除HTML标签，获取纯文本
        const paraText = paraHtml.replace(/<[^>]+>/g, '').trim();
        if (paraText) {
            paragraphs.push(paraText);
        }
    }

    // 提取词汇及其例句
    let match;
    while ((match = vocabRegex.exec(content)) !== null) {
        const word = match[1].toLowerCase();
        const chinese = match[2];
        const fullMatch = match[0];

        // 查找包含该词汇的段落
        let exampleSentence = '';
        for (const para of paragraphs) {
            if (para.includes(word) || para.includes(chinese)) {
                // 找到包含该词的句子
                // 按中文句号、英文句号、问号、感叹号分割
                const sentences = para.split(/[。.!?！？]/);

                for (const sentence of sentences) {
                    const trimmed = sentence.trim();
                    if (trimmed.toLowerCase().includes(word) || trimmed.includes(chinese)) {
                        // 清理句子中的📢标记
                        exampleSentence = trimmed.replace(/📢/g, '').trim();
                        if (exampleSentence.length > 10) {
                            break;
                        }
                    }
                }
                if (exampleSentence) break;
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
                    example: example,
                    allExamples: []
                });
                position++;
            }

            const vocabData = allVocab.get(word);
            vocabData.count++;

            // 收集所有例句
            if (example && example.length > 10) {
                vocabData.allExamples.push(example);
            }
        });
    });

    console.log(`\n共提取到 ${allVocab.size} 个不同的词汇`);

    // 准备Excel数据
    const excelData = [];
    const sortedVocab = Array.from(allVocab.values())
        .sort((a, b) => a.firstPosition - b.firstPosition);

    sortedVocab.forEach(vocab => {
        // 选择最佳例句（优先选择长度适中的）
        let bestExample = vocab.example;
        if (vocab.allExamples.length > 0) {
            // 选择长度在20-100之间的例句
            const goodExamples = vocab.allExamples.filter(ex => ex.length >= 20 && ex.length <= 100);
            if (goodExamples.length > 0) {
                bestExample = goodExamples[0];
            } else if (vocab.allExamples.length > 0) {
                bestExample = vocab.allExamples[0];
            }
        }

        excelData.push({
            '单词': vocab.word,
            '音标': '',  // 需要单独获取
            '词性': '',  // 需要单独获取
            '中文释义': vocab.chinese,
            '出现次数': vocab.count,
            '例句': bestExample
        });
    });

    // 生成JSON文件（用于后续补充音标和词性）
    const jsonFile = path.join(OUTPUT_DIR, '词汇汇总表.json');
    fs.writeFileSync(jsonFile, JSON.stringify(excelData, null, 2), 'utf-8');

    // 生成Excel文件
    console.log('\n生成Excel文件...');
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    // 设置列宽
    worksheet['!cols'] = [
        { wch: 20 }, // 单词
        { wch: 20 }, // 音标
        { wch: 20 }, // 词性
        { wch: 30 }, // 中文释义
        { wch: 10 }, // 出现次数
        { wch: 80 }  // 例句
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '词汇汇总');

    const outputFile = path.join(OUTPUT_DIR, '词汇汇总表.xlsx');
    XLSX.writeFile(workbook, outputFile);

    console.log(`\n✅ 成功生成词汇汇总表: ${outputFile}`);
    console.log(`总共汇总了 ${excelData.length} 个词汇`);

    // 统计有例句的词汇数量
    const withExamples = excelData.filter(v => v['例句'] && v['例句'].length > 0).length;
    console.log(`有例句的词汇: ${withExamples}/${excelData.length} (${(withExamples/excelData.length*100).toFixed(1)}%)`);
}

main();