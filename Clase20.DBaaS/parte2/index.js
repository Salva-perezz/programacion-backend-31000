import admin from "firebase-admin";

import serviceAccount from "./llave.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const main = async () => {
  const db = admin.firestore();
  const User = db.collection("users");
  const Product = db.collection("products");

  try {
    //CREATE
    /*
    const newUser = User.doc();
    await newUser.create({ nombre: "Pepito", apellido: "Martinez" });

    const newUser2 = User.doc();
    await newUser2.create({ nombre: "Josefina", apellido: "Rodriguez" });

    const newUser3 = User.doc();
    await newUser3.create({ nombre: "Martina", apellido: "Perez" });

    const newProduct = Product.doc();
    await newProduct.create({ nombre: "Lapiz", precio: 150, stock: 200 });
    */
  } catch (err) {
    console.log(err);
  }

  try {
    //READ ALL Y POR ID
    const userSnapshot = await User.get()
    const userDoc = userSnapshot.docs

    const response = userDoc.map(user => ({
        id: user.id,
        nombre: user.data().nombre,
        apellido: user.data().apellido
    }))

    console.log(response)

    const josefina = User.doc('ulVE9zLe5NYND8BKbUjs')
    const josefinaDoc = await josefina.get()
    const responseJose = josefinaDoc.data()

    console.log(responseJose)

  } catch (err) {
    console.log(err);
  }

  try {
    //UPDATE

    const pepito = User.doc('PIGJRqi1jO4fPvmR69Fh')
    const pepitoUpdated = await pepito.update({ nombre: 'Juan' })

    console.log('pepitoUpdated', pepitoUpdated)


  } catch (err) {
    console.log(err);
  }

  try {
    const martina = User.doc('E5LhswxcVU7ZhFrUj0sZ')
    const deletedMartina = await martina.delete()

    console.log('Usuario borrado de la DB', deletedMartina)

  } catch (err) {
    console.log(err);
  }
};

main();


class ContenedorFirebase {
    constructor(nombre) {
        this.nombre = nombre
    }
}

class ProductFirebase extends ContenedorFirebase {
    constructor(nombre, apellido) {
        super(nombre)
        this.apellido = this.apellido
    }
}

const product = new ProductFirebase('Salva', 'Perez')