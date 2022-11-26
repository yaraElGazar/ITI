// • getCookie(cookieName):
// o Retrieves a cookie value based on a cookie name.
function getCookie(cookieName) {

    let cookieValue;
    let custArray = allCookieList();
    cookieValue = custArray[cookieName];
    
    return cookieValue;

}

// • setCookie(cookieName,cookieValue[,expiryDate]):
// o Sets a cookie based on a cookie name, cookie value, 
// and expiration date.
function setCookie(cookieName, cookieValue, expiryDate) {
    if(typeof expiryDate === undefined) {
        document.cookie = cookieName + "=" + cookieValue;
    }else{
        document.cookie = cookieName + "=" + cookieValue + "; expires=" + expiryDate;
    }
}

// • deleteCookie(cookieName):
// o Deletes a cookie based on a cookie name.
function deleteCookie(cookieName) {
    let expDate = new Date();
    document.cookie = cookieName + "=; expires=" + expDate;
}

// • allCookieList():
// o returns a list of all stored cookies
function allCookieList() {
    let cookies = document.cookie;
    let splittedCookies = cookies.split(";");
    let custArray = [];

    for (let i = 0; i < splittedCookies.length; i++) {
        let keyvalue = splittedCookies[i].split("=");
        custArray[(keyvalue[0]).trim()] = keyvalue[1].trim();
    }
    return custArray;
}

// • hasCookie(cookieName):
// o Check whether a cookie exists or not
function hasCookie(cookieName) {
   let cookieValue = getCookie(cookieName);
   let result;

   if (cookieValue === '') {
    result = cookieName + ' cookie does not exist';
   } else {
    result = cookieName + ' cookie exists and the value is ' + cookieValue;
   }
   return result
}
