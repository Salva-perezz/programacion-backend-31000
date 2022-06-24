const express = require('express')
const app = express()
const path = require('path')
const { Server: IOServer } = require('socket.io')
const expressServer = app.listen(8080, () => console.log('Ta bien'))
const io = new IOServer(expressServer)
const productos = [{titulo: 'Lapiz', thumbnail: 'google.com', price: 123}, {titulo: 'Lapiz', thumbnail: 'google.com', price: 123}, {titulo: 'Lapiz', thumbnail: 'google.com', price: 123}]

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '../public')))

io.on('connection', socket => {
    console.log('Se conecto un cliente')
    socket.emit('server:productos', productos)

    socket.on('client:product', porducto => {
        productos
    })
})