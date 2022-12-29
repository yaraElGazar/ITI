let redSlider = document.getElementById("red");
let greenSlider = document.getElementById("green");
let blueSlider = document.getElementById("blue");
let text = document.getElementById("text");

let red = 0;
let blue = 0;
let green = 0;

redSlider.addEventListener("change", function () {
  red = this.value;
  text.style.color = "rgb(" + red + "," + green + "," + blue + ")";
});

greenSlider.addEventListener("change", function () {
  green = this.value;
  text.style.color = "rgb(" + red + "," + green + "," + blue + ")";
});

blueSlider.addEventListener("change", function () {
  blue = this.value;
  text.style.color = "rgb(" + red + "," + green + "," + blue + ")";
});
