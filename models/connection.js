var mongoose = require('mongoose')
var url = "mongodb://127.0.0.1:27017/Hackathonarena"
mongoose.connect(url)
var db = mongoose.connection;
console.log("Sucessfully Connected to Database");

module.exports = db;