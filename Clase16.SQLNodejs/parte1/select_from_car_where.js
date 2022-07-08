const database = require('./database')

const selectCarsWhere = async () => {
    try {
        const carsFromDatabase = await database.from('car').select('*').where('year', '>=', 2019).orderBy('price', 'asc')
        
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

selectCarsWhere()