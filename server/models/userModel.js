var db = require('../db/db_config.js');

module.exports={
	get:function(request, callback){

		console.log("in user get model");
		//interact with DB

		/* Data from the DB*/
		callback("USER DATA");

	},
	post:function(callback){

	}
};