// Visiting the site
let body = document.querySelector("body");
body.onload = function () {
    let currentTime = getCookie("visitTimes");
    setCookie("visitTimes", parseInt(currentTime) + 1);
}

// Printing Info
function printInfo() {
    let profileImage = document.querySelector("#profile-img");
    profileImage.src = "images/" + getCookie("gender") + ".jpeg";

    let greeting = document.querySelector("#greeting");
    greeting.innerHTML = "<b>Welcome <span style='color:" + getCookie("color") + "'>" + getCookie("name") + " </span>, you have visited the site <span style='color:" + getCookie("color") + "'>" + getCookie("visitTimes") + " </span> times! </b>"
    }
printInfo();
console.log(allCookieList());