const mongoose = require('mongoose');

const adminregSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Collection
const AdminRegister = new mongoose.model('AdminReg', adminregSchema);
module.exports = AdminRegister;
