const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    console.log(token)
  
    if (!token) {
      return res.status(403).send({"message": "A token is required to use the APIs"});
    }

    try {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = decoded;
    } catch (err) {
      return res.status(401).send({"message": "Invalid token"});
    }
    return next();
  };

module.exports = verifyToken;