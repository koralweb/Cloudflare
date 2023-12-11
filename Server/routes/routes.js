const Router = require('express')
const router = new Router()
const controllers = require('../controllers/controllers')

router.post('/createZone', controllers.createZone)
router.post('/updateDNS', controllers.updateDNS)
router.post('/updateSSL', controllers.updateSSL)

module.exports = router
