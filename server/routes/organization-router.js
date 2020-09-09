const express = require('express')
const router = express.Router()

const OrganizationController = require('../controllers/organization-controller.js')

router.post('/' , OrganizationController.createNewOrg)
router.get('/myorganizations/:idOrg' , OrganizationController.myOrg)
router.get('/members' , OrganizationController.orgMember)
router.post('/members/:idOrg' , OrganizationController.addMember)
router.delete('/members/:idOrg' , OrganizationController.deleteMember)


module.exports = router