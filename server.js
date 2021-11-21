require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users/", require("./routes/usersRoute"));

app.use("/data/", require("./routes/dataRoute"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
