const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('plantilla', { nombre: 'Salva', apellido: 'Pérez', edad: 20, email: 'salva@mail.com', cel: '12345' })
})

module.exports = router