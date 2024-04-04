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

router.get("/select1/", selectControllers.select1);

router.get("/select2/", selectControllers.select2);

router.get("/select3/", selectControllers.select3);

router.get("/select4/", selectControllers.select4);

router.get("/update/", updateControllers.update);

router.get("/update1/", updateControllers.update1);

router.get("/update2/", updateControllers.update2);

router.get("/delete/", deleteControllers.delete);

module.exports = router;