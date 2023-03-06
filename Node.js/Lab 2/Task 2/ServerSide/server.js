// Require modules
const http = require("http");
const fs = require("fs");

// Files
let mainHtml = fs.readFileSync("../ClientSide/main.html").toString();
let welcomeHtml = fs.readFileSync("../ClientSide/welcome.html").toString();
let styleCSS = fs.readFileSync("../ClientSide/styles.css").toString();
let scriptJS = fs.readFileSync("../ClientSide/main.js").toString();

// Variables
let PORT = 7000;
let userName = "";
let mobNumber = "";
let email = "";
let address = "";
var obj = {
  customers: [],
};

http
  .createServer((req, res) => {
    // Handle request methods

    // GET
    if (req.method === "GET") {
      switch (req.url) {
        case "/main.html":
        case "/ClientSide/main.html":
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.write(mainHtml);
          break;
        case "/styles.css":
        case "/ClientSide/styles.css":
          res.write(styleCSS);
          break;
        case "/welcome.html":
        case "/ClientSide/welcome.html":
          res.write(welcomeHtml);
          break;
        case "/main.js":
        case "/ClientSide/main.js":
          res.write(scriptJS);
          break;
        case "/clients.json":
          res.write(fs.readFileSync("clients.json", "utf8"));
          break;
        default:
          if (req.url.includes("/ClientSide/welcome.html")) {
            res.write(welcomeHtml);
          } else {
            res.write("<h1>Page Not Found</h1>");
          }
      }
      res.end();
      // POST
    } else if (req.method === "POST") {
      // Recieve Data
      req.on("data", (data) => {
        let dataArr = data.toString().split("&");
        for (let i = 0; i < dataArr.length; i++) {
          let key = dataArr[i].split("=")[0];
          let value = dataArr[i].split("=")[1];

          if (key === "name") {
            userName = value.replace("+", " ");
          } else if (key === "mobNum") {
            mobNumber = value;
          } else if (key === "email") {
            email = value.replace("%40", "@");
          } else if (key === "address") {
            address = value;
          }
        }
        let newCustomer = {
          name: userName,
          mobNum: mobNumber,
          email: email,
          address: address,
        };
        fs.readFile(
          "clients.json",
          "utf8",
          function readFileCallback(err, data) {
            if (err) {
              console.log(err);
            } else {
              obj = JSON.parse(data); //now it an object
              obj.push(newCustomer); //add some data
              json = JSON.stringify(obj); //convert it back to json
              fs.writeFileSync("clients.json", json, "utf8"); // write it back
            }
          }
        );
      });
      req.on("end", () => {
        res.setHeader("content-type", "text/html");

        // Write info to welcome page
        welcomeHtml = welcomeHtml.replace("{userName}", userName);
        welcomeHtml = welcomeHtml.replace("{MobileNumber}", mobNumber);
        welcomeHtml = welcomeHtml.replace("{email}", email);
        welcomeHtml = welcomeHtml.replace("{address}", address);

        res.write(welcomeHtml);
        res.end();
        welcomeHtml = welcomeHtml.replace(userName, "{userName}");
        welcomeHtml = welcomeHtml.replace(mobNumber, "{MobileNumber}");
        welcomeHtml = welcomeHtml.replace(email, "{email}");
        welcomeHtml = welcomeHtml.replace(address, "{address}");
      });
    }
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
