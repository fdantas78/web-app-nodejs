const express = require('express');
const eventRouter = express.Router();
const MongoClient = require('mongodb').MongoClient;
const urlDb = "mongodb://localhost:8000";

eventRouter.route('/').get(
    function(req, res) {
        MongoClient.connect(urlDb, 
            function(err, database) {
                if (err) console.log(err);
                
                const myEvents = database.db('myDB').collection('events');
                myEvents.find({}).toArray(
                    function(err, eventsList) {
                        if (err) console.log(err);
                        
                        const myNav = database.db('myDB').collection('nav_bar');
                        myNav.find({}).toArray(
                            function(err, navList) {
                                if (err) console.log(err);
                        
                        
                                res.render('events', {
                                    nav : navList,
                                    events : eventsList
                                });
                            });
                            
                database.close();
            });
    });
});



eventRouter.route('/:id').get(
    function(req, res) {
        MongoClient.connect(urlDb, 
            function(err, database) {
                if (err) console.log(err);
                
                const myEvents = database.db('myDB').collection('events');
                myEvents.find({}).toArray(
                    function(err, eventsList) {
                        if (err) console.log(err);
                        
                        const myNav = database.db('myDB').collection('nav_bar');
                        myNav.find({}).toArray(
                            function(err, navList) {
                                if (err) console.log(err);
                        
                                let id = req.params.id;
                                res.render('event', {
                                    nav : navList,
                                    events : eventsList[id]
                                });
                            });
                            
                database.close();
            });
    });
});

module.exports = eventRouter;