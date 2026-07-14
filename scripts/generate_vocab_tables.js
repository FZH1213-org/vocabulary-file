#!/usr/bin/env node
/**
 * 批量生成词汇Excel表格
 * 为每个故事生成独立的词汇表，按出现顺序排列
 */

const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// 配置
const BASE_DIR = path.join(__dirname, '..');
const RESULT_DIR = path.join(BASE_DIR, 'result');
const OUTPUT_DIR = path.join(BASE_DIR, 'vocab_tables');
const CACHE_FILE = path.join(BASE_DIR, 'scripts', 'vocab_cache.json');
const SUMMARY_FILE = path.join(BASE_DIR, 'statistics', '词汇汇总表.json');

/**
 * 加载词汇缓存（音标和词性）
 */
function loadCache() {
    try {
        const data = fs.readFileSync(CACHE_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('加载缓存失败:', err.message);
        return {};
    }
}

/**
 * 加载词汇汇总表（例句）
 */
function loadSummary() {
    try {
        const data = fs.readFileSync(SUMMARY_FILE, 'utf-8');
        const summary = JSON.parse(data);
        const exampleMap = {};
        summary.forEach(item => {
            if (item['单词']) {
                exampleMap[item['单词']] = item['例句'] || '';
            }
        });
        return exampleMap;
    } catch (err) {
        console.error('加载汇总表失败:', err.message);
        return {};
    }
}

/**
 * 从HTML文件提取词汇（按出现顺序）
 */
function extractVocabFromHTML(htmlPath) {
    const content = fs.readFileSync(htmlPath, 'utf-8');
    const pattern = /<span class="w">([a-zA-Z\-]+)\(([^)]+)\)📢<\/span>/g;

    const vocabList = [];
    const seenWords = new Set();
    let match;

    while ((match = pattern.exec(content)) !== null) {
        const word = match[1];
        const meaning = match[2];

        if (!seenWords.has(word)) {
            seenWords.add(word);
            vocabList.push({ word, meaning });
        }
    }

    return vocabList;
}

/**
 * 创建词汇Excel表格
 */
function createVocabExcel(outputPath, vocabList, cache, exampleMap) {
    const workbook = XLSX.utils.book_new();

    // 准备数据
    const data = [
        ['序号', '单词', '音标', '词性', '中文释义', '例句']
    ];

    vocabList.forEach((item, index) => {
        const cacheInfo = cache[item.word] || {};
        const phonetic = cacheInfo.phonetic || '';
        const pos = cacheInfo.pos || '';
        const example = exampleMap[item.word] || '';

        data.push([
            index + 1,
            item.word,
            phonetic,
            pos,
            item.meaning,
            example
        ]);
    });

    // 创建工作表
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    // 设置列宽
    worksheet['!cols'] = [
        { wch: 8 },   // 序号
        { wch: 18 },  // 单词
        { wch: 18 },  // 音标
        { wch: 18 },  // 词性
        { wch: 18 },  // 中文释义
        { wch: 60 }   // 例句
    ];

    // 添加工作表到工作簿
    XLSX.utils.book_append_sheet(workbook, worksheet, '词汇表');

    // 写入文件
    XLSX.writeFile(workbook, outputPath);
}

/**
 * 解析文件名
 */
function parseFilename(filename) {
    // 01_豪门契约_总裁的替身新娘_契约的开始_学习版.html
    const base = filename.replace('_学习版.html', '');
    const parts = base.split('_');

    if (parts.length >= 2) {
        const number = parts[0];
        const storyName = parts.slice(1).join('_');
        return { number, storyName };
    }

    return { number: null, storyName: base };
}

/**
 * 主函数
 */
function main() {
    console.log('============================================================');
    console.log('为每个故事生成词汇Excel表格');
    console.log('============================================================');

    // 创建输出目录
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // 加载缓存数据
    console.log('\n加载词汇缓存...');
    const cache = loadCache();
    console.log(`已加载 ${Object.keys(cache).length} 个词汇的音标和词性`);

    console.log('\n加载词汇汇总表...');
    const exampleMap = loadSummary();
    console.log(`已加载 ${Object.keys(exampleMap).length} 个词汇的例句`);

    // 获取所有HTML文件
    const files = fs.readdirSync(RESULT_DIR)
        .filter(f => f.endsWith('_学习版.html'))
        .sort();

    console.log(`\n找到 ${files.length} 个学习版HTML文件`);
    console.log('\n开始处理...\n');

    let successCount = 0;
    let totalVocab = 0;

    files.forEach((filename, index) => {
        try {
            const { number, storyName } = parseFilename(filename);

            if (!number) {
                console.log(`跳过文件（无法解析编号）: ${filename}`);
                return;
            }

            const htmlPath = path.join(RESULT_DIR, filename);
            const vocabList = extractVocabFromHTML(htmlPath);

            if (vocabList.length === 0) {
                console.log(`跳过文件（无词汇）: ${filename}`);
                return;
            }

            const outputFilename = `${number}_${storyName}_词汇表.xlsx`;
            const outputPath = path.join(OUTPUT_DIR, outputFilename);

            createVocabExcel(outputPath, vocabList, cache, exampleMap);

            successCount++;
            totalVocab += vocabList.length;
            console.log(`✓ ${filename} -> ${outputFilename} (${vocabList.length} 个词汇)`);

        } catch (err) {
            console.error(`✗ 处理失败: ${filename}`);
            console.error(`  错误: ${err.message}`);
        }
    });

    console.log('\n============================================================');
    console.log('生成完成！');
    console.log(`成功: ${successCount}/${files.length} 个文件`);
    console.log(`总词汇数: ${totalVocab} 个`);
    console.log(`输出目录: ${OUTPUT_DIR}`);
    console.log('============================================================');
}

// 运行主函数
main();