// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

   //Create a method to selectAll
    selectAll: function (tableName) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    //Create a method to insertOne
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    




};




//Create a method to updateOne


module.exports = orm;
