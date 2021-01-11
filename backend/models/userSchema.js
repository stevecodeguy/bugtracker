const mongoose = require('../controllers/data/db_connect');

const userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: { type: String, required: true },
  email: {type: String, required: true, unique: true},
  created: {type: Date, default: () => new Date()}
});

const User = module.exports = mongoose.model('user', userSchema);