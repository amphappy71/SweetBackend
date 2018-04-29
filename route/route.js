var express = require('express');
var router = express.Router();

const Worker = require('../model/worker');
const Product = require('../model/product');


router.get('/products', (req, res, next)=>{
    Product.find(function(err, product){
        if(err){
            res.json(err);
        }
        else{
            res.json(product);
        }
    });
});

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

router.post('/product', (req, res, next)=>{
    let newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        price: req.body.price,
        size: req.body.size,
        color: req.body.color,
        imageURL: req.body.imageURL,
        inStock: req.body.inStock

    });
    newProduct.save((err, product)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Product Added'});
        }
    });
});

router.put('/worker/:id', (req, res, next)=>{
    Worker.findOneAndUpdate({_id: req.params.id},{
        $set:{
            email: req.body.email,
            zip: req.body.zip,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
    },
function(err, result){
    if(err){
        res.json(err);
    }
    else{
        res.json(result);
    }
})
});

router.put('/product/:id', (req, res, next)=>{
    Product.findOneAndUpdate({_id: req.params.id},{
        $set:{
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        price: req.body.price,
        size: req.body.size,
        color: req.body.color,
        imageURL: req.body.imageURL,
        inStock: req.body.inStock
            }
        },
function(err, result){
    if(err){
        res.json(err);
        }
        else{
            res.json(result);
        }
})
});

router.delete('/worker/:id', (req, res, next)=>{
    Worker.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

router.delete('/product/:id', (req, res, next)=>{
    Product.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;