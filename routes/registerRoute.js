const express = require("express");
const router = express();
const database = require("./database");
const dbParams = require("../lib/db.js");
const { Pool } = require("pg");
const { route } = require("./aboutPageRoute");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const e = require("express");

const db = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});

router.get("/", (req, res) => {
  res.json("Register about to register some nice nice NBA youngboys");
});

// For password hashing
const saltrounds = 10;

//register endpoint
router.post("/", (req, res) => {
  const username = req.body.username;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt
    .hash(password, saltrounds)
    .then((hash) => {
      db.query(
        `INSERT INTO users (first_name, last_name, username, email, password) VALUES ('${first_name}', '${last_name}', '${username}', '${email}', '${hash}')`
      )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
