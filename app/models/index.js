const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URL;
console.log(db.url)
db.users = require("./user.model.js")(mongoose);
db.auths = require("./auth.model.js")(mongoose);
db.DUPLICATE_KEY_ERR = 11000

module.exports = db;