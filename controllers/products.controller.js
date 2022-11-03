const Product = require('../models/product.model');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors/index.errors')

const CreateProduct = async (req, res) => {
  await Product
  .create(req.body)
  .then((product) =>res.status(StatusCodes.CREATED).json(product))
}

const GetAllProducts = async (req, res) => {
  await Product
    .find()
    .then((products) => res.status(StatusCodes.OK).json(products))
}

const UpdateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findByIdAndUpdate({
    _id: productId
  })

  if (!product) {
    throw new NotFoundError(`No existe producto con el id ${productId}`)
  }

  res.status(StatusCodes.OK).json(product)
}

const DeleteProduct = async (req, res, next) => {
  const {params: {id: productId} } = req

  const product = await Product.findByIdAndRemove({
    _id: productId
  })
  if(!product){
    throw new NotFoundError(`No se encontro poducto con el id: ${productId}`)
  }
  res.status(200).json('producto eliminado')
}

module.exports = {
  CreateProduct,
  GetAllProducts,
  UpdateProduct,
  DeleteProduct,
}
