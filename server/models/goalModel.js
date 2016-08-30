var db = require('../db/db_config.js');

module.exports={
	get:function(callback){

	},
	post:function(request,res){
     db.Goal.findOrCreate({where: 
     	{
     	 description:request.body.description,
     	 deadline: request.body.deadline,
     	 hasExpired:0,
     	 hasCompleted:0,
     	 userId:1
     	 }})
        .spread(function(user, created) {
          res.sendStatus(created ? 201 : 200);
          
        });
	console.log("in goal post model");
	}
};