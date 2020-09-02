const express = require('express');
const server = express();
const TaskRoutes = require('./routes/TaskRoutes');
server.use(express.json());

server.use('/task', TaskRoutes);


server.get('/', (req, res) => {
  res.json('ONLINE');
}); 


server.listen(3000, () => { 
    console.log('API ONLINE');
});