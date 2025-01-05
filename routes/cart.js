const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate(
      'items.productId'
    );
    res.json(cart || { userId: req.params.userId, items: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/add', async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const productIndex = cart.items.findIndex(
      item => item.productId.toString() === productId
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += 1;
    } else {
      cart.items.push({ productId });
    }

    console.log('Saved');
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
