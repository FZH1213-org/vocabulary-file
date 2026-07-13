#!/usr/bin/env node
/**
 * 补充词汇的音标和词性信息
 * 使用免费词典API: https://api.dictionaryapi.dev/api/v2/entries/en/
 */

const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const https = require('https');

const JSON_FILE = path.join(__dirname, '..', 'statistics', '词汇汇总表.json');
const OUTPUT_FILE = path.join(__dirname, '..', 'statistics', '词汇汇总表_完整.xlsx');
const OUTPUT_JSON = path.join(__dirname, '..', 'statistics', '词汇汇总表_完整.json');

/**
 * 从免费词典API获取单词信息
 */
async function fetchWordInfo(word) {
    return new Promise((resolve, reject) => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    if (res.statusCode === 200) {
                        const jsonData = JSON.parse(data);
                        if (jsonData && jsonData.length > 0) {
                            const entry = jsonData[0];

                            // 提取音标
                            let phonetic = '';
                            if (entry.phonetic) {
                                phonetic = entry.phonetic;
                            } else if (entry.phonetics && entry.phonetics.length > 0) {
                                const phoneticEntry = entry.phonetics.find(p => p.text) || entry.phonetics[0];
                                if (phoneticEntry.text) {
                                    phonetic = phoneticEntry.text;
                                }
                            }

                            // 提取词性
                            const posSet = new Set();
                            if (entry.meanings) {
                                entry.meanings.forEach(meaning => {
                                    if (meaning.partOfSpeech) {
                                        // 转换为中文词性
                                        const posMap = {
                                            'noun': '名词',
                                            'verb': '动词',
                                            'adjective': '形容词',
                                            'adverb': '副词',
                                            'pronoun': '代词',
                                            'preposition': '介词',
                                            'conjunction': '连词',
                                            'interjection': '感叹词',
                                            'determiner': '限定词',
                                            'exclamation': '感叹词'
                                        };
                                        const pos = posMap[meaning.partOfSpeech] || meaning.partOfSpeech;
                                        posSet.add(pos);
                                    }
                                });
                            }

                            resolve({
                                phonetic: phonetic,
                                pos: Array.from(posSet).join(',')
                            });
                        }
                    } else {
                        resolve({ phonetic: '', pos: '' });
                    }
                } catch (error) {
                    resolve({ phonetic: '', pos: '' });
                }
            });
        }).on('error', (error) => {
            resolve({ phonetic: '', pos: '' });
        });
    });
}

/**
 * 延迟函数
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 主函数
 */
async function main() {
    // 读取JSON文件
    console.log('读取词汇数据...');
    const vocabData = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'));

    console.log(`共 ${vocabData.length} 个词汇需要处理`);

    // 分批处理，避免请求过于频繁
    const batchSize = 10;
    const total = vocabData.length;

    for (let i = 0; i < total; i += batchSize) {
        const batch = vocabData.slice(i, Math.min(i + batchSize, total));

        console.log(`处理进度: ${i + 1}-${Math.min(i + batchSize, total)}/${total}`);

        // 并发处理一批词汇
        const promises = batch.map(async (vocab, index) => {
            // 只处理没有音标和词性的词汇
            if (!vocab['音标'] || !vocab['词性']) {
                const info = await fetchWordInfo(vocab['单词']);
                vocab['音标'] = info.phonetic;
                vocab['词性'] = info.pos;

                // 添加延迟避免请求过于频繁
                await delay(100 * (index + 1));
            }
            return vocab;
        });

        await Promise.all(promises);

        // 批次间延迟
        if (i + batchSize < total) {
            console.log('等待2秒...');
            await delay(2000);
        }
    }

    // 保存更新后的JSON
    console.log('\n保存JSON文件...');
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(vocabData, null, 2), 'utf-8');

    // 生成Excel文件
    console.log('生成Excel文件...');
    const worksheet = XLSX.utils.json_to_sheet(vocabData);

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

    XLSX.writeFile(workbook, OUTPUT_FILE);

    console.log(`\n✅ 成功生成完整词汇汇总表: ${OUTPUT_FILE}`);
    console.log(`✅ JSON文件: ${OUTPUT_JSON}`);

    // 统计补充情况
    const withPhonetic = vocabData.filter(v => v['音标']).length;
    const withPos = vocabData.filter(v => v['词性']).length;

    console.log(`\n统计信息:`);
    console.log(`- 有音标的词汇: ${withPhonetic}/${total} (${(withPhonetic/total*100).toFixed(1)}%)`);
    console.log(`- 有词性的词汇: ${withPos}/${total} (${(withPos/total*100).toFixed(1)}%)`);
}

main().catch(console.error);