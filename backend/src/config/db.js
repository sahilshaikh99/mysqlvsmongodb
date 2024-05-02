const mongoose = require("mongoose");
const mysql = require("mysql2");

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
})  .then(() => {
    console.log('Connected to local MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to local MongoDB:', err);
  });

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sahil",
  database: "mydb",
});

// Connect to MySQL
mysqlConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

module.exports = mysqlConnection;
