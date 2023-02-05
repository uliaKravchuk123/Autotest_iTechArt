
describe('First test', () => {
    it('1. Зайти на google.by ', async () => {
        await browser.url('https://www.google.com/');
        await expect(browser).toHaveUrl('https://www.google.com/');
    })

    it('2. Выполнить поиск по iTechArt ', async () => {
        await $('input.gLFyf').setValue('iTechArt');
        await $$('input.gNO89b')[1].click();
        await expect(browser).toHaveTitleContaining('iTechArt');
    })

    it('3. Вывести в консоль количество найденных результатов.', async () => {
        console.log("Количество результатов - " + await $('div#result-stats').getText());
    })

    it('4. Проверить что каждый из результатов на первой странице релевантен запросу', async () => {
        const results = await $$('//*[contains(@class,"LC20lb")]')
        for (let res of results) {
            let obj = await res.getHTML();
            let resHtml = "";
            for (let key in obj) {
                resHtml += obj[key];
            }
            if(!resHtml.includes('iTechArt')) {
                console.log("Attention!!! At least one search result doesn't relevant to the request");
                console.log("Html with error - " + resHtml);
                throw error;

            }
        }
    })
})





// npx wdio run .\wdio.conf.js
// 1 Зайти на google.by
// 2 Выполнить поиск по iTechArt
// 3 Вывести в консоль количество найденных результатов.
// 4 Проверить что каждый из результатов на первой странице релевантен запросу.
