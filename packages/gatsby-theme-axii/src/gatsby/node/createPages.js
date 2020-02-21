const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const template = (title, name, site, image) => `<html>
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        color: white;
        background-color: #303030;
        font-family: "Roboto", sans-serif;
        height: 630px;
        margin: 0;
        padding: 0;
        width: 1200px;
      }

      .card {
        display: flex;
        flex-direction: column;
        height: 630px;
        justify-content: space-between;
        width: 1200px;
      }

      .header {
        align-items: center;
        display: flex;
        flex-grow: 1;
        font-size: 48px;
        justify-content: center;
        padding: 15px;
        text-align: center;
        overflow: hidden;
      }

      .footer {
        align-items: flex-end;
        display: flex;
        flex-direction: row;
        font-size: 32px;
        justify-content: space-between;
        padding: 15px;
      }

      .author {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      img {
        border-radius: 10%;
        margin-right: 20px;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="header">
        ${title}
      </div>
      <div class="footer">
        <div class="author">
          <img src="${image}" />
          ${name}
        </div>
        ${site}
      </div>
    </div>
  </body>
</html>`;

const generateImage = async (browser, title, name, image, site, slug) => {
  const imagePath = path.join("./public", slug);
  const output = path.join(imagePath, "card.jpg");

  await fs.promises.mkdir(imagePath, {
    recursive: true
  });

  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630
    }
  });
  await page.setContent(template(title, name, site, image));
  const element = await page.$("body");
  await element.screenshot({ path: output, type: "jpeg", quality: 85 });
  await page.close();
};

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allArticle {
        edges {
          node {
            slug
            title
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            site
          }
        }
      }
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(base64Width: 100) {
            base64
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  const posts = result.data.allArticle.edges;
  const site = result.data.site.siteMetadata;
  const image = result.data.file.childImageSharp.fixed.base64;

  const browser = await chromium.launch({ dumpio: true });

  posts.forEach(async ({ node }, index, array) => {
    await generateImage(
      browser,
      node.title,
      site.author.name,
      image,
      site.author.site,
      node.slug
    );

    if (index === array.length - 1) {
      await browser.close();
    }
  });

  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(
        `${__dirname}/../../templates/post/component.tsx`
      ),

      context: { slug: node.slug }
    });
  });
};
