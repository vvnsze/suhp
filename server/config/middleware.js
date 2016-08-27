var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var router =require('./config/routes');

module.exports =function(app, express){
	app.use(cors());
	app.use(bodyParser.json({extended:false}));
	app.use(express.static('../../client'));
	app.use(morgan('dev'));
};
