const socket = io()

const formMessage = document.querySelector('#formMessage')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagePool = document.querySelector('#messagePool')

formMessage.addEventListener('submit', event => {
    event.preventDefault()

    const message = messageInput.value
    const username = usernameInput.value
    
    socket.emit('cliente:mensaje', { username, message })
})

socket.on('server:mensaje', messageArray => {
    messagePool.innerHTML = ""

    messageArray.forEach(messageInfo => {
        messagePool.innerHTML += `<li>${messageInfo.username}: ${messageInfo.message}</li>`
    })
})