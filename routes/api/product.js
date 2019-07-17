const express = require('express');
const router = express.Router();
const productMocks = require('../../utils/product-mocks')

router.get('/', (req, res, next)=>{
    res.status(200).json({
        data:productMocks,
        message: 'products listed'
    })
});

router.get('/:productId', (req,res,next)=>{
    const {productId} = req.params;

    res.status(200).json({
        data:productMocks[0],
        message:'product retrived'
    })
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        data:productMocks[0],
        message:'product created'
    });
});

router.put('/:productId', (req, res, next)=>{
    res.status(200).json({
        data:productMocks[0],
        message:'product updated'
    })
});

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        data:productMocks[0],
        message: 'product deleted'
    })
});

module.exports = router;