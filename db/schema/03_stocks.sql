CREATE TABLE stocks (
  id SERIAL PRIMARY KEY NOT NULL,
  company_name VARCHAR(255) NOT NULL
);
/*ticker VARCHAR REFERENCES daily_stock_data(ticker) NOT NULL, */
/*right join */