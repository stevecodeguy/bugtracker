const express = require('express');
const User = require('../models/userSchema');

const userRouter = express.Router();

const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userRouter.post('/signup',
  body('username').not().isEmpty().trim().escape(),
  body('password').not().isEmpty().trim().escape(),
  body('email').isEmail().normalizeEmail(),
  async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { username, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          message: 'Username already exists'
        });
      }

      user = new User({
        username,
        email,
        password
      });

      const salt = await bcrypt.genSalt(12);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        "hashString",
        { expiresIn: 10000 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );

    } catch (error) {
      console.error(error);
      res.status(500).send(`Error creating user. Code:${error.code}`);
    }
  });

userRouter.post(
  '/signin',
  body('username').not().isEmpty().trim().escape().isLength({ min: 4 }),
  body('password').not().isEmpty().trim().escape().isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      const matchPassword = await bcrypt.compare(password, user.password);
      if (!user || !matchPassword) {
        return res.status(400).json({ 
          message: 'Unable to log in',
          user,
          matchPassword 
        });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "hashString",
        {expiresIn: 3600},
        (err, token) => {
          if (err) throw err;
          console.log(token)
          res.status(200).json({
            token
          });
        }
      );

    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

module.exports = userRouter;