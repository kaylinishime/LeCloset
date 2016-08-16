var User = require("../models/user");
var rp = require("request-promise");

function home (req, res, next) {
  console.log(req.user);
  if (req.user) {
    console.log(req.user._id);
  }
  res.render('index', { user: req.user });
}

function show (req, res, next) {
var req = rp.get({
      uri: "http://api.shopstyle.com/api/v2/products?pid=" + process.env.API_KEY,
      json: true
  })
  req.then(data => {
    res.render('profiles', {
      products: data.products,
      user: req.user
    })
  })

}

function close (req, res, next) {
  res.render('close');
}

function edit (req, res, next) {

}

function update (req, res, next) {

}

function destroy (req, res, next) {

}

module.exports = {
  home:     home,
  show:     show,
  close:    close,
  edit:     edit,
  update:   update,
  destroy:  destroy,
}
