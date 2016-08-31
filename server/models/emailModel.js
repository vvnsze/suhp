var db = require('../db/db_config.js');
var util = require('../config/util.js');
var mg = require('../config/mailgun.js'); //Require mailgun methods

module.exports={
	get:function(req, res){
		util.getUserEmailList(req, res);
	},
	post:function(req, res){
		
		db.User.findOrCreate({where: {
			username: req.body.username
		}})
		.spread(function(user, created) {
			let emailList = req.body.emails;
			emailList.forEach(function(address) {
				db.Email.create({
					UserId: user.get('id'),
					email: address
				}).then(function() {

					//When a user is created, an initial email is sent out to user's email list
					mg.sendInitialEmails(emailList, req, res);

					res.status(201).send('created');
<<<<<<< f30c1e4e8fe3b0de5f2d76f298c74dfe1f7d96a5
				})
				  .catch(function(err) {
				  	res.send('There was an error ', err);
				  })
=======
				});
>>>>>>> [pull] add functionality to send email to friends when account created
			});
		})

	}
};