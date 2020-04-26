const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  // Open page.
  await page.goto('https://skribbl.io');
  let result = await page.$('.form-control');

  const next = await result.evaluate(result => result.value = "patrick");
  await page.focus('.form-control');

  await page.keyboard.press('Enter')

     let form= await page.$('.form-control');
      console.log(form)
  await form.evaluate(form => form.value = "salmon");
  await page.focus('.form-control');

  await page.keyboard.press('Enter')

  //  page.press('enter');
//  let submit = await page.$('')
 // console.log(next)

  // Keep the browser open.
  // browser.close();
})();
