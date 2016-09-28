var User = require('../models/user');

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
                res.status(200);
            });
        });


    }
}
