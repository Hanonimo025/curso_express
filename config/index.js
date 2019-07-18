require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== "production",
    port: process.env.PORT,
    db: process.env.DB_URI,
    dbName: process.env.DB_NAME
}


module.exports = {config};