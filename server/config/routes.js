var controller =require('../controllers/controllers');
var router = require('express').Router();


router.post('/signup', controller.users.post);
router.get('/signin', controller.users.get);

router.get('/goal', controller.goals.get);
router.post('/goal', controller.goals.post);
router.put('/goal', controller.goals.put);

router.get('/email', controller.emails.get);
router.post('/email', controller.emails.post);


module.exports=router;

