let canvas = document.getElementById("canv1");
let context = canvas.getContext("2d");

let xDirection = 0;
let yDirection = 0;

let myInterval = setInterval(function () {
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(xDirection, yDirection);
  context.lineWidth = 5;
  context.lineCap = "round";
  context.stroke();
  xDirection += 10;
  yDirection += 10;
}, 100);

setTimeout(function () {
  clearInterval(myInterval);
}, 5100);

setTimeout(function () {
  alert("animation done!");
}, 5150);
