const port = 3000,
  express = require("express"),
  app = express();

app
  .post("/", (req, res) => {
    //params: Allows you to extract IDs and tokens from the URL.
    //This request attribute allows you to identify which items are being requested in an e-commerce site or what user profile you should navigate to
    //
    //body: Contains much of the contents of the request, which often includes data coming from a POST request, such as a submitted form.
    //From the request body, you can collect information quickly and save it in a database.
    //
    //url: Provides information about the URL beign visited (similar to req.url in basic server in NodeJS)
    //
    //query: Like body, lets you pull data being submitted to the application server.
    //This data isn't necessarily from a POST request, however, and is often requested in the URL as a query string (Ex: ?name=jon&location=denver)
    console.log(req.body);
    console.log(req.params);
    console.log(req.url);
    console.log(req.query);
    res.send("Hello World. From Express.js");
  })
  .listen(port, () => {
    console.log(`The Express.js server has started listening on port ${port}`);
  });
