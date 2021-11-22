const { Pool } = require('pg');

const pool = new Pool({
  user: 'process.env.DB_USER',
  password: 'process.env.DB_PASS',
  host: 'process.env.DB_HOST',
  database: 'process.env.DB_NAME'
});

//// Stocks

/**
 * Add a new set of timeseries stock data to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addStock =  function(user) {
  return pool
    .query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
    `, [user.name, user.email, user.password])
    .then((result) => {
      return (result.rows[0]);
    })
    .catch((err) => {
      console.log("addUser error = " + err.message);
    });
};
exports.addUser = addUser;