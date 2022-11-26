// Enter Color
let color = prompt("Enter your color");

// Entering Name
let userName = prompt("Enter your name");

// Name Validation
let validName;
if(/[a-zA-Z]/.test(userName)){
validName = userName;
}else{
    userName = prompt("Enter your name again");
    validName = userName;
}

// Entering telephone Number
let userTelephoneNumber = prompt("Enter your telephone number");

// Telephone Number Validation
let validTelephoneNumber;
if(/^[0-9]{8}$/.test(userTelephoneNumber)){
    validTelephoneNumber = userTelephoneNumber;
}else{
    userTelephoneNumber = prompt("Enter your telephone number again");
    validTelephoneNumber = userTelephoneNumber;
}


// Entering mobile Number
let userMobileNumber = prompt("Enter your mobile number");

// Mobile Number Validation
let validMobileNumber;
if(/^(010|011|012)+[0-9]{8}$/.test(userMobileNumber)){
    validMobileNumber = userMobileNumber;
}else{
    userMobileNumber = prompt("Enter your mobile number again");
    validMobileNumber = userMobileNumber;
}


// Entering email
let useremail = prompt("Enter your email");

// Email Validation
let validemail;
if(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+\.+[a-z]{2,3}/.test(useremail)){
    validemail = useremail;
 }else{
     useremail = prompt("Enter your email again");
     validemail = useremail;
 }

document.write("<h1>Entering User Info</h1>");
document.write("<hr>");
document.write("<p style=color:"+color+";>Welcome dear guest <p>"+validName);
document.write("<br>");
document.write("<p style=color:"+color+";>Your telephone number is <p>"+validTelephoneNumber);
document.write("<br>");
document.write("<p style=color:"+color+";>Your mobile number is <p>"+validMobileNumber);
document.write("<br>");
document.write("<p style=color:"+color+";>Your email is <p>"+validemail);

