// Require modules
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));

// Files
let mainHtml = path.join(__dirname, "../ClientSide/main.html");
let welcomeHtml = path.join(__dirname, "../ClientSide/welcome.html");
let welcomeHtmlStr = fs.readFileSync("../ClientSide/welcome.html").toString();
let scriptJS = path.join(__dirname, "../ClientSide/main.js");
let clientsJson = path.join(__dirname, "./clients.json");

// Variables
let PORT = process.env.PORT || 7003;
let userName = "";
let mobNumber = "";
let email = "";
let address = "";
var obj = {
  customers: [],
};

app.get("/main.html", (req, res) => {
  res.sendFile(mainHtml);
});

app.get("/welcome.html", (req, res) => {
  res.sendFile(welcomeHtml);
});

app.get("/main.js", (req, res) => {
  res.sendFile(scriptJS);
});

app.get("/clients.json", (req, res) => {
  res.sendFile(clientsJson);
});

// Form
app.post("/welcome.html", (req, res) => {
  userName = req.body.name.replace("+", " ");
  mobNumber = req.body.mobNum;
  email = req.body.email.replace("%40", "@");
  address = req.body.address;

  let newCustomer = {
    name: userName,
    mobNum: mobNumber,
    email: email,
    address: address,
  };
  fs.readFile("clients.json", "utf8", function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data); //now it an object
      obj.push(newCustomer); //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFileSync("clients.json", json, "utf8"); // write it back
    }
  });

  welcomeHtmlStr = welcomeHtmlStr.replace("{userName}", userName);
  welcomeHtmlStr = welcomeHtmlStr.replace("{MobileNumber}", mobNumber);
  welcomeHtmlStr = welcomeHtmlStr.replace("{email}", email);
  welcomeHtmlStr = welcomeHtmlStr.replace("{address}", address);

  res.send(welcomeHtmlStr);

  welcomeHtmlStr = welcomeHtmlStr.replace(userName, "{userName}");
  welcomeHtmlStr = welcomeHtmlStr.replace(mobNumber, "{MobileNumber}");
  welcomeHtmlStr = welcomeHtmlStr.replace(email, "{email}");
  welcomeHtmlStr = welcomeHtmlStr.replace(address, "{address}");
});

app.all("*", (req, res) => {
  console.log("Default Page");
  res.send("<h1>Error Page</h1>");
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT + "/main.html");
});
