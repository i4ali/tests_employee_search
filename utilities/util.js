
class Utilities {

    async jsclick(selector){
        const elem = await $(selector)
        await elem.waitForDisplayed({ timeout: 10000 })
        await elem.waitForEnabled({ timeout: 10000 })
        await browser.execute(async(elem) => {
            await elem.focus(); 
            await elem.click();
        }, elem)
        await browser.pause(2000)
    }

    async jsclick_given_element(elem){
        await elem.waitForDisplayed({ timeout: 10000 })
        await elem.waitForEnabled({ timeout: 10000 })
        await browser.execute(async(elem) => {
            await elem.focus(); 
            await elem.click();
        }, elem)
        await browser.pause(2000)
    }
}

module.exports = new Utilities();