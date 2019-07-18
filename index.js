const express = require('express');
const path = require('path');
const productRouter = require('./routes/views/product');
const productRouterApi = require('./routes/api/product');
const isRequestAjaxOrApi = require('./utils/isRequestAjaxOrApi');
const boom = require('boom');

const {
    logErrors,
    wrapErrors,
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

//redirect
app.get('/', (req,res)=>{
    res.redirect('/products')
});

app.use((req,res,next)=>{
    if(isRequestAjaxOrApi(req)){
        const {
            output: { statusCode, payload}
        } = boom.notFound();

        res.status(statusCode).json(payload);
    }

    res.status(404).render("404");
});

//Error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

const server = app.listen(8000, () => {
    console.log(`Server is runing on port: ${server.address().port}`);
});