let userName;
let userAge;
let userGender;
let favColor;

// Adding cookies
function addCookies() {
    // Storing info
        userName = document.querySelector("#name").value;
        userAge = document.querySelector("#age").value;

        function getGender() {
            let options = document.getElementsByName("gender");
            let selected;
            for(let i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    selected = options[i].value;
                }
            }
        return selected;
        }

        userGender = getGender();
        favColor = document.querySelector("#color").value;
    // Setting Cookies
        setCookie("name", userName);
        setCookie("age", userAge);
        setCookie("gender", userGender);
        setCookie("color", favColor);
        setCookie("visitTimes", 1);

}

// Redirect the user to the greeting page when the register button is clicked
let button = document.querySelector("#register-button");
button.onclick = function () {
    addCookies();
    location.assign("greeting.html");
    
}






