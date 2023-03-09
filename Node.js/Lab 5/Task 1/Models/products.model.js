//DB_URL
let mongoose = require("mongoose");
let DB_URL = "mongodb://0.0.0.0:27017/Shopping";
const valid = require("validator");
mongoose.connect(DB_URL, { useNewUrlParser: true });

//Schema
var ProductSchema = mongoose.Schema({
  name: String,
  quantity: Number,
  description: String,
  price: Number,
});

module.exports = mongoose.model("products", ProductSchema);
