const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
      let urlArray = req.url.split("/");
      let operation = urlArray[1];
      let numbers = [];
      let result;
      for (let i = 2; i < urlArray.length; i++) {
        numbers.push(parseInt(urlArray[i]));
      }

      if (operation === "add") {
        result = 0;
        for (let i = 0; i < numbers.length; i++) {
          result += numbers[i];
        }
      } else if (operation === "mult") {
        result = 1;
        for (let i = 0; i < numbers.length; i++) {
          result *= numbers[i];
        }
      } else if (operation === "min") {
        result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
          result -= numbers[i];
        }
      } else if (operation === "div") {
        result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
          result /= numbers[i];
        }
      } else {
        result = "Operation unavailable";
      }

      fs.appendFileSync("result.txt", result + "\n");
      res.write("The result is: " + result);
    }
    res.end();
  })
  .listen("7000");
