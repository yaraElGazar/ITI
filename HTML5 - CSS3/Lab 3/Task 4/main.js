let canvas = document.getElementById("canv1");
let context = canvas.getContext("2d");

let degree = 40;
let counter = 0;

let myInterval = setInterval(function () {
  if (counter == 0) {
    console.log("clear");
    context.fillStyle = "white";
    context.fillRect(-100, -100, 400, 400);
    counter++;
  } else if (counter == 10) {
    console.log("clear");
    context.fillStyle = "white";
    context.fillRect(-100, -100, 400, 400);
    counter++;
  } else if (counter < 10) {
    context.translate(100, 100);
    context.rotate((degree * Math.PI) / 180);
    context.translate(-100, -100);

    // Rotated rectangle
    context.fillStyle = "rgba(63, 121, 179, 0.5)";
    context.fillRect(80, 60, 140, 30);

    counter++;
  } else if (counter == 20) {
    counter = 0;
  } else {
    // Matrix transformation
    context.translate(100, 100);
    context.rotate((-degree * Math.PI) / 180);
    context.translate(-100, -100);

    // Rotated rectangle
    context.fillStyle = "rgba(63, 121, 179, 0.5)";
    context.fillRect(80, 60, 140, 30);

    counter++;
  }
}, 250);

// setTimeout(function () {
//   clearInterval(myInterval);
// }, 5000);
