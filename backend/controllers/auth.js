var User = require('../models/user');
var jwt = require('jwt-simple');
var moment = require('moment');

var SECRET_KEY = 'need to insert a secret key';

module.exports = {
    secret: SECRET_KEY,
    register: function (req, res) {
        console.log(req.body);

        User.findOne({
            email: req.body.email
        }, function (err, existingUser) {

            if (existingUser) {
                return res.status(409).send({message: 'Email is already registered'});
            }

            // No existing email, so continue to create a new user
            var user = new User(req.body);
            user.save(function (err, result) {
                if (err) {
                    res.status(500).send({
                        message: err.message
                    });
                }
                res.status(200).send({token: createToken(result)});
            });
        });
    },
    login: function(req, res) {
        User.findOne({
            email: req.body.email
        }, function(err, user) {

            // Can't find user of login email
            if (!user) {
                return res.status(401).send({message: 'Email or Password invalid'});
            }

            if (req.body.pwd == user.pwd) {
                res.send({token: createToken(user)});
            }
            else {
                return res.status(401).send({
                    message: 'Invalid email and/or password'
                });
            }
        });
    }
}

function createToken(user) {
    var payload = {
        sub: user._id, // subject
        iat: moment().unix(), // issue at time
        exp: moment().add(14, 'days').unix() // expiry time
    };

    // TODO: use a secret key
    return jwt.encode(payload, SECRET_KEY);
}
