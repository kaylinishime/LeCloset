var User = require("../models/user");
var rp = require("request-promise");
var _ = require('underscore');

function home (req, res, next) {
  var request = rp.get({
      uri: "http://api.shopstyle.com/api/v2/retailers?pid=" + process.env.API_KEY,
      json: true
  })
  request.then(data => {
    res.render('index', {
      retailers: data.retailers,
      user: req.user
    });
  });
}

function isloggedin (req, res, next) {
  User.findById(req.user._id, function(err, user) {
    if (err) {
      res.json({message: `Could not find user because ${err}`});
    }
    else if (!user) {
      res.json({message: "No user with this id."});
    }
    else if(!req.user.gender) {
      res.redirect('/close')
    }
    else{
      res.redirect('/close?login')
    }
    });
};


function show (req, res, next) {
var request = rp.get({
      uri: "http://api.shopstyle.com/api/v2/products?pid=" + process.env.API_KEY,
      json: true
  })
  request.then(data => {
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

function update(req, res, next) {
    User.findById(req.user._id, function(err, user) {
      if (err) {
        res.json({message: `Could not find user because ${err}`});
      }
      else if (!user) {
        res.json({message: "No user with this id."});
      }
      else {
        if(req.body.gender) user.gender = req.body.gender;
        if(req.body.retailer1 >= 1) user.retailers.push(req.body.retailer1);
        if(req.body.retailer2 >= 1) user.retailers.push(req.body.retailer2);
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
};

function destroy (req, res, next) {

}

module.exports = {
  home:     home,
  isloggedin: isloggedin,
  show:     show,
  close:    close,
  edit:     edit,
  update:   update,
  destroy:  destroy,
}
