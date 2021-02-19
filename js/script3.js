let clickEvent = document.getElementById("onclickBtn");
let eventListener = document.getElementById("addEventListenerBtn");

//only the latest onlick event handler is invoked

clickEvent.onclick = (event) => {
  window.alert("1 is not called"); //does not alert
};
clickEvent.onclick = (event) => {
  window.alert("1 is not called, 2 is called"); //shows alert
};

///all event handlers are invoked in the order they were declared
//alerts 1 is called, then after clicking ok, alerts 2 is also called

eventListener.addEventListener("click", (event) => window.alert("1 is called"));
eventListener.addEventListener("click", (event) =>
  window.alert("2 is also called")
);
