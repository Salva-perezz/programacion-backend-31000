const routeController = (req, res) => {
    try {
        res.render('main.ejs', req.query)
    } catch(e) {
        console.log('Error: ', e)
        res.sendStatus(500)
    }
}


module.exports = {
    routeController,
}