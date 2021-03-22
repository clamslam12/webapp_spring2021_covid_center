const port = 3000,
  express = require("express"),
  app = express();

//Middlewares

//To assist in reading the body contents, you add express.json and express.urlencoded to your app instance to analyze incoming request bodies.

//specifies that we want to parse incoming requests that are URL-encoded (usually, form post and utf-8 content) and in JSON format.
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

//Custom middleware

//This code defines a middleware function with an additional next argument.

//It logs the request’s path to your terminal console, and then calls the next function to continue the chain in the request-response cycle.
//From the time a request enters the server, it accesses a series of middleware functions.

//Depending on where you add your own custom middleware function, you can use next to let Express.js know that your function is complete and that you want to continue to whatever function is next in the chain.
app.use((req, res, next) => {
  console.log("req.url ", req.url);
  console.log("req.query ", req.query);
  next();
});

//Routes
app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is is the page for ${veg}`);
});

app.post("/", (req, res) => {
  console.log("req.body ", req.body);
  console.log("req.query ", req.query);
  res.send("POST succesful");
});

//Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port} ...`);
});
//request query string; more common for GET
//request body: more common for POST
