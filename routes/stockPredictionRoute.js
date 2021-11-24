const express = require('express');
const router = express();
const database = require('./database');

router.get("/", (req,res) => {
  
  res.json("Predicting all an upcoming bull-market!");
});

module.exports = router;