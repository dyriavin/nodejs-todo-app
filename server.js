const express = require('express')
const app = express()
const db = require('./api/database/dabase')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Routes 
const homeRoutes = require('./api/routes/home')
const restRoutes = require('./api/routes/rest')
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.all('/', homeRoutes)
app.use('/rest-routes', restRoutes)