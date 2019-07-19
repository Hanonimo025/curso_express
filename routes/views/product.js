const express = require('express');
const passport = require('passport');
const router = express.Router();
const ProductService = require('../../services/product');

const productService = new ProductService();

//jwt
require('../../utils/auth/strategies/jwt');

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

router.get('/prueba', passport.authenticate('jwt', {sesion: false}), (req, res, next) => {
    res.render('prueba');
});

module.exports = router;