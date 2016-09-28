var User = require('../models/user');
var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {
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


    }
}

function createToken(user) {
    var payload = {
        sub: user._id, // subject
        iat: moment().unix(), // issue at time
        exp: moment().add(14, 'days').unix() // expiry time
    };

    // TODO: use a secret key
    return jwt.encode(payload, 'need to insert a secret key');
}
