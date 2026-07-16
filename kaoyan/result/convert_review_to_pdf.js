const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function convertHtmlToPdf() {
    const baseDir = 'G:/vocabulary_file_fzh/vocabulary-file/kaoyan/result';

    // 获取所有故事文件夹
    const folders = fs.readdirSync(baseDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    console.log(`找到 ${folders.length} 个故事文件夹`);

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    let converted = 0;
    let skipped = 0;

    for (const folder of folders) {
        const folderPath = path.join(baseDir, folder);
        const files = fs.readdirSync(folderPath);

        // 找到复习版 HTML 文件
        const reviewHtml = files.find(f => f.endsWith('复习版.html'));

        if (!reviewHtml) {
            console.log(`跳过 ${folder}: 没有找到复习版 HTML`);
            continue;
        }

        const htmlPath = path.join(folderPath, reviewHtml);
        const pdfName = reviewHtml.replace('.html', '.pdf');
        const pdfPath = path.join(folderPath, pdfName);

        // 检查 PDF 是否已存在
        if (fs.existsSync(pdfPath)) {
            console.log(`跳过 ${pdfName}: 已存在`);
            skipped++;
            continue;
        }

        try {
            console.log(`转换: ${reviewHtml}`);

            const page = await browser.newPage();
            await page.goto(`file://${htmlPath}`, {
                waitUntil: 'networkidle0'
            });

            await page.pdf({
                path: pdfPath,
                format: 'A4',
                margin: {
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0'
                },
                printBackground: true
            });

            await page.close();
            converted++;
            console.log(`✓ 完成: ${pdfName}`);
        } catch (err) {
            console.error(`✗ 失败 ${reviewHtml}: ${err.message}`);
        }
    }

    await browser.close();

    console.log(`\n========== 完成 ==========`);
    console.log(`转换: ${converted} 个`);
    console.log(`跳过: ${skipped} 个`);
}

convertHtmlToPdf().catch(console.error);