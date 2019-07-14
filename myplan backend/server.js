var express = require('express')
var app = express()
const port = 3000;
var MongoClient = require('mongodb').MongoClient;

// respond with "hello world" when a GET request is made to the homepage
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.get('/', function (req, res) {
  res.send('hello world')
});

app.get('/topCountries', function (req, res) {
  MongoClient.connect("mongodb://localhost:27017/db", function (err, db) {
    var dbo = db.db("db");
    dbo.collection('locations', function (err, collection) {
        
         collection.find().toArray(function(err, items) {
          res.send(items);
        });
        
    });
    });
});

app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${port}`)
});



// Connect to the db
