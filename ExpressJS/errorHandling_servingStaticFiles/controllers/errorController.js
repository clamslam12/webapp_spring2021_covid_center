"use strict";
const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {
  console.log(error.stack);
  console.log("here");
  next(error);
};
//using customized error pages
exports.respondNoResourceFound = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.sendFile(`./public/${errorCode}.html`, {
      root: "./"
  });
};

exports.respondInternalError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`error occured: ${error.stack}`);
  res.status(errorCode);
  res.send(`Error ${errorCode}: Sorry, our application is experiencing an issue`);
};
