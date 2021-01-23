const express = require("express");
const router = express.Router();

router.use("/", require("./chatbot"));

module.exports = router;
