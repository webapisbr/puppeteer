async function run(){
    const puppeteer = require('puppeteer-extra')
    const StealthPlugin = require('puppeteer-extra-plugin-stealth')
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch({args: ['--no-sandbox'], headless: 'new'});
    page = await browser.newPage();
    await page.goto(`https://www.google.com`,{waitUntil: 'networkidle0'});
    await page.setViewport({width: 1280, height: 720});
    const results = await page.title();
    /*results = await page.evaluate(() => {
        return [...document.querySelectorAll('#rsyswpsdk > div > main > div > div.col__StyledCol-sc-1snw5v3-0.eOOMJy.middle-area__WrapperRight-sc-1pmjf60-0.bCjhSQ > div.grid__StyledGrid-sc-1man2hx-0.iFeuoP.src__GridItem-sc-122lblh-0.gGJHBq > div')].map(el => ({id: el.querySelector('a').href.trim().split('?')[0].split('/produto/')[1], name: el.querySelector('h3').innerText.trim(), url: el.querySelector('a').href.trim()}));
    });*/
    await browser.close();
    console.log(results);
}

run();