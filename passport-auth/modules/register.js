var localStrategy = require('passport-local').Strategy;
var user = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){
	passport.use('register', new localStrategy({
			// pass back entire request to the callback
			passReqToCallback: true 
		},
		function(req, username, password, done){
			function findOrCreateUser(){
				//Find user in db
				user.findOne({ 'username' : username}, function(err, user){
					if(err){
						console.log("Error in register: " + err);
						return done(err);
					}

					// username already exists
					if(user){
						console.log("User already exists with username " + username);
						return done(null, false, req.flash('message', "User with this user name already exists"));
					} 
					// Create the user
					else{
						var newUser = new User();

						newUser.username = username;
						newUser.password = createHash(password);
						newUser.email = req.param('email');
						newUser.firstName = req.param('firstName');
						newUser.lastName = req.param('lastName');

						//Save the user
						newUser.save(function (err) {
							if(err){
								console.log('Error Saving User: ' + err);
								throw err;
							}
							console.log("User registration successfull :)");
							return done(null, newUser);
						})
					}
				});
			}

			//Execute findOrCreateUser in the following tick of the event loop
			process.nextTick(findOrCreateUser);
		});
	);

	function createHash(password){
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	}
};