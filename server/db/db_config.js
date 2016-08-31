var Sequelize = require('sequelize');
var pg = require('pg');
var db = new Sequelize('postgres://admin:IRYNMXNYKZSGGJXE@aws-us-east-1-portal.9.dblayer.com:11612/compose');
var bcrypt = require('bcrypt');

// console.log('db', db);
db.authenticate()
	.then(function(err) {
		console.log('Successful Connection to the database');
	})
	.catch(function(err) {
		console.log('Cannot connect to the database', err);
	});

var User = db.define('User', {
	username: {
		type: Sequelize.STRING,
		unique: true
	},
	salt: {
		type: Sequelize.STRING
	},
	email: Sequelize.STRING,
  	password_hash: Sequelize.STRING,
  	password: {
  		type: Sequelize.VIRTUAL,
  		set: function(val) {
  			let salt = bcrypt.genSaltSync(10);
  			let hash = bcrypt.hashSync(val, salt);
  			console.log('hash func', hash);

  			this.setDataValue('password', val);
  			this.setDataValue('password_hash', hash);
  			this.setDataValue('salt', salt);
  		}
	}
});

var Goal = db.define('Goal', {
	description: Sequelize.STRING,
	deadline: Sequelize.DATE,
  	hasExpired: Sequelize.BOOLEAN,
  	hasCompleted: Sequelize.BOOLEAN
});

var Email = db.define('Email', {
	email: Sequelize.STRING,
});

Goal.belongsTo(User);
Email.belongsTo(User);

//Syncs tables to create tables 
User.sync();
Goal.sync();
Email.sync();

// will drop the tables and init them
//sequelize.sync({force:true}).then(function(){
//    console.log("Created tables in db.js");
//});


//Exports 3 tables to server file
exports.User = User;
exports.Goal = Goal;
exports.Email = Email;
//module.exports = db;