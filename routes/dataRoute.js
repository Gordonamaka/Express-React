const express = require("express");
router = express.Router();
dataRoute = require("../controllers/dataControllers")
const { fetchStockData } = require("../controllers/externalApiGet");


router.get("/", fetchStockData)




module.exports = router;