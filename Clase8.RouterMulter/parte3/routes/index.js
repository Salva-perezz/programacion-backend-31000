const { Router } = require('express')
const router = Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })

router.post('/uploadFile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if(!file) {
        const error = { message: 'No subiste nada rey', statusCode: 400 }
        return next(error, req, res)
    }

    res.json(file)
})

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

module.exports = router