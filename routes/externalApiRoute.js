const { default: axios } = require("axios");
const { dailyDbInsertLooper } = require("../helpers/dbInsertLooper");
const { weeklyInsertLooper } = require("../helpers/weeklyInsertLooper");
const { monthlyInsertLooper } = require("../helpers/monthlyInsertLooper");
const { balanceSheetView } = require("../helpers/balanceSheetView");
const { companyOverviewView } = require("../helpers/companyOverviewView");

//Ticker is input into front end, posted to API, fetched by backend, set here. Ask mentor?
const apiKey = "process.env.API_KEY";
const ticker = "IBM";

const dailyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}`;

const weeklyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}`;

const monthlyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}`;

const companyOverview = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey}`;

const balanceSheet = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${ticker}&apikey=${apiKey}`;

exports.fetchStockData = () => {
  Promise.all([
    axios.get(dailyUrl),
    axios.get(weeklyUrl),
    axios.get(monthlyUrl),
    axios.get(companyOverview),
    axios.get(balanceSheet),
  ])
    .then((res) => {
      const dailyData = res[0].data;
      console.log(dailyData)
      const weeklyData = res[1].data;
      const monthlyData = res[2].data;
      const companyData = res[3].data;
      const balanceData = res[4].data;

      dailyDbInsertLooper(dailyData);
      weeklyInsertLooper(weeklyData);
      monthlyInsertLooper(monthlyData);
      companyOverviewView(companyData);
      balanceSheetView(balanceData);

    })
    .catch((error) => {
      console.log(error);
    });
};
