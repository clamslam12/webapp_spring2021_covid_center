const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController");

//app.set lets you assign a value to some key that you plan to reuse in your application.
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

//initial middlewares
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

//Routes middleware
app.get("/name", homeController.respondWithName);
//starting server
app.listen(app.get("port"), () => {
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});
