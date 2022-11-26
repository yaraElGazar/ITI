// Getting all the elements
let moveButton = document.getElementById("move");
let resetButton = document.getElementById("reset");
let firstImage = document.getElementById("one");
let secondImage = document.getElementById("two");
let topImage = document.getElementById("top");
let firstP = document.getElementById("first");
let secondP = document.getElementById("second");
// Variables for movement
let translate1 = -15;
let translate2 = -15;
let translate3 = -15;
let myInterval1;
let myInterval2;
let myInterval3;

// Change the button from go to stop and vice versa
function changeutton(event) {
  if (event.target.value === "go") {
    event.target.value = "stop";
  } else if (event.target.value === "stop") {
    event.target.value = "go";
  }
}

// Moving functionality for the three images
function move(event) {
  // Checking the value of the button
  if (event.target.value === "go") {
    // For picture 1
    myInterval1 = setInterval(function () {
      let actLocationOne = parseInt(getComputedStyle(firstImage).left);
      if (actLocationOne < 15 || actLocationOne > 460) {
        translate1 = -translate1;
      }
      actLocationOne += translate1;
      firstImage.style.left = actLocationOne + "px";
      firstP.innerText =
        '<img src="images/icon1.gif" style="left:' +
        getComputedStyle(firstImage).left +
        '"\\>';
    }, 100);
    // For picture 2
    myInterval2 = setInterval(function () {
      let actLocationTwo = parseInt(getComputedStyle(secondImage).left);
      if (actLocationTwo > 460 || actLocationTwo < 15) {
        translate2 = -translate2;
      }
      actLocationTwo -= translate2;
      secondImage.style.left = actLocationTwo + "px";
      secondP.innerText =
        '<img src="images/icon2.gif" style="left:' +
        getComputedStyle(secondImage).left +
        '"\\>';
    }, 100);
    // For top picture
    myInterval3 = setInterval(function () {
      let actLocationTop = parseInt(getComputedStyle(topImage).top);
      if (actLocationTop > 480 || actLocationTop < 20) {
        translate3 = -translate3;
      }
      actLocationTop -= translate3;
      topImage.style.top = actLocationTop + "px";
    }, 100);
  } else if (event.target.value === "stop") {
    // Stop the movement
    clear();
  }
}

function clear() {
  clearInterval(myInterval1);
  clearInterval(myInterval2);
  clearInterval(myInterval3);
}

// Reseting the positions
function reset(event) {
  if (moveButton.value === "stop") {
    firstImage.style.left = "15px";
    secondImage.style.left = "460px";
    topImage.style.top = "480px";
    move(event);
  } else if (moveButton.value === "go") {
    clear();
    firstImage.style.left = "15px";
    secondImage.style.left = "460px";
    topImage.style.top = "480px";
    move(event);
  }
}

// Event Listeners
moveButton.addEventListener("click", move);
moveButton.addEventListener("click", changeutton);
resetButton.addEventListener("click", reset);
