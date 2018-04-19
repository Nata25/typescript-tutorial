const path = require('path');
const express = require('express');

const app = express();

const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.listen(3000, () => {
  console.log('App is on port 8080...');
});