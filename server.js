if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/demo', (request, response) => {
  response.json({
    message: 'Hello from server.js'
  });
});
// END DEMO

// here I go again on my own //

app.get('/books/:theme', async (req, res) => {
  let { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${req.params.theme} key=${process.env.REACT_APP_API_KEY}`
  );
  const arr = [];
  res.send(data);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
