const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertHtmlToPdf() {
    const resultDir = 'cet4/result';
    const files = fs.readdirSync(resultDir);
    const htmlFiles = files.filter(f => f.endsWith('.html') && f !== 'temp.html').sort();

    console.log(`找到 ${htmlFiles.length} 个HTML文件需要转换`);

    // 检查哪些文件已经转换过
    const convertedFiles = new Set(
        files.filter(f => f.endsWith('.pdf'))
            .map(f => f.replace('.pdf', '.html'))
    );

    const remainingFiles = htmlFiles.filter(f => !convertedFiles.has(f));
    console.log(`已完成: ${convertedFiles.size} 个`);
    console.log(`剩余: ${remainingFiles.length} 个`);

    if (remainingFiles.length === 0) {
        console.log('所有文件已转换完成！');
        return;
    }

    // 启动浏览器
    let browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    let successCount = 0;
    let failCount = 0;
    const failedFiles = [];

    // 每次处理10个文件，避免内存问题
    const batchSize = 10;

    for (let i = 0; i < remainingFiles.length; i++) {
        const htmlFile = remainingFiles[i];
        const htmlPath = path.join(resultDir, htmlFile);
        const pdfFile = htmlFile.replace('.html', '.pdf');
        const pdfPath = path.join(resultDir, pdfFile);

        try {
            process.stdout.write(`[${i + 1}/${remainingFiles.length}] 转换: ${htmlFile} ... `);

            const page = await browser.newPage();
            const fileUrl = `file://${path.resolve(htmlPath)}`;

            await page.goto(fileUrl, {
                waitUntil: 'networkidle0',
                timeout: 60000
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
            console.log('✓');
        } catch (error) {
            failCount++;
            failedFiles.push(htmlFile);
            console.log(`✗ (${error.message})`);
        }

        // 每处理10个文件关闭并重启浏览器，释放内存
        if ((i + 1) % batchSize === 0 && i + 1 < remainingFiles.length) {
            console.log(`\n--- 已处理 ${i + 1} 个文件，重启浏览器释放内存 ---\n`);
            await browser.close();
            await new Promise(resolve => setTimeout(resolve, 1000));
            const newBrowser = await puppeteer.launch({
                headless: 'new',
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
            });
            browser = newBrowser;
        }
    }

    await browser.close();

    console.log(`\n========== 转换完成 ==========`);
    console.log(`成功: ${successCount} 个`);
    console.log(`失败: ${failCount} 个`);

    if (failedFiles.length > 0) {
        console.log(`\n失败文件列表:`);
        failedFiles.forEach(f => console.log(`  - ${f}`));

        // 保存失败文件列表
        fs.writeFileSync(
            path.join(resultDir, 'failed_conversions.txt'),
            failedFiles.join('\n'),
            'utf8'
        );
    }
}

convertHtmlToPdf().catch(error => {
    console.error('脚本执行失败:', error);
    process.exit(1);
});