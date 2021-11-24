const express = require('express');
const router = express();
const database = require('./database');
const { Pool } = require("pg");
const { route } = require('./aboutPageRoute');

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});

router.get('/', (req, res) => {
  console.log('Cookies: ', req.session['users.id'])
  const user_id = req.session['users.id'];
  const templateVars = {user_id};
  console.log(templateVars)
  let usersquery = `SELECT * FROM users`;
      pool.query(usersquery)
        .then(data => {
          const usersData = data.rows;
          res.json({ usersData, templateVars });
          console.log('boom!')
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
        return router;
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const values = [email, password];
  if (email === '' || password === '') {
    res.send("Please enter your email and password!");
  } else {
    db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, values)
      .then(data => {
        res.json('users.id', data.rows[0]['id']);
        console.log('letskettit');
      })
      .catch(err => {
        console.log(err.message);
        res.send("Invalid email or password");
      });
  }
  return router;
});
  
module.exports = router;