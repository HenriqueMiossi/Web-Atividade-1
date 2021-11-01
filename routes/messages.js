const { resolveSoa } = require('dns');
var express = require('express');
var router = express.Router();
var Message = require("../assets/app/models/message")

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro Aconteceu na hora de enviar a mensagem',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Mensagem salve com sucesso",
            objMessageSave : result
            });
        });
    });
module.exports = router;