const express = require("express");
const router = express.Router();
const mysqlInsertControllers = require("../controllers/mysql/insertControllers");


router.get("/insert", mysqlInsertControllers.insert);

//router.get("/details/:coinSlug", coinDetailsController.getCoinDetails);

module.exports = router;