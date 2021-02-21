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
  }, 5000);

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

document.getElementById("div2").innerHTML = "here while myPromise is happening";

/////promise 3
let p3 = new Promise((resolve, reject)=>{
    let promise3 = 'promise3'
    setTimeout(resolve, 2000, promise3);//invoking resolve(promise3) after 2 seconds
}).then((val)=>{
    let x2 = val+', x2';
    return x2; //same as return new Promise((resolve, reject) => {resolve(x2);})
}).then((val2)=>{
    console.log(val2); //prints promise3, x2
}).catch((err)=>{
    console.log('error occurred: ', err);
});

document.getElementById('div3').innerHTML = 'here while promise3 is happening';
//
// When you return a value in the then() method, the then() method returns a new Promise that immediately resolves to the return value.
// Also, you can return a new promise in the then() method, like this:
//
//Also, you can return a new promise in the then() method, like this:
//
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3 * 100);
// });

// p.then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 2);
//         }, 3 * 1000);
//     });
// }).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 3);
//         }, 3 * 1000);
//     });
// }).then(result => console.log(result));
//
// Output:
//
// 10
// 20
// 60
//This example shows 10, 20 and 60 after every 3 seconds. This code pattern allows you to execute some tasks in sequence.
//
// The following refactors the above example:

// function generateNumber(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num);
//         }, 3 * 1000);
//     });
// }

// generateNumber(10)
//     .then(result => {
//         console.log(result);
//         return generateNumber(result * 2);
//     })
//     .then((result) => {
//         console.log(result);
//         return generateNumber(result * 3);
//     })
//     .then(result => console.log(result));
