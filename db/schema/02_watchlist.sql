DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE watchlist (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id VARCHAR REFERENCES users(id) NOT NULL,
  stock_id VARCHAR REFERENCES daily_stock_data(id) NOT NULL,
  ticker VARCHAR REFERENCES daily_stock_data(ticker) NOT NULL
);