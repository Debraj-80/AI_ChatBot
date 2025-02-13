const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const chatbotRoutes = require("./routes/chatbotRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Serve Static Files (Frontend)
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/chatbot", chatbotRoutes);

// Default Route - Serve Frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
