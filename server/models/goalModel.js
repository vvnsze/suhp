var db = require('../db/db_config.js');

module.exports={
	get:function(req, res){
        console.log(req.query);
        db.User.findOrCreate({where:{username: req.query.username}})
        .spread(function(user){
            db.Goal.findAll({where: {
            UserId:user.get('id')
            }})
            .then(function(goals) {
                //console.log(goals);
                res.send(goals);
            });
        })
        .catch(function(err) {
             res.status(404).send('There was an error retrieving data fromt he database', err);
        }); 
        // res.send("JUST A TEST");
	},
	post:function(request,res){
        db.User.findOrCreate({where:{username: request.body.username}})
        .spread(function(user){
            console.log("USER ID of "+request.body.username+"  "+user.get('id'));
            db.Goal.findOrCreate({where: 
         	{
         	 description:request.body.description,
         	 deadline: request.body.deadline,
         	 hasExpired:false,
         	 hasCompleted:false,
         	 UserId:user.get('id')
         	 }})
            .spread(function(user, created) {
            res.sendStatus(created ? 201 : 200);
                });
            })
        .catch(function(err) {
            res.status(404).send('There was an error posting data to the database', err);
            }); 
    
        



	console.log("in goal post model");
	}
};