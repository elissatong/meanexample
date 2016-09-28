// Import required packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Use either one of these database libraries
//var mongodb = require('mongodb').MongoClient;
var mongoose = require('mongoose');

// Global variables
var dbManager = mongoose;

// Define the database models
var Message = dbManager.model('Message', {
    msg: String
});

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.post('/api/message', function(req, res) {
    console.log(req.body);

    // Mongoose DB insertion
    var message = new Message(req.body);
    message.save();

    res.status(200);
});

dbManager.connect("mongodb://localhost:27017/test", function(err, db) {
    if (!err) {
        console.log("We are connected to MongoDB");
        GetMessages();
    }
});

var server = app.listen(5000, function() {
    console.log('listening on port: ', server.address().port);
});

function GetMessages() {
    Message.find({}).exec(function(err, result) {
        console.log(result);
    });
}
