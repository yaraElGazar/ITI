// 1) Using ES6 new Syntax & features:
// a) Write a script to create different shapes (rectangle, square,
// circle, triangle) make all of them inherits from polygon.
// b) Display the area and each object parameter in your console
// by overriding toString()
// c) Draw your created shapes to a canvas element

class Polygon {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  toString() {}
  draw() {}
}

class Rectangle extends Polygon {
  constructor(x, y, width, height, color) {
    super(x, y, color);
    this.width = width;
    this.height = height;
  }

  toString() {
    let area = this.width * this.height;
    return `The starting point is: {${this.x}, ${this.y}}, width: ${this.width}, height: ${this.height}, area: ${area} and color is: ${this.color}`;
  }

  draw() {
    let canvas = document.getElementById("canv1");
    let context = canvas.getContext("2d");
    context.fillStyle = this.color;
    context.beginPath();
    context.fillRect(this.x, this.y, this.width, this.height);
    context.closePath();
  }
}

class Square extends Polygon {
  constructor(x, y, sideLength, color) {
    super(x, y, color);
    this.sideLength = sideLength;
  }

  toString() {
    let area = this.sideLength ** 2;
    return `The starting point is: {${this.x}, ${this.y}}, side length: ${this.sideLength}, area: ${area} and color is: ${this.color}`;
  }
  draw() {
    let canvas = document.getElementById("canv1");
    let context = canvas.getContext("2d");
    context.fillStyle = this.color;
    context.beginPath();
    context.fillRect(this.x, this.y, this.sideLength, this.sideLength);
    context.closePath();
  }
}

class Circle extends Polygon {
  constructor(x, y, r, color) {
    super(x, y, color);
    this.r = r;
  }

  toString() {
    const Pi = 3.14;
    let area = Pi * this.r ** 2;
    return `The starting point is: {${this.x}, ${this.y}}, radius: ${this.r}, area: ${area} and color is: ${this.color}`;
  }

  draw() {
    let canvas = document.getElementById("canv1");
    let context = canvas.getContext("2d");
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }
}

class Triangle extends Polygon {
  constructor(x, y, x1, y1, x2, y2, color) {
    super(x, y, color);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  toString() {
    let area = Math.abs(
      0.5 *
        (this.x * (this.y1 - this.y2) +
          this.x1 * (this.y2 - this.y) +
          this.x2 * (this.y - this.y1))
    );
    return `The starting point is: {${this.x}, ${this.y}}, second point is: {${this.x1}, ${this.y1}}, third point is: {${this.x2}, ${this.y2}}area: ${area} and color is: ${this.color}`;
  }

  draw() {
    let canvas = document.getElementById("canv1");
    let context = canvas.getContext("2d");
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.fill();
    context.closePath();
  }
}

// Test cases
let rect = new Rectangle(10, 10, 200, 100, "black");
console.log(rect.toString());
rect.draw();

let square = new Square(10, 130, 100, "red");
console.log(square.toString());
square.draw();

let circle = new Circle(300, 60, 50, "blue");
console.log(circle.toString());
circle.draw();

let triangle = new Triangle(220, 130, 220, 230, 420, 230, "green");
console.log(triangle.toString());
triangle.draw();
