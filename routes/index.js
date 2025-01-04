var express = require('express');
var router = express.Router();
const userRegister = require('../models/user.models');
const AdminRegister = require('../models/admin.models');

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.redirect('/userLogin');
}

// Middleware to check if admin is logged in
function isAdminLoggedIn(req, res, next) {
  if (req.session.admin) {
    return next();
  }
  res.redirect('/adminLogin');
}

// GET ROUTES

router.get('/', isLoggedIn, function (req, res, next) {
  const { username, name } = req.session.user;
  res.render('index', { username, name });
});

router.get('/userLogin', function (req, res, next) {
  const error = req.flash('error');
  res.render('userLogin', { error });
});

router.get('/userRegister', function (req, res, next) {
  const error = req.flash('error');
  res.render('userRegister', { error });
});

router.get('/adminLogin', function (req, res, next) {
  const error = req.flash('error');
  res.render('adminLogin', { error });
});

router.get('/adminRegister', function (req, res, next) {
  const error = req.flash('error');
  res.render('adminRegister', { error });
});

router.get('/adminHome', isAdminLoggedIn, function (req, res, next) {
  const { username, fullname } = req.session.admin;
  res.render('adminHome', { username, fullname });
});

router.get('/adminProfile', isAdminLoggedIn, function (req, res, next) {
  res.render('adminProfile', { user: 'Vanshi' });
});

// POST ROUTES

router.post('/userRegister', async function (req, res, next) {
  try {
    const existingUser = await userRegister.findOne({
      username: req.body.username,
    });
    if (existingUser) {
      req.flash('error', 'Username already exists');
      return res.redirect('/userRegister');
    }
    const registerEmployee = new userRegister({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await registerEmployee.save();
    req.flash('success', 'Registration successful! Please log in.');
    res.redirect('/userLogin');
  } catch (error) {
    req.flash('error', error.message);
    res.redirect('/userRegister');
  }
});

router.post('/userLogin', async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userRegister.findOne({ username });
    if (!user || user.password !== password) {
      req.flash('error', 'Username or Password is Incorrect');
      return res.redirect('/userLogin');
    }
    // Create a session for the user
    req.session.user = {
      id: user._id,
      username: user.username,
      name: user.name,
    };
    res.status(201).redirect('/');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Admin Registration
router.post('/adminRegister', async function (req, res, next) {
  try {
    const existingAdmin = await AdminRegister.findOne({
      username: req.body.username,
    });
    if (existingAdmin) {
      req.flash('error', 'Username Already Exists');
      return res.redirect('/adminRegister');
    }

    const existingAdminID = await AdminRegister.findOne({ ID: req.body.ID });
    if (existingAdminID) {
      req.flash('error', 'Admin ID Already Exists');
      return res.redirect('/adminRegister');
    }

    const registerAdmin = new AdminRegister({
      username: req.body.username,
      ID: req.body.ID,
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
    });
    await registerAdmin.save();
    res.status(201).redirect('/adminLogin');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Admin Login
router.post('/adminLogin', async (req, res) => {
  try {
    const username = req.body.username;
    const ID = req.body.ID;
    const password = req.body.password;

    const admin = await AdminRegister.findOne({ username, ID });
    if (!admin || admin.password !== password) {
      req.flash('error', 'Username, Password, or ID is Incorrect');
      return res.redirect('/adminLogin');
    }
    // Create a session for the admin
    req.session.admin = {
      id: admin._id,
      username: admin.username,
      fullname: admin.fullname,
    };
    res.status(201).redirect('/adminHome');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// User Logout
router.get('/userLogout', function (req, res, next) {
  req.session.destroy(err => {
    if (err) {
      return next(err);
    }
    res.clearCookie('connect.sid');
    res.redirect('/userLogin');
  });
});

// Admin Logout
router.get('/adminLogout', function (req, res, next) {
  req.session.destroy(err => {
    if (err) {
      return next(err);
    }
    res.clearCookie('connect.sid');
    res.redirect('/adminLogin');
  });
});

module.exports = router;
