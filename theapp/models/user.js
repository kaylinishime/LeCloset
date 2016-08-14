var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var userSchema = new mongoose.Schema({
  f_name: String,
  l_name: String,
  email: String,
  password: String,
  gender: String,
  retailers: Array,
  products: Array,
  googleId: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
