const { Router } = require('express')
const router = Router();
const data = require('../controllers/BaseController.js')
const cmplx = require('../controllers/BaseController')
router.get('/', (req, res) => {
    console.log(data)
    res.json(data)
})
router.post('/', (req, res) => {
    res.json(cmplx)
})

module.exports = router