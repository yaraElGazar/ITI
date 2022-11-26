// A. BOM
// A.1. Location Object & Navigator Object
// A.1.1. Make your own welcoming page of a registration form to
// • display a greeting message for the user by his name and 
// title, then
// • show a display of his info (address, gender, email, mobile) 
// and 
// • display a recommendation to use chrome browser if he is 
// using another browser (Bonus)
// Hints:
// • You should build a registration form to send the entire 
// required info form user and let the action is getting the 
// welcoming page.
// i.e. The welcoming page is the page that should be 
// displayed after registration.
// • The registration form should contains fields for name, 
// email, password, job title, mobile, gender, and address.
// • Read the required info from the query string

let i;
let custArray = [];

// Query String without (?)
let queryString = (window.location.search).substring(1);

// Split each key with its values
let  splittedString = queryString.split("&");

// Separate keys and values
for(i = 0; i < splittedString.length; i++) {
    let keyvalue = splittedString[i].split("=");
    custArray[keyvalue[0]]=keyvalue[1]; 
}
console.log(custArray);

// Printing 
let userName = document.querySelector("#username");
userName.innerHTML = "Hi "+custArray["name"].replace("+", " ");

let userAddress = document.querySelector("#address");
userAddress.innerHTML = "Your Address is: "+custArray["address"];

let userGender = document.querySelector("#gender");
userGender.innerHTML = "You are a "+custArray["gender"];

let userEmail = document.querySelector("#email");
userEmail.innerHTML = "Your email is: "+custArray["email"].replace("%40", "@");

let userNumber = document.querySelector("#number");
userNumber.innerHTML = "Your number is: "+custArray["mobile"];

// Checking for browser
let agent = navigator.userAgent;
let userBrower = document.querySelector("#browser");

if(agent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36") {
    userBrower.innerHTML = "You are using Chrome";
}else{
    userBrower.innerHTML = "Please use Chrome!";
}

