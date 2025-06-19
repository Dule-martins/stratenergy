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
