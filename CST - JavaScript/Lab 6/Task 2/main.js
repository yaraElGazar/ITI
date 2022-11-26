function moveElements() {
let image = document.body.firstElementChild.firstElementChild.firstElementChild;
let secondImg = image.cloneNode();
let header = document.body.firstElementChild.firstElementChild;
let menu = header.nextElementSibling;

// Change position of first image
image.style.position = "absolute";
image.style.right = "0px";
header.style.width = "100%";
header.style.height = "250px";

// Change menue width
menu.style.width = "100px";
menu.style.position = "absolute";
menu.style.left = "50%";


// Add second image
document.body.append(secondImg);
secondImg.style.position = "absolute";
secondImg.style.left = "0px";
}

// Wait 1 second
setTimeout(moveElements, 1000);