var User = require("../models/user");

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

// // THEN STATEMENT for later
//   var req = rp.get({
//       uri: "http://api.shopstyle.com/api/v2/products?pid=" + process.env.API_KEY +
//       "&fl=r1&offset=0&limit=50",
//       // `&fl=r${user.retailer[i]}` + `&fl=r${user.retailer[i]}` + `&offset=0&limit=50`
//       json: true
//   })
//
//   req.then(data => {
//     console.log(data)
//     res.render('products', {
//       retailers: data.retailers,
//       products: products.id
//     })
//   })
//
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
  destroy: destroy
}
