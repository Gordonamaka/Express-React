const express = require('express');
const router = express();
const database = require('./database');
const { response } = require("express");
const { Pool } = require("pg");
const { route } = require('./aboutPageRoute');

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});


  router.get("/", (req, res) => {
      let dailyquery = `SELECT * FROM daily_stock_data`;
      pool.query(dailyquery)
        .then(data => {
          const dailyData = data.rows;
          res.json({ data: dailyData });
          console.log('bingo!')
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
        return router;
    });

    


module.exports = router;
    
   
  