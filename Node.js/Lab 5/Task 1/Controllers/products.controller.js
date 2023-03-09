const productsModel = require("../Models/products.model");

let GetAllProducts = async (req, res) => {
  let products = await productsModel.find({});
  res.send(products);
};

let AddNewProduct = async (req, res) => {
  let newProduct = req.body;
  let c = new productsModel(newProduct);
  await c.save();
  res.json(c);
};

let GetProductByID = async (req, res) => {
  let ID = req.params.id;
  let Product = await productsModel.findById(ID);
  res.send(Product);
};

let DeleteProduct = async (req, res) => {
  let ID = req.params.id;
  let Product = await productsModel.deleteOne({ _id: ID });
  res.send("Product with ID: " + ID + " Deleted Successfully");
};

let UpdateProduct = async (req, res) => {
  let ID = req.params.id;
  let Product = await productsModel.updateOne({ _id: ID }, req.body);
  res.send(Product);
};

module.exports = {
  GetAllProducts,
  AddNewProduct,
  GetProductByID,
  DeleteProduct,
  UpdateProduct,
};
