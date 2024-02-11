const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/taskRouter');
const userRouter = require('./routes/userRouter');


const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/Task_Manager'
, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', tasksRouter);
app.use('/api/user',userRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
