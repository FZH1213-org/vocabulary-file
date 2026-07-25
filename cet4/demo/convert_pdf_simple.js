const htmlPdf = require('html-pdf');
const fs = require('fs');
const path = require('path');

async function convertHtmlToPdf() {
    const resultDir = 'cet4/result';
    const files = fs.readdirSync(resultDir);
    const htmlFiles = files.filter(f => f.endsWith('.html') && f !== 'temp.html');

    console.log(`找到 ${htmlFiles.length} 个HTML文件需要转换`);

    let successCount = 0;
    let failCount = 0;

    for (const htmlFile of htmlFiles) {
        const htmlPath = path.join(resultDir, htmlFile);
        const pdfFile = htmlFile.replace('.html', '.pdf');
        const pdfPath = path.join(resultDir, pdfFile);

        try {
            console.log(`转换: ${htmlFile}`);

            const html = fs.readFileSync(htmlPath, 'utf8');

            const options = {
                format: 'A4',
                border: {
                    top: '20px',
                    right: '20px',
                    bottom: '20px',
                    left: '20px'
                },
                printBackground: true
            };

            await new Promise((resolve, reject) => {
                htmlPdf.create(html, options).toFile(pdfPath, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });

            successCount++;
            console.log(`✓ 成功: ${pdfFile}`);
        } catch (error) {
            failCount++;
            console.error(`✗ 失败: ${htmlFile}`, error.message);
        }
    }

    console.log(`\n转换完成！`);
    console.log(`成功: ${successCount} 个`);
    console.log(`失败: ${failCount} 个`);
}

convertHtmlToPdf().catch(console.error);