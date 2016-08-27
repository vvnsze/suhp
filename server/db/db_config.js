var mysql= require('mysql');

var knex = require('knex')({
	client:'mysql',
	connection:{
		host 		: 'localhost',
		user 		: 'root',
		database	: 'suhp'
	}
});

knex.schema.hasTable('users').then(
	function(exists){
	if(!exists){
		knex.schema.createTable('users',
			function(user){
				user.increments('user_id').primary();
				user.string('username', 255);
				user.string('email',255);
				user.string('password',255);
			})
			.then(function(error){
				console.log("user error "+ error);
			});
		}
	});

knex.schema.hasTable('goals').then(
	function(exists){
		if(!exists){
			knex.schema.createTable('goals',
				function(goal){
					goal.integer('user_id').references('user_id').inTable('users');
					goal.string('description', 255);
					goal.date('deadline');
					goal.boolean('hasExpired');
					goal.boolean('wasCompleted');
				})
				.then(function(error){
				console.log("goals error "+error);
				});
		}
	});

knex.schema.hasTable('emails').then(
	function(exists){
		if(!exists){
			knex.schema.createTable('emails',
				function(email){
					email.integer('user_id').references('user_id').inTable('users');
					email.string('email',255);
				})
				.then(function(error){
				console.log("emails error "+error);
				});
		}
	});

module.exports = knex;