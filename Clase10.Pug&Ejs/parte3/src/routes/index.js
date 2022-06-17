const { Router } = require('express')
const router = Router()
const { addPersona, getPersonas } = require('../controllers/personasController')

router.get('/personas', getPersonas)
router.post('/personas', addPersona)

module.exports = router