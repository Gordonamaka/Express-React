const express = require("express");
const router = express.Router();
const dataRoute = require("../controllers/dataControllers");
const { fetchStockData } = require("./externalApiRoute");

router.get("/", fetchStockData);

module.exports = router;
