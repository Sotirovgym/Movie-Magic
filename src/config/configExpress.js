const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const { auth } = require('../middlewares/userMiddlewear');

function configExpress(app){
    app.use(express.static(path.join(__dirname, '../static')));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth);
    return app;
}

module.exports = configExpress;