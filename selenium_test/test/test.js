const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

async function _test() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('Refactory', Key.RETURN);
    await driver.wait(until.titleIs('Refactory - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
};

_test()