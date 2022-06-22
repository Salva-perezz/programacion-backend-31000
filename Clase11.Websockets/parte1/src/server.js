require('dotenv').config()
const express = require('express')
const { Server: IOServer } = require('socket.io')
const path = require('path')
const app = express()
const expressServer = app.listen(puerto, (error) => {
    if(error) {
        console.log(`Hubo un error al iniciar el servidor: ${error}`)
    } else {
        console.log(`Servidor escuchando puerto ${puerto}`)
    }
})
const messagesArray = []

app.use(express.static(path.join(__dirname, './public')))

const io = new IOServer(expressServer)

io.on('connection', socket => {
    console.log(`Se conecto un nuevo cliente: ${socket.id}`)
    
    socket.emit('server:mensaje', messagesArray)
   
    socket.on('cliente:mensaje', messageInfo => {
        messagesArray.push(messageInfo)
        
        io.emit('server:mensaje', messagesArray)
    })
})