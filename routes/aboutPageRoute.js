const express = require('express');
const router = express();
const database = require('./database');

router.get("/", (req,res) => {
  
  res.json("about page about to have some NICE NICE features");
});

module.exports = router;