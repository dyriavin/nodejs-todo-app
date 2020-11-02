const { Router } = require('express')
const router = Router();


router.get('/', (req, res) => {
    data = { 'message': 'Hello world!!' }
    res.json(data)
})

module.exports = router