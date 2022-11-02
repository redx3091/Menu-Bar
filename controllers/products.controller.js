const Product = require('../models/product.model');

const CreateProduct = async (req, res) => {
  await Product
  .create(req.body)
  .then((product) =>res.status(201).json({product}))
  .catch((err) => res.status(400).json(err));
}

const GetAllProducts = async (req, res) => {
  await Product
    .find()
    .then((products) => res.status(200).json({products}))
    .catch((err) => res.status(400).json(err));
}

const UpdateProduct = async (req, res) => {
  const { id: productId } = req.params;
  await Product
  .findOneAndUpdate({_id: productId }, req.body, {
    new: true,
    runValidators: true,
  })
  .then((product) => res.status(200).json({product}))
  .catch((err) => res.status(400).json(err));
}

const DeleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  console.log({id: productId});
  await Product
  .findByIdAndDelete({_id: productId})
  .then((product) => res.status(200).json({product}) )
  .catch((err) => res.status(400).json(err));
}

module.exports = {
  CreateProduct,
  GetAllProducts,
  UpdateProduct,
  DeleteProduct,
}
