const express = require('express')
const app = express()
const rutas = require('./routes/index')
const path = require('path')
const fs = require('fs');


app.use(express.static('public'))
app.engine('hbs', )
app.engine('txt', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) {
            return callback(new Error(err));
        }
        const rendered = content.toString()
        .replace('^^titulo$$', ''+ options.titulo +'')
        .replace('^^mensaje$$', ''+ options.mensaje +'')
        .replace('^^autor$$', ''+ options.autor +'')
        .replace('^^version$$', ''+ options.version +'')
        .replace('^^nombre$$', ''+ options.nombre +'')
        .replace('^^apellido$$', ''+ options.apellido +'')
        .replace('^^fechaYhora$$', ''+ options.fechaYhora +'')
        return callback(null, rendered);
    });
});

app.set('view engine', 'txt')
app.set('views', path.join(__dirname, './views'))

app.use('/', rutas)

app.listen(8080, () => {
    console.log('Servidor escuchando puerto 8080')
})