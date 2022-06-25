const express = require('express')
const app = express()
const path = require('path')
const { Server: IOServer } = require('socket.io')
const expressServer = app.listen(8080, () => console.log('Ta bien'))
const io = new IOServer(expressServer)
const products = [{ title: 'lapiz', thumbnail: 'google.com', price: 125 }, { title: 'lapiz', thumbnail: 'google.com', price: 125 }, { title: 'lapiz', thumbnail: 'google.com', price: 125 }]

app.use(express.static(path.join(__dirname, '../public')))


io.on('connection', async socket => {
    console.log('Se conecto un usuario nuevo')

    socket.emit('server:productos', products)
})