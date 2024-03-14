const puppeteer = require('puppeteer');
async function getHTML(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.evaluate(() => {
        const body = document.body;
    
        const range = document.createRange();
        range.selectNodeContents(body);
    
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    
        return selection.toString().replace(/\s+/g, ' ');
    });
    await browser.close();
    return content;
}
function scrapWebPage(url) {
    return getHTML(url)
        .then((content) => content)
        .catch((err) => {
            throw Error(err)
        })
}

module.exports = scrapWebPage