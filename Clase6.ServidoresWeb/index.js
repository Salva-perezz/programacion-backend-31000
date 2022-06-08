/*const http = require('http')

const server = http.createServer((req, res) => {
    const tiempo = new Date()
    const hora = tiempo.getHours()

    if(hora >= 6 && hora <= 12) {
        res.end('Buenos dias')
    } else if(hora >= 13 && hora <= 19) {
        res.end('Buenas tardes')
    } else {
        res.end('Buenas noches')
    }
})

server.listen(8080, () => {
    console.log("El servidor esta escuchando el puerto 8080")
}) */
/*
const express = require('express')
const app = express()
const puerto = 8080

app.get('/', (req, res) => {
    res.send('Hola soy home')
})

app.get('/user/:id/:nombre', (req, res) => {
    const { id, nombre } = req.params

    console.log(req.params)
    res.send(`Hola soy user: ${id} ${nombre}`)
})

app.get('/productos', (req, res) => {
    res.send('soy productos get')
})

app.post('/productos', (req, res) => {
    res.send('soy productos post')
})


app.listen(puerto, () => {
    console.log(`El servidor se inicio en el puerto ${puerto}`)
}) */

const express = require('express')
const app = express()
const puerto = 8080
let visitas = 0

app.use((req, res, next) => {
    visitas++
    next()
})

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue">Bienvenido al servidor de express</h1>')
})

app.get('/visitas', (req, res) => {
    res.send(`El servidor tuvo ${visitas} visitas`)
})

app.use((req, res, next) => {
    console.log('Yendo a FYH')
    next()
})

app.get('/fyh', (req, res) => {
    const date = new Date()

    res.json({fyh: date})
})

app.listen(puerto, (error) => {
    if(!error) {
        console.log(`Servidor escuchando el puerto ${puerto}`)
    } else {
        console.log('Hubo un error al iniciar el servidor:', error)
    }
})