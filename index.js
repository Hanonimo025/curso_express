const express = require('express');
const path = require('path');
const productRouter = require('./routes/views/product');
const productRouterApi = require('./routes/api/product')

const {
    logErrors,
    clientErrorHandler,
    errorHandler
} = require('./utils/middlewares/errorsHandlers');

//app
const app = express();
//middlewares
app.use(express.json())

//static files
//app.use('/static', express.static(path.join(__dirname), 'public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/products', productRouter);
app.use('/api/products', productRouterApi);

//Error handlers
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

const server = app.listen(8000, () => {
    console.log(`Server is runing on port: ${server.address().port}`);
});