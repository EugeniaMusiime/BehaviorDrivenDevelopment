//During the test, we'll add a new todo before clsoing the page again
const {Builder, By, Key, until} = require('selenium-webdriver');
async function example() {

    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to page
//To navigate to our page we use driver which we stored as a variable
await driver.get("https://lambdatest.github.io/sample-todo-app/")


    //Fo the purpose of the test, add a todo
await driver.findElement(By.id('sampletodotext')).sendKeys('Selenium is cool',Key.RETURN)


    //Close the program
//await driver.quit();


  };

  example()