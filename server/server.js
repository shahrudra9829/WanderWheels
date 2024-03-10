const express = require('express');
const app = express();
const PORT = 3001; // You can use any port number you prefer

// Define a route
app.get('/api/test', (req, res) => {
  res.send('Hello from the server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    
app.get('/',(req,res)=>{
  res.send("Hello from the server");

});