if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/demo', (request, response) => {
  response.json({
    message: 'Hello from server.js'
  });
});
// END DEMO

// here I go again on my own //

// https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyBxskadGRKcKvpfgS9MjPyyfOJ3rGcxy4M

app.get('/books/:theme/:free?', async (req, res) => {
  const requestUrl = req.params.free
    ? `https://www.googleapis.com/books/v1/volumes?q=${req.params.theme}&filter=free-ebooks`
    : `https://www.googleapis.com/books/v1/volumes?q=${req.params.theme}`;

  let { data } = await axios.get(requestUrl);

  res.send(data);
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
