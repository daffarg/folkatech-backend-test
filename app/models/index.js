const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URL;
db.users = require("./user.model.js")(mongoose);
db.auths = require("./auth.model.js")(mongoose);
db.DUPLICATE_KEY_ERR = 11000

db.redis = null;
db.REDIS_EXPIRY_TIME = process.env.REDIS_EXPIRY_TIME || 30

module.exports = db;