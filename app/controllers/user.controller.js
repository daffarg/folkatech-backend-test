const db = require("../models");
const User = db.users;

const isRequestBodyEmpty = (req) => {
    for (const key in req.body) {
      if (!req.body[key]) {
        return true; 
      }
    }
    return false; 
};

const DUPLICATE_KEY_ERR = 11000

// create a new user
exports.create = (req, res) => {
    if (isRequestBodyEmpty(req)) {
      res.status(400).send({ message: "Request is empty!" });
      return;
    }
  
    const user = new User({
      userName: req.body.userName,
      accountNumber: req.body.accountNumber,
      emailAddress: req.body.emailAddress,
      identityNumber: req.body.identityNumber,
    });
  
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        if (err.code === DUPLICATE_KEY_ERR) {
            res.status(400).send({ message: 'User has already exists' });
        } else {
            res.status(500).send({
                message:
                  err.message || "Failed to create a new user"
              });
        }
      });
  };
  
// find all users
exports.findAll = (req, res) => {
    User.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Failed to get users"
        });
      });
  };

// find by identity number
exports.findOneByIdentityNumber = (req, res) => {
    const identityNumber = req.params.identityNumber;

    User.findOne({identityNumber: identityNumber})
      .then(data => {
        if (!data) {
            res.status(404).send({ message: "User not found for the given identity number." });
        } else {
            res.send(data);
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Failed to get a user by identity number"
        });
      });
  };

// find by account number
exports.findOneByAccountNumber = (req, res) => {
    const accountNumber = req.params.accountNumber;

    User.findOne({accountNumber: accountNumber})
      .then(data => {
        if (!data) {
            res.status(404).send({ message: "User not found for the given account number." });
        } else {
            res.send(data);
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Failed to get a user by account number"
        });
      });
  };

// find by account number
exports.findOneByAccountNumber = (req, res) => {
    const accountNumber = req.params.accountNumber;

    User.findOne({accountNumber: accountNumber})
      .then(data => {
        if (!data) {
            res.status(404).send({ message: "User not found for the given account number." });
        } else {
            res.send(data);
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Failed to get a user by account number"
        });
      });
  };

// update by identity number
exports.updateByIdentityNumber = (req, res) => {
    const identityNumber = req.params.identityNumber

    User.updateOne({identityNumber: identityNumber}, {$set: req.body})
      .then(result => {
        if (result.nModified === 0) {
            res.status(404).send({ message: `User with identity number ${identityNumber} not found`});
        } else {
            res.send("User successfully updated");
        }
      })
      .catch(err => {
        if (err.code === DUPLICATE_KEY_ERR) {
            res.status(400).send({ message: 'User has already exists' });
        } else {
            res.status(500).send({
            message:
                err.message || "Failed to update the user"
            });
        }
      });
  };

// update by account number
exports.updateByAccountNumber = (req, res) => {
    const accountNumber = req.params.accountNumber

    User.updateOne({accountNumber: accountNumber}, {$set: req.body})
      .then(result => {
        if (result.nModified === 0) {
            res.status(404).send({ message: `User with account number ${accountNumber} not found`});
        } else {
            res.send("User successfully updated");
        }
      })
      .catch(err => {
        if (err.code === DUPLICATE_KEY_ERR) {
            res.status(400).send({ message: 'User has already exists' });
        } else {
            res.status(500).send({
            message:
                err.message || "Failed to update the user"
            });
        }
      });
  };

// delete all users
exports.deleteAll = (req, res) => {
    User.deleteMany({})
      .then(result => {
        res.send({
          message: `${result.deletedCount} users were successfully deleted`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Failed to delete all users"
        });
      });
  };

// delete by identity number
exports.deleteByIdentityNumber = (req, res) => {
    const identityNumber = req.params.identityNumber;
  
    User.deleteOne({identityNumber: identityNumber})
      .then(result => {
        if (result.deletedCount === 0) {
          res.status(404).send({
            message: `User with identity number ${identityNumber} not found`
          });
        } else {
          res.send({
            message: "User successfully deleted"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Failed to delete the user"
        });
      });
  };

// delete by account number number
exports.deleteByAccountNumber = (req, res) => {
    const accountNumber = req.params.accountNumber;
  
    User.deleteOne({accountNumber: accountNumber})
      .then(result => {
        if (result.deletedCount === 0) {
          res.status(404).send({
            message: `User with account number ${accountNumber} not found`
          });
        } else {
          res.send({
            message: "User successfully deleted"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Failed to delete the user"
        });
      });
  };