const { response } = require("express");
const { Pool } = require("pg");

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
};

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

exports.addCompanyOverviewData = function (ticker, name, description, exchange, currency, country, sector) {
  return pool
    .query(
      `
      INSERT INTO company_overview (ticker, name, description, exchange, currency, country, sector)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
      `,
      [
        ticker,
        name, 
        description, 
        exchange, 
        currency, 
        country, 
        sector,
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addCompanyOverviewData error = " + err.message);
    });
};

exports.addBalanceSheetData = function (ticker, annualReports) {
  return pool
    .query(
      `
      INSERT INTO balance_sheet (ticker, fiscal_date_ending, reported_currency, total_assets, inventory, property_plant_equipment, goodwill, long_term_investments, short_term_investments, total_liabilities, current_debt, common_stock, common_stock_shares_outstanding)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *;
      `,
      [
        ticker,
        annualReports[0]["fiscalDateEnding"],
        annualReports[0]["reportedCurrency"],
        annualReports[0]["totalAssets"],
        annualReports[0]["inventory"],
        annualReports[0]["propertyPlantEquipment"],
        annualReports[0]["goodwill"],
        annualReports[0]["longTermInvestments"],
        annualReports[0]["shortTermInvestments"],
        annualReports[0]["totalLiabilities"],
        annualReports[0]["currentDebt"],
        annualReports[0]["commonStock"],
        annualReports[0]["commonStockSharesOutstanding"],
      ]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addBalanceSheetData error = " + err.message);
    });
};