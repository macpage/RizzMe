const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('HI!');
});

app.listen(3004, () => {
  console.log('server läuft');
});
