let canvas = document.getElementById("canv1");
let context = canvas.getContext("2d");

context.beginPath();
context.moveTo(1, 1);
context.lineTo(200, 100);
context.lineTo(0, 100);
context.moveTo(0, 100);
context.lineTo(0, -200);
context.strokeStyle = "blue";
context.stroke();
context.fillStyle = "red";
context.fill();

conditionizr.load("../MathPoly.js", ["chrome"]);
conditionizr.load("../MathPoly.css", ["chrome"]);
