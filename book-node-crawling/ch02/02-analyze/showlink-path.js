const client = require('cheerio-httpcli');
const urlType = require('url');

const url = "http://jpub.tistory.com";
let param = {};

client.fetch(url, param, function (err, $, res) {
 if(err) {
  console.log("error");
  return;
 }

 $("a").each(function () {
   const text = $(this).text();
   const href = $(this).attr('href');
   if (!href) return;
   var href2 = urlType.resolve(url, href);
   console.log(text + ":" + href);
   console.log("  => " + href2 + "\n");
 });
});
