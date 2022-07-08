const database = require("./database");

const deleteCars = async () => {
  try {
    const carsFromDatabase = await database.from('car').select('*')
    for(const car of carsFromDatabase) {
        if (car.model === "Gallardo" && car.brand === 'Lamborghini') {
            await database.from('car').where('id', '=', car.id).del()
        }
    }

    console.log('Car deleted!')
    database.destroy();
  } catch (err) {
    console.log(err);
    database.destroy();
  }
};

deleteCars();
