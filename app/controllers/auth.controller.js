const db = require("../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Auth = db.auths;

exports.register = async (req, res) => {
    if (!req.body.userName || !req.body.password) {
        res.status(400).send({message: "All fields must be filled"});
        return; 
    }

    try {
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);

        const auth = new Auth({
            userName: req.body.userName,
            password: encryptedPassword,
        });

        await auth.save();
        res.status(200).send("Successfully registered");
    } catch (err) {
        if (err.code === db.DUPLICATE_KEY_ERR) {
            res.status(400).send({ message: 'User already exists' });
        } else {
            res.status(500).send({
                message: err.message || "Failed to create a new user"
            });
        }
    }
};

exports.login = async (req, res) => {
    if (!req.body.userName || !req.body.password) {
        res.status(400).send({message: "All fields must be filled"});
        return; 
    }

    try {
        const auth = await Auth.findOne({"userName": req.body.userName});

        if (auth && await bcrypt.compare(req.body.password, auth.password)) {
            const token = jwt.sign(
                { id: auth._id, userName: auth.userName },
                process.env.TOKEN_KEY,
                {expiresIn: "24h"}
            );

            auth.token = token;
            auth.lastTokenCreatedAt = Date.now()

            await auth.save()

            res.status(200).send({"message": "Login success", "token": token})
            return
        }

        res.status(400).send({"message": "Wrong username or password"})
        
    } catch (err) {
        res.status(500).send(
            err.message || "Error occured when trying to login"
        )
    }
}