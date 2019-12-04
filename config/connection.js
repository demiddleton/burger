// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'hcm4e9frmbwfez47.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    username: 'xns4sl42l2qnllet',
    password: 'kedy4ivghigxe34y',
    port: '3306',
    database: 'ywcm58mji9wa93n5'
  });
};


// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
