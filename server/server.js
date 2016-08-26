var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function(){
	console.log("Listening on port "+app.get('port'));
});


