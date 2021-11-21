const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use("/users/", require("./routes/usersRoute"));


app.listen(3001, function() {
  console.log('Express server is running on port 3001');
})