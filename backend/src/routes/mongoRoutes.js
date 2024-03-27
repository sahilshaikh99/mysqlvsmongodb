const express = require("express");
const router = express.Router();
const mongoInsertControllers = require("../controllers/mongo/insertControllers");


router.get("/insert/:volume", mongoInsertControllers.insert);

router.get("/insert-nested/:volume", mongoInsertControllers.insertNested);

//router.get("/details/:coinSlug", coinDetailsController.getCoinDetails);

module.exports = router;