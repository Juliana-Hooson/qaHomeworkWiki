import {Google} from './googlePageWBase'
const fs= require('fs')
const google = new Google()

test('do a search', async ()=> {
    await google.navigate()
    await google.search('Mint chip Ice Cream')
    let text = await google.getResults()
    expect (text).toContain('Mint chip Ice Cream')
    await fs.writeFile(`${__dirname}/test.txt`, text, (e)=> {
        if (e)console.error(e)
        else console.log('Save Successful')
    })
    await fs.writeFile`{'$__dirname}/googleScreenshot.png`
    await google.driver.takeScreenshot(), "base64",
    (e) =>{

    
        if (e) console.error(e)
        else console.log('Save Successful')
    await google.driver.quit()
})
