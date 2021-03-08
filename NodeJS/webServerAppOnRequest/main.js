const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const app = http.createServer();

console.log("created server");

// As noted, the server fires the code in a callback function when a request event is triggered.

// Upon receiving a request, the server passes a request and response object to a callback function.

// Request includes all information sent by the client, and response is the object that will contain the results and will be sent back to the client.
app.on("request", (request, response) => {
  console.log(`Method: ${getJSONString(request.method)}`);
  console.log(`URL: ${getJSONString(request.url)}`);
  console.log(`Headers: ${getJSONString(request.headers)}`);

  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });

  let responseBody = /*html*/ `<h1>Hello World!</h1>`;
  if (request.url == "/contact") {
    responseBody = /*html*/ `<h1>This is the contact page</h1>`;
  }
  response.end(`Response ended with: ${responseBody}`);
});

//starting server
//this synchronous code runs first, then the async code, app.on(), runs after
app.listen(port);
console.log(`The server has started and is listening on port: ${port}`);

//Because some objects in the request can have within them other nested objects, convert the objects to more-readable strings by using JSON.stringify
const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2);
};
