const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertHtmlToPdf() {
    const resultDir = 'cet4/result';
    const files = fs.readdirSync(resultDir);
    const htmlFiles = files.filter(f => f.endsWith('.html') && f !== 'temp.html');

    console.log(`找到 ${htmlFiles.length} 个HTML文件需要转换`);

    // 启动浏览器
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    let successCount = 0;
    let failCount = 0;

    // 转换每个文件
    for (const htmlFile of htmlFiles) {
        const htmlPath = path.join(resultDir, htmlFile);
        const pdfFile = htmlFile.replace('.html', '.pdf');
        const pdfPath = path.join(resultDir, pdfFile);

        try {
            console.log(`转换: ${htmlFile} -> ${pdfFile}`);

            const page = await browser.newPage();
            const fileUrl = `file://${path.resolve(htmlPath)}`;

            await page.goto(fileUrl, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            await page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '20px',
                    right: '20px',
                    bottom: '20px',
                    left: '20px'
                }
            });

            await page.close();
            successCount++;
            console.log(`✓ 成功转换: ${pdfFile}`);
        } catch (error) {
            failCount++;
            console.error(`✗ 转换失败: ${htmlFile}`, error.message);
        }
    }

    await browser.close();

    console.log(`\n转换完成！`);
    console.log(`成功: ${successCount} 个`);
    console.log(`失败: ${failCount} 个`);
}

convertHtmlToPdf().catch(console.error);