// using XMLHttpRequest object
const loadDoc = () => {
  let xhttp = new XMLHttpRequest();
  //this is an async function

  //With the XMLHttpRequest object you can define a function to
  //be executed when the request receives an answer.
  //
  //onreadystatechange is a property of XMLHttpRequest object
  //we are setting that property to a function, which will be invoked
  //when the request receives an answer
  //
  xhttp.onreadystatechange = function () {
    //cant use arrow functions because we need to define an object method
    //we need to use this keyword
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mainDiv").innerHTML = this.responseText;
      console.log(this.responseText);
    }
  };
  //meanwhile the below code executes
  //if there is a response, then the onreadystatechange executes
  xhttp.open("GET", "newContent.txt", true);
  xhttp.send();
};

//using FETCH (ES6) to get data from a REST API
const callAPI = () => {
  //this returns a promise which resolves with the response as argument
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    //receive the response, convert it to a json object literal ,
    //then return it, (which resolves it with the json object literal as argument)
    //
    //same as return new Promise((resolve, reject) => {resolve(response.json)});
    .then((response) => {
      console.log(response); //prints Response {type: "cors", url: "https://jsonplaceholder.typicode.com/todos/1", redirected: false, status: 200, ok: true, …}
      return response.json(); //{userId: 1, id: 1, title: "delectus aut autem", completed: false}
    })
    //
    .then((json) => {
      console.log(json); //prints an object literal, //{userId: 1, id: 1, title: "delectus aut autem", completed: false}

      //convert the object literal to json format(string)
      document.getElementById("mainDiv").innerHTML = JSON.stringify(json);
      console.log(JSON.stringify(json), typeof JSON.stringify(json)); //{"userId":1,"id":1,"title":"delectus aut autem","completed":false} string
    });
};

//using fetch to get data from google books REST API
function searchGoogleBooks() {
  //using parameter q=harry+potter
  fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      document.getElementById("mainDiv").innerHTML = JSON.stringify(json);
    });
}
