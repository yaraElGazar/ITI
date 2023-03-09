//DB_URL
let mongoose = require("mongoose");
let DB_URL = "mongodb://0.0.0.0:27017/Shopping";
const valid = require("validator");
mongoose.connect(DB_URL, { useNewUrlParser: true });

//Schema
var CustomerSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    validate: {
      validator: (val) => {
        return valid.isEmail(val);
      },
      message: "Email is Not Valid !",
    },
  },
  address: String,
});

module.exports = mongoose.model("customers", CustomerSchema);
