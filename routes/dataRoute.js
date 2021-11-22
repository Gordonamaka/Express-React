const express = require("express");
router = express.Router();
dataRoute = require("../controllers/dataControllers")
const { fetchStockData } = require("../routes/externalApiRoute");

router.get("/", fetchStockData)

module.exports = router;