var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var debug = require('debug')('app:http');
var passport = require('passport');

// load the env vars
require('dotenv').load();

// Load local libraries.
var env = require('./config/environment');


var routes = require('./config/routes');
var PORT = process.env.PORT || 3000;
var expressLayouts = require("express-ejs-layouts");
var app = express();


require('./config/database');
require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'WDIRocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')));

app.use(debugReq);
// app.use(passport.initialize())
app.use('/', routes);

function debugReq(req, res, next) {
  debug('params:', req.params);
  debug('query:',  req.query);
  debug('body:',   req.body);
  next();
}

app.listen(PORT, function(){
  console.log('Listening on PORT 3000');
})

module.exports = app;
