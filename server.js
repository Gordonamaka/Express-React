require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();
const PORT = process.env.PORT || 3001;
const app = express();
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//cookie-session setting key
app.use(
  cookieSession({
    name: "session",
    keys: ["KeyBladeSora"],
  })
);

// For password hashing
const rounds = 10;

//call to database.js
const database = require("./routes/database");

// API endpoint - /api/user
const userRoutes = require("./routes/usersRoute");

// API endpoint - /api/about
const aboutRoutes = require("./routes/aboutPageRoute");



//homepage endpoint
const homepageRoute = require("./routes/homePageRoute");

//hotlist endpoint
const hotlistRoute = require("./routes/hotlistPageRoute");

//watchlist endpoint
const watchlistRoute = require("./routes/watchlistRoute");

//stock screen endpoint
const stockScreenRoute = require("./routes/stockScreenPageRoute");

//stock predicting endpoint
const stockPredictRoute = require("./routes/stockPredictionRoute");


//login Route
const loginRoute = require("./routes/loginRoute");
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  }
});  

const verifyJWT = (req, res, next) => {
  if (!token) {
    res.send("Something went wrong, please try again.");
  } else {
    jwt.verify(token, 'letsgoupswing', (err, decoded) => {
      if (err) {
        res.json({auth: false, message: "You failed to be authorized."});
      } else {
        req.userId = decoded.id
        next();
      }
    });
  }; 
};

app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send('Congragulations! You have been verified!');
})

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      // Length Error
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            const id = result[0].id
            const token = jwt.sign({id}, "letsgoupswing",  )
            req.session.user = result;
            console.log(req.session.user);
            res.json({auth: true, token: token, result: result});
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});


//register endpoint
const registerRoute = require("./routes/registerRoute");
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, rounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.use("/", homepageRoute);
app.use("/api/login", loginRoute);
app.use("/api/users", userRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/hotlist", hotlistRoute);
app.use("/api/register", registerRoute);
app.use("/api/watchlist", watchlistRoute);
app.use("/api/stockscreen", stockScreenRoute);
app.use("/api/stock-predict", stockPredictRoute);
app.use("/api/", require("./routes/apiRoute"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
