const express = require('express');
const router = express();
const database = require('./database');

router.get("/", (req, res) => {
    res.json("we out here, wilding on these codes!")
    });
 

module.exports = router;