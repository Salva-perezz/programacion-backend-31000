const { Router } = require('express')
const router = Router()
const personas = []
const mascotas = []

function middlewarePersonas(req, res, next) {
    console.log('Yendo a personas')
    next()
}

router.get('/personas', middlewarePersonas, (req, res) => {
    res.json(personas)
})
router.post('/personas', (req, res) => {
    const { nombre, apellido, edad } = req.body
    personas.push({ nombre, apellido, edad })
    res.sendStatus(201)
})

router.use((req, res, next) => {
    req.target = 'mascotas'
    next()
})

router.get('/mascotas', (req, res, next) => {
    console.log(req.target)
    if(req.target) {
        return next('Hubo target', req, res, next)
    }
    res.json(mascotas)
})

router.post('/mascotas', (req, res) => {
    const { nombre, raza, edad } = req.body
    if(!nombre) {
        return next('No mandaste nombre', req, res, next)
    }
    mascotas.push({ nombre, raza, edad })
    res.sendStatus(201)
})

module.exports = router