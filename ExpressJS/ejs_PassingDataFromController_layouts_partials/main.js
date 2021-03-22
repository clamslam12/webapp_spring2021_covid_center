const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");

//app.set lets you assign a value to some key that you plan to reuse in your application.
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

//initial middlewares

//Layouts
//It would be useful if we can share view content across multiple pages.

//A layout is a shell in which your views are rendered. Layouts include parts of content that doesn't change from page to page.
//The bottom (footer) of the page or navigation bar
//Instead of re-creating the HTML for these components, we add them to a layout.ejs file that other views can share.
// index.ejs is passed to the body parameter of layout.ejs
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

//Routes middleware
app.get("/name/:myName", homeController.respondWithName);
//starting server
app.listen(app.get("port"), () => {
  console.log(`Server is running at http://localhost:${app.get("port")}`);
});
