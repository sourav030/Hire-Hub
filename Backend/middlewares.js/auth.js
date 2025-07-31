const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(350).json({ message: "User is not login" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info to request
    next(); // move to next middleware/route
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Invalid token or server error" });
  }
};

module.exports = authentication;
