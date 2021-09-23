//During the test, we'll add a new todo before clsoing the page again
const {Builder,By,Key} = require('selenium-webdriver');
require("chromedriver");

async function todo() {

    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to page
    //To navigate to our page we use driver which we stored as a variable
    await driver.get("https://lambdatest.github.io/sample-todo-app/")


    //For the purpose of the test, add a todo
    await driver.findElement(By.id('sampletodotext')).sendKeys('Collines Mukasa, Eugenia Musiimemaria and Peter Wamanga', Key.RETURN)

};

todo()