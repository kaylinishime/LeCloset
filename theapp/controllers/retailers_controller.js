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
}

function get (req, res, next) {
  User.findById(req.user._id, function(err, user) {
    // Establish an empty Promises Array
    var promises = []
    // Iterate through each retail ID in our User model.
    user.retailers.forEach(function (retailer) {
      var req = rp.get({
        uri: "http://api.shopstyle.com/api/v2/products?pid=" + process.env.API_KEY +
        `&fl=r${retailer}&offset=0&limit=10`,
        json: true
      })
      // Pushing the API response into our Promises Array
      promises.push(req)
    })

    Promise.all(promises)
            .then(data => {
              // This is an array converter that sets up the following the line.
              var mappedJson = data.map(function(json) {
                // returns the original JSON with just the products array inside
                return json.products
              })
              var flatJson = _.flatten(mappedJson)
              var finalJson = _.shuffle(flatJson)
              console.log(finalJson);
              res.json(finalJson)
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
