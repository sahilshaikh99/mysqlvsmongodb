const express = require("express");
const router = express.Router();
const mongoInsertControllers = require("../controllers/mongo/insertControllers");
const selectControllers = require("../controllers/mongo/selectControllers");
const updateControllers = require("../controllers/mongo/updateControllers");
const deleteControllers = require("../controllers/mongo/deleteControllers");

router.get("/insert/", mongoInsertControllers.insert);

router.get("/insert1/", mongoInsertControllers.insert1);

router.get("/insert-from-csv/:volume", mongoInsertControllers.insertFromCSV);

router.get("/insert-nested/:volume", mongoInsertControllers.insertNested);

router.get("/select/", selectControllers.select);

router.get("/select1/", selectControllers.select1);

router.get("/select2/", selectControllers.select2);

router.get("/select3/", selectControllers.select3);

router.get("/select4/", selectControllers.select4);

router.get("/select5/", selectControllers.select5);

router.get("/update/", updateControllers.update);

router.get("/update1/", updateControllers.update1);

router.get("/update2/", updateControllers.update2);

router.get("/update3/", updateControllers.update3);

router.get("/delete/", deleteControllers.delete);

router.get("/delete1/", deleteControllers.delete1);

router.get("/delete2/", deleteControllers.delete2);

router.get("/delete3/", deleteControllers.delete3);

module.exports = router;