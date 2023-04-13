const { MathUtils, obj, sayHelloWorld } = require("../index");

describe("test MathUtils function", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });
  it("test MathUtils sum", () => {
    // Check functionality
    expect(math1.sum(2, 5)).toBe(7);
    // Check return type number
    expect(math1.sum(2, 5)).toEqual(jasmine.any(Number));
    // Check number of arguments
    expect(() => math1.sum(2)).toThrow("Function must have 2 arguments");
    // Check type of arguments
    expect(() => math1.sum("a", "b")).toThrow("Arguments must be numbers");
  });
  it("test MathUtils sub", () => {
    // Check functionality
    expect(math1.subtract(12, 5)).toBe(7);
    // Check return type number
    expect(math1.subtract(12, 5)).toEqual(jasmine.any(Number));
    // Check number of arguments
    expect(() => math1.subtract(2)).toThrow("Function must have 2 arguments");
    // Check type of arguments
    expect(() => math1.subtract("a", "b")).toThrow("Arguments must be numbers");
  });
  it("test MathUtils multiply", () => {
    // Check functionality
    expect(math1.multiply(10, 5)).toBe(50);
    // Check return type number
    expect(math1.multiply(10, 5)).toEqual(jasmine.any(Number));
    // Check number of arguments
    expect(() => math1.multiply(2)).toThrow("Function must have 2 arguments");
    // Check type of arguments
    expect(() => math1.multiply("a", "b")).toThrow("Arguments must be numbers");
  });
  it("test MathUtils divide", () => {
    // Check functionality
    expect(math1.divide(10, 5)).toBe(2);
    // Check return type number
    expect(math1.divide(10, 5)).toEqual(jasmine.any(Number));
    // Check number of arguments
    expect(() => math1.divide(2)).toThrow("Function must have 2 arguments");
    // Check type of arguments
    expect(() => math1.divide("a", "b")).toThrow("Arguments must be numbers");
    // Divide by zero
    expect(() => math1.divide(10, 0)).toThrow("Cannot divide by zero");
  });
  it("test MathUtils average", () => {
    // Check functionality
    expect(math1.average(10, 10)).toBe(10);
    // Check return type number
    expect(math1.average(10, 10)).toEqual(jasmine.any(Number));
    // Check number of arguments
    expect(() => math1.average(2)).toThrow("Function must have 2 arguments");
    // Check type of arguments
    expect(() => math1.average("a", "b")).toThrow("Arguments must be numbers");
  });
  it("test MathUtils factorial", () => {
    // Check functionality
    expect(math1.factorial(5)).toBe(120);
    // Check functionality
    expect(math1.factorial(0)).toBe(1);
    // Check functionality
    expect(math1.factorial(1)).toBe(1);
    // Check return type number
    expect(math1.factorial(10)).toEqual(jasmine.any(Number));
    // Check number of arguments
    expect(() => math1.factorial(2, 3)).toThrow(
      "Function accept one argument only"
    );
    // Check type of arguments
    expect(() => math1.factorial("a")).toThrow("Argument must be a number");
    // Check positivity
    expect(() => math1.factorial(-1)).toThrow(
      "There is no factorial for negative numbers"
    );
  });
  it("test MathUtils checkPositivity", () => {
    // Check functionality
    expect(math1.checkPositivity(10)).toBeTruthy();
    // Check return type number
    expect(math1.checkPositivity(10)).toEqual(jasmine.any(Boolean));
    // Check number of arguments
    expect(() => math1.checkPositivity(2, 2)).toThrow(
      "Function accept one argument only"
    );
    // Check type of arguments
    expect(() => math1.checkPositivity("a")).toThrow(
      "Argument must be a number"
    );
  });
});

// describe("study diff btn toEqual and toBe", () => {
//   var user = { id: 1 };
//   var a = { x: user };
//   var b = { x: user };
//   it("", () => {
//     expect(a).toEqual(b);
//     //  expect(a).toBe(b)  //? test value with ref
//   });
// });

// describe("study spyOn", () => {
//   it("", () => {
//     spyOn(obj, "hello");
//     sayHelloWorld(obj);
//     expect(obj.hello).toHaveBeenCalled();
//     expect(obj.hello).toHaveBeenCalledTimes(1);
//     expect(obj.hello).toHaveBeenCalledWith(3);
//     expect(obj.hello).toHaveBeenCalledOnceWith(3);
//   });
// });

// describe("create custom matcher", () => {
//   beforeEach(() => {
//     jasmine.addMatchers({
//       toBeLarge: function () {
//         return {
//           compare: function (actual) {
//             let result = {};
//             result.pass = actual > 5000;
//             result.message = "num must be > 5000";
//             return result;
//           },
//         };
//       },
//     });
//   });
//   it("", () => {
//     expect(60000).toBeLarge();
//   });
// });

// describe("delay in jasmine ", () => {
//   beforeAll(() => {
//     jasmine.clock().install();
//   });
//   afterAll(() => {
//     jasmine.clock().uninstall();
//   });
//   it("", () => {
//     var x = 5;
//     setTimeout(() => {
//       x = 10;
//     }, 3000);
//     jasmine.clock().tick(6000);
//     expect(x).toEqual(10);
//   });
// });
