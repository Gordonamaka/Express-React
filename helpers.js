import axios from 'axios';
import localforage from 'localforage';

export const axiosInstance = axios.create({

  baseURL = 'https://www.alphavantage.co/query',
  adapter = cache.adapter

});

export const intraday = 'TIME_SERIES_INTRADAY',

export const daily = 'TIME_SERIES_DAILY_ADJUSTED',

export const weekly = 'TIME_SERIES_WEEKLY_ADJUSTED',

export const monthly = 'TIME_SERIES_MONTHLY'

export const cache = stockCache({
  maxAge: 60 * 60 * 1000,
  store: localforage,
  exclude: {
    query: false
  }
});

export const getDailyChartForSymbol = (symbol) => {

  return axiosInstance.get('', {
    params: {
      function: daily,
      symbol,
      apikey: 'FAGS590EYBXES5QC',
      interval: '15min'
    }
  })
};

export const getWeeklyChartForSymbol = (symbol) => {

  return axiosInstance.get('', {
    params: {
      function: weekly,
      symbol,
      apikey: 'FAGS590EYBXES5QC',
      interval: '15min'
    }
  })
};

export const getMonthlyChartForSymbol = (symbol) => {

  return axiosInstance.get('', {
    params: {
      function: monthly,
      symbol,
      apikey: 'FAGS590EYBXES5QC',
      interval: '15min'
    }
  })
};

export const getIntradayChartForSymbol = (symbol) => {

  return axiosInstance.get('', {
    params: {
      function: intraday,
      symbol,
      apikey: 'FAGS590EYBXES5QC',
      interval: '15min'
    }
  })
};


module.exports = {

  axiosInstance,
  cache,
  weekly,
  intraday,
  monthly,
  daily,
  getDailyChartForSymbol,
  getIntradayChartForSymbol,
  getMonthlyChartForSymbol,
  getWeeklyChartForSymbol,

}