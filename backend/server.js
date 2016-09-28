// Import required packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Use either one of these database libraries
//var mongodb = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var Message = require('./models/message');
var User = require('./models/user');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get('/api/message', GetMessages);

app.post('/api/message', function (req, res) {
    console.log(req.body);

    // Mongoose DB insertion
    var message = new Message(req.body);
    message.save();

    res.status(200);
});

app.post('/auth/register', function (req, res) {
    console.log(req.body);
    var user = new User(req.body);
    user.save(function (err, result) {
        if (err) {
            res.status(500).send({
                message: err.message
            });
        }
        res.status(200);
    });
});

mongoose.connect("mongodb://localhost:27017/test", function (err, db) {
    if (!err) {
        console.log("We are connected to MongoDB");
    }
});

var server = app.listen(5000, function () {
    console.log('listening on port: ', server.address().port);
});

function GetMessages(req, res) {
    Message.find({}).exec(function (err, result) {
        res.send(result);
    });
}
