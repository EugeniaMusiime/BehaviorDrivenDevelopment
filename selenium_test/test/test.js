//for future ref: https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/

//During the test, we'll search for Refactory via google before closing the page again
const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

async function _test() {
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser('chrome').build();


  //To fetch http://google.com from the browser with our code.
  await driver.get('http://www.google.com');

  //To send a search query by passing the value in searchString.
  await driver.findElement(By.name('q')).sendKeys('Refactory', Key.RETURN);

  //Verify the page title
  await driver.wait(until.titleIs('Refactory - Google Search'), 1000);

  //It is always a safe practice to quit the browser after execution
  await driver.quit();

};

_test()