const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const homeRoutes = require('./api/routes/home')
const restRoutes = require('./api/routes/rest')
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.all('/', homeRoutes)
app.use('/rest-routes', restRoutes)