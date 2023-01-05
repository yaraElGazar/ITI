setTimeout(function () {
  let canvas = document.getElementById("canv1");
  let context = canvas.getContext("2d");

  // Blue Big Circle
  let grd1 = context.createRadialGradient(300, 300, 50, 250, 250, 200);
  grd1.addColorStop(0, "white");
  grd1.addColorStop(1, "rgb(128, 0, 128)");
  context.fillStyle = grd1;
  context.beginPath();
  context.arc(250, 250, 150, 0, 2 * Math.PI);
  context.fill();
  context.closePath();

  // Blue Small Circle
  let grd2 = context.createRadialGradient(200, 200, 50, 250, 250, 200);
  grd2.addColorStop(0, "white");
  grd2.addColorStop(1, "rgb(128, 0, 128)");
  context.fillStyle = grd2;
  context.beginPath();
  context.arc(250, 250, 100, 0, 2 * Math.PI);
  context.fill();
  context.closePath();

  // Text
  context.font = "100px Great Vibes";
  context.fillStyle = "rgb(128, 0, 128)";
  context.textAlign = "center";
  context.fillText("Y", canvas.width / 2, canvas.height / 2);
}, 100);
