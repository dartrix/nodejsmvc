const morgan = require('morgan');
const path = require('path')
const express = require('express');
const errorHandler = require('errorhandler');
const multer = require('multer');

const expressVue = require('express-vue');


const routes = require('../routes');

module.exports = app =>{

    app.set('port', process.env.PORT || 8080);
    app.set('views', path.join(__dirname,'../views'));

    const vueOptions = {
      rootPath: app.get('views'),
      };
    const expressVueMiddleware = expressVue.init(vueOptions);

    app.use(expressVueMiddleware);
    app.use(morgan('dev'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    routes(app);

    app.use('/public', express.static(path.join(__dirname, '../public')));

    if('dev' === app.get('env')) {
        app.use(errorHandler());
      }
    
    return app;
}