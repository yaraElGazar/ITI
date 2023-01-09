let canvas = document.getElementById("canv1");
let context = canvas.getContext("2d");

context.fillStyle = "#D3756B";
context.beginPath();
context.fillRect(10, 10, 270, 300);
context.closePath();

context.fillStyle = "white";
context.beginPath();
context.arc(145, 350, 150, 0, 2 * Math.PI);
context.fill();
context.closePath();
