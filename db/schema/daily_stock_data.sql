CREATE TABLE daily_stock_data (
  id SERIAL PRIMARY KEY NOT NULL,
  ticker VARCHAR(255) NOT NULL,
  timeseries VARCHAR NOT NULL
);