var User = require("../models/user");
var _ = require('underscore')
var rp = require('request-promise')

function create (req, res, next) {
  User.findById(req.user._id, function(err, user) {
    if (err) {
      res.json({message: `Could not find user because ${err}`});
    }
    else if (!user) {
      res.json({message: "No user with this id"});
    }
    else {
      if(req.body.retailer) user.retailers.push(req.body.retailer);
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

// THEN STATEMENT for later
// PROBABLY DON'T NEED
  // req.then(data => {
  //   console.log(data)
  //   res.render('products', {
  //     retailers: data.retailers,
  //     products: products.id
  //   })
  // })

  // DONT COMMENT ME
  }
  // DONT COMMENT ME

function get (req, res, next) {
  User.findById(req.user._id, function(err, user) {
    var promises = []

    user.retailers.forEach(function (retailer) {
      var req = rp.get({
        uri: "http://api.shopstyle.com/api/v2/products?pid=" + process.env.API_KEY +
        `&fl=r${retailer}&offset=0&limit=50`,
        json: true
      })
      promises.push(req)
    })

    Promise.all(promises)
            .then(data => {
              console.log(data)
              // This is an array converter that sets up the following the line.
              var mappedJson = data.map(function(json) {
                // returns my original JSON with just the products array inside
                return json.products
              })
              var flatJson = _.flatten(mappedJson)
              var finalJson = _.shuffle(flatJson)
              res.json(finalJson)

              // res.render('products', {
              //   retailers: data.retailers,
              //   products: products.id
              // })

    });
  });
}
//LOOK UP Promise.all

function destroy (req, res, next) {
  User.findById(req.user._id, function(err, user) {
    if (err) {
      res.json({message: `Could not find user because ${err}`});
    }
    else if (!user) {
      res.json({message: "No user with this id"});
    }
    else {
      if(req.body.retailer) {
        for (var i = 0; i < user.retailers.length; i++) {
          if (req.body.retailer == user.retailers[i]) {
            user.retailers.splice(i, 1)
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
  create:  create,
  get:     get,
  destroy: destroy
}
