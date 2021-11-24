const express = require("express");
const router = express.Router();
const usersRoute = require("../controllers/usersControllers");


module.exports = function(router, database) {
  
  router.get("/", usersRoute.usersController);

  return router;
}
