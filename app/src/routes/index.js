const express = require("express");
const router = express.Router();
const controller = require("../controllers/indexController");

router.get("/", controller.index); 

router.get("/error", controller.error)

module.exports = router;