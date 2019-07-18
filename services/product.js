const MongoLib = require('../lib/mongo');

class ProductService {

    constructor(){
        this.collection = 'products';
        this.mongoDb = new MongoLib();
    }

    async getProducts({ tags }){
        const query = tags && { tags:{ $in: tags} };
        const products = await this.mongoDb.getAll(this.collection, query);

        return products || [];
    }

    async getProduct({productId}){
        const product = await this.mongoDb.get(this.collection, productId);
        return product;
    }

    async createProduct({product}){
        const productCreated = await this.mongoDb.create(this.collection, product);
        return productCreated;
    }

    async updateProduct({productId, product}){
        const product = await this.mongoDb.update(this.collection, productId, product);
        return product;
    }

    async deleteProduct({productId}){
        const product = await this.mongoDb.delete(this.collection, productId);
        return product;
    }

}

module.exports = ProductService;