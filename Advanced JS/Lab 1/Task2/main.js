// B.1. Write two different functions with two different ways of
// implementations that takes any number of parameters and
// returns them as a reversed collection using array’s reverse
// function.
// Note: using of any loop is not allowed

function reverseApply() {
  let arr = [];
  arr.reverse.apply(arguments);
  console.log(arguments);
}

function reverseCall() {
  let arr = [];
  arr.reverse.call(arguments);
  console.log(arguments);
}

reverseApply(1, 2, 3, 4, 5);
reverseCall(5, 4, 3, 2, 1, 0);

// B.2. Create a function that accepts only 2 parameters and throw
// exception if number of parameters either less than or exceeds 2
// parameters
function fun(a, b) {
  if (arguments.length !== 2) {
    let err = new Error("Number of parameters not equal 2");
    throw err;
  }
  return true;
}

console.log(fun(1, 2)); // returns true
// console.log(fun(1)); // Error: Parameters not equal 2
// console.log(fun(1, 2, 3)); // Error: Parameters not equal 2

// B.3. Create an adding function that adds n numbers only.
// Throw exception if the user passed any data type other than
// “number” or called your function without passing any
// parameters.

function add() {
  let sum = 0;
  if (arguments.length === 0) {
    let err = new Error("Parameters needed");
    throw err;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "number") {
        sum += arguments[i];
      } else {
        let err = new Error("Parameters must be numbers");
        throw err;
      }
    }
  }
  return sum;
}

// add(); // Error: Parameters needed
console.log(add(1, 2));
//add(1,2, 'a') // Error: Parameters must be numbers
