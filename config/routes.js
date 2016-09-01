var express = require('express');
var router = express.Router();
var passport = require('passport');

// Require controllers.
var usersController = require('../controllers/users_controller');
var productsController = require('../controllers/products_controller');
var retailersController = require('../controllers/retailers_controller');
// var authController = require('../controllers/auth_controller');

// google oauth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// google oauth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/isloggedin',
    // successRedirect : '/close?action=register',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// CLOSES any window sent to this route
router.get('/close', usersController.close);

// USER routes
// eventually needs authController.verify
router.get('/', usersController.home);
router.get('/isloggedin', usersController.isloggedin);
router.get('/profile', usersController.show);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.destroy);

// PRODUCT routes
router.get('/products', productsController.show);
router.get('/products/:id/get', productsController.get);
router.put('/products/:id', productsController.create);
router.delete('/products/:id', productsController.destroy);

// RETAILER routes
router.get('/retailers', retailersController.get);
router.put('/retailers', retailersController.create);
router.delete('/retailers', retailersController.destroy);

module.exports = router;
