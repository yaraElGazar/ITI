let canvas = document.getElementById("canv1");
let context = canvas.getContext("2d");

// Blue Area
let grd1 = context.createLinearGradient(250, 100, 250, 250);
grd1.addColorStop(0, "rgb(3, 151, 230)");
grd1.addColorStop(1, "white");
context.fillStyle = grd1;
context.beginPath();
context.fillRect(10, 10, 480, 250);
context.closePath();

// Green Area
let grd2 = context.createLinearGradient(250, 300, 250, 480);
grd2.addColorStop(0, "rgb(38, 185, 38)");
grd2.addColorStop(1, "white");
context.fillStyle = grd2;
context.beginPath();
context.fillRect(10, 250, 480, 480);
context.closePath();

// Black rectangle
context.beginPath();
context.moveTo(153, 300);
context.lineTo(153, 150);
context.strokeStyle = "black";
context.lineWidth = 5;
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(150, 150);
context.lineTo(350, 150);
context.strokeStyle = "black";
context.lineWidth = 5;
context.stroke();
context.closePath();

context.beginPath();
context.moveTo(347, 150);
context.lineTo(347, 300);
context.strokeStyle = "black";
context.lineWidth = 5;
context.stroke();
context.closePath();
