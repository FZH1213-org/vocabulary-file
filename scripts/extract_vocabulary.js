#!/usr/bin/env node
/**
 * 词汇汇总脚本
 * 从100个学习版HTML文件中提取词汇，生成Excel和JSON汇总表
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// 项目路径
const PROJECT_ROOT = path.join(__dirname, '..');
const RESULT_DIR = path.join(PROJECT_ROOT, 'result');
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'statistics');
const CACHE_FILE = path.join(__dirname, 'vocab_cache.json');

// 输出文件
const OUTPUT_JSON = path.join(OUTPUT_DIR, '词汇汇总表_扩充版.json');

// 加载缓存
function loadCache() {
    try {
        if (fs.existsSync(CACHE_FILE)) {
            const data = fs.readFileSync(CACHE_FILE, 'utf-8');
            return JSON.parse(data);
        }
    } catch (e) {
        console.log('加载缓存失败:', e.message);
    }
    return {};
}

// 保存缓存
function saveCache(cache) {
    try {
        fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
    } catch (e) {
        console.log('保存缓存失败:', e.message);
    }
}

// 从API获取音标和词性（异步）
async function getPhoneticAndPos(word, cache) {
    // 先检查缓存
    if (cache[word]) {
        return {
            phonetic: cache[word].phonetic || '',
            pos: cache[word].pos || ''
        };
    }

    return new Promise((resolve) => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    if (res.statusCode === 200) {
                        const entry = JSON.parse(data)[0];
                        const phonetic = entry.phonetic || '';

                        // 获取词性
                        const posList = [];
                        if (entry.meanings) {
                            entry.meanings.forEach(meaning => {
                                const pos = meaning.partOfSpeech;
                                if (pos && !posList.includes(pos)) {
                                    posList.push(pos);
                                }
                            });
                        }

                        const pos = posList.join(', ');

                        // 保存到缓存
                        cache[word] = { phonetic, pos };

                        resolve({ phonetic, pos });
                    } else {
                        resolve({ phonetic: '', pos: '' });
                    }
                } catch (e) {
                    resolve({ phonetic: '', pos: '' });
                }
            });
        }).on('error', (e) => {
            resolve({ phonetic: '', pos: '' });
        }).setTimeout(5000, () => {
            resolve({ phonetic: '', pos: '' });
        });
    });
}

// 从HTML文件中提取词汇
function extractVocabFromHtml(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    // 提取词汇标注: <span class="w">word(中文)📢</span>
    const regex = /<span class="w">([a-zA-Z\-]+)\(([^)]+)\)📢<\/span>/g;
    const vocabList = [];
    const vocabSentences = {};

    let match;
    while ((match = regex.exec(content)) !== null) {
        const word = match[1].toLowerCase();
        const meaning = match[2];

        vocabList.push({ word, meaning });
    }

    // 提取例句（包含词汇的句子）
    // 查找包含词汇标注的段落
    const paragraphRegex = /<p>(.*?)<\/p>/gs;
    let paraMatch;

    while ((paraMatch = paragraphRegex.exec(content)) !== null) {
        const paragraph = paraMatch[1];
        // 清理HTML标签和📢符号
        const cleanParagraph = paragraph
            .replace(/<[^>]+>/g, '')
            .replace(/📢/g, '')
            .trim();

        // 找出段落中的词汇
        const vocabRegex = /([a-zA-Z\-]+)\(([^)]+)\)/g;
        let vMatch;
        while ((vMatch = vocabRegex.exec(paragraph)) !== null) {
            const word = vMatch[1].toLowerCase();
            if (!vocabSentences[word] && cleanParagraph.length > 10) {
                // 截取前150字符作为例句
                vocabSentences[word] = cleanParagraph.length > 150
                    ? cleanParagraph.substring(0, 150) + '...'
                    : cleanParagraph;
            }
        }
    }

    return { vocabList, vocabSentences };
}

// 从文件名提取故事序号
function getStoryNumber(filename) {
    const match = filename.match(/^(\d+)_/);
    return match ? parseInt(match[1]) : 0;
}

// 延迟函数
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 主函数
async function main() {
    console.log('开始词汇汇总任务...\n');

    // 加载缓存
    const cache = loadCache();
    console.log(`已加载缓存，包含 ${Object.keys(cache).length} 个词汇\n`);

    // 获取所有学习版HTML文件并按序号排序
    const files = fs.readdirSync(RESULT_DIR)
        .filter(f => f.endsWith('_学习版.html'))
        .sort((a, b) => getStoryNumber(a) - getStoryNumber(b));

    console.log(`找到 ${files.length} 个学习版HTML文件\n`);

    // 统计数据结构
    const vocabStats = {};

    // 遍历所有文件
    for (let i = 0; i < files.length; i++) {
        const filename = files[i];
        const storyNum = getStoryNumber(filename);
        console.log(`处理 [${i+1}/100]: ${filename} (故事 ${storyNum})`);

        const filePath = path.join(RESULT_DIR, filename);
        const { vocabList, vocabSentences } = extractVocabFromHtml(filePath);

        vocabList.forEach(({ word, meaning }) => {
            if (!vocabStats[word]) {
                vocabStats[word] = {
                    count: 0,
                    firstStory: storyNum,
                    meaning: meaning,
                    sentence: vocabSentences[word] || ''
                };
            }
            vocabStats[word].count++;
        });
    }

    console.log(`\n共提取到 ${Object.keys(vocabStats).length} 个不同词汇\n`);

    // 按首次出现故事排序
    const sortedVocabs = Object.entries(vocabStats)
        .sort((a, b) => {
            if (a[1].firstStory !== b[1].firstStory) {
                return a[1].firstStory - b[1].firstStory;
            }
            return a[0].localeCompare(b[0]);
        });

    // 构建输出数据
    const outputData = [];
    console.log('获取音标和词性...\n');

    let savedCount = 0;
    for (let i = 0; i < sortedVocabs.length; i++) {
        const [word, stats] = sortedVocabs[i];
        console.log(`处理词汇 [${i+1}/${sortedVocabs.length}]: ${word}`);

        // 获取音标和词性
        const { phonetic, pos } = await getPhoneticAndPos(word, cache);

        // 每获取50个词汇保存一次缓存
        if (i > 0 && i % 50 === 0) {
            saveCache(cache);
            console.log(`  已保存缓存 (${i} 个词汇)\n`);
        }

        outputData.push({
            '序号': i + 1,
            '单词': word,
            '音标': phonetic,
            '词性（中文）': pos,
            '中文释义': stats.meaning,
            '出现次数': stats.count,
            '首次出现故事': stats.firstStory,
            '例句': stats.sentence
        });

        // 添加小延迟避免API限流
        if (i % 10 === 0) {
            await delay(100);
        }
    }

    // 保存缓存
    saveCache(cache);
    console.log(`\n缓存已保存，共 ${Object.keys(cache).length} 个词汇\n`);

    // 保存为JSON
    console.log(`保存JSON到: ${OUTPUT_JSON}`);
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(outputData, null, 2), 'utf-8');

    // 生成Excel CSV格式（用逗号分隔，Excel可以直接打开）
    const csvPath = path.join(OUTPUT_DIR, '词汇汇总表_扩充版.csv');
    console.log(`保存CSV到: ${csvPath}`);

    const headers = ['序号', '单词', '音标', '词性（中文）', '中文释义', '出现次数', '首次出现故事', '例句'];
    const csvRows = [headers.join('\t')];

    outputData.forEach(row => {
        const values = headers.map(h => {
            let val = row[h] || '';
            // 如果值包含制表符或换行符，用引号包裹
            if (typeof val === 'string' && (val.includes('\t') || val.includes('\n') || val.includes('"'))) {
                val = '"' + val.replace(/"/g, '""') + '"';
            }
            return val;
        });
        csvRows.push(values.join('\t'));
    });

    // 添加BOM以便Excel正确识别UTF-8
    const BOM = '﻿';
    fs.writeFileSync(csvPath, BOM + csvRows.join('\n'), 'utf-8');

    // 统计信息
    const totalWords = outputData.length;
    const wordsWithPhonetic = outputData.filter(w => w['音标']).length;
    const wordsWithPos = outputData.filter(w => w['词性（中文）']).length;

    console.log('\n' + '='.repeat(60));
    console.log('词汇汇总完成!');
    console.log(`总词汇数: ${totalWords}`);
    console.log(`有音标的词汇: ${wordsWithPhonetic} (${Math.round(wordsWithPhonetic/totalWords*100)}%)`);
    console.log(`有词性的词汇: ${wordsWithPos} (${Math.round(wordsWithPos/totalWords*100)}%)`);
    console.log('输出文件:');
    console.log(`  - ${OUTPUT_JSON}`);
    console.log(`  - ${csvPath}`);
    console.log('='.repeat(60));

    // 生成预览（前20个词汇）
    console.log('\n前20个词汇预览:');
    console.log('-'.repeat(60));
    outputData.slice(0, 20).forEach(word => {
        console.log(`${word['序号']}. ${word['单词']} [${word['音标'] || '无'}] (${word['词性（中文）'] || '无'}) - ${word['中文释义']}`);
    });
}

main().catch(console.error);