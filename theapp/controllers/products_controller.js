var User = require("../models/user");
var rp = require("request-promise");

function index (req, res, next) {
res.render('products', { user: req.user });

}


function show (req, res, next) {
  var req = rp.get({
      uri: "http://api.shopstyle.com/api/v2/products?pid=" + process.env.API_KEY,
      json: true
  })

  req.then(data => {
    console.log(data)
    res.render('products', {
      products: data.products,
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
