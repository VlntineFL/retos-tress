const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


const taskRoutes = require('../routes/taskRoutes');
app.use('/api/tasks', taskRoutes);


app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});