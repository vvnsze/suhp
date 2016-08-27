var mysql= require('mysql');

var knex = require('knex')({
	client:'mysql',
	connection:{
		host 		: 'localhost',
		user 		: 'root',
		database	: 'suhp'
	}
});

//we have to create the database for deployment
//we have to add some start scripts for deployment

knex.schema.hasTable('users').then(
	function(exists){
	if(!exists){
		knex.schema.createTable('users',
			function(user){
				user.increments('user_id').primary();
				user.string('username', 255).unique();
				user.string('email',255);
				user.string('password',255);
			})
			.then(function (table) {
      			console.log('Created Table', table);
    		});
		}
	});

knex.schema.hasTable('goals').then(
	function(exists){
		if(!exists){
			knex.schema.createTable('goals',
				function(goal){
					goal.integer('user_id').unsigned().references('user_id').inTable('users');
					goal.string('description', 255);
					goal.date('deadline');
					goal.boolean('hasExpired');
					goal.boolean('wasCompleted');
				})
				.then(function (table) {
      				console.log('Created Table', table);
    			});
		}
	});

knex.schema.hasTable('emails').then(
	function(exists){
		if(!exists){
			knex.schema.createTable('emails',
				function(email){
					email.integer('user_id').unsigned().references('user_id').inTable('users');
					email.string('email',255);
				})
				.then(function (table) {
      				console.log('Created Table', table);
    			});
		}
	});

module.exports = knex;