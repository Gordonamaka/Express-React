const { response } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user: "process.env.DB_USER",
  password: "process.env.DB_PASS",
  host: "process.env.DB_HOST",
  database: "process.env.DB_NAME",
});

/// Stocks

/**
 * Daily Adjusted Stock Ticker & timeseries
 * Gotta make the schema match the params
 * @param {{ticker: string, timeseries: string}}
 * @return {Promise<{}>} A promise to the user.
 */
exports.addDailyStockData = function (ticker, interval, time, intervalData) {
  return pool
    .query(
      `
      INSERT INTO daily_stock_data (ticker, interval, time, open, high, low, close, adjusted_close, volume, dividend_amount, split coefficient)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *;
      `,
      [
        ticker,
        interval,
        time,
        intervalData["1. open"],
        intervalData["2. high"],
        intervalData["3. low"],
        intervalData["4. close"],
        intervalData["5. adjusted close"],
        intervalData["6. volume"],
        intervalData["7. dividend amount"],
        intervalData["8. split coefficient"],
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addDailyData error = " + err.message);
    });
};
