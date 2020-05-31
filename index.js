const express = require('express');
const server = express();
const PORT = 4000;
const hubsRouter = require("./hubs/hubs-router");
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API 🎈</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

// THE ROUTER HANDLES ENDPOINTS THAT BEGIN WITH 
// /API/HUBS
// THIS TELLS THE SERVER TO USE HUBSROUTER
// WHENEVER THE SITE GOES TO /API/HUBS
server.use("/api/hubs", hubsRouter);

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
