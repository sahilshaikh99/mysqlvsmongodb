const express = require("express");
const router = express.Router();
const mongoInsertControllers = require("../controllers/mongo/insertControllers");


router.get("/insert", mongoInsertControllers.insert);

//router.get("/details/:coinSlug", coinDetailsController.getCoinDetails);

module.exports = router;