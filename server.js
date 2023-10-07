const express = require("express");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const cors = require("cors");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 8080;

const app = express();

var corsOptions = {
  origin: `http://${process.env.HOST}:${PORT}}`
};

app.use(cors(corsOptions));
app.use(express.json());

const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require("./app/routes/user.route")(app);

app.listen(PORT, async () => {
  console.log(`Server up on port ${PORT}`);
});