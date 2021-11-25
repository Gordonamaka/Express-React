const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});


/**
 * Add a new user
 * @param {*} user
 * @returns newly created user
 */
exports.addUser = function (user) {
  return pool
    .query(
      `
    INSERT INTO users (first_name, last_name, username, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
      [user.first_name, user.last_name, user.username, user.email, user.password]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log("addUser error = " + err.message);
    });
};
