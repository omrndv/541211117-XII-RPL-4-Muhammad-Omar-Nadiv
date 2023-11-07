const express = require('express')
const router = express.Router()

let users = [
    { id: 1, nama: "Nadiv", email: "umarnadiv@gmail.com" },
    { id: 2, nama: "Omar", email: "omar@gmail.com" },
]

const usercontroller = require('../controllers/user')

router.get('/users', usercontroller.index)

router.post('/user', usercontroller.store)

router.put('/user/:id', usercontroller.update)

router.delete('/user/:id', usercontroller.delete)

module.exports = router