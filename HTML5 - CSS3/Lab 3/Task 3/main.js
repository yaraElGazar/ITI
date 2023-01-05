let canvas = document.getElementById("canv1");
let context = canvas.getContext("2d");

// Adding Image
let img = new Image();
img.src = "flowers.jpg";
img.onload = function () {
  context.drawImage(img, 20, 20, 700, 500);

  // Text
  context.font = "60px Great Vibes";
  context.fillStyle = "rgb(255, 98, 0)";
  context.textAlign = "center";
  context.shadowColor = "black";
  context.shadowBlur = 7;
  context.fillText("Good Morning", 250, 150);
};
