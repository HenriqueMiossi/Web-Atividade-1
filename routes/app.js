var express = require('express');
var router = express.Router();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var coockieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://localhost:27017/node-angular');

var User = require('../assets/app/models/user');
router.get('/node-mongodb-mongoose-user', function (req,res,next){
    res.render('node');
})

router.post('/node-mongodb-mongoose-user', function (req,res,next){
    var emailVar = req.body.emailBody;
    var userObject = new User({
        firstName: 'Leo',
        lastName: 'Chaga',
        password: "senha",
        email: emailVar
    });
    userObject.save();

    res.redirect('/node-mongodb-mongoose-user');
});


router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/message', function (req, res, next) {
    var messageVar = req.body.messageBody;
    res.redirect('/message/' + messageVar);
});

router.get('/message/:msgParam', function (req, res, next) {
    res.render('node', {message: req.params.msgParam});
});

router.get('/login-inicio', function (req, res, next) {
    res.render('login-inicio');
});


router.get('/register', function (req, res, next) {
    res.render('register');
});


module.exports = router;
