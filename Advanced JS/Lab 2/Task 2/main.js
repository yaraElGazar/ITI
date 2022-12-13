// B.1. Using the constructor method for creating Objects, write a
// script that allows you to create a rectangle object that
// • Should have width and height properties.
// • Implement a method for calculating its area
// • Implement a method for calculating its perimeter.
// • Implement displayInfo() function to display a message
// declaring the width, height, area, and perimeter of the
// created object

var Rectangle = function (width, height) {
  this.height = height === undefined ? 0 : height;
  this.width = width === undefined ? 0 : width;
  this.calcArea = function () {
    return this.width * this.height;
  };
  this.calcPerimeter = function () {
    return 2 * this.width + 2 * this.height;
  };
  this.displayInfo = function () {
    console.log(
      "The width is: " +
        this.width +
        ", the height is " +
        this.height +
        ", the area is " +
        this.calcArea() +
        ", and the perimeter is " +
        this.calcPerimeter() +
        "."
    );
  };
};

var rect = new Rectangle(5, 10);
var rect_ = new Rectangle();
