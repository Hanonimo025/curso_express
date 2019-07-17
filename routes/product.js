const express = require('express');
const router = express.Router();
const productMocks = require('../utils/product-mocks')


router.get('/', (req, res, next)=>{
    res.render('products', {productMocks});
});

module.exports = router;

