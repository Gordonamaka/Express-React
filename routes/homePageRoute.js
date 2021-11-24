const express = require('express');
const router = express();
const database = require('./database');

router.get("/", (req, res) => {
  //const user_id = req.cookies['users.id'];
  //console.log(user_id);
  //console.log(typeof user_id);
  //tempVar = {user_id};

  //if (user_id !== 'undefined' && user_id !== undefined) {
    //const values = [user_id];
    //db.query(`SELECT * FROM USERS WHERE id = $1`, values)
   // .then((data)=>{
     // const user_name = data.rows[0]['users.name'];
      //tempVar.user_name = user_name;
    res.json("we out here")
    });
 // } else {
   // res.redirect('/api/login');
//  }
//});

module.exports = router;