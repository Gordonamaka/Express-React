const express = require("express");
const router = express();
const database = require("./database");
const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});

router.get("/", (req, res) => {
  let balanceSheetQuery = `SELECT * FROM balance_sheet ORDER BY id`;
  pool
    .query(balanceSheetQuery)
    .then((data) => {
      const balanceData = data.rows;
      res.json({ data: balanceData });
      console.log("bingo!");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  return router;
});

module.exports = router;
