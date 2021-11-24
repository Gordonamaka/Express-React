const express = require('express');
const router = express();
const database = require('./database');

router.get("/", (req,res) => {
  
  res.json("watchlist about to look SUPER NICE AND THICCC");
});

module.exports = router;