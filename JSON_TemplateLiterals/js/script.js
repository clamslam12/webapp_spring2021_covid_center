//both are same
//
// var text =
//   `{"employees":[{"firstName":"John","lastName":"Doe" },{"firstName":"Anna","lastName":"Smith" },{"firstName":"Peter","lastName":"Jones" }]}`;

var text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

var obj = null;
function createList(text) {
  obj = JSON.parse(text); //parse JSON to object literal
  let result = "<ul>";
  for (let i = 0; i < obj.employees.length; i++) {
    result +=
      "<li>" +
      obj.employees[i].firstName +
      " " +
      obj.employees[i].lastName +
      "</li>";
  }
  result += "</ul>";
  document.getElementById("mainDiv").innerHTML = result;
}

function createListWithTemplateLiterals(text) {
  obj = JSON.parse(text);
  let result = `<ul>`;
  for (let i = 0; i < obj.employees.length; i++) {
    result += `<li> ${obj.employees[i].firstName}  ${obj.employees[i].lastName} </li>`;
  }
  result += `</ul>`;

  document.getElementById("mainDiv").innerHTML = result;
}

//createList(text); //with normal strings
createListWithTemplateLiterals(text); //with template literals

var strJSON = JSON.stringify(obj); //convert object literal to JSON string
console.log(strJSON);
