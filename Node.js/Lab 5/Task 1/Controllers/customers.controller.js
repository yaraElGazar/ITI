const customersModel = require("../Models/customers.model");

let GetAllCustomers = async (req, res) => {
  let customers = await customersModel.find({});
  res.send(customers);
};

let AddNewCustomer = async (req, res) => {
  let newCustomer = req.body;
  let c = new customersModel(newCustomer);
  await c.save();
  res.json(c);
};

let GetCustomerByID = async (req, res) => {
  let ID = req.params.id;
  let customer = await customersModel.findById(ID);
  res.send(customer);
};

let DeleteCustomer = async (req, res) => {
  let ID = req.params.id;
  let customer = await customersModel.deleteOne({ _id: ID });
  res.send("Customer with ID: " + ID + " Deleted Successfully");
};

let UpdateCustomer = async (req, res) => {
  let ID = req.params.id;
  let customer = await customersModel.updateOne({ _id: ID }, req.body);
  res.send(customer);
};

module.exports = {
  GetAllCustomers,
  AddNewCustomer,
  GetCustomerByID,
  DeleteCustomer,
  UpdateCustomer,
};
