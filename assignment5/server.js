var mydb = require('./db.js');
var express = require('express');
var app = express();



app.get('/', function (req, res) {res.sendFile(__dirname+'/public/currency_exchange.html');});

app.get('/listCountries', function (req, res) {mydb.listCountries(req,res); });
app.get('/convert/:country1/:country2/:amount', function (req, res) {mydb.convert(req,res); });
app.get('/insert/:country/:notation/:currency/:commission/:rate',      function (req, res) {mydb.insertCountry(req,res); });
app.get('/update/:country/:notation/:currency/:commission/:rate',      function (req, res) {mydb.updateCountry(req,res); });
app.use(express.static(__dirname + '/public'));

var server = app.listen(process.env.PORT, function () {console.log("Server listening at "+ process.env.PORT);});
