const { User, Task } = require('../models/index.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class UserController {
  static registerNewUserPostHandler(req, res, next) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      organization: req.body.organization
    })
      .then((data) => {
        res.status(201).json({ successmsg: "RegisSuccess" })
      })
      .catch((err) => {
        next(err);
      })
  }

  static loginUserPostHandler(req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then((data) => {
        if (bcrypt.compareSync(req.body.password, data.password)) {
          let payload = {
            id: data.id,
            organization: data.organization,
            name: data.name
          }
          const token = jwt.sign(payload, process.env.JWT_SECRET);
          res.status(200).json({ access_token: token })
        } else {
          next({ name: `loginFail`, msg: "ID/Password is wrong." });
        }
      })
      .catch((err) => {
        next(err);
      })
  }
}

module.exports = UserController;