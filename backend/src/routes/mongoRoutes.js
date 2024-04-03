const express = require("express");
const router = express.Router();
const mongoInsertControllers = require("../controllers/mongo/insertControllers");
const selectControllers = require("../controllers/mongo/selectControllers");
const updateControllers = require("../controllers/mongo/updateControllers");
const deleteControllers = require("../controllers/mongo/deleteControllers");

router.get("/insert/:volume", mongoInsertControllers.insert);

router.get("/insert-from-csv/:volume", mongoInsertControllers.insertFromCSV);

router.get("/insert-nested/:volume", mongoInsertControllers.insertNested);

router.get("/select/", selectControllers.select);

router.get("/update/", updateControllers.update);

router.get("/delete/", deleteControllers.delete);

module.exports = router;