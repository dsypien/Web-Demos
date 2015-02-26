var localStrategy = require('passport-local').Strategy;
var user = require('../models/user');
var bCrypt = require('bcrypt-nodejs');


module.exports = function(passport){
	passport.use('login', new localStrategy({
		passReqToCallback : true
	},
	function(req, usrname, password, done){
	  	
	  	// check db for username
	    user.findOne({ 'username' :  username }, 
	      function(err, user) {
	        if (err)
	          return done(err);

	        if (!user){
	          console.log('user Not Found with username '+ username);
	          return done(null, false, req.flash('message', 'user Not found.'));                 
	        }

	        var validPassword = bCrypt.compareSync(user, password);	 
	        if (!validPassword){
	          console.log('Invalid Password');
	          return done(null, false, req.flash('message', 'Invalid Password'));
	        }

	        // user and password both match, successfull login
	        return done(null, user);
	      }
	    );
	}));	
}
