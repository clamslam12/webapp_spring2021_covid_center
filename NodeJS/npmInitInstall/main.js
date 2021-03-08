//instantiating an external downloaded module 'cities'
const cities = require("cities");
//attaching external downloaded module to loaded module
let myCity = cities.zip_lookup("80003");
console.log(myCity);

//instantiating a module
const myModule = require("../nodeModulesRequireExports/messages.js");

//attaching exported modules to loaded modules, mySum and myObjLiteral
let mySum = myModule.addNum(2, 3);
let myObjLiteral = myModule.returnObjectLiteral;
console.log(mySum, myObjLiteral); //prints 5 { name: 'minh' }
