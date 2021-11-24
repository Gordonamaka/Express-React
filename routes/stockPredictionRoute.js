const express = require('express');
const router = express();
const database = require('./database');

router.get("/", (req,res) => {
  
  res.json("predicting all the great!");
});

module.exports = router;