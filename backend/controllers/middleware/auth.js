require('dotenv').config();

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const header = req.headers['authorization'];
    const token = header?.split(' ')[1];
    if (token === null) return res.sendStatus(401);

    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, user) => {
        console.error(err);
        if (err) throw err;
        req.user = user;
        next();
      }
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = auth;