const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("welcome!");
});
app.post("/", (req, res) => {
  let data = req.body;
  res.send("Data Received: " + JSON.stringify(data.name));
});

var server = app.listen(3000);
module.exports = server;
