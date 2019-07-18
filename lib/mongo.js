const { MongoClient } = require('mongodb');
const { config } = require('../config');
const URI_DB = config.db;
const DB_NAME = config.dbName;

class MongoLib {
    constructor(){
        this.client = new MongoClient(URI_DB, {useNewUrlParser: true});
        this.dbName = DB_NAME;
    }

    connect(){
        return new Promise((resolve, reject) => {
            this.client.connect(err =>{
                if (err){
                    reject(err);
                }

                console.log('Connected successfully to mongo');
                resolve(this.client.db(this.dbName));
            });
        });
    }

    getAll(collection, query){
        return this.connect().then(db => {
            return db
            .collection(collection)
            .find(query)
            .toArray();
        });
    }
}

module.exports = MongoLib;