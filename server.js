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
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

app.use(cors({
  credentials: true, 
  origin: "http://localhost:3000"
}));
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

//daily stock route
const dailyRoute = require("./routes/dailyRoute");

//Weekly stock route
const weeklyRoute = require("./routes/weeklyRoute");

//monthly stock route
const monthlyRoute = require("./routes/monthlyRoute");

//stock predicting endpoint
const stockPredictRoute = require("./routes/stockPredictionRoute");

const registerRoute = require("./routes/registerRoute")

//login Route
const loginRoute = require("./routes/loginRoute");

app.use("/", homepageRoute);
app.use("/api/daily", dailyRoute);
app.use("/api/login", loginRoute);
app.use("/api/users", userRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/weekly", weeklyRoute);
app.use("/api/monthly", monthlyRoute);
app.use("/api/hotlist", hotlistRoute);
app.use("/api/register", registerRoute);
app.use("/api/watchlist", watchlistRoute);
app.use("/api/stock-predict", stockPredictRoute);
app.use("/api/", require("./routes/apiRoute"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
