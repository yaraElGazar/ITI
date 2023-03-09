// Modules
let express = require("express");
let router = express.Router();

// Controllers
const customersController = require("../Controllers/customers.controller");

// Get all customers
router.get("/", customersController.GetAllCustomers);

// Get customer by id
router.get("/:id", customersController.GetCustomerByID);

//Add New customer
router.post("/", customersController.AddNewCustomer);

//Update customer By ID
router.put("/:id", customersController.UpdateCustomer);

//Delete customer By ID
router.delete("/:id", customersController.DeleteCustomer);

module.exports = router;
