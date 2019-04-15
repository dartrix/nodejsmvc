const express = require('express')
const router = express.Router();

const home = require('../controllers/homeController');

module.exports = app => {

    router.get('/', home.index );


    app.use(router);
}