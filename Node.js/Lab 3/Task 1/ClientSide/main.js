// View all button
let btn = document.querySelector("#btn");
// obj to store data
let obj;

// Onload event
window.addEventListener("load", loadHandler);

// Add click event listener to view all button
btn.addEventListener("click", buttonHandler);

function loadHandler() {
  // Ajax to recieve the data from JSON file
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "clients.json", true);
  xhr.getResponseHeader("Content-type", "application/json");

  xhr.onload = function () {
    obj = JSON.parse(this.responseText);
    // Add data to the table
    let tbody = document.querySelector("tbody");
    for (let i = 0; i < obj.length; i++) {
      tbody.innerHTML += `
    <tr>
    <th scope="row">${i + 1}</th>
    <td>${obj[i].name}</td>
    <td>${obj[i].mobNum}</td>
    <td>${obj[i].email}</td>
    <td>${obj[i].address}</td>
    
  </tr>`;
    }
  };
  xhr.send();
}

function buttonHandler() {
  let table = document.querySelector(".table");
  table.removeAttribute("style");
}
