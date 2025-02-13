const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/chatbotController");

router.get("/", (req, res) => {
    res.json({ message: "Chatbot API is working!" });
});

router.post("/", chatbotController.chatbot);

module.exports = router;
