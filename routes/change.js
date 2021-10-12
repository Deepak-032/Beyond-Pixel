const route = require('express').Router()

route.post('/', (req, res) => {
    let pass = "12341234"
    let oldPassword = req.body.oldPassword
    let newPassword = req.body.newPassword
    if (oldPassword === pass) {
        pass = newPassword
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
