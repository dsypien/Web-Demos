var express = require('express');
var router = express.Router();

function isAuthenticated(req, res, next){
	// if user is authenticated in the session, call next() to get the next request handler 
	if(req.isAuthenticated()){
		return next();
	}

	// if user is not authenticated then redirect to the home page
	res.redirect('/');
}

module.exports = function(passport){
	/* GET login page. */
	router.get('/', function(req, res, next) {
	  res.render('index', { message: req.flash('message') });
	});

	/* POST login info*/
	router.post('/login', passport.authenticate('login'),{
		successRedirect: '/home',
		failureRedirect: '/',
		failureFlash: true
	})

	/* GET Registraion page */
	rouger.get('/register', function(req,res){
		res.render('register', {message: req.flash('message')});
	});

	/* POST registration info */
	router.post('/register', passport.authenticate('register', {
		successRedirect: '/home',
		failureRedirect: '/register',
		failureFlash: true
	}));

	/* GET home page */
	router.get('/home', isAuthenticated, function(req, res){
		res.render('home', {user: req.user});
	});

	/* LOGOUT */
	router.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	return router;
}