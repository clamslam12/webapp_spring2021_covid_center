"use strict";

exports.respondWithName = (req, res) => {
  //templating engine retrieves index.ejs in views folder and convert it into static html
  res.render("index");
};
