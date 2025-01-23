const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
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

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
