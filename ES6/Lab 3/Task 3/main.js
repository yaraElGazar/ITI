// 3) Promise
// a) Create your function that takes url of required service to be
// consumed and return a promise.
// b) Make ajax request using your function to consume the
// service of the following link
// “https://jsonplaceholder.typicode.com/users”
// c) Display its output in a table style your website via
// bootstrap

let rows = "";

function get(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i in data) {
        rows += `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].username}</td>
            <td>${data[i].email}</td>
            <td>${data[i].phone}</td>
            </tr>`;
        let tbody = document.querySelector("tbody");
        tbody.innerHTML = rows;
      }
    });
}

get("https://jsonplaceholder.typicode.com/users");
