const { User, Task } = require('../models/index.js');
const jwt = require('jsonwebtoken');

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
        res.status(500).json({ msg: "Internal Server Error" })
        //catch will be refactored to middleware later
      })
  }

  static loginUserPostHandler(req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then((data) => {
        let payload = {
          id: data.id,
          organization: data.organization,
          name: data.name
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res.status(200).json({ token: token })

      })
      .catch((err) => {
        res.status(401).json({ msg: "ID/Password is wrong." })
      })
  }
}

module.exports = UserController;