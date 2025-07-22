const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');
const Product = require('../models/Product');
const upload = require('../middlewares/uploadMiddleware');
const { cloudinary } = require('../utils/cloudinary');

// Fetch All
router.get('/', getProducts);

// Fetch One
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch product' });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete product' });
    }
});

// Update
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

// Upload Utility
const streamUpload = (buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { resource_type: "image" },
            (error, result) => {
                if (result) resolve(result.secure_url);
                else reject(error);
            }
        );
        stream.end(buffer);
    });
};

// Create Product
router.post("/", upload.single('imageFile'), async (req, res) => {
    try {
        const { name, price, imageUrl } = req.body;
        let imagePath = imageUrl;

        if (req.file) {
            imagePath = await streamUpload(req.file.buffer);
        }

        const newProduct = await Product.create({ name, price, image: imagePath });
        res.status(201).json(newProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create product" });
    }
});

module.exports = router;
