var express = require('express');
var request = require('request');

var app = express();
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.sendFile("./static/index.html")
});

app.get('/search/:query', function(req, res){
	var url = 'http://api.giphy.com/v1/gifs/search?api_key=jJ7XKI7jmj99euCRXrfSKvxUHUNZAMeo&'
	var q = req.params.query;
	var fullUrl = url + 'q=' + q;

	request({
		url: fullUrl
	}, function(error, response, body) {
		if(!error) {
			var dataObj = JSON.parse(body);
			// res.render('index', {data: dataObj});
			res.send(dataObj);
		}
	});
});

app.listen(3000);