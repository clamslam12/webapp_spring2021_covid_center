const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const app = http.createServer((request, response) => {
  //loggin http request info
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers);

  console.log("received an incoming request!");
  //response header
  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });
  //response body
  let responseBody = /*html*/ `<h1>Hello World!</h1>`;
  response.write(responseBody);
  response.end();
  console.log(`Sent a response: ${responseBody}`);
});

//starting server
//this synchronous code runs first, then the async code, http.createServer, runs after
app.listen(port);
console.log(`The server has started and is listening on port: ${port}`);
