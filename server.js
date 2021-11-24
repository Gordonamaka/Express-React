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
app.use(cors());
app.set('view engine', 'ejs');


const database = require("./routes/database")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.use('/', homepageRoute)

app.use("/api/", require("./routes/apiRoute"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
