const socket = io()
const postForm = document.querySelector('#postForm')
const postInput = document.querySelector('#postInput')
const postContainer = document.querySelector('#postContainer')

postForm.addEventListener('submit', event => {
    event.preventDefault()
    const post = postInput.value

    socket.emit('cliente:post', { post })
})

socket.on('server:post', data => {
    postContainer.innerHTML = ""
    data.forEach(messageInfo => {
        postContainer.innerHTML += `<p>ID ${messageInfo.id}: ${messageInfo.message}</p> <br/>`
    })
})