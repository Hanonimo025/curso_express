const express = require('express');
const router = express.Router();
const ProductService = require('../../services/product');

const productService = new ProductService();

router.get('/', async (req, res, next) => {
    const {
        tags
    } = req.query;
    try {
        const products = await productService.getProducts({
            tags
        });
        res.render('products', {
            products
        });
    } catch (err) {
        next(err)
    }
});

module.exports = router;