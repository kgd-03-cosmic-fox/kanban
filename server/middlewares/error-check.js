function errorCheck(err, req, res, next) {
  if (err) {
    if (err.name === `loginFail`) {
      res.status(400).json({ errors: `ID/Password is wrong.` })
    } else if (err.name === `SequelizeValidationError`) {
      res.status(400).json(err.errors);
    } else if (err.name === `SequelizeUniqueConstraintError`) {
      res.status(400).json(err.errors);
    } else if (err.name === `SequelizeConnectionError`) {
      res.status(404).json(err.errors);
    } else {
      res.status(500).json({ msg: `Internal Server Error` });
    }
  } else {
    res.status(500).json({ msg: `Unknown Error` })
  }
}
module.exports = errorCheck;
