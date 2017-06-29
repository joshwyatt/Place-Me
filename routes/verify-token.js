"use strict";

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

function verifyToken(req, res, next) {
  let token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err || !decoded.loggedIn) {
        console.log("VERIFICATION ERROR:", err);
        return res.sendStatus(401);
      }
      next();
    });
  } else {
    console.log("TOKEN NOT FOUND");
    return res.sendStatus(404);
  }
}

module.exports = verifyToken;
