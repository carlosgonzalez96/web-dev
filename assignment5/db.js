var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/commentDb";

exports.listCountries = function (req, res) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ratedb");

    dbo.collection("rates").find({}).toArray(function(err, result) {
      db.close();
      if (err) throw err;

      var countries = [];
      for (var i = 0; i < result.length; ++i) {
        countries.push(result[i].Country);
      }
      countries.sort();
      res.send(countries);
      });
  });
};

exports.convert = function (req, res) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ratedb");

    dbo.collection("rates").findOne({Country:req.params.country1}, function(err, result) {
      if (err) throw err;
      var rate1 = result.Rate;

    dbo.collection("rates").findOne({Country:req.params.country2}, function(err, result) {
      db.close();
      if (err) throw err;
      var rate2 = result.Rate;

    var new_amount = req.params.amount * rate1 / rate2;
      res.send([new_amount]);
      });
    });
  });
};

exports.insertCountry = function (req, res) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ratedb");

    var country = {Country: req.params.country, Notation: req.params.notation, Currency: req.params.currency, Commission: req.params.commission, Rate: req.params.rate};
    console.log(country);

    dbo.collection("rates").insertOne(country, function(err, resp) {
      db.close();
      if (err) throw err;
    });

    res.send('One country inserted');
  });
};

exports.updateCountry = function (req, res) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ratedb");

    var country = {Country: req.params.country, Notation: req.params.notation, Currency: req.params.currency, Commission: req.params.commission, Rate: req.params.rate};
    console.log(country);

    dbo.collection("rates").update({"Country" : req.params.country}, {$set: country}, function(err, resp) {
      db.close();
      if (err) throw err;
    });

    res.send('One country updated');
  });
};
