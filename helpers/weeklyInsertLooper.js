const { addWeeklyStockData } = require('../routes/database');

exports.weeklyInsertLooper = function (data) {
  const ticker = data["Meta Data"]["2. Symbol"];
  const interval = Object.keys(data)[1];
  console.log(interval);
  console.log(ticker);
  
    
  const timeValues = Object.keys(data["Weekly Adjusted Time Series"]);

  console.log("Weekly Data", timeValues);
  const numOfTimeValues = timeValues.length;

  for (let x = 0; x < numOfTimeValues; x++) {
   const time = timeValues[x];
    const intervalData = data["Weekly Adjusted Time Series"][time];

    //console.log("ticker", ticker);
    // console.log("interval", interval);
    // console.log("time", time);
    // console.log("ID", intervalData);

    addWeeklyStockData(ticker, interval, time, intervalData);
  }
}; 
