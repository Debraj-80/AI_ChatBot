exports.chatbot = async (req, res) => {
    console.log("Received POST request:", req.body); 

    // Validate message in request body
    if (!req.body || !req.body.message) {
        return res.status(400).json({ error: "Message is required" });
    }

    const userMessage = req.body.message.toLowerCase();
    let botResponse = "I'm sorry, I don't understand.";

    // Already Predefined responses
    const responses = {
        "hello": "Hi there! How can I help you?",
        "hi":"Hi there...",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "what is your name": "I'm an AI chatbot created to assist you.",
        "bye": "Goodbye! Have a great day!",
        "king of cricket": "Virat Kohli",
        "what is MongoDb": "MongoDB is an open-source, document-based database that stores data in JSON-like documents.",
        "what is dotenv":"Dotenv is a library that loads environment variables from a .env file into a runtime environment.",
        "what is the project name":"AI-Chat Bot(using Express.js,API,Mongodb)",
        "god of football":"Messi",
        "what is async function":"Async functions are useful for handling asynchronous operations like timeouts, API calls, and promises.",
        "good morning": "Good morning! I hope you have a wonderful day. What can I help you with?",
        "good afternoon": "Good afternoon! How can I assist you today?",
        "good evening": "Good evening! Ready to chat?",
        "thank you": "You're welcome! I'm happy to help.",
        "thanks": "No problem! Let me know if you need anything else.",
        "you're welcome": "My pleasure!",
        "okay": "Sounds good.",
        "got it": "Understood.",
        "no problem": "Alright.",
        "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
        "tell me another joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "what's the buzz about the weather?": "I wish I knew! I'm just a bot. Check a weather app...They're usually more reliable than me at predicting sunshine and rainbows."
    };

    // Check for exact matches first
    if (responses[userMessage]) {
        botResponse = responses[userMessage];
    } else {
        // Fallback logic (partial match)
        Object.keys(responses).forEach((key) => {
            if (userMessage.includes(key)) {
                botResponse = responses[key];
            }
        });
    }

    console.log("User Message:", userMessage); 
    console.log("Bot Response:", botResponse); 

    // Send response
    res.status(200).json({ message: botResponse });
};
