const DB_DATA = require('./config.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//Db setup

const mongoose = require('mongoose')
mongoose.connect(DB_DATA, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function() {
    console.log('Connected to DB')
});

//Routes 
const homeRoutes = require('./api/routes/home')
const restRoutes = require('./api/routes/rest')
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.all('/', homeRoutes)
app.use('/rest-routes', restRoutes)