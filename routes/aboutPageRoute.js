const express = require('express');
const router = express();
const database = require('./database');

router.get("/", (req,res) => {
  //const templateVars = req.body;
  res.render("about");
  console.log("we out here")
});

module.exports = router;