const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const app = http.createServer();

//Routes - using hash map
const routeResponseMap = {
  "/info": "<h1>Info page</h1>",
  "/contact": "<h1>Contact Us</h1>",
  "/about": "<h1>Learn more about us</h1>",
  "/hello": "<h1>Say hello by emailing us here</h1>",
  "/error": "<h1>Sorry. The page you are looking for is not here</h1>",
  "/": "Welcome to the default main page",
};

console.log("created server");

// As noted, the server fires the code in a callback function when a request event is triggered.

// Upon receiving a request, the server passes a request and response object to a callback function.

// Request includes all information sent by the client, and response is the object that will contain the results and will be sent back to the client.

//Every time a request is made to the server, you execute the code in the callback function.
app.on("request", (request, response) => {
  // POST request
  //
  // If someone makes a POST request to the server (trying to send data to the server), the content of that POST lives in the request’s body.
  // Because a server never knows how much data is being sent, posted data comes into the http server via chunks.
  // To collect all the posted data with a server, you need to listen for each piece of data received and arrange the data yourself.

  // The request listens for a specific data event.
  // req.on(“data”) is triggered when data is received for a specific request.
  // You need to define a new array, body, outside this event handler and sequentially add the data chunks to it as they arrive at the server.

  // An array is created and referred to as body, and every time data from the request is received, you process it in another callback function.
  let body = [];
  request.on("data", (bodyData) => {
    //this callback executes after the parent callback (request, response){} is done executing
    body.push(bodyData); //  The received data is added to the body array.
  });

  // When the transmission of data is complete, you execute code in a third callback function.
  // The body array is turned into a String of text, and the request’s contents are logged to your console.
  request.on("end", () => {
    //this callback executes after the parent callback (request, response){} is done executing
    body = Buffer.concat(body).toString();
    console.log(`Request Body Contents: ${body}`);
  });

  // GET request
  console.log(`Method: ${getJSONString(request.method)}`);
  console.log(`URL: ${getJSONString(request.url)}`);
  console.log(`Headers: ${getJSONString(request.headers)}`);

  //response header
  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html",
  });

  //   let responseBody = /*html*/ `<h1>Hello World!</h1>`;
  //   if (request.url == "/contact") {
  //     responseBody = /*html*/ `<h1>This is the contact page</h1>`;
  //   }
  //   response.end(`Response ended with: ${responseBody}`);

  //response body
  if (routeResponseMap[request.url]) {//if url exist
    response.end(routeResponseMap[request.url]); //set response body to value of routeResponseMap[request.url]
  } else {
      response.end('<h1>Welcome!</h1>') //set response body if no matching request.url
  }
});

//starting server
//this synchronous code runs first, then the async code, app.on(), runs after
app.listen(port);
console.log(`The server has started and is listening on port: ${port}`);

//Because some objects in the request can have within them other nested objects, convert the objects to more-readable strings by using JSON.stringify
const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2);
};
