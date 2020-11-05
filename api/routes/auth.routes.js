const {
    Router
} = require('express')
const User = require('../models/User')
const router = Router();
const bcrypt = require('bcrypt')
const {
    check,
    validationResult
} = require('express-validator')
router.post('/register', [
        check('email', 'invalid email').isEmail(),
        check('password', 'invalid password').isLength({
            min: 5
        })
    ],
    async(req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(401).json({
                    errors: errors.array(),
                    message: "invalid registration params"
                })
            }
            const {
                email,
                password,
                name
            } = req.body
            const userValidate = await User.findOne({
                email
            })
            if (userValidate) {
                return res.status(400).json({
                    error: "User already exists"
                })
            }
            const hashPassword = await bcrypt.hash(password, 12)
            const user = new User({
                email,
                password: hashPassword,
                name
            })
            await user.save()
            res.status(201).json({
                message: "success",
                information: [{
                    username: name,
                    email: email
                }]
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