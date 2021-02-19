const change = (state) => {
  let lampImg = document.getElementById("lamp");
  lampImg.src = "/images/lamp_" + state + ".png";
  console.log(lampImg.src);
  let statusDiv = document.getElementById("statusDiv");
  statusDiv.innerHTML = "The lamp is " + state;
  if (state == "on") {
    statusDiv.style.color = "blue";
  } else {
    statusDiv.style.color = "black";
  }
};

let lampImg = document.getElementById("lamp");
console.log(lampImg);
//event parameter holds a reference to the event sender
lampImg.onmouseover = (event) => {
  change("on");
  console.log(event.target.id);//prints lamp
};

lampImg.onmouseout = (event) =>{
    change('off');
    console.log(event.target.id);//prints lamp
}
