const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URL;
console.log(db.url)
db.users = require("./user.model.js")(mongoose);

module.exports = db;