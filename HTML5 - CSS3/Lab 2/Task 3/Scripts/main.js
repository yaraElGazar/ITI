let canvas = document.getElementById("canv1");
let context = canvas.getContext("2d");

let direction = true;
let myInterval = setInterval(function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(150, 150, 100, 0, Math.PI, direction);
  context.closePath();
  context.fillStyle = "yellow";
  context.fill();
  context.stroke();

  direction = !direction;
}, 500);

setTimeout(function () {
  clearInterval(myInterval);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(150, 150, 100, 0, 2 * Math.PI, direction);
  context.closePath();
  context.fillStyle = "yellow";
  context.fill();
  context.stroke();
}, 5000);
