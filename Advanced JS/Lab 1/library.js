// • getCookie(cookieName):
// o Retrieves a cookie value based on a cookie name.
function getCookie(cookieName) {
  // Check if there is only one parameter
  if (arguments.length === 1) {
    // Check if cookie exists
    if (hasCookie(cookieName)) {
      let cookieValue;
      let custArray = allCookieList();
      cookieValue = custArray[cookieName];

      return cookieValue;
    } else {
      let err = new Error("Cookie not found");
      throw err;
    }
  }
  let err = new Error("Only one argument required");
  throw err;
}

// • setCookie(cookieName,cookieValue[,expiryDate]):
// o Sets a cookie based on a cookie name, cookie value,
// and expiration date.
function setCookie(cookieName, cookieValue, expiryDate) {
  if (typeof cookieName == "string") {
    if (typeof expiryDate === undefined) {
      document.cookie = cookieName + "=" + cookieValue;
    } else {
      if (expiryDate instanceof Date) {
        document.cookie =
          cookieName + "=" + cookieValue + "; expires=" + expiryDate;
      } else {
        let err = new Error("expiryDate must be a date");
        throw err;
      }
    }
  } else {
    let err = new Error("Cookie must be a string");
    throw err;
  }
}

// • deleteCookie(cookieName):
// o Deletes a cookie based on a cookie name.
function deleteCookie(cookieName) {
  if (hasCookie(cookieName)) {
    let expDate = new Date();
    document.cookie = cookieName + "=; expires=" + expDate;
  } else {
    let err = new Error("Cookie not found");
    throw err;
  }
}

// • allCookieList():
// o returns a list of all stored cookies
function allCookieList() {
  let cookies = document.cookie;
  let splittedCookies = cookies.split(";");
  let custArray = [];

  for (let i = 0; i < splittedCookies.length; i++) {
    let keyvalue = splittedCookies[i].split("=");
    custArray[keyvalue[0].trim()] = keyvalue[1].trim();
  }
  return custArray;
}

// • hasCookie(cookieName):
// o Check whether a cookie exists or not
function hasCookie(cookieName) {
  if (typeof cookieName == "string") {
    let cookies = allCookieList(); // Array of cookies
    for (let i = 0; i < cookies.length; i++) {
      if (cookies[cookieName] === "") {
        return false;
      } else {
        return true;
      }
    }
  } else {
    let err = new Error("Cookie name must be a string");
    throw err;
  }
}
