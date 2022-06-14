const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Home')
})

router.post('/usuario', (req, res) => {
    const { nombre, edad } = req.body
    console.log(nombre, edad)
    res.sendStatus(201)
})

module.exports = router