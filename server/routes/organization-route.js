const express = require(`express`)
const ControllerOrganization = require("../controllers/organization-controller")
const router = express.Router()

router.get(`/`,ControllerOrganization.getAllOrganization)


module.exports = router