const express = require("express");
const router = express();
const database = require("./database");
const dbParams = require("../lib/db.js");
const { Pool } = require("pg");
const { route } = require("./aboutPageRoute");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const db = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "upswing",
});

//**************LOGIN ROUTERS**********************************

//Get request to login page/form
router.get("/", (req, res) => {
  //if (req.session.user) {
  // res.send({ loggedIn: true, user: req.session.user }); }
  res.json("hahahahahahahaha gotcha! router.get for login? We work! Maybe...");
});

//function used to verify whether JWT token was placed, works with "/api/isUserAuth" get below, kinda pointless unless we make use of it
const verifyJWT = (req, res, next) => {
  if (!token) {
    res.send("Something went wrong, please try again.");
  } else {
    jwt.verify(token, "letsgoupswing", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "You failed to be authorized." });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

router.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("Congragulations! You have been verified!");
});

//LOGIN POST for authenticating user trying to login
router.post("/", (req, res) => {
  console.log("Hello");
  const email = req.body.email;
  const password = req.body.password;

  let userData;

  db
    .query(`SELECT * FROM users WHERE email = '${email}'`)
    .then((result) => {
      console.log(result.rows);
      if (result.rows.length > 0) {
        userData = result.rows[0]
        bcrypt.compare(password, result.rows[0].password, (error, response) => {
          if (response) {
            console.log(response);
            const id = userData.id;
            const token = jwt.sign({ id }, "letsgoupswing");
            req.session.user = result;
            res.json({ auth: true, token: token, result: userData });
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: 'Could not query db' });
    });

  // Length Error
});

module.exports = router;

//GET RID OF THESE COMMENTS BELOW IFFFFFFF THE LOGIN WORKS WITH THE ABOVE STUFF

// Security issue
// Fixed cors: set credentials
// Santize sql data
// JWT token, store in localstorage
// attach to the axios as authenticator (barer token).
// backend grabs off the request to see if it's valid.
// if it is, continue, if it's not, send error.