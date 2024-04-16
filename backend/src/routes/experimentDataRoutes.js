const express = require("express");
const router = express.Router();
const insertDataControllers = require("../controllers/experimentData/insertDataControllers");
const selectDataControllers = require("../controllers/experimentData/selectDataControllers");
const updateDataControllers = require("../controllers/experimentData/updateDataControllers");
const deleteDataControllers = require("../controllers/experimentData/deleteDataControllers");


router.get("/insert-data/:database/:experiment/:threads", insertDataControllers.insertData);

router.get("/select-data/:database/:experiment/:threads", selectDataControllers.selectData);

router.get("/update-data/:database/:experiment/:threads", updateDataControllers.updateData);

router.get("/delete-data/:database/:experiment/:threads", deleteDataControllers.deleteData);

module.exports = router;