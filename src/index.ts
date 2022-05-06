import { run } from "src/db"

run()

// import puppeteer from "puppeteer-core"

// const browser = await puppeteer.launch({
//   channel: "chrome",
//   headless: false,
//   slowMo: 100,
// })
// const page = await browser.newPage()
// await page.goto("https://www.google.com/")

// await page.type(`body div form input`, "hello")
// await page.keyboard.press("Enter")
// await page.client().send("Input.synthesizeScrollGesture", {
//   repeatCount: 3,
//   repeatDelayMs: 1000,
//   x: 0,
//   y: 0,
//   yDistance: -500,
// })

// await page.close()
