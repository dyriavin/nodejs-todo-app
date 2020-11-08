const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = require('./config')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000


// app.use(express.json({extended: true}))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

async function start() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (e) {
        console.log(e.message)
    }
}

start()
app.use('/api/auth', require('./api/routes/auth.routes'))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})