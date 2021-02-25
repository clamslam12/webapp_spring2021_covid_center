function searchGoogleBooks() {
  let txtSearch = document.querySelector("#txtSearch");
  if (txtSearch.value == "") {
    document.querySelector("#mainDiv").classList.add("hasError");
    document.querySelector("#mainDiv").innerHTML = "No search keyword provided";
    return;
  }
  //else
  //just in case the user did not enter anything the 1st time,
  //remove red color
  document.querySelector("#mainDiv").classList.remove("hasError");
  //start fetching google books api
  fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" +
      txtSearch.value +
      "&startIndex=0&maxResults=20"
  )
    .then((response) => {
      //console.log(response.json()); //printing json() method of the reponse object
      return response.json();
    })
    .then((json) => {
      //row for # of books found
      let list = `<div class="row col-sm-5">found ${json.totalItems} books</div>
      <div class="row">`; //starting row for unordered list
      for (let i = 0; i < json.items.length; i++) {
        console.log(json.items[i].volumeInfo.title); //book title
        let bookInfo = json.items[i].volumeInfo;
        let template = `<ul class="col-sm-12 col-md-6 col-xl-4">`;
        template += `<a class='list-group-item list-group-item-action active' href='${json.items[i].selfLink}'>${bookInfo.title}</a>`;
        template += `<li class='list-group-item'>${bookInfo.authors}</li>`;
        template += `<li class='list-group-item'>${bookInfo.publisher}, ${bookInfo.publishedDate}</li>`;
        template += `</ul>`;
        list += template;
      }
      list += `</div>`;
      document.querySelector("#mainDiv").innerHTML = list;
    });
}
