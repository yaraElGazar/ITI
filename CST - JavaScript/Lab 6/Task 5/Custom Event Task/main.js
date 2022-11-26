// Create a simple form that on submit display confirmation
// message and according to user action it will either stop submission
// from proceeding or it will continue form submission. Make your
// own custom event “timeout” that fires after 30 seconds if the user
// has not entered any data

// Getting the form element
let form = document.querySelector("form");

// Getting input elements
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");

// Adding eventListener to the form
form.addEventListener("submit", function (event) {
  let confirmation = confirm("Want to submit?");
  if (!confirmation) {
    alert("Submission stopped!");
    event.preventDefault();
  }
});

// Creating custom event
let myEvent = new Event("timeout");
form.addEventListener("timeout", function () {
  alert("Please enter your data!");
});

// The event will fire after 10 seconds if the form is empty
setTimeout(function () {
  if (nameInput.value === "" && ageInput.value === "") {
    form.dispatchEvent(myEvent);
  }
}, 10000);
