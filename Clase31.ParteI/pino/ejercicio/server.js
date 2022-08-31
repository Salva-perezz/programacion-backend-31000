const express = require('express')
const logger = require('./logger.js')

const app = express()


app.get('/sumar', (req, res) => {
    const { n1, n2 } = req.query
    if (!isNaN(n1) && !isNaN(n2)) {
        logger.info('Parámetros %s y %s correctos para la suma', n1, n2);
        res.send(`La suma de ${n1} más ${n2} es ${n1 + n2}`);
    }
    else {
        logger.error("Parámetros incorrectos para la suma");
        res.send('Parámetros de entrada no válidos');
    }
})

app.get('*', (req, res) => {
    let { url, method } = req
    logger.warn('Ruta %s %s no implementada', url, method)
    res.send(`Ruta ${method} ${url} no está implementada`)
})


const PORT = parseInt(process.argv[2]) || 8080

const server = app.listen(PORT, () => {
    logger.info('Servidor express escuchando en el puerto %s', PORT)
})
server.on('error', error => logger.error('Error en servidor: %s', error))
