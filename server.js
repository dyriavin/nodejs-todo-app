const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const homeRoutes = require('./api/routes/home')
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.get('/', homeRoutes)