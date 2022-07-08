const database = require('./database')

const selectCars = async () => {
    try {
        const carsFromDatabase = await database.from('car').select('*')
        carsFromDatabase.forEach(car => {
            console.log(`
                Marca: ${car.brand}
                Modelo: ${car.model}
                Año: ${car.year}
                Precio: $${car.price}
            `)
        })

        database.destroy()
    } catch(err) {
        console.log(err)
        database.destroy()
    }
}

selectCars()