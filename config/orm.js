// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];

      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
       arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }    

var orm = {

   //Create a method to selectAll
   selectAll: function(table, cb) {
    var dbQuery = "SELECT * FROM " + table + ";";

    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

    //Create a method to insertOne
    insertOne: function(table, cols, vals, cb) {
      var dbQuery =
        "INSERT INTO " +
        table +
        " (" +
        cols.toString() +
        ") " +
        "VALUES (" +
        createQmarks(vals.length) +
        ") ";
  
      console.log(dbQuery);
      connection.query(dbQuery, vals, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    updateOne: function(table, objColVals, condition, cb) {
      var dbQuery =
        "UPDATE " +
        table +
        " SET " +
        translateSql(objColVals) +
        " WHERE " +
        condition;
  
      console.log(dbQuery);
  
      connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    deleteOne: function(table, condition, cb) {
      var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
      console.log(dbQuery);
  
      connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    }
  };
  module.exports = orm;