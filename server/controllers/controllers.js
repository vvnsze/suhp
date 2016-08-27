
var userModel = require('../models/userModel');

// var goalModel = require('/../../models/goalModel');
// var emailModel = require('/../../models/emailModel-');


module.exports={
	users:{
		get: function(req,res){
			console.log("in user get controller");
			userModel.get(req.body, function(data){
				res.send(data);
			});


		},
		post:function(req,res){
	
			
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