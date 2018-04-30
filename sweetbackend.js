//Import modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

//instansiate express app

var app = express();

//import routes

var route = require('./route/route');

//connect to mongodb

mongoose.connect('mongodb://katielynn.ddns.net:27017/sweetts');

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

//use imported route file

app.use('/api', route);

app.get('/',(req, res)=>{
    console.log('Root route at: ' + Date()), //req happens here
    res.send('Does this work?'); //we sent this
})


app.listen(PORT, ()=>{
    console.log('Time:', Date());
    console.log('Server has been started at port: ' + PORT);
});