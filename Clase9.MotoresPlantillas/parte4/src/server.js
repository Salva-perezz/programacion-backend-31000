const express = require('express')
const app = express()
const rutas = require('./routes/index')
const path = require('path')
const { engine } = require('express-handlebars')

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layout/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname, './views/partials')
}))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'hbs')

app.use('/', rutas)

app.listen(8080, () => {
    console.log('Servidor escuchando puerto 8080')
})