const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    try {
        const { userId, products, totalAmount } = req.body;
        const newOrder = await Order.create({
            userId,
            products,
            totalAmount,
        });
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ message: 'Failed to place order' });
    }
});

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('userId').populate('products.productId');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
});

module.exports = router;
