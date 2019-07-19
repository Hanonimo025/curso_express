const boom = require('boom');
const isRequestAjaxOrApi = require('../../utils/isRequestAjaxOrApi');

const {
    config
} = require('../../config');

function withErrorStack(err, stack){
    if(config.dev){
        return {...err, stack}
    }
}

function logErrors(err, req, res, next) {
    console.log(err);
    next(err);
}

function wrapErrors(err, req, res, next){
    if(!err.isBoom) {
        next(boom.badImplementation(err))
    }

    next(err);
}

function clientErrorHandler(err, req, res, next) {
    const {
        output:{ statusCode, payload }
    } = err;
    // Catch errors for AJAX request if an error ocurrs while streaming
    if (isRequestAjaxOrApi(req) || req.headersSent) {
        res.status(statusCode).json(withErrorStack(payload,err.stack));
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next){
    console.log('Este es el error:',err)
    const {
        output: {statusCode, payload}
    } = err;

    res.status(statusCode);
    res.render("error", withErrorStack(payload, err.stack));
}

module.exports = {
    logErrors,
    wrapErrors,
    clientErrorHandler,
    errorHandler
}