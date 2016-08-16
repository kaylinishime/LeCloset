var User = require("../models/user");

function create (req, res, next) {

  var req = rp.get({
      uri: "http://api.shopstyle.com/api/v2/products?pid=" + process.env.API_KEY + "&fl=r1&offset=0&limit=50",
      json: true
  })

  req.then(data => {
    console.log(data)
    res.render('products', {
      retailers: data.retailers,
      products: products.id
      
    })
  })

}

function destroy (req, res, next) {

}

module.exports = {
  create:  create,
  destroy: destroy
}
