const express = require('express');
const Router = express.Router();

const { CreateProduct, GetAllProducts, UpdateProduct, DeleteProduct } = require('../controllers/products.controller');

Router.route('/').post(CreateProduct).get(GetAllProducts);
Router.route('/:id').patch(UpdateProduct).delete(DeleteProduct)

module.exports = Router;
