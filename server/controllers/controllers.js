
var userModel = require('../models/userModel');

// var goalModel = require('/../../models/goalModel');
// var emailModel = require('/../../models/emailModel-');


module.exports={
	users:{
		get: function(req,res){



		},
		post:function(req,res){
			userModel.post(req.body, function(user){
				res.send(data);
			});
			
		}

	},
	goals:{
		get: function(req,res){

		},
		post:function(req,res){
			
		}

	},
	emails:{
		get: function(req,res){

		},
		post:function(req,res){

		}

	}


};