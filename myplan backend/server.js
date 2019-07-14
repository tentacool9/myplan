var express = require('express')
var app = express()
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
});

app.get('/topTen', function (req, res) {
    res.send('hello world')
});

app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${port}`)
});