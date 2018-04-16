var express = require('express');
var router = express.Router();

const P_worker = require('../model/workers');

//get from database

router.get('/get_route', (req, res, next)=>{
    
});

//insert new data to MongoDB

router.post('/post_route',(req, res, next)=>{

});

//update MongoDB data

router.put('/put_route',(req, res, next)=>{

});

//delete MogoDB data

router.delete('/delete_route',(req, res, next)=>{
});

module.exports = router;
