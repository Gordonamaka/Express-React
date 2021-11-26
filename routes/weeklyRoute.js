const express = require("express");
const router = express();
const database = require("./database");
const { response } = require("express");
const { Pool } = require("pg");
const { route } = require("./aboutPageRoute");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});

// For weekly Stocks
router.get("/", (req, res) => {
  let weeklyquery = `SELECT * FROM weekly_stock_data ORDER BY id`;
  pool
    .query(weeklyquery)
    .then((data) => {
      const weeklyData = data.rows;
      res.json({ data: weeklyData });
      console.log("bingo!");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  return router;
});


module.exports = router;