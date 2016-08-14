var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  retailers: Array,
  products: Array,
  googleId: String,
  created: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
