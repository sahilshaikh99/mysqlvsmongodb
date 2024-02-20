const express = require('express');
const app = express();
const axios = require('axios');

const mysqlRoutes = require("./routes/mysqlRoutes");
const mongoRoutes = require("./routes/mongoRoutes");

const internalRoutes = require("./internalOperations/internalRoutes");


//Routes
app.use("/api/mysql", mysqlRoutes);
app.use("/api/mongodb", mongoRoutes);

app.use("/api/internal", internalRoutes);

module.exports = app;