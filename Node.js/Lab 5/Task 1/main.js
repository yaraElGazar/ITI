// Config
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const CustomersRoutes = require("./Routes/customers.routes");
const ProductsRoutes = require("./Routes/products.routes");
let PORT = process.env.PORT || 7005;

// MiddleWares
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Endpoints
app.use("/api/customers", CustomersRoutes);
app.use("/api/products", ProductsRoutes);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
