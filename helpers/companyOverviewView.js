const { addCompanyOverviewData } = require("../routes/database");

exports.companyOverviewView = function (data) {

  const ticker = data["Symbol"];
  const name = data["Name"];
  const description = data["Description"];
  const exchange = data["Exchange"];
  const currency = data["Currency"];
  const country = data["Country"];
  const sector = data["Sector"];

  return addCompanyOverviewData(ticker, name, description, exchange, currency, country, sector);

}