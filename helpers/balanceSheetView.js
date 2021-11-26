const { addBalanceSheetData } = require("../routes/database");

exports.balanceSheetView = function (data) {

  const ticker = data["symbol"];
  const annualReports = data["annualReports"];

  console.log('ticker', ticker);
  console.log('reports', annualReports[0]);

  //Yet to implement: CREATE A LOOP FUNCTION TO TAKE ONLY 5 YEARS OF ANNUAL REPORTS

  return addBalanceSheetData(ticker, annualReports);
}