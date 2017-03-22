download(
    "http://jpub.tistory.com/",
    "result/spring.html",
    function () {
      console.log("ok, spring.");
    });

download(
    "http://jpub.tistory.com/537",
    "result/angular.html",
    function () {
      console.log("ok, angular.");
    });

function download(url, savepath, callback) {
  const http = require('http');
  const fs = require('fs');
  const outfile = fs.createWriteStream(savepath);

  http.get(url, function (res) {
    res.pipe(outfile);
    res.on('end', function () {
      outfile.close();
      console.log("ok");
    });
  });

}

