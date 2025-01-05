const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const upload = require('./multer');

// POST route to add a new product
router.post(
  '/',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { name, off, avail, price, size } = req.body;
      const image = req.files['image'] ? req.files['image'][0].filename : null; // Accessing the uploaded image files
      const image2 = req.files['image2']
        ? req.files['image2'][0].filename
        : null; // Accessing the second image file

      const newProduct = new Product({
        name,
        image,
        image2,
        off,
        avail,
        price,
        size,
      });

      await newProduct.save();
      res.redirect('/adminHome'); // Redirect to admin home page after product is uploaded
    } catch (err) {
      console.error('Error uploading product:', err);
      res.status(500).send('Error uploading product');
    }
  }
);

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
