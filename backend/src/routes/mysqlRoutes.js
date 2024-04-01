const express = require("express");
const router = express.Router();
const mysqlInsertControllers = require("../controllers/mysql/insertControllers");
const selectControllers = require("../controllers/mysql/selectControllers");
const updateControllers = require("../controllers/mysql/updateControllers");
const deleteControllers = require("../controllers/mysql/deleteControllers");


router.get("/insert/:volume", mysqlInsertControllers.insert);

router.get("/insertfromcsv/:volume", mysqlInsertControllers.insertFromCSV);

router.get("/select/", selectControllers.select);

router.get("/update/", updateControllers.update);

router.get("/delete/", deleteControllers.delete);

module.exports = router;