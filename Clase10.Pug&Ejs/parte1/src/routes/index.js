const { Router } = require('express')
const router = Router()
const { routeController } = require('../controllers/rutasController')

router.get('/datos', routeController)

module.exports = router