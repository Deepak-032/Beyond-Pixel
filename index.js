const express = require('express');
const fileUpload = require('express-fileupload')
const cors = require('cors');

const app = express()
const APP_PORT = process.env.PORT || 3333

app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/verify', require('./routes/verify'))
app.use('/change', require('./routes/change'))
app.use('/upload', require('./routes/upload'))
app.use('/uploadData', require('./routes/upload'))

app.listen(APP_PORT, () => {
    console.log("server started at http://localhost:" + APP_PORT + "/")
})