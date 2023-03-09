// Modules
let express = require("express");
let router = express.Router();

// Controllers
const productsController = require("../Controllers/products.controller");

// Get all products
router.get("/", productsController.GetAllProducts);

// Get product by id
router.get("/:id", productsController.GetProductByID);

//Add New product
router.post("/", productsController.AddNewProduct);

//Update product By ID
router.put("/:id", productsController.UpdateProduct);

//Delete product By ID
router.delete("/:id", productsController.DeleteProduct);

module.exports = router;
