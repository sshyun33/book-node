const client = require('cheerio-httpcli');
const urlType = require('url');

const url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
let param = {};

client.fetch(url, param, function (err, $, res) {
 if(err) {
  console.log("error");
  return;
 }

 $("img").each(function () {
   let src = $(this).attr('src');
   src = urlType.resolve(url, src);
   console.log(src);
 });
});
