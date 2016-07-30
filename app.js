var express  = require('express');

var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var path = require('path'),
    fs = require('fs');
var http = require('http');
var server = http.createServer(app);


var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var Strategy = require('passport-local').Strategy;
var configDB = require('./config/database.js');


var app      = express();


var dbURI = 'mongodb://localhost:27017/noondb';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

require('./config/passport')(passport); 

//app.configure(function() {

	app.use(cookieParser());
	app.use(bodyParser()); 
	app.use(express.static(path.join(__dirname, 'public')));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	//app.engine('html', require('ejs').renderFile);
	app.use(express.session({ secret: 'myapp' })); 
	app.use(express.bodyParser({uploadDir:'/images'}));
	app.use(passport.initialize());
	app.use(passport.session()); 
	app.use(flash()); 
	
	

//});


require('./app/routes.js')(app, passport,server); 



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;