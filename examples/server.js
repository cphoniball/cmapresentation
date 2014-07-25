var express = require('express'),
		ejs = require('ejs'), 
		app = express(); 

var PORT = 1337; 

// application locals
app.locals.baseUrl = 'http://localhost:' + PORT; 

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