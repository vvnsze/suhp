var express = require('express');
var db = require('./db/db_config.js');

//console.log('db', db);

var app = express();

app.set('port', process.env.PORT || 8080);

require('./config/middleware.js')(app,express);
require('./config/routes.js')(app,express);

app.listen(app.get('port'), function(){
	console.log("Listening on port "+app.get('port'));
});


