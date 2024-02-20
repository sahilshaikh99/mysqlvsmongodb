const express = require("express");
const router = express.Router();

const extractCountriesFromCSV = require("./extractCountriesFromCSV");


router.get("/ExtractCountriesAndInsertInMongo", extractCountriesFromCSV.ExtractCountriesAndInsertInMongo);

module.exports = router;