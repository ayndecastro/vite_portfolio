const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

// Generic error-handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    res
      .status(500)
      .send(
        "An error occurred. The full stack trace has been disabled in production mode."
      );
  } else {
    res.status(500).send(err.stack);
  }
});

const fs = require("fs");

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const newMessage = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    timestamp: new Date().toISOString()
  };

  const filePath = path.join(__dirname, "messages.json");

  let messages = [];
  if (fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      messages = JSON.parse(data);
    } catch (err) {
      console.error("Failed to parse messages.json:", err);
    }
  }

  messages.push(newMessage);

  try {
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), "utf8");
    console.log(`[CONTACT] Message saved from: ${newMessage.name} <${newMessage.email}>`);
    return res.status(201).json({ success: true, message: "Transmission logged" });
  } catch (err) {
    console.error("Failed to write contact message:", err);
    return res.status(500).json({ error: "Internal storage failure" });
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
