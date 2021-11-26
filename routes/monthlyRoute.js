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

// For monthly Stocks
router.get("/", (req, res) => {
  let monthlyquery = `SELECT * FROM monthly_stock_data ORDER BY id`;
  pool
    .query(monthlyquery)
    .then((data) => {
      const monthlyData = data.rows;
      res.json({ data: monthlyData });
      console.log("bingo!");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  return router;
});


module.exports = router;