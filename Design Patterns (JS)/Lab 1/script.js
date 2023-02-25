let dateTime = new Date();

let cookiesArray = document.cookie.split("; ");

function addListItem(childValue) {
  $(".tasksBox").append(
    "<div class='task2'><div class='task'>" +
      childValue +
      "</div>" +
      "<button class='done' >Done</button> <button class='delete' >Delete</button><br></div>"
  );
}

function checkAvailableCookies() {
  cookiesArray.map((cookie) => {
    let cookieValue = cookie.split("=")[1];
    // if cookie has a value
    if (cookieValue) {
      // if cookie is not deleted
      if (!cookie.includes("deleted")) {
        addListItem(cookieValue);
      }
    }
  });
}

function setCookie() {
  if ($("#taskInput").val()) {
    // if there is text in the input field add it to the list
    let taskInputValue = $("#taskInput").val();
    addListItem(taskInputValue);
    // set expire date
    dateTime.setMonth(dateTime.getMonth() + 1);
    document.cookie = `${taskInputValue} = ${taskInputValue}  ; expires=${dateTime}`;
    // if text field is empty
  } else {
    throw new Error("Cookie is empty");
  }
}

function deleteCookie() {
  var removeMe = $(this).siblings("div").text();
  document.cookie = `${removeMe} = ${removeMe} deleted  ; expires=1/1/2001`;
  $(this).parent(".task2").remove();
}

checkAvailableCookies();

$("#btnAdd").on("click", setCookie);

$(document).on("click", ".delete", deleteCookie);

$(document).on("click", ".done", function () {
  $(this).parent(".task2").toggleClass("TaskDone");
});
