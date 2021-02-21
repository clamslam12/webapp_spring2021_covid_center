const updateCountryView = () => {
  let dlCountry = document.getElementById("dlCountry");
  console.log(dlCountry);
  let divCountry = document.getElementById("divCountry");
  console.log(divCountry);

  if (dlCountry.value == "Yes") {
    divCountry.classList.remove("invisible");
  } else {
    divCountry.classList.add("invisible");
  }
};

//using CSS style querySelector to retrieve element IDs
const validateForm = () => {
  //Directions:
  //
  ///make a formIsValid boolean variable and set to true;
  //if there is any error, set the variable to false
  //if no error, dont do anything
  //return the variable at the end of function
  //
  try {
    let txtDob = document.querySelector("#txtDob");
    let divDobError = document.querySelector("#divDobError");
    let formIsValid = true;
    //if there is an empty value
    if (txtDob.value == "") {
      //make div visible,show error message, and make background yellow(.hasError)
      divDobError.classList.remove("invisible");
      divDobError.innerHTML = "The date of birth cannot be empty";
      txtDob.classList.add("hasError");
      formIsValid = false;
    } else {
      //built-in Date type
      let dobDate = new Date(txtDob.value);
      let todayDate = new Date();
      //is the date of birth is greater than current date
      if (dobDate >= todayDate) {
        //make div visible,show error message, and make background yellow(.hasError)
        divDobError.classList.remove("invisible");
        divDobError.innerHTML = "The date of birth must be before today's date";
        txtDob.classList.add("hasError");
        formIsValid = false;
      } else {
        //if no error
        //make invisible, blank error message, remove background error color
        divDobError.classList.add("invisible");
        divDobError.innerHTML = "";
        txtDob.classList.remove("hasError");
      }
    }

    //If the user has visited any countries, at least one country
    //name is mentioned in the country textbox
    let dlCountry = document.querySelector("#dlCountry");
    //if visited countries is yes
    if (dlCountry.value == "Yes") {
      //get value of text box
      let txtCountry = document.querySelector("#txtCountry");
      //if no countries are entered
      if (txtCountry.value == "") {
        //show div error
        document
          .querySelector("#divCountryError")
          .classList.remove("invisible");
        //show error message
        document.querySelector("#divCountryError").innerHTML =
          "There must be at least one country";
        //highlight input background color to yellow
        txtCountry.classList.add("hasError");
        console.log("has error for countries visited");
        formIsValid = false;
      } else {
        console.log("no error for countries visisted");
        //make div error invisible
        document.querySelector("#divCountryError").classList.add("invisible");
        txtCountry.classList.remove("hasError");
      }
    }

    //validate temp input
    let txtTemp = document.querySelector("#txtTemp");
    let divTempErrorMessage = document.querySelector("#divTempErrM");
    if (txtTemp.value == "") {
      divTempErrorMessage.classList.remove("invisible");
      divTempErrorMessage.innerHTML = "Must enter a temperature";
      txtTemp.classList.add("hasError");
      console.log("has error for temp");
      formIsValid = false;
    } else {
      divTempErrorMessage.classList.add("invisible");
      txtTemp.classList.remove("hasError");
    }

    //no invalid character
    //(&, <, >, #, !, `, ", ~) in any of the input fields.
    let inputElements = document.getElementsByTagName("input");
    let invalidChars = ["&", "<", ">", "#", "!", "`", '"', "~"];
    //for each input tag in the node list
    for (let i = 0; i < inputElements.length; i++) {
      //for each char in invalidChars
      for (let j = 0; j < invalidChars.length; j++) {
        //if the index of an invalid char in the value is found (!= -1)
        //
        //if found, then indexOf will return 0 and up, else returns -1
        if (inputElements[i].value.indexOf(invalidChars[j]) != -1) {
          //highlight background color
          inputElements[i].classList.add("hasError");
          formIsValid = false;
        }
      }
    }

    return formIsValid;
  } catch (e) {
    console.log(e);
  }
};
