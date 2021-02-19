const change = (state) => {
  var lampImg = document.getElementById("lamp");
  lampImg.src = "/images/lamp_" + state + ".png";
  console.log(lampImg.src);
  var statusDiv = document.getElementById("statusDiv");
  statusDiv.innerHTML = "The lamp is " + state;
  if (state == "on") {
    statusDiv.style.color = "blue";
  } else {
    statusDiv.style.color = "black";
  }
};
