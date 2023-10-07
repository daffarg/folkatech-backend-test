const jwt = require("jsonwebtoken");
const db = require("../models");
const Auth = db.auths;

const verifyToken = async (req, res, next) => {
    const token = req.headers["authorization"];
    console.log(token)
  
    if (!token) {
      return res.status(403).send({"message": "A token is required to use the APIs"});
    }

    try {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    
      // verify the token in the database
      const auth = await Auth.findOne({"userName": decoded.userName});
      if (auth.token !== token) {
        return res.status(401).send({"message": "Invalid token or token has expired"});
      }

      req.userName = decoded;
    } catch (err) {
      return res.status(401).send({"message": "Invalid token or token has expired"});
    }
    return next();
  };

module.exports = verifyToken;