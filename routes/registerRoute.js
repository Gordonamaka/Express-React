const express = require('express');
const router = express();
const database = require('./database');

router.get("/", (req,res) => {
  
  res.json("Register about to register some nice nice NBA youngboys");
});

module.exports = router;