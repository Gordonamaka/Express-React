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
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//cookie-session setting key
app.use(cookieSession({
  name: 'session',
  keys: ['KeyBladeSora']
}))

//call to database.js
const database = require("./routes/database")

// API endpoint - /api/user
const userRoutes = require("./routes/usersRoute");
const userRouter = express.Router();
userRoutes(userRouter, database);
app.use('/api/users', userRouter);

// API endpoint - /api/about
const aboutRoutes = require("./routes/aboutPageRoute");
app.use('/api/about', aboutRoutes);

//login Route
const loginRoute = require("./routes/loginRoute");
app.use('/api/login', loginRoute);

//homepage endpoint
const homepageRoute = require("./routes/homePageRoute");
app.use('/', homepageRoute);

//hotlist endpoint
const hotlistRoute = require("./routes/hotlistPageRoute");
app.use('/api/hotlist', hotlistRoute);

//watchlist endpoint
const watchlistRoute = require("./routes/watchlistRoute");
app.use('/api/watchlist', watchlistRoute);

//stock screen endpoint
const stockScreenRoute = require("./routes/stockScreenPageRoute");
app.use('/api/stockscreen', stockScreenRoute);

//stock predicting endpoint
const stockPredictRoute = require('./routes/stockPredictionRoute');
app.use('/api/stock-predict', stockPredictRoute);

//register endpoint 
const registerRoute = require("./routes/registerRoute");
app.use('/api/register', registerRoute);

app.use("/api/", require("./routes/apiRoute"));

app.get("/", (req, res) => {
  const user_id = req.session['users.id'];
  console.log(user_id);
  console.log(typeof user_id);
  tempVar = {user_id};

  //if (user_id !== 'undefined' && user_id !== undefined)
    const values = [user_id];
    db.query(`SELECT * FROM users`)
    .then((data)=>{
      const user_email = data.rows[0]['users.email'];
      tempVar.user_email = user_email;
    res.json({ tempVar});
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
