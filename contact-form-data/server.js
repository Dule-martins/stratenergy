const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Server is working!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

dotenv.config();

const app = express();

// app.use.apply(cors());
app.use(express.json());

app.use("/api/contact", require("./routes/contact"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));