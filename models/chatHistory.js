const mongoose = require("mongoose");

const chatHistorySchema = new mongoose.Schema({
    userMessage: { type: String, required: true },
    botResponse: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ChatHistory", chatHistorySchema);
