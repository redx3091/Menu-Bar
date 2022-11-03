const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('products', productSchema)
