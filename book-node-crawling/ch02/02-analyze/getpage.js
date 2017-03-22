const client = require('cheerio-httpcli');

const url = "http://jpub.tistory.com";
let param = {};

client.fetch(url, param, function (err, $, res) {
  if (err) {
    console.log("Error:", err);
    return;
  }

  const body = $.html();
  console.log(body);
});
