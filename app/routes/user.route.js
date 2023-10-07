module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", users.create);
    router.get("/", users.findAll);
    router.get("/identityNumber/:identityNumber", users.findOneByIdentityNumber);
    router.get("/accountNumber/:accountNumber", users.findOneByAccountNumber);

    app.use("/api/users", router);
}