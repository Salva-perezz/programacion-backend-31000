const socket = io()

async function renderProducts(products) {
    /*
    CON EJS:
    const response = await fetch('/plantilla.ejs')
    const plantilla = await response.text()

    products.forEach(product => {
        const html = ejs.render(plantilla, product)
        document.querySelector('#productos').innerHTML += html
    }) */
    /* CON HANDLEBARS: */
    const response = await fetch('/plantilla.hbs')
    const plantilla = await response.text()

    products.forEach(product => {
        const template = Handlebars.compile(plantilla)
        const html = template(product)
        document.querySelector('#productos').innerHTML += html
    })
}

socket.on('server:products', products => {
    renderProducts(products)
})