var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8000/mydb";
  

    MongoClient.connect(url, function(err, db) {
        var locals = {};
        var tasks = [
            // Load users
            function(callback) {
                db.collection('nav_bar').find({}).toArray(function(err, users) {
                    if (err) return callback(err);
                    locals.users = users;
                    callback();
                });
            },
            // Load colors
            function(callback) {
                db.collection('events').find({}).toArray(function(err, colors) {
                    if (err) return callback(err);
                    locals.colors = colors;
                    callback();
                });
            }
        ];

        const myAwesomeDB = db.db('myDB')
        myAwesomeDB.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
    });



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:8000/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   const myAwesomeDB = db.db('myDB')
//   myAwesomeDB.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });