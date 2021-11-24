DROP TABLE IF EXISTS watchlist CASCADE; 
CREATE TABLE watchlist (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  stock_id INTEGER REFERENCES daily_stock_data(id) NOT NULL
);

/* ticker VARCHAR REFERENCES daily_stock_data(ticker) NOT NULL */