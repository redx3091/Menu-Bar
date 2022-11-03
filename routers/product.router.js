const express = require('express');
const Router = express.Router();

const AuthUser = require('../middleware/authentication');
const { CreateProduct, GetAllProducts, UpdateProduct, DeleteProduct } = require('../controllers/products.controller');

Router.route('/').post(AuthUser, CreateProduct).get(GetAllProducts);
Router.route('/:id').patch(AuthUser, UpdateProduct).delete(AuthUser, DeleteProduct)

module.exports = Router;
