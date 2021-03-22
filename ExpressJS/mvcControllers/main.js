const port = 3000,
  express = require("express"),
  app = express(),
  //instantiating homeController module; similar to instantiating a class
  homeController = require("./controllers/homeController");
//Middleware (.use; runs before Routes; Routes can run first then return to middleware by invoking next() immediately in the last middleware function)
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
//custom middleware
app.use(homeController.logRequestPaths);
//Routes
app.post("/", homeController.handlePost);
app.get("/", homeController.handleGet);
app.get("/items/:vegetable", homeController.sendReqParams);
//starting server
app.listen(port, () => {
  console.log(`Server is listening on port ${port} ...`);
});
