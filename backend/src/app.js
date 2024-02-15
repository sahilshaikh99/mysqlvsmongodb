const express = require('express');
const app = express();
const axios = require('axios');

const mysqlRoutes = require("./routes/mysqlRoutes");
const mongoRoutes = require("./routes/mongoRoutes");

//Routes
app.use("/api/mysql", mysqlRoutes);
app.use("/api/mongodb", mongoRoutes);

module.exports = app;