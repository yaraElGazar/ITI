MathUtils = function () {};

MathUtils.prototype.sum = function (number1, number2) {
  if (arguments.length !== 2) {
    throw "Function must have 2 arguments";
  } else if (typeof number1 !== "number" && typeof number2 !== "number") {
    throw "Arguments must be numbers";
  }
  return number1 + number2;
};

MathUtils.prototype.subtract = function (number1, number2) {
  if (arguments.length !== 2) {
    throw "Function must have 2 arguments";
  } else if (typeof number1 !== "number" && typeof number2 !== "number") {
    throw "Arguments must be numbers";
  }
  return number1 - number2;
};

MathUtils.prototype.multiply = function (number1, number2) {
  if (arguments.length !== 2) {
    throw "Function must have 2 arguments";
  } else if (typeof number1 !== "number" && typeof number2 !== "number") {
    throw "Arguments must be numbers";
  }
  return number1 * number2;
};

MathUtils.prototype.divide = function (number1, number2) {
  if (arguments.length !== 2) {
    throw "Function must have 2 arguments";
  } else if (typeof number1 !== "number" && typeof number2 !== "number") {
    throw "Arguments must be numbers";
  } else if (number2 === 0) {
    throw "Cannot divide by zero";
  }
  return number1 / number2;
};

MathUtils.prototype.average = function (number1, number2) {
  if (arguments.length !== 2) {
    throw "Function must have 2 arguments";
  } else if (typeof number1 !== "number" && typeof number2 !== "number") {
    throw "Arguments must be numbers";
  }
  return (number1 + number2) / 2;
};

MathUtils.prototype.factorial = function (number) {
  if (arguments.length !== 1) {
    throw "Function accept one argument only";
  } else if (typeof number !== "number") {
    throw "Argument must be a number";
  } else if (number < 0) {
    throw "There is no factorial for negative numbers";
  } else if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * this.factorial(number - 1);
  }
};

MathUtils.prototype.checkPositivity = function (number) {
  if (arguments.length !== 1) {
    throw "Function accept one argument only";
  } else if (typeof number !== "number") {
    throw "Argument must be a number";
  } else if (number < 0) return false;
  else return true;
};

// var obj = {
//   hello: function () {
//     return "hello";
//   },

//   world: function () {
//     return "world";
//   },
// };

// function sayHelloWorld(x) {
//   return x.hello(3) + " " + x.world();
// }

module.exports = { MathUtils };
