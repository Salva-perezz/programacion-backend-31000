const database = require('./database')

const main = async () => {
    try {

        database.destroy()
    } catch(err) {
        database.destroy()
    }
}

main()