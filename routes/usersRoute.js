//Page for User profile
const express = require('express');
const router = express();
const database = require('./database');
const { Pool } = require("pg");
const { route } = require('./aboutPageRoute');

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});


// Yet to implement profile page.

module.exports = router;