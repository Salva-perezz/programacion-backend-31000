import claseMongoProduct from 'mongoProduct'
import claseMongoCarrito from 'mongoCarrito'
import claseFirebaseProduct from 'firebaseProduct'
import claseFirebaeCarrito from 'firebaseCarrito'

const variableEntorno = process.env.DATABASE // mongo - firebase

let exportClasses;

if (variableEntorno === mongo) {
    exportClasses = { claseMongoCarrito, claseMongoProduct}
} else {
    exportClasses = { claseFirebaeCarrito, claseFirebaseProduct }
}

export default exportClasses