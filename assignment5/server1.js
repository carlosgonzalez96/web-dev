var http = require("http");
var mydb = require("./ratedb");
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.get('/exchange/findall',mydb.findAll);

var server = app.listen(process.env.PORT, function () {
    console.log("Server listening at "+ process.env.PORT);
})