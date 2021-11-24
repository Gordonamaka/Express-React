const express = require("express");
const router = express.Router();
const { fetchStockData } = require("./externalApiRoute");

router.get("/", fetchStockData);

module.exports = router;
