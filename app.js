var express = require('express');
var app = express();
var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));


app.get('/', function(req, res){
    res.send('Hello there!');
});
app.get('/home', function(req, res){
    res.send('Hello home!');
});

app.listen(port, function(err) {
    console.log('Server is running on port: ' + port);
})