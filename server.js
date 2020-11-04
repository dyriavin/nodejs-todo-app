const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = require('./config')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080

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
    //Routes 
const homeRoutes = require('./api/routes/home')
const restRoutes = require('./api/routes/rest')
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.all('/', homeRoutes)
app.use('/rest-routes', restRoutes)