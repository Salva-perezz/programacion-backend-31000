const database = require("./database");

const updateCar = async () => {
  try {
    const carsFromDatabase = await database.from('car').select('price', 'id')
    
    await Promise.all(carsFromDatabase.map(async car => {
        await database.from("car").where("id", '=', car.id).update({ price: (car.price / 2) })
    }))

    console.log('Cars updated!')
    database.destroy();
  } catch (err) {
    console.log(err);
    database.destroy();
  }
};

updateCar();
