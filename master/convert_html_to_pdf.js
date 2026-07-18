const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertHtmlToPdf() {
    const resultDir = path.join(__dirname, 'result');

    // 获取所有 HTML 文件
    const files = fs.readdirSync(resultDir)
        .filter(file => file.endsWith('.html'));

    console.log(`找到 ${files.length} 个 HTML 文件`);

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    let success = 0;
    let failed = 0;

    for (const file of files) {
        const htmlPath = path.join(resultDir, file);
        const pdfPath = htmlPath.replace('.html', '.pdf');

        // 如果 PDF 已存在，跳过
        if (fs.existsSync(pdfPath)) {
            console.log(`跳过 (已存在): ${file}`);
            continue;
        }

        try {
            console.log(`转换中: ${file}`);
            const page = await browser.newPage();

            // 读取本地 HTML 文件
            const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
            await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

            await page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '20px',
                    bottom: '20px',
                    left: '20px',
                    right: '20px'
                }
            });

            await page.close();
            success++;
            console.log(`完成: ${file}`);
        } catch (err) {
            failed++;
            console.error(`失败: ${file}`, err.message);
        }
    }

    await browser.close();
    console.log(`\n转换完成: 成功 ${success} 个, 失败 ${failed} 个`);
}

convertHtmlToPdf().catch(console.error);