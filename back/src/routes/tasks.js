const express = require('express')
const router = express.Router()
const { getTastk, getTasksList, createTask, updateTask } = require('../controllers/tasks')

router.get('/', (req, res) => res.send("Desde task"))
router.get('/hola', (req, res) => {
    res.send("Hola")
})
module.exports = router