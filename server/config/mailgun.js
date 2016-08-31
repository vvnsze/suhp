var mg_key = require('./server_config.js');
var domain = 'sandboxfc8ed1e2db424ce48574ca88fa53eb0e.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: mg_key, domain: domain});

module.exports = {

	sendInitialEmails: function(userEmailList, req, res) {

		userEmailList.forEach(function(email) {
		 	var data = {
			from: 'Mailgun <postmaster@sandboxfc8ed1e2db424ce48574ca88fa53eb0e.mailgun.org>',
			to: email,
			subject: `Help your friend ${req.body.username} achieve their goal!`,
			text: `Your friend ${req.body.username} wants you to support them in accomplishing their goal!`
		};

			mailgun.messages().send(data, function(error, body) {
				console.log('body', body);
			});
		});

	 },

	 sendReminderEmails: function(goalObj, req, res) {

	 	var data = {
		from: 'Mailgun <postmaster@sandboxfc8ed1e2db424ce48574ca88fa53eb0e.mailgun.org>',
		to: 'lsfisher@usc.edu',
		subject: 'Remind ${userName} to keep working on their goal!',
		text: '${userName}\'s goal deadline is almost here! Remind them to keep working on ${goal}'
	};

		mailgun.messages().send(data, function(error, body) {
			console.log('body', body);
		});
	 },

	  sendShameEmails: function(goalObj, req, res) {

	 	var data = {
		from: 'Mailgun <postmaster@sandboxfc8ed1e2db424ce48574ca88fa53eb0e.mailgun.org>',
		to: 'lsfisher@usc.edu',
		subject: 'Shame...${userName} wasn\'t able to finish their goal!',
		text: '${userName} wasn\'t able to ${goal}! Shame! Shame! Shame!'
	};

		mailgun.messages().send(data, function(error, body) {
			console.log('body', body);
		});
	 }
} 
