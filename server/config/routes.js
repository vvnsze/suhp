var controller =require('./controllers/controllers');
var router = require('express').Router();

module.exports =function(app,express){
router.post('/signup', controller.users.post);
router.get('/signin', controller.users.get);

router.get('/goal', controller.goals.get);
router.post('/goal', controller.goals.post);

router.get('/email', controller.emails.get);
router.post('/email', controller.emails.post);
};

