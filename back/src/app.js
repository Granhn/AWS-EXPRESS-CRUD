require('dotenv').config()
const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const app = express();
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(router)
app.get('/', (req, res) => {
    res.send('Hola wawa tio ☝🏼🤓')
})


app.listen(PORT, () => console.log(`Corriendo en el puerto ${PORT}`))