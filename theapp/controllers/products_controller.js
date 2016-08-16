var User = require("../models/user");
var rp = require("request-promise");
var _ = require('underscore');

function index (req, res, next) {
res.render('products', { user: req.user });

}


function show (req, res, next) {
  var req = rp.get({
      uri: "http://api.shopstyle.com/api/v2/retailers?pid=" + process.env.API_KEY,
      json: true
  })

  req.then(data => {
    console.log(data)
    res.render('products', {
      retailers: data.retailers,
      user: req.user
    })
  })

}

function update (req, res, next) {

}

function destroy (req, res, next) {

}

module.exports = {
  index:   index,
  show:    show,
  update:  update,
  destroy: destroy
}
