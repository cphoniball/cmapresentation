var express = require('express'),
		ejs = require('ejs'), 
		app = express(); 

var PORT = 1337; 
var hostname = 'http://localhost:'; 
if (process.env.PRODUCTION) {
	PORT = 80; 
	hostname = 'http://cma.chrishoniball.com';
}

// application locals
app.locals.baseUrl = process.env.PRODUCTION ? hostname : hostname + PORT; 

// appliation settings
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');  

// routing
app.use('/', express.static(__dirname + '/client')); 
app.get('/', function(req, res) {
	res.render('index');  	
}); 

app.listen(PORT, function(err) {
	if (err) return console.error(err); 
	console.log('Listening on port ' + PORT); 
}); 