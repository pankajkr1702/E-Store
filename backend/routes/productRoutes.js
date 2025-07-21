const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');
const Product = require('../models/Product');

// ✅ This route fetches ALL products
router.get('/', getProducts);

// ✅ This route fetches ONE product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch product' });
    }
});

// ✅ This route deletes ONE product
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete product' });
    }
});

// ✅ This route updates ONE product
router.put('/:id', async (req, res) => {
    try {
        const { name, price, image } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, image },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update product' });
    }
});

router.post("/", async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const newProduct = await Product.create({ name, price, image });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Failed to create product" });
  }
});

module.exports = router;
