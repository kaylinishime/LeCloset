var User = require("../models/user");
var rp = require("request-promise");
var _ = require('underscore');

function show (req, res, next) {
  console.log(req.user);
  var request = rp.get({
      uri: "http://api.shopstyle.com/api/v2/retailers?pid=" + process.env.API_KEY,
      json: true
  })
  request.then(data => {
    res.render('products', {
      retailers: data.retailers,
      user: req.user
    });
  });
}

function get (req, res, next) {
  User.findById(req.user._id, function(err, user) {
    // Establish an empty Promises Array
    var promises = []
    // Iterate through each product ID in our User model.
    user.products.forEach(function (product) {
      var req = rp.get({
        uri: `http://api.shopstyle.com/api/v2/products/${product}?pid=` + process.env.API_KEY,
        json: true
      })
      // Pushing the API response into our Promises Array
      promises.push(req)
    })

    Promise.all(promises)
            .then(data => {
              res.json(data);
    });
  });
}

function create (req, res, next) {
  User.findById(req.user._id, function(err, user) {
    if (err) {
      res.json({message: `Could not find user because ${err}`});
    }
    else if (!user) {
      res.json({message: "No user with this id."});
    }
    else {
      if(req.body.product) user.products.push(req.body.product);
      user.save(function(err, user) {
        if (err) {
          res.json({error: err})
        }
        else {
          res.json(user);
        }
      });
    };
  });
}

function destroy (req, res, next) {
  User.findById(req.user._id, function(err, user) {
    if (err) {
      res.json({message: `Could not find user because ${err}`});
    }
    else if (!user) {
      res.json({message: "No user with this id"});
    }
    else {
      if(req.body.product) {
        for (var i = 0; i < user.products.length; i++) {
          if (req.body.product == user.products[i]) {
            user.products.splice(i, 1)
          }
        }
      }
      user.save(function(err, user) {
        if (err) {
          res.json({error: err})
        }
        else {
          res.json(user);
        }
      });
    };
  });
}

module.exports = {
  show:    show,
  get:     get,
  create:  create,
  destroy: destroy
}
