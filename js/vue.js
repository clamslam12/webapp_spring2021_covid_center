const app = Vue.createApp({
  data() {
    return {
      keyword: "",
      result: null,
    };
  },
  methods: {
    searchGoogleBooks() {
      //start fetching google books api
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          this.keyword +
          "&startIndex=0&maxResults=20"
      )
        .then((response) => {
          //console.log(response.json()); //printing json() method of the reponse object
          return response.json();
        })
        .then((json) => {
          this.result = json;
        });
    },
  },
});
