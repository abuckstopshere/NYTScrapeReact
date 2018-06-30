const cheerio = require("cheerio");
const request = require("request");

const articleScraper = cb => {
  request("https://nytimes.com", (error, response, html) => {
    const results = [];
    const $ = cheerio.load(html);

    $("h2.story-heading").each((i, element) => {
      const title = $(element).text();

      const link = $(element)
        .children()
        .attr("href");

      const summary = $(element)
        .siblings("p.summary")
        .text();

      results.push({
        title: title,
        link: link,
        summary: summary
      });
    });
    cb(results);
  });
};

module.exports = articleScraper;
