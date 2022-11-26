// Store all rquired elements

// (1) Radio buttons
let cards = document.getElementsByName("card");
// (2) Images
let cardImages = document.querySelectorAll("img");
// (3) Text Area
let textArea = document.getElementById("message");
// (4) Button
let button = document.getElementById("generate");
// (5) New window
let win;

// Variables to store user inputs
let selectedCard;
let message;

// Color the border of the checked card and store it
function colorBorder() {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].checked) {
      cardImages[i].style.border = "solid red";
      // Store the stored image in selectedCard
      selectedCard = cardImages[i].alt;
    } else {
      cardImages[i].style.border = "solid white";
    }
  }
}

// Store the message and Open new window when the generate button is clicked
function generateWindow() {
  // Store the message
  message = textArea.value;
  // Open new window
  win = open("cardWindow.html", "", "width=500,height=700");
  // When the window is loaded the card will be uploaded
  win.addEventListener("load", fillCard);
}
// Filling the card with image and message
function fillCard() {
  let cardContainer = document.createElement("div");
  win.document.body.style.display = "flex";
  win.document.body.style.flexDirection = "column";
  win.document.body.style.alignItems = "center";

  // Styling the card
  let cardImage = document.createElement("img");
  cardImage.src = "images/" + selectedCard;
  cardImage.style.width = "400px";
  cardImage.style.height = "400px";
  cardImage.style.border = "solid white";
  cardContainer.append(cardImage);
  win.document.body.append(cardContainer);
  // Adding the message
  let messageContainer = document.createElement("p");
  messageContainer.append(message);
  messageContainer.style.fontFamily = "'Tangerine', cursive";
  messageContainer.style.fontSize = "50pt";
  messageContainer.style.textAlign = "center";
  win.document.body.append(messageContainer);
  // Adding close Button
  let closeButton = document.createElement("input");
  closeButton.type = "button";
  closeButton.value = "Close Preview";
  win.document.body.append(closeButton);
  // Close the window when the button is clicked
  closeButton.addEventListener("click", function () {
    win.close();
  });
}
// Generate the window when the generate button is clicked
button.addEventListener("click", generateWindow);
