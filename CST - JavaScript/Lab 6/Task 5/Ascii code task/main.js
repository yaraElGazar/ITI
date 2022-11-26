// Alert ASCII Code of any key pressed and detect whether it is
// alt key or ctrl key or shift key

document.addEventListener("keydown", function (event) {
  let asciiValue = event.which;
  if (event.ctrlKey) {
    alert("The ctrl key is pressed!");
  } else if (event.shiftKey) {
    alert("The shift key is pressed!");
  } else if (event.altKey) {
    alert("The alt key is pressed!");
  } else {
    alert("The ascii code of the pressed key is: " + asciiValue);
  }
});
