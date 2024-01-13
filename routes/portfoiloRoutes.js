const express = require("express");
const { sendEmailController } = require("../controllers/portfoiloController");

//routes object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmailController)

module.exports = router;