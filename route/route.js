var express = require('express');
var router = express.Router();

const Worker = require('../model/workers');

//get from database

router.get('/workers', (req, res, next)=>{
    Worker.find(function(err,workers){
        if(err){
            res.json(err);  //res method provided by express (adds header, +)
        }
        else{
            console.log("get works");
            res.json(workers); //return all the workers
        }
    });

});

//insert new data to MongoDB

router.post('/worker', (req, res, next)=>{
    let newWorker = new Worker({
        email:req.body.email,
        zip:req.body.zip,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    });
    newWorker.save((err, worker)=>{
        if(err){
            req.json(err);
        }
        else{
            res.json({msg: 'Worker has been added'});
        }
    });
});

//update MongoDB data

router.put('/put_route',(req, res, next)=>{

});

//delete MogoDB data

router.delete('/delete_route',(req, res, next)=>{
});

module.exports = router;
