const express = require('express');
const app = express();
const port = process.env.PORT;
const MongoClient = require('mongodb').MongoClient;
const urlDb = "mongodb://localhost:8000";

const eventRouter = require('./src/routes/events');
const dbRouter = require('./src/routes/db');

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');
    
app.use('/events', eventRouter);
app.use('/db', dbRouter);

app.get('/', 
    function(req, res) {
        MongoClient.connect(urlDb, 
            function(err, database) {
                if (err) console.log(err);
                
                const myNav = database.db('myDB').collection('nav_bar');
                myNav.find({}).toArray(
                    function(err, navList) {
                        if (err) console.log(err);
                
                
                        res.render('index', {nav : navList});
                    });
                            
                database.close();
            });
    });

app.listen(port, function(err) {
    console.log('Server is running on port: ' + port + ' Error: ' + err);
})