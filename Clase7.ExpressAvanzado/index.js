/*const express = require('express')
const app = express()
const puerto = 8080
const productos = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
   ]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/productos', (req, res) => {
    const { titulo } = req.query
    if(titulo) {
        const product = productos.filter(producto => {
            return producto.title.toLowerCase() === titulo.toLocaleLowerCase()
        })

        res.status(200).json(product)
        return
    }

    res.json(productos)
})

app.get('/api/productos/:id', (req, res) => {
    const id = Number(req.params.id)

    if(isNaN(id)) {
        res.status(400).json({ error: "El parámetro no es un número" })
        return
    }

    const product = productos.filter(producto => {
        return producto.id === id
    })

    if(!product.length) {
        res.status(404).send({ error: "El contenido que solicito no existe" })
        return
    }
    res.status(200).json(product)
})

app.post('/api/productos', (req, res) => {
    const { title, price, thumbnail } = req.body
    console.log('REQ: ', req)
    productos.push({title, price, thumbnail})
    res.sendStatus(201)
})

app.put('/api/productos', (req, res) => {
    const { title, price, thumbnail } = req.body
    console.log('REQ: ', req)
    productos.push({title, price, thumbnail})
    res.sendStatus(201)
})

app.delete('/api/productos/:id', (req, res) => {

    res.sendStatus(201)
})

app.listen(puerto, err => {
    if(err) {
        console.log(`Hubo un error al inciar el servidor ${err}`)
    } else {
        console.log(`Servidor escuchando el puerto: ${puerto}`)
    }
})*/

/*const express = require('express')
const app = express()
const puerto = 8080

app.get('/api/suma/:num1/:num2', (req, res) => {
    const response = Number(req.params.num1) + Number(req.params.num2)
    res.json(response)
})

app.get('/api/suma', (req, res) => {
    const { num1, num2 } = req.query
    const response = Number(num1) + Number(num2)
    res.json(response)
})

app.get('/api/operacion/:op', (req, res) => {
    const operacion = req.params.op.split('')

    switch (operacion[1]) {
        case '+':
            res.json(Number(operacion[0]) + Number(operacion[2]))
            break;
        case '-':
            res.json(Number(operacion[0]) - Number(operacion[2]))
            break;
        default:
            res.send('Mandaste mal la info papu')
            break;
    }
    
})


app.listen(puerto, err => {
    if(err) {
        console.log(`Hubo un error al inciar el servidor ${err}`)
    } else {
        console.log(`Servidor escuchando el puerto: ${puerto}`)
    }
})*/


const express = require('express')
const app = express()
const puerto = 8080
let frase = 'Frase inicial'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/frase', (req, res) => {
    res.send({frase})
})

app.get('/api/frase/:pos', (req, res) => {
    const { pos } = req.params
    const fraseArray = frase.split(' ')
    const response = fraseArray[pos - 1]
    res.send({buscada: response})
})


app.post('/api/frase', (req, res) => {
    const { palabra } = req.body
    const fraseArray = frase.split(' ')
    fraseArray.push(palabra)
    frase = fraseArray.join(' ')
    res.send({agregada: palabra, pos: (fraseArray.indexOf(palabra) + 1)})
})

app.put('/api/frase/:pos', (req, res) => {
    const { palabra } = req.body
    const posicion = Number(req.params.pos) - 1
    let fraseArray = frase.split(' ')
    const anterior = fraseArray[posicion]
    fraseArray[Number(req.params.pos)] = palabra
    frase = fraseArray.join(' ')
    res.json({actualizada: palabra, anterior})
})

app.delete('/api/frase/:pos', (req, res) => {
    const posicion = Number(req.params.pos) - 1
    let fraseArray = frase.split(' ')
    fraseArray[posicion] = ''
    frase = fraseArray.join(' ')
    res.sendStatus(200)
})



app.listen(puerto, err => {
    if(err) {
        console.log(`Hubo un error al inciar el servidor ${err}`)
    } else {
        console.log(`Servidor escuchando el puerto: ${puerto}`)
    }
})