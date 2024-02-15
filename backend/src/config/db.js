const { MongoClient } = require('mongodb');
const mysql = require("mysql");

// Create a new MongoClient
const mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING);

// Connect to the local MongoDB server
mongoClient.connect()
  .then(() => {
    console.log('Connected to local MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to local MongoDB:', err);
  });

// MySQL connection
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Sahil@7878",
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