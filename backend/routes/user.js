const express = require('express');
const User = require('../models/userSchema');

const authRouter = express.Router();

authRouter.get('/signup', async (req, res, next) => {
  // User.create(req.body);
  try {
    await User.create({
      username: "usernameTest",
      password: "passwordTest",
      email: "email@emai.com"
    });
  } catch (error) {
    res.status(500).send(`Error creating user. Code:${error.code}`);
  }

  res.status(200);
  // next();
});

module.exports = authRouter;