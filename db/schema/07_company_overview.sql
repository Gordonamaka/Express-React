DROP TABLE IF EXISTS company_overview CASCADE;
CREATE TABLE company_overview (
  id SERIAL PRIMARY KEY NOT NULL,
  ticker VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description text NOT NULL,
  exchange VARCHAR(255) NOT NULL,
  currency VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  sector VARCHAR(255) NOT NULL
);
