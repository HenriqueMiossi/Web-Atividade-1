var express = require('express');
var router = express.Router();

var User = require('../models/user');
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

module.exports = router;
