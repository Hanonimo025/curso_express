const porductMocks = require('../utils/product-mocks');
const MongoLib = require('../lib/mongo');

class ProductService {

    constructor(){
        this.collection = 'porducts';
        this.mongoDb = new MongoLib();
    }

    async getProducts({ tags }){
        const query = tags && { tags:{ $in: tags} };
        const products = await this.mongoDb.getAll(this.collection, query);

        return products || [];
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