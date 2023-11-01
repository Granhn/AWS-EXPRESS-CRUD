const express = require('express');
const router = express.Router()
const fs = require('fs')
const ROUTES_PATH = __dirname

const cleanFileName = (fileName) => {
    const clean = fileName.split('.').shift()
    return clean
}
fs.readdirSync(ROUTES_PATH).filter((fileName) => {
    const prefixName = cleanFileName(fileName)
    if (prefixName !== 'index') {
        console.log(`cargando ruta : /${prefixName}`)
        router.use(`/${prefixName}`, require(`./${prefixName}`))
    }
})

module.exports = router 