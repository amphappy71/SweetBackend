var express = require('express');
var router = express.Router();

const Worker = require('../model/worker');

router.get('/workers', (req, res, next)=>{
    Worker.find(function(err, worker){
        if(err){
            res.json(err);
        }
        else{
            res.json(worker);
        }
    });
});

router.post('/worker', (req, res, next)=>{
    let newWorker = new Worker({
        email: req.body.email,
        zip: req.body.zip,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    newWorker.save((err, worker)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Worker Added'});
        }
    });
});

module.exports = router;

