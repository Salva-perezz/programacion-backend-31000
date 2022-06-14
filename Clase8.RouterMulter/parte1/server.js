const express = require('express')
const app = express()
const rutas = require('./routes/index')
const middleware = (req, res, next) => {
    console.log('Llego una request')
    next()
}


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(middleware)

app.use('/api', rutas)

app.use((error, req, res, next) => {
    console.log(error)
    res.sendStatus(500)
})

app.listen(8080, () => {
    console.log('Serdvidor escuchando el puerto 8080')
})