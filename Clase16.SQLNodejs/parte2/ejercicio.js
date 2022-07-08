const database = require('./database')

const main = async () => {
    try {
        await database.schema.dropTableIfExists('article')

        await database.schema.createTable('article', tableArticle => {
            tableArticle.increments('id').primary()
            tableArticle.string('name', 10).notNullable()
            tableArticle.string('code', 10). notNullable()
            tableArticle.float('price')
            tableArticle.integer('stock')
        })

        const articles = [
            { name: 'Lapiz', code: 'L001', price: 12.50, stock: 100 },
            { name: 'Regla', code: 'R001', price: 15.50, stock: 100 },
            { name: 'Goma de borrar', code: 'G001', price: 5, stock: 100 },
            { name: 'Hoja', code: 'H001', price: 11.25, stock: 100 },
            { name: 'Compas', code: 'C001', price: 25, stock: 100 },
        ]

        await database('article').insert(articles)

        const articlesFromDatabse = await database.from('article').select('name', 'code', 'price', 'stock')
        articlesFromDatabse.forEach(artice => {
            console.log(`Nombre: ${artice.name} - Price: ${artice.price} - Codigo: ${artice.code} - Stock: ${artice.stock}`)
        })

        await database.from('article').where('id', '=', 3).del()
        console.log('Article with id 3 deleted!')

        await database.from('article').where('id', '=', 2).update({ stock: 0 })

        database.destroy()
    } catch(err) {
        console.log(err)
    }
}

main()