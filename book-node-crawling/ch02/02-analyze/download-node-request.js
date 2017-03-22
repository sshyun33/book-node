const request = require('request');
const fs = require('fs');

const url = "http://jpub.tistory.com/";
const savepath = "result/test.html";

request(url).pipe(fs.createWriteStream(savepath));



