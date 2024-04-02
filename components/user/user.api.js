const express = require("express");
const router = express.Router();

const {getUser, postUser} = require("./user.controller")

router.get("/",getUser)
router.post("/",postUser)

module.exports = router