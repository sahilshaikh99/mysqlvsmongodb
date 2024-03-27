const express = require("express");
const router = express.Router();

// const extractCountriesFromCSV = require("./extractCountriesFromCSV");
const insertCityTempIndividual = require("./insertCityTempIndividual");


// router.get("/ExtractCountriesAndInsertInMongo", extractCountriesFromCSV.ExtractCountriesAndInsertInMongo);
router.get("/insertCityTempIndividualInMongo", insertCityTempIndividual.insertCityTempIndividualInMongo);


module.exports = router;