const socket = io()

function renderProducts(productos) {
    fetch('/plantilla1.ejs').then(response => {
        response.text().then((plantilla) => {
            productos.forEach(producto => {
                const html = ejs.render(plantilla, producto);
                document.querySelector('#productos').innerHTML = html;
            })
        })
    })
}

socket.on('server:productos', productos => {
        renderProducts(productos)
})