// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// // server.js
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Server is working!');
// });

// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });

// dotenv.config();

// const app = express();

// // app.use.apply(cors());
// app.use(express.json());

// app.use("/api/contact", require("./routes/contact"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Test the server by sending a accepting contact form submission
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve HTML
app.use('/contact', require('./routes/contact')); // Use the contact route for handling form submissions

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// const server = app.listen(3306, (req, res) => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// const http = require('http');
// http.createServer((req, res) => {
//   if (req.method === 'POST' && req.url === 'submit_btn') {
//     let body = '';

    // Collect data from the request body
    // req.on('data', chunk => {
    //   body += chunk.toString(); // Convert Buffer to string
    // });

    // Process the collected data once the request ends
//     req.on('end', () => {
//       console.log('Received data:', body);
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ message: 'Contact form data received successfully!' }));
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'application/plain-text'});
//     console.log('Page not found')
//   }
// }
// ).listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });