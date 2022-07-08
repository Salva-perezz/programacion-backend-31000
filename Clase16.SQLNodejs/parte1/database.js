const knex = require('knex')
const config = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "coderhouse",
  },
  pool: { min: 0, max: 7 },
}
const databaseConnection = knex(config)

module.exports = databaseConnection