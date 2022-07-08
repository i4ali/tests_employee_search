const Page = require('./page');
const utilities = require('../../utilities/util');

class HomePage extends Page {

    searchbox_xpath = "//input[text()='?']"

    async search_employee(search_text){
        $(this.searchbox_xpath).setValue(search_text);
    }

}

module.exports = new HomePage();