"use strict";

exports.respondWithName = (req, res) => {
  //templating engine retrieves index.ejs in views folder and convert it into static html

  //retrieving data from controller, set it to local variable, and pass it to ejs file 'name' parameter 
  //let paramsName = req.params.myName;//comment out to show error handling
  res.render("index", {name: paramsName});
};
