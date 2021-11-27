const { addDailyStockData } = require("../routes/database");
const { deleteDailyStockData} = require("../routes/database");

exports.dailyDbInsertLooper = function (data) {
  const ticker = data["Meta Data"]["2. Symbol"];
  const interval = Object.keys(data)[1];
  console.log(interval)
  
  const timeValues = Object.keys(data["Time Series (Daily)"]);
  const numOfTimeValues = timeValues.length;

  deleteDailyStockData(ticker);

  for (let x = 0; x < numOfTimeValues; x++) {
    const time = timeValues[x];
    const intervalData = data["Time Series (Daily)"][time];

    addDailyStockData(ticker, interval, time, intervalData);
  }
};
