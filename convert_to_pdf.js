const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertHtmlToPdf() {
    const resultDir = path.join(__dirname, 'result');

    // 获取所有学习版 HTML 文件
    const files = fs.readdirSync(resultDir)
        .filter(file => file.endsWith('学习版.html'))
        .sort();

    console.log(`找到 ${files.length} 个学习版 HTML 文件`);

    // 启动浏览器
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    let successCount = 0;
    let failCount = 0;

    for (const file of files) {
        const htmlPath = path.join(resultDir, file);
        const pdfPath = path.join(resultDir, file.replace('.html', '.pdf'));

        try {
            console.log(`正在转换: ${file}`);

            const page = await browser.newPage();
            await page.goto(`file://${htmlPath}`, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // 生成 PDF
            await page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0'
                }
            });

            await page.close();
            successCount++;
            console.log(`✓ 成功: ${file} -> ${path.basename(pdfPath)}`);
        } catch (error) {
            failCount++;
            console.error(`✗ 失败: ${file} - ${error.message}`);
        }
    }

    await browser.close();

    console.log('\n转换完成！');
    console.log(`成功: ${successCount} 个`);
    console.log(`失败: ${failCount} 个`);
}

convertHtmlToPdf().catch(console.error);