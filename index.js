const express = require('express');
const path = require('path');
const app = express();
const productRouter = require('./routes/product');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res, next) =>{
    res.send({text: 'Hola Mundo'})
});

app.use('/products', productRouter);

const server = app.listen(8000, ()=>{
    console.log(`Server is runing on port: ${server.address().port}`);
});