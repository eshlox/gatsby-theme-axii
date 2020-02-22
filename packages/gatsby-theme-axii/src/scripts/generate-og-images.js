const chromium = require("chrome-aws-lambda");
const fs = require("fs-extra");
const path = require("path");

module.exports = async (posts, name, site, avatar) => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless
  });

  const page = await browser.newPage();

  let html = (
    await fs.readFile(path.resolve(__dirname, "./template.html"))
  ).toString();

  html = html.replace("./avatar.jpg", avatar);
  html = html.replace("name", name);
  html = html.replace("site", site);

  let font = await fs.readFile(
    path.resolve(__dirname, "./Roboto-Regular.ttf"),
    { encoding: "base64" }
  );
  html = html.replace(
    "'./Roboto-Regular.ttf'",
    `data:application/x-font-ttf;charset=utf-8;base64,${font}`
  );

  await page.setContent(html, {
    waitUntil: ["domcontentloaded"]
  });

  await page.evaluateHandle("document.fonts.ready");

  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: process.env.NETLIFY === "true" ? 1 : 2
  });

  for (const post of posts) {
    const imagePath = path.join("./public", post.slug);
    const output = path.join(imagePath, "card.jpg");

    fs.ensureDir(path.resolve(imagePath));

    await page.evaluate($post => {
      let dom = document.querySelector("#title");
      dom.innerHTML = $post.title;
    }, post);

    await page.screenshot({
      path: output,
      type: "jpeg",
      quality: 85,
      clip: { x: 0, y: 0, width: 1200, height: 630 }
    });
  }

  await browser.close();
};
