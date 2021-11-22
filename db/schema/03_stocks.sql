

CREATE TABLE stocks (
  id SERIAL PRIMARY KEY NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  ticker VARCHAR(255) NOT NULL,
  tsd_Intraday VARCHAR(255) NOT NULL,
  tsd_day_adjusted VARCHAR(255) NOT NULL,
  tsd_Week_adjusted VARCHAR(255) NOT NULL,
  tsd_Month_adjusted VARCHAR(255) NOT NULL,
  company_earnings VARCHAR(500) NOT NULL,
  company_earnings_calendar VARCHAR(500) NOT NULL,
  company_overview VARCHAR(500) NOT NULL
);