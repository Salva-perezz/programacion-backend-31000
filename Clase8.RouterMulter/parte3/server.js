const express = require('express')
const app = express()
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('upload'))

app.use('/api', rutas)

app.use((error, req, res) => {
    console.log(error.message)
    res.status(error.statusCode).send(error.message)
})

app.listen(8080, () => {
    console.log('Serdvidor escuchando el puerto 8080')
})