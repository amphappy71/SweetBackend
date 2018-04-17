//Import modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

//instansiate express app

var app = express();

//import routes

var route = require('./route/route');

//use imported route file

app.use('/api', route);

//connect to mongodb

mongoose.connect('mongodb://katielynn.ddns.net:27017');

//on connection

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB connected at port 27017');
});

//on connection error

mongoose.connection.on('error',()=>{
    console.log(err);
});

const PORT = 3000;

//adding Middleware

//add cors - Enables communication between domains
app.use(cors());

//add body-parser 
app.use(bodyparser.json());


app.get('/',(req, res)=>{
    res.send('Does this work?');
})



app.listen(PORT, ()=>{
    
    console.log('Server has been started at port: ' + PORT);
})