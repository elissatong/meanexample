var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    email: String,
    password: String // should be encrypted, raw String is only for temp demo purposes
});
