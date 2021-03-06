var funcs = require('./server_functions.js');
var getItems = funcs.getItems;
var express = require('express')
var app = express()
const port = 3000;
var MongoClient = require('mongodb').MongoClient;
var axios = require('axios');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded

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
// Filter country plans from db
app.get('/countryPlansFiltered', function (req, res) {
  console.log(req.query);
  let filterObj = { country : req.query.name }
  delete req.query.name;
  let query = req.query;
  
  Object.keys(query).forEach(function(key,index) {
    if (query[key] != null) {
    filterObj[key] = {$gt: parseInt(query[key].match(/\d*/g)[0]), $lt: parseInt(query[key].match(/\d*/g)[2])}
    console.log(query[key].match(/\d*/g))
    }
  });
  console.log(filterObj);
  MongoClient.connect("mongodb://localhost:27017/db", function (err, db) {
    var dbo = db.db("db");
    dbo.collection('plans', function (err, collection) {
        
         collection.find(filterObj).sort({id: 1}).toArray(function(err, items) {
          items = getItems(items)
          res.send(items);
        });
        
    });
    });
});

// Client tracking API, this function invokes data base updates of the current client 
app.post('/clientData', function (req, res) {
  MongoClient.connect("mongodb://localhost:27017/db", function (err, db) {
    var dbo = db.db("db");
    console.log(req.body.cli)
    // Use ip-api to get client geolocation and other info
    axios.get('http://ip-api.com/json/' + req.body.cli).then(response => {
      var data = response.data;
      data["choice"] = req.body.choice;
      //console.log(data);
      dbo.collection("clients").insertOne(data, function(err, res) {
        if (err) throw err;
  
  
  
        db.close();
      });
    });

    });
});

app.get('/countryPlans', function (req, res) {
  MongoClient.connect("mongodb://localhost:27017/db", function (err, db) {
    var dbo = db.db("db");
    console.log(req.query.plan)
    console.log(req.query.name)
        dbo.collection('plans', function (err, collection) {
        
         collection.find({ id: {$gt: parseInt(req.query.plan)}, country : req.query.name }).sort({id: 1}).limit(8).toArray(function(err, items) {
          items = getItems(items);
          console.log(items);
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
