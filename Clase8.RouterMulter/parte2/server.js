const express = require('express')
const app = express()
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/gatitos', express.static(__dirname + '/public'));
app.use('/html', express.static(__dirname + '/html'));

app.use('/api', rutas)

app.listen(8080, () => {
    console.log('Serdvidor escuchando el puerto 8080')
})