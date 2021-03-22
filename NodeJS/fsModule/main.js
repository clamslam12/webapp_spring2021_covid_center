const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");
//using file system module for routes
fs = require("fs");
//Routes
const routeMap = {
  "/": "views/index.html",
  "/contact": "views/contact.html",
  "/info": "views/info.html",
};

http
  .createServer((req, res) => {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html",
    });
    if (routeMap[req.url]) {
      fs.readFile(routeMap[req.url], (error, data) => {
        res.write(data);
        res.end();
      });
    } else {
      res.end("<h1>Cannot be found</h1>");
    }
  })
  .listen(port);
console.log(`The server has started listening on port ${port}`);
