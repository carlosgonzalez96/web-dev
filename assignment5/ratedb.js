var mongo = require('mongodb');
var server = new
mongo.Server('localhost',27017,{auto_reconnect:true});
var db=new mongo.Db('ratedb',server);//create a new db
db.open(function(err,db){if(!err) {
    console.log("Connected to 'ratedb' database");
    db.collection('rates',{strict:true},function(err,collection){
        if(err) {
            console.log("The rates collection doesn't exit. Lets populate it..");
            populateDB();
        }
    })
    } else { 
        console.log("Looks like a db error."+ err); 
    }
})

function populateDB() { 
    console.log("Populate my collections please!")
}

var countries = [   
    {        
        country: "India",        
        notation: "Rs",        
        currency: "Rupees",        
        commission:"0.02",        
        multiplier:"65"    
    },    
    {        
        country: "Thailand",        
        notation: "thb",        
        currency: "Baht",        
        commission:"0.02",        
        multiplier:"35.5"    
    }    
];

function populateDB() {  
    db.collection('rates', function(err, collection) {        
        collection.insert(countries, {safe:true}, function(err, result) {
            if(err) console.log("ERROR");
            else console.log("Collection populated.");
        });
    });
}

module.exports.findAll = function(req,res) {    
    console.log("in findall");    
    var cursor =db.collection('rates').find( ).toArray(function (err, result) {
        if(!err) {
            res.send(result);
        }
    });
};