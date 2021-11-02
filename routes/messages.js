const { resolveSoa } = require('dns');
var express = require('express');
var router = express.Router();
var Message = require("../assets/app/models/message")

router.get('/', function (req, res, next) {
    Message.find()
    .exec(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro Aconteceu na hora de buscar a mensagem',
                myError: err
            });
        }
        res.status(200).json({
            myMsgSucess: "Mensagem recuperada com sucesso",
            objSMessageSRecuperadoS : result
            });
        });
    });

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
            myMsgSucess: "Mensagem salva com sucesso",
            objMessageSave : result
            });
        });
    });



    router.delete('/:id', function (req, res, next) {
        Message.findOne()
            .exec(function (err, result) {
                console.log(req.params);
                if (err) {
                    return res.status(500).json({
                        myErroTitle: 'Um erro Aconteceu na hora de deletar a mensagem',
                        myError: err
                    });
                }
                result.delete();
                res.status(200).json({
                    myMsgSucess: "Mensagem deletada com sucesso"
                });
            });
    });
    
module.exports = router;