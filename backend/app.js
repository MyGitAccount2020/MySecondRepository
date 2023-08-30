const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// use middleware
app.use(bodyParser.json());
app.use(cors());

// Connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/businessloan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useFindAndModify: false
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => {
  console.error('MongoDB connection error:', error);
});

const apiRoutes = require('./routes/api.routes');
app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
