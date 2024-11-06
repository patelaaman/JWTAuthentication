const express = require("express");
const router = express.Router();
const stucontroller = require("../Controller/StuController")

router.post("/registration",stucontroller.Registration)
router.post("/login",stucontroller.Login)
router.post("/checkvaliduser",stucontroller.checkValidUser)

module.exports = router