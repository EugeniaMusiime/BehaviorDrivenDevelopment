//fro future ref: https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/

const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function printTitle(){
 
       var searchString = "Automation testing with Selenium";
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("http://google.com");
            
        //To send a search query by passing the value in searchString.
        await driver.findElement(By.name("q")).sendKeys(searchString,Key.ENTER);
 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);
 
        //It is always a safe practice to quit the browser after execution
        await driver.quit();
 
}
 
printTitle()