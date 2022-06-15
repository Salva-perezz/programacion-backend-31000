const { Router } = require('express')
const router = Router()
const productos = [{title: "Lapiz", price: 125, thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quieninvento.org%2Fwp-content%2Fuploads%2F2013%2F06%2FLapiz.jpg&f=1&nofb=1"}, {title: "Regla", price: 125, thumbnail: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.maplusa.com%2Fwp-content%2Fuploads%2F2014%2F04%2F14042-800x900.jpg&f=1&nofb=1"}, {title: "Goma", price: 125, thumbnail: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcentralpapeleria.es%2F4799-thickbox_default%2Fgoma-de-borrar-milan-caucho-840-tinta-y-lapiz-ud.jpg&f=1&nofb=1"}]

const champs = [{ nombre: 'Salva'}, { nombre: 'Pepe'}, { nombre: 'Juan'}, { nombre: 'Jose'}]

router.get('/product/:indice', (req, res) => {
    const indice = Number(req.params.indice)

    res.render('product', productos[indice])
})

router.get('/champs', (req, res) => {
    res.render('champs', { champs, hasAny: true })
})


module.exports = router