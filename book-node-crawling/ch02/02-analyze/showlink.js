const client = require('cheerio-httpcli');

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
   console.log(text + ":" + href);
 });
});
