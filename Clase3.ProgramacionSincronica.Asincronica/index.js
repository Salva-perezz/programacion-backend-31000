// const logearNombreParentesis = (nombre) => {
//     console.log(nombre)
// }

// const logearNombre = nombre => {
//     console.log(nombre)
// }

// const concatenarNombreApellido = (nombre, apellido) => nombre + apellido
// const sumar = (num1, num2) => num1 + num2

// const operacion = (valor1, valor2, func) => func(valor1, valor2)

// const suma = (num1, num2) => num1 + num2
// const resta = (num1, num2) => num1 - num2
// const division = (num1, num2) => num1 / num2
// const multiplicacion = (num1, num2) => num1 * num2
// const modulo = (num1, num2) => num1 % num2

// console.log(operacion(2, 2, suma))
// console.log(operacion(5, 2, resta))
// console.log(operacion(4, 2, division))
// console.log(operacion(2, 2, multiplicacion))
// console.log(operacion(5, 2, modulo))

// const dividir = (numero, divisor) => {
//     return new Promise((resolve, reject) => {
//         if(!divisor) {
//             reject('No se puede dividir por cero')
//         } else {
//             resolve(numero / divisor)
//         }
//     })
// }

// dividir(4, 2).then(resultado => {
//     console.log("Su resultado es:", resultado)
// }).catch(error => {
//     console.log(`Hubo un error: ${error}`)
// })

// const escribirArchivo = require('./escrArch.js')

// console.log('inicio del programa')


// escribirArchivo('hola mundo', () => {
//   console.log('terminé de escribir el archivo')
// })

// console.log('fin del programa')

// se mostrará por pantalla:
// > inicio del programa
// > fin del programa
// > terminé de escribir el archivo


//  const connnectDB = (user) => {
//      return new Promise((resolve, reject) => {
//          if(!user) {
//              reject('No existe el usuario')
//          } else {
//              resolve('Base de datos conectada')
//          }
//      })
//  }

//  const handleDisconnect = (usuario) => {
//      connnectDB(usuario).then(mensaje => {
//          console.log(mensaje)
//      }).catch(error => {
//          console.log(`Hubo un error ${error}`)
//          setTimeout(handleDisconnect, 2000, "salva")
//      })
//  }

//  handleDisconnect()

// const logearNombre = (nombre) => console.log(nombre)

// setTimeout(logearNombre, 5000, "salva")



// const llamadaDB = (user) => {
//     return new Promise((resolve, reject) => {
//         if(!user) {
//             reject('No se especifico un termino de busqueda')
//         } else {
//             resolve({nombre: "salva", apellid: "perez"})
//         }
//     })
// }


// llamadaDB().then(usuarioDB => {
//     console.log(usuarioDB)
//     usuarioDB.nombre = "enrique"
//     console.log(usuarioDB)
//     // res.send(usuarioDB)
// }
// ).catch(error => {
//     console.log(error)
// })