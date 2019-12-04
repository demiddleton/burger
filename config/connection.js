// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'hcm4e9frmbwfez47.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    username: 'g04xwa8ulxp1kfyy',
    password: 'kege00tulsfigrca',
    port: '3306',
    database: 'uk0o53lj4j3dqabg'
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
