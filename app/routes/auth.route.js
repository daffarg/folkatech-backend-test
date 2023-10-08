module.exports = app => {
    const auths = require("../controllers/auth.controller.js");

    var router = require("express").Router();

    router.post("/register", auths.register)
    router.post("/login", auths.login)

    app.use("/auth", router);
}