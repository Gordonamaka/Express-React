const { addMonthlyStockData } = require('../routes/database');

exports.monthlyInsertLooper = function (data) {
  const ticker = data["Meta Data"]["2. Symbol"];
  const interval = Object.keys(data)[1];
  const timeValues = Object.keys(data['Monthly Adjusted Time Series']);
  const numOfTimeValues = timeValues.length;

  for (let x = 0; x < numOfTimeValues; x++) {
    const time = timeValues[x];
    const intervalData = data['Monthly Adjusted Time Series'][time];
    addMonthlyStockData(ticker, interval, time, intervalData); 
  }
}; 