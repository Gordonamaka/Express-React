const express = require("express");
router = express.Router();
dataRoute = require("../controllers/dataControllers")



router.get("/test", dataRoute.dataController)


module.exports = router;