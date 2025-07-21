const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const User = require('../models/User');
const Order = require('../models/Order'); // Ensure you have Order model created

router.get('/', async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        const totalUsers = await User.countDocuments();
        const totalOrders = await Order.countDocuments();
        
        res.json({ totalProducts, totalUsers, totalOrders });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch analytics' });
    }
});

module.exports = router;
