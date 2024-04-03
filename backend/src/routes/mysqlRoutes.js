const express = require("express");
const router = express.Router();
const mysqlInsertControllers = require("../controllers/mysql/insertControllers");
const selectControllers = require("../controllers/mysql/selectControllers");
const updateControllers = require("../controllers/mysql/updateControllers");
const deleteControllers = require("../controllers/mysql/deleteControllers");


router.get("/insert/:volume", mysqlInsertControllers.insert);

router.get("/insert-from-csv/:volume", mysqlInsertControllers.insertFromCSV);

router.get("/insert-city/:volume", mysqlInsertControllers.insertCityTable);

router.get("/insert-temperature/:volume", mysqlInsertControllers.insertTemperatureTable);

router.get("/select/", selectControllers.select);

router.get("/update/", updateControllers.update);

router.get("/delete/", deleteControllers.delete);

module.exports = router;