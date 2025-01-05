const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  off: {
    type: String,
    required: true,
  },
  avail: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('product', prodSchema);
