import {Builder, Capabilities, By, until} from 'selenium-webdriver'
const chromedriver = require('chromedriver')
const driver = new Builder().withCapabilites(Capabilities.chrome()).build()

test("can it add a new employee", async () => {
    await driver .get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
    await driver.wait(until.elementLocated(By.name("employee1")))
    await driver.findElement(By.name("addEmployee")).click()
    await driver.findElement(By.name("employee11")).click()
    await driver.findElement(By.name("nameEntry")).click()
    await driver.findElement(By.name("nameEntry")).click()
    await driver.findElement(By.name("nameEntry")).clear()

}

