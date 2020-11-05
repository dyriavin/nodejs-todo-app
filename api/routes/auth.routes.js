const {
    Router
} = require('express')
const User = require('../models/User')
const router = Router();
const bcrypt = require('bcrypt')
router.post('/register', async(req, res) => {
    try {
        const {
            email,
            password,
            name
        } = req.body
        const userValidate = await User.findOne({
            email
        })
        if (userValidate) {
            return res.status(401).json({
                error: "User already exists"
            })
        }
        const hashPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashPassword, name })
        await user.save()
        res.status(201).json({
            message: "success",
            userData: [
                { username: name },
                { email: email }
            ]
        })

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