const porductMocks = require('../utils/product-mocks');

class ProductService {

    constructor(){}

    getProducts({tags}){
        return Promise.resolve(porductMocks);
    }

    getProduct({productId}){
        return Promise.resolve(porductMocks[0]);
    }

    createProduct({product}){
        return Promise.resolve(porductMocks[0]);
    }

    updateProduct({productId, product}){
        return Promise.resolve(porductMocks[0]);
    }

    deleteProduct({productId}){
        return Promise.resolve(porductMocks[0]);
    }

}

module.exports = ProductService;