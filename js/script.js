//function called factorize to compute the factors of a positive integer.
function factorize(n) {
  var factors = new Array();
  for (var i = 0; i < n; i++) {
    if (n % i == 0) {
      //if the remainder = 0 for each division by i,
      factors.push(i); //then we know it is a factor, then push to array
    }
  }
  return factors;
}
//function called findUnique to extract unique characters from a string.
//implementation using hash map. runs in O(n)
function findUnique(str) {
  var uniqueHashMap = new Object(); //if a char is true that means its unique
  var uniqueArray = new Array(); // store unique char for return
  for (var i = 0; i < str.length; i++) {
    if (!uniqueHashMap[str.charAt(i)]) {
      //if char is not true in hash map
      uniqueHashMap[str.charAt(i)] = true; //mark char as true for unique
      uniqueArray.push(str.charAt(i)); //save char in array for return
    }
  }
  return uniqueArray;
}

//function called doOperation which receives two numbers and a function as input, calls the received (input) function with the two numbers, and returns the result.
//Write two different operator functions (multiply, power) and make sure it works correctly with both operators.
function doOperation(x, y, operator) {
  return operator(x, y);
}
function multiply(x, y) {
  return x * y;
}
function power(x, y) {
  return Math.pow(x, y);
}
