Dada la siguiente constante: const productos = [
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

Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

1) '/api/productos' -> devuelve todos los productos.
2) '/api/productos/:id  -> devuelve el producto que el id coincida con el id.
3) Modificar el endpoint del punto 1 para que reciba un query "titulo" y devuelva los productos que coincidan con lo ingresado

Aclaraciones:
- En el caso de las consignas 2) , si se ingresa un parámetro no numérico o un id que no exista, el servidor debe devolver un objeto con la descripción de dicho error. Por ejemplo:
{ error: "El parámetro no es un número" } cuando el parámetro no es numérico
{ error: "El contenido que solicito no existe" } cuando cuando el ID no se encuentre en el arreglo de productos, devolver estado 404
- El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.