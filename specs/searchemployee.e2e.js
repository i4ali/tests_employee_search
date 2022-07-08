const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');


describe('search for employee', async () => {
    
    // check for employee using valid first name. should return complete name
    it('using valid firstname', async() => {

        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login(<username>, <password>);
        await HomePage.search_employee(<firstname>);
        await expect(await HomePage.result).toHaveText(<firstname and lastname>);
    });

    // check for employee using valid last name. should return complete name
    it('using valid lastname', async() => {

        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login(<username>, <password>);
        await HomePage.search_employee(<lastname>);
        await expect(await HomePage.result).toHaveText(<firstname and lastname>);
    });

    // check for employee using valid first and last name. should return complete name
    it('using valid firstname and lastname', async() => {

        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login(<username>, <password>);
        await HomePage.search_employee(<firstname and lastname>);
        await expect(await HomePage.result).toHaveText(<firstname and lastname>);   

    });

    // check for employee using invalid firstname. should return error message
    it('using invalid firstname', async() => {
        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login(<username>, <password>);
        await HomePage.search_employee(<firstname>);
        await expect(await HomePage.result).toHaveText("there is no result"));
    });

    // check for employee using invalid firstname and lastname. should return error message
    it('using invalid firstname and lastname', async() => {
        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login(<username>, <password>);
        await HomePage.search_employee(<firstname and lastname>);
        await expect(await HomePage.result).toHaveText("there is no result"));
    });

    // check for employee using invalid lastname. should return error message
    it('using invalid lastname', async() => {
        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login(<username>, <password>);
        await HomePage.search_employee(<lastname>);
        await expect(await HomePage.result).toHaveText("there is no result"));
    });

    // check for employee by typing less than three characters. shouldnt return anything
    it('using less than three characters of valid firstname', async() => {
        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login(<username>, <password>);
        await HomePage.search_employee(<**>);
        await assert.isFalse(expect(await HomePage.result).toHaveText(<firstname and lastname>)));
    });

    // check for employee by typing three characters. shouldnt return employee name
    it('using three characters of valid firstname', async() => {
        await browser.maximizeWindow();
        await LoginPage.open();
        await LoginPage.login(<username>, <password>);
        await HomePage.search_employee(<***>);
        await expect(await HomePage.result).toHaveText(<firstname and lastname>));
    });

});

