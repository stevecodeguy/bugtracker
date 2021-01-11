const MOGODB_URI = process.env.MOGODB_URI || 'mongodb://localhost:27017/backend';

const mongoose = require('mongoose');

mongoose.connect(MOGODB_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to db!');
});

module.exports = mongoose;