const { addDailyStockData } = require("../routes/database");

exports.dailyDbInsertLooper = function (data) {
  const ticker = data["Meta Data"]["2. Symbol"];
  const interval = Object.keys(data)[1];
  const timeValues = Object.keys(data["Time Series (Daily)"]);
  const numOfTimeValues = timeValues.length;

  for (let x = 0; x < numOfTimeValues; x++) {
    const time = timeValues[x];
    const intervalData = data["Time Series (Daily)"][time];

    // console.log("ticker", ticker);
    // console.log("interval", interval);
    // console.log("time", time);
    // console.log("ID", intervalData);

    addDailyStockData(ticker, interval, time, intervalData);
  }
};
