//Import modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

//instansiate express app

var app = express();

//connect to mongodb

mongoose.connect('mongodb://katielynn.ddns.net:27017/sweetlist');

//on connection

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB connected at port 27017');
});

//on connection error

mongoose.connection.on('error',()=>{
    console.log(err);
});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('Server has been started at port: ' + PORT);
})