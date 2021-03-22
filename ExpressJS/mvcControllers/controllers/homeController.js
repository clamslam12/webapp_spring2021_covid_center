"use strict";

//creating homeController module;
//similar to creating a homeController class and declaring/initializing member functions/variables
exports.sendReqParams = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};
exports.handlePost = (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful");
};
exports.handleGet = (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("GET Successful");
};
exports.logRequestPaths = (req, res, next) => {
  console.log(`Request made to ${req.url}`);
  next();
};
