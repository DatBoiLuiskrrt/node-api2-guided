const express = require('express');
const server = express();
const PORT = 4000;
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API 🎈</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
