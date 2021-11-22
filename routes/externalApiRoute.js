const { default:axios } = require('axios');

const ticker = 'IBM';
const apiKey = 'process.env.API_KEY';
const dailyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}`;
const weeklyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}`;
const monthlyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}`;

exports.fetchStockData = async () => {
  try {
    const res = await Promise.all([
      axios.get(dailyUrl),
      axios.get(weeklyUrl),
      axios.get(monthlyUrl)
    ]);
    const data = res.map((res) => res.data);
    console.log(data);
  } catch (error) {
    throw new Error(error);
    console.log(error);
  }
};