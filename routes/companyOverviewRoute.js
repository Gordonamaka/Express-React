const express = require('express');
const router = express();
const database = require('./database');
const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});

router.get("/", (req, res) => {
  let companyQuery = `SELECT * FROM balance_sheet ORDER BY id`;
  pool
    .query(companyQuery)
    .then((data) => {
      const companyData = data.rows;
      res.json({ data: companyData });
      console.log("bingo!");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  return router;
});

module.exports = router;