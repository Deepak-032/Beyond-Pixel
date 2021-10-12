const route = require('express').Router()

let name = "deepak"
let pass = "12341234"

route.post('/', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    if (username === name && password === pass) {
        res.json({
            status: 'success'
        })
    } else {
        res.json({
            status: 'fail'
        })
    }
})

module.exports = route