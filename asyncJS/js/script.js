/*
//waits for 3 seconds, then invokes greet function
setTimeout(greet, 3000);
//meanwhile, the js code below continues executing during the wait
document.getElementById("mainDiv").innerHTML = "Before Hello world!";

function greet() {
  document.getElementById("mainDiv").innerHTML = "Hello world!";
}*/

function myDisplayer(text) {
  document.getElementById("mainDiv").innerHTML = text;
}

//Creates a promise object, which takes a callback function with 2
//other function arguments, resolve and reject
//executes producing code
//if success, invoke resolve function with argument
//else if fail, invoke reject with argument
//
//then function returns a new Promise object, which can be used for chaining
//then function takes 2 function arguments, in which the arguments to
//those two functions are arguments passed into resolve/reject 
let myPromise = new Promise(function (myResolve, myReject) {
  // The producing code (this may take some time)
  //var x = prompt("pick a number:");

  setTimeout(function () {
    myResolve("hello world!");
  }, 3000);

//   if (x % 2 == 0) {
//     myResolve("Win");
//   } else {
//     myReject("Loss");
//   }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

document.getElementById("div2").innerHTML = "here while async is happening";
