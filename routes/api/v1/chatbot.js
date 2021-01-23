const express = require("express");
const router = express.Router();
const chatBotApi = require("../../../controllers/api/v1/chatbot");

router.post("/query-bot", chatBotApi.queryChatBot);

module.exports = router;
