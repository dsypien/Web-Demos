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

module.exports = router;
