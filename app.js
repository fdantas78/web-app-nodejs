let express = require('express');
let app = express();
let port = process.env.PORT;
let eventRouter = require('./src/routes/events')

let navList = [
            { link: '#services', text : 'Services' },
            { link: '#portfolio',  text : 'Portfolio' },
            { link: '#about',  text : 'About' },
            { link: '#team',  text : 'Team' },
            { link: '#contact', text : 'Contact' },
            { link: '/events', text : 'Events' }
            ];

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');
    
app.use('/events', eventRouter);

app.get('/', function(req, res){
    res.render('index', {nav : navList});
});
app.get('/home', function(req, res){
    res.send('Hello home!');
});

app.listen(port, function(err) {
    console.log('Server is running on port: ' + port + ' Error: ' + err);
})