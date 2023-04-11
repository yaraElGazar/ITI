const mongoose = require("mongoose");

let AuthorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  books: [{ type: String }],
});

module.exports = mongoose.model("authors", AuthorSchema);
