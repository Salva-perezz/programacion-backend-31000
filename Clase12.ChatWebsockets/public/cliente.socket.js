const socket = io()
const messageForm = document.querySelector('#messageForm')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagesPool = document.querySelector('#messagesPool')

function sendMessage(messageInfo) {
    socket.emit('client:message', messageInfo)
}

function renderMessages(messagesInfo) {
        console.log('messagesInfo', messagesInfo)
        const html = messagesInfo.map(msgInfo => {
            return(`<div>
                <strong>${msgInfo.username}</strong>:
                <em>${msgInfo.message}</em> </div>`)
        }).join(" ");
        console.log('HTML', html)
        messagesPool.innerHTML = html;    
}

function submitHandler (event) {
    event.preventDefault()
    
    const messageInfo = { username: usernameInput.value, message: messageInput.value }

    sendMessage(messageInfo)
}


messageForm.addEventListener('submit', submitHandler)

socket.on('server:mensajes', renderMessages)