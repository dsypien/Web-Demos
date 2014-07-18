var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res){
	res.render('helloworld', {title: 'The Node.js/MongoDB user demo app!!!'});
});

router.get('/userlist', function(req, res){
	var db = req.db,
		collection = db.get('usercollection');

	collection.find({}, {}, function(e,docs){
		res.render('userlist', {
			"userlist" : docs
		});
	});
});

router.get('/newuser', function(req, res){
	res.render('adduser', {title : "Add new user"});
});

router.post('/adduser', function(req, res){
	var db = req.db,
		username = req.body.username,
		useremail = req.body.useremail,
		collection = db.get('usercollection');

	collection.insert({
		'username' : username,
		'email' : useremail
	}, function(err,doc){
		if(err){
			res.send("There was a problem adding the user to the database.")
		}
		else{
			// set the address bar so it still doesn't say adduser
			res.location('userlist');
			res.redirect('/userlist');
		}
	})
});

module.exports = router;
