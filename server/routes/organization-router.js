const express = require('express')
const router = express.Router()

const OrganizationController = require('../controllers/organization-controller.js')
const OrgAuthorization = require('../middlewares/delete-member-authorization.js')

router.post('/create' , OrganizationController.createNewOrg)
router.get('/' , OrganizationController.myOrg)
router.get('/members/:idOrg' , OrganizationController.orgMember)
router.post('/members/:idOrg' , OrganizationController.addMember)
router.delete('/members/:idOrg' , OrgAuthorization , OrganizationController.deleteMember)


module.exports = router