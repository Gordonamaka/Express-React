const express = require("express");
const router = express();
const database = require("./database");
const { Pool } = require("pg");
const { route } = require("./aboutPageRoute");

const pool = new Pool({
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
  res.json("hahahahahahahaha gotcha! router.get for login? We work! Maybe...")
});  

//function used to verify whether JWT token was placed, works with "/api/isUserAuth" get below, kinda pointless unless we make use of it
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

router.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send('Congragulations! You have been verified!');
})

//LOGIN POST for authenticating user trying to login
router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  db.query(
    "SELECT * FROM users WHERE email = ?;",
    email,
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

module.exports = router;





//GET RID OF THESE COMMENTS BELOW IFFFFFFF THE LOGIN WORKS WITH THE ABOVE STUFF

/*
router.get("/", (req, res) => {
  console.log("Cookies: ", req.session["users.id"]);
  const user_id = req.session["users.id"];
  const templateVars = { user_id };
  console.log(templateVars);
  let usersquery = `SELECT * FROM users`;
  pool
    .query(usersquery)
    .then((data) => {
      const usersData = data.rows;
      res.json({ usersData, templateVars });
      console.log("boom!");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  return router;
});

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const values = [email, password];
  if (email === "" || password === "") {
    res.send("Please enter your email and password!");
  } else {
    db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, values)
      .then((data) => {
        res.json("users.id", data.rows[0]["id"]);
        console.log("letskettit");
      })
      .catch((err) => {
        console.log(err.message);
        res.send("Invalid email or password");
      });
  }
  return router;
}); */