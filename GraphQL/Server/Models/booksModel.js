const mongoose = require("mongoose");

let BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  numOfPages: Number,
});

module.exports = mongoose.model("books", BookSchema);
