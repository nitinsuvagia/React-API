const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();

// NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.send(JSON.stringify({ greeting: `Welcome, ${name}!` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);