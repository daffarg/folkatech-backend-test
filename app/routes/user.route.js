const auth = require("../middleware/auth");

module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();
    router.use(auth)
  
    router.post("/", users.create);

    router.get("/", users.findAll);
    router.get("/identityNumber/:identityNumber", users.findOneByIdentityNumber);
    router.get("/accountNumber/:accountNumber", users.findOneByAccountNumber);

    router.put("/identityNumber/:identityNumber", users.updateByIdentityNumber);
    router.put("/accountNumber/:accountNumber", users.updateByAccountNumber);

    router.delete("/", users.deleteAll);
    router.delete("/identityNumber/:identityNumber", users.deleteByIdentityNumber);
    router.delete("/accountNumber/:accountNumber", users.deleteByAccountNumber);

    app.use("/api/users", router);
}