exports.dailyParser = function (response) {
  const timeWindow = response["Meta Data"]["1. Information"];
  const symbol = response["Meta Data"]["2. Symbol"];
  const timeseriesData = response["Time Series (Daily)"]
};