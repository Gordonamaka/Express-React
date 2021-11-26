const { addWeeklyStockData } = require('../routes/database');

exports.weeklyInsertLooper = function (data) {
  const ticker = data["Meta Data"]["2. Symbol"];
  const interval = Object.keys(data)[1];
  const timeValues = Object.keys(data["Weekly Adjusted Time Series"]);
  const numOfTimeValues = timeValues.length;

  for (let x = 0; x < numOfTimeValues; x++) {
    const time = timeValues[x];
    const intervalData = data["Weekly Adjusted Time Series"][time];
    addWeeklyStockData(ticker, interval, time, intervalData);
  }
}; 
