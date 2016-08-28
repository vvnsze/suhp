var userModel = require('../models/userModel');
var goalModel = require('../models/goalModel');
var emailModel = require('../models/emailModel');


module.exports={
	users:{
		get: function(req,res){



		},
		post:function(req,res){
			console.log("in user get controller");
			console.log(req.body);
			console.log("*********");
			userModel.post(req,res);
			
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