var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    email: String,
    pwd: String     // TODO: encrypt the password
});
