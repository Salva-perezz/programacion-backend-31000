const express = require('express')
const app = express()
const path = require('path')
const rutas = require('./routes/index')

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.use('/', rutas)

app.listen(8080, () => {
    console.log('Servidor escuchando puerto 8080')
})