const {
    Router
} = require('express')
const User = require('../models/User')
const router = Router();

router.post('/register', async(req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        const userValidate = await User.findOne({
            email
        })
        if (userValidate) {
            return res.status(401).json({
                error: "User already exists"
            })
        }


    } catch (error) {
        res.status(error.code).json({
            message: error.message
        })
    }
})
router.get('/', async(req, res) => {
    console.log(data)
    res.json('')
})

module.exports = router