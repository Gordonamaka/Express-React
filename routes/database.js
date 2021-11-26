const { response } = require("express");
const { Pool } = require("pg");
const { default: axios } = require("axios");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
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
      INSERT INTO daily_stock_data (ticker, interval, time, open, high, low, close, adjusted_close, volume, dividend_amount, split_coefficient)
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
}

/**
 * Delete Daily Adjusted Stock timeseries for a given ticker
 * Gotta make the schema match the params
 * @param {{ticker: string}}
 * @return {Promise<{}>} A promise to the user.
 */
exports.deleteDailyStockData = function (ticker) {
  return pool
  .query(
    `DELETE FROM daily_stock_data
    WHERE ticker LIKE $1;
    `,
    [ticker]
  )
}

/**
 * Add a new user
 * @param {*} user
 * @returns newly created user
 */
exports.addWeeklyStockData = function (ticker, interval, time, intervalData) {
  return pool
    .query(
      `
      INSERT INTO weekly_stock_data (ticker, interval, time, open, high, low, close, adjusted_close, volume, dividend_amount)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
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
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addWeeklyData error = " + err.message);
    });
}; 

/**
 * Monthly Adjusted Stock Ticker & timeseries
 * Gotta make the schema match the params
 * @param {{ticker: string, timeseries: string}}
 * @return {Promise<{}>} A promise to the user.
 */
 exports.addMonthlyStockData = function (ticker, interval, time, intervalData) {
  return pool
    .query(
      `
      INSERT INTO monthly_stock_data (ticker, interval, time, open, high, low, close, adjusted_close, volume, dividend_amount)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
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
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addmonthlyData error = " + err.message);
    });
};