const { Task } = require('../models/index.js');

function organizationAuthorization(req, res, next) {
  Task.findOne({ where: { id: req.params.taskId } })
    .then((data) => {
      if (req.tokenPayload.organization === data.organization) {
        next();
      } else {
        res.status(401).json({ msg: `Unauthorized.` });
      }
    })
    .catch((err) => {
      res.status(404).json({ msg: `Not found.` });
    })

}
module.exports = organizationAuthorization;