const express = require('express');
const router = express();
const database = require('./database');

router.get("/", (req,res) => {
  
  res.json("hotlist about to track some nice nice tickers!!!");
});

module.exports = router;