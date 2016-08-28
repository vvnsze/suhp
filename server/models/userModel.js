var db = require('../db/db_config.js');

module.exports={
	get:function(callback){



	},
	post:function(request,res){
     db.User.findOrCreate({where: 
     	{username: request.body.username,
     	 email:request.body.email,
     	 password: request.body.password}})
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
          
        });
	console.log("in user post model");
	}
};