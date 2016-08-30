var db = require('../db/db_config.js');

module.exports={
	get:function(req, res){
	
		db.User.findOne({ where: {
			username: req.query.username
		}})
		.then(function(user) {
			db.Email.findAll({ where: { 
				UserId: user.get('id')
			}})
			.then(function(emails) {
				console.log('emails', emails);
				res.status(200).send(emails);
			})
			.catch(function(err) {
				res.status(404).send('There was an error retrieving data from the database', err);
			})
		});

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
				}).then(function(email) {
					res.sendStaus(201);
				});
			});
		})

	}
};