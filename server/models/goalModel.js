var db = require('../db/db_config.js');
var schedule = require('node-schedule');
var mailGun = require('../config/mailgun.js');
// var utils = require('../config/util.js');

var goalCronJobDB={};



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
	post:function(req,res){
        var userId;
        var goalId;
        db.User.findOrCreate({where:{username: req.body.username}})
        .spread(function(user){
            console.log("USER ID of "+req.body.username+"  "+user.get('id'));
            userId=user.get('id');
            db.Goal.findOrCreate({where: 
         	{
         	 description:req.body.description,
         	 deadline: req.body.deadline,
         	 hasExpired:false,
         	 hasCompleted:false,
         	 UserId:user.get('id')
         	 }})
            .spread(function(goal, created) {
                goalId=goal.get('id');
                console.log("UserId of new emails "+userId);
                db.Email.findAll({ where: { 
                UserId: userId
                }})
            .then(function(emails){
                    var userEmailList=emails.map(function(email){
                        return email.get('email');
                    });
                    console.log(userEmailList);
                    //res.send(emails);
                    mailGun.sendInitialEmails(userEmailList, req);

                    goalCronJobDB[goalId]={};

                    var goalJobDeadline= schedule.scheduleJob('*/2 * * * * *', function(){
                        console.log("deadline email sent");
                        mailGun.sendReminderEmails(userEmailList,req);
                    });
                    goalCronJobDB[goalId].goalJobDeadline=goalJobDeadline;

                    var goalJobShame=schedule.scheduleJob('*/2 * * * * *', function(){
                        console.log("shame email sent");
                        mailGun.sendShameEmails(userEmailList,req);
                    });

                    goalCronJobDB[goalId].goalJobShame=goalJobShame;

                    res.json(goalCronJobDB);

                    
                    
                    // setTimeout(function(){
                    //     goalJobDeadline.cancel();
                    //     goalJobShame.cancel();
                    // }, 20000);

                    //res.sendStatus(created ? 201 : 200);

            });


                // console.log(goal);
                
            });


            //     mailGun.sendInitialEmails(userEmailList, req, res);

            // var goalJob= schedule.scheduleJob('* * * * * *', function(/*GOAL OBJECT, USER OBJECT*/){
            // console.log("SCHEDULED JOB!!");
            // //SEND SHAME BLAST (/*GOAL OBJECT*/)
            // });

            // setTimeout(function(){
            //     goalJob.cancel();
            // }, 10000);

                

            })
        .catch(function(err) {
            res.status(404).send('There was an error posting data to the database', err);
            }); 
	},
    put:function(req,res){

        db.Goal.findOrCreate({where:{id:req.query.goalId}})
        .spread(function(goal){
            // console.log(goal);
            // res.json(goal);
            goalCronJobDB[goal.get('id')].goalJobDeadline.cancel();
            goalCronJobDB[goal.get('id')].goalJobShame.cancel();

            goal.update({
                hasCompleted:true
            })
            .then(function(){
                res.send("Successful update");
            });
        })
        .catch(function(err){
            res.status(404).send('There was an error updating data to the database', err);
        });
    }
};