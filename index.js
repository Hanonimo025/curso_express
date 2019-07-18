const express = require('express');
const path = require('path');
const app = express();
const productRouter = require('./routes/views/product');
const productRouterApi = require('./routes/api/product')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/products', productRouter);
app.use('/api/products', productRouterApi);

const server = app.listen(8000, () => {
    console.log(`Server is runing on port: ${server.address().port}`);
});