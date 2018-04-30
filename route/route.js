var express = require('express');
var router = express.Router();

const Worker = require('../model/worker');
const Product = require('../model/product');
const Transaction = require('../model/transaction');
const Shopper = require('../model/shopper');
const Admin = require('../model/admins');


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

router.get('/transactions', (req, res, next)=>{
    Transaction.find(function(err, transaction){
        if(err){
            res.json(err);
        }
        else{
            res.json(transaction);
        }
    });
});

router.get('/shoppers', (req, res, next)=>{
    Shopper.find(function(err, shopper){
        if(err){
            res.json(err);
        }
        else{
            res.json(shopper);
        }
    });
});

router.get('/admins', (req, res, next)=>{
    Admin.find(function(err, admin){
        if(err){
            res.json(err);
        }
        else{
            res.json(admin);
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

router.post('/transaction', (req, res, next)=>{
    let newTrans = new Transaction({
        productID: req.body.productID,
        shopperID: req.body.shopperID,
        productPrice: req.body.productPrice,
        saleState: req.body.saleState,
        taxRate: req.body.taxRate,
        quantity: req.body.quantity,
        total: req.body.total

    });
    newTrans.save((err, trans)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Transaction Added'});
        }
    });
});

router.post('/shopper', (req, res, next)=>{
    let newShopper = new Shopper({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        total: req.body.total,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    });
    newShopper.save((err, shopper)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Shopper Added'});
        }
    });
});

router.post('/admin', (req, res, next)=>{
    let newAdmin = new Admin({
        email: req.body.email,
        password: req.body.password
     });
    newAdmin.save((err, admin)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg: 'Administrator Added'});
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

router.put('/transaction/:id', (req, res, next)=>{
    Transaction.findOneAndUpdate({_id: req.params.id},{
        $set:{
            productID: req.body.productID,
            shopperID: req.body.shopperID,
            productPrice: req.body.productPrice,
            saleState: req.body.saleState,
            taxRate: req.body.taxRate,
            quantity: req.body.quantity,
            total: req.body.total
            }
        },
function(err, trans){
    if(err){
        res.json(err);
        }
        else{
            res.json(trans);
        }
})
});

router.put('/shopper/:id', (req, res, next)=>{
    Shopper.findOneAndUpdate({_id: req.params.id},{
        $set:{
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
            }
        },
function(err, shopper){
    if(err){
        res.json(err);
        }
        else{
            res.json(shopper);
        }
})
});

router.put('/admin/:id', (req, res, next)=>{
    Admin.findOneAndUpdate({_id: req.params.id},{
        $set:{
            email: req.body.email,
            password: req.body.password
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

router.delete('/transaction/:id', (req, res, next)=>{
    Transaction.remove({_id: req.params.id}, function(err, trans){
        if(err){
            res.json(err);
        }
        else{
            res.json(trans);
        }
    });
});

router.delete('/shopper/:id', (req, res, next)=>{
    Shopper.remove({_id: req.params.id}, function(err, shopper){
        if(err){
            res.json(err);
        }
        else{
            res.json(shopper);
        }
    });
});

router.delete('/admin/:id', (req, res, next)=>{
    Shopper.remove({_id: req.params.id}, function(err, admin){
        if(err){
            res.json(err);
        }
        else{
            res.json(admin);
        }
    });
});

module.exports = router;