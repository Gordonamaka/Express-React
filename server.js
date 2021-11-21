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

<<<<<<< HEAD
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
=======
app.listen(3001, function() {
  console.log('Express server is running on port 3001');
});
>>>>>>> 3bb13973a618cece0d2b5994c6e4195b70eae0a8
