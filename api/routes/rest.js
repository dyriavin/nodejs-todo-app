const { Router } = require('express')
    // import { createDbRecord } from '../controllers/BaseController.js'
const router = Router();

router.get('/', (req, res) => {
    res.json(formatter('GET'))
})
router.post('/', (req, res) => {
    res.json(formatter('POST'))
})


function formatter(type) {
    return { message: `reached route with ${type} method` }
}


module.exports = router